<template>
<scrollactive
  :offset="100"
  :duration="800"
  bezier-easing-value=".5,0,.35,1"
 class="navbar navbar-expand-lg sticky-top">
    <div class=mobile-nav>
      <b-navbar-brand href="#main">VITAN</b-navbar-brand>
      <b-icon v-b-modal.menu-modal
        class="menu-toggle-button"
        style="color: #ED661A"
        icon="gear-wide-connected"
      >
      </b-icon>
    </div>
    <b-modal id="menu-modal" class="menu-modal" hide-footer>
      <template #modal-header>
        <b-navbar-brand>VITAN</b-navbar-brand>
        <b-icon
          class="menu-toggle-button-x"
          icon="x"
          @click="closeMenu()"
        >
        </b-icon>
      </template>
      <div class="menu-content">
        <a @click="closeMenu()" href="#services">Услуги</a>
        <a @click="closeMenu()" href="#discount">Акции
          <b-badge pill class="vitan-badge">2</b-badge>
        </a>
        <a @click="closeMenu()" href="#about">Контакты</a>
      </div>
    </b-modal>
    <b-collapse id="nav-collapse" class="desktop-nav" is-nav>
      <b-navbar-nav class="mx-auto">
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#services">Услуги</a>
      </li>
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#discount">Акции
          <b-badge pill class="vitan-badge">2</b-badge>
        </a>
      </li>
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#about">Контакты</a>
      </li>
      </b-navbar-nav>
    </b-collapse>
</scrollactive>
</template>

<script>
export default {
  methods:
    {
      closeMenu() {
        this.$bvModal.hide('menu-modal');
      },
    },
};
</script>

<style scoped lang="scss">
  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
  .mobile-nav{
    display: none;
  }

  .navbar-brand{
    color: #ED661A;
    font-weight: 1000;
  }

  .navbar-brand:hover{
    color: #ED661A;
  }

  .vitan-badge{
    background-color: #ED661A;
    color: #fff;
   }

  .navbar {
    background: #000a12;
  }

  .menu-content{
    a{
      color: var(--light);
    }
  }

  .navbar-nav li a {
   color: var(--light) !important;
   letter-spacing: 0.075rem;
   font-weight: 700;
   position: relative;
   text-decoration: none;
   &.is-active{
    color: #ED661A !important;
    &:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
   }
   &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ED661A;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all .2s ease-in-out 0s;
      transition: all .2s ease-in-out 0s;
    }
 }

 @include media-breakpoint-down(md){
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
