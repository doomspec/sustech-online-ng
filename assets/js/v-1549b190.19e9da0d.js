"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7494],{435:(e,i,r)=>{r.r(i),r.d(i,{data:()=>a});const a={key:"v-1549b190",path:"/service/network/choose-a-router/",title:"📶选择一台合适的路由器",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"我有需要购买路由器吗？",slug:"我有需要购买路由器吗",children:[]},{level:2,title:"Wi-Fi5还是Wi-Fi6？",slug:"wi-fi5还是wi-fi6",children:[]},{level:2,title:"我应该重点关注什么？",slug:"我应该重点关注什么",children:[]},{level:2,title:"按照价格选择",slug:"按照价格选择",children:[{level:3,title:"100元左右",slug:"_100元左右",children:[]},{level:3,title:"200-400元",slug:"_200-400元",children:[]},{level:3,title:"400元+",slug:"_400元",children:[]}]},{level:2,title:"我需要软路由吗？",slug:"我需要软路由吗",children:[]}],filePathRelative:"service/network/choose-a-router/README.md",git:{createdTime:1596610487e3,updatedTime:1606729025e3,contributors:[]}}},1045:(e,i,r)=>{r.r(i),r.d(i,{default:()=>g});var a=r(6252);const t=(0,a.Wm)("h1",{id:"📶选择一台合适的路由器",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#📶选择一台合适的路由器","aria-hidden":"true"},"#"),(0,a.Uk)(" 📶选择一台合适的路由器")],-1),l=(0,a.Uk)("by "),n={href:"https://github.com/sparkcyf",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("@sparkcyf"),s={class:"custom-container tip"},d=(0,a.Wm)("p",{class:"custom-container-title"},"TIP",-1),o=(0,a.Uk)("本文参考了acwifi.net的"),c={href:"https://www.acwifi.net/9985.html",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("相关文章"),u=(0,a.Uk)("。"),W=(0,a.Wm)("p",null,"本文写于2020年8月。",-1),f=(0,a.uE)('<h2 id="我有需要购买路由器吗" tabindex="-1"><a class="header-anchor" href="#我有需要购买路由器吗" aria-hidden="true">#</a> 我有需要购买路由器吗？</h2><p>除非你有如以下的需求，学校提供的网络服务一般来说已经够用了。</p><ul><li>居住于湖畔，并且办了电信的自费宽带。</li><li>觉得学校提供的无线速率太慢（学校的路由器使用802.11ac 40Mhz频宽（2*2/3*3），最大单向传输速率约为450Mbps）。</li><li>宿舍的无线信号覆盖较差。</li><li>需要连接其他电子设备（如台式机，开发板，存储服务器等），或需要对局域网进行控制。</li><li>使用了无DHCPv6功能的设备，但还想使用IPv6。</li></ul><h2 id="wi-fi5还是wi-fi6" tabindex="-1"><a class="header-anchor" href="#wi-fi5还是wi-fi6" aria-hidden="true">#</a> Wi-Fi5还是Wi-Fi6？</h2><p>目前，苹果与安卓厂商的旗舰设备均已经支持Wi-Fi6（802.11ax），不少使用Intel网卡的新电脑也已经支持Wi-Fi6。相对Wi-Fi5（802.11ac），Wi-Fi6能能够带来显著的速度提升。</p><blockquote><p>随着一波新品WI-FI 6上市，那么问题来了：“廉颇老矣,尚能饭否”。一些老的WI-FI 5路由器还可以购买吗？我不知道，因为没对比过，最近玩廉颇老是输，才想起这个问题。但可以肯定的是同一台WI-FI 6路由器，用支持WI-FI 6的手机会比只支持WI-FI 5的手机在近、中、远的距离上速度都要快，再远就两者都没有信号了。</p></blockquote><p>但值得注意的是，除了Wi-Fi技术的版本，天线阵列数量和路由器支持的频宽也是选择路由器的重要因素。比如，支持160Mhz的Wi-Fi5路由器相比只支持80Mhz的Wi-Fi6路由器就能达到更高的理论带宽速度。</p><p>同时，苹果目前发布的电脑所内置的网卡支持3*3天线，但不支持160Mhz和Wi-Fi6，若你使用苹果电脑，可以根据这一点选择合适的路由器。</p><h2 id="我应该重点关注什么" tabindex="-1"><a class="header-anchor" href="#我应该重点关注什么" aria-hidden="true">#</a> 我应该重点关注什么？</h2><ul><li><p>不要再买百兆/2.4G only的路由器了。<strong>请至少购买一个有千兆网口，支持双频的路由器</strong>（况且现在千兆双频的路由器也只要100不到）。</p></li><li><p><strong>关注路由器是否支持IPv6</strong>。教育网的一大优势就是IPv6所带来的资源和更加空闲的网络。你同是还应该关注路由器的相关设置中是否提供了IPv6防火墙的开关功能。</p></li><li><p><strong>能否刷机</strong>。由于电信的自费网络需要登陆，还会定时把你踢下线，在路由器上部署一个自动登录脚本是相当有必要的，但这就需要路由器能刷机，或者能够拿到路由器的控制权了。</p></li></ul><h2 id="按照价格选择" tabindex="-1"><a class="header-anchor" href="#按照价格选择" aria-hidden="true">#</a> 按照价格选择</h2><h3 id="_100元左右" tabindex="-1"><a class="header-anchor" href="#_100元左右" aria-hidden="true">#</a> 100元左右</h3><p>99元的水星D191G或D196G，3*3天线，配合3*3天线的网卡，实测最快传输速率可达700Mbps左右。支持IPv6，但无法控制IPv6防火墙。系统由于用的是vxWorks，刷机就不用想了。</p><p>150左右的红米ac2100。3*3天线，支持160Mhz带宽，还可以刷机，在200元以内算是性价比最优的路由器了。</p><h3 id="_200-400元" tabindex="-1"><a class="header-anchor" href="#_200-400元" aria-hidden="true">#</a> 200-400元</h3><p><strong>200元左右的华为AX3/荣耀路由pro2</strong>，2*2天线。160Mhz的Wi-Fi6路由器，实测使用Intel的AX200网卡也可以跑到700Mbps左右（理论速率1.2Gbps）。支持IPv6，也有一些华为特色功能，也带USB口。但依旧没有IPv6防火墙设置。华为的路由器也不用想着刷机了。</p><p><strong>300元左右的小米AX1800</strong>。2*2天线，支持80Mhz，没有USB口。带外置功放，相比ax3信号会好一些。已经有人开出了ssh，支持刷机估计是迟早的事情。</p><p><strong>300元左右的小米AX3 Pro</strong>。相比AX3多了外置功放，但宿舍这么小的空间，没有的话问题也不太大。</p><h3 id="_400元" tabindex="-1"><a class="header-anchor" href="#_400元" aria-hidden="true">#</a> 400元+</h3><p><strong>600元左右的小米AX3600</strong>。4*4天线，支持160Mhz。参数上来看还是很不错的。也能开SSH，估计过段时间就能刷机了。</p><h2 id="我需要软路由吗" tabindex="-1"><a class="header-anchor" href="#我需要软路由吗" aria-hidden="true">#</a> 我需要软路由吗？</h2><p>如果你需要进行有加解密运算的工作，那软路由还是有必要的。或者如果你只是把路由器当AP，而需要另一个计算设备处理路由相关的工作，那也可以考虑购置一个。</p>',22),g={render:function(e,i){const r=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[t,(0,a.Wm)("p",null,[l,(0,a.Wm)("a",n,[h,(0,a.Wm)(r)])]),(0,a.Wm)("div",s,[d,(0,a.Wm)("p",null,[o,(0,a.Wm)("a",c,[p,(0,a.Wm)(r)]),u]),W]),f],64)}}}}]);