import{_ as i,a as o,b as l,c as h,d}from"./2-4.0a71aac4.js";import{_ as c,r as g,o as u,c as p,a as r,d as e,w as s,b as t,e as n}from"./app.62ff9cc6.js";const _={},f=n('<h1 id="通用教程-新手必看" tabindex="-1"><a class="header-anchor" href="#通用教程-新手必看" aria-hidden="true">#</a> 通用教程（新手必看）</h1><h2 id="必读前言" tabindex="-1"><a class="header-anchor" href="#必读前言" aria-hidden="true">#</a> 必读前言</h2><ul><li>本教程为<strong>通用教程</strong>，实际上<strong>适用于大部分材质</strong>，使用别的材质时也可参考本项说明。</li><li>不同材质如有特殊情况，需前往上级目录的“其他作品手册”里做进一步了解，而非只看本教程！ ——修改自《Misaka&#39;s Texture材质使用说明事项》</li></ul><hr><h2 id="关于材质的热知识" tabindex="-1"><a class="header-anchor" href="#关于材质的热知识" aria-hidden="true">#</a> 关于材质的热知识</h2><p>安装材质之前，你最好先安装 <strong>Optifine</strong>。因为 OptiFine 支持光影，而光影能够提供更多的效果支持，如材质表面的高光、反射或是凹凸效果。 尽量搭配一个<strong>较为完善</strong>的光影，如 BSL、iterationT、SEUS PTGI 等。因为上文中的更多效果直接由它们提供。完善的光影能够省去一些不必要的麻烦。 <strong>Forge</strong>与 <strong>Fabric</strong>是可选的，这取决于材质作者是否要求使用模组搭配材质，以及你自己是否想添加其他模组。</p><h2 id="如何安装-optifine-与光影" tabindex="-1"><a class="header-anchor" href="#如何安装-optifine-与光影" aria-hidden="true">#</a> 如何安装 Optifine 与光影</h2>',7),m=n('<h2 id="关于材质文件名中的版本号" tabindex="-1"><a class="header-anchor" href="#关于材质文件名中的版本号" aria-hidden="true">#</a> 关于材质文件名中的版本号</h2><ul><li><p>大部分材质包的前置都会标上版本号。以1.9-1.12为例：</p><ul><li><strong>1.9-1.12</strong>包含的真正版本是<strong>1.9-1.12.2</strong>；</li><li>版本号数字越大，版本越新；</li><li>如果你的游戏是<strong>1.10.2</strong>，请使用括号内（<strong>1.9-1.12</strong>）的版本；</li><li>如果你的游戏是<strong>1.19.2</strong>，请使用括号内（<strong>1.13-1.19</strong>）的版本。</li></ul></li><li><p>你可能会遇到的情况：</p><ul><li>选中材质包后，游戏提示不兼容。</li><li>此时忽略提示 <strong>直接使用</strong>即可，<strong>但需要注意以材质包标注的版本号为准。</strong></li></ul></li></ul><p><img src="'+i+'" alt="1-1.png"><br><strong>图1-1</strong></p><hr><h2 id="如何安装" tabindex="-1"><a class="header-anchor" href="#如何安装" aria-hidden="true">#</a> 如何安装</h2><ul><li><strong>获取的材质包为一个压缩包，如图2-1。</strong></li></ul><p><img src="'+o+'" alt="2-1.png"><br><strong>图2-1</strong></p><h3 id="直接使用" tabindex="-1"><a class="header-anchor" href="#直接使用" aria-hidden="true">#</a> 直接使用</h3><ul><li>直接将其放入游戏根目录的 <strong>resourcepacks</strong>文件夹内，在 <strong>资源包</strong> 设置中启用即可</li></ul><p><img src="'+l+'" alt="2-2.png"><br><strong>图2-2</strong></p><ul><li><strong>注意，如果上述操作在游戏内没有显示，则可能是以下几种情况之一：</strong><ul><li>材质包内部还有套娃的压缩包，需要将其拖出来游戏才能读取它；</li><li>材质包被作者或其他人加密压缩过，这需要你去寻找解压密码。密码一般在群公告、爱发电私信、宣传视频简介或评论区置顶评论等处存放，<strong>在你无处可寻之前最好不要在作者的材质群里直接开口问；</strong></li><li>材质包本身体积太大，游戏无法快速读取到它的信息，此时采用方案2即可解决。</li></ul></li></ul><h3 id="解压成文件夹" tabindex="-1"><a class="header-anchor" href="#解压成文件夹" aria-hidden="true">#</a> 解压成文件夹</h3><ul><li>需要将其如图2-3摆放</li></ul><p><img src="'+h+'" alt="2-3.png"><br><strong>图2-3</strong></p><ul><li>文件夹打开，确保内部为如图2-4三个文件这种格式，否则将无法读取</li></ul><p><img src="'+d+'" alt="2-4.png"><br><strong>图2-4</strong></p><ul><li>将 <strong>图2-3</strong> 中文件夹放入resourcepacks文件夹内，就可以在MC游戏中启用。</li></ul><hr><h2 id="进阶基础知识" tabindex="-1"><a class="header-anchor" href="#进阶基础知识" aria-hidden="true">#</a> 进阶基础知识</h2>',19),b=r("hr",null,null,-1),x=r("h2",{id:"误区纠正",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#误区纠正","aria-hidden":"true"},"#"),t(" 误区纠正")],-1);function k(v,C){const a=g("RouterLink");return u(),p("div",null,[f,r("p",null,[e(a,{to:"/instructions/java_shaders/"},{default:s(()=>[t("Java版光影通用教程（新手必看）")]),_:1})]),m,r("p",null,[e(a,{to:"/science/resourcepacks.html"},{default:s(()=>[t("MGC 大众科普")]),_:1})]),b,x,r("p",null,[e(a,{to:"/correct/"},{default:s(()=>[t("MGC 歧义及观点纠正")]),_:1})])])}const N=c(_,[["render",k],["__file","index.html.vue"]]);export{N as default};
