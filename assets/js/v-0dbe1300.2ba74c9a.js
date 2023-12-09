"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4235],{1862:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var l=n(8e3),i=n(6471);const a=(0,l.Uk)(" Besides the native features of img, support lazy load, custom placeholder and load failure, etc. "),r=(0,l._)("h2",{id:"basic-usage",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),(0,l.Uk)(),(0,l._)("strong",null,"Basic Usage")],-1),s=(0,l.Uk)("Indicate how the image should be resized to "),d=(0,l._)("code",null,"fit",-1),o=(0,l.Uk)(" its container by "),c=(0,l._)("code",null,"fit",-1),u=(0,l.Uk)(", same as native "),m={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("object-fit."),g=(0,l.uE)('<h3 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">vue</span>\n<span class="token code-block language-vue">\n&lt;template&gt;\n  &lt;div class=&quot;demo-image&quot;&gt;\n    &lt;div v-for=&quot;fit in fits&quot; :key=&quot;fit&quot; class=&quot;block&quot;&gt;\n      &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;\n      &lt;FieldImage shape=&quot;shape&quot; :size=&quot;100&quot; :src=&quot;url&quot; :fit=&quot;fit&quot; /&gt;\n      &lt;br&gt;\n      &lt;el-divider /&gt;\n      &lt;br&gt;\n      &lt;FieldImage shape=&quot;circle&quot; :size=&quot;100&quot; :src=&quot;url&quot; :fit=&quot;fit&quot; /&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script lang=&quot;ts&quot; setup&gt;\nconst fits = [&#39;fill&#39;, &#39;contain&#39;, &#39;cover&#39;, &#39;none&#39;, &#39;scale-down&#39;]\nconst url =\n  &#39;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&#39;\n&lt;/script&gt;\n\n&lt;style scoped&gt;\n.demo-image .block {\n  padding: 30px 0;\n  text-align: center;\n  border-right: solid 1px var(--el-border-color);\n  display: inline-block;\n  width: 20%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n.demo-image .block:last-child {\n  border-right: none;\n}\n.demo-image .demonstration {\n  display: block;\n  color: var(--el-text-color-secondary);\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n&lt;/style&gt;</span>\n<span class="token punctuation">```</span></span>\n\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>',3),p=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{"text-align":"center"}},"Name"),(0,l._)("th",{style:{"text-align":"center"}},"Description"),(0,l._)("th",{style:{"text-align":"center"}},"Type"),(0,l._)("th",{style:{"text-align":"center"}},"Mandatory")])],-1),b=(0,l._)("td",{style:{"text-align":"center"}},[(0,l._)("code",null,"src")],-1),h=(0,l._)("td",{style:{"text-align":"center"}},"the source of the image for an image avatar.",-1),f={style:{"text-align":"center"}},_=(0,l._)("strong",null,(0,i.zw)("string"),-1),y={style:{"text-align":"center"}},k=(0,l._)("strong",null,(0,i.zw)("True"),-1),x=(0,l._)("h2",{id:"attributes",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),(0,l.Uk)(" Attributes")],-1),w=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{"text-align":"center"}},"Name"),(0,l._)("th",{style:{"text-align":"center"}},"Description"),(0,l._)("th",{style:{"text-align":"center"}},"Type"),(0,l._)("th",{style:{"text-align":"center"}},"Default")])],-1),z=(0,l._)("td",{style:{"text-align":"center"}},[(0,l._)("code",null,"fit")],-1),q={style:{"text-align":"center"}},U=(0,l.Uk)("set how the image fit its container for an image avatar "),A=(0,l._)("strong",null,(0,i.zw)("fit / contain / cover / none / scale-down"),-1),W={style:{"text-align":"center"}},S=(0,l._)("strong",null,(0,i.zw)("string"),-1),D={style:{"text-align":"center"}},C=(0,l._)("strong",null,(0,i.zw)("cover"),-1),L=(0,l._)("td",{style:{"text-align":"center"}},[(0,l._)("code",null,"size")],-1),T={style:{"text-align":"center"}},B=(0,l.Uk)("avatar size "),F=(0,l._)("strong",null,(0,i.zw)("large"),-1),E=(0,l.Uk)(),I=(0,l.Uk)(),j=(0,l._)("strong",null,(0,i.zw)("default"),-1),N=(0,l.Uk)(),M=(0,l.Uk)(),P=(0,l._)("strong",null,(0,i.zw)("small"),-1),Z={style:{"text-align":"center"}},O=(0,l._)("strong",null,(0,i.zw)("String"),-1),V=(0,l.Uk)(),G=(0,l.Uk)(),J=(0,l._)("strong",null,(0,i.zw)("Number"),-1),R={style:{"text-align":"center"}},H=(0,l.Uk)((0,i.zw)("default")),K=(0,l._)("td",{style:{"text-align":"center"}},[(0,l._)("code",null,"shape")],-1),Q={style:{"text-align":"center"}},X=(0,l.Uk)("avatar shape "),Y=(0,l._)("strong",null,(0,i.zw)(" circle / shape"),-1),$={style:{"text-align":"center"}},ee=(0,l._)("strong",null,(0,i.zw)("string"),-1),te={style:{"text-align":"center"}},ne=(0,l._)("strong",null,(0,i.zw)("cover"),-1),le=(0,l._)("h2",{id:"example-for-developer",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),(0,l.Uk)(" Example for Developer")],-1),ie={href:"https://stackblitz.com/edit/fields-avatar?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ae=(0,l._)("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"},null,-1),re=(0,l.uE)('<h2 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>\n      └── Components                                <span class="token comment"># Global components</span>\n              └── Atoms                             <span class="token comment"># Atom components</span>\n                  └── FielAvatar                    <span class="token comment"># Field Avatar specific components.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),se={},de=(0,n(3860).Z)(se,[["render",function(e,t){const n=(0,l.up)("ExternalLinkIcon"),i=(0,l.up)("AvatarBasic"),se=(0,l.up)("el-tag"),de=(0,l.up)("el-divider");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("span",null,[a,r,(0,l._)("p",null,[s,d,o,c,u,(0,l._)("a",m,[v,(0,l.Wm)(n)])]),(0,l.Wm)(i),g,(0,l._)("table",null,[p,(0,l._)("tbody",null,[(0,l._)("tr",null,[b,h,(0,l._)("td",f,[(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[_])),_:1})]),(0,l._)("td",y,[(0,l.Wm)(se,{effect:"dark",round:""},{default:(0,l.w5)((()=>[k])),_:1})])])])]),x,(0,l._)("table",null,[w,(0,l._)("tbody",null,[(0,l._)("tr",null,[z,(0,l._)("td",q,[U,(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[A])),_:1})]),(0,l._)("td",W,[(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[S])),_:1})]),(0,l._)("td",D,[(0,l.Wm)(se,{effect:"dark",round:""},{default:(0,l.w5)((()=>[C])),_:1})])]),(0,l._)("tr",null,[L,(0,l._)("td",T,[B,(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[F,E,(0,l.Wm)(de,{direction:"vertical"}),I,j,N,(0,l.Wm)(de,{direction:"vertical"}),M,P])),_:1})]),(0,l._)("td",Z,[(0,l.Wm)(se,{effect:"Light",round:""},{default:(0,l.w5)((()=>[O,V,(0,l.Wm)(de,{direction:"vertical"}),G,J])),_:1})]),(0,l._)("td",R,[(0,l.Wm)(se,{effect:"dark",round:""},{default:(0,l.w5)((()=>[H])),_:1})])]),(0,l._)("tr",null,[K,(0,l._)("td",Q,[X,(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[Y])),_:1})]),(0,l._)("td",$,[(0,l.Wm)(se,{effect:"Light"},{default:(0,l.w5)((()=>[ee])),_:1})]),(0,l._)("td",te,[(0,l.Wm)(se,{effect:"dark",round:""},{default:(0,l.w5)((()=>[ne])),_:1})])])])]),le,(0,l._)("p",null,[(0,l._)("a",ie,[ae,(0,l.Wm)(n)])]),re])])}]])},5612:(e,t,n)=>{n.r(t),n.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-0dbe1300","path":"/docs/component/Atoms/FieldAvatar.html","title":"Avatar","lang":"en-US","frontmatter":{"title":"Avatar","category":["Component","Atom"],"tag":["Avatar","Atom","Component"],"footer":"<a href=\\"https://github.com/adempiere\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">ADempiere Community</a> | <a href=\\"https://www.adempiere.io/about/site\\">About Site</a>","summary":"Besides the native features of img, support lazy load, custom placeholder and load failure, etc. Basic Usage Indicate how the image should be resized to fit its container by fit, s","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/component/Atoms/FieldAvatar.html"}],["meta",{"property":"og:title","content":"Avatar"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-21T14:04:10.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"Avatar"}],["meta",{"property":"article:tag","content":"Atom"}],["meta",{"property":"article:tag","content":"Component"}],["meta",{"property":"article:modified_time","content":"2023-03-21T14:04:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","children":[{"level":3,"title":"Viwer Source","slug":"viwer-source","children":[]}]},{"level":2,"title":"Props","slug":"props","children":[]},{"level":2,"title":"Attributes","slug":"attributes","children":[]},{"level":2,"title":"Example for Developer","slug":"example-for-developer","children":[]},{"level":2,"title":"Directory","slug":"directory","children":[]}],"git":{"createdTime":1679407450000,"updatedTime":1679407450000,"contributors":[{"name":"Elsio Sanchez","email":"45974454+elsiosanchez@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"docs/component/Atoms/FieldAvatar.md","localizedDate":"March 21, 2023"}')}}]);