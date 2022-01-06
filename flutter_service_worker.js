'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c0f7a4c0677ff0ce5624feff21c7088b",
"assets/assets/images/card.png": "c742a1135c607fedd6f8111ca6b533d8",
"assets/assets/images/cardBehind.png": "8c6ee59f3fc3d714cb86e0b9607ded7a",
"assets/assets/images/forward.png": "76a9e8eb0d87f77db99a9f4953818422",
"assets/assets/images/goldenCard.png": "b4f1ea99409e3b73f20ad0c8ba64e4d8",
"assets/assets/images/goldenCardBehind.png": "6655977a81120d9a2d54ca209331eac5",
"assets/assets/images/instagramLogo.png": "3f15ab7a8aa48b87ad4c5e2c0fe097fe",
"assets/assets/images/logo.png": "d572e00100942e406c794bc3ba725bf1",
"assets/assets/images/logo2.png": "98700724837bfa9c1f181df8c89faa97",
"assets/assets/images/storyBackgroundBlack.jpg": "504b18c5b88db7c9308e26a349e5c017",
"assets/assets/images/storyBackgroundRed.jpg": "0a3c881214ec2913da39266009a6f170",
"assets/assets/images/storyBackgroundWhite.jpg": "97c5357aacf50d62a212ad55e6389e16",
"assets/assets/images/textLogo.png": "a88a00ff2e182fe8302c5b809eef54e0",
"assets/assets/images/turkishFlag.png": "65dc03991770d443cc8de5b8bc484e05",
"assets/assets/lang/en-US.json": "aaddd365807649857536b015bbabbf6b",
"assets/assets/lang/tr-TR.json": "4d35733ed0e360e09b8a8f7b3ac5f51f",
"assets/FontManifest.json": "c165bcf17ce087354a25f3bb32702458",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3f88f71799d0e4b8403db9b2b62991ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Black.otf": "6b6c88d5156760338eeb786493f9618d",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Bold.otf": "7a51f2c874e4c8e837c7b3937c651ba6",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Heavy.otf": "55a7a3e258709b90829e9d1846022067",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Medium.otf": "001fbf0f03dcd8de5cf2fa710d1c66fa",
"assets/packages/lw_components/assets/icons/LwIcons.ttf": "cd995d965659c259f1e8330e00d5042b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6cec6726eb89e70ee1728ae30012ddfb",
"/": "6cec6726eb89e70ee1728ae30012ddfb",
"main.dart.js": "e65154b66c3ee08cf3232483729ee5bf",
"manifest.json": "5723b42f17425fb1cdda6278e703e85a",
"splash/img/dark-1x.png": "ef9798d90e58abb4fed937c4ace894dd",
"splash/img/dark-2x.png": "7deb6922fe461821f9dee74c9b3c625b",
"splash/img/dark-3x.png": "6381baba9ab696d74ce50ba9f3cf6949",
"splash/img/dark-4x.png": "4ce9012853da5deee8e9f8d564c0b88b",
"splash/img/light-1x.png": "ef9798d90e58abb4fed937c4ace894dd",
"splash/img/light-2x.png": "7deb6922fe461821f9dee74c9b3c625b",
"splash/img/light-3x.png": "6381baba9ab696d74ce50ba9f3cf6949",
"splash/img/light-4x.png": "4ce9012853da5deee8e9f8d564c0b88b",
"splash/style.css": "b61734b1c9829a5c3c2053eb18c7ae7b",
"version.json": "8b7f62fc41fcd63f5dd4431e6f91bed0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
