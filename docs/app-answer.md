---
layout: default
title: 答案
order: 2
published: true
category: APP_H5
---

## 答案
----------

答案采用统一的格式提交客户端，不管是单选、多选还是拍照题，统一格式

### 答案格式

H5向客户端提交答案，统一采用json格式：

{% example html %}
示例
<script>

var answer = {
    uid:'10000', // 用户UID(暂定是否需要)
    uuid:'abcdefg01abcdefg01', // 题目的UUID,唯一标识
    type:1,     // 题目类型 1:单选，2:多选 .....(类型暂定，需要后端配合定义)
    answers:['A','B','...'], // 多选多答案列表，顺序从上至下

    // answers:['你好','我好','大家好']    // 填多空的答案数据，顺序从上至下
    // answers:['ABC'] // 多选题答案。由于多选题虽然答案有多个，但是，看作是一个待答区
}

</script>
{% endexample %}
