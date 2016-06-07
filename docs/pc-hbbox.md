---
layout: default
title: 弹层
order: 12
published: true
category: PCUI
---

## 弹层 <span class="text-small-title">（ 命名空间：hbBox ）</span>
-----------

弹层经过了优化，更加灵活，以弹出对话框的形式出现，具有最小和最实用的功能集。
目前弹层组件对外暴露七种形式，分别是：<b class="text-warning">alert</b>、<b class="text-warning">toast</b>、<b class="text-warning">confirm</b>、<b class="text-warning">loading</b>、<b class="text-warning">tooltip</b>、<b class="text-warning">iframe</b>、<b class="text-warning">ajax</b> 以及一个集合形式 <b class="text-success">open</b> (任何形式的弹层均可使用)

> <span class="text-danger"><b>注意：</b> alert、confirm、iframe，这三种形式，共有的参数为：<br> id、title、addClass、animation、draggable、theme、overlay、onInit、onBeforeInit、onCreated、onOpen、onClose、onCloseComplete</span><br><br>
<span class="text-danger">animation 为css3动画效果，在低版本浏览器，不执行动画，请注意！</span>


{% example html %}
<!-- html示例 -->
<button type="button" class="hb-btn hb-btn-default" id="openDialog_alert">alert 形式</button>
<button type="button" class="hb-btn hb-btn-warning" id="openDialog_confirm">confirm 形式</button>
<button type="button" class="hb-btn hb-btn-danger" id="openDialog_toast">toast 形式</button>
<button type="button" class="hb-btn hb-btn-black" id="openDialog_iframe">iframe 形式</button>
<button type="button" class="hb-btn hb-btn-success" id="openDialog_loading">loading 形式</button>
<button type="button" class="hb-btn hb-btn-primary tooltip" title="海边大前端">tooltip 提示</button>

<!-- javascript示例 -->
<script>
// 仅作演示用

// alert 形式
$('body').on('click','#openDialog_alert',function(){
    // alert调用方法
    hbBox.alert({
        id:'alertBox',  // 弹层ID。非必选，默认：hbBox_id_(i++)
        title:'测试标题', // 标题。如果标题不设置，则弹层将不显示标题栏
        content:'海边直播FE小分队', // 内容
        draggable:'title', // 拖拽弹层的元素。设为false为不能拖拽
        theme:'ModalBlue',  // alert 皮肤。默认灰色
        addClass : 'alertbox',  //  需要额外添加给弹层的样式。非必选
        width: 200,    //宽度设置，默认最小宽度300px
        height:100,
        animation: ({ // 当hbBox打开或者关闭的时候动画效果
            open: 'zoomIn',// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
            close: 'zoomIn'// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
        }),
        onInit:function(){ // hbBox初始化时触发
            this.open();
        },
        onBeforeInit: null,         // 触发hbBox启动时初始化,添加你自己的内部函数
        onCreated: null,            // 时触发hbBox是创建和availible DOM
        onOpen: null,               // hbBox打开时触发
        onClose: null,              // 触发hbBox关闭
        onCloseComplete:function(){
            this.destroy();        // 完成关闭后，销毁弹层
        }
    });
});

// confirm 形式
$('body').on('click','#openDialog_confirm',function(){
    // confirm调用方法
    hbBox.confirm({
        id:'alertBox',  // 弹层ID。非必选，默认：hbBox_id_(i++)
        title:'测试标题', // 标题。如果标题不设置，则弹层将不显示标题栏
        content:'海边直播FE小分队', // 内容
        draggable:'title', // 拖拽弹层的元素。设为false为不能拖拽
        addClass : 'alertbox',  //  需要额外添加给弹层的样式。非必选
        width: 200,    //宽度设置，默认最小宽度300px
        height:100,
        animation: ({ // 当hbBox打开或者关闭的时候动画效果
            open: 'zoomIn',// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
            close: 'zoomIn'// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
        }),
        onInit:function(){ // hbBox初始化时触发
            this.open();
        },
        onBeforeInit: null,         // 触发hbBox启动时初始化,添加你自己的内部函数
        onCreated: null,            // 时触发hbBox是创建和availible DOM
        onOpen: null,               // hbBox打开时触发
        onClose: null,              // 触发hbBox关闭
        onCloseComplete:function(){
            this.destroy();        // 完成关闭后，销毁弹层
        },
        confirmButton: {        // 确定按钮
            text : '确定',        // 按钮文字
            style : 'primary'   // 按钮样式
        },      //
        cancelButton:{          // 取消按钮
            text : '取消',        // 按钮文字
            style : 'default'   // 按钮样式
        },
        confirm: function(){
            return true;    
        },              // 单击提交按钮时要执行的函数。默认hbBox首先将使用onclick其次href属性
        cancel: function(){
            return true;
        },
    });
});

// toas t形式
$('body').on('click','#openDialog_toast',function(){
    // toast调用方法
    hbBox.toast({
        title:false,   // 标题。不设为，则不显示
        content :'海边直播FE小分队', // content参数，可加可不加，默认标题：系统提示
        autoClose : 3000,  // 自动关闭时间，默认关闭时间：3000毫秒
        color : 'black' // 皮肤颜色，可选值：'black', 'red', 'green', 'blue', 'yellow'，默认：black
    });
});

// iframe 形式
$('body').on('click','#openDialog_iframe',function(){
    // 弹层组件调用方法
    hbBox.iframe({
        id:'alertBox',  // 弹层ID。非必选
        title : '系统提示',     // iframe 标题。如果标题不设置，则弹层将不显示标题栏
        content :'http://www.haibian.com', // content参数，iframe 的时候，填写url地址
        width:1000,     // iframe 宽度。 默认值：1000px
        height:600,     // iframe 高度。 默认值：600px
        animation: ({ // 当hbBox打开或者关闭的时候动画效果
            open: 'zoomIn',// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
            close: 'zoomIn'// 可选值：'pulse','zoomIn','zoomOut','move','slide','flip','tada'
        }),
        onInit:function(){
            this.open();    
        },
        onCloseComplete:function(){
            this.destroy();        // 完成关闭后，销毁弹层
        }
    });
});

// loading 形式
$('body').on('click','#openDialog_loading',function(){
    // loading调用方法
    hbBox.loading({
        title :'加载中',      // loading的参数，可加可不加
        overlay:true,       // 是否显示一个透明的遮罩层。默认：true
        minWidth:80,        // 最小宽度，默认50px
        minHeight:80,       // 最小高度，默认50px
        color : 'black',    // 皮肤颜色,可选值：'black', 'red', 'green', 'blue', 'yellow'，默认：black
    });
    //此可做ajax请求的loading状态。建议按如下方法使用：
    var ajaxLoading = new hbBox('Loading',{
        title :'加载中',
        overlay:true,
        minWidth:80,
        minHeight:80,
        color : 'black',
    });
    //显示调用：ajaxLoading.open();
});

// tooltip 形式
$('.tooltip').hbBox('Tooltip',{
    getContent: 'title', // 显示的内容，从元素的title获取
    theme:'TooltipBlack' // Tooltip皮肤设置
});

</script>
{% endexample %}
