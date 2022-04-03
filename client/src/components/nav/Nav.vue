<template>
<scrollactive
  :offset="100"
  :duration="800"
  bezier-easing-value=".5,0,.35,1"
  class="navbar navbar-expand-lg">
    <div class="container">
      <b-navbar-brand href="#main">VITAN</b-navbar-brand>
      <div class="nav-links">
        <a class="nav-link scrollactive-item" href="#discount">Акции
          <b-badge pill class="vitan-badge">2</b-badge>
        </a>
        <a class="nav-link scrollactive-item" href="#about">Контакты</a>
      </div>
      <div class="menu-toggle-button">
        <b-icon v-b-modal.menu-modal
        style="color: #ED661A"
        icon="gear-wide-connected"
        >
        </b-icon>
      </div>
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
  .navbar-brand{
    color: #ED661A !important;
    font-family: 'Montserrat';
    font-weight: 1000;
    font-size: 32px;
    flex: 1;
  }

  .menu-toggle-button{
    display: none;
  }

  .navbar-brand:hover{
    color: #ED661A;
  }

  .nav-link{
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 600;
    color: #000a12;
  }

  .nav-link:hover{
    color: #ED661A;
  }

  .nav-links{
    display: flex;
    margin: 0px;
    padding: 0px;
  }

  .vitan-badge{
    background-color: #ED661A;
    color: #fff;
   }

  .menu-content{
    a{
      color: var(--light);
    }
  }

 @include media-breakpoint-down(md){
   .navbar-brand{
     font-size: 24px;
  }

  .menu-toggle-button{
    display: block;
  }

  .nav-links{
    display: none;
  }
}

</style>
