---
layout: default
title: 模态框
order: 13
published: true
category: PCUI
---

## 模态框 <span class="text-small-title">（ 命名空间：$ ）</span>
-----------

前面我们已经提供了 `hbBox` 组件，为什么我们还要再提供一个模态框的组件呢？因为：`hbBox` 适合带交互的操作提示窗，而 hbBox 是一个独立的组件，在运用的时候，需要提前加载进页面。而，模态框 我们是集成在系统的框架里的，可全站随时使用，调用更简单，几乎不需要配置，即可运用，特别适用于ajax请求的一些列交互效果。目前，我们仅对外暴露两个接口，分别是：<b class="text-warning">$.hbAlert</b>、<b class="text-warning">$.hbToast</b>、<b class="text-warning">$.hbLoading</b>

{% example html %}
<!-- html示例 -->
<button type="button" class="hb-btn hb-btn-default" id="open_alert">alert 形式</button>
<button type="button" class="hb-btn hb-btn-danger" id="open_toast">toast 形式</button>
<button type="button" class="hb-btn hb-btn-success" id="open_loading">loading 形式</button>

<!-- javascript示例 -->
<script>
// 仅作演示用

// alert 形式
$('body').on('click','#open_alert',function(){
    $.hbAlert('海边直播FE小分队');
});


// 调用方法一： $.hbAlert(msg,title,callback);
// 调用方法二： $.hbAlert(msg,callback);

// 配置：
// text : 需要提示的文字，必选
// title: 提示标题，选填
// callback: 回调函数


// toast形式
$('body').on('click','#open_toast',function(){
    $.hbToast('海边直播FE小分队')
});


// 调用方法：$.hbToast(msg,autoClose,addClass);
// 配置：
// msg : 需要提示的文字，必选
// autoClose: 自动关闭时间，默认2s
// addClass: 需要添加的额外样式，选填


// alert 形式
$('body').on('click','#open_loading',function(){
    $.hbLoading();
});


// 调用方法：$.hbLoading({'color':''});
// 关闭loading：
// $.hideLoading();

</script>
{% endexample %}
