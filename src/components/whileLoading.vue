<template>
        <div class="progress-container">
            <div class="progress" v-bind:style="{width: progress + '%'}"></div>
        </div>
</template>
<script>
export default {
    props: ['progress']
}
</script>
<style lang="stylus">
.progress-container {
  width: 100%
  background-color: #eaeaea
  margin: auto;
  position: absolute
  top: 50%
  transform: translateY(-50%)
}
.progress {
  background-color: #01afe4
  height: 24px
  transition: all ease-out 0.4s
}
</style>
