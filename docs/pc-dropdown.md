---
layout: default
title: 下拉菜单
order: 11
published: true
category: PCUI
---

## 下拉菜单 <span class="text-small-title">（ 命名空间：hb-dropdown ）</span>
-----------

将下拉菜单触发器和下拉菜单都包裹在 `.hb-dropdown` 里，或者另一个声明了 `position: relative;` 的元素。然后加入组成菜单的 HTML 代码。注意：下拉菜单，依耐 widget 下的 `dropdown.js`

{% example html %}
<!-- html示例 -->
<button class="hb-btn hb-btn-success hb-dropdown pull-left">
     <span class="hb-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        点击下拉<em class="caret"></em>
     </span>
     <ul class="hb-dropdown-menu">
        <li><a href="#">菜单一</a></li>
        <li><a href="#">菜单二</a></li>
        <li><a href="#">菜单三</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">菜单四</a></li>
    </ul>
 </button>
<button class="hb-btn hb-btn-default hb-dropdown pull-left">
     <span class="hb-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        点击下拉<em class="caret"></em>
     </span>
     <ul class="hb-dropdown-menu">
        <li><a href="#">菜单一</a></li>
        <li><a href="#">菜单二</a></li>
        <li><a href="#">菜单三</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">菜单四</a></li>
    </ul>
 </button>
{% endexample %}
通过添加 `.pull-right` 和 `.pull-left` 可创建左右浮动的下拉

{% example html %}
<button class="hb-btn hb-btn-success hb-dropdown pull-left">
     <span class="hb-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        点击下拉<em class="caret"></em>
     </span>
     <ul class="hb-dropdown-menu">
        <li><a href="#">菜单一</a></li>
        <li><a href="#">菜单二</a></li>
        <li><a href="#">菜单三</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">菜单四</a></li>
    </ul>
 </button>
<button class="hb-btn hb-btn-default hb-dropdown pull-right">
     <span class="hb-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        点击下拉<em class="caret"></em>
     </span>
     <ul class="hb-dropdown-menu">
        <li><a href="#">菜单一</a></li>
        <li><a href="#">菜单二</a></li>
        <li><a href="#">菜单三</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">菜单四</a></li>
    </ul>
 </button>
{% endexample %}
为下拉菜单添加一条分割线，用于将多个链接分组。
{% example html %}
<div class="hb-dropdown pull-left">
    <a href="#" class="hb-dropdown-toggle" data-toggle="dropdown">下拉菜单
        <span class="caret"></span>
    </a>
    <ul class="hb-dropdown-menu">
       <li><a href="#">菜单一</a></li>
       <li><a href="#">菜单二</a></li>
       <li><a href="#">菜单三</a></li>
       <li role="separator" class="divider"></li>
       <li><a href="#">菜单四</a></li>
   </ul>
</div>
{% endexample %}
