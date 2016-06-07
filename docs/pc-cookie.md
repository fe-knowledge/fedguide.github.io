---
layout: default
title: Cookie
order: 15
published: true
category: PCUI
---

## Cookie <span class="text-small-title">（ 命名空间：hbCookie ）</span><span class="pull-right small">更新时间：{% timeago 2016-06-07 %}</span>
----------

海边的cookie插件，经过优化后，不但能存储字符串，同时还支持json的存储

> <span class="text-danger"><b>注意：</b>为防止注册的cookie name被污染，也为了cookie的安全，海边cookie组件，在注册的时候，会自动加上cookie前缀: `__HB_`</span><br>
<span class="text-success">例如：若设置user的cookie，实际写入的cookie名为：`__HB_user` 。在使用的时候，您无需关注cookie前缀，前缀是系统自动添加。</span>

### 基本用法：

创建一个当前站点的cookie:

```JS
hbCookies.set('team', 'FE小分队');
```

创建一个当前站点的cookie,并设置有效期7天:

```JS
hbCookies.set('team', 'FE小分队', { expires: 7 });
```

创建一个当前站点的cookie,并设置有效期7天且当前路径有效:

```JS
hbCookies.set('team', 'FE小分队', { expires: 7, path: '' });
```

创建一个带域名的cookie：

```JS
hbCookies.set('team', 'FE小分队', { domain:'haibian.com'});
```

完整的配置：

```JS
hbCookies.set('team', 'FE小分队', {
    expires: 7, // 有效期（单位：天）
    path: '',   // 路径
    domain:'haibian.com'  //    域
});
```

读取Cookie:

```JS
hbCookies.get('team'); // => 'FE小分队'
hbCookies.get(); // => { team: 'FE小分队' }
```

删除Cookie:

```JS
hbCookies.remove('team');
```

### 高级用法：

JSON存储:

```JS
hbCookies.set('name', { team: 'FE小分队' });
```

当存储的是JSON的时候，读取Cookie的方法：

```JS
hbCookies.getJSON('name'); // => { team: 'FE小分队' }
hbCookies.getJSON(); // => { name: { team: 'FE小分队' } }
```
