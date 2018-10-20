/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "/static/workbox/workbox-v3.6.2/workbox-sw.js",
  "/static/workbox/next-precache-manifest-6d5b4bfd236bb0284477e7b94b4175ce.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "components/App.js",
    "revision": "ad0672b01a0b4124881d04b5c54a46b6"
  },
  {
    "url": "components/DataPrefetchLink.js",
    "revision": "c0b0acf2875a9eabfff8367e43f2aad4"
  },
  {
    "url": "components/ErrorMessage.js",
    "revision": "3ae0edd15880cb198f340bf7c4af9409"
  },
  {
    "url": "components/Header.js",
    "revision": "d118674207f076195b1f1211aeb775f2"
  },
  {
    "url": "components/OfflineSupport.js",
    "revision": "f448e818006a24aa943b809e90125b00"
  },
  {
    "url": "components/PostList.js",
    "revision": "8e81ddf1defb270022b39df5bcdd09c3"
  },
  {
    "url": "components/PostUpvoter.js",
    "revision": "f5aa4da6cdb0761a358b7f294484770c"
  },
  {
    "url": "components/Submit.js",
    "revision": "2245b4abacd9fe918d0e6d25e67a6a57"
  },
  {
    "url": "lib/init-apollo.js",
    "revision": "2c0ccb1ab825b899042664e269853b45"
  },
  {
    "url": "lib/with-apollo-client.js",
    "revision": "c4cf23830f1a63d494639ce7d6c6c95c"
  },
  {
    "url": "next.config.js",
    "revision": "c294f71aa06ccc37cd2bbccd680e612a"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/_app.js",
    "revision": "3e701ac0e1bb62dd7a3eaa3989e15a06"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/_error.js",
    "revision": "771972090c952950f38c717dc2926e18"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/about.js",
    "revision": "ea6d03ac17ea107b74a9e436f52b6f01"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/index.js",
    "revision": "4e5bb935cb806c91ce2469da53c1c3fa"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/list.js",
    "revision": "d263ea290e3c875fef13966b520e19da"
  },
  {
    "url": "out/_next/static/39VDpVTvE3JO4lfHc2BiJ/pages/unavailable.js",
    "revision": "d104bf9f9d5dc5838ea92ee6aa4c928d"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/_app.js",
    "revision": "3e701ac0e1bb62dd7a3eaa3989e15a06"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/_error.js",
    "revision": "771972090c952950f38c717dc2926e18"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/about.js",
    "revision": "ea6d03ac17ea107b74a9e436f52b6f01"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/index.js",
    "revision": "4e5bb935cb806c91ce2469da53c1c3fa"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/list.js",
    "revision": "d263ea290e3c875fef13966b520e19da"
  },
  {
    "url": "out/_next/static/b4~uAflofA1haqu3DIJWa/pages/unavailable.js",
    "revision": "d104bf9f9d5dc5838ea92ee6aa4c928d"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/_app.js",
    "revision": "3e701ac0e1bb62dd7a3eaa3989e15a06"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/_error.js",
    "revision": "771972090c952950f38c717dc2926e18"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/about.js",
    "revision": "ea6d03ac17ea107b74a9e436f52b6f01"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/index.js",
    "revision": "4e5bb935cb806c91ce2469da53c1c3fa"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/list.js",
    "revision": "d263ea290e3c875fef13966b520e19da"
  },
  {
    "url": "out/_next/static/CBCZF4hwbAYki3azA55xe/pages/unavailable.js",
    "revision": "d104bf9f9d5dc5838ea92ee6aa4c928d"
  },
  {
    "url": "out/_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "out/_next/static/chunks/commons.174d4540778a00c8d88d.js",
    "revision": "2c38398e83827637c73ad1e8217cd50d"
  },
  {
    "url": "out/_next/static/chunks/commons.9b782927652ed6e8fadf.js",
    "revision": "ca5670f3939a70541eeb41ccb53c203e"
  },
  {
    "url": "out/_next/static/chunks/commons.a74820c3d47107f02d2a.js",
    "revision": "546e460cbb9add18f5b263c666000ace"
  },
  {
    "url": "out/_next/static/development/dll/dll_4a2ab6ce0cb456fbfead.js",
    "revision": "44e9c7c881a53d59f2ed681b3d49336a"
  },
  {
    "url": "out/_next/static/development/pages/_app.js",
    "revision": "278d6327ca8a28bbdc96c4e7fc894d2d"
  },
  {
    "url": "out/_next/static/development/pages/_error.js",
    "revision": "8e9f0abbbcfb5684716934e0f870b43d"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/_app.js",
    "revision": "aeac19bf84cf95971665fd8c2879eb33"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/_error.js",
    "revision": "d7e29ebf8e3cbdd7fe4f2e2d773c7409"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/about.js",
    "revision": "dda896da1e4ac31e66379156f2a671f0"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/index.js",
    "revision": "6dd3bcafc85a927ff5f18905956fb28b"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/list.js",
    "revision": "afa9823d47cd4f184af73c8b2ad03772"
  },
  {
    "url": "out/_next/static/g3J4F1jQLi11RxUL5Ch2w/pages/unavailable.js",
    "revision": "4a66a82a1beb10d4f6f4ba9409628e99"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/_app.js",
    "revision": "aeac19bf84cf95971665fd8c2879eb33"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/_error.js",
    "revision": "d7e29ebf8e3cbdd7fe4f2e2d773c7409"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/about.js",
    "revision": "dda896da1e4ac31e66379156f2a671f0"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/index.js",
    "revision": "6dd3bcafc85a927ff5f18905956fb28b"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/list.js",
    "revision": "afa9823d47cd4f184af73c8b2ad03772"
  },
  {
    "url": "out/_next/static/GHhy4ZiPV8JOpnHpoQrfE/pages/unavailable.js",
    "revision": "4a66a82a1beb10d4f6f4ba9409628e99"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/_app.js",
    "revision": "3e701ac0e1bb62dd7a3eaa3989e15a06"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/_error.js",
    "revision": "771972090c952950f38c717dc2926e18"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/about.js",
    "revision": "ea6d03ac17ea107b74a9e436f52b6f01"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/index.js",
    "revision": "4e5bb935cb806c91ce2469da53c1c3fa"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/list.js",
    "revision": "d263ea290e3c875fef13966b520e19da"
  },
  {
    "url": "out/_next/static/LKSa~lw9X9uCv7ev7AibS/pages/unavailable.js",
    "revision": "d104bf9f9d5dc5838ea92ee6aa4c928d"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/_app.js",
    "revision": "aeac19bf84cf95971665fd8c2879eb33"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/_error.js",
    "revision": "d7e29ebf8e3cbdd7fe4f2e2d773c7409"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/about.js",
    "revision": "dda896da1e4ac31e66379156f2a671f0"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/index.js",
    "revision": "6dd3bcafc85a927ff5f18905956fb28b"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/list.js",
    "revision": "afa9823d47cd4f184af73c8b2ad03772"
  },
  {
    "url": "out/_next/static/rIPD0_buHZJSKFv7Wka8U/pages/unavailable.js",
    "revision": "4a66a82a1beb10d4f6f4ba9409628e99"
  },
  {
    "url": "out/_next/static/runtime/main-b12957ec15d3988c9af0.js",
    "revision": "05fd9ffa0eb47c523734d3a17d31d698"
  },
  {
    "url": "out/_next/static/runtime/main.js",
    "revision": "2a171124ffe77391d77186f227afc5a7"
  },
  {
    "url": "out/_next/static/runtime/webpack-89179faa512dd01fbb62.js",
    "revision": "2678b70926bdf0f2081ca40f4e674090"
  },
  {
    "url": "out/_next/static/runtime/webpack.js",
    "revision": "73a4f5b07886164b10107704c42de802"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/_app.js",
    "revision": "aeac19bf84cf95971665fd8c2879eb33"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/_error.js",
    "revision": "d7e29ebf8e3cbdd7fe4f2e2d773c7409"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/about.js",
    "revision": "dda896da1e4ac31e66379156f2a671f0"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/index.js",
    "revision": "6dd3bcafc85a927ff5f18905956fb28b"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/list.js",
    "revision": "afa9823d47cd4f184af73c8b2ad03772"
  },
  {
    "url": "out/_next/static/SwNbUK758E2hB599w7_Gp/pages/unavailable.js",
    "revision": "4a66a82a1beb10d4f6f4ba9409628e99"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/_app.js",
    "revision": "aeac19bf84cf95971665fd8c2879eb33"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/_error.js",
    "revision": "d7e29ebf8e3cbdd7fe4f2e2d773c7409"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/about.js",
    "revision": "dda896da1e4ac31e66379156f2a671f0"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/index.js",
    "revision": "6dd3bcafc85a927ff5f18905956fb28b"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/list.js",
    "revision": "afa9823d47cd4f184af73c8b2ad03772"
  },
  {
    "url": "out/_next/static/y~cBBg3K~RLI6fM1isZYj/pages/unavailable.js",
    "revision": "4a66a82a1beb10d4f6f4ba9409628e99"
  },
  {
    "url": "out/index.html",
    "revision": "c08ed482b8845b7ac50b232c104ac9c1"
  },
  {
    "url": "out/static/workbox/next-precache-manifest-6d5b4bfd236bb0284477e7b94b4175ce.js",
    "revision": "6d5b4bfd236bb0284477e7b94b4175ce"
  },
  {
    "url": "out/static/workbox/sw.js",
    "revision": "cbbef7ae3533daa663fc190cf8a6a851"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-background-sync.dev.js",
    "revision": "c2274d65e8ada33d6f6514fad01820a3"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-background-sync.prod.js",
    "revision": "ffc6dbea4c20152b8663189d8585cd68"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-broadcast-cache-update.dev.js",
    "revision": "2d18f73d161eb8f5cdc5ca8ddf640750"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-broadcast-cache-update.prod.js",
    "revision": "5917308c2ca11e742d14ee7d3c8ae43a"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-cache-expiration.dev.js",
    "revision": "ca192d5e6128a10901dc9131f27fcca2"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-cache-expiration.prod.js",
    "revision": "2b9b0e2a6697c797fdcb186ba7b29209"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-cacheable-response.dev.js",
    "revision": "b1e16a8e9aacb6ec66c651e298867677"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-cacheable-response.prod.js",
    "revision": "98ad61e23b160871f88e8ce334fa50fb"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-core.dev.js",
    "revision": "27b32cf17a1aed5ac43abe99af6f807c"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-core.prod.js",
    "revision": "e19b71f5d847b916d411bf227ed57956"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-google-analytics.dev.js",
    "revision": "20a3443ce2838e4366b2ffae4217d308"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-google-analytics.prod.js",
    "revision": "4e1b7794955e5a57f6e93a40d5e761be"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-navigation-preload.dev.js",
    "revision": "4af970f8288b85b8e33fd7bc0be0b414"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-navigation-preload.prod.js",
    "revision": "43ecd446ffd76e47575dfa99bd82b9a9"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-precaching.dev.js",
    "revision": "4d2471f88391ce855f84dd3805ee4967"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-precaching.prod.js",
    "revision": "74ec0df6c10c42463be540c51bf35830"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-range-requests.dev.js",
    "revision": "a86fcc029a338d525fbad56edfd04dff"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-range-requests.prod.js",
    "revision": "d2f41ed13cff78146d91111b3d712dbc"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-routing.dev.js",
    "revision": "51ce528b9e1e6d354e1006d362000290"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-routing.prod.js",
    "revision": "7f700bc953a65ee4825623d9e6a51f0e"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-strategies.dev.js",
    "revision": "5442a89feba061bd48a0bc17912742a3"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-strategies.prod.js",
    "revision": "935f615d24f897cfbd03b9ca0aafb123"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-streams.dev.js",
    "revision": "8b0040319cd90f629bf559ae329ce08c"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-streams.prod.js",
    "revision": "1137d65f7ae30d04a3f2dbeda91c61c4"
  },
  {
    "url": "out/static/workbox/workbox-v3.6.2/workbox-sw.js",
    "revision": "ab9c282305eb780b9cbc17e05b6053ad"
  },
  {
    "url": "pages/_app.js",
    "revision": "56c053b320250550fa119e7102f7261f"
  },
  {
    "url": "pages/about.js",
    "revision": "ecfb3861dafd8f28b230ee91c0c10758"
  },
  {
    "url": "pages/index.js",
    "revision": "ecfb3861dafd8f28b230ee91c0c10758"
  },
  {
    "url": "pages/list.js",
    "revision": "16dafdfc832120c3799ffc25122f9dd6"
  },
  {
    "url": "pages/unavailable.js",
    "revision": "ecfb3861dafd8f28b230ee91c0c10758"
  },
  {
    "url": "server.js",
    "revision": "720e6c51912c787a4dcfba3f7fe775a5"
  },
  {
    "url": "static/workbox/next-precache-manifest-6d5b4bfd236bb0284477e7b94b4175ce.js",
    "revision": "6d5b4bfd236bb0284477e7b94b4175ce"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-background-sync.dev.js",
    "revision": "c2274d65e8ada33d6f6514fad01820a3"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-background-sync.prod.js",
    "revision": "ffc6dbea4c20152b8663189d8585cd68"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-broadcast-cache-update.dev.js",
    "revision": "2d18f73d161eb8f5cdc5ca8ddf640750"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-broadcast-cache-update.prod.js",
    "revision": "5917308c2ca11e742d14ee7d3c8ae43a"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-cache-expiration.dev.js",
    "revision": "ca192d5e6128a10901dc9131f27fcca2"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-cache-expiration.prod.js",
    "revision": "2b9b0e2a6697c797fdcb186ba7b29209"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-cacheable-response.dev.js",
    "revision": "b1e16a8e9aacb6ec66c651e298867677"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-cacheable-response.prod.js",
    "revision": "98ad61e23b160871f88e8ce334fa50fb"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-core.dev.js",
    "revision": "27b32cf17a1aed5ac43abe99af6f807c"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-core.prod.js",
    "revision": "e19b71f5d847b916d411bf227ed57956"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-google-analytics.dev.js",
    "revision": "20a3443ce2838e4366b2ffae4217d308"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-google-analytics.prod.js",
    "revision": "4e1b7794955e5a57f6e93a40d5e761be"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-navigation-preload.dev.js",
    "revision": "4af970f8288b85b8e33fd7bc0be0b414"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-navigation-preload.prod.js",
    "revision": "43ecd446ffd76e47575dfa99bd82b9a9"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-precaching.dev.js",
    "revision": "4d2471f88391ce855f84dd3805ee4967"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-precaching.prod.js",
    "revision": "74ec0df6c10c42463be540c51bf35830"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-range-requests.dev.js",
    "revision": "a86fcc029a338d525fbad56edfd04dff"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-range-requests.prod.js",
    "revision": "d2f41ed13cff78146d91111b3d712dbc"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-routing.dev.js",
    "revision": "51ce528b9e1e6d354e1006d362000290"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-routing.prod.js",
    "revision": "7f700bc953a65ee4825623d9e6a51f0e"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-strategies.dev.js",
    "revision": "5442a89feba061bd48a0bc17912742a3"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-strategies.prod.js",
    "revision": "935f615d24f897cfbd03b9ca0aafb123"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-streams.dev.js",
    "revision": "8b0040319cd90f629bf559ae329ce08c"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-streams.prod.js",
    "revision": "1137d65f7ae30d04a3f2dbeda91c61c4"
  },
  {
    "url": "static/workbox/workbox-v3.6.2/workbox-sw.js",
    "revision": "ab9c282305eb780b9cbc17e05b6053ad"
  },
  {
    "url": "workbox-config.js",
    "revision": "8b8adf6437222bee34a5c95f8d2e77a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute("/about", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute("/list", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ "cacheName":"image-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
