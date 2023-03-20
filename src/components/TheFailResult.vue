<template>
	<div class="error-block">
		<p class="fail">Status: Fail</p>
		<p class="error">Несуществующий IP адрес</p>
	</div>
</template>

<script>
export default {
	props: ['info']
}
</script>

<style scoped>
.fail{
	position: relative;
}
.fail:after{
	content: '';
	position: absolute;
	margin-left: 5px;
	border-radius: 50%;
}
.fail:after{
	margin-left: 7px;
	width: 15px;
	height: 15px;
	background-color: #fe6057;
	border: 1px solid #f34a45;
}
.error{
	margin-top: 10px;
}
.error-block{
	margin-top: 20px;
}
</style>