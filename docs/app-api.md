---
layout: default
title: 交互接口
order: 3
published: true
category: APP_H5
---

## 交互接口
----------

### API名称定义

* <b>native<font color="#dc0000">XXX</font></b>
* <b>web<font color="#dc0000">XXX</font></b>

<b>native</b> 含义：客户端的接口，提供给H5调用。“XXX” 表示具体的方法名

<b>web</b> 含义：H5的接口，提供给客户端调用。“XXX” 表示具体的方法名



### API列表

#### nativeSetAnswer

>p 提交答案(H5提交答案到客户端)

答题操作时，H5调用此接口，向客户端push用户提交的答案，客户端进行答案本地操作

参数：JSON字符串(UID,uuid,type,answers)

{% example html %}
<script>

var answer = {
    uid:'10000', // 用户UID(暂定是否需要)
    uuid:'abcdefg01abcdefg01', // 题目的UUID,唯一标识
    type:1,     // 题目类型 1:单选，2:多选 .....(类型暂定，需要后端配合定义)
    answers:['A','B','...'], // 多选多答案列表，顺序从上至下
}

</script>
{% endexample %}

#### nativeGetAnswer

> 获取答案(H5主动获取客户端缓存的答案)

返回数据：

{% example html %}
客户端返回答案给H5：
<script>

var answer = {
    uid:'10000', // 用户UID(暂定是否需要)
    uuid:'abcdefg01abcdefg01', // 题目的UUID,唯一标识
    type:1,     // 题目类型 1:单选，2:多选 .....(类型暂定，需要后端配合定义)
    answers:[{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        // ........
    }]
}

</script>
{% endexample %}

界面回退时，H5主动获取答案，用于显示用户之前的答案项

#### webGetImageUrl
> 客户端上传完图片，返回给H5预览

{% example html %}
<script>

var answer = {
    uid:'10000', // 用户UID(暂定是否需要)
    uuid:'abcdefg01abcdefg01', // 题目的UUID,唯一标识
    type:1,     // 题目类型 1:单选，2:多选 .....(类型暂定，需要后端配合定义)
    answers:[{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        // ........
    }]
}

</script>
{% endexample %}

#### nativeOpenVoice
> 打开语音(客户端主动呼出录音功能,录音结束后，客户端自动跳转下一题)

参数： UUID

{% example html %}
<script>
// 提供UUId给客户端
var answer = 'UUID';

</script>
{% endexample %}


#### webGetVoiceUrl
> 获取客户端返回的语言url，返回给H5进行试听

{% example html %}
<script>

var answer = {
    uid:'10000', // 用户UID(暂定是否需要)
    uuid:'abcdefg01abcdefg01', // 题目的UUID,唯一标识
    type:1,     // 题目类型 1:单选，2:多选 .....(类型暂定，需要后端配合定义)
    answers:[{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        answer : 'A',   // 答案项
        url:'',     // 音频或图片URL （有则返回，无则为空）
        length:'' // 音频时长，单位：S （有则返回，无则为空）
    },{
        // ........
    }]
}

</script>
{% endexample %}
