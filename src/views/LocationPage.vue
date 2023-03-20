<template>
	<Sidebar />
	<div class="wrapper">
		<h1>Пробив IP адреса</h1>
		<p class="subtitle">Узнать информацию по <strong>IP</strong> {{ ip.trim() == "" ? "«вашему»" : "«" + ip + "»"}} </p>
		<input ref="input" @keydown.enter="ip.trim === '' ? alert('Error') : getInfo()" @keydown.esc="clearInfo" type="text" maxlength="16" minlength="7" v-model="ip" placeholder="Введите IP адрес" title="Формат: 11.120.0.190">
		<button class="button" v-if="ip != ''" @click="getInfo">Получить информацию</button>
		<button class="button" disabled v-else>Введите IP адрес</button>

		<Loader v-show="loading"/> 
		
		<p v-show="error" class="error">{{ error }}</p>
		
		<TheSuccessResult :info="info" v-if="info != null && info.status === 'success' && info.city.length > 1 && loading === false" />
		<TheFailResult :info="info" v-else-if="info != null && loading === false"/>
			
		<TheGroupButtons :map="map" :info="info" @back="backInfo" @clear="clearInfo"/>
	</div>
</template>

<script>
import axios from 'axios'
import BaseIcon from '../components/BaseIcon.vue'
import Loader from '../components/Loader.vue'
import TheSuccessResult from '../components/TheSuccessResult.vue'
import TheFailResult from '../components/TheFailResult.vue'
import TheGroupButtons from '../components/TheGroupButtons.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
	components: {
		Loader, Sidebar, BaseIcon, TheSuccessResult, TheFailResult, TheGroupButtons
	},
	data(){
		return {
			ip: '',
			info: null,
			error: '',
			save: '',
			saveIp: '',
			loading: false,
			map: true,
		}
	},
	methods: {
		getInfo(){
			if(this.ip !== ''){
			this.loading = true
			this.error = ''
			setTimeout(() => {
				const notIpRegex = /^((?!(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)).)*$/
				if(this.ip.match(notIpRegex)){
					this.error = `Формат IP: ${this.saveIp}`
					alert(`Ошибка формата IP!\nФормат: ${this.saveIp}`)
					this.info = null
					this.loading = false
					return false
				}
				axios.get(`http://ip-api.com/json/${this.ip}?fields=43053055`)
					.then(res => (this.info = res.data, console.log(this.info), this.loading = false))
				}, 700)
			}
		},
		clearInfo(){
			if(this.ip !== ''){
				this.loading = true 
				setTimeout(() => {
				this.save = this.ip
				this.info = null
				this.error = ''
				this.ip = ''
				axios.get(`http://ip-api.com/json/?fields=43053055`)
					.then(res => (this.info = res.data));
				this.loading = false
			}, 500)
			}
		},
		backInfo(){
			if(this.save === ''){
				axios.get(`http://ip-api.com/json/?fields=43053055`)
				.then(res => (this.info = res.data))
			} else {
				this.ip = this.save
				this.getInfo()
			}
		},
	},
	mounted() {
		this.$refs.input.focus()
		if(this.ip === ''){
		axios.get(`http://ip-api.com/json/?fields=43053055`)
			.then(res => (this.info = res.data, this.saveIp = res.data.query));
		}
	},
}
</script>
<style scoped>
.wrapper{
	min-height: 550px;
}
@media(max-width: 695px){
	.wrapper{
		width: auto;
		min-height: min-content;
	}
	.wrapper h1 {
		font-size: 24px;
	}
}
@media(max-width: 410px){
	.wrapper{
		width: auto;
		min-height: min-content;
	}
	.button {
		margin-top: 10px;
	}
	.button:hover{
		transform: none;
	}
	.wrapper h1 {
		font-size: 20px;
	}
}
@media (max-width: 377px){
	.button{
		margin-top: 20px;
	}
}
.error{
	margin-top: 10px;
}
</style>