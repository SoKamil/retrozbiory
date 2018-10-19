<template>
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div v-on-clickaway="closeModal" class="modal-container" ref="modal">
          <div class="top-item-container">
            <div class="item-title">{{current.title}}</div>
            <div class="item-subtitle">{{current.subtitle}}</div>
          </div>
          <div class="item-container">
            <image-carousel :images="current.images" />
            <div class="item-extras-container">
              <div class="item-extras">
                <div class="extras-line" v-for="(line, index) of current.extras" :key="index">
                  <span class="extras-item" v-for="(item, index) of line" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="item-description">{{current.description}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import imageCarousel from './imageCarousel.vue'

export default {
    name: 'modal',
    props: ['currentModal', 'retrozbiory'],
    mixins: [clickaway],
    components: {
      imageCarousel
    },
    computed: {
      current () {
        return this.retrozbiory[this.currentModal]
      }
    },
    // watch: {
    //   currentModal() {
    //     this.current = this.retrozbiory[this.currentModal]
    //   }
    // },
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
}
</script>

<style>
.item-extras {
  margin-left: 40px;
}

.extras-line {
  border-bottom: 7px solid #FFFFFF;
}

.extras-item {
  padding: 10px;
  display: inline-block;
}

.extras-item:not(:last-child) {
  border-right: 7px solid #FFFFFF;
}

@font-face {
    font-family: 'Bahnschrift';
    src:url('https://github.com/SockoKamil/zamiana/raw/master/docs/fonts/bahnschrift.ttf') format('truetype');
}
.item-extras-container {
  border-top: 7px solid #FFFFFF;
  font-size: 17px;
}

.modal-container {
  width: 970px;
  height: 645px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #808080;
  color: #fefefe;
  /* border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33); */
  transition: all .3s ease;
  font-family: Bahnschrift;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow: column;
}

.item-title {
  font-size: 39px;
  font-weight: bold;
  font-stretch: condensed;
  text-transform: uppercase;
}

.item-subtitle{
  font-size: 39px;
  /* font-weight: bold; */
  font-stretch: condensed;
}

.top-item-container {
  width: 840px;
  line-height: 50px;
}

.item-container {
  width:840px;
  height: 400px;
  margin: 0 auto;
}


.item-extras-container {
  float: right;
  width: 440px;
}

.item-description {
  text-align: justify;
  float: right;
  width: 400px;
  box-sizing: border-box;
  font-stretch: condensed;
  font-size: 17px;
  white-space: pre-line;
  margin-top: 20px;
}

.modal-mask {
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
