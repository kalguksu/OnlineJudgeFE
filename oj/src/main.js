import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import locale from 'iview/src/locale/lang/en-US'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Panel from '~/Panel.vue'
import VerticalMenu from '~/verticalMenu/verticalMenu.vue'
import VerticalMenuItem from '~/verticalMenu/verticalMenu-item.vue'
import './styles/index.less'

import filters from './utils/filters.js'

import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'

import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/atom-one-light.css'

hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('java', java)
hljs.registerLanguage('python', python)

// add global EventBus
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get () {
      return EventBus
    }
  }
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// highlight.js
Vue.directive('highlight', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})

Vue.use(iView, {locale})

Vue.component('ECharts', ECharts)
Vue.component(VerticalMenu.name, VerticalMenu)
Vue.component(VerticalMenuItem.name, VerticalMenuItem)
Vue.component(Panel.name, Panel)

// Vue.use(VueI18n)

// 注册全局消息提示
Vue.prototype.$Message.config({
  duration: 2
})
Vue.prototype.$error = Vue.prototype.$Message.error
Vue.prototype.$info = Vue.prototype.$Message.info
Vue.prototype.$success = Vue.prototype.$Message.success

new Vue(Vue.util.extend({router, store}, App)).$mount('#app')
