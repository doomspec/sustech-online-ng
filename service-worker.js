if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,l,r)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return i;case"module":return n;default:return s(e)}}))).then((s=>{const e=r(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"239aa8c8ced094839a4f6763550083df"},{url:"about/index.html",revision:"d22f34f400a7008b2d18c3b816ca987e"},{url:"assets/css/4522.styles.bb819a1d.css",revision:null},{url:"assets/css/5151.styles.b0e1e636.css",revision:null},{url:"assets/css/5518.styles.d82f03cb.css",revision:null},{url:"assets/css/5686.styles.2bc6adfc.css",revision:null},{url:"assets/css/styles.136ea3c4.css",revision:null},{url:"assets/img/1.3172f410.svg",revision:null},{url:"assets/img/1.bb84d74e.png",revision:null},{url:"assets/img/11.5d08cb35.svg",revision:null},{url:"assets/img/2.a56763e1.svg",revision:null},{url:"assets/img/2.a8f7139b.jpeg",revision:null},{url:"assets/img/2.cbaf0241.jpeg",revision:null},{url:"assets/img/3.38cdcb5f.jpeg",revision:null},{url:"assets/img/3.e27d42ee.svg",revision:null},{url:"assets/img/4.3c7cf7ff.jpeg",revision:null},{url:"assets/img/4.9406cfd1.svg",revision:null},{url:"assets/img/5.9a23d26f.jpeg",revision:null},{url:"assets/img/5.a754635a.svg",revision:null},{url:"assets/img/59cf84079d9ff4f9.fdac7151.jpg",revision:null},{url:"assets/img/6.51c5c2b5.jpeg",revision:null},{url:"assets/img/7.53bc93ef.jpeg",revision:null},{url:"assets/img/7.955519be.svg",revision:null},{url:"assets/img/8.10a1c092.jpeg",revision:null},{url:"assets/img/9.3e4e2fcd.svg",revision:null},{url:"assets/img/add1.65d3660a.png",revision:null},{url:"assets/img/add2.dbde97f0.png",revision:null},{url:"assets/img/add3.88920ddd.png",revision:null},{url:"assets/img/apply.96ba5a7d.png",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/bb-due-gcal.8eb5d53e.png",revision:null},{url:"assets/img/bb-due-macos.a19029fa.png",revision:null},{url:"assets/img/busline2.9ffe20d1.png",revision:null},{url:"assets/img/cas-login.8994391a.png",revision:null},{url:"assets/img/CC-BY-SA_icon.5d973dc1.svg",revision:null},{url:"assets/img/chrome-browser-desktop.6c91018a.png",revision:null},{url:"assets/img/copy-1.383ccd2c.jpeg",revision:null},{url:"assets/img/copy-2.4af4203b.jpeg",revision:null},{url:"assets/img/copy-3.63822a29.jpeg",revision:null},{url:"assets/img/copy-4.686fbeae.jpeg",revision:null},{url:"assets/img/copy-5.d34812a4.jpeg",revision:null},{url:"assets/img/database.85f1e706.png",revision:null},{url:"assets/img/discount.c15a60b1.png",revision:null},{url:"assets/img/english-vocabulary-daka.8ddadb9a.png",revision:null},{url:"assets/img/get-link.82b86240.png",revision:null},{url:"assets/img/ics-url.7005371b.png",revision:null},{url:"assets/img/image-10-1024x161.2a97dbab.png",revision:null},{url:"assets/img/image-11-1024x983.924ed25d.png",revision:null},{url:"assets/img/image-12.9f5996ad.png",revision:null},{url:"assets/img/image-13-1024x530.58c81057.png",revision:null},{url:"assets/img/image-14-1024x783.48b3c8ae.png",revision:null},{url:"assets/img/image-15-1024x173.35df410f.png",revision:null},{url:"assets/img/image-16-1024x538.314b13c1.png",revision:null},{url:"assets/img/image-18.b4cdc8f8.png",revision:null},{url:"assets/img/image-2.8696ce12.png",revision:null},{url:"assets/img/image-3.02e26d7e.png",revision:null},{url:"assets/img/image-4-1024x143.2a090d7f.png",revision:null},{url:"assets/img/image-5-1024x257.64606c22.png",revision:null},{url:"assets/img/image-6-1024x333.35fa27ad.png",revision:null},{url:"assets/img/image-7.92fbc0c7.png",revision:null},{url:"assets/img/image-8-1024x484.331032f7.png",revision:null},{url:"assets/img/image-9-1024x435.08f5d1e0.png",revision:null},{url:"assets/img/image.479a39f2.png",revision:null},{url:"assets/img/IMG_20210123_205049.dd087d67.jpg",revision:null},{url:"assets/img/IMG_20210126_195515.07718e5c.jpg",revision:null},{url:"assets/img/IMG_20210126_195546.a96c38cb.jpg",revision:null},{url:"assets/img/IMG_20210126_195856.50b70e4d.jpg",revision:null},{url:"assets/img/IMG_20210126_195932.ef79e288.jpg",revision:null},{url:"assets/img/IMG_20210126_200439_edit_7106211807769.08c66130.jpg",revision:null},{url:"assets/img/IMG_20210126_205402.f9d641ef.jpg",revision:null},{url:"assets/img/IMG_20210126_205908.ce1582c5.jpg",revision:null},{url:"assets/img/IMG_20210126_210458.52e72309.jpg",revision:null},{url:"assets/img/IMG_20210126_210550.69bf630f.jpg",revision:null},{url:"assets/img/IMG_20210126_210622.0c6691be.jpg",revision:null},{url:"assets/img/IMG_20210126_211345.8f64d4e1.jpg",revision:null},{url:"assets/img/interior.cf4fb397.jpg",revision:null},{url:"assets/img/ios.01b75c2d.png",revision:null},{url:"assets/img/major-overview.607280d5.png",revision:null},{url:"assets/img/matlab.fcf241b1.png",revision:null},{url:"assets/img/matlab1.cf34b256.png",revision:null},{url:"assets/img/matlab2.a5f4408b.png",revision:null},{url:"assets/img/preview-xiaomo.2fff3158.jpg",revision:null},{url:"assets/img/print-1.c7e1c985.jpeg",revision:null},{url:"assets/img/print-2.8b119851.jpeg",revision:null},{url:"assets/img/print-3.2a5674ce.jpeg",revision:null},{url:"assets/img/print-4.85387a65.jpeg",revision:null},{url:"assets/img/print-5.4a1dbf6b.jpeg",revision:null},{url:"assets/img/print.cc434639.png",revision:null},{url:"assets/img/reader-service.5046064f.png",revision:null},{url:"assets/img/sakai-1.7378aeae.png",revision:null},{url:"assets/img/sakai-2.be5d7449.png",revision:null},{url:"assets/img/sakai-3.bdc125df.png",revision:null},{url:"assets/img/sakai-4.5e55419e.png",revision:null},{url:"assets/img/sakai-5.68e58dba.png",revision:null},{url:"assets/img/scan-2-0.7740166f.jpeg",revision:null},{url:"assets/img/scan-2-1.0007abc5.jpeg",revision:null},{url:"assets/img/scan-2-4.b9e4dcd8.jpeg",revision:null},{url:"assets/img/schedule.74f385b6.png",revision:null},{url:"assets/img/Screenshot_20210128_114248_com.MobileTicket.7bf82e94.jpg",revision:null},{url:"assets/img/streetview.534c285b.svg",revision:null},{url:"assets/img/unifound-1.dba82a49.jpeg",revision:null},{url:"assets/img/unifound-10.39c06988.png",revision:null},{url:"assets/img/unifound-3.18b7f0af.jpeg",revision:null},{url:"assets/img/unifound-4.e74517c9.png",revision:null},{url:"assets/img/unifound-5.562e3ba6.jpeg",revision:null},{url:"assets/img/unifound-6.31010f93.jpeg",revision:null},{url:"assets/img/unifound-7.ebf5c8c4.jpeg",revision:null},{url:"assets/img/unifound-8.667d1cae.jpeg",revision:null},{url:"assets/img/unifound-home.14166740.png",revision:null},{url:"assets/js/3616.b82e4786.js",revision:null},{url:"assets/js/5205.33425f85.js",revision:null},{url:"assets/js/5371.d980fa96.js",revision:null},{url:"assets/js/7375.bbcf6dc9.js",revision:null},{url:"assets/js/app.762ad7a3.js",revision:null},{url:"assets/js/runtime~app.ec3286e3.js",revision:null},{url:"assets/js/v-014445c8.ff142378.js",revision:null},{url:"assets/js/v-04710004.9d279a20.js",revision:null},{url:"assets/js/v-08ae5eba.d0163256.js",revision:null},{url:"assets/js/v-0e92d420.37bd0e3c.js",revision:null},{url:"assets/js/v-104cfa63.994bf453.js",revision:null},{url:"assets/js/v-14e6315a.82787797.js",revision:null},{url:"assets/js/v-1500d063.eec2fd7a.js",revision:null},{url:"assets/js/v-1549b190.19e9da0d.js",revision:null},{url:"assets/js/v-1a0de1a3.3a2a800e.js",revision:null},{url:"assets/js/v-1fa222d4.974a529f.js",revision:null},{url:"assets/js/v-20383a78.dc1431ee.js",revision:null},{url:"assets/js/v-22cd7d0c.5d721ed4.js",revision:null},{url:"assets/js/v-2686552a.5976f60e.js",revision:null},{url:"assets/js/v-28ddfa13.625b6857.js",revision:null},{url:"assets/js/v-29860ed0.37c02aa9.js",revision:null},{url:"assets/js/v-2a23f022.30db4d74.js",revision:null},{url:"assets/js/v-369295b4.143c8a72.js",revision:null},{url:"assets/js/v-3692bb1f.94c7d4f6.js",revision:null},{url:"assets/js/v-3706649a.2ae551d1.js",revision:null},{url:"assets/js/v-425958ce.9b510eb2.js",revision:null},{url:"assets/js/v-42c1fa44.7ed803d3.js",revision:null},{url:"assets/js/v-4322d0a7.1a476742.js",revision:null},{url:"assets/js/v-435bd49a.374b1716.js",revision:null},{url:"assets/js/v-45d74ec0.56112f98.js",revision:null},{url:"assets/js/v-461d4a7c.367012f3.js",revision:null},{url:"assets/js/v-48519846.4bb468d8.js",revision:null},{url:"assets/js/v-48975204.9723ec73.js",revision:null},{url:"assets/js/v-5c3fcdf6.79ce73ce.js",revision:null},{url:"assets/js/v-5e590ec6.719b31ec.js",revision:null},{url:"assets/js/v-622da02f.4ad911e1.js",revision:null},{url:"assets/js/v-66061b92.9e7705d3.js",revision:null},{url:"assets/js/v-69b23ddf.f73f65e0.js",revision:null},{url:"assets/js/v-6a28f6e0.2e0f83b4.js",revision:null},{url:"assets/js/v-6ba7e826.4ffb380e.js",revision:null},{url:"assets/js/v-6bba5e58.949cfb77.js",revision:null},{url:"assets/js/v-74bc627b.c4f12fc7.js",revision:null},{url:"assets/js/v-76cff034.29f7f030.js",revision:null},{url:"assets/js/v-772a5784.8ed3ad1f.js",revision:null},{url:"assets/js/v-780207b9.fbd0ec03.js",revision:null},{url:"assets/js/v-8059a7a6.06a4d0c2.js",revision:null},{url:"assets/js/v-83a77034.02f6f44c.js",revision:null},{url:"assets/js/v-8460eeb8.c15c8403.js",revision:null},{url:"assets/js/v-89ac2bec.06896e9a.js",revision:null},{url:"assets/js/v-8daa1a0e.41377c41.js",revision:null},{url:"assets/js/v-93cfbde4.d1b08495.js",revision:null},{url:"assets/js/v-96167c50.88e226f7.js",revision:null},{url:"assets/js/v-96536bf0.fdc6bb53.js",revision:null},{url:"assets/js/v-9e1961f8.4b3b258b.js",revision:null},{url:"assets/js/v-be92ea7e.88a0cff0.js",revision:null},{url:"assets/js/v-c73889da.9f1de0be.js",revision:null},{url:"assets/js/v-d42194b6.8625aed3.js",revision:null},{url:"assets/js/v-d7188082.b54e00d9.js",revision:null},{url:"assets/js/v-dbd38712.e07dd2ca.js",revision:null},{url:"assets/js/v-ed48bdf8.bf2b116e.js",revision:null},{url:"assets/js/v-f917537a.6a99f75a.js",revision:null},{url:"assets/js/v-fb711be8.37234da1.js",revision:null},{url:"baidu_verify_yQSeRkHJla.html",revision:"e34a6f863c56b8f0ccc227edb4e462b0"},{url:"calendar/2018-2019.html",revision:"507d331e30ba4da75bd296892c16178a"},{url:"calendar/2019-2020.html",revision:"a2cc060b5a7306eb82578ea24cdfcc5a"},{url:"calendar/2020-2021.html",revision:"121c6f3d6d24814452a8719f9b34f1c6"},{url:"calendar/2021-2022.html",revision:"742a776b9b2026d8695c77b2b04a9e65"},{url:"calendar/index.html",revision:"da66f76a85bccd4c7eafd7492c7f02b2"},{url:"contact/index.html",revision:"d012806de66f6d6c9a14d68be020b6f7"},{url:"emergency/index.html",revision:"52361107e4baa414dc7bf88cc20727d8"},{url:"facility/index.html",revision:"6a833b4fa82e2be73cc133c5a9c228fc"},{url:"facility/panolens/index.html",revision:"fdc530068f9b9603b7066498c5621c5e"},{url:"if-you-are-a-freshman/2021.html",revision:"a0ba5a64a3f0ddea929beae91566bab9"},{url:"if-you-are-a-freshman/index.html",revision:"10a1c998759c4c28293af74deda5b52e"},{url:"if-you-are-a-freshman/preview/index.html",revision:"f92a8841dee64782c70390b1bb41a9a6"},{url:"index.html",revision:"2efc37e5d54df15b7127251568f92e74"},{url:"life/catering/index.html",revision:"b766c93dc06e2c2f80ed2af8fbee0bd3"},{url:"life/dormitory/index.html",revision:"75a15bdceb9e0c292e05bd0b1ebb1eaa"},{url:"life/freshman-register/index.html",revision:"8584cb80421141adbf5703c7c6ce541e"},{url:"life/index.html",revision:"4efec6321aca5c4e2ebd77292dd02239"},{url:"life/sports-facility/index.html",revision:"297dca2d5328f857dd49feaa67a237ed"},{url:"logo-assets/touch/homescreen144.png",revision:"51742628b96a4d2c587eab560373962b"},{url:"logo-assets/touch/homescreen168.png",revision:"741edd656b98963d2ef2881ff00a7610"},{url:"logo-assets/touch/homescreen192.png",revision:"7182aab7d4c78e800943f2c59e57e5a0"},{url:"logo-assets/touch/homescreen48.png",revision:"34bcad7cabc11efd8a6859f4cc6d2526"},{url:"logo-assets/touch/homescreen512.png",revision:"0206c3548fcda8dd59055f45eb2f3f35"},{url:"logo-assets/touch/homescreen72.png",revision:"e93cd5bbf2dc0ad83e2e37938d0120ee"},{url:"logo-assets/touch/homescreen96.png",revision:"cd04040f900f20c8a4e2e204218a1c57"},{url:"media/index.html",revision:"a7b0ace10aacf61a9a8242eb1abeefda"},{url:"news/index.html",revision:"f55132f33cd46339ff671e2c31272574"},{url:"organizations/index.html",revision:"cbcc5a92207754d04cbfecb48edda98d"},{url:"organizations/registered-organization-2019.html",revision:"993f74826623867c1da4611be5e9f7df"},{url:"organizations/registered-organization-2020.html",revision:"660b847a5847d01a1ca8cdfed358baaf"},{url:"qr-code.jpg",revision:"ccaefe4a0f839087e7ded77788a6e2df"},{url:"service/blackboard/retrive-ics-url/index.html",revision:"8cc3427a3733e35b8b830ae7e243ad51"},{url:"service/campus-card/index.html",revision:"a338b5d3b96e5d45acb03d4af579735c"},{url:"service/email/index.html",revision:"a5084a315df90979840d2f5603b533fd"},{url:"service/index.html",revision:"4efc45d9babe75286060fd58b369de7e"},{url:"service/mail-and-express/index.html",revision:"fd0df75918a4e00d86aea04fbb0be88b"},{url:"service/matlab/index.html",revision:"dc6e1e624813868c95cc52736cad687f"},{url:"service/medical-treatment/index.html",revision:"e354bf946366a8aeb035fdfd33dcbaea"},{url:"service/network/apply-for-vpn/index.html",revision:"ac881d8c3860f16b4cfeae5b7a78f980"},{url:"service/network/choose-a-pad/index.html",revision:"66878776dca2b83e662182999b298256"},{url:"service/network/choose-a-router/index.html",revision:"a1c2e6f7308d64f5b7f4df4d7040864c"},{url:"service/network/eduroam/index.html",revision:"568b30509d74536e611b463910277f47"},{url:"service/network/index.html",revision:"96d6f318fa4c46d8e44e762b5f5e0873"},{url:"service/network/ipv6/index.html",revision:"e5a4a0ac76eeef6a00da0cc15da11266"},{url:"service/network/remote-desktop/index.html",revision:"662f3e28e5fe706fe61fd1d98df1134d"},{url:"service/sakai/index.html",revision:"9abea723629b846d6dd2e49d1d901962"},{url:"service/sid/index.html",revision:"d24767a3b012f27e154459cd2f4e8e8c"},{url:"service/ssc/index.html",revision:"665c9fa3b00c98d31d0029a4b0603532"},{url:"service/student-train-ticket/index.html",revision:"75021b73fed144ff370bc98674c65cf5"},{url:"service/unifound/index.html",revision:"7d97f1575bf723138886f6127ccfea0a"},{url:"service/work-wechat/index.html",revision:"8c48cbe1bb79384242abaea6dc3cb241"},{url:"site-help/index.html",revision:"cffe746967cc4af9c94877c6b21d31aa"},{url:"study/book-list-by-prof-yuan/2018/index.html",revision:"f7c9997445c751edff477d3383e4bda5"},{url:"study/borrow-books/index.html",revision:"a2968c7f605ba99cc5bd04720ab1fcdc"},{url:"study/by-shude-college/advice-on-study.html",revision:"dbc9ad13f50736c88a87428bb04c91ae"},{url:"study/by-shude-college/info-on-study.html",revision:"ef15fb00901a8d97da1b859cf104d28e"},{url:"study/index.html",revision:"ab87c7ce5a8b574875c326695c1d38ba"},{url:"surroundings/index.html",revision:"9f6dd170de3041e5ae9a7a0d7da097fe"},{url:"transport/holiday.html",revision:"4e29e202035604bd02656a507c943c89"},{url:"transport/index.html",revision:"05bcb795e91753417d804f8d17272426"},{url:"transport/redirect.html",revision:"62d63d762b79fae5a28a167f8034a123"},{url:"transport/workday.html",revision:"d21bd1a98fc893ecf4bd271bbc4e71d4"},{url:"wx_helper.js",revision:"222d712b269b25209f1f1d6e5920bd14"}],{})}));
