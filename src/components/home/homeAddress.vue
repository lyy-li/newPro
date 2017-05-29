
<template>
	<transition enter-active-class="slideInRight sell-animated" leave-active-class="slideOutRight sell-animated">
		<div class="home-address">
			<child-header :title="title"></child-header>
		</div>
	</transition>
</template>

<script>

import Vue from 'vue'

//引入子头部组件
import ChildHeader from './childHeader.vue'

export default{
	name:'home-address',
	components:{
		'child-header':ChildHeader
	},
	data(){
		return{
			title:'选择所在地区'
		}
	},
	methods:{
		
	}
}


</script>


<style>
.home-address{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #CCCCCC;
    z-index: 2;
}

	
</style>