
<template>
	<transition enter-active-class="slideInRight sell-animated" leave-active-class="slideOutRight sell-animated">
		<div class="home-service">
			
			<child-header :title="title"></child-header>
		</div>
	</transition>
</template>

<script>

import Vue from 'vue'

//引入子头部组件
import ChildHeader from './childHeader.vue'

export default{
	name:'home-service',
	components:{
		'child-header':ChildHeader
	},
	data(){
		return{
			title:'分类选择'
		}
	}
	
}


</script>

<style>

.home-service{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #CCCCCC;
    z-index: 2;
}
</style>
