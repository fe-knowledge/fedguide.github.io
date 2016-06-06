---
layout: default
title: CSS编码规范
order: 5
category: false
---

## CSS编码规范
----------

### 编码规范
CSS样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译

文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：

- HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
- BOM（byte-order mark）和（或）@charset
- Link 中的元数据设置（如果有的话）
- 引用样式表字符集或文档编码（如果有的话）
- 假定为 UTF-8 编码

更多关于样式编码,请参阅：[CSS style sheet representation](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#charset)

### 代码风格

#### 代码格式化
样式书写一般有两种：一种是紧凑格式 (Compact)
{% highlight css %}
.hb-fed{ display: block;width: 50px;}
{% endhighlight %}
一种是展开格式（Expanded）
{% highlight css%}
.hb-fed{
    display: block;
    width: 50px;
}
{% endhighlight %}

#### 代码大小写
样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
{% highlight css %}
/* 推荐 */
.hb-fed{
    display:block;
}

/* 不推荐 */
.HB-FED{
    DISPLAY:BLOCK;
}
{% endhighlight %}

#### 选择器
- 尽量少用通用选择器 `*`
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器
{% highlight css %}
/* 推荐 */
.hb-fed {}
.hb-fed li {}
.hb-fed li p{}

/* 不推荐 */
*{}
#hb-fed {}
.hb-fed div{}
{% endhighlight %}

#### 属性值引号
css属性值需要用到引号时，统一使用单引号
{% highlight css %}
/* 推荐 */
.hb-fed {
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.hb-fed {
	font-family: "Hiragino Sans GB";
}
{% endhighlight %}

#### 属性书写顺序
建议遵循以下顺序：

- 布局定位属性：display / position / float / clear / visibility / overflow
- 自身属性：width / height / margin / padding / border / background
- 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
- 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
{% highlight css %}
.hb-fed {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
{% endhighlight %}
更多属性顺序,请参阅：[mozilla官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

#### CSS3浏览器私有前缀写法
CSS3 浏览器私有前缀在前，标准前缀在后
{% highlight css %}
.hb-fed {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
{% endhighlight %}
更多关于浏览器私有前辍写法,请参阅：[Vendor-specific extensions](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)

### 注释规范
- 注释以字符 `/*` 开始，以字符 `*/` 结束
- 注释不能嵌套
{% highlight html %}
/*注释*/
{% endhighlight %}

#### 模块注释
注释内容第一个字符和最后一个字符都是一个空格字符，`/*` 与 模块信息描述占一行，多个横线分隔符-与 `*/` 占一行，行与行之间相隔两行
{% highlight css %}
/* 模块 A
---------------------------------------------------------------- */
.mod-a {}


/* 模块 B
---------------------------------------------------------------- */
.mod-b {}

{% endhighlight %}

#### 文件信息注释
在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息
{% highlight css %}
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2016-06-06
 */
{% endhighlight %}

### 重置样式
> 系统内部已经默认重置样式

#### 移动端
{% highlight css %}
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Arial; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
{% endhighlight %}

#### PC端
{% highlight css %}
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
{% endhighlight %}

### 常用查询语句
媒体查询类型浏览器支持情况：[CSS3 Media Queries overview](http://cssmediaqueries.com/overview.html)

#### 常用查询语句
判断设备横竖屏
{% highlight css %}
/* 横屏 */
@media all and (orientation :landscape) {

}

/* 竖屏 */
@media all and (orientation :portrait) {

}
{% endhighlight %}
判断设备宽高
* 设备宽度大于 320px 小于 640px */
{% highlight css %}
@media all and (min-width:320px) and (max-width:640px) {

}
{% endhighlight %}
判断设备像素比
{% highlight css %}
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {

}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {

}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {

}
{% endhighlight %}

### 常用设备设置

#### iPhones
{% highlight css %}
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {

}

/* Portrait */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
{% endhighlight %}

#### Galaxy Phones
{% highlight css%}
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- Galaxy S4 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}

/* ----------- Galaxy S5 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
{% endhighlight %}

#### HTC Phones
{% highlight css%}
/* ----------- HTC One ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
{% endhighlight %}

#### iPads
{% highlight css%}
/* ----------- iPad mini ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 1 and 2 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 3 and 4 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) {

}
{% endhighlight %}

### 移动端常用私有属性
目前两大主流移动平台为 iOS 和 Android，有不少带 -webkit- 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。

WebKit CSS 属性中的一部分已经被包含在 CSS 规范草案中，并且可能成为最后的推荐标准，但目前仍然是试验性的属性，还有一些属性是不规范的属性，它们没有出现在跟踪规范中。

#### -webkit-scrollbar
`-webkit-scrollbar` 是-webkit-私有的伪元素，用于对拥有overflow属性的区域 自定义滚动条的样式。

譬如，为了隐藏滚动条，你可以这么做：
{% highlight css%}
.scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
}
{% endhighlight %}

除了对整个滚动条的控制外，Webkit还提供了控制对滚动条各组成部分的表现渲染的伪元素，甚至具体到滚动条的各种状态行为的伪类。

##### 滚动条各块组成表现渲染的伪元素
一般而言，滚动条的主要组成部分包括：

- 滚动按钮 — 滚动按钮的夹角则被称为滚动角(corner)。
- 轨道 — 轨道(track)可以进一步分为轨枕(track pieces) 和滑块(thumb)。
Webkit则根据滚动条各组成部分，提供了不同的伪元素来自定义样式。

`::-webkit-scrollbar`：滚动条整体部分。可设置width、height、background、border等。

`::-webkit-scrollbar-button`：滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track`：轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track-piece`：轨枕，也就是除去滚动滑块的部分。

`::-webkit-scrollbar-thumb`：滚动滑块，也就是滚动条里面可以拖动的那部分。

`::-webkit-scrollbar-corner`：滚动按钮的夹角则被称为滚动角。

`::-webkit-resizer`：用于定义右下角拖动块的样式。

需要注意的是：若是水平滚动条，则width属性不起作用，height属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则height属性不起作用，width属性用来控制相应部分的宽度。

##### 滚动条各块组成的伪元素
下面的伪类可以应用到上面的伪元素中。
`:horizontal`：选择水平方向的滚动条。

`:vertical`：选择垂直方向的滚动条。

`:decrement`：适用于滚动按钮和轨枕。选择能够使得视窗位置递减状态(例如，垂直滚动条向上滚动，水平滚动条向左滚动。)的滚动按钮或轨枕。

`:increment`：适用于滚动按钮和轨枕。选择能够使得视窗位置递增状态(例如，垂直滚动条向下滚动，水平滚动条向右滚动。)的滚动按钮或轨枕。

`:start`：适用于滚动按钮和轨枕。选择位于滚动滑块前边的滚动按钮和轨枕。

`:end`：适用于滚动按钮和轨枕。选择位于滚动滑块后边的滚动按钮和轨枕。

`:double-button`：适用于滚动按钮和轨枕。选中紧挨着一对按钮的轨枕以及位于滚动条某一端的一对按钮中的其中一个滚动按钮。

`:single-button`：适用于滚动按钮和轨枕。选中紧挨着仅一个按钮的轨枕以及位于滚动条某一端的仅它本身一个的滚动按钮。

`:no-button`：适用于轨枕。选中轨道结束位置没有按钮的轨枕。

`:corner-present`：适用于选中滚动角不存在的滚动条。

`:window-inactive`：适用于所有滚动条，选中焦点不在该视窗的滚动区域。

另外，`:enabled`、`:disabled`、`:hover`、和`:active`等伪类同样在滚动条中适用。
