---
layout: default
title: 焦点图
order: 14
published: true
category: PCUI
---

## 焦点图 <span class="text-small-title">（ 命名空间：hbSlider ）</span>
----------
{% example html %}
<!-- html示例 -->
<div class="my-slider">
    <ul>
        <li><img src="{{ site.baseurl }}/assets/img/slider_1.jpg"></li>
        <li><img src="{{ site.baseurl }}/assets/img/slider_2.jpg"></li>
        <li><img src="{{ site.baseurl }}/assets/img/slider_3.jpg"></li>
    </ul>
</div>

<!-- javascript示例 -->
<script>
// 仅作演示用
$('.my-slider').hbSlider({
    theme:'hb-slider-theme', // 自定义皮肤（可选）
    autoplay: true, // 是否自动播放
    delay: 13000, // 焦点图切换时间。默认：3000ms
    speed: 750, // 焦点图切换速度。默认：750ms
    arrows: {
        prev: '<a class="slider-arrows prev"><i class="iconfont-chevron-left"></i></a>',
        next: '<a class="slider-arrows next"><i class="iconfont-chevron-right"></i></a>'
    },   // 左右箭头。不显示则设为：arrows:false
    nav: true,   //  是否显示导航小圆点
    activeClass:'active', // 选中添加的额外样式
    hoverStop: false // 鼠标移上焦点图，是否暂停播放。默认：false
});
</script>
{% endexample %}
