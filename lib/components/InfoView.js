var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".vue-info[data-v-a9a8bce4] {\n  padding: 0 1em;\n}\n\nh1[data-v-a9a8bce4], h2[data-v-a9a8bce4], h3[data-v-a9a8bce4], h4[data-v-a9a8bce4], h5[data-v-a9a8bce4], h6[data-v-a9a8bce4] {\n  color: #333;\n}\n\nh2[data-v-a9a8bce4] {\n  margin-top: 2em;\n}\n\n.code[data-v-a9a8bce4] {\n  overflow: auto;\n  padding: 1em;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n}\n\n.component-area[data-v-a9a8bce4] {\n  padding: 1em;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\n.props[data-v-a9a8bce4] {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n}\n\n.props td[data-v-a9a8bce4], .props th[data-v-a9a8bce4] {\n  padding: 0.5em 1em;\n  padding-right: 1.5em;\n}\n\n.props tr[data-v-a9a8bce4] {\n  border-bottom: 1px solid #ccc;\n}\n\n.props-head[data-v-a9a8bce4] {\n  color: #888;\n  background-color: #eee;\n  text-align: left;\n}\n\n.tag[data-v-a9a8bce4] {\n  font-size: 0.7em;\n  padding: 0.2em 0.4em;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #eee;\n  color: #333;\n}")
;(function(){
"use strict";

module.exports = {
  props: {
    name: {
      type: String,
      required: true
    },
    template: {
      type: String,
      required: true
    },
    propsList: {
      type: Array,
      required: true
    },
    story: {
      type: Object
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-info"},[_c('h1',{staticClass:"title"},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('h2',[_vm._v("Usage")]),_vm._v(" "),_c('pre',{staticClass:"code"},[_c('code',[_vm._v(_vm._s(_vm.template))])]),_vm._v(" "),_c('h2',[_vm._v("Preview")]),_vm._v(" "),_c('div',{staticClass:"component-area"},[_vm._t("default")],2),_vm._v(" "),_c('h2',[_vm._v("Props")]),_vm._v(" "),_c('table',{staticClass:"props"},[_vm._m(0,false,false),_vm._v(" "),_c('tbody',_vm._l((_vm.propsList),function(prop){return _c('tr',{key:prop.name},[_c('td',[_vm._v("\n          "+_vm._s(prop.name)+"\n          "),(prop.required)?_c('span',{staticClass:"tag"},[_vm._v("required")]):_vm._e()]),_vm._v(" "),_c('td',[_vm._v(_vm._s(prop.type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(prop.default))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(prop.desc))])])}))]),_vm._v(" "),(_vm.story.events)?_c('h2',[_vm._v("Events")]):_vm._e(),_vm._v(" "),(_vm.story.events)?_c('table',{staticClass:"props"},[_vm._m(1,false,false),_vm._v(" "),_c('tbody',_vm._l((_vm.story.events),function(event){return _c('tr',{key:event.name},[_c('td',[_vm._v("\n        "+_vm._s(event.name)+"\n      ")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(event.desc))])])}))]):_vm._e()])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"props-head"},[_c('tr',[_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Type")]),_vm._v(" "),_c('th',[_vm._v("Default")]),_vm._v(" "),_c('th',[_vm._v("Description")])])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"props-head"},[_c('tr',[_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Description")])])])}]
__vue__options__._scopeId = "data-v-a9a8bce4"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a9a8bce4", __vue__options__)
  } else {
    hotAPI.reload("data-v-a9a8bce4", __vue__options__)
  }
})()}