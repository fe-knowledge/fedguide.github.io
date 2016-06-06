---
layout: default
title: HTML编码规范
order: 4
category: false
---

## HTML编码规范
----------

### 编码规范

#### DOCTYPE 声明

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

#### CHARSET
一般情况下统一使用 “UTF-8” 编码。请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。
{% highlight html %}
<meta charset="UTF-8">
{% endhighlight %}

#### META属性
{% highlight html %}
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- 识别厂商浏览器特殊meta -->
<meta name="renderer" content="webkit" />
{% endhighlight %}

#### LANG属性
强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。<br>
推荐使用属性值 cmn-Hans-CN（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 zh-CN 属性值
{% highlight html %}
<html lang="zh-CN">
  <!-- ... -->
</html>
{% endhighlight %}
更多地区语言参考：
{% highlight html %}
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
{% endhighlight %}

#### HTML代码大小写
HTML标签名、类名、标签属性和大部分属性值统一用小写
推荐：
{% highlight html %}
<!-- 推荐 -->
<div class="demo"></div>

<!-- 不推荐 -->
<div class="DEMO"></div>
<DIV CLASS="DEMO"></DIV>
{% endhighlight %}

HTML文本、JavaScript、meta标签某些属性等内容可大小写混合

{% highlight js %}
var feName = 'feName';
// OR
var beName = 'bename';
{% endhighlight %}

#### 类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含
{% highlight html %}
<!-- 推荐 -->
<link rel="stylesheet" href="" >
<script src=""></script>

<!-- 不推荐 -->
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
{% endhighlight %}

#### 元素属性
- 元素属性值使用双引号语法
- 元素属性值可以写上的都写上
{% highlight html%}
<!-- 推荐 -->
<input type="text">
<input type="radio" name="name" checked="checked" >

<!-- 不推荐 -->
<input type=text>
<input type='text'>
<input type='radio' name="name" checked >
{% endhighlight %}
更多关于元素属性,请参阅：[Attributes](http://www.w3.org/TR/html5/syntax.html#attributes-0)

#### 特殊字符引用
文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体
{% highlight html%}
<!-- 推荐 -->
<a href="#">more&gt;&gt;</a>

<!-- 不推荐 -->
<a href="#">more>></a>
{% endhighlight%}
更多关于符号引用,请参阅：[Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

#### 代码缩进
统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
{% highlight html%}
<div class="hb-fed">
    <a href="#"></a>
</div>
{% endhighlight%}

#### 注释规范

##### 遵循标准
- 必须以4个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS横线 ，即 “<!–”
- 在此之后是注释内容，注释的内容有以下限制：
- 不能以单个 “>” (U+003E) 字符开始
- 不能以由 “-“（U+002D HYPHEN-MINUS）和 ”>” (U+003E) 组合的字符开始，即 “->”
- 不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “–”
- 不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”
- 必须以3个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “–>”
{% highlight html%}
标准写法：
<!-- 注释信息 -->

错误的写法：
<!-->错误的注释-->

<!--->错误的注释-->

<!--错--误--的--注--释-->

<!--错 误 的 注 释--->

{% endhighlight%}
参考 www.w3.org[Comments](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments)

##### 模块注释
一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- S 注释信息 -->` 表示模块开始，`<!-- E 注释信息 -->` 表示模块结束，模块与模块之间相隔一行
推荐的写法：
{% highlight html%}
<!-- S 注释信息 A -->
<div class="mod_a">
    ...
</div>
<!-- E 注释信息 A -->

<!-- S 注释信息 B -->
<div class="mod_b">
    ...
</div>
<!-- E 注释信息 B -->
{% endhighlight%}
不推荐的写法：
{% highlight html%}
<!-- S 注释信息 A -->
<div class="mod_a">
    ...
</div>
<!-- E 注释信息 A -->
<!-- S 注释信息 B -->
<div class="mod_b">
    ...
</div>
<!-- E 注释信息t B -->
{% endhighlight%}

### 文件模版
HTML模版指的是团队使用的初始化HTML文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 mata 标签的设置，以下是 PC 和移动端的 HTML 模版。

#### HTML5标准模版

{% highlight html %}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5标准模版</title>
</head>
<body>

</body>
</html>
{% endhighlight %}
#### 团队标准模版

##### PC端
{% highlight html%}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author,email address">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <title>团队标准模版</title>
    <link rel="dns-prefetch" href="">
    <link rel="stylesheet" href="http://[cdn]/xxx.css" >
</head>
<body>

</body>
</html>
{% endhighlight%}

##### 移动端
{% highlight html%}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
    <meta name="format-detection" content="telephone=no" >
    <title>移动端HTML模版</title>
    <link rel="dns-prefetch" href="">
    <link rel="stylesheet" href="http://[cdn]/xxx.css" >
</head>
<body>

</body>
</html>
{% endhighlight%}
