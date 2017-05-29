
<template>
	<div class="yy-home">
		<div class="yy-home-wraper">
			<header class="yy-home-header">
				<div class="yy-home-search">
					<span class="iconfont icon-fangdajing" />
					<input type="text" class="yy-home-search-input"/>
				</div>
				<div class="yy-home-go-address" @click="goAddress()">地址</div>
			</header>
			
			<div class="yy-home-service swiper-container">
				<div class="yy-home-service-box swiper-wrapper" >
					<div class="swiper-slide"  v-for="(arr,index) in  serviceImgArr" :key="index">
						<div class="yy-home-service-item" @click="goService()" v-for="(item,index) in arr" :key="index">
							<div class="yy-home-service-img">
								<img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
							</div>
							<p class="yy-home-service-title">美食</p>
						</div>
					</div>
				</div>
				
				 <div class="swiper-pagination"></div>
			</div>
			
			<!--<home-select></home-select>
			<div class="yy-home-artist-wrapper">
				
				
			</div>-->
		</div>
		
		<router-view></router-view>
		
		
	</div>
</template>

<script>

import Vue from 'vue'

import router from './../../router/router.js'


export default{
	name:'home',
	data(){
		return{
			serviceImgArr:[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]],
		}
	},
	methods:{
		goAddress(){
			router.push('/home/address');
		},
		goService(){
			router.push('/home/service');
		}
	},
	mounted(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
  		})
		
	}
}
</script>

<style>

.yy-home-wraper{
	overflow: auto;
	width: 100%;
	height: 100%;
}

.yy-home-header{
	width: 100%;
    display: flex;
    padding: 10px;
    background: #ffffff;
    box-sizing: border-box;
}

.yy-home-search{
	width: 76%;
    position: relative;
}

.iconfont.icon-fangdajing{
	position: absolute;
    left: 4px;
    top: 7px;
    font-size: 18px;
    color: #aeaeae;
}
.yy-home-search-input{
	width: 100%;
    height: 24px;
    /* border-color: #dfdfdf; */
    /* border-radius: 5px; */
    text-indent: 24px;
    outline: none;
}

.yy-home-go-address{
	width: 18%;
    height: 30px;
    line-height: 30px;
    background: orange;
    text-align: center;
    border-radius: 5%;
    margin-left: 15px;
}

.yy-home-service{
	width: 100%;
	height: 180px;
}

.yy-home-service-item{
	float: left;
	width: 15%;
}

.yy-home-service-img{
	width: 100%;
}

.yy-home-service-img img{
	width: 100%;
}

</style>
