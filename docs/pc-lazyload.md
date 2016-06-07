---
layout: default
title: 图片延迟加载
order: 16
published: true
category: PCUI
---

## 图片延迟加载 <span class="text-small-title">（ hbLazyload ）</span><span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
----------
{% example html %}
<!-- html示例 -->
<img class="hb-lazy" data-img="{{ site.baseurl }}/assets/img/slider_1.jpg" height="300" width="840">

<!-- javascript示例 -->
<script>
// 仅作演示用
$("img.hb-lazy").hbLazyload();

// $("img.hb-lazy").hbLazyload({
//    placeholder : '' // 占位符(loading图片)。可不设置
// });

</script>
{% endexample %}
