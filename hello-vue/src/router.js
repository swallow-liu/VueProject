/**
 * Created by Jack_ESong on 2017/3/3.
 */
import Index from './compontent/index.vue'
import App   from './App.vue'
import Indexs from './compontent/indexs.vue'
const router=[
    { path: '/index',  component: Index ,
    children:[
        { path: '/',  component: Indexs },
        { path:'/lenderCreate',component:Indexs}
    ]
    },
    { path: '/',  component: App }
]

export default  router

