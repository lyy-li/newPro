
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from './../components/home/home.vue'
import HomeAddress from './../components/home/homeAddress.vue'
import HomeService from './../components/home/homeService.vue'
import HomeArtist from './../components/home/homeArtist.vue'

import Order from './../components/order/order.vue'
import Artist from './../components/artist/artist.vue'
import Me from './../components/me/me.vue'



export default new Router({
	routes:[
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'address',
					component:HomeAddress
				},
				{
					path:'service',
					component:HomeService
				},
				{
					path:'artist',
					component:HomeArtist
				},
				
			]
		},
		{
			path:'/order',
			component:Order
		},
		{
			path:'/Artist',
			component:Artist
		},
		{
			path:'/Me',
			component:Me
		},
		{
			path:'*',
			redirect:'/home'
		}
	]
})

































