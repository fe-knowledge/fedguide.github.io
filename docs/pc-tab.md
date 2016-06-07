---
layout: default
title: Tab切换
order: 17
published: true
category: PCUI
---

## Tab切换 <span class="text-small-title">（ hbTab ）</span>
----------

> <span class="text-danger"><b>注意：</b>tab默认的第一项需要加上.active类，因为第一个默认是显示的。如果需要有动画效果，请在每个 `tab-pane` 上加上 `.fade` 类且第一个tab-pane需要加上 `.in` 类
<br>
<b>动画效果</b> 为<b>css3</b>动画效果，在低版本浏览器，不执行动画，请注意！</span>
<br>
<span class="text-success">具体tab的样式，可根据自己的模块需求，自定义。</span>

### 有两种方法可调用tab组件：

#### 每个tab标签上加上 `data-toggle=hbTab`

{% example html %}
<!-- html示例 -->
<ul id="myTabs" class="hb-nav hb-nav-tabs">
    <li class="active"><a href="#tab1" data-toggle="hbTab">语文</a></li>
    <li><a href="#tab2" data-toggle="hbTab">数学</a></li>
    <li><a href="#tab3" data-toggle="hbTab">英语</a></li>
    <li><a href="#tab4" data-toggle="hbTab">物理</a></li>
    <li><a href="#tab5" data-toggle="hbTab">化学</a></li>
    <li><a href="#tab6" data-toggle="hbTab">生物</a></li>
</ul>
<div class="hb-tab-content hb-fn-clearfix">
    <div class="tab-pane tab-pane fade in active" id="tab1">语文</div>
    <div class="tab-pane fade" id="tab2">数学</div>
    <div class="tab-pane fade" id="tab3">英语</div>
    <div class="tab-pane fade" id="tab4">物理</div>
    <div class="tab-pane fade" id="tab5">化学</div>
    <div class="tab-pane fade" id="tab6">生物</div>
</div>
{% endexample %}

#### 使用js方法
{% example html %}
<!-- html示例 -->
<ul id="myJSTabs" class="hb-nav hb-nav-tabs">
    <li class="active"><a href="#tabjs1">语文</a></li>
    <li><a href="#tabjs2">数学</a></li>
    <li><a href="#tabjs3">英语</a></li>
    <li><a href="#tabjs4">物理</a></li>
    <li><a href="#tabjs5">化学</a></li>
    <li><a href="#tabjs6">生物</a></li>
</ul>
<div class="hb-tab-content hb-fn-clearfix">
    <div class="tab-pane tab-pane fade in active" id="tabjs1">语文</div>
    <div class="tab-pane fade" id="tabjs2">数学</div>
    <div class="tab-pane fade" id="tabjs3">英语</div>
    <div class="tab-pane fade" id="tabjs4">物理</div>
    <div class="tab-pane fade" id="tabjs5">化学</div>
    <div class="tab-pane fade" id="tabjs6">生物</div>
</div>

<!-- javascript示例 -->
<script>
// 仅作演示用
$('#myJSTabs a').click(function (e) {
  e.preventDefault();
  $(this).hbTab('show');
})
</script>
{% endexample %}
