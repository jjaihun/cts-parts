// 설치 조건 충족용 최소 서비스 워커. 캐시는 하지 않아 항상 최신 파일을 씁니다.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
