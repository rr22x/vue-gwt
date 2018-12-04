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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2839c5b9eeb673e2a478d0b69e3b00f2"
  },
  {
    "url": "assets/css/0.styles.b8ecb5f5.css",
    "revision": "813c0a1fc0ae236e5513d6f4965abcc5"
  },
  {
    "url": "assets/img/eclipse-enable-annotation-processing.8aaaf70e.png",
    "revision": "8aaaf70e3c59675c7994561daa54964f"
  },
  {
    "url": "assets/img/intellij-enable-autobuild-running.2d452a78.png",
    "revision": "2d452a789e2b56372f69185b418422a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e7d5e124.js",
    "revision": "696955a2d139e0cecfd1f9af1828f75c"
  },
  {
    "url": "assets/js/11.ddeabe7e.js",
    "revision": "4eee101e79e16c7d5515b0ebae723028"
  },
  {
    "url": "assets/js/12.94b059aa.js",
    "revision": "182d8dc2f64417f262b7c3141d212a33"
  },
  {
    "url": "assets/js/13.38739d54.js",
    "revision": "5120942dc876983521d3a306a9b4a26e"
  },
  {
    "url": "assets/js/14.f4151e7d.js",
    "revision": "601fe85bdc58effa36050368383dbc0a"
  },
  {
    "url": "assets/js/15.aa6a04ab.js",
    "revision": "fccbab6e89fffa4e0492cc4e6df4fcbb"
  },
  {
    "url": "assets/js/16.56ff4fc7.js",
    "revision": "350eb5cc83b5a1f5e20b52f64e262b94"
  },
  {
    "url": "assets/js/17.39be91ec.js",
    "revision": "afbae56b99b347d13bc331a81a6bc193"
  },
  {
    "url": "assets/js/18.da86c618.js",
    "revision": "810f0f50cc958e7a413f5a04a6b4e5c1"
  },
  {
    "url": "assets/js/19.a0447903.js",
    "revision": "e8c9197e1cfdeef97e47647d2f4573f7"
  },
  {
    "url": "assets/js/20.e826004f.js",
    "revision": "5bc9420cce0ee85516abb7d64ee761fa"
  },
  {
    "url": "assets/js/21.ed288944.js",
    "revision": "9597431d38ff39ac806475efcf2eac0a"
  },
  {
    "url": "assets/js/22.6ec82f23.js",
    "revision": "685020aea6dd0148a1b8b83c97be3ab4"
  },
  {
    "url": "assets/js/23.62becfb7.js",
    "revision": "a14070f4140eee4ec8abef7a2475764b"
  },
  {
    "url": "assets/js/24.1275abc8.js",
    "revision": "17cab7ce9d0a3749d6801e9dff4b4409"
  },
  {
    "url": "assets/js/25.1724a03e.js",
    "revision": "5cea75db3017530e9b1cc9de71f04ee5"
  },
  {
    "url": "assets/js/26.0811a64b.js",
    "revision": "36bd5c4d371d6ce1a80ab15b48406413"
  },
  {
    "url": "assets/js/27.b2e82f08.js",
    "revision": "6853ff182ac9e00f25ab37835d7e5918"
  },
  {
    "url": "assets/js/28.4a1d6022.js",
    "revision": "7800749a0eb515277771dafb4343bea7"
  },
  {
    "url": "assets/js/29.6f9b5423.js",
    "revision": "09f99fc69d98b491747e0064f729550c"
  },
  {
    "url": "assets/js/3.5c4b5862.js",
    "revision": "e7540a808f52ec8fa0fe1f224e32c47e"
  },
  {
    "url": "assets/js/30.acdb345b.js",
    "revision": "71c0f38a33da0190f0154e65beb61852"
  },
  {
    "url": "assets/js/31.80a71ac9.js",
    "revision": "a5fc508f11a3cd1350bd2ffaf44b5300"
  },
  {
    "url": "assets/js/32.902094f3.js",
    "revision": "eb74afc47e46540c3da625f333696e74"
  },
  {
    "url": "assets/js/33.4a05ca11.js",
    "revision": "fc1bb1c4fac993b70203ba0905e9f986"
  },
  {
    "url": "assets/js/4.1e37f8cf.js",
    "revision": "7e45d2c574c1c1f84ead3d342dffa60d"
  },
  {
    "url": "assets/js/5.dc7b9002.js",
    "revision": "c4109be9bae4e21021f7b944383274c8"
  },
  {
    "url": "assets/js/6.fac35c6c.js",
    "revision": "990754094347e96a42b6cf617ddb35fb"
  },
  {
    "url": "assets/js/7.05d1b556.js",
    "revision": "fbd2ccff6a1a1a6bb474fec15baf89e9"
  },
  {
    "url": "assets/js/8.060b44a2.js",
    "revision": "a0ab0784d76f831c81fed4f595cef138"
  },
  {
    "url": "assets/js/9.04d4ef88.js",
    "revision": "6d0a6026f206c9601f05d7915dea897c"
  },
  {
    "url": "assets/js/app.a49f871d.js",
    "revision": "3887f61df3ff8bb76b66827dd24dff35"
  },
  {
    "url": "assets/js/vendors~docsearch.88b783b6.js",
    "revision": "ce2d1acb2d37f4e5f8e4ad4f33ca809a"
  },
  {
    "url": "guide/advanced/custom-elements.html",
    "revision": "38e1bfffa4f16c7ab79715e33630f815"
  },
  {
    "url": "guide/advanced/integrating-with-js-components.html",
    "revision": "73c9f7d8216b9a4e2d1978ff953d26f4"
  },
  {
    "url": "guide/advanced/unsupported-features.html",
    "revision": "b8d9493f49e5cae4b4ba49acbd2bc49f"
  },
  {
    "url": "guide/composition/custom-directives.html",
    "revision": "2eb571e0cde0015d0d519ca0dbc870d3"
  },
  {
    "url": "guide/composition/extending-components.html",
    "revision": "3f83e189f8911d000b0f3d553099ee5b"
  },
  {
    "url": "guide/composition/plugins.html",
    "revision": "9578315bd0d9e3eeade34d25c52f2583"
  },
  {
    "url": "guide/composition/render-function.html",
    "revision": "647cc16b44693000fe27c08da5eff99e"
  },
  {
    "url": "guide/essentials/class-and-style.html",
    "revision": "2f84945c24ec2eaf464acc3f282dd1b5"
  },
  {
    "url": "guide/essentials/components.html",
    "revision": "361229715c6d0cc80d169b56b61c6b27"
  },
  {
    "url": "guide/essentials/computed-and-watchers.html",
    "revision": "a724739bc7f82f54eec090a5e31ad6cf"
  },
  {
    "url": "guide/essentials/conditional.html",
    "revision": "2d7d763000794a6d151e40b48d56b1d2"
  },
  {
    "url": "guide/essentials/dependency-injection.html",
    "revision": "4ee1248df19144f2a2ae18bb4e3695a1"
  },
  {
    "url": "guide/essentials/events.html",
    "revision": "d935c64bb4b154d96a6b08a8d598f6b2"
  },
  {
    "url": "guide/essentials/forms.html",
    "revision": "9c3d43a4e07a0c08f7c18354a7eff6cd"
  },
  {
    "url": "guide/essentials/list.html",
    "revision": "6ef6d58a290e111ddac5b1378f4d7df7"
  },
  {
    "url": "guide/essentials/reactivity-system.html",
    "revision": "0fd60ed8902e4e0ca6110ef4f1709724"
  },
  {
    "url": "guide/essentials/template-syntax.html",
    "revision": "af8c407fc3a57abd812e17d0c77a7465"
  },
  {
    "url": "guide/essentials/the-vue-instance.html",
    "revision": "9d0d062df9f752588fa1e7faaec7d9b1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "700be4fbfd0e86c0d1a8f81371c96a87"
  },
  {
    "url": "guide/gwt-integration/client-bundles-and-styles.html",
    "revision": "255150858d7b74e93fed818d91acadca"
  },
  {
    "url": "guide/gwt-integration/js-interop.html",
    "revision": "95da5486b80ebabb693b2e0eccc904c8"
  },
  {
    "url": "guide/gwt-integration/widgets.html",
    "revision": "b09f8cc9c293070a1bdd04bd9e342431"
  },
  {
    "url": "guide/index.html",
    "revision": "87968b47c19d3e8f1f1b58cb6858a2f8"
  },
  {
    "url": "guide/project-setup.html",
    "revision": "4322d3d695b57a17a10452742531c7bf"
  },
  {
    "url": "guide/scaling-up/routing.html",
    "revision": "1dfedd731a3911f396fd2ca068c16663"
  },
  {
    "url": "guide/tooling/unit-testing.html",
    "revision": "100c2661af42bab791e8c0afe6632264"
  },
  {
    "url": "guide/transitions/transitioning-state.html",
    "revision": "14b7f1eb6d5c00487306f1b037ec4631"
  },
  {
    "url": "guide/transitions/transitions.html",
    "revision": "c2663ff71b2420aafa04986497eada38"
  },
  {
    "url": "index.html",
    "revision": "a869a39efad3565aaceeee6c34bfbbb9"
  },
  {
    "url": "resources/images/GenMyModel-Logo-Black.png",
    "revision": "5f34e428c760346b9788a8c1cb125d25"
  },
  {
    "url": "resources/images/VueGWTLogo-noText.png",
    "revision": "3a75fc3fb783231210411c3530b1b459"
  },
  {
    "url": "resources/images/VueGWTLogo.png",
    "revision": "20686e73fc3b2abae0c87d8d6e444aba"
  },
  {
    "url": "resources/scripts/1A7BB733ED2AE666C7151485158E842D.cache.js",
    "revision": "d438121bc793dc49dde0d3ed72eebcce"
  },
  {
    "url": "resources/scripts/29B42AB034F33B9678746CCD166F3A10.cache.js",
    "revision": "e6c16d45387c1b9249d3d1e79ad9957c"
  },
  {
    "url": "resources/scripts/66ABE78CB882262B57B28CB65CB53209.cache.js",
    "revision": "a92407a88c9e46fccb1c600433386649"
  },
  {
    "url": "resources/scripts/71E3F77A6F44957B9CB3861992257E9A.cache.js",
    "revision": "bd7cfc6ebff1b6dbfae2c70019730f8e"
  },
  {
    "url": "resources/scripts/clear.cache.gif",
    "revision": "6d22e4f2d2057c6e8d6fab098e76e80f"
  },
  {
    "url": "resources/scripts/D9755A422B92B341056D0463F97CFD98.cache.js",
    "revision": "a725b589f1b638566fcd4f3b3cade4da"
  },
  {
    "url": "resources/scripts/VueGwtExamples.devmode.js",
    "revision": "7290a5b8e63c335e510ae02a908de5fa"
  },
  {
    "url": "resources/scripts/VueGwtExamples.nocache.js",
    "revision": "b87bf4db5451bab7009f3c2335df7883"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
