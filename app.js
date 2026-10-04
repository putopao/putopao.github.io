'use strict';
const projects = [
 {id:'search',category:'program',name:'SEO & search program',role:'Project lead · InLife Benefits',theme:'search',word:'Be easier<br>to find.',coverLabel:'SEO + GEO',caption:'Search, website content, and cross-team delivery',context:'A company-wide search program covering SEO and generative engine optimization, which supports visibility in AI-generated answers.',contribution:'I lead the program and coordinate the agency, web development, IT, Sales, and Product teams.',tasks:['Coordinate website audits, keyword research, and technical SEO work.','Plan content updates and connect them to the wider marketing goals.','Keep agency deliverables, approvals, and project timelines moving.','Review search and website reporting to guide the next steps.'],focus:'A connected program, from the website and its content to the people responsible for delivery.',skills:['SEO coordination','Website content','Agency management','Reporting']},
 {id:'eos',category:'program',name:'Expert Opinion Series',role:'Content & production coordination · InLife Benefits',theme:'eos',word:'Expert voices.<br>Clear content.',coverLabel:'THOUGHT LEADERSHIP',caption:'From topic planning to interviews and publishing',context:'A recurring health content series with doctors, nutritionists, and other health professionals, built for blogs, video, webinars, and social media.',contribution:'I develop topics, coordinate speakers and production, and turn expert information into content readers can follow.',tasks:['Research topics and prepare project and speaker briefs.','Coordinate speaker sourcing, agreements, and interview preparation.','Develop questions, scripts, blog copy, and supporting posts.','Review edits and coordinate publishing across channels.'],focus:'The work connects research, expert input, writing, production, and publishing in one repeatable content process.',skills:['Research','Interview preparation','Health writing','Production coordination'],link:'https://youtu.be/PB0u-NTPJ2U',linkLabel:'Watch the rabies interview'},
 {id:'wellness',category:'program',name:'Wellness Caravan',role:'Planning & activation support · InLife Benefits',theme:'wellness',images:[{src:'wellness-team.webp',alt:'InLife Benefits team in front of the branded backdrop at the FedEx Wellness Caravan',caption:'Team photo at the FedEx Wellness Caravan in Clark, March 2026.'},{src:'wellness-booth.webp',alt:'InLife Benefits team at the Caravan booth with marketing materials and giveaways',caption:'The InLife Benefits booth, with branded materials and employee engagement activities.'},{src:'wellness-engagement.webp',alt:'Employees gathering around wellness activity stations at the FedEx event',caption:'Employee engagement at the FedEx Wellness Caravan.'},{src:'wellness-partners.webp',alt:'Wellness partner stations inside the FedEx workplace',caption:'Partner stations brought wellness services into the client workplace.'}],word:'Bring care<br>closer.',coverLabel:'CLIENT ENGAGEMENT',caption:'On-site coordination, partners, and client experience',context:'The first client Wellness Caravan in Clark brought wellness activities into a client workplace.',contribution:'I helped plan and deliver the activation, coordinating the marketing work and event requirements with the teams involved.',tasks:['Support activation planning and client requirements.','Coordinate partners, branding, marketing materials, and logistics.','Help connect the on-site experience to client engagement.'],focus:'We delivered the first activation without an event budget. It led to more client requests, as recorded in my CV.',skills:['Event coordination','Client engagement','Partner coordination','Resource planning']},
 {id:'restart',category:'program',name:'RESTART / brand transition',role:'Brand transition support · InLife Benefits',theme:'restart',images:[{src:'restart-branding.webp',alt:'InLife Benefits branded event displays at the RESTART venue',caption:'Branding and event setup at RESTART, the InLife Benefits brand launch.'},{src:'restart-stage.webp',alt:'A speaker addressing attendees from the RESTART event stage',caption:'A stage presentation during the RESTART launch event.'},{src:'restart-conversations.webp',alt:'Guests speaking together at the RESTART event',caption:'Guest conversations during the RESTART launch event.'}],word:'A new name.<br>A clear message.',coverLabel:'BRAND COMMUNICATION',caption:'Generali Philippines to InLife Benefits',context:'The transition from Generali Philippines to InLife Benefits involved updating how the company appeared and communicated across channels.',contribution:'I supported the transition across website content, social media, campaigns, marketing materials, and customer communication.',tasks:['Develop and revise content for the new brand.','Coordinate communication and marketing materials across channels.','Work with internal teams and partners on updates and approvals.'],focus:'My contribution focused on content and coordinated delivery across the brand’s touchpoints.',skills:['Brand communication','Content updates','Cross-team coordination']},
 {id:'gcash',category:'campaign',name:'GCash',role:'Social media copywriting · Proper Digital',theme:'gcash',images:[{src:'gcash-newyear.webp',alt:'GCash New Year sparkler post with published caption',caption:'New Year campaign copy. My contribution: caption writing.'},{src:'gcash-credit.webp',alt:'GCash holiday GCredit post with published promotional caption',caption:'Holiday GCredit messaging. My contribution: caption writing.'},{src:'gcash-grid.webp',alt:'GCash Christmas campaign Instagram content grid',caption:'Campaign archive: the published social media grid. Visual design and publishing were team responsibilities.'}],context:'Consumer promotions and seasonal social content, including Christmas, New Year, and GCredit messaging.',contribution:'My role was copywriting. I wrote captions that translated the campaign message into clear, concise social content.',tasks:['Write consumer-facing promotional captions.','Adapt the message to GCash’s tone and the social platform.','Connect seasonal ideas to the campaign message.'],skills:['Consumer copy','Brand voice','Promotional messaging']},
 {id:'missworld',category:'campaign',name:'Miss World Philippines 2019',role:'Content Specialist & Copywriter · Proper Digital',theme:'missworld',images:[{src:'missworld-post.webp',alt:'Miss World Philippines Instagram campaign grid',caption:'Published Instagram grid from the event campaign.'},{src:'missworld-grid.webp',alt:'Published Miss World Philippines pageant result post',caption:'A published pageant result post from the account archive.'}],context:'Digital content and social media for Miss World Philippines 2019, from promotional content through event updates.',contribution:'I handled content and copy, supporting social media execution and audience engagement during the event cycle.',tasks:['Develop campaign copy and promotional content.','Support digital publishing and audience engagement.','Work across announcements, event updates, and result posts.'],skills:['Event content','Social media execution','Copywriting']},
 {id:'mrworld',category:'campaign',name:'Mr. World 2019 International',role:'Head Digital Content Specialist & Copywriter · Proper Digital',theme:'event',word:'Live moments.<br>Planned content.',coverLabel:'INTERNATIONAL EVENT',caption:'Digital content leadership & campaign copy',context:'Digital content for Mr. World 2019 International, combining event copy with planning and publishing coordination.',contribution:'I led digital content planning and campaign copy development, and managed publishing schedules, content execution, and campaign resources.',tasks:['Lead content planning and campaign copy.','Manage the publishing schedule and content execution.','Coordinate campaign resources during the event.'],focus:'This role combined hands-on writing with ownership of the wider digital content workflow.',skills:['Content leadership','Event marketing','Publishing coordination']},
 {id:'koka',category:'campaign',name:'KOKA Philippines',role:'Content Lead · Proper Digital',theme:'koka',images:[{src:'koka-post.webp',alt:'KOKA Philippines product arrival post and published caption',caption:'Product arrival messaging for KOKA Philippines.'},{src:'koka-product.webp',alt:'KOKA Philippines Mercury Drug retail availability post',caption:'Retail availability messaging for Philippine consumers.'}],context:'Early content for KOKA’s Philippine social media presence, including product messaging and retail availability.',contribution:'I was the content lead. I wrote captions and shaped the local content direction during the early stage of the account.',tasks:['Write product-focused social captions.','Set the direction for how the content would communicate.','Help establish a local tone for Philippine consumers.'],skills:['Content direction','Brand voice','Product copy']},
 {id:'wallstreet',category:'campaign',name:'Wall Street PH',role:'Social copy & content direction · Proper Digital',theme:'wallstreet',images:[{src:'wallstreet.webp',alt:'Published Wall Street PH clothing promotion with caption',caption:'Published retail promotion. My contribution: caption writing and content direction.'}],context:'Retail social content communicating clothing promotions to consumers.',contribution:'I wrote captions and handled the direction of how the content would be presented.',tasks:['Write clear promotional captions.','Shape content direction around the offer and brand tone.'],skills:['Retail copy','Promotional content','Content direction']},
 {id:'arrow',category:'campaign',name:'Arrow',role:'Social copy, content direction & shoot support · Proper Digital',theme:'arrow',images:[{src:'arrow-shoot.webp',alt:'Polo operating a camera on a tripod during an Arrow ad shoot',caption:'Behind the scenes at an Arrow ad shoot. I helped direct the shoot alongside my copywriting and content direction work.'}],word:'Brand voice.<br>Everyday style.',coverLabel:'FASHION & LIFESTYLE',caption:'Social media captions & content direction',context:'Social content and ad shoot support for Arrow, a fashion and lifestyle account at Proper Digital Marketing.',contribution:'I wrote captions, shaped the content direction, and helped direct an Arrow ad shoot.',tasks:['Write social media copy for the brand.','Shape content direction and audience messaging.','Help direct an Arrow ad shoot.'],focus:'The shoot photo shows my involvement in the production of an Arrow ad.',skills:['Fashion copy','Content direction','Shoot direction support']}
];
const grid=document.querySelector('#project-grid');
const projectDialog=document.querySelector('#project-dialog');
let currentGallery=[]; let galleryIndex=0;
function renderProjects(category){
 grid.innerHTML=projects.filter(p=>p.category===category).map((p,i)=>`<button type="button" class="project-card reveal" data-project="${p.id}" style="animation-delay:${Math.min(i,3)*.055}s" aria-label="View ${p.name} project"><div class="project-cover ${p.images?'cover-image cover-'+p.theme:'cover-program theme-'+p.theme}">${p.images?`<img src="assets/${p.images[0].src}" width="828" height="1252" loading="lazy" alt="${p.images[0].alt}"><span class="cover-pill">View gallery</span>`:`<span class="cover-category">${p.coverLabel}</span><span class="cover-serial">0${i+1}</span><div class="cover-word">${p.word}</div><span class="cover-caption">${p.caption}</span>`}</div><div class="project-meta"><h3>${p.name}</h3><span class="plus" aria-hidden="true">+</span></div><p class="project-role">${p.role}</p></button>`).join('');
 document.querySelector('#work-context').textContent=category==='program'?'InLife Benefits · current work':'Proper Digital Marketing · selected accounts';
}
renderProjects('program');
function openDialog(dialog){dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;}
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 currentGallery=p.images||[];galleryIndex=0;
 document.querySelector('#project-type').textContent=p.category==='program'?'MARKETING PROGRAM':'SOCIAL & BRAND COPY';
 const text=`<div class="detail-text"><h3>Context</h3><p>${p.context}</p><h3>My role</h3><p>${p.contribution}</p><h3>Work involved</h3><ul>${p.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>${p.focus?`<h3>Project focus</h3><p>${p.focus}</p>`:''}${p.link?`<a class="button dark" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkLabel}</a>`:''}<div class="tag-list">${p.skills.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
 const glance={search:['Collaboration','Agency · Web development · IT · Sales · Product'],eos:['Content formats','Blog · Video · Webinar · Social media'],wellness:['Setting','Client workplace · Clark'],restart:['Touchpoints','Website · Social media · Campaigns · Marketing materials · Customer communication'],mrworld:['Scope','Content planning · Publishing schedules · Campaign resources'],arrow:['Scope','Caption writing · Content direction']};
 const gallery=currentGallery.length?`<div class="project-gallery"><div class="gallery-stage"><img id="gallery-image" src="assets/${p.images[0].src}" alt="${p.images[0].alt}"></div>${p.images.length>1?`<div class="gallery-controls"><button id="gallery-prev" type="button" aria-label="Previous image">Previous</button><span id="gallery-count" role="status">1 / ${p.images.length}</span><button id="gallery-next" type="button" aria-label="Next image">Next</button></div>`:''}${p.images.length>1?`<div class="gallery-thumbnails" role="group" aria-label="Choose a project image">${p.images.map((img,i)=>`<button type="button" data-gallery-index="${i}" aria-pressed="${i===0}" aria-label="View image ${i+1}: ${img.caption}"><img src="assets/${img.src}" loading="lazy" alt=""></button>`).join('')}</div>`:''}<p id="gallery-caption" class="gallery-caption">${p.images[0].caption}</p></div>`:`<div class="project-summary-panel"><div class="eyebrow">AT A GLANCE</div><h3>${glance[p.id][0]}</h3><p>${glance[p.id][1]}</p><a class="small-link" href="assets/Polo-Enriquez-CV-2026.pdf" target="_blank" rel="noopener">View my CV</a></div>`;
 document.querySelector('#project-content').innerHTML=`<div class="project-detail"><h2 id="project-title">${p.name}</h2><p class="detail-role">${p.role}</p><div class="detail-layout">${text}${gallery}</div></div>`;
 openDialog(projectDialog);
 history.replaceState(null,'','#project-'+p.id);
}
function changeGallery(step){if(currentGallery.length<2)return;galleryIndex=(galleryIndex+step+currentGallery.length)%currentGallery.length;const item=currentGallery[galleryIndex];const img=document.querySelector('#gallery-image');img.src='assets/'+item.src;img.alt=item.alt;document.querySelector('#gallery-count').textContent=`${galleryIndex+1} / ${currentGallery.length}`;document.querySelector('#gallery-caption').textContent=item.caption;document.querySelectorAll('[data-gallery-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.galleryIndex)===galleryIndex)));}
document.addEventListener('click',event=>{
 const projectButton=event.target.closest('[data-project]');if(projectButton)openProject(projectButton.dataset.project);
 const filter=event.target.closest('[data-filter]');if(filter){document.querySelectorAll('.filter').forEach(b=>{const active=b===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderProjects(filter.dataset.filter);}
 if(event.target.closest('#gallery-prev'))changeGallery(-1);if(event.target.closest('#gallery-next'))changeGallery(1);
 const thumbnail=event.target.closest('[data-gallery-index]');if(thumbnail)changeGallery(Number(thumbnail.dataset.galleryIndex)-galleryIndex);
 if(event.target.closest('.close-dialog'))event.target.closest('dialog').close();
});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();}});});
projectDialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){changeGallery(1);event.preventDefault();}if(event.key==='ArrowLeft'){changeGallery(-1);event.preventDefault();}});
const engagementContent={Retainer:{title:'A consistent part of your team.',copy:'Monthly support for ongoing content, campaigns, coordination, and reporting. My preference is a long-term, part-time partnership.'},Project:{title:'A clear brief. A defined scope.',copy:'Support for a campaign, content project, website update, or marketing program. We agree on the deliverables and timing before the work begins.'},Hourly:{title:'Support where you need it.',copy:'Flexible help for writing, publishing, reporting, and coordination. We agree on priorities and available hours around your team’s needs.'}};
document.querySelectorAll('[data-engagement]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.engagement-tab').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});const item=engagementContent[button.dataset.engagement];const copy=document.querySelector('#engagement-copy');copy.querySelector('h4').textContent=item.title;copy.querySelector('p').textContent=item.copy;document.querySelector('#engagement-select').value=button.dataset.engagement;}));
document.querySelectorAll('.service-request').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#service-select').value=button.dataset.service;document.querySelector('#contact').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});document.querySelector('#contact-form input').focus({preventScroll:true});}));
const form=document.querySelector('#contact-form');
function composeInquiry(){const data=new FormData(form);return {subject:`Marketing inquiry: ${data.get('service')||'Let’s work together'} | ${data.get('name')}`,body:`Hi, Polo,\n\n${data.get('message')}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany / organization: ${data.get('company')||'Not specified'}\nService: ${data.get('service')||'Let’s discuss'}\nEngagement: ${data.get('engagement')}`};}
form.addEventListener('submit',event=>{event.preventDefault();const message=composeInquiry();window.location.href=`mailto:johnpaul.enriquez@gmail.com?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;document.querySelector('#form-status').textContent='Email draft prepared. Send it from your email app. If no app opened, use “Copy message instead” and email me directly.';});
async function copyText(text){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return;}const el=document.createElement('textarea');el.value=text;el.style.position='fixed';el.style.left='-9999px';document.body.appendChild(el);el.select();const copied=document.execCommand('copy');el.remove();if(!copied)throw new Error('Copy unavailable');}
document.querySelector('#copy-inquiry').addEventListener('click',async()=>{if(!form.reportValidity())return;const message=composeInquiry();try{await copyText(`To: johnpaul.enriquez@gmail.com\nSubject: ${message.subject}\n\n${message.body}`);document.querySelector('#form-status').textContent='Message copied. Paste it into an email to johnpaul.enriquez@gmail.com.';}catch{document.querySelector('#form-status').textContent='Copy is unavailable in this browser. Please email johnpaul.enriquez@gmail.com directly.';}});
document.querySelector('#viber-info').addEventListener('click',event=>{const el=document.querySelector('#viber-detail');el.hidden=!el.hidden;event.currentTarget.setAttribute('aria-expanded',String(!el.hidden));});
document.querySelector('#copy-number').addEventListener('click',async()=>{try{await copyText('+63 968 613 6130');document.querySelector('#number-status').textContent='Number copied.';}catch{document.querySelector('#number-status').textContent='Use +63 968 613 6130.';}});
const story=`I was in my second year of being a coach in a BPO when I first saw him. It was a stormy Monday afternoon, and we were sent home early because a Signal No. 4 typhoon was about to hit Metro Manila.

I hurriedly boarded a jeepney when he sat right in front of me. As the jeepney hurtled along Ayala with only the two of us as passengers, I couldn’t help but glance at him.

He was a very good-looking guy. His hair was fixed with wax, and his sporty-scented perfume was enough to leave anyone stunned. It was that intoxicatingly good. He was fit like me, and I was a bit taller than he was. I knew it was rude to stare, but I couldn’t help looking at him.

Then he noticed me looking.

At that moment, I didn’t know what to do. I felt a lump in my throat, forced an awkward smile, and mustered enough courage to ask him, “Have we met before?” because, strange as it may sound, I really felt like I had already seen him somewhere.

He looked confused. He looked at me intently, probably trying to recall if he knew me.

“I’m not sure. I don’t think so,” he replied.

“Oh,” I said as I pursed my lips. With my face red from embarrassment, I added, “I thought you looked really familiar.”

Despite the cold, howling winds, I felt the heat from my cheeks, which I was sure he noticed.

“I’m Ian, by the way.”

He extended his hand, so I shook it out of politeness.

“I’m Paolo. It’s nice to meet you.”

With my hand trembling, I had to pull it back before I embarrassed myself even more.

He beamed a smile, and that was when I noticed he had braces. That made him all the more attractive.

The rain was pouring hard, and much of Metro Manila was already flooded. As the jeepney made its way through the flooded streets of Yakal, the driver had to stop.

“Uy, pasensya na, mga boss,” he said with regret in his voice. “Masyado na mataas yung baha, baka tumirik tayo. Balik ko na lang pamasahe nyo.”

We took back our fare, got off the jeepney, and headed to the nearest shed. I reached into my bag to get my umbrella when I noticed that he didn’t have one.

“Gusto mo makisilong?” I offered.

“Thanks.” He beamed at me, flashing his braces. “I forgot mine at home. I was already running late when I left this morning.”

“Where are you from, by the way?” he asked.

It took me a while before I replied. I was hypnotized by his smile.

“Still quite far from here, so I still have to take another ride. I’d have to wait for the flood to subside, though, so I’ll hang out somewhere first. Probably a fast-food chain or something, where I can wait this storm out.”

He looked puzzled, gave me a calculating look, took out his phone, and started texting. Once he was done, he looked at me and said, “My place is just a couple of blocks from here. If you want, you can crash there first and wait for the storm to pass.”

This guy is really nice, I thought to myself as my stomach started to flutter.

“Are you sure it’s okay? I don’t want to impose.”

“You seem like a nice guy, so it’s cool. Besides, we’re already drenched. I have a change of clothes there, and we can wait for your clothes to dry.”

He probably saw that I still wasn’t convinced, so he added, “I also have food.”

I was already hungry and cold, so who was I to say no?

As we walked along flooded Chino Roces, my arm gently brushed against his, and that made me feel tingly all over. I was trying to contain myself, trying not to break into a wide grin. My head felt a bit fuzzy with the idea of actually having a crush.

I hadn’t had a crush in the longest time!

When we got to his apartment, he handed me a fresh set of clothes together with a towel and asked me to change so he could dry our clothes.

I went straight to the bathroom, hurriedly dried myself, and put on the fresh set of clothes. As I was changing, I noticed that there were two sets of toothbrushes and a lot of hair products.

I smiled.

“That’s probably why his hair still looked great despite getting wet,” I whispered to myself.

As I got out of the bathroom, I noticed that he had already finished changing. He asked me for my wet clothes, set the dryer, and then headed to the kitchen.

He took a couple of cup noodles from the cupboard and made me choose between beef and seafood.

I chose beef, which made him flash his boyish smile.

“Perfect! I like seafood,” he exclaimed, looking as adorable as a kid who was about to open his gift on Christmas.

We talked about a lot of things while filling our stomachs: where we were from, our families, things we were interested in, life goals, and so on.

He made me feel very comfortable.

I had almost forgotten this feeling.

It had been five years since my last relationship. That breakup broke me. I never thought I’d feel this again, much less with a complete stranger.

Then it hit me.

I missed this.

That longing feeling of having someone to call your own. That security of having someone to back you up. Knowing that you’re not alone. That you have a partner.

Ding dong!

The doorbell rang, taking me out of my daydream.

Ian stood up and hurriedly answered the door.

“Hi! Sorry, it took me too long. I had to walk a couple of blocks,” a new voice said.

Ian came back with a guy, who set the things he was carrying down in the corner.

Then Ian gave him a kiss on the lips.

“It’s okay, babe. I’m just glad you’re safe,” Ian said.

The guy was wearing a yellow raincoat and was dripping wet. He was also very good-looking, with a charming face and an even more upbeat demeanor.

“Most of the streets are flooded, and I had to pass by the grocery on my way here. I heard it’s gonna be the worst storm of the year,” he continued as he approached me and extended his hand.

“Hello, I’m Joshua, Ian’s partner. He texted a while ago and told me that he met you on his way home. Glad to know you’re both safe!”

He smiled, waiting for me to shake his hand.

It all started to make sense.

That was why Ian had been texting a lot.

That was why there were two toothbrushes in the bathroom.

It took me a few moments before I fully realized what had happened.

My daydream was cut short as I felt a lump in my throat. Nevertheless, I reached for Joshua’s hand and shook it.

“Hello, nice to meet you. I’m Paolo,” I said, my voice almost shaking. “Thanks for letting me crash. I don’t mean to inconvenience you guys.”

“No worries, not a problem at all! I’m sure you would do the same for another person in need,” Josh said.

It took all my strength to keep myself from laughing.

Was I really that lonely that I had to fantasize about someone who was just being nice?

I couldn’t believe it.

I could already hear my friends laughing when they heard about this.

Well, at least it was fun while it lasted.

As the storm cleared a few hours later, I bade Ian and Josh goodbye. I promised to keep in touch, which I did, and we’re all good friends until now.

In my moment of sadness, I was just glad to know that there was still a chance I could feel the way I did that night.

There was still hope for me.

I just wished that the next time I felt this way, it would be at the right moment, with the right guy.`;
for(const paragraph of story.split('\n\n')){const p=document.createElement('p');p.textContent=paragraph;document.querySelector('#story-text').appendChild(p);}
document.querySelector('#read-story').addEventListener('click',()=>openDialog(document.querySelector('#story-dialog')));

function openLinkedProject(){
 const match=window.location.hash.match(/^#project-([a-z]+)$/);
 if(!match)return;
 const project=projects.find(p=>p.id===match[1]);
 if(!project)return;
 document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.filter===project.category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 renderProjects(project.category);
 openProject(project.id);
}
window.addEventListener('hashchange',openLinkedProject);
projectDialog.addEventListener('close',()=>{if(window.location.hash.startsWith('#project-'))history.replaceState(null,'','#work');});
openLinkedProject();
