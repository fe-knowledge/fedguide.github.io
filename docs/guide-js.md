---
layout: default
title: JavaScript编码规范
order: 6
published: true
category: false
---

## JavaScript编码规范 <span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
----------

### 全局命名空间污染
总是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。

IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。
{% highlight js%}
// 不推荐
var x = 10,
    y = 100;
console.log(window.x + ' ' + window.y);

// 推荐写法
(function(log, w, undefined){
  'use strict';
  var x = 10,
      y = 100;
  log((w.x === undefined) + ' ' + (w.y === undefined));
}(window.console.log, window));
{% endhighlight%}

### 立即执行的函数表达式（IIFE）
论何时，想要创建一个新的封闭的定义域，那就用 IIFE。它不仅避免了干扰，也使得内存在执行完后立即释放。

所有脚本文件建议都从 IIFE 开始。

立即执行的函数表达式的执行括号应该写在外包括号内。虽然写在内还是写在外都是有效的，但写在内使得整个表达式看起来更像一个整体，因此推荐这么做。

{% highlight js%}
// 不推荐
(function(){
    // your code
})();

// 推荐写法
(function(){
    // your code
}());
{% endhighlight%}
用下列写法来格式化你的 IIFE 代码：
{% highlight js%}
(function(){
  'use strict';
  // your code
}());
{% endhighlight%}
如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：
{% highlight js%}
(function($, w, d){
  'use strict';
  $(function() {
    w.alert(d.querySelectorAll('div').length);
  });
}(jQuery, window, document));
{% endhighlight%}

### 严格模式
ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。

严格模式会阻止使用在未来很可能被引入的预留关键字。

你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。
{% highlight js%}
// 不推荐
'use strict';
(function(){
  // Your code starts here
}());

// 推荐写法
(function(){
  'use strict';
  // Your code starts here
}());
{% endhighlight%}

### 变量声明
总是使用 var 来声明变量。如不指定 var，变量将被隐式地声明为全局变量，这将对变量难以控制。如果没有声明，变量处于什么定义域就变得不清（可以是在 Document 或 Window 中，也可以很容易地进入本地定义域）。所以，请总是使用 var 来声明变量。

采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处。
{% highlight js %}
// 不推荐
x = 10;
y = 100;

// 推荐写法
var x = 10,
    y = 100;

// 不推荐
var a,
    b,
    c;
a = 10;
b = 10;
c = 100;

// 推荐写法
var a = 10,
    b = 10,
    c = 100;
{% endhighlight %}

### 首选函数式风格
函数式编程让你可以简化代码并缩减维护成本，因为它容易复用，又适当地解耦和更少的依赖。

接下来的例子中，在一组数字求和的同一问题上，比较了两种解决方案。第一个例子是经典的程序处理，而第二个例子则是采用了函数式编程和 ECMA Script 5.1 的数组方法。

例外：往往在重代码性能轻代码维护的情况之下，要选择最优性能的解决方案而非维护性高的方案（比如用简单的循环语句代替 forEach）。
{% highlight js %}
// 不推荐
(function(log){
  'use strict';
  var arr = [10, 3, 7, 9, 100, 20],
      sum = 0,
      i;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  log('The sum of array ' + arr + ' is: ' + sum)
}(window.console.log));

// 推荐写法
(function(log){
  'use strict';
  var arr = [10, 3, 7, 9, 100, 20];
  var sum = arr.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }, 0);
  log('The sum of array ' + arr + ' is: ' + sum);
}(window.console.log));
{% endhighlight %}

### 三元条件判断（if 的快捷方法）
用三元操作符分配或返回语句。在比较简单的情况下使用，避免在复杂的情况下使用。没人愿意用 10 行三元操作符把自己的脑子绕晕。
{% highlight js %}
// 不推荐
if(x === 10) {
  return 'valid';
} else {
  return 'invalid';
}

// 推荐写法
return x === 10 ? 'valid' : 'invalid';
{% endhighlight %}

### 命名函数表达式
在web开发中有个常用的模式是基于对某种特性的测试来伪装函数定义，从而达到性能优化的目的，但由于这种方式都是在同一作用域内，所以基本上一定要用函数表达式：

{% highlight js %}
var contains = (function() {
    var docEl = document.documentElement;

    if (typeof docEl.compareDocumentPosition != 'undefined') {
      return function(el, b) {
        return (el.compareDocumentPosition(b) & 16) !== 0;
      };
    }
    else if (typeof docEl.contains != 'undefined') {
      return function(el, b) {
        return el !== b && el.contains(b);
      };
    }
    return function(el, b) {
      if (el === b) return false;
      while (el != b && (b = b.parentNode) != null);
      return el === b;
    };
})();
{% endhighlight %}

一点需要记住：这个名字只在新定义的函数作用域内有效，因为规范规定了标示符不能在外围的作用域内有效：

{% highlight js %}
var f = function foo(){
    return typeof foo; // foo是在内部作用域内有效
};
// foo在外部用于是不可见的
typeof foo; // "undefined"
f(); // "function"
{% endhighlight %}

### 函数的内存管理
如果我们的代码中返回多个闭包的情况，如果没有手动设置null的话，内存不会被自动释放。

### undefined与null的区别
在常见的强类型语言中，通常有一个表示“空”的值，比如NULL。但是在Javascript中，空（或者叫“无值”）有两种选择：`undefined`和`null`。在Javascript中除了这两个值其他都是对象。其他的基本类型都有其对象的包装类型。但是，`typeof null`返回的是`object`，这是一个一直未修复的bug。

#### 相似之处
是完全不可变的，没有属性和方法，也不能给其属性赋值。事实上,试图访问或定义一个属性将会引发一个类型错误（TypeError）。正如他们的名字暗示的那样，他们是完全无效的值。

#### 不同之处
一个重要的区别，服务于不同的目的和理由。区分这两个值，你可以认为`undefined`代表一个意想不到的没有值而`null`作为预期没有值的代表。

使用`Object.prototype.toString.call()`形式可以具体打印类型。

##### undefined
undefined实际上代表了不存在的值（non-existence of a value）。

有许多的方法产生一个undefined值的代码。它通常遇到当试图访问一个不存在的值时。在这种情况下，在JavaScript这种动态的弱类型语言中，只会默认返回一个undefined值，而不是上升为一个错误:

- 任何声明变量时没有提供一个初始值，都会有一个为undefined的默认值
- 当试图访问一个不存在的对象属性或数组项时，返回一个undefined值
- 如果省略了函数的返回语句,返回undefined
- 函数调用时未提供的值结果将为undefined参数值
- void操作符也可以返回一个undefined值。像Underscore的库使用它作为一个防御式的类型检查，因为它是不可变的，可以在- 任何上下文依赖返回undefined
- undefined是一个预定义的全局变量(不像null关键字)初始化为undefined值

##### null
通常用作一个空引用一个空对象的预期,就像一个占位符。typeof的这种行为已经被确认为一个错误，虽然提出了修正，出于后兼容的目的，这一点已经保持不变。 这就是为什么JavaScript环境从来没有设置一个值为null；它必须以编程方式完成。

使用null的情况:

- DOM，它是独立于语言的，不属于ECMAScript规范的范围。因为它是一个外部API，试图获取一个不存在的元素返回一个null值，而不是undefined。
- 如果你需要给一个变量或属性指定一个不变值，将它传递给一个函数，或者从一个函数返回null，null几乎总是最好的选择。
- JavaScript使用undefined并且程序员应该使用null。
- 通过分配null值，有效地清除引用，并假设对象没有引用其他代码，指定垃圾收集，确保回收内存。

##### Object.prototype.toString调用过程
- 如果值是undefined，返回“[object Undefined]”。
- 如果这个值为null，则返回“[object Null]”。
- 让O作为调用ToObject同时传递this值作为参数的结果值。
- 让class是O的内部属性[[Class]]的值。
- 返回的结果连接三个字符串“[object ”，class，和“]”的结果的字符串值。
