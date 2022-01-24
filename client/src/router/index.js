import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
     path: '/',
     redirect: '/home'
  },
  {
     path: '/index',
     name: '/index',
     component: () => import('../views/index'),
	 children:[
		{
			path:'/home',
			name:'/home',
			component:() => import('../views/Home')
		},
		{
			path:'/login',
			name:'/login',
			component:() => import('../views/Login')
		},
		{
			path:'/register',
			name:'/register',
			component:() => import('../views/Register')
		},
		{
			path:'/me',
			name:'/me',
			component:() => import('../views/Me')
		},
		{
			path:'/shopcart',
			name:'/shopcart',
			component:() => import('../views/Shopcart')
		},
		{
			path:'/goods',
			name:'/goods',
			component:() => import('../views/Goods')
		},
		{
			path:'/settlement',
			name:'/settlement',
			component:() => import('../views/Settlement')
		},
		{
			path:'/finish',
			name:'/finish',
			component:() => import('../views/Finish')
		},
		{
			path:'/about',
			name:'/about',
			component:() => import('../views/About')
		}
	 ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
