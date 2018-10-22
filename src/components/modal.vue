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
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAAFwCAYAAAA4zTvPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJ22lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTAtMjFUMjA6MzY6NDQrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEwLTIxVDIwOjU5OjMzKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTEwLTIxVDIwOjU5OjMzKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBiNjUxNjdiLWYwMTctZTI0ZC1hMDlkLWUwNzIyNGI1MGZjNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJiZTg1Nzc0LTMzNGQtN2E0Mi05NGI4LTU0YjcxODUxMWI4MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmIzMzM1YTk1LTY2ZjUtZDY0Yy04MTRiLTU5ODExYzQyNTBiNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjMzMzVhOTUtNjZmNS1kNjRjLTgxNGItNTk4MTFjNDI1MGI1IiBzdEV2dDp3aGVuPSIyMDE4LTEwLTIxVDIwOjM2OjQ0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5NGVmZDI3LTg0OWQtNzU0Ni1hZDg4LTlmYjZkYjk3NGYwZCIgc3RFdnQ6d2hlbj0iMjAxOC0xMC0yMVQyMDo1OToyNCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQxYTdmMjUtMTc2OS1jYjRiLWFlNTEtYjgwY2FlODk4N2RkIiBzdEV2dDp3aGVuPSIyMDE4LTEwLTIxVDIwOjU5OjMzKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjY1MTY3Yi1mMDE3LWUyNGQtYTA5ZC1lMDcyMjRiNTBmYzciIHN0RXZ0OndoZW49IjIwMTgtMTAtMjFUMjA6NTk6MzMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0MWE3ZjI1LTE3NjktY2I0Yi1hZTUxLWI4MGNhZTg5ODdkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiMzMzNWE5NS02NmY1LWQ2NGMtODE0Yi01OTgxMWM0MjUwYjUiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMzMzNWE5NS02NmY1LWQ2NGMtODE0Yi01OTgxMWM0MjUwYjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pQhpKAAA7DUlEQVR42u1d/0ed7x/eP3XkSHLEJEmSyCTJJCPJJJMxk5lMIpmZmczIzCSTyEwmkzGTmcxkJMlkJpLk+vzwvM5n5332PPd9P9+f576vF5ePz3udc57n/vK67tfX+xqAawRBFBoVBTg+BJEy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')
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
              left: -19px
          }
          .rightArrow {
              background: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODIuNjc4LDIyNi44MDRMMTYzLjczLDcuODZDMTU4LjY2NiwyLjc5MiwxNTEuOTA2LDAsMTQ0LjY5OCwwcy0xMy45NjgsMi43OTItMTkuMDMyLDcuODZsLTE2LjEyNCwxNi4xMiAgICBjLTEwLjQ5MiwxMC41MDQtMTAuNDkyLDI3LjU3NiwwLDM4LjA2NEwyOTMuMzk4LDI0NS45bC0xODQuMDYsMTg0LjA2Yy01LjA2NCw1LjA2OC03Ljg2LDExLjgyNC03Ljg2LDE5LjAyOCAgICBjMCw3LjIxMiwyLjc5NiwxMy45NjgsNy44NiwxOS4wNGwxNi4xMjQsMTYuMTE2YzUuMDY4LDUuMDY4LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2OC0yLjc5MiwxOS4wMzItNy44NkwzODIuNjc4LDI2NSAgICBjNS4wNzYtNS4wODQsNy44NjQtMTEuODcyLDcuODQ4LTE5LjA4OEMzOTAuNTQyLDIzOC42NjgsMzg3Ljc1NCwyMzEuODg0LDM4Mi42NzgsMjI2LjgwNHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K') no-repeat right top
              width: 32px
              height: 32px
              cursor: pointer
              position: absolute
              right: -19px
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
