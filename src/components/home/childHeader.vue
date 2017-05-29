
<template>
	<div class="child-header">
		<header class="yy-child-header">
			<span @click.stop="goBack()">返回</span>
			<h6>{{title}}</h6>
		</header>
	</div>
</template>

<script>

import Vue from 'vue'

import router from './../../router/router.js'

export default{
	name:'child-header',
	props:['title'],
	methods:{
		goBack(){
			router.back();
		}
	}
}


</script>

<style>

.yy-child-header{
	height: 44px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    line-height: 24px;
    background-color: #434343;
    color: #fff;
}	

.yy-child-header span{
	position: absolute;
    left: 10px;
}

.yy-child-header h6{
	text-align: center;
}

</style>
