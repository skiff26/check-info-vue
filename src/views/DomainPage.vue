<template>
	<Sidebar />
	<div class="wrapper">
		<h1 class="header">Пробив по домену</h1>
		<p>Узнать информацию <code>(JSON)</code> по <strong>домену</strong>{{ domain === '' ? '' : ' «‎ ' + domain + ' »‎'}}</p>
		<input type="text" v-model="domain" @keydown.enter="getInfo" @keydown.esc="clearInfo" placeholder="Введите домен">
		<button class="button" v-if="domain != ''" @click="getInfo">Получить информацию</button>
		<button class="button" disabled v-else>Введите домен</button>
		<Loader v-show="loading"/>
		<p class="error">{{ error }}</p>
		<div v-if="info != null && loading === false" class="json">
			<small class="json__header">JSON</small>
			<code class="json__body">
				{{ this.info }}
			</code>
		</div>
		<TheGroupButtons @back="back" @clear="clearInfo"/>
	</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Loader from '../components/Loader.vue'
import TheGroupButtons from '../components/TheGroupButtons.vue'

export default {
	components: { Sidebar, Loader, TheGroupButtons },
	data(){
		return {
			domain: '',
			error: '',
			info: null,
			loading: false,
			previousInfo: '',
			previousDomain: '',
		}
	},
	methods: {
		getInfo(){
			this.loading = true
			if(!this.domain.includes('.')){
				this.error = 'Некорректный домен'
				this.info = null
				this.loading = false
				return false
			}

			var myHeaders = new Headers();
			myHeaders.append("apikey", "hCGOfGUtABBQNS7K5jCZI78tx9fxMfC2");
			
			var requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders
			};
			this.error = ''
			fetch(`https://api.apilayer.com/whois/query?domain=${this.domain}`, requestOptions)
				.then(response => response.text())
				.then(result => {
					this.info = result
					this.loading = false
					console.log(this.info);
				})
				.catch(error => this.error = error);
		},
		clearInfo(){
			this.loading = true
			this.error = ''
			this.previousInfo = this.info 
			this.previousDomain = this.domain
			this.domain = ''
			this.info = null
			this.loading = false
		},
		back(){
			this.info = this.previousInfo
			this.domain = this.previousDomain
		}
	}
}
</script>

<style scoped>
.wrapper {
	min-height: 300px;
}
.error{
	margin-top: 10px;
}
.json{
	width: 800px;
	min-height: 100px;
	border-radius: 30px;
	margin: 25px auto 0px auto;
	background: rgb(33,33,36);
	background: linear-gradient(261deg, rgba(33,33,36,1) 0%, rgba(58,58,60,1) 35%, rgba(54,54,51,1) 65%, rgba(31,31,28,1) 100%);
	-webkit-box-shadow: 0px 5px 40px 2px rgba(22, 20, 24, 0.55);
	-moz-box-shadow: 0px 5px 40px 2px rgba(22, 20, 24, 0.55);
	box-shadow: 0px 5px 40px 2px rgba(22, 20, 24, 0.55);
	margin-bottom: 5px;
}
.json__body{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
}
@media(max-width: 695px){
	.wrapper{
		width: auto;
		min-height: min-content;
	}
	.wrapper h1 {
		font-size: 24px;
	}
	.button {
		display: block;
		margin: 0 auto;
		margin-top: 10px;
	}
	.button:hover{
		transform: none;
	}
	.json {
		width: auto;
	}
}
</style>