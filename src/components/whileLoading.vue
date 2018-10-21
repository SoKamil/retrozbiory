<template>
  <div id="whileLoading">
    <transition name="fade">
        <div class="progress-container" v-if="progress != 0">
            <div class="progress" v-bind:style="{width: progress + '%'}"></div>
        </div>
    </transition>
  </div>
  </div>
</template>
<script>
export default {
    props: ['progress'],
}
</script>
<style lang="stylus">
#whileLoading {
    display:flex
    justify-content:center
    align-items:center
    width: 100%
    height: 500px
}
.progress-container {
  width: 100%
  background-color: #eaeaea
}
.progress {
  background-color: #01afe4
  height: 24px
  transition: all ease-out 0.4s
}
</style>
