<template>
<scrollactive class="navbar navbar-expand-lg sticky-top">
    <b-navbar-brand href="#main">VITAN</b-navbar-brand>
    <b-icon v-b-modal.menu-modal
      class="menu-toggle-button"
      style="color: #ED661A"
      icon="gear-wide-connected"
    >
    </b-icon>
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
        <a @click="closeMenu()" href="#about">О Сервисе</a>
        <a @click="closeMenu()" href="#">Контакты</a>
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
        <a class="nav-link scrollactive-item" href="#about">О Сервисе</a>
      </li>
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#">Контакты</a>
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

<style lang="scss">
  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
  .menu-toggle-button{
    font-size: 1.5rem;
    color: #ED661A;
  }

  .menu-toggle-button-x{
    font-size: 2rem;
    color: #ED661A;
  }

  .navbar-brand{
    color: #ED661A;
    font-weight: 1000;
  }

  .navbar-brand:hover{
    color: #ED661A;
  }

  .modal-dialog{
    margin: 0px;
  }

  .modal-header-content{
    display: flex;
    justify-content: space-between;
  }

  .modal-content{
    height: 100vh;
    border-radius: 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
  }

  .modal-header{
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    button{
      color: #ED661A;
    }
  }

  .menu-content{
    display: flex;
    flex-flow: column;
    justify-content: end;
    gap: 1.5rem;
    padding-right: 1rem;
    border: none;
    border-radius: 0;
    a{
      font-size: 1.8rem;
      font-weight: 600;
      text-align: right;
      color: var(--light);
    }
    a:hover{
      text-decoration: none;
    }
  }

  .vitan-badge{
    background-color: #ED661A;
    color: #fff;
   }

  .navbar {
    background: #000;
  }

  .navbar-nav li a {
   color: var(--light) !important;
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
}
</style>
