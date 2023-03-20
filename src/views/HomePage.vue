<template>
	<div class="wrapper">
		<h1 class="nav-name">Навигация</h1>
		<div class="buttons">
			<button @click="$router.push('/bodymassindex')" class="sidebar_locator"><BaseIcon name="bodymassindex"/> MIndex</button>
			<button @click="$router.push('/location')" class="sidebar_locator"><BaseIcon name="locator"/> Locator</button>
			<button @click="$router.push('/domain')" class="sidebar_domain"><BaseIcon name="domain"/> Domain</button>
			<button @click="$router.push('/weather')" class="sidebar_weather"><BaseIcon name="weather"/> Weather</button>
		</div>
	</div>
</template>

<script>
import BaseIcon from '../components/BaseIcon.vue'

export default {
	components: {
		BaseIcon
	}
}
</script>

<style scoped>
.wrapper{
	position: relative;
	height: min-content;
	width: 500px;
	border-radius: 50px;
	background: rgb(33,33,36);
	background: linear-gradient(261deg, rgba(33,33,36,1) 0%, rgba(98,98,103,1) 35%, rgba(93,93,92,1) 65%, rgba(31,31,28,1) 100%);
}
@media(max-width: 695px){
	.wrapper{
		width: auto;
		padding: 0px 60px 0px 60px;
		min-height: min-content;
	}
	.wrapper h1 {
		font-size: 24px;
	}
}
.buttons {
	display: flex;
	flex-direction: column;
	gap: 30px;
	justify-content: center;
	align-items: center;
	padding-bottom: 40px;
}
.nav-name{
	text-align: center;
	padding: 40px 0;
	color: rgba(255, 255, 255, 0.897);
}
button {
 width: 140px;
 height: 45px;
 font-size: 23px;
 cursor: pointer;
 border: none;
 outline: none;
 background: transparent;
 color: white;
 font-family: 'Times New Roman', Times, serif;
 font-weight: 700;
 position: relative;
 transition: all 0.5s;
 z-index: 1;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 5px;
 height: 100%;
 background-color: white;
 z-index: -1;
 transition: all 0.5s 0.1s;
}
button:hover::before {
 width: 100%;
}
button:hover {
	transition-delay: 0.1s;
 color: black;
}
button:hover svg{
	transition-delay: 0.1s;
	fill: rgba(0, 0, 0, 0.895);
}
button:active:before {
 background: #b9b9b9;
}
</style>