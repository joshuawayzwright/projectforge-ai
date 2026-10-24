'use strict';
const KEY='pforge-study-cards-v1', $=id=>document.getElementById(id);
let entries=[],editId=null,dueOnly=false;
const today=()=>new Date().toISOString().slice(0,10);
function notify(text){$('message').textContent=text}
function valid(x){return x&&typeof x==='object'&&typeof x.id==='string'&&typeof x.deck==='string'&&typeof x.question==='string'&&typeof x.answer==='string'&&typeof x.due==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x.due)&&Number.isInteger(x.interval)&&x.interval>=0&&x.interval<=365&&x.deck.length<=60&&x.question.length<=600&&x.answer.length<=1500}
function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x.filter(valid).slice(0,500):[]}catch{return []}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(entries))}catch{notify('Storage unavailable; export a backup now.')}}
function elt(tag,text,cls){const n=document.createElement(tag);n.textContent=text;if(cls)n.className=cls;return n}
function btn(label,action,cls='secondary'){const b=elt('button',label,cls);b.type='button';b.addEventListener('click',action);return b}
function addDays(n){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}
function reset(){editId=null;$('record-form').reset();$('form-heading').textContent='Create new';$('save-button').textContent='Save'}
function render(){const q=$('search').value.toLowerCase().trim(),list=$('list');list.replaceChildren();$('count').textContent=entries.length;$('due-only').setAttribute('aria-pressed',String(dueOnly));$('due-only').textContent=dueOnly?'Show all cards':'Show due only';
 const matches=entries.filter(x=>(x.deck+' '+x.question+' '+x.answer).toLowerCase().includes(q)&&(!dueOnly||x.due<=today())).sort((a,b)=>a.due.localeCompare(b.due));
 if(!matches.length)list.append(elt('p','No matching cards.'));
 for(const x of matches){const article=elt('article','','item');article.append(elt('span',x.deck,'pill'),elt('h3',x.question),elt('p',`Next review: ${x.due} · Interval: ${x.interval} days`,'meta'));
 const reveal=elt('p','Answer hidden. Tap Reveal to check yourself.');const actions=elt('div','','actions');let visible=false;
 actions.append(btn('Reveal answer',()=>{visible=!visible;reveal.textContent=visible?x.answer:'Answer hidden. Tap Reveal to check yourself.'}));
 if(x.due<=today())for(const [label,days] of [['Again',0],['Good',Math.max(1,x.interval?x.interval*2:1)],['Easy',Math.max(3,x.interval?x.interval*3:3)]])actions.append(btn(label,()=>{x.interval=Math.min(365,days);x.due=addDays(days);save();render();notify(`Scheduled ${label.toLowerCase()} review`) }));
 actions.append(btn('Edit',()=>{editId=x.id;$('deck').value=x.deck;$('question').value=x.question;$('answer').value=x.answer;$('form-heading').textContent='Edit card';$('save-button').textContent='Update';window.scrollTo({top:0,behavior:'smooth'})}),btn('Delete',()=>{if(!confirm('Delete this card?'))return;entries=entries.filter(y=>y.id!==x.id);save();render();notify('Card deleted')},'danger'));
 article.append(reveal,actions);list.append(article)} }
$('record-form').addEventListener('submit',e=>{e.preventDefault();const deck=$('deck').value.trim(),question=$('question').value.trim(),answer=$('answer').value.trim();if(!deck||!question||!answer)return;if(editId){const x=entries.find(x=>x.id===editId);if(x){x.deck=deck;x.question=question;x.answer=answer}}else{if(entries.length>=500)return notify('Maximum 500 cards; export and archive older cards');entries.unshift({id:crypto.randomUUID(),deck,question,answer,interval:0,due:today()})}save();reset();render();notify('Card saved')});
$('reset-button').addEventListener('click',reset);$('search').addEventListener('input',render);$('due-only').addEventListener('click',()=>{dueOnly=!dueOnly;render()});
function download(name,text){const url=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)}
$('backup').addEventListener('click',()=>download('projectforge-study-cards.json',JSON.stringify({version:1,entries},null,2)));
$('restore').addEventListener('click',()=>$('restore-file').click());$('restore-file').addEventListener('change',async e=>{const file=e.target.files?.[0];try{if(!file)return;if(file.size>3_000_000)throw Error('Backup too large');const data=JSON.parse(await file.text());if(data?.version!==1||!Array.isArray(data.entries)||data.entries.length>500||!data.entries.every(valid))throw Error('Invalid backup');if(!confirm('Replace all saved cards with this backup?'))return;entries=data.entries.map(x=>({id:x.id.slice(0,100),deck:x.deck,question:x.question,answer:x.answer,interval:x.interval,due:x.due}));save();reset();render();notify('Cards restored')}catch(err){notify(err.message)}finally{e.target.value=''}});
entries=load();render();
