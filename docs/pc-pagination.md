---
layout: default
title: 静态分页
order: 9
published: true
category: PCUI
---

## 静态分页 <span class="text-small-title">（ 命名空间：hb-pagination ）</span><span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
-----------

为网站或应用提供带有展示页码的分页组件

{% example html %}
<!-- html示例 -->
<ul class="hb-pagination">
    <li>
      <a href="#">
        <span>&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
</ul>
{% endexample %}

### 禁用和激活状态
链接在不同情况下可以定制。你可以给不能点击的链接添加 `.disabled` 类、给当前页添加 `.active` 类。
{% example html %}
<!-- html示例 -->
<nav>
  <ul class="hb-pagination">
    <li class="disabled"><a href="#"><span>&laquo;</span></a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><span>...</span></li>
    <li><a href="#">7</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
  </ul>
</nav>
{% endexample %}
