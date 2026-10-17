const IMG={
 "hero": "assets/hero.jpg",
 "waterfall": "assets/waterfall.jpg",
 "durga": "assets/durga.jpg",
 "monastery": "assets/monastery.jpg",
 "balakumari": "assets/balakumari.jpg",
 "beach": "assets/beach.jpg",
 "tampara": "assets/tampara.jpg",
 "chai": "assets/chai.jpg",
 "crew": "assets/crew.jpg",
 "party": "assets/party.jpg"
};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$('[data-img]').forEach(e=>e.src=IMG[e.dataset.img]);
// stats
const S=[['Weekend',2,'','Days Together','48 hours of pure mountain, forest & coastal exploration.'],['The Crew',6,'','Friends Aboard','One shared group chat, now living the journey for real.'],['Tough Ride',1,'','Mahindra Bolero','The ultimate rugged machine for Eastern Ghat mountain ghats.'],['Calculated Loop',712,'km','Total Road Loop','Grounded in actual Odisha roads. Final leg ETAs to verify.'],['Curated',9,'','Planned Stops','From 1,501 m summit to sea level, every chapter counts.']];
// destinations
const M='https://www.google.com/maps/search/?api=1&query=';
const D=[
['hero','Stop 01 · 1,501m Summit','“Pahada upare sunrise — Agala prakar scene!”','Mahendragiri Peak','Stand above rolling cloud waves as golden sunrise breaks over the ancient Pandava stone shrines atop Odisha’s sacred mountain.','📍 ~285 km from Bhubaneswar','⏱ ~6h 30m drive','⛰️ Ghat ascent to verify',M+'Mahendragiri+Peak+Odisha','center 60%'],
['waterfall','Stop 02 · Forest Cascade','“Pani thanda, man pura fresh!”','Gandahati Waterfall','A wide roaring curtain of cool mountain water spilling into boulder pools inside Gajapati’s lush evergreen sal forest.','📍 ~52 km from Mahendragiri','⏱ ~1h 45m drive','🌊 Forest gate entry',M+'Gandahati+Waterfall+Gajapati+Odisha','center'],
['durga','Stop 03 · Valley Detour','“Map ku off kari tike ghati road valey ra maja nanele habani!”','Durga Padu','A picturesque rural detour through southern Odisha valleys connecting the mountain foothills toward Chandragiri plains.','📍 ~24 km from Gandahati','⏱ ~45 min drive','⚠️ Exact coordinates to verify',M+'Durga+Padu+Gajapati+Odisha','center'],
['balakumari','Stop 04 · Basecamp Recharge','“Ohh pura tired, Are kichi byabasta heichi na nai ba!”','Overnight Stay (Chandragiri Hub)','Journey rest stop, not sightseeing. Park the Bolero, dust off hiking boots, enjoy hot dinner, and recharge before Day 2.','📍 ~38 km from Durga Padu','⏱ ~1h 15m drive','🏡 Guesthouse / Panthanivas',M+'resorts+and+hotels+near+Chandragiri+Odisha','left 60%'],
['monastery','Stop 05 · Mini Tibet','“Shanti ta dekha bhai, sabu tension gayab!”','Jirang Buddhist Monastery','South Asia’s largest Buddhist seat, featuring magnificent Tibetan architecture, vibrant wall murals, and fluttering prayer flags.','📍 ~12 km from Stay','⏱ ~25 min drive','⛩️ Hours: 8:00 AM – 5:00 PM',M+'Padmasambhava+Mahavihara+Monastery+Jirang+Odisha','center 40%'],
['balakumari','Stop 06 · Chikitigad Shrine','“244 sidhi chadhila pare view pura jabardast!”','Balakumari Temple','Ascend 244 stone steps to Maa Balakumari Temple for sweeping panoramic views across rolling green hills and paddy fields.','📍 ~58 km from Jirang','⏱ ~1h 40m drive','🛕 244 Steps Climb',M+'Balakumari+Temple+Chikiti+Ganjam+Odisha','center'],
['tampara','Stop 07 · Freshwater Haven','“Boating aau kacha nadiya pani — Pura chill!”','Tampara Lake','Stroll along the 300-hectare freshwater lake promenade, enjoy speedboating, and drink fresh coconut in the afternoon breeze.','📍 ~42 km from Balakumari','⏱ ~1h 10m drive','⛵ Promenade & Boating',M+'Tampara+Lake+Chhatrapur+Odisha','center 55%'],
['beach','Stop 08 · Coastal Sunset','“Samudra thanda hawa dekhi sabu thaka gayab!”','Gopalpur Beach','Celebrate the coastal finale with crashing waves, golden sands, colonial lighthouse views, and the ultimate crew sunset photo.','📍 ~26 km from Tampara','⏱ ~45 min drive','🌅 Sunset Golden Hour',M+'Gopalpur+Beach+Odisha','center 80%'],
['durga','Stop 09 · Homebound NH16','“Trip sarigala, kintu memories sabudin rahiba!”','Bhubaneswar Return','Point the Bolero north along NH16, trading road trip playlists and reliving two unforgettable days with the best crew.','📍 ~175 km from Gopalpur','⏱ ~3h 30m drive','🛣️ NH16 Highway','https://www.google.com/maps/dir/?api=1&origin=Gopalpur+Beach%2C+Odisha&destination=Bhubaneswar%2C+Odisha','center 90%']];
$('#cards').innerHTML=D.map((d,i)=>`<article class="dc" id="dest-${i+1}"><img data-img="${d[0]}" style="object-position:${d[9]}" alt="${d[3]}"><div class="tb"><span>${d[1]}</span><span class="o">${d[2]}</span></div><div class="dg"><h3>${d[3]}</h3><p>${d[4]}</p><div class="ft"><div><span>${d[5]}</span><span>${d[6]}</span><span>${d[7]}</span></div><a href="${d[8]}" target="_blank" rel="noopener">View Photos On Maps ↗</a></div></div></article>`).join('');
$$('[data-img]').forEach(e=>e.src=IMG[e.dataset.img]);
if(matchMedia('(hover:hover)').matches)$$('.dc').forEach(c=>{const h=c.querySelector('h3');c.addEventListener('mouseenter',()=>{h.style.transform='translateY('+-(h.getBoundingClientRect().top-c.getBoundingClientRect().top-28)+'px)'});c.addEventListener('mouseleave',()=>h.style.transform='')});
$('#itinerary').style.setProperty('--bgimg','url('+IMG.crew+')');
// itinerary
const I=[[['11:00 PM (Night 0)','Midnight Meetup in Bhubaneswar','NH16 southbound toward Mahendragiri.','285 km'],['05:15 AM – 09:00 AM','Mahendragiri Peak & Ancient Pandava Temples','Summit sunrise above the clouds.','3.5 hrs'],['09:15 AM – 10:15 AM','Traditional Odia Breakfast in Foothills','Chakuli Pitha, Chena Poda, Chai.','1 hr'],['11:00 AM – 01:00 PM','Gandahati Waterfall Exploration','Boulder pools inside the sal forest.','52 km · 2 hrs'],['01:45 PM – 03:30 PM','Durga Padu Valley Pause & Country Lunch','Odia thali lunch in the valley.','24 km · verify location'],['05:30 PM Onwards','Overnight Stay Check-in & Evening Campfire','Chandragiri valley, hot dinner and rest.','38 km']],
[['08:00 AM – 10:30 AM','Jirang Buddhist Monastery','Padmasambhava Mahavihara, Mini Tibet.','12 km · 2 hrs'],['11:30 AM – 01:00 PM','Balakumari Temple, Chikitigad','Climb 244 steps for the view.','58 km · 1.5 hrs'],['02:30 PM – 04:00 PM','Tampara Lake & Promenade','Speedboats and the lakeside promenade.','42 km · 1.5 hrs'],['04:45 PM – 06:45 PM','Gopalpur-on-Sea Sunset & Lighthouse','Sea breeze, sunset, crew photo.','26 km · 2 hrs'],['07:00 PM – 10:30 PM','Return Journey to Bhubaneswar','Chilika dhaba dinner, safe return.','175 km']]];
I.forEach((d,i)=>$('#tl'+i).insertAdjacentHTML('beforeend',d.map(x=>`<div class="it"><span class="t">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[3]}</small></div>`).join('')));
const fillTl=()=>{const t=$$('.tl:not([hidden])')[0],r=t.getBoundingClientRect();t.querySelector('.fill').style.height=Math.max(0,Math.min(r.height-30,innerHeight*.7-r.top))+'px'};addEventListener('scroll',fillTl,{passive:true});
const rv=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('in',e.isIntersecting)),{rootMargin:'-6% 0px -10% 0px'});$$('.it').forEach(x=>rv.observe(x));
$$('.tl').forEach(t=>t.querySelector('.fill').style.height='0');
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&fillTl()),{threshold:.2}).observe($('#tl0'));
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));$$('.tl').forEach((t,i)=>{t.hidden=i!=b.dataset.d;t.querySelector('.fill').style.height='0'});setTimeout(fillTl,60)});
// route
const road=$('#road'),L=road.getTotalLength(),P=[[110,45,'Mahendragiri Peak'],[250,130,'Gandahati Waterfall'],[330,215,'Durga Padu (Verify)'],[205,305,'Night 1 Stay'],[225,385,'Jirang Monastery'],[365,450,'Balakumari Temple'],[340,500,'Tampara Lake'],[415,530,'Gopalpur Beach'],[80,525,'Bhubaneswar Return']];
const stopT=P.map(p=>{let b=0,bd=1e9;for(let l=0;l<=L;l+=2){const q=road.getPointAtLength(l),d=(q.x-p[0])**2+(q.y-p[1])**2;if(d<bd){bd=d;b=l}}return b/L});
$('#nodes').innerHTML=P.map((p,i)=>`<g class="node" data-i="${i}" role="button" tabindex="0" onclick="goDest(${i})" onkeydown="if(event.key=='Enter')goDest(${i})"><circle cx="${p[0]}" cy="${p[1]}" r="12"/><text x="${p[0]}" y="${p[1]+3.5}">${i+1}</text><text class="lb" x="${p[0]+(p[0]>300?-16:17)}" style="text-anchor:${p[0]>300?'end':'start'}" y="${p[1]+3.5}">${p[2]}</text></g>`).join('');
const prog=$('#prog');prog.style.strokeDasharray=L;
function goDest(i){$('#dest-'+(i+1)).scrollIntoView({behavior:'smooth',block:'center'})}
// scroll
let cur=0,tgt=0,hp=0,hpT=0;
function onScroll(){const r=$('#route'),rb=r.getBoundingClientRect(),h=r.offsetHeight-innerHeight+76;tgt=Math.min(1,Math.max(0,-rb.top/h));const ht=$('#heroTrack'),hh=ht.offsetHeight-innerHeight;hpT=Math.min(1,Math.max(0,scrollY/hh));$('#siteTopbar').classList.toggle('sc',scrollY>40)}

const hxE={img:$('#heroImg'),fg:$('#heroFg'),sun:$('#sun'),c:$('#hx'),sc:$('.scrl'),mist:$('#mist')};let mx=0,my=0,mxs=0,mys=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
function heroFx(){mxs+=(mx-mxs)*.05;mys+=(my-mys)*.05;const p=hp,e=1-Math.pow(1-p,2);
hxE.img.style.transform=`translate3d(${mxs*-12}px,${e*-70+mys*-6}px,0) scale(${1.03+.06*e})`;
hxE.fg.style.transform=`translate3d(${mxs*-30}px,${e*-200+mys*-16}px,0) scale(${1.03+.13*e})`;
hxE.sun.style.transform=`translate(50%,-50%) translate3d(${mxs*-8}px,${e*-50}px,0) scale(${1+.3*e})`;hxE.sun.style.opacity=.7+.3*p;
hxE.mist.style.transform=`translate3d(${mxs*20}px,${e*-90}px,0)`;
hxE.c.style.transform=`translate3d(0,${e*-90}px,0)`;hxE.c.style.opacity=Math.max(0,1-p*1.6);hxE.sc.style.opacity=Math.max(0,1-p*5)}
function tick(){cur+=(tgt-cur)*.08;hp+=(hpT-hp)*.08;
heroFx();$('#heroStage').style.setProperty('--hp',hp);
const pt=road.getPointAtLength(cur*L),a=road.getPointAtLength(Math.min(L,cur*L+2)),b=road.getPointAtLength(Math.max(0,cur*L-2));
$('#bolero').setAttribute('transform',`translate(${pt.x} ${pt.y}) rotate(${Math.atan2(a.y-b.y,a.x-b.x)*180/Math.PI})`);
prog.style.strokeDashoffset=L*(1-cur);
let k=0;stopT.forEach((t,i)=>{if(cur>=t-.01)k=i});
$$('.node').forEach((n,i)=>n.classList.toggle('act',i==k));
$('#hudLbl').textContent=`Stop ${String(k+1).padStart(2,'0')} / 09 · ${P[k][2]}`;$('#hudBar').style.width=cur*100+'%';$('#hudPct').textContent=Math.round(cur*100)+'%';
requestAnimationFrame(tick)}
addEventListener('scroll',onScroll,{passive:true});onScroll();tick();
// modal
const C=[['Bolero & Road Prep',['Tire pressures + spare wheel','Offline Google Maps cached','Coolant & oil check','Tow cable']],['Mahendragiri Trek Gear',['Trail hiking shoes','Headlamps / flashlights','Windcheater / fleece','2L water + ORS']],['Crew Roles & Safety',['Two designated rested drivers','Offline playlist','Emergency helplines (112, Paralakhemundi Hospital)']]];
$('#chk').innerHTML=C.map(c=>`<h4>${c[0]}</h4>`+c[1].map(x=>`<label><input type="checkbox">${x}</label>`).join('')).join('');
const openM=()=>{$('#modal').classList.add('open');$('#modal .x').focus()},closeM=()=>$('#modal').classList.remove('open');
$('#navCtaBtn').onclick=openM;$('#modal').onclick=e=>e.target.id=='modal'&&closeM();addEventListener('keydown',e=>e.key=='Escape'&&closeM());
// audio: bansuri-style flute over soft breeze
let ac,sess=null;
function noise(){const b=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;const q=ac.createBufferSource();q.buffer=b;q.loop=true;return q}
function startAudio(){ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
const bus=ac.createGain();bus.gain.value=0;bus.connect(ac.destination);bus.gain.setTargetAtTime(1,ac.currentTime,1.5);const src=[];
const n=noise(),f=ac.createBiquadFilter(),bg=ac.createGain(),l=ac.createOscillator(),lg=ac.createGain();f.type='lowpass';f.frequency.value=650;bg.gain.value=.07;l.frequency.value=.1;lg.gain.value=.05;l.connect(lg);lg.connect(bg.gain);l.start();n.connect(f);f.connect(bg);bg.connect(bus);n.start();src.push(n,l);
const fm=ac.createGain();fm.gain.value=.55;fm.connect(bus);
const len=ac.sampleRate*2.6,ir=ac.createBuffer(2,len,ac.sampleRate);for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
const cv=ac.createConvolver(),wet=ac.createGain();cv.buffer=ir;wet.gain.value=.55;fm.connect(cv);cv.connect(wet);wet.connect(bus);
[146.83,220].forEach(fr=>{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=fr;g.gain.value=.022;o.connect(g);g.connect(bus);o.start();src.push(o)});
const bn=noise(),bf=ac.createBiquadFilter(),bb=ac.createGain();bf.type='bandpass';bf.frequency.value=2400;bf.Q.value=.8;bb.gain.value=0;bn.connect(bf);bf.connect(bb);bb.connect(fm);bn.start();src.push(bn);
const SC=[293.66,329.63,369.99,440,493.88,587.33,659.25];let i=2,tm;
function note(fr,dur){const t=ac.currentTime,o=ac.createOscillator(),o2=ac.createOscillator(),e=ac.createGain(),g2=ac.createGain(),v=ac.createOscillator(),vg=ac.createGain();
o.frequency.value=fr;o2.frequency.value=fr*2;g2.gain.value=.1;v.frequency.value=5.2;vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(fr*.007,t+dur*.7);v.connect(vg);vg.connect(o.frequency);vg.connect(o2.frequency);
e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.32,t+.16);e.gain.setValueAtTime(.3,t+dur);e.gain.setTargetAtTime(0,t+dur,.25);
o.connect(e);o2.connect(g2);g2.connect(e);e.connect(fm);[o,o2,v].forEach(x=>{x.start(t);x.stop(t+dur+1.6)});
bb.gain.cancelScheduledValues(t);bb.gain.setValueAtTime(0,t);bb.gain.linearRampToValueAtTime(.02,t+.1);bb.gain.setTargetAtTime(0,t+dur,.2)}
function mel(){const d=.9+Math.random()*1.7;if(Math.random()>.14){i=Math.max(0,Math.min(6,i+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));note(SC[i],d)}tm=setTimeout(mel,(d+.15)*1000)}
mel();return{bus,src,stop(){clearTimeout(tm);bus.gain.setTargetAtTime(0,ac.currentTime,.4);setTimeout(()=>{src.forEach(x=>{try{x.stop()}catch(e){}});bus.disconnect()},1800)}}}
$('#breezeAudioBtn').onclick=()=>{const b=$('#breezeAudioBtn');if(sess){sess.stop();sess=null;b.classList.remove('on')}else{sess=startAudio();b.classList.add('on')}};
