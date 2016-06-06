---
layout: default
title: 按钮
order: 4
published: true
category: PCUI
---

## 按钮 <span class="text-small-title">（ 命名空间：hb-btn ）</span>
-------
可作为按钮使用的标签或元素： `<a>`、`<button>` 或 `<input>` 元素添加按钮类（button class）即可使用 HB-UI 提供的样式。
{% example html %}
<button class="hb-btn hb-btn-default" type="button">Button button</button>
<a class="hb-btn hb-btn-default" href="#" role="button">Link button</a>
{% endexample %}

### 按钮颜色

{% example html %}
<button type="button" class="hb-btn hb-btn-default">（默认样式）default</button>
<button type="button" class="hb-btn hb-btn-primary">（蓝色按钮）primary</button>
<button type="button" class="hb-btn hb-btn-success">（绿色按钮）success</button>
<button type="button" class="hb-btn hb-btn-warning">（橙色按钮）warning</button>
<button type="button" class="hb-btn hb-btn-danger">（红色按钮）danger</button>
<button type="button" class="hb-btn hb-btn-black">（黑色按钮）black</button>
<button type="button" class="hb-btn hb-btn-link">link</button>
{% endexample %}

### 按钮尺寸
需要让按钮具有不同尺寸吗？使用 `.hb-btn-lg`、`.hb-btn-sm` 或 `.hb-btn-xs` 就可以获得不同尺寸的按钮。
{% example html %}
<button type="button" class="hb-btn hb-btn-primary hb-btn-lg">（大按钮）btn-lg</button>
<button type="button" class="hb-btn hb-btn-primary hb-btn-sm">（中等大小按钮）btn-lg</button>
<button type="button" class="hb-btn hb-btn-primary hb-btn-xs">（小按钮）btn-lg</button>
{% endexample %}

### 块级按钮
通过给按钮添加 `.hb-btn-block` 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。
{% example html %}
<button type="button" class="hb-btn hb-btn-success hb-btn-block">块级按钮独占一行</button>
{% endexample %}

### 禁用状态
{% example html %}
<button type="button" class="hb-btn hb-btn-success disabled">禁用按钮</button>
{% endexample %}
