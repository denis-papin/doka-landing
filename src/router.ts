import { createRouter, createWebHistory } from 'vue-router'
import Story from './components/pages/Story.vue'
import Features from './components/pages/Features.vue'
import PreRegister from './components/pages/PreRegister.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/story' },
        { path: '/story', component: Story },
        { path: '/features', component: Features },
        { path: '/pre-register', component: PreRegister }
    ]
})
