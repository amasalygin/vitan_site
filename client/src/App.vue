<template>
  <div id="app" ontouchstart="">
    <div ref="mainContent">
      <Nav v-on:show-modal="showModal" :isExpanded="isExpandNav"/>
      <router-view class="router-view"></router-view>
    </div>
    <div>
      <div ref="modalWrapper" class="md-modal md-effect-12">
        <transition name="fade">
          <component v-on:hide-modal="hideModal" v-bind:is="modal" />
        </transition>
      </div>
      <div class="md-overlay">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Nav from '@/components/nav/Nav.vue';
import Brand from '@/components/shared/Brand.vue';
import MenuModal from '@/components/modals/MenuModal.vue'

export default {
  components: {
    Nav,
    Brand,
    MenuModal
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:
  {
    hideModal() {
      this.modal = '';
      this.$refs.modalWrapper.setAttribute('class', 'md-modal md-effect-12');
      this.$refs.mainContent.setAttribute('class', '');
    },
    showModal(name) {
      this.hideModal();
      if (name === 'mobile-menu') {
        this.modal = MenuModal;
      }
      
      if (this.modal) {
        this.$refs.modalWrapper.setAttribute('class', 'md-modal md-effect-12 md-show');
        this.$refs.mainContent.setAttribute('class', 'fullscreen-blur');
      }
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 25) {
        this.isExpandNav = false;
      } else {
        this.isExpandNav = true;
      }
    },
  },
  data: () => {
    const data = {
      isExpandNav: true,
      modal: '',
    };
    return data;
  },
  name: 'App',
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
.fade-enter{
  -webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	-ms-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0;
}

.fade-enter-to{
  -webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

.fade-leave{
  -webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

.fade-leave-to{
  -webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	-ms-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s ease-out;
}
.fade-leave-active {
  transition: all 0.25s ease-out;
}

.router-view{
  padding-top: 180px; 
}

// BLUR
.blur {
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -ms-filter: blur(6px);
    -o-filter: blur(6px);
    filter: url("data:image/svg+xml;utf8,<svg height='0' xmlns='http://www.w3.org/2000/svg'><filter id='svgBlur' x='-5%' y='-5%' width='110%' height='110%'><feGaussianBlur in='SourceGraphic' stdDeviation='5'/></filter></svg>#svgBlur");
    filter: blur(6px);
}

.fullscreen-blur {
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
    filter: url("data:image/svg+xml;utf8,<svg height='0' xmlns='http://www.w3.org/2000/svg'><filter id='svgBlur' x='-5%' y='-5%' width='110%' height='110%'><feGaussianBlur in='SourceGraphic' stdDeviation='5'/></filter></svg>#svgBlur");
    filter: blur(10px);
}

// COLOR OVERLAYS
.white-on-black{
  background-color: rgba($color: #fff, $alpha: 0.2);
}

.black-on-white{
  background-color: rgba($color: #000A12, $alpha: 0.8);
}

.white-on-black-hover{
  background-color: rgba($color: #000A12, $alpha: 0.8);
}

// CONTAINERS
.container{
  display: flex;
  flex-flow: column;
  gap: 43px;
}

.group-row{
  display: flex;
  flex-flow: row;
  gap: 0px;
  padding: 0px;
  border-radius: 17px;

  .group-row-item{
    display: flex;
    flex-flow: row;
    gap: 2px;
    padding: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    align-items: center;
    justify-content: center;
    flex: 1;

    p, a{
      color: #fff !important;
      font-weight: 600;
      font-family: 'Montserrat';
      font-size: 8px;
      margin-bottom: 0;

      white-space: -moz-nowrap; /* Firefox */
      white-space: -o-nowrap; /* Opera */
      white-space: nowrap; /* Chrome */
      word-wrap: none; /* IE */
    }
  }

  .divider{
    width: 1px;
    height: 100;
    background-color: rgba($color: #000A12, $alpha: 0.25);
  }

  .group-row-item:first-child{
    border-top-left-radius: inherit !important;
    border-bottom-left-radius: inherit !important;
  }

  .group-row-item:last-child{
    border-bottom-right-radius: inherit !important;
    border-top-right-radius: inherit !important;
  }
}

// MODAL
.md-modal {
	position: fixed;
	top: 0px;
	left: 0;
  right: 0;
	width: 100%;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
}

.md-show {
	visibility: visible;
}

.md-content{
  display: flex;
  flex-flow: column;
  gap: 10px;
  padding: 10px;
}

.md-header-wrapper{
  display: flex;
  flex-flow: row;
  gap: 10px;

  align-items: center;

  p{
    font-weight: 600 !important;
    font-family: 'Montserrat' !important;
    font-size: 11px !important;
    color: #fff;
    margin-bottom: 0;
  }
}

.md-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgba($color: #000A12, $alpha: 0.8);
	-webkit-transition: all 0.25s;
	-moz-transition: all 0.25s;
	transition: all 0.25s;
  transition-delay: 0.15s;
}

.md-show ~ .md-overlay {
  transition-delay: 0.0s;
	opacity: 1;
	visibility: visible;
}

.md-effect-12 .md-content h3,
.md-effect-12 .md-content {
	background: transparent;
}

.md-show.md-effect-12 .md-content {
}

// INPUT
.input {
  outline: none;
  border-radius: 17px;
  border: 1px solid transparent;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  font-weight: 500 !important;
  font-family: 'Montserrat' !important;
  font-size: 16px !important;
  letter-spacing: 0.055rem;

  width: 250px;

  margin: 0;
  background: rgba($color: #000A12, $alpha: 0.5);

  padding: 17px;
  padding-left: 43px;

  color: var(--light);
  text-align: left;

  transition-property: padding;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.input::placeholder{
  opacity: 0.5;
  font-weight: 400 !important;
  font-size: 16px !important;
  color: #fff;
}

.input-wrapper{
  position: relative;
}

.input-wrapper::after{
  content: " ";
  z-index: 2;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  opacity: 0.5;
  transition-property: opacity, left;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.input-wrapper.focusIn{
  .input{
    padding-left:1rem;
  }
}

.input-wrapper.focusIn::after{
  opacity: 0 !important;
  left: -15px !important;
}

.input-invalid{
    background: rgba($color: rgb(255, 69, 58), $alpha: 0.2) !important;
    border: 1px solid rgba(255, 69, 58, 1) !important;
}

.input-valid{
    background: rgba($color: rgb(48, 209, 88), $alpha: 0.15) !important;
    border: 1px solid rgba(48, 209, 88, 1) !important;
}

.input:focus{
    background: rgba($color: #ffffff, $alpha: 0.2);
}

.input.black{
  border: 1px solid transparent;
  background: transparent;
  color: #000A12;
  background: transparent;
}

.input.black::placeholder {
  color: rgba($color: #000A12, $alpha: 0.5);
}

// BUTTONS
.rounded-button-group-column{
  display: flex;
  flex-flow: column;
  gap: 0;
  clip-path: inset(0 0 0 0);
  border-radius: 24px;

  button{
    border: none !important;
    background-color: transparent !important;

    padding: 18px !important;
    
    text-transform:uppercase !important;
    font-family: 'Montserrat' !important;
    font-weight: 600 !important;
    font-size: 11px !important;
    text-align: center !important;
    color: var(--light) !important;

    box-shadow: none !important;
    white-space: nowrap !important;
  }

  button:active{
    background-color: rgba($color: #000A12, $alpha: 0.5) !important;
  }

  button:first-child{
    border-top-left-radius: inherit !important;
    border-top-right-radius: inherit !important;
  }

  button:last-child{
    border-bottom-left-radius: inherit !important;
    border-bottom-right-radius: inherit !important;
  }

  .divider{
    width: 100%;
    height: 1px;
    background-color: rgba($color: #000A12, $alpha: 0.25);
  }
}

.rounded-button-group-row{
  display: flex;
  flex-flow: row;
  gap: 0;
  clip-path: inset(0 0 0 0);
  border-radius: 24px;

  button{
    border: none !important;
    background-color: transparent !important;

    padding: 16px !important;
    
    text-transform:uppercase !important;
    font-family: 'Montserrat' !important;
    font-weight: 600 !important;
    font-size: 11px !important;
    text-align: center !important;
    color: var(--light) !important;

    box-shadow: none !important;
    white-space: nowrap !important;
  }

  button:active{
    background-color: rgba($color: #000A12, $alpha: 0.5) !important;
  }

  button:first-child{
    border-top-left-radius: inherit !important;
    border-bottom-left-radius: inherit !important;
  }

  button:last-child{
    border-bottom-right-radius: inherit !important;
    border-top-right-radius: inherit !important;
  }

  .divider{
    width: 100%;
    height: 1px;
    background-color: rgba($color: #000A12, $alpha: 0.25);
  }
}

.vitan-button {
  border-radius: 1rem !important;
  padding: 1.2rem !important;
  padding-left: 3rem !important;
  padding-right: 3rem !important;
  background-color: #ED661A !important;
  border-color: #ED661A !important;
  text-transform:uppercase !important;
  font-family: 'Montserrat' !important;
  font-weight: 600 !important;
  font-size: 13px !important;
  text-align: center !important;
  color: var(--light) !important;
  box-shadow: none !important;
  white-space: nowrap !important;
}

.vitan-button:active{
  opacity: 0.5;
}

select,
  textarea,
  input {
    font-size: 16px !important;
  }

@include media-breakpoint-down(md){
  // CONTAINERS
  .container{
    gap: 24px;
  }

  .router-view{
    padding-top: 64px;
  }

  .vitan-button {
    border-radius: 16px !important;
    padding: 16px !important;
    padding-left: 3rem !important;
    padding-right: 3rem !important;
    background-color: #ED661A !important;
    border-color: #ED661A !important;
    text-transform:uppercase !important;
    font-family: 'Montserrat' !important;
    font-weight: 600 !important;
    font-size: 11px !important;
    text-align: center !important;
    color: var(--light) !important;
    box-shadow: none !important;
    white-space: nowrap !important;
  }
}

@include media-breakpoint-down(sm){
  .input-wrapper{
    width: 100%;
  }
  .input{
    width: 100%;
  }
}
</style>
