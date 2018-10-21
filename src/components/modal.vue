<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-on-clickaway="closeModal" ref="modal">
          <div class="logo-stamp"></div>
          <div class="item-container">
            <div class="item-header-container">
              <div class="item-title">{{current.title}}</div>
              <div class="item-subtitle">{{current.subtitle}}</div>
            </div>
            <image-carousel :images="current.images" />
            <div class="item-info-container">
              <div class="item-extras-container">
                  <div class="extras-line" v-for="(line, index) of current.extras" :key="index">
                    <span class="extras-item" v-for="(item, index) of line" :key="index">{{item}}</span>
                  </div>
              </div>
              <VuePerfectScrollbar class="item-description" :settings="scrollbarSettings">{{current.description}}</VuePerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import imageCarousel from './imageCarousel.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    name: 'modal',
    props: ['currentModal', 'retrozbiory'],
    mixins: [clickaway],
    data () {
      return {
        scrollbarSettings: {
          suppressScrollX: true
        }
      }
    },
    components: {
      imageCarousel,
      VuePerfectScrollbar
    },
    computed: {
      current () {
        return this.retrozbiory[this.currentModal]
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
}
</script>

<style lang="stylus">
/* @font-face {
    font-family: 'Bahnschrift'
    src:url('https://github.com/SockoKamil/zamiana/raw/master/docs/fonts/bahnschrift.ttf') format('truetype')
} */

// @media screen and (max-width: 900px) {
//   .modal-container {
//     margin-left: 20px !important
//     margin-right: 20px !important
//   }
// }

@media only screen and (max-width : 850px){
  .modal-container {
    height: calc(100vh - 89px)!important
    width: 88vw!important
    overflow-y: auto
  }

  .item-container {
    justify-content: center!important
    width: 100%!important
    height: 100%!important

    >div {
      width: 90%!important
    }
  }

  .logo-stamp {
    top: 10px!important
    right: 10px!important
  }

  .item-header-container {
    margin-top: 25px
  }
  .item-description {
    margin-bottom: 25px
  }

  .item-image-container {
    // height: 300px !important
  }

  .item-info-container {
    padding-left: 0 !important
    margin-top: 20px
    height: auto !important
    // display: none !important
  }
  .item-description {
    width: 100%!important
  }
}

.modal-mask {
  position: fixed
  z-index: 100000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, .35)
  display: table
  transition: opacity .3s ease

  .modal-wrapper {
    display: table-cell
    vertical-align: middle

    .modal-container {
      max-width: 970px
      margin-right: 20px
      height: 645px
      margin: 0px auto
      background-color: #808080
      color: #fefefe
      // box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease
      position: relative
      font-family: Bahnschrift
      display: flex
      justify-content: center
      align-items: center

      .logo-stamp {
        pointer-events: none
        width: 128px
        height: 128px
        position: absolute
        background-image: url('../assets/images/retrozbiory-logo.png')
        background-size: contain
        background-position: center
        background-repeat: no-repeat
        top: 24px
        right: 24px
        opacity: 0.2
       }

      .item-container {
        max-width: 840px
        // height: 400px
        // margin: 0 auto
        display: flex
        flex-wrap: wrap
        flex-direction: row
        justify-content: space-between

        > div {
          flex-basis: auto
        }

        .item-header-container { 
          // width: 100%
          line-height: 50px
          width: 100%

          .item-title { 
            font-size: 39px
            font-weight: bold
            font-stretch: condensed
            text-transform: uppercase
          }

          .item-subtitle {
            font-size: 39px
            /* font-weight: bold; */
            font-stretch: condensed
          }
        }
        .item-image-container {
          width: 400px
          // height: 400px
          // background-image: url('../assets/images/img-container-border.png')
          display:flex
          justify-content:center
          align-items:center
          // float: left
          position: relative

          & img {
              user-select: none
              --webkit-user-drag :none
              user-drag: none
              // pointer-events: none
          }

          .border-corner {
            content: ''
            width: 32%
            height: 32%
            // background-color: #000
            position: absolute
            pointer-events: none
            box-sizing: border-box
          }

          .top-left-corner {
            top: 0
            left: 0
            border-top: 7px solid #fefefe
            border-left: 7px solid #fefefe
          }
          .top-right-corner {
            top: 0
            right: 0
            border-top: 7px solid #fefefe
            border-right: 7px solid #fefefe
          }
          .bottom-left-corner {
            bottom: 0
            left: 0
            border-bottom: 7px solid #fefefe
            border-left: 7px solid #fefefe
          }
          .bottom-right-corner {
            bottom: 0
            right: 0
            border-bottom: 7px solid #fefefe
            border-right: 7px solid #fefefe
          }

          // &:before {
          //   top: 0
          //   left: 0
          //   border-top: 7px solid #fefefe
          //   border-left: 
          // }

          .leftArrow {
              background: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIgNDkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTIgNDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5OC42MDgsMjQ2LjEwNEwzODIuNjY0LDYyLjA0YzUuMDY4LTUuMDU2LDcuODU2LTExLjgxNiw3Ljg1Ni0xOS4wMjRjMC03LjIxMi0yLjc4OC0xMy45NjgtNy44NTYtMTkuMDMybC0xNi4xMjgtMTYuMTIgICAgQzM2MS40NzYsMi43OTIsMzU0LjcxMiwwLDM0Ny41MDQsMHMtMTMuOTY0LDIuNzkyLTE5LjAyOCw3Ljg2NEwxMDkuMzI4LDIyNy4wMDhjLTUuMDg0LDUuMDgtNy44NjgsMTEuODY4LTcuODQ4LDE5LjA4NCAgICBjLTAuMDIsNy4yNDgsMi43NiwxNC4wMjgsNy44NDgsMTkuMTEybDIxOC45NDQsMjE4LjkzMmM1LjA2NCw1LjA3MiwxMS44Miw3Ljg2NCwxOS4wMzIsNy44NjRjNy4yMDgsMCwxMy45NjQtMi43OTIsMTkuMDMyLTcuODY0ICAgIGwxNi4xMjQtMTYuMTJjMTAuNDkyLTEwLjQ5MiwxMC40OTItMjcuNTcyLDAtMzguMDZMMTk4LjYwOCwyNDYuMTA0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=') no-repeat left top
              width: 32px
              height: 32px
              cursor: pointer
              position: absolute
              left: -6px
          }
          .rightArrow {
              background: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODIuNjc4LDIyNi44MDRMMTYzLjczLDcuODZDMTU4LjY2NiwyLjc5MiwxNTEuOTA2LDAsMTQ0LjY5OCwwcy0xMy45NjgsMi43OTItMTkuMDMyLDcuODZsLTE2LjEyNCwxNi4xMiAgICBjLTEwLjQ5MiwxMC41MDQtMTAuNDkyLDI3LjU3NiwwLDM4LjA2NEwyOTMuMzk4LDI0NS45bC0xODQuMDYsMTg0LjA2Yy01LjA2NCw1LjA2OC03Ljg2LDExLjgyNC03Ljg2LDE5LjAyOCAgICBjMCw3LjIxMiwyLjc5NiwxMy45NjgsNy44NiwxOS4wNGwxNi4xMjQsMTYuMTE2YzUuMDY4LDUuMDY4LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2OC0yLjc5MiwxOS4wMzItNy44NkwzODIuNjc4LDI2NSAgICBjNS4wNzYtNS4wODQsNy44NjQtMTEuODcyLDcuODQ4LTE5LjA4OEMzOTAuNTQyLDIzOC42NjgsMzg3Ljc1NCwyMzEuODg0LDM4Mi42NzgsMjI2LjgwNHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K') no-repeat right top
              width: 32px
              height: 32px
              cursor: pointer
              position: absolute
              right: -6px
          }
          .image-carousel-nav {
              transition: ease 0.3s
          }

          .image-carousel-nav:active {
              transform: scale(1.1)
          }
        }

        .item-info-container {
          border-top: 7px solid #FFFFFF
          padding-left: 40px
          display: flex
          // width: 400px
          flex-direction: column
          height: 400px

          .item-extras-container {
            font-size: 17px
            // float: right
            // width: 440px
            // margin-left: 40px

            .extras-line {
              border-bottom: 7px solid #FFFFFF

              .extras-item {
                padding: 10px
                display: inline-block
              }
              .extras-item:not(:last-child) {
                border-right: 7px solid #FFFFFF
              }
            }
          }
          .item-description {
            text-align: justify
            width: 400px
            margin-top: 20px
            // box-sizing: border-box
            font-stretch: condensed
            font-size: 17px
            white-space: pre-line
            
          }
        }
      }
    }
  }
}


.modal-enter {
  opacity: 0
}
.modal-leave-active {
  opacity: 0
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
}
</style>
