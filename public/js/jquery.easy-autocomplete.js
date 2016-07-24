/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 * 
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License: 
 */
var EasyAutocomplete=function(t){return t.Configuration=function(t){function e(){if("xml"===t.dataType&&(t.getValue||(t.getValue=function(t){return $(t).text()}),t.list||(t.list={}),t.list.sort||(t.list.sort={}),t.list.sort.method=function(e,n){return e=t.getValue(e),n=t.getValue(n),n>e?-1:e>n?1:0},t.list.match||(t.list.match={}),t.list.match.method=function(t,e){return t.search(e)>-1}),void 0!==t.categories&&t.categories instanceof Array){for(var e=[],n=0,i=t.categories.length;i>n;n+=1){var o=t.categories[n];for(var a in s.categories[0])void 0===o[a]&&(o[a]=s.categories[0][a]);e.push(o)}t.categories=e}}function n(){function e(t,n){var i=t||{};for(var o in t)void 0!==n[o]&&null!==n[o]&&("object"!=typeof n[o]||n[o]instanceof Array?i[o]=n[o]:e(t[o],n[o]));return void 0!==n.data&&null!==n.data&&"object"==typeof n.data&&(i.data=n.data),i}s=e(s,t)}function i(){if("list-required"!==s.url&&"function"!=typeof s.url){var e=s.url;s.url=function(){return e}}if(void 0!==s.ajaxSettings.url&&"function"!=typeof s.ajaxSettings.url){var e=s.ajaxSettings.url;s.ajaxSettings.url=function(){return e}}if("string"==typeof s.listLocation){var n=s.listLocation;"XML"===s.dataType.toUpperCase()?s.listLocation=function(t){return $(t).find(n)}:s.listLocation=function(t){return t[n]}}if("string"==typeof s.getValue){var i=s.getValue;s.getValue=function(t){return t[i]}}void 0!==t.categories&&(s.categoriesAssigned=!0)}function o(){void 0!==t.ajaxSettings&&"object"==typeof t.ajaxSettings?s.ajaxSettings=t.ajaxSettings:s.ajaxSettings={}}function a(t){return void 0!==s[t]&&null!==s[t]}function r(t,e){function n(e,i){for(var o in i)void 0===e[o]&&t.log("Property '"+o+"' does not exist in EasyAutocomplete options API."),"object"==typeof e[o]&&-1===$.inArray(o,c)&&n(e[o],i[o])}n(s,e)}var s={data:"list-required",url:"list-required",dataType:"json",listLocation:function(t){return t},xmlElementName:"",getValue:function(t){return t},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(t,e){return t=s.getValue(t),e=s.getValue(e),e>t?-1:t>e?1:0}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(t,e){return t.search(e)>-1}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(t){return t},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},c=["ajaxSettings","template"];this.get=function(t){return s[t]},this.equals=function(t,e){return!(!a(t)||s[t]!==e)},this.checkDataUrlProperties=function(){return"list-required"!==s.url||"list-required"!==s.data},this.checkRequiredProperties=function(){for(var t in s)if("required"===s[t])return logger.error("Option "+t+" must be defined"),!1;return!0},this.printPropertiesThatDoesntExist=function(t,e){r(t,e)},e(),n(),s.loggerEnabled===!0&&r(console,t),o(),i()},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.Logger=function(){this.error=function(t){console.log("ERROR: "+t)},this.warning=function(t){console.log("WARNING: "+t)}},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.Constans=function(){var t={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};this.getValue=function(e){return t[e]}},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.ListBuilderService=function(t,e){function n(e,n){function i(){var i,o={};return void 0!==e.xmlElementName&&(o.xmlElementName=e.xmlElementName),void 0!==e.listLocation?i=e.listLocation:void 0!==t.get("listLocation")&&(i=t.get("listLocation")),void 0!==i?"string"==typeof i?o.data=$(n).find(i):"function"==typeof i&&(o.data=i(n)):o.data=n,o}function o(){var t={};return void 0!==e.listLocation?"string"==typeof e.listLocation?t.data=n[e.listLocation]:"function"==typeof e.listLocation&&(t.data=e.listLocation(n)):t.data=n,t}var a={};if(a="XML"===t.get("dataType").toUpperCase()?i():o(),void 0!==e.header&&(a.header=e.header),void 0!==e.maxNumberOfElements&&(a.maxNumberOfElements=e.maxNumberOfElements),void 0!==t.get("list").maxNumberOfElements&&(a.maxListSize=t.get("list").maxNumberOfElements),void 0!==e.getValue)if("string"==typeof e.getValue){var r=e.getValue;a.getValue=function(t){return t[r]}}else"function"==typeof e.getValue&&(a.getValue=e.getValue);else a.getValue=t.get("getValue");return a}function i(e){var n=[];return void 0===e.xmlElementName&&(e.xmlElementName=t.get("xmlElementName")),$(e.data).find(e.xmlElementName).each(function(){n.push(this)}),n}this.init=function(e){var n=[],i={};return i.data=t.get("listLocation")(e),i.getValue=t.get("getValue"),i.maxListSize=t.get("list").maxNumberOfElements,n.push(i),n},this.updateCategories=function(e,i){if(t.get("categoriesAssigned")){e=[];for(var o=0;o<t.get("categories").length;o+=1){var a=n(t.get("categories")[o],i);e.push(a)}}return e},this.convertXml=function(e){if("XML"===t.get("dataType").toUpperCase())for(var n=0;n<e.length;n+=1)e[n].data=i(e[n]);return e},this.processData=function(n,i){for(var o=0,a=n.length;a>o;o+=1)n[o].data=e(t,n[o],i);return n},this.checkIfDataExists=function(t){for(var e=0,n=t.length;n>e;e+=1)if(void 0!==t[e].data&&t[e].data instanceof Array&&t[e].data.length>0)return!0;return!1}},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.proccess=function(e,n,i){function o(t,n){var i=[],o="";if(e.get("list").match.enabled)for(var r=0,s=t.length;s>r;r+=1)o=e.get("getValue")(t[r]),a(o,n)&&i.push(t[r]);else i=t;return i}function a(t,n){return e.get("list").match.caseSensitive||("string"==typeof t&&(t=t.toLowerCase()),n=n.toLowerCase()),!!e.get("list").match.method(t,n)}function r(t){return void 0!==n.maxNumberOfElements&&t.length>n.maxNumberOfElements&&(t=t.slice(0,n.maxNumberOfElements)),t}function s(t){return e.get("list").sort.enabled&&t.sort(e.get("list").sort.method),t}t.proccess.match=a;var c=n.data,u=i;return c=o(c,u),c=r(c),c=s(c)},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.Template=function(t){var e={basic:{type:"basic",method:function(t){return t},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(t){return t+" - description"},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(t){return t},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(t){return t},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(t){return t},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},n=function(t){var n,i=t.fields;return"description"===t.type?(n=e.description.method,"string"==typeof i.description?n=function(t,e){return t+" - <span>"+e[i.description]+"</span>"}:"function"==typeof i.description&&(n=function(t,e){return t+" - <span>"+i.description(e)+"</span>"}),n):"iconRight"===t.type?("string"==typeof i.iconSrc?n=function(t,e){return t+"<img class='eac-icon' src='"+e[i.iconSrc]+"' />"}:"function"==typeof i.iconSrc&&(n=function(t,e){return t+"<img class='eac-icon' src='"+i.iconSrc(e)+"' />"}),n):"iconLeft"===t.type?("string"==typeof i.iconSrc?n=function(t,e){return"<img class='eac-icon' src='"+e[i.iconSrc]+"' />"+t}:"function"==typeof i.iconSrc&&(n=function(t,e){return"<img class='eac-icon' src='"+i.iconSrc(e)+"' />"+t}),n):"links"===t.type?("string"==typeof i.link?n=function(t,e){return"<a href='"+e[i.link]+"' >"+t+"</a>"}:"function"==typeof i.link&&(n=function(t,e){return"<a href='"+i.link(e)+"' >"+t+"</a>"}),n):"custom"===t.type?t.method:e.basic.method},i=function(t){return t&&t.type&&t.type&&e[t.type]?n(t):e.basic.method},o=function(t){var n=function(){return""};return t&&t.type&&t.type&&e[t.type]?function(){var n=e[t.type].cssClass;return function(){return n}}():n};this.getTemplateClass=o(t),this.build=i(t)},t}(EasyAutocomplete||{}),EasyAutocomplete=function(t){return t.main=function(e,n){function i(){return 0===E.length?void p.error("Input field doesn't exist."):m.checkDataUrlProperties()?m.checkRequiredProperties()?(o(),void r()):void p.error("Will not work without mentioned properties."):void p.error("One of options variables 'data' or 'url' must be defined.")}function o(){function t(){var t=$("<div>"),n=g.getValue("WRAPPER_CSS_CLASS");m.get("theme")&&""!==m.get("theme")&&(n+=" eac-"+m.get("theme")),m.get("cssClasses")&&""!==m.get("cssClasses")&&(n+=" "+m.get("cssClasses")),""!==h.getTemplateClass()&&(n+=" "+h.getTemplateClass()),t.addClass(n),E.wrap(t),m.get("adjustWidth")===!0&&e()}function e(){var t=E.outerWidth();E.parent().css("width",t)}function n(){E.unwrap()}function i(){var t=$("<div>").addClass(g.getValue("CONTAINER_CLASS"));t.attr("id",a()).prepend($("<ul>")),function(){t.on("show.eac",function(){switch(m.get("list").showAnimation.type){case"slide":var e=m.get("list").showAnimation.time,n=m.get("list").showAnimation.callback;t.find("ul").slideDown(e,n);break;case"fade":var e=m.get("list").showAnimation.time,n=m.get("list").showAnimation.callback;t.find("ul").fadeIn(e),n;break;default:t.find("ul").show()}m.get("list").onShowListEvent()}).on("hide.eac",function(){switch(m.get("list").hideAnimation.type){case"slide":var e=m.get("list").hideAnimation.time,n=m.get("list").hideAnimation.callback;t.find("ul").slideUp(e,n);break;case"fade":var e=m.get("list").hideAnimation.time,n=m.get("list").hideAnimation.callback;t.find("ul").fadeOut(e,n);break;default:t.find("ul").hide()}m.get("list").onHideListEvent()}).on("selectElement.eac",function(){t.find("ul li").removeClass("selected"),t.find("ul li").eq(S).addClass("selected"),m.get("list").onSelectItemEvent()}).on("loadElements.eac",function(e,n,i){var o="",a=t.find("ul");a.empty().detach(),A=[];for(var s=0,c=0,l=n.length;l>c;c+=1){var f=n[c].data;if(0!==f.length){void 0!==n[c].header&&n[c].header.length>0&&a.append("<div class='eac-category' >"+n[c].header+"</div>");for(var d=0,g=f.length;g>d&&s<n[c].maxListSize;d+=1)o=$("<li><div class='eac-item'></div></li>"),function(){var t=d,e=s,a=n[c].getValue(f[t]);o.find(" > div").on("click",function(){E.val(a).trigger("change"),S=e,u(e),m.get("list").onClickEvent(),m.get("list").onChooseEvent()}).mouseover(function(){S=e,u(e),m.get("list").onMouseOverEvent()}).mouseout(function(){m.get("list").onMouseOutEvent()}).html(h.build(r(a,i),f[t]))}(),a.append(o),A.push(f[d]),s+=1}}t.append(a),m.get("list").onLoadEvent()})}(),E.after(t)}function o(){E.next("."+g.getValue("CONTAINER_CLASS")).remove()}function r(t,e){return m.get("highlightPhrase")&&""!==e?c(t,e):t}function s(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function c(t,e){var n=s(e);return(t+"").replace(new RegExp("("+n+")","gi"),"<b>$1</b>")}E.parent().hasClass(g.getValue("WRAPPER_CSS_CLASS"))&&(o(),n()),t(),i(),C=$("#"+a()),m.get("placeholder")&&E.attr("placeholder",m.get("placeholder"))}function a(){var t=E.attr("id");return t=g.getValue("CONTAINER_ID")+t}function r(){function t(){y("autocompleteOff",!0)&&g(),e(),n(),i(),o(),a(),r()}function e(){E.focusout(function(){var t,e=E.val();m.get("list").match.caseSensitive||(e=e.toLowerCase());for(var n=0,i=A.length;i>n;n+=1)if(t=m.get("getValue")(A[n]),m.get("list").match.caseSensitive||(t=t.toLowerCase()),t===e)return S=n,void u(S)})}function n(){E.off("keyup").keyup(function(t){function e(t){function e(){var t={},e=m.get("ajaxSettings")||{};for(var n in e)t[n]=e[n];return t}function n(t,e){return m.get("matchResponseProperty")!==!1?"string"==typeof m.get("matchResponseProperty")?e[m.get("matchResponseProperty")]===t:"function"==typeof m.get("matchResponseProperty")?m.get("matchResponseProperty")(e)===t:!0:!0}if(!(t.length<m.get("minCharNumber"))){if("list-required"!==m.get("data")){var i=m.get("data"),o=v.init(i);o=v.updateCategories(o,i),o=v.processData(o,t),l(o,t),E.parent().find("li").length>0?s():c()}var a=e();void 0!==a.url&&""!==a.url||(a.url=m.get("url")),void 0!==a.dataType&&""!==a.dataType||(a.dataType=m.get("dataType")),void 0!==a.url&&"list-required"!==a.url&&(a.url=a.url(t),a.data=m.get("preparePostData")(a.data,t),$.ajax(a).done(function(e){var i=v.init(e);i=v.updateCategories(i,e),i=v.convertXml(i),n(t,e)&&(i=v.processData(i,t),l(i,t)),v.checkIfDataExists(i)&&E.parent().find("li").length>0?s():c(),m.get("ajaxCallback")()}).fail(function(){p.warning("Fail to load response data")}).always(function(){}))}}switch(t.keyCode){case 27:c(),f();break;case 38:t.preventDefault(),A.length>0&&S>0&&(S-=1,E.val(m.get("getValue")(A[S])),u(S));break;case 40:t.preventDefault(),A.length>0&&S<A.length-1&&(S+=1,E.val(m.get("getValue")(A[S])),u(S));break;default:if(t.keyCode>40||8===t.keyCode){var n=E.val();m.get("list").hideOnEmptyPhrase!==!0||8!==t.keyCode||""!==n?m.get("requestDelay")>0?(void 0!==d&&clearTimeout(d),d=setTimeout(function(){e(n)},m.get("requestDelay"))):e(n):c()}}})}function i(){E.on("keydown",function(t){t=t||window.event;var e=t.keyCode;return 38===e?(suppressKeypress=!0,!1):void 0}).keydown(function(t){13===t.keyCode&&S>-1&&(E.val(m.get("getValue")(A[S])),m.get("list").onKeyEnterEvent(),m.get("list").onChooseEvent(),S=-1,c(),t.preventDefault())})}function o(){E.off("keypress")}function a(){E.focus(function(){""!==E.val()&&A.length>0&&(S=-1,s())})}function r(){E.blur(function(){setTimeout(function(){S=-1,c()},250)})}function g(){E.attr("autocomplete","off")}t()}function s(){C.trigger("show.eac")}function c(){C.trigger("hide.eac")}function u(t){C.trigger("selectElement.eac",t)}function l(t,e){C.trigger("loadElements.eac",[t,e])}function f(){E.trigger("blur")}var d,g=new t.Constans,m=new t.Configuration(n),p=new t.Logger,h=new t.Template(n.template),v=new t.ListBuilderService(m,t.proccess),y=m.equals,E=e,C="",A=[],S=-1;t.consts=g,this.getConstants=function(){return g},this.getConfiguration=function(){return m},this.getContainer=function(){return C},this.getSelectedItemIndex=function(){return S},this.getItems=function(){return A},this.getItemData=function(t){return A.length<t||void 0===A[t]?-1:A[t]},this.getSelectedItemData=function(){return this.getItemData(S)},this.build=function(){o()},this.init=function(){i()}},t.eacHandles=[],t.getHandle=function(e){return t.eacHandles[e]},t.inputHasId=function(t){return void 0!==$(t).attr("id")&&$(t).attr("id").length>0},t.assignRandomId=function(e){var n="";do n="eac-"+Math.floor(1e4*Math.random());while(0!==$("#"+n).length);elementId=t.consts.getValue("CONTAINER_ID")+n,$(e).attr("id",n)},t.setHandle=function(e,n){t.eacHandles[n]=e},t}(EasyAutocomplete||{});!function(t){t.fn.easyAutocomplete=function(e){return this.each(function(){var n=t(this),i=new EasyAutocomplete.main(n,e);EasyAutocomplete.inputHasId(n)||EasyAutocomplete.assignRandomId(n),i.init(),EasyAutocomplete.setHandle(i,n.attr("id"))})},t.fn.getSelectedItemIndex=function(){var e=t(this).attr("id");return void 0!==e?EasyAutocomplete.getHandle(e).getSelectedItemIndex():-1},t.fn.getItems=function(){var e=t(this).attr("id");return void 0!==e?EasyAutocomplete.getHandle(e).getItems():-1},t.fn.getItemData=function(e){var n=t(this).attr("id");return void 0!==n&&e>-1?EasyAutocomplete.getHandle(n).getItemData(e):-1},t.fn.getSelectedItemData=function(){var e=t(this).attr("id");return void 0!==e?EasyAutocomplete.getHandle(e).getSelectedItemData():-1}}(jQuery);