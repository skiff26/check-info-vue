<template>
	<div class="w-loader">
    <div class="snow">
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:15"></span>
        <span style="--i:17"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:10"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:10"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:10"></span>
    </div>
</div>
</template>

<style scoped>
.w-loader {
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  width: 110px;
  height: 30px;
  background: #fff;
  border-radius: 100px;
}

.w-loader::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 40px 0 0 20px #fff;
          box-shadow: 40px 0 0 20px #fff;
}

.snow {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
}

.snow span {
  position: relative;
  width: 3px;
  height: 3px;
  background: #fff;
  margin: 0 2px;
  border-radius: 50%;
  -webkit-animation: snowing 5s linear infinite;
          animation: snowing 5s linear infinite;
  -webkit-animation-duration: calc(15s / var(--i));
          animation-duration: calc(15s / var(--i));
  -webkit-transform-origin: bottom;
      -ms-transform-origin: bottom;
          transform-origin: bottom;
}

@-webkit-keyframes snowing {
  0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }

  70% {
    -webkit-transform: translateY(100px) scale(1);
            transform: translateY(100px) scale(1);
  }

  100% {
    -webkit-transform: translateY(100px) scale(0);
            transform: translateY(100px) scale(0);
  }
}

@keyframes snowing {
  0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }

  70% {
    -webkit-transform: translateY(100px) scale(1);
            transform: translateY(100px) scale(1);
  }

  100% {
    -webkit-transform: translateY(100px) scale(0);
            transform: translateY(100px) scale(0);
  }
}
</style>