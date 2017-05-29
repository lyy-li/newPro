<template>
	<div class="yy-app">
		<router-view></router-view>
		
		
		<div class="yy-tabs">
			<div class="yy-tab" v-for="(tabItem,index) in tabItemArr" :key="index" @click="clickActon(index)">
				<span class="iconfont" :class="[tabItem.icon,{'selected':selectedIndex==index}]" ></span>
				<p class="yy-title" :class="{'selected':selectedIndex==index}">{{tabItem.title}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import './css/iconfont.css'
import Vue from 'vue'

import router from './router/router.js'

export default{
	name:'yy-app',
	data(){
		return{
			selectedIndex:0,
			tabItemArr:[
				{title:'首页',path:'home',icon:'iconfont icon-shoutidai'},
				{title:'我的订单',path:'order',icon:'iconfont icon-wodedingdan'},
				{title:'艺人中心',path:'artist',icon:'iconfont icon-wodejiaren'},
				{title:'个人中心',path:'me',icon:'iconfont icon-shangchengicon08'}
			]
		}
	},
	methods:{
		clickActon(index){
			this.selectedIndex = index;
			router.push('/'+this.tabItemArr[index].path);
		}
	}
}

</script>

<style>
.yy-home,.yy-artist,.yy-order,.yy-me{
    position: absolute;
    width: 100%;
    bottom: 0px;
    top: 0;
}

.yy-home{
	background-color: #f8f8f8;
}

.yy-tabs{
	width: 100%;
    height: 49px;
    display: flex;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.yy-tab{
	flex: 1;
	text-align: center;
}

.yy-tab span{
	line-height: 34px;
}

.yy-title{
	font-size: 12px;
    transform: scale(0.88888);
    color: #cacaca;
}

 .selected{
	color: orange;
}
.iconfont.selected{
	color: orange;
}

</style>




