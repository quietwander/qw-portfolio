const C='ppm-v1.3.1',F=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png','./icon-mask.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!='GET'||u.origin!=location.origin)return;
e.respondWith(fetch(e.request).then(r=>{if(r.ok&&!u.search){const n=r.clone();caches.open(C).then(c=>c.put(e.request,n))}return r}).catch(()=>caches.match(e.request)))});
