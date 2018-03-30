
define([],function(Handlebars,Loading){
	var ajax = {
		/**
		 * 请求状态码
		 * @type {Object}
		 */
		reqCode : {
			/**
			 * 成功返回码 0
			 * @type {Number} 1
			 * @property SUCC
			 */
			SUCC : 0
		},
		/**
		 * 请求的数据类型
		 * @type {Object}
		 * @class reqDataType
		 */
		dataType : {
			/**
			 * 返回html类型
			 * @type {String}
			 * @property HTML
			 */
			HTML : "html",
			/**
			 * 返回json类型
			 * @type {Object}
			 * @property JSON
			 */
			JSON : "json",
			/**
			 * 返回text字符串类型
			 * @type {String}
			 * @property TEXT
			 */
			TEXT : "text"
		},
		/**
		 * 超时,默认超时30000ms
		 * @type {Number} 10000ms
		 * @property TIME_OUT
		 */
		TIME_OUT : 60000,
		/**
		 * 显示请求成功信息
		 * 
		 * @type {Boolean} false
		 * @property SHOW_SUCC_INFO
		 */
		SHOW_SUCC_INFO : false,
		/**
		 * 显示请求失败信息
		 * 
		 * @type {Boolean} false
		 * @property SHOW_ERROR_INFO
		 */
		SHOW_ERROR_INFO : false,
		/**
		 * GetJson是对ajax的封装,为创建 "GET" 请求方式返回 "JSON"(text) 数据类型
		 * @param {String}
		 *            url HTTP(GET)请求地址
		 * @param {Object}
		 *            cmd json对象参数
		 * @param {Function}
		 *            callback [optional,default=undefined] GET请求成功回调函数
		 */
		getJson : function(url, cmd, callback) {
			if (arguments.length !== 3)
				callback = cmd, cmd = '';
			//dataType = this.dataType.JSON;
			this.ajaxBase(url, 'GET', cmd, this.dataType.JSON, callback);
		},
		/**
		 * PostJson是对ajax的封装,为创建 "POST" 请求方式返回 "JSON"(text) 数据类型
		 * @param {String}
		 *            url HTTP(POST)请求地址
		 * @param {Object}
		 *            cmd json对象参数
		 * @param {Function}
		 *            callback [optional,default=undefined] POST请求成功回调函数
		 */
		postJson : function(url, cmd, callback) {
			//dataType = this.dataType.JSON;
			this.ajaxBase(url, 'POST', cmd, this.dataType.JSON, callback,'');
		},
		ajax:function(options){
			var config = $.extend({
				type : 'post',
				dataType : 'json',
				timeout : 30000,
				beforeSend : function(xhr) {
					xhr.overrideMimeType("text/plain; charset=utf-8");
				}
			},options);
			$.ajax(config);
		},
		/**
		 * 基于jQuery ajax的封装，可配置化
		 * 
		 * @method ajax
		 * @param {String}
		 *            url HTTP(POST/GET)请求地址
		 * @param {String}
		 *            type POST/GET
		 * @param {Object}
		 *            cmd json参数命令和数据
		 * @param {String}
		 *            dataType 返回的数据类型
		 * @param {Function}
		 *            callback [optional,default=undefined] 请求成功回调函数,返回数据data和isSuc
		 */
		ajaxBase : function(url, type, cmd, dataType, callback, sync) {
			var param = "";
			/*async = sync ? false : true;*/
			var thiz = this;
			var cache = (dataType == "html") ? true : false;
			$.ajax({
				url : url,
				type : type,
				data : cmd?cmd:{},
				cache : cache,
				dataType : dataType,
				async : sync ? false : true,
				timeout : thiz.TIME_OUT,
				beforeSend : function(xhr) {
					xhr.overrideMimeType("text/plain; charset=utf-8");
				},
				success : function(data) {
					if (!data) {
						return;
					}
					if (dataType == "html") {
						callback(data, true);
						return;
					}
					try {
						//超时重定向至登陆页 或者session验证不通过时
						if (data.returnCode=='RELOGIN') {
							//判断是否存在iframe
			                window.location.href = 'login.html';
							return;
						}
					} catch (e) {
						alert("JSON Format Error:" + e.toString());
					}
					var isSuc = thiz.printReqInfo(data);
					if (callback && data) {
						callback(data || {}, isSuc);
					}
				},
				error : function(e) {
				    var retErr ={};
				    retErr['returnCode']="404";
				    retErr['returnMessage']="网络异常或超时，请稍候再试！"; 
					callback(retErr, false);
				},
	            complete:function(){
	            }
			});
		}		
	};

	return ajax;
});