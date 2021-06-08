<template>
<scrollactive class="navbar navbar-expand-lg sticky-top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#services">Услуги</a>
      </li>
      <li class="nav-item ml-5 mr-5">
        <a class="nav-link scrollactive-item" href="#discount">Акции <b-badge pill class="vitan-badge">3</b-badge></a>
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

<style lang="scss">

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  // General style overrides and custom classes
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

   .vitan-badge{
   background-color: #ED661A;
   color: #fff;
   }

 }
</style>