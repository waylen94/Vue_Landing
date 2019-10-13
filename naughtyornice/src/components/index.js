import Vue from 'vue'
import Message from './Message'
import Table from './Table.vue'



const components = {
  Message,}


// Vue.component('Message', Message)
for (const [key, value] of Object.entries(components)) {
  Vue.component(key, value)
}
