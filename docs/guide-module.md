---
layout: default
title: 模块编码规范
order: 7
category: false
---

## 模块编码规范
----------

### 前端模块化开发的价值
随着互联网的飞速发展，前端开发越来越复杂。本文将从实际项目中遇到的问题出发，讲述模块化能解决哪些问题，以及如何使用 前端的模块化开发。

### 恼人的命名冲突
我们从一个简单的习惯出发。我做项目时，常常会将一些通用的、底层的功能抽象出来，独立成一个个函数，比如

{% highlight js %}
function each(arr) {
  // your code
}
function log(str) {
  // your code
}
{% endhighlight %}

并像模像样地把这些函数统一放在 util.js 里。需要用到时，引入该文件就行。这一切工作得很好，同事也很感激我提供了这么便利的工具包。

直到团队越来越大，开始有人抱怨。

> 小娜：我想定义一个 each 方法遍历对象，但页头的 util.js 里已经定义了一个，我的只能叫 eachObject 了，好无奈。
> 小萌：我自定义了一个 log 方法，为什么别人写的代码就出问题了呢？谁来帮帮我。
> 小煊：我自定义了一个函数，为什么所有的js都报错了啊？

抱怨越来越多。团队决定参照 Java 的方式，引入命名空间来解决。于是 util.js 里的代码变成了
{% highlight js %}
var org = {};
org.HB = {};
org.HB.Utils = {};
org.HB.Utils.each = function (arr) {
  // 实现代码
};
org.HB.Utils.log = function (str) {
  // 实现代码
};
{% endhighlight %}

将命名空间的概念在前端中发扬光大，首推 Yahoo! 的 YUI2 项目。下面是一段真实代码，来自 Yahoo! 的一个开源项目。

{% highlight js %}
if (org.cometd.Utils.isString(response)) {
  return org.cometd.JSON.fromJSON(response);
}
if (org.cometd.Utils.isArray(response)) {
  return response;
}
{% endhighlight %}

通过命名空间，的确能极大缓解冲突。但每每看到上面的代码，都忍不住充满同情。为了调用一个简单的方法，需要记住如此长的命名空间，这增加了记忆负担，同时剥夺了不少编码的乐趣。

作为前端业界的标杆，YUI 团队下定决心解决这一问题。在 YUI3 项目中，引入了一种新的命名空间机制。

{% highlight js %}
YUI().use('node', function (Y) {
  // Node 模块已加载好
  // 下面可以通过 Y 来调用
  var foo = Y.one('#foo');
});
{% endhighlight %}
话不多说，本文讲重点介绍如何来开发模块。目前，我们采用了很多开源且比较成熟的模块加载机制，我们使用的是CMD规范的模块定义。

### CMD 模块定义规范
所有 JavaScript 模块都遵循 CMD（Common Module Definition） 模块定义规范。该规范明确了模块的基本书写格式和基本交互规则。

#### define
在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：
{% highlight js %}
define(factory);
{% endhighlight %}

`define` 是一个全局函数，用来定义模块。 `define` 接受 `factory` 参数，`factory` 可以是一个函数，也可以是一个对象或字符串。 `factory` 为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。`factory` 方法在执行时，默认会传入三个参数：`require`、`exports` 和 `module`：

{% highlight js %}
define(function(require, exports, module) {
  // 模块代码
});
{% endhighlight %}

define 也可以接受两个以上参数。字符串 id 表示模块标识，数组 deps 是模块依赖。比如：

{% highlight js %}
define('hello', ['jquery'], function(require, exports, module) {
  // 模块代码
});
{% endhighlight %}

#### exports
`exports` 是一个对象，用来向外提供模块接口。

{% highlight js %}
define(function(require, exports) {
  // 对外提供 foo 属性
  exports.foo = 'bar';
  // 对外提供 doSomething 方法
  exports.doSomething = function() {};
});
{% endhighlight %}

除了给 `exports` 对象增加成员，还可以使用 `return` 直接向外提供接口。

{% highlight js %}
define(function(require) {
  // 通过 return 直接提供接口
  return {
    foo: 'bar',
    doSomething: function() {
        // 你的一些代码
    }
  };
});
{% endhighlight %}

#### module
`module` 是一个对象，上面存储了与当前模块相关联的一些属性和方法。

##### module.id
模块的唯一标识。

{% highlight js %}
define('id', [], function(require, exports, module) {
  // 模块代码
});
{% endhighlight %}

##### module.dependencies
`dependencies` 是一个数组，表示当前模块的依赖。

##### module.exports
当前模块对外提供的接口。 传给 `factory` 构造方法的 `exports` 参数是 `module.exports` 对象的一个引用。只通过 `exports` 参数来提供接口，有时无法满足开发者的所有需求。 比如当模块的接口是某个类的实例时，需要通过 `module.exports` 来实现：

{% highlight js %}
define(function(require, exports, module) {
  // exports 是 module.exports 的一个引用
  console.log(module.exports === exports); // true
  // 重新给 module.exports 赋值
  module.exports = new SomeClass();
  // exports 不再等于 module.exports
  console.log(module.exports === exports); // false
});
{% endhighlight %}

如果一个文件里存在多个difine，请为每个difine定义id

{% highlight js %}
// y模块，依耐x文件
define('y',['x'],function(require, exports, module) {
  var x = require('./x');
  console.log(x.a);
});

define('y',['x'],function(require, exports, module) {
  require.async('y.css');  // 异步加载css文件
  var x = require('./x');  // 加载依耐文件
  var y = {
     init: function(){
         console.log('hello');
     }
  };
  module.exports = y; // 对外暴露y模块接口。外部执行：y.init() ==> 'hello';
});
{% endhighlight %}

### 模块的加载启动
用来在页面中加载模块。

#### HB.use HB.use(id, callback?)
通过 `use` 方法，可以在页面中加载任意模块：

{% highlight js %}
// 加载模块 main，并在加载完成时，执行指定回调
HB.use('./main', function(main) {
  main.init();
});
{% endhighlight %}

`use` 方法还可以一次加载多个模块：

{% highlight js %}
// 并发加载模块 a 和模块 b，并在都加载完成时，执行指定回调
HB.use(['./a', './b'], function(a, b) {
  a.init();
  b.init();
});
{% endhighlight %}

`callback` 参数可选，省略时，表示无需回调。

#### 与 DOM ready 的关系
如果某些操作要确保在 `DOM ready` 后执行，需要使用 `jquery` 等类库来保证，比如：

{% highlight js %}
HB.use(['jquery', './main'], function($, main) {
  $(document).ready(function() {
    main.init();
  });
});
{% endhighlight %}
