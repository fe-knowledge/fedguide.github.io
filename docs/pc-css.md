---
layout: default
title: 全局CSS
order: 1
published: true
category: PCUI
---

## 全局CSS <span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
---------

Normalize.css

为了增强跨浏览器表现的一致性，我们使用了 Normalize.css重置样式库。

### 布局容器
HBUI 需要为页面内容包裹一个 `.hb-ui-container` 容器。`.hb-ui-container` 类用于固定宽度。

> <span class="text-danger">请注意：由于我们的系统是按需加载模块的，为方便模块调用以及维护，模块自身所用到的css文件也是后加载的，为了防止模块的css文件没加载出来，导致页面的短暂排版错乱，临时出一个方案：在外围容器层上加上一个隐藏样式 `.hb-fn-hidden`,当初始化模块的时候，再移除 `.hb-fn-hidden`</span>

{% example html %}
<div class="hb-ui-container hb-fn-hidden">
  ...
</div>
{% endexample %}

### 排版

#### 标题
HTML 中的所有标题标签，<h1> 到 <h6> 均可使用。另外，还提供了 .h1 到 .h6 类，为的是给内联（inline）属性的文本赋予标题的样式。
{% example html %}
<h1>h1. 海边直播FE小分队</h1>
<h2>h2. 海边直播FE小分队</h2>
<h3>h3. 海边直播FE小分队</h3>
<h4>h4. 海边直播FE小分队</h4>
<h5>h5. 海边直播FE小分队</h5>
<h6>h6. 海边直播FE小分队</h6>
{% endexample %}
在标题内还可以包含 .small 类的元素，可以用来标记副标题。
{% example html %}
<h1>h1. 海边直播FE小分队<span class="small">PHP天团</span></h1>
<h2>h2. 海边直播FE小分队<span class="small">PHP天团</span></h2>
<h3>h3. 海边直播FE小分队<span class="small">PHP天团</span></h3>
<h4>h4. 海边直播FE小分队<span class="small">PHP天团</span></h4>
<h5>h5. 海边直播FE小分队<span class="small">PHP天团</span></h5>
<h6>h6. 海边直播FE小分队<span class="small">PHP天团</span></h6>
{% endexample %}
#### 对齐
通过文本对齐类，可以简单方便的将文字重新对齐。
{% example html %}
<p class="text-left">文字左对齐</p>
<p class="text-center">文字居中对齐</p>
<p class="text-right">文字右对齐</p>
<p class="text-justify">文字两端对齐 文字两端对齐</p>
{% endexample %}

#### 改变大小写
通过这几个类可以改变文本的大小写（英文）。
{% example html %}
<p class="text-lowercase"> Lowercased text.    (全部小写)</p>
<p class="text-uppercase"> Uppercased text.    (全部大写)</p>
<p class="text-capitalize"> Capitalized text.  (首字母大写)</p>
{% endexample %}
