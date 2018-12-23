(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vuetify'), require('vuedraggable')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vuetify', 'vuedraggable'], factory) :
  (factory((global.VueMapboxglLayercontrol = {}),global.Vue,global.Vuetify,global.VueDraggable));
}(this, (function (exports,Vue,Vuetify,draggable) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  Vuetify = Vuetify && Vuetify.hasOwnProperty('default') ? Vuetify['default'] : Vuetify;
  draggable = draggable && draggable.hasOwnProperty('default') ? draggable['default'] : draggable;

  //

  Vue.use(Vuetify);

  var script = {
    name: 'vue-mapboxgl-layercontrol', // vue component name
    props: {
      map: {
        type: Object
      },
      layers: {
        type: Array,
        default: []
      }
    },
    methods: {
      endDrag: function endDrag (evt) {
      }
    },
    data: function data() {
      return {

      }
    },
    computed: {
      editableLayers: {
        get: function get () {
          return this.layers
        },
        // emit a new value for the .sync
        set: function set (layers) {
          this.$emit('update:layers', layers);
        }
      }
    },
    components: {
      draggable: draggable
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-mapboxgl-layercontrol"},[_c('v-list',[_c('draggable',{attrs:{"options":{handle: '.handle'}},on:{"start":function($event){},"end":_vm.endDrag},model:{value:(_vm.editableLayers),callback:function ($$v) {_vm.editableLayers=$$v;},expression:"editableLayers"}},_vm._l((_vm.editableLayers),function(layer){return _c('v-list-group',{key:layer.title,attrs:{"no-action":""},on:{"click":function($event){}},model:{value:(layer.expanded),callback:function ($$v) {_vm.$set(layer, "expanded", $$v);},expression:"layer.expanded"}},[_c('v-list-tile',{staticClass:"header",attrs:{"slot":"activator","avatar":"","dense":""},on:{"click":function($event){$event.stopPropagation();}},slot:"activator"},[_c('v-icon',{staticClass:"handle"},[_vm._v("drag_indicator")]),_vm._v(" "),_c('v-list-tile-action',{staticClass:"toggle"},[_c('v-checkbox',{model:{value:(layer.active),callback:function ($$v) {_vm.$set(layer, "active", $$v);},expression:"layer.active"}})],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(layer.name)}})],1),_vm._v(" "),_c('v-list-tile-avatar',[_c('img',{attrs:{"src":layer.icon}})])],1),_vm._v(" "),_c('v-container',{attrs:{"fluid":"","pa-2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-slider',{attrs:{"label":"opacity","height":"20px"},model:{value:(layer.opacity),callback:function ($$v) {_vm.$set(layer, "opacity", $$v);},expression:"layer.opacity"}})],1)],1)],1)],1)}),1)],1)],1)};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-5d64114f_0", { source: ".vue-mapboxgl-layercontrol[data-v-5d64114f] .header>.v-list__tile{padding:0 6px}.v-list__group__header .v-list__group__header__prepend-icon[data-v-5d64114f],.vue-mapboxgl-layercontrol[data-v-5d64114f] .v-list__group__header .v-list__group__header__append-icon{padding:0 6px}.vue-mapboxgl-layercontrol[data-v-5d64114f] .v-input--slider{margin-top:inherit}.toggle.v-list__tile__action[data-v-5d64114f]{min-width:inherit}.handle[data-v-5d64114f]:hover{cursor:move}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-5d64114f";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "vue-mapboxgl-layercontrol.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
              ' */';
          }

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var component = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue$$1) {
    if (install.installed) { return; }
    install.installed = true;
    Vue$$1.component('VueMapboxglLayercontrol', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // To auto-install when vue is found
  /* global window global */
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
