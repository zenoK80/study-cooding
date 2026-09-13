import fs from 'node:fs';
import path from 'node:path';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):e.name.endsWith('.md')?[path.join(d,e.name)]:[]);
const decode=s=>s.replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const files=['javascript','python','sql'].flatMap(walk);
let next=0,done=0;const failed=[],unsupported=[];
await Promise.all(Array.from({length:3},async()=>{while(next<files.length){
 const file=files[next++];let text=fs.readFileSync(file,'utf8');const m=text.match(/https:\/\/school.programmers.co.kr\/learn\/courses\/30\/lessons\/(\d+)\?language=(\w+)/);if(!m)continue;
 const [url,id,lang]=m;const cache=`.study-cache/lesson-${id}-${lang}.html`;
 try{
  let html;if(fs.existsSync(cache))html=fs.readFileSync(cache,'utf8');else{
   const r=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error(r.status);html=await r.text();fs.writeFileSync(cache,html);
  }
  const input=[...html.matchAll(/<input\b[^>]*>/g)].find(x=>x[0].includes(`data-language="${lang}"`));
  const code=input?.[0].match(/\bvalue="([\s\S]*?)"/)?.[1];
  if(text.includes('선택 언어의 시작 코드를 확인하지 못했습니다.')){
   const replacement=code?'```'+(lang==='python3'?'python':lang==='mysql'?'sql':lang)+'\n'+decode(code).trim()+'\n```':'이 문제는 요청한 언어의 시작 코드가 제공되지 않습니다. 원문에서 지원 언어를 선택합니다.';
   text=text.replace('선택 언어의 시작 코드를 확인하지 못했습니다. 원문의 지원 언어를 먼저 확인합니다.',replacement);fs.writeFileSync(file,text);
  }
  if(!code)unsupported.push({file,id,lang});
 }catch(e){failed.push({file,error:String(e)});}
 done++;if(done%100===0)console.log(`언어 확인 ${done}`);
}}));
// The SQL language menu is the source of truth, not just the currently selected editor.
let readme=fs.readFileSync('README.md','utf8');
readme=readme.replace(/\]\(((?:javascript|python|sql)\/[^\n]*?\.md)\)/g,(_,p)=>']('+p.replace(/\(/g,'%28').replace(/\)/g,'%29')+')');
readme=readme.split(/\r?\n/).map(line=>{
 if(!line.includes('sql%2F')&&!line.includes('(sql/'))return line;
 const local=line.match(/\]\((sql\/[^)]+)\)/)?.[1];if(!local)return line;
 const text=fs.readFileSync(decodeURIComponent(local),'utf8');const id=text.match(/문제 번호: (\d+)/)?.[1];const html=fs.readFileSync(`.study-cache/lesson-${id}.html`,'utf8');
 const cells=line.split('|');
 const mysql=`https://school.programmers.co.kr/learn/courses/30/lessons/${id}?language=mysql`;
 cells[cells.length-3]=` [풀기](${mysql}) `;
 const oracle=html.includes('language=oracle')||html.includes('value="oracle"');
 cells[cells.length-2]=oracle?` [풀기](${mysql.replace('mysql','oracle')}) `:' 미지원 ';
 return cells.join('|');
}).join('\n');
fs.writeFileSync('README.md',readme);
const broken=[];
for(const file of ['README.md',...files]){for(const m of fs.readFileSync(file,'utf8').matchAll(/\]\(([^)]+)\)/g)){
 const href=m[1];if(/^(https?:|#)/.test(href))continue;
 if(!fs.existsSync(path.resolve(path.dirname(file),decodeURIComponent(href))))broken.push({file,href});
}}
console.log(JSON.stringify({files:files.length,failed,unsupported,broken}));
fs.writeFileSync('.study-cache/validation.json',JSON.stringify({files:files.length,failed,unsupported,broken},null,2));
