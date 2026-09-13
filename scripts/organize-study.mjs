import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const readme=fs.readFileSync('README.md','utf8').replace(/^\uFEFF/,'');
if(readme.includes('## 폴더와 기록 방법'))throw Error('이미 정리된 README입니다. 기존 학습 기록 보호를 위해 중단합니다. 검증은 verify-study.mjs를 사용하세요.');
const cacheDir='.study-cache'; fs.mkdirSync(cacheDir,{recursive:true});
const decode=s=>s.replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ');
const plain=s=>decode(s.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const safe=s=>s.replace(/[<>:"/\\|?*]/g,'_').replace(/[. ]+$/,'');
const link=p=>p.split('/').map(s=>encodeURIComponent(s).replace(/\(/g,'%28').replace(/\)/g,'%29')).join('/');
let section=''; const items=[];
for(const line of readme.split(/\r?\n/)){
 if(line.startsWith('## '))section=line.slice(3);
 if(!/^\| \[[ xX]\]/.test(line))continue;
 const cells=line.split('|').slice(1,-1).map(s=>s.trim());
 const lesson=line.match(/\/lessons\/(\d+)/); const task=line.match(/\/skill_check_assignments\/(\d+)/);
 if(!lesson&&!task)continue;
 let group=section.startsWith('기초')?'기초':section.startsWith('입문')?'입문':section.startsWith('코딩테스트 고득점')?'고득점':section.startsWith('SQL 고득점')?'SQL':'과제테스트';
 const titleIndex=['고득점','SQL'].includes(group)?5:3;
 let title=cells[titleIndex];
 if(title.startsWith('['))title=title.slice(1,title.lastIndexOf(']('));
 const languages=group==='SQL'?['sql']:group==='과제테스트'?[section.includes('Python')?'python':'javascript']:['javascript','python'];
 items.push({line,cells,group,title,id:(lesson||task)[1],task:!!task,number:cells[2],category:['고득점','SQL'].includes(group)?cells[3]:'',languages,paths:{}});
}
async function get(item){
 const file=path.join(cacheDir,`${item.task?'task':'lesson'}-${item.id}.html`);
 if(fs.existsSync(file))return fs.readFileSync(file,'utf8');
 const url=`https://school.programmers.co.kr/${item.task?'skill_check_assignments/':'learn/courses/30/lessons/'}${item.id}`;
 for(let attempt=0;attempt<3;attempt++){
  try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)}); if(!r.ok)throw Error(`HTTP ${r.status}`); const h=await r.text();fs.writeFileSync(file,h);return h;}
  catch(e){if(attempt===2)throw e; await new Promise(r=>setTimeout(r,1000*(attempt+1)));}
 }
}
function extract(html){
 const body=html.match(/<div class="markdown solarized-dark">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/)?.[1]||'';
 const codes={};
 for(const m of html.matchAll(/<input\b[^>]*data-language="([^"]+)"[^>]*>/g)){
  const v=m[0].match(/\bvalue="([\s\S]*?)"/); if(v)codes[m[1]]=decode(v[1]);
 }
 const tables=[...body.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)].map(m=>{
  const rows=[...m[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(r=>[...r[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/g)].map(c=>plain(c[1]).replace(/\|/g,'&#124;'))).filter(r=>r.length);
  if(!rows.length)return '';
  return [rows[0],rows[0].map(()=> '---'),...rows.slice(1)].map(r=>'| '+r.join(' | ')+' |').join('\n');
 });
 const intro=plain(body.match(/<p>([\s\S]*?)<\/p>/)?.[1]||'');
 return {codes,tables,intro,body:!!body};
}
const results=new Map();let next=0,done=0;const failures=[];
await Promise.all(Array.from({length:3},async()=>{while(next<items.length){const item=items[next++];try{results.set(item,extract(await get(item)));}catch(e){failures.push({id:item.id,error:String(e)});results.set(item,{codes:{},tables:[],intro:'',body:false});}done++;if(done%40===0)console.log(`取得 ${done}/${items.length}`);}}));
let created=0,moved=0; const unsupported=[];
for(const item of items){
 const data=results.get(item);
 for(const lang of item.languages){
  const sub=item.group==='SQL'?`sql/고득점/${safe(item.category)}`:`${lang}/${item.group}${item.group==='고득점'?'/'+safe(item.category):''}`;
  const target=`${sub}/${item.number}${safe(item.title)}.md`; item.paths[lang]=target;
  fs.mkdirSync(sub,{recursive:true});
  const old=`${lang}/${item.number}${safe(item.title)}.md`;
  if(item.group==='기초'&&fs.existsSync(old)){
   if(fs.existsSync(target)&&fs.readFileSync(old,'utf8')!==fs.readFileSync(target,'utf8'))throw Error(`기존 파일 충돌: ${target}`);
   // Both paths are relative to the validated workspace; rename only individual study files.
   fs.renameSync(old,target);moved++;continue;
  }
  if(fs.existsSync(target))continue;
  const codeLang=lang==='python'?'python3':lang==='sql'?'mysql':lang;
  const url=`https://school.programmers.co.kr/${item.task?'skill_check_assignments/':'learn/courses/30/lessons/'}${item.id}${item.task?'':'?language='+codeLang}`;
  const out=[`# ${item.number.replace('_','.') } ${item.title}`,'',`[프로그래머스 원문](${url})`,'',`- 분류: ${item.category||item.group}`,`- 문제 번호: ${item.id}`,'','## 문제 안내',''];
  if(data.intro){const words=data.intro.split(/\s+/);out.push('> '+words.slice(0,10).join(' ')+(words.length>10?' …':''),'');}
  out.push('문제 조건·제한사항·상세 설명은 위 공식 원문에서 확인합니다. 아래는 풀이를 기록할 학습 노트입니다.','');
  if(data.tables.length)out.push('## 입력·출력 / 데이터 표','',...data.tables.flatMap(t=>[t,'']));
  out.push(item.task?'## 과제 작업':'## 문제 코드','');
  if(item.task)out.push('원문에서 제공하는 프로젝트와 실행 지침을 사용합니다. 로그인이나 시작 버튼이 필요한 경우 원문에서 진행합니다. 공개 확인 전에는 파일 구성과 정답을 추측하지 않습니다.','');
  else if(data.codes[codeLang])out.push('```'+(lang==='sql'?'sql':lang),data.codes[codeLang].trim(),'```','');
  else {out.push('선택 언어의 시작 코드를 확인하지 못했습니다. 원문의 지원 언어를 먼저 확인합니다.','');unsupported.push({id:item.id,lang});}
  if(lang==='sql')out.push('사용 DBMS: MySQL. Oracle 지원 여부는 원문 언어 선택 목록에서 확인합니다.','');
  out.push('## 내가 푼 답','',`<!-- ${item.task?'구현 내용과 실행 방법':'직접 푼 코드'}를 기록합니다. -->`,'','## 정리','','<!-- 배운 문법, 실수, 복잡도 또는 SQL 실행 결과를 기록합니다. -->','');
  if(lang==='python')out.push('## JavaScript와 비교','','<!-- 풀이 후 사용한 문법·자료형·연산자의 차이를 기록합니다. -->','');
  fs.writeFileSync(target,out.join('\n'));created++;
 }
}
let updated=readme;
for(const item of items){
 const c=[...item.cells];
 const labels=lang=>`[문제 노트](${link(item.paths[lang])})`;
 if(item.group==='SQL'){
  c[5]=`[${item.title}](${link(item.paths.sql)})`;
  const codes=results.get(item).codes;
  c[6]=codes.mysql?`[풀기](https://school.programmers.co.kr/learn/courses/30/lessons/${item.id}?language=mysql)`:'원문 확인';
  c[7]=codes.oracle?`[풀기](https://school.programmers.co.kr/learn/courses/30/lessons/${item.id}?language=oracle)`:'지원 미확인';
 }else if(item.task){c[3]=`[${item.title}](${link(item.paths[item.languages[0]])})`;}
 else {const idx=item.group==='고득점'?6:4;if(item.group!=='고득점')c[3]=item.title;c[idx]=labels('javascript');c[idx+1]=labels('python');}
 updated=updated.replace(item.line,'| '+c.join(' | ')+' |');
}
const guide=`\n## 폴더와 기록 방법\n\n- JavaScript·Python: 기초 / 입문 / 고득점(알고리즘별) / 과제테스트\n- SQL: 고득점 아래 SELECT, SUM·MAX·MIN, GROUP BY, IS NULL, JOIN, String·Date로 구분\n- 문제 노트를 먼저 만들어 두었으며 완료 체크는 직접 푼 뒤에만 변경합니다.\n- 새 노트에는 원문 링크·짧은 도입 인용·예시 데이터 표·확인 가능한 시작 코드가 있습니다. 상세 지문과 제한사항은 원문을 확인합니다.\n- 기존 1~3번 풀이와 설명은 보존했습니다. 새 문제의 정답은 미리 채우지 않았습니다.\n- 현재 완료·완료일 칸은 JS/Python 공통입니다. 한 언어만 풀었으면 날짜 칸에 언어도 적을 수 있습니다.\n\n`;
if(!updated.includes('## 폴더와 기록 방법'))updated=updated.replace('## 바로가기',guide+'## 바로가기');
fs.writeFileSync('README.md',updated);
fs.writeFileSync(path.join(cacheDir,'report.json'),JSON.stringify({items:items.length,created,moved,failures,unsupported},null,2));
console.log(JSON.stringify({items:items.length,created,moved,failures,unsupported}));
