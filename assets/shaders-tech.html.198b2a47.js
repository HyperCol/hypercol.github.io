import{_ as a,r as i,o as s,c,a as e,b as o,d as l,w as d,e as t}from"./app.4b2dd80f.js";const h="/images/Octray.png",g="/images/shader_1.png",u="/images/SEUS_PTGI_GFME.png",_="/images/shader_2.png",p="/images/Kappa_PT.png",m="/images/shader_3.png",f="/images/QQ截图20221025102723.png",T="/images/QQ截图20221025103226.png",R="/images/QQ截图20221025104558.png",b="/images/QQ截图20220220224158.png",S={},x=t('<h1 id="着色器技术科普" tabindex="-1"><a class="header-anchor" href="#着色器技术科普" aria-hidden="true">#</a> 着色器技术科普</h1><h2 id="光线追踪、路径追踪与-rtx" tabindex="-1"><a class="header-anchor" href="#光线追踪、路径追踪与-rtx" aria-hidden="true">#</a> 光线追踪、路径追踪与 RTX</h2><h3 id="前言-传统渲染的局限性" tabindex="-1"><a class="header-anchor" href="#前言-传统渲染的局限性" aria-hidden="true">#</a> 前言：传统渲染的局限性</h3><ul><li>受限于计算机性能，早期游戏所渲染的画面都是<code>二维</code>的。所以我们平常看到的传统游戏的光照与反射等效果，都是<code>在屏幕内计算</code>的，只能看到屏幕内物体的反射与光线计算。但这样效果并不理想。于是一些人开始利用<code>光栅化渲染</code>去<code>预烘焙</code>游戏场景，使得光线可以<strong>与预先写入程序的物体交互</strong>并返回到屏幕内。</li><li><strong>简单说，就是游戏里各种光线反射都是程序员<code>预先写好</code>的，比如房间里有面镜子，程序员就要告诉它这个房间里有什么内容（预先写好的），然后镜子再计算反射</strong>。</li><li>但这种方式<strong>局限性太大</strong>，预烘焙<strong>制作成本极高</strong>（一个完美的小场景远景预烘焙就需要数十小时），而且<strong>不适用于大多动态场景</strong>（例如 <code>Minecraft</code> ，受限于自由创造的游戏玩法，基本无法进行预烘焙）。</li><li>于是<strong>基于三维空间实时渲染</strong>的光线追踪便进入了各大厂商的视野。然而，由于硬件性能不足，早期光追仅用于<code>离线渲染</code>（电影、CG等行业），直到 <code>RTX</code> 显卡为我们带来<code>光线追踪加速核心</code>后，光线追踪才进入大众视野，应用到游戏中的<strong>实时渲染</strong>（ <code>Minecraft</code> 可以使用特殊手段来进行加速和降噪，故不在此例中，下文会提到）。</li></ul><h3 id="光线追踪的概念" tabindex="-1"><a class="header-anchor" href="#光线追踪的概念" aria-hidden="true">#</a> 光线追踪的概念</h3><ul><li>目前光线追踪算法均基于构建体素空间 ，即将游戏内的内容导入三维空间进行渲染，可分为切割立方体（基本是Minecraft专用）与切割三角面两种方式。</li><li>目前光线追踪的方式可分为两大类，<code>正向光线追踪</code>与<code>逆向光线追踪</code>。</li><li><code>正向光线追踪</code>：在渲染时，场景中的光源会发射光线，光线在行进过程中与物体发生反射、折射等交互，最终撞击到摄像机（玩家视角）上，得出结果。</li><li>但这种方法过于消耗算力，而且物理学告诉我们**光路可逆，**于是游戏界光追采用了<code>逆向光线追踪</code>，即将上述过程反向，<strong>从玩家视角出发发射光源</strong>，并计算在这过程中的<code>光线交互</code>，最终撞击到光源或光线逸出场景后将结果返回给摄像机（玩家视角），我们将这个过程称为<code>求交运算</code>。</li></ul><h3 id="何为路径追踪" tabindex="-1"><a class="header-anchor" href="#何为路径追踪" aria-hidden="true">#</a> 何为路径追踪</h3><ul><li>路径追踪算法是基于<strong>蒙特卡洛采样算法</strong>的光线渲染方法，<strong>其核心思想与逆向光线追踪一致</strong>。</li><li><strong><code>Kajiya</code> 于 <code>1986</code> 年提出了路径追踪算法的理念</strong>，开创了基于蒙特卡洛采样算法的全局光照这一领域。路径追踪的基本思想是经过逆向光线追踪的一系列计算，撞击到光源后，用蒙特卡洛的方法，计算其<code>贡献</code>，作为像素的<code>颜色值</code>。</li><li><strong>简单来说，<code>路径追踪</code> = <code>光线追踪</code>+ <code>蒙特卡洛采样算法</code></strong>。</li></ul><h3 id="光线追踪在-minecraft-中的应用" tabindex="-1"><a class="header-anchor" href="#光线追踪在-minecraft-中的应用" aria-hidden="true">#</a> 光线追踪在 Minecraft 中的应用</h3>',9),V=t("<li><p>在 <code>Minecraft：Java Edition</code> 中，我们使用<code>路径追踪</code>算法。在上文中提到，<code>Minecraft</code> 由于其动态世界，故无法大范围使用预烘焙光栅。因此在 <code>Minecraft</code> 中是否存在光追，对画面的影响很大。具体方法为将 <code>Optifine</code> 自带的 <code>ShadowMap</code>**（原本用于绘制阴影）<strong>转化到<code>体素空间</code></strong>（即三维空间）**内来计算路径追踪。</p></li>",1),M=e("code",null,"辐照度缓存",-1),E=e("code",null,"Bedrock",-1),P=e("code",null,"RTX",-1),w=e("code",null,"SVGF过滤",-1),G={href:"https://www.bilibili.com/video/BV1X54y1v7za?zw",target:"_blank",rel:"noopener noreferrer"},v=t('<li><p>下面展示一些光线追踪在MC中与传统光影不同的效果：</p></li><li><p>完全物理的光线追踪阴影和衔接阴影、光线追踪全局光照</p><ul><li>Octray <img src="'+h+'" alt="Octray.png" title="Octray"></li><li>传统光影 <img src="'+g+'" alt="shader_1.png" title="传统光影"></li></ul></li><li><p>光源被阻挡形成的软阴影、正确的光照范围、光线在不同介质中的色散、不同光源不同颜色发光、光线混色</p><ul><li>SEUS PTGI GFME <img src="'+u+'" alt="SEUS_PTGI_GFME" title="SEUS PTGI GFME"></li><li>传统光影 <img src="'+_+'" alt="shader_2.png" title="传统光影"></li></ul></li><li><p>可以反射/折射视野外的物体、多次反射/折射、真实的粗糙与金属质感</p><ul><li>Kappa PT <img src="'+p+'" alt="Kappa_PT" title="Kappa PT"></li><li>传统光影 <img src="'+m+'" alt="shader_3.png" title="传统光影"></li></ul></li>',4),L=e("h3",{id:"rtx-与光线追踪的联系、-伪光追",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rtx-与光线追踪的联系、-伪光追","aria-hidden":"true"},"#"),o(" RTX 与光线追踪的联系、“伪光追”")],-1),X=e("p",null,"本段主要谈论 RTX 光追原理与伪光追。在阅读本段之前我们建议你先查看以下内容进行简单了解。",-1),C=e("p",null,[o("RTX / RX 显卡内有一个特殊的光线追踪运算部分，叫做 "),e("strong",null,"RT CORE"),o(" ，中文名称“"),e("strong",null,"光线追踪加速核心"),o("”。在光线追踪的概念里我们提到过"),e("strong",null,"求交"),o("运算，"),e("strong",null,"而 RT CORE 的主要作用即为加速求交运算"),o("。所以说"),e("strong",null,"RTX 只是用于加速光线追踪运算用"),o("，并不直接计算全部光追过程。")],-1),k=t('<li><p>下面的第一二张图摘自英伟达20系显卡发布会</p><ul><li>可见，即使是GTX系列也有着光追计算能力 <img src="'+f+'" alt="QQ截图20221025102723.png" title="可见，即使是GTX系列也有着光追计算能力"></li><li>图中最上面的一句话“Turing 架构相比 Volta 架构的光线追踪性能提升了六倍” <img src="'+T+'" alt="QQ截图20221025103226.png" title="图中最上面的一句话“Turing 架构相比 Volta 架构的光线追踪性能提升了六倍”"><img src="'+R+'" alt="QQ截图20221025104558.png" title="TITAN V 是唯一使用 Volta 架构的显卡，其并没有搭载光追核心"></li></ul></li><li><p>基于第一张图，没有什么好说的，事实就是事实。基于第二张图和第三张图，如果你认为不使用光追核心运算的就是伪光追，那么请问基于 Turing 架构的20系显卡，<strong>光追性能六倍提升于没有光追核心</strong>的 Volta 架构显卡 TITAN V ，提升是从哪来的呢？伪光追性能乘六，还是零乘六不等于零？这显然是说不通的。</p></li><li><p>此外，我们在上文提到过，计算机图形学的光线追踪早在<strong>上世纪</strong>就已经由<strong>数学科学组织提出</strong>了，况且，在计算机领域最早使用的光线追踪属于<strong>离线渲染</strong>（例如C4D、Blender和电影渲染一类），直到近年硬件飞速发展，英伟达才首次将其推广到<strong>在线渲染</strong>领域。但即便如此，<strong>英伟达并不是第一个在游戏界中应用光追</strong>的厂商。例如 <strong>SEUS 光影作者</strong>早在<strong>2017年</strong>就已经开始<strong>路径追踪测试，<strong>并于</strong>18年年初</strong>在其 Patreon 上<strong>发布第一个开发进度贴</strong>，而<strong>RTX 20系显卡首次发布在2018下半年</strong>。</p><ul><li>援引自视频《BSL到底是不是光追？光追为mc带来了什么？》 <img src="'+b+'" alt="图片" title="援引自视频《BSL到底是不是光追？光追为mc带来了什么？》"></li></ul></li>',3),Q=e("p",null,[o("而且，"),e("strong",null,"光线追踪技术只是一系列算法，不取决于硬件是否支持"),o("，"),e("strong",null,"CPU（不依靠GPU） 也可以运行 PC 光追"),o("。在极客湾的一期视频中，演示了手机上运行 Windows 11 on ARM 系统，并在视频末尾（约 23:40 左右开始演示）展示了用骁龙845运行 PC 端实时RTX光追 demo ，视频如下：")],-1),B={href:"https://www.bilibili.com/video/BV1MU4y137Yi",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[e("p",null,[e("strong",null,"所以说光线追踪并不是英伟达或 AMD 的专属名词或专利技术。")])],-1),A=e("li",null,[e("p",null,[o("至于 DLSS ，则是通过训练人工智能，将游戏分辨率降低后再智能放大回原分辨率，与 SEUS PTGI 的 HRR 技术相似（只不过 HRR 并没有用到人工智能的一系列功能，而是单纯采用时间性抗锯齿算法——TAA，进行多帧超采样放大），而且DLSS是依靠RTX显卡中的 "),e("strong",null,"Tensor Core"),o(" 来运算，与 RT CORE 并无联系，"),e("strong",null,"所以DLSS与光追技术并无直接联系"),o("。")])],-1),y=e("p",null,"关于 JAVA 版光追，详见这个视频：",-1),z={href:"https://www.bilibili.com/video/BV1X54y1v7za",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[e("p",null,[o("至于光栅化，引用内容内已经说过，"),e("strong",null,[o("现在绝大多数游戏的光追都是 "),e("code",null,"光栅化"),o("+"),e("code",null,"光追"),o(" 混合渲染")]),o("，并无混合光追就是伪光追的说法。 "),e("em",null,[e("strong",null,"而且，RTX 光追在部分 GTX 显卡上也可以开启，只是 Mojang 刻意限制。一般的3A大作都有支持，甚至 GTX 1660 能在《古墓丽影：暗影》的 1080p 最高档光线追踪下取得复杂场景平均 30fps 的成绩"),o("。")])])],-1),U=t('<h2 id="全局光照" tabindex="-1"><a class="header-anchor" href="#全局光照" aria-hidden="true">#</a> 全局光照</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>一般来说，<code>全局光照</code>=<code>直接光照</code>+<code>间接光照</code>。全局光照，表现了直接照明和间接照明的综合效果。它有多种实现方法，例如<code>辐射度</code>、<code>光线追踪</code>、<code>环境光遮蔽（ambient occlusion）</code>、<code>光子贴图</code>、<code>Light Probe</code>等。当光从光源被发射出来后，碰到障碍物就反射和折射，经过无数次的反射和折射，物体表面和角落都会有光感，像真实的自然光。 全局光照计算量很大。渲染带有全局光照效果的图片，耗时会较长（取决于场景复杂度）。渲染静态图片可以接受这较长的耗时，但渲染视频或者应用到游戏时，要求的渲染时间就要减少很多，于是便有了<strong>反向追踪算法（即蒙特卡洛算法）</strong>。此算法以摄像机视角为基准，仅计算可见的地方，这样就可以在不牺牲质量的情况下提高渲染效率。</p><h3 id="reflective-shadow-maps" tabindex="-1"><a class="header-anchor" href="#reflective-shadow-maps" aria-hidden="true">#</a> Reflective Shadow Maps</h3><p>Reflective Shadow Maps，简称RSM。它是一种实现全局光照的方式，原理为：将直接光照能够照亮的像素点作为次级光源，让它们照亮以它们为中心的像素。</p>',5),N={href:"https://zhuanlan.zhihu.com/p/357259069",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"light-propagation-volumes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#light-propagation-volumes","aria-hidden":"true"},"#"),o(" Light Propagation Volumes")],-1),F=e("p",null,"Light Propagation Volumes（光照传播体积），是CryEngine3 提出的一种实时的、无需任何预计算的全局光照技术，其在RSM和SH的基础上创造性地提出了使用体素来存储、传播间接光照的方法。 LPV首先将整个场景划分为一个个的小格子（体素），将整个场景离散开来，直接计算每个格子内的光照是不现实的，解决方法是让光照像墨滴一样在这些格子中弥散、传播，从而计算最终到达着色点的间接光照。",-1),K={href:"https://zhuanlan.zhihu.com/p/412287249",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"voxel-global-illumination",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#voxel-global-illumination","aria-hidden":"true"},"#"),o(" Voxel Global Illumination")],-1),H=e("p",null,"类似于LPV，Voxel Global Illumination（体素全局光照）也是一个两趟的、实时的全局光照算法，它以体积渲染作为算法核心，将场景通过体素离散化为树状结构并存储光照计算相关信息，并在渲染时通过体素圆锥追踪来计算光照，相比LPV拥有更好的效果。",-1),j={href:"https://zhuanlan.zhihu.com/p/414691569",target:"_blank",rel:"noopener noreferrer"};function W(Y,q){const n=i("ExternalLinkIcon"),r=i("RouterLink");return s(),c("div",null,[x,e("ul",null,[V,e("li",null,[e("p",null,[o("不依靠 RT CORE ，JAVA 版光追光影又是如何做到高帧的实时运算呢？在这里，我们主要利用"),M,o("来优化光追运算量（实际 "),E,o(" 版的 "),P,o(" 光追也有用到这个技术），利用 "),w,o(" 进行降噪处理（ JE 和 BE 的辐照度缓存技术在 "),e("a",G,[o("BSL到底是不是光追？光追为mc带来了什么？【素影之下 #2】×【光影实验室 #3】"),l(n)]),o(" 这个视频的 5:30、8:38 分别有讲到）。")])]),v]),L,X,e("ul",null,[e("li",null,[l(r,{to:"/correct/RT_mistakes.html"},{default:d(()=>[o("MGC 歧义及观点纠正")]),_:1})])]),C,e("ul",null,[k,e("li",null,[Q,e("ul",null,[e("li",null,[e("a",B,[o("给手机装Windows11！还能玩大型游戏？！"),l(n)])])])]),I,A,e("li",null,[y,e("ul",null,[e("li",null,[e("a",z,[o("BSL到底是不是光追？光追为mc带来了什么？【素影之下 #2】×【光影实验室 #3】"),l(n)])])])]),O]),U,e("ul",null,[e("li",null,[o("参考资料："),e("a",N,[o("【论文复现】Reflective Shadow Maps"),l(n)])])]),D,F,e("ul",null,[e("li",null,[o("参考资料："),e("a",K,[o("Light Propagation Volumes"),l(n)])])]),J,H,e("ul",null,[e("li",null,[o("参考资料："),e("a",j,[o("Voxel Global Illumination 体素全局光照（一）"),l(n)])])])])}const $=a(S,[["render",W],["__file","shaders-tech.html.vue"]]);export{$ as default};
