<template>
	<div class="sidebar">
		<button @click="$router.push('/bodymassindex')" class="sidebar_bodymassindex">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16" v-html="bodymassindex"></svg>
				Body Mass Index
		</button>
		<button @click="$router.push('/location')" class="sidebar_locator">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16" v-html="locator"></svg>
			Locator
		</button>
		<button @click="$router.push('/domain')" class="sidebar_domain">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" v-html="domain"></svg>
			Domain
		</button>
		<button @click="$router.push('/weather')" class="sidebar_weather">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff"	viewBox="0 0 16 16" v-html="weather"></svg>
			Weather
		</button>
	</div>
</template>

<script>
import icons from "../icons";

export default {
	data() {
		return {
			locator: icons["locator"],
			domain: icons["domain"],
			weather: icons["weather"],
			bodymassindex: icons["bodymassindex"],
		};
	},
};
</script>
<style>
.sidebar {
	position: absolute;
	top: 3em;
	right: 0;
	display: flex;
	flex-direction: column;	
}
@media(max-width: 695px){
	.sidebar {
		top: 5px;
	}
}

.sidebar button {
	width: 140px;
	height: 45px;
	font-size: 23px;
	cursor: pointer;
	border: none;
	outline: none;
	background: transparent;
	color: white;
	font-family: "Times New Roman", Times, serif;
	font-weight: 700;
	position: relative;
	transition: all 0.5s;
	z-index: 1;
	transition: all 0.5s ease 0.2s;
}

.sidebar button::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	width: 5px;
	height: 100%;
	background-color: white;
	z-index: -1;
	transition: all 0.5s 0.1s;
}

.sidebar button:hover::before {
	width: 100%;
}

.sidebar button:hover {
	transition-delay: 0.1s;
	color: black;
}

.sidebar button:hover svg {
	transition-delay: 0.3s;
	fill: rgba(0, 0, 0, 0.895);
}

.sidebar button:active:before {
	background: #b9b9b9;
}
.sidebar_bodymassindex{
	padding-left: 20px;
	text-overflow: ellipsis;
	overflow: hidden;	
	white-space: nowrap;
}
</style>
