---
layout: default
title: 按钮组
order: 7
published: true
category: PCUI
---

## 按钮组 <span class="text-small-title">（ 命名空间：hb-btn-group ）</span><span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
-----------

通过按钮组容器把一组按钮放在同一行里

{% example html %}
<!-- html示例 -->
<div class="hb-btn-group">
  <button type="button" class="hb-btn hb-btn-default">左</button>
  <button type="button" class="hb-btn hb-btn-default">中</button>
  <button type="button" class="hb-btn hb-btn-default">右</button>
</div>
{% endexample %}

### 按钮组尺寸
需要让按钮具有不同尺寸吗？使用 `.hb-btn-group-lg`、`.hb-btn-group-sm` 或 `.hb-btn-group-xs` 就可以获得不同尺寸的按钮。
{% example html %}
<!-- html示例 -->
<div class="hb-btn-group hb-btn-group-lg">
    <button type="button" class="hb-btn hb-btn-default">左</button>
    <button type="button" class="hb-btn hb-btn-default">中</button>
    <button type="button" class="hb-btn hb-btn-default">右</button>
</div>
<div class="hb-btn-group hb-btn-group-sm">
    <button type="button" class="hb-btn hb-btn-success">左</button>
    <button type="button" class="hb-btn hb-btn-success">中</button>
    <button type="button" class="hb-btn hb-btn-success">右</button>
</div>
<div class="hb-btn-group hb-btn-group-xs">
    <button type="button" class="hb-btn hb-btn-danger">左</button>
    <button type="button" class="hb-btn hb-btn-danger">中</button>
    <button type="button" class="hb-btn hb-btn-danger">右</button>
</div>
{% endexample %}
