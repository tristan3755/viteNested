import './style.css'
import Glide from '@glidejs/glide'
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

let application=document.getElementById('app')
let application2=document.getElementById('app2')

if(application){
const app=new Vue({
  el:'#app',

data:{

toggle:false,

},
methods:{
 tooggle(){
this.toggle=!this.toggle
console.log(this.toggle)
  }
}

})
}
if(application2){
const app2=new Vue({
  el:'#app2',

data:{

toggle:false,

},
methods:{
 tooggle(){
this.toggle=!this.toggle
console.log(this.toggle)
  }
}

})
}
console.log(Vue)

new Glide('.glide').mount()


