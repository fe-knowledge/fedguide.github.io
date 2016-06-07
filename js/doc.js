'use strict';
if (typeof jQuery === "undefined") {
    throw new Error("please requires jQuery");
}
;(function(UI){
    UI.utils = UI.utils  ||  {
        // 判断是否为空
        isEmpty: function(obj){
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        },
        // 获取url参数
        getQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        isPhone : function(mobile) {
            if(mobile){
                if(!/^(13[0-9]|14[0-9]|15[0-9]||17[0-9]|18[0-9])\d{8}$/i.test(mobile)){
                  return false;
                }else{
                    return true;
                }
            }
            return this;
        },
        // unix转化成本地时间
        unixToLocal: function(unix) {
            var date = new Date(unix * 1000);
            var time = {
                year: date.getFullYear(),
                month: date.getMonth() + 1 ? '0'+(date.getMonth()+ 1) : (date.getMonth()+ 1),
                day: date.getDate() < 10 ? '0'+date.getDate() : date.getDate(),
                hour: date.getHours()< 10 ? '0'+date.getHours() : date.getHours(),
                min: date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes(),
                second: date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
            };
            return time;
        },
        formatTime: function(unix) {
            var self = this,
                M,D;
            var date = self.unixToLocal(unix);
            return date.year + '-' + date.month + '-' + date.day + ' ' + date.hour + ':' + date.min + ':' + date.second;
        },
        getNowTime: function() {
            var date = new Date();
            var time = date.getTime()
            return parseInt(time / 1000);
        },

        /**
         * 日期比较(d1 - d2)
         *
         * @method dateDiff
         * @param {Date} d1
         * @param {Date} d2
         * @param {String} [cmpType:ms] 比较类型, 可选值: Y/M/d/h/m/s/ms -> 年/月/日/时/分/妙/毫秒
         * @return {Float}
         */
        dateDiff: function(d1, d2, cmpType) {
            var diff = 0;
            switch (cmpType) {
                case 'Y':
                    diff = d1.getFullYear() - d2.getFullYear();
                    break;
                case 'M':
                    diff = (d1.getFullYear() - d2.getFullYear()) * 12 + (d1.getMonth() - d2.getMonth());
                    break;
                case 'd':
                    diff = (d1 - d2) / 86400000;
                    break;
                case 'h':
                    diff = (d1 - d2) / 3600000;
                    break;
                case 'm':
                    diff = (d1 - d2) / 60000;
                    break;
                case 's':
                    diff = (d1 - d2) / 1000;
                    break;
                case 'F':
                    var _diff = d1 - d2;
                    var days=Math.floor(_diff/(24*3600));
                    var _diff_day=_diff%(24*3600)    //计算天数后剩余的毫秒数
                    var hours=Math.floor(_diff_day/3600);
                    var _diff_hour=_diff_day%(3600)        //计算小时数后剩余的毫秒数
                    var minutes=Math.floor(_diff_hour/6000);
                    if(days>=1){
                        diff = days+'天';
                    }else if(days<1 && hours>=1){
                        diff = hours+'小时';
                    }else if(hours<1 && minutes >=1){
                        diff = minutes+'分';
                    }else{
                        diff = 0;
                    }
                break;
                default:
                    //diff = d1 - d2;
                    var _diff = d1 - d2;
                    var days=Math.floor(_diff/(24*3600));
                    var _diff_day=_diff%(24*3600*1000)    //计算天数后剩余的毫秒数
                    var hours=Math.floor(_diff_day/3600);
                    var _diff_hour=_diff_day%(3600*1000)        //计算小时数后剩余的毫秒数
                    var minutes=Math.floor(_diff_hour/60);
                    if(days >= 1){
                        diff = days+'天'+hours+'小时'+minutes+'分';
                    }else if(days <1 && hours>=1){
                        diff = hours+'小时'+minutes+'分';
                    }else{
                        diff = minutes+'分';
                    }
                    break;
            }
            return diff;
        },

        /**
         * 日期相加
         *
         * @method dateAdd
         * @param char interval 间隔参数
         *        y 年
         *        q 季度
         *        n 月
         *        d 日
         *        w 周
         *        h 小时
         *        m 分钟
         *        s 秒
         *        i 毫秒
         * @param {Date} indate 输入的日期
         * @param {Number} offset 差值
         * @return {Date} date 相加后的日期
         */
        dateAdd: function(interval, indate, offset) {
            switch (interval) {
                case 'y':
                    indate.setFullYear(indate.getFullYear() + offset);
                    break;
                case 'q':
                    indate.setMonth(indate.getMonth() + (offset * 3));
                    break;
                case 'n':
                    indate.setMonth(indate.getMonth() + offset);
                    break;
                case 'd':
                    indate.setDate(indate.getDate() + offset);
                    break;
                case 'w':
                    indate.setDate(indate.getDate() + (offset * 7));
                    break;
                case 'h':
                    indate.setHours(indate.getHours() + offset);
                    break;
                case 'm':
                    indate.setMinutes(indate.getMinutes() + offset);
                    break;
                case 's':
                    indate.setSeconds(indate.getSeconds() + offset);
                    break;
                case 'i':
                    indate.setMilliseconds(indate.getMilliseconds() + offset);
                    break;
                default:
                    indate.setMilliseconds(indate.getMilliseconds() + offset);
                    break;
            }
            return indate;
        },
        /**
         * 天数相加，得到加天数后的日子
         * @param date (2016-05-23)
         * @param days 需要加几天
         * @return {Date} date 相加后的日期
         */
        addDays:function(date,days){
            var nd = new Date(date);
               nd = nd.valueOf();
               nd = nd + days * 24 * 60 * 60 * 1000;
               nd = new Date(nd);
            var y = nd.getFullYear(),
                m = nd.getMonth()+1,
                d = nd.getDate();
            if(m <= 9) m = "0"+m;
            if(d <= 9) d = "0"+d;
            var cdate = y+"-"+m+"-"+d;
            return cdate;
        },
        /**
         * 格式化日期文本为日期对象
         *
         * @method str2Date
         * @param {String} date 文本日期
         * @param {String} [p:%Y-%M-%d %h:%m:%s] 文本日期的格式
         * @return {Date}
         */
        str2Date: function(date, p) {
            p = p || '%Y-%M-%d %h:%m:%s';
            p = p.replace(/\-/g, '\\-');
            p = p.replace(/\|/g, '\\|');
            p = p.replace(/\./g, '\\.');
            p = p.replace(/\+/g, '\\+');
            p = p.replace('%Y', '(\\d{4})');
            p = p.replace('%M', '(\\d{1,2})');
            p = p.replace('%d', '(\\d{1,2})');
            p = p.replace('%h', '(\\d{1,2})');
            p = p.replace('%m', '(\\d{1,2})');
            p = p.replace('%s', '(\\d{1,2})');

            var regExp = new RegExp('^' + p + '$'),
                group = regExp.exec(date),
                Y = (group[1] || 0) - 0,
                M = (group[2] || 1) - 1,
                d = (group[3] || 0) - 0,
                h = (group[4] || 0) - 0,
                m = (group[5] || 0) - 0,
                s = (group[6] || 0) - 0;

            return new Date(Y, M, d, h, m, s);
        },

        /**
         * 格式化str字符串，由于infmt默认：%Y%M%d，且很少修改，故放到最后
         * @param {String} indate 输入日期
         * @param {Strign} outfmt 输出格式，默认：%M%d
         * @param {Boolean} isFill 是否补零，默认补充
         * @param {String} infmt 输入格式，默认：%Y%M%d
         * @return {String} %M%d
         */
        str2Str: function(indate, outfmt, isFill, infmt) {
            outfmt = outfmt || "%M%d";
            isFill = typeof isFill != 'undefined' ? isFill : true;
            infmt = infmt || "%Y%M%d";
            var fmtDate = this.str2Date(indate, infmt);
            return this.date2Str(fmtDate, outfmt, isFill);
        },

        /**
         * 格式化日期为指定的格式
         *
         * @method date2Str
         * @param {Date} date
         * @param {String} p 输出格式, %Y/%M/%d/%h/%m/%s的组合
         * @param {Boolean} [isFill:false] 不足两位是否补0
         * @return {String}
         */
        date2Str: function(date, p, isFill) {
            isFill = true;
            var Y = date.getFullYear(),
                M = date.getMonth() + 1,
                d = date.getDate(),
                h = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds();
            if (isFill) {
                M = (M < 10) ? ('0' + M) : M;
                d = (d < 10) ? ('0' + d) : d;
                h = (h < 10) ? ('0' + h) : h;
                m = (m < 10) ? ('0' + m) : m;
                s = (s < 10) ? ('0' + s) : s;
            }
            p = p || '%Y-%M-%d %h:%m:%s';
            p = p.replace(/%Y/g, Y).replace(/%M/g, M).replace(/%d/g, d).replace(/%h/g, h).replace(/%m/g, m).replace(/%s/g, s);
            return p;
        },
        setTimer:function ($t, time,obj) {
            var timer = setInterval(function () {
                $t.html(time + " 秒后重新获取");
                time--;
                if (time <= 0) {
                    clearInterval(timer);
                    setTimeout(function () {
                        if(obj){
                            $t.parents().find(obj).removeClass('disabled');
                        }
                        $t.html("获取动态码").removeClass("disabled");
                    }, 10);

                }
            }, 1000);
        },
        // 事件绑定
        bindEvents: function(bindings){
            for (var i in bindings) {
                if(bindings[i].selector) {
                    $(bindings[i].element)
                        .on(bindings[i].event,bindings[i].selector , bindings[i].handler);
                }else{
                    $(bindings[i].element)
                        .on(bindings[i].event, bindings[i].handler);
                }
            }
        },
        // 简化 ReturnFalse
        returnFalse: function(evt, type){
            type = type || 0;
            switch(parseInt(type, 10)){
                case 1:
                    evt.stopPropagation();
                break;

                case 2:
                    evt.preventDefault();
                break;

                default :
                    evt.stopPropagation();
                    evt.preventDefault();
                break;
            };
            return null;
        },
        /*
        @@ 截取字符串长度，汉字算2个字符
        @@ return [string]+'...'
        */
        subString : function(str, len) {
            var newLength = 0;
            var newStr = "";
            var chineseRegex = /[^\x00-\xff]/g;
            var singleChar = "";
            var strLength = str.replace(chineseRegex, "**").length;
            for (var i = 0; i < strLength; i++) {
                singleChar = str.charAt(i).toString();
                if (singleChar.match(chineseRegex) != null) {
                    newLength += 2;
                } else {
                    newLength++;
                }
                if (newLength > len) {
                    break;
                }
                newStr += singleChar;
            }
            if (strLength > len) {
                newStr += "...";
            }
            return newStr;
        },
        /**
        * 将分转换成元
        *
        * @param value 数值(Number)
        * @return
        * @type String
        */
        fen2Yuan: function(value) {
            var re = /^[\+|-]?[0-9]+$/;
            if (typeof(value) != "string") {
                value = value.toString()
            }
            return (re.test(value)) ? (parseFloat(value) / 100).toFixed(2) : "0.00"
        },
        /**
        * 将元转换成分
        *
        * @param value 数值(Number)
        * @return
        * @type String
        */
        yuan2Fen: function(value) {
            var re = /^[\+|-]?\d+(\.\d+)?$/;
            if (typeof(value) != "string") {
                value = value.toString()
            }
            return (re.test(value)) ? (parseFloat(value) * 100).toFixed(0) : "0"
        },
        /**
        * 将数值四舍五入(保留2位小数)后格式化成金额形式
        *
        * @param num 数值(Number或者String)
        * @return 金额格式的字符串,如'1,234,567.45'
        * @type String
        */
        formatCurrency:function(num) {
            var num,
                sign,
                cents;
            num = num.toString().replace(/\$|\,/g,'');
            if(isNaN(num))
                num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num*100+0.50000000001);
            cents = num%100;
            num = Math.floor(num/100).toString();
            if(cents<10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                num = num.substring(0,num.length-(4*i+3))+','+
                        num.substring(num.length-(4*i+3));
            return (((sign)?'':'-') + num + (cents == 0 ? "" : '.' + cents) );
        },
    };
    // 模板
    UI.tpl = UI.tpl || {
        loadTpl: function(id){
            var tpl = $('#' + id).html();
            return tpl;
        },
        renderTpl: function(markup,renderData){
            var compiledTemplate = _.template(markup);
            var output = compiledTemplate(renderData);
            return output;
        },
        // renderTplById: function(tplId,renderData){
        //     var markup = this.loadTpl(tplId);
        //     var compiledTemplate = Handlebars.compile(markup);
        //     var output = compiledTemplate(renderData);
        //     return output;
        // },
        renderTplById: function(tplId,renderData){
            var markup = this.loadTpl(tplId);
            var render = _.template(markup);
            var output = render(renderData);
            return output;
        },
        debug : function(){
            Handlebars.registerHelper("debug", function(optionalValue) {
              console.group("当前上下文");
              console.log(this);
              console.groupEnd();
              if (optionalValue) {
                console.group("传入的值");
                console.debug(optionalValue);
                console.groupEnd();
              }
            });
        }
    };
    // ajax封装
    UI.xhr = UI.xhr || {
        getRequestURL: function(options){
            var host = '/';
            var port = options.port || window.location.port;
            var query = options.query || {};
            var func = options.func || '';

            var apiServer = host + func +
                (UI.utils.isEmpty(query) ? '' : '?');

            var name;
            for (name in query) {
                apiServer += name + '=' + query[name] + '&';
            }
            return apiServer.replace(/&$/gi, '');
        },
        ajaxCall: function(options,callback){
            options = options || {};
            options.data = options.data ? options.data : '';
            options.method = options.method || 'GET';
            options.dataType = options.dataType || 'json';
            options.loading = options.loading || false;
            options.url = options.url ? options.url : UI.xhr.getRequestURL(options);
            $.ajax({
                url     : options.url ,
                method  : options.method,
                data    : options.data,
                dataType:options.dataType,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function(xhrs, settings){
                    if(options.loading){
                        $.hbLoading();
                    }
                },
                complete: function(xhrs, status){
                    if(options.loading){
                        $.hideLoading();
                    }
                },
                error:function(xhrs, errorType, error){
                    if(options.loading){
                       $.hideLoading();
                    }
                },
                success:function(data){
                    if(data){
                        (typeof(callback) === 'function') ? callback(data) : '';
                    }
                }
            });
        },
        jsonpCall: function(options,callback){
            options = options || {};
            options.data = options.data ? options.data : '';
            options.method = options.method || 'POST';
            options.url = options.url ? options.url : UI.xhr.getRequestURL(options);
            $.ajax({
                url     : options.url ,
                method  : options.method,
                data    : options.data,
                dataType: 'jsonp',
                jsonp   : "callback",
                jsonpCallback : 'jsonpReturn',
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function(xhrs, settings){
                    if(options.hbLoading){
                        $.hbLoading();
                    }
                },
                complete: function(xhrs, status){
                    if(options.hbLoading){
                        $.hideLoading();
                    }
                },
                error:function(xhrs, errorType, error){
                    if(options.hbLoading){
                        $.hideLoading();
                    }
                    $.hbToast('服务器返回错误，请稍后再试...');
                },
                success:function(data){
                    if(data){
                        (typeof(callback) === 'function') ? callback(data) : '';
                    }
                }
            });
        }
    };
    // 海边统计
    UI.track = UI.track || {
        trackEvent : function(){
          $('body').on('click','[hbTrack]',function(){
            var _param = $(this).attr('hbTrack');
            _param = _param.split(',');
            _hbt.push(['_trackEvent',_param[0],_param[1],_param[2],_param[3],_param[4]]);
            UI.track.sendLog();
          });
        },
        /**
         * 自动发送统计
         * @param  {[type]} params [description]
         * @return {[type]}        [description]
         */
        autoTrackEvent:function(params){
            _param = params.split(',');
            _hbt.push(['_trackEvent',_param[0],_param[1],_param[2],_param[3],_param[4]]);
            UI.track.sendLog();
        },
        sendLog: function(){
            //拼接参数串
            var args = '';
            var params = {};
            if(_hbt) {
              for(var i in _hbt) {
                  switch(_hbt[i][0]) {
                      case '_setPid':
                          params.pid = _hbt[i][1];
                      break;
                      case '_trackEvent' :
                          params.page       = _hbt[i][1];
                          params.grade      = _hbt[i][2];
                          params.subject    = _hbt[i][3];
                          params.course     = _hbt[i][4];
                          if(_hbt[i][5]){
                             params.other      = _hbt[i][5];
                          }
                      break;
                      default:
                      break;
                  }
              }
          }
          for(var i in params) {
              if(args != '') {
                  args += '&';
              }
              args += i + '=' + encodeURIComponent(params[i]);
          }

          //通过Image对象请求后端脚本
            var img = new Image(1, 1),
                _imgURL = '';
            if($CONFIG.domain.host.indexOf('test2')>0){
                _imgURL = 'http://dev.www.haibian.com/c.gif?';
            }else{
                _imgURL = 'http://logserver.haibian.com/c.gif?';
            }
          //img.src= 'http://logserver.haibian.com/c.gif?'+args;
          img.src = _imgURL + args;
        },
        init : function(){
            var me = this;
            me.trackEvent();
        }
    }
}(HBUI));

$(function(){
    //$.hbAlert('a');
    $('body').css('visibility','visible');
});
