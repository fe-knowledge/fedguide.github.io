---
layout: default
title: AJAX分页
order: 10
published: true
category: PCUI
---

## AJAX分页 <span class="text-small-title">（ 命名空间：hb-pager ）</span>
-----------

为异步请求提供数据分页

> <span class="text-warning">请注意： `hbPagination`  内的代码为动态生成，毋须人工干预，开发者只需要执行AJAX分页组件即可完成分页，样式展现，请根据模块自定义，或者使用组件自带的默认样式</span>

{% example html %}
<!-- 这里为组件自动生成部分 -->
<div id="hbPagination">
    <ul class="hb-pager-container hb-pagination hb-pager-default" id="hbPager_1">
        <li><a href="javascript:;" class="hb-pager-prev" data-page="4">上一页</a></li>
        <li><a href="javascript:;" class="hb-pager-first" data-page="1" title="首页">首页</a></li>
        <li><a href="javascript:;" data-page="1">1</a></li>
        <li><a href="javascript:;" data-page="2">2</a></li>
        <li><a href="javascript:;" data-page="3">3</a></li>
        <li><a href="javascript:;" data-page="4">4</a></li>
        <li><span class="hb-pager-active">5</span></li>
        <li><a href="javascript:;" data-page="6">6</a></li>
        <li><span>…</span></li>
        <li><a href="javascript:;" class="hb-pager-last" title="尾页" data-page="20">尾页</a></li>
        <li><a href="javascript:;" class="hb-pager-next" data-page="6">下一页</a></li>
    </ul>
</div>

<!-- javascript示例 -->
<script>

// 仅作演示，具体参数、数据API等，请根据实际情况来定

var active = 1;    // 演示数据
HBUI.xhr.ajaxCall({
    url:'',       // ajax请求地址
    data:{
        page:active || 1,   // ajax请求传递给后台的页码参数
        xxxx:'xxxxx'          // 其他参数
    }
},function(res){
    // 获取后台数据成功后，开始执行分页
    hbPager({
        theme:'default',   // 控制分页皮肤。目前支持：default,black
        container: 'hbPagination', //放置页码的容器ID。非必填，默认为：hbPagination
        groups:5,  // 连续显示分页数，默认5个数字，其余的用...代替。如果不需要显示分页数字，设置成：false
        prev:'上一页',    // 用于控制上一页。若不显示，设置false即可
        next:'下一页',    // 用于控制下一页。若不显示，设置false即可
        first:'首页',    // 用于控制首页。值支持三种类型。如：first: '首页' 如：first: false，则表示不显示首页项
        last:'尾页',   // 用于控制尾页。值支持三种类型如：last: '尾页' 如：last: false，则表示不显示首页项
        pages: res.pages, //通过后台拿到的总页数
        active: active || 1, //当前页,默认传第一页
        linkTo: function(obj, first){ //触发分页后的回调
            if(!first){ //点击跳页触发函数自身，并传递当前页：obj.active
                index.ajaxPage(obj.active);
            }
        }
    });
})
</script>
{% endexample %}
