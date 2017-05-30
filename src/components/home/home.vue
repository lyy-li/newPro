
<template>
	<div class="yy-home">
		<div class="yy-home-wraper">
			<header class="yy-home-header">
				<div class="yy-home-search">
					<span class="iconfont icon-fangdajing" />
					<input type="text" placeholder="输入商家、分类或商圈" class="yy-home-search-input"/>
				</div>
				<div class="yy-home-go-address" @click="goAddress()">地址</div>
			</header>
			
			<div ref="swiperContainer" class="yy-home-service swiper-container">
				<div class="yy-home-service-box swiper-wrapper" >
					<div class="swiper-slide"  v-for="(arr,index) in  serviceImgArr" :key="index">
						<div class="yy-home-service-item" @click="goService()" v-for="(item,index) in arr" :key="index">
							<div :class="['yy-home-service-img', 'yy-home-service-img-' + item.clazz]">
							</div>
							<p class="yy-home-service-title" v-text="item.name"></p>
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
/* 这个@是webpack里面定义的别名，可以看build/webpack.base.conf.js里面的resolve.alias */
import router from '@/router/router.js'


export default{
	name:'home',
	data(){
		return{
			serviceImgArr:[
				[{
					clazz: 'food',
					name: '美食'
				}, {
					clazz: 'movie',
					name: '电影'
				}, {
					clazz: 'hotel',
					name: '酒店'
				}, {
					clazz: 'entertainment',
					name: '休闲娱乐'
				}, {
					clazz: 'hotpot',
					name: '火锅'
				}, {
					clazz: 'ktv',
					name: 'KTV'
				}, {
					clazz: 'massage',
					name: '足疗按摩'
				}, {
					clazz: 'beauty',
					name: '丽人'
				}, {
					clazz: 'snack',
					name: '小吃'
				}, {
					clazz: 'sport',
					name: '运动'
				}],
				[{
					clazz: 'movie',
					name: '女朋友'
				}, {
					clazz: 'food',
					name: '大人'
				}, {
					clazz: 'hotel',
					name: '难道'
				}, {
					clazz: 'entertainment',
					name: '不是'
				}, {
					clazz: 'hotpot',
					name: '这个'
				}, {
					clazz: 'ktv',
					name: '世界'
				}, {
					clazz: 'massage',
					name: '最最'
				}, {
					clazz: 'beauty',
					name: '美腻'
				}],
			],
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
		// 优化：根据当前yy-home-service的高度来初始化swiper
		window.onload = () => {
			// 注意箭头函数里面的this指向（与普通function()区别开来）
			// 这个例子中，如果是箭头函数，this是外面的vue实例；如果是function函数，this为window对象
			this.$refs.swiperContainer.style.height = (lib.flexible.px2rem(this.$refs.swiperContainer.clientHeight + 40) + 'rem')
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
			})	
		}
		
		
	},
	beforeDestroy() {
		window.onload = null
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
    display: flex;
	padding: 19px 30px 16px 30px;
    background: #ffffff;
    box-sizing: border-box;
	position: relative;
}

.yy-home-search{
	border: 1px solid #dfdfdf; /*no*/
	padding: 14px;
	width: 100%;
	margin-right: 130px;
    position: relative;
}

.iconfont.icon-fangdajing{
	position: absolute;
    left: 20px;
    top: 16px;
    font-size: 24px; /*px*/
    color: #aeaeae;
}
.yy-home-search-input{
	width: 90%;
	margin-left: 33px;
    height: 24px;
    outline: none;
    border: none;
    text-indent: 24px;
}
.yy-home-go-address{
	position: absolute;
	right: 56px;
	top: 24px;
    font-size: 24px; /*px*/
    line-height: 57px;
	color: #ff7930;
}

.yy-home-service{
	width: 100%;
	margin-top: 12px;
	background-color: #fff;
}

.yy-home-service-item{
	float: left;
	margin: 0 30px;
}

.yy-home-service-img{
	width: 80px;
	height: 80px;
	margin-top: 20px;
	background-repeat: no-repeat;
	/* 这里两句就是无论图片大小，都能使他们比较完整显示的关键CSS */
	background-size: contain;
    background-position: 50% 50%;
}
.yy-home-service-img-food {
	/* 这里的~表示将该图片当做一个模块对待，而非相对路径处理；@和上面的import是一个道理 */
	/* 详见http://www.wscxy.com/a/5356 */
	background-image: url(~@/images/icon-food.jpg);
}
.yy-home-service-img-movie {
	background-image: url(~@/images/icon-movie.jpg);
}
.yy-home-service-img-beauty {
	background-image: url(~@/images/icon-beauty.jpg);
}
.yy-home-service-img-hotel,
.yy-home-service-img-entertainment,
.yy-home-service-img-hotpot,
.yy-home-service-img-ktv,
.yy-home-service-img-massage,
.yy-home-service-img-snack,
.yy-home-service-img-sport {
	background-image: url(http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/);
	
}
.yy-home-service-title {
	text-align: center;
	margin-top: 10px;
	font-size: 24px; /*px*/
	color: #878787;
	width: 80px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

</style>
