import{_ as e,o,c as d,e as c}from"./app.bb88cfe0.js";const i={},r=c('<h1 id="光影加载问题" tabindex="-1"><a class="header-anchor" href="#光影加载问题" aria-hidden="true">#</a> 光影加载问题</h1><h2 id="放入光影后在选择界面没有看见光影包" tabindex="-1"><a class="header-anchor" href="#放入光影后在选择界面没有看见光影包" aria-hidden="true">#</a> 放入光影后在选择界面没有看见光影包</h2><ul><li><p><strong>光影包可能出现损坏，需要重新下载</strong></p><ul><li>一些浏览器（如 Safari）默认不能正确处理压缩文件。你可以关闭 &quot;下载后打开安全文件&quot;（只适用于 Safari），或者使用不同的浏览器，如火狐或谷歌。</li></ul></li><li><p><strong>光影包需要解压</strong></p><ul><li>有些光影包甚至可能一开始就被<strong>错误地压缩</strong>了。在这种情况下，试着<strong>手动解压文件</strong>。解压后的光影文件夹结构应该是<code>.minecraft/shaderpacks/光影名/shaders/光影文件</code>。</li><li>如果你不知道你的 <code>.minecraft</code> 文件夹在哪里，请在设置里打开<code>资源包</code>，点击<code>资源包文件夹</code>，再在弹出的资源管理器的地址栏修改定向至 <code>.minecraft</code> 文件夹。</li></ul></li><li><p><strong>光影包被放置在错误的文件夹中</strong></p><ul><li>请检查你的光影包放置路径是否正确。</li></ul></li></ul><h2 id="开光影后没有效果" tabindex="-1"><a class="header-anchor" href="#开光影后没有效果" aria-hidden="true">#</a> 开光影后没有效果</h2><ul><li><p><strong>光影包读取出现问题</strong></p><ul><li>尝试将光影包解压之后再加载。有时光影包可能被有问题的压缩，或者光影包文件中含有无法读取的中文名说明文件，导致光影在压缩包状态下无法被正常读取。</li><li>若使用的光影 API 是 <code>Iris</code> ，则应切换为其它光影如 <code>BSL</code> 、 <code>Complementary Shader</code> 等。该 API 本身就不兼容许多光影，也不适合作为大多数入门玩家的第一选择。</li><li>若同时伴随着左下角的<code>一大串报错</code>，同时在切换光影界面的底部看到显卡型号为 <code>Intel 核显</code> ，应前往显卡驱动面板，<strong>启用独立显卡运行 MC 。</strong> 不理解的可直接百度<code>如何启用独立显卡</code> 。</li><li>若读取时提示<code>需要更新 OptiFine Z1</code> ，而 OptiFine 已发布的最新版<strong>远低于</strong>该版本时，意味着着色器可能只支持 <code>1.16.5 G7 及以上</code>的 OptiFine。如果你是 1.12.2 玩家，可以尝试通过添加 <a href="">AdvancedShader</a> 模组来解决问题。</li></ul></li></ul><h2 id="开光影后游戏崩溃" tabindex="-1"><a class="header-anchor" href="#开光影后游戏崩溃" aria-hidden="true">#</a> 开光影后游戏崩溃</h2><ul><li><p>有<strong>两种原因</strong>：<code>游戏进程崩溃</code>，和 <code>Java 虚拟机崩溃</code>。这两种类型都会产生一个崩溃日志文件，而这个崩溃日志对于诊断问题是<strong>绝对必要</strong>的。</p><ul><li><code>游戏进程崩溃</code>会把这个文件放在<code>.minecraft/crash-reports/crash-(date)-(time)-(client or server).txt</code>；</li><li><code>Java虚拟机崩溃</code>会把这个文件放在<code>.minecraft/hs_err_pid(number).log</code>。</li></ul></li><li><p>如果你不知道你的崩溃原因，请检查这两个文件。如果你有一个以上的崩溃日志，而你不知道哪一个是正确的，请删除所有现有的崩溃日志并再次启动游戏。当它第二次崩溃时，将只有一个崩溃日志在两个地方之一。如果你看不懂，请将它发到求助频道寻求帮助。</p></li><li><p>对于<code>游戏进程崩溃</code>，如果崩溃日志显示 <code>java.lang.NoSuchFieldError: field_191308_b</code>，而你的版本是 <code>1.12.2</code>，那么有<strong>两种方法</strong>可以解决这个问题：</p><ul><li>更新到最新的 OptiFine 版本。你需要在 OptiFine 的下载页面上点击 &quot;显示所有版本&quot;，以便找到 1.12.2 的版本。</li><li>删除光影包内的<code>/shaders/entity.properties</code>。你需要解压缩光影的压缩文件，以便修改其内容。如果你的崩溃日志没有提到这两个特定的错误，那么请在求助频道中上传日志并询问它。</li></ul></li><li><p>对于 <code>Java 虚拟机崩溃</code>，请打开崩溃日志并在顶部搜索关键词。如果提到了<strong>antio6axx.dll</strong>，那么你需要将你的 AMD 驱动降级到 <code>20.4.2</code> 版本。此外，截至2022年11月末，如果<code>AMD显卡</code>的用户在<strong>加载一些光影时</strong>游戏崩溃，可以优先尝试将显卡驱动降回<code>22.6.1</code>或<code>22.5.1</code>版本。如果降级不能解决你的问题，或者问题是其他东西，那么请在主聊天频道中上传日志并询问它。</p></li></ul><h2 id="游戏未崩溃-但画面看起来不正常" tabindex="-1"><a class="header-anchor" href="#游戏未崩溃-但画面看起来不正常" aria-hidden="true">#</a> 游戏未崩溃，但画面看起来不正常</h2><ul><li><strong>所有光影都不保证加载了就能正常使用。</strong> 有时，它可能与你的显卡、图形驱动或其他已安装的 Mod 不兼容。</li><li>调试光影时，首先要寻找的是的 <code>invalid programs</code> 错误。如果一个光影编译失败，当你启用该光影包时，你会在聊天菜单中看到 <code>invalid programs</code>。然而，它不会告诉你实际问题是什么。对于这一点，你需要查看你的日志文件。 <ul><li>如果你安装了Forge，这可以在<code>.minecraft/logs/fml-client-latest.log</code>中找到。</li><li>否则，就去<code>.minecraft/logs/latest.log</code>。</li></ul></li><li>把这个日志文件上传到主聊天频道，我们会帮你找出问题所在。如果可以，最好<strong>重启客户端，加载一次光影后关闭再上传你的日志。</strong> 这样，有问题的将是你日志文件中的最后一个，错误信息也不容易被其他的信息掩盖，更容易被找到。</li><li>注意：如果你的聊天记录显示 <code>OpenGL Error</code>，你可以忽略这一点，这与无效的程序无关。（如果这些信息打扰了你，你可以通过 <code>视频设置 &gt; 其他 &gt; 显示GL错误</code> 来禁用它们，但隐藏GL错误不会隐藏无效的程序错误）。</li><li>如果你没有任何无效的程序，接下来要检查的是 Mods。试着只用 <code>OptiFine + 纯净版本</code> 来运行光影包，而不使用其他东西，不要启动 Forge 版本。如果它正常了，那就可能是 Mod 的问题了。幸运的是，大多数Mod都有配置选项，可以让你在不删除整个 Mod 的情况下禁用有问题的 Mod 功能。配置文件可以在<code>.minecraft/config</code>中找到。</li><li>在 1.13 以上版本中，Forge 配置文件被分成<code>客户端</code>、<code>服务器</code>和<code>普通</code>配置文件。不是每个 Mod 都会有所有这三个文件。在遇到问题时，应优先打开<code>客户端配置文件</code>。如果 Mod 没有客户端的配置文件，再试试<code>普通配置文件</code>。<strong>不要尝试通过修改服务器配置文件来修复这个问题。</strong></li></ul>',9),l=[r];function t(a,n){return o(),d("div",null,l)}const h=e(i,[["render",t],["__file","shaders.html.vue"]]);export{h as default};
