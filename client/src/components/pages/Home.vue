<template>
    <b-container
    ref="content"
    fluid
    style="padding-left: 0px; padding-right:0px;">
        <Nav />
        <section id="main">
            <Main/>
        </section>
        <section id="services">
            <Services />
        </section>
        <section id="discount">
            <Discount />
        </section>
        <section id="about">
            <About />
        </section>
    </b-container>
</template>

<script>
import Main from '@/components/main/Main.vue';
import Services from '@/components/services/Services.vue';
import Discount from '@/components/discount/Discount.vue';
import Nav from '@/components/nav/Nav.vue';
import About from '@/components/about/About.vue';

export default {
  components: {
    Main,
    Nav,
    Discount,
    Services,
    About,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
// PAGE STYLES
p{
    color: #4f5b62;
    letter-spacing: 0.075rem;
    font-weight: 500;
    margin-bottom: 0px;
}

.page-header{
    color: #000a12;
    letter-spacing: 0.075rem;
    font-weight: 800;
    text-align: center;
    font-size: 3rem;
}

.page-header-about{
    color: #4f5b62;
    font-size: 1.2rem;
    letter-spacing: 0.075rem;
    font-weight: 500;
    text-align: center;
}

.page-header::first-letter {
  color: #ED661A;
}

// CONTAINERS
.main-flex {
    display: flex;
    flex-flow: column;
    gap: 2rem;
    padding-top: 3rem;
}

.center-flex {
    display: flex;
    flex-flow: row;
    gap: 2rem;
    justify-content: start;
}

.center-column-flex{
    display: flex;
    flex-flow: column;
    gap: 2rem;
    white-space: nowrap;
}

.column-footer-text {
    color: var(--light);
}

// CARD
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
}

.vitan-card-content {
  display: flex;
  flex-flow:column
}

.vitan-service-card {
cursor: pointer;
padding: 1rem;
display: flex;
justify-content: space-between;
flex: 1 1 0;
word-break:keep-all;
word-wrap: normal;
min-height: 7rem;
}

.card-title{
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0;
}

.card-text{
  font-size: 1rem;
  margin-bottom: 0;
}

.rub {
  line-height: 9px;
  width: 0.4em;
  border-bottom: 1px solid #6c757d;
  display: inline-block;
}

.p-price {
font-size: 16px;
font-weight: 700;
color: #ED661A;
margin-bottom: 0px;
padding-left: 5rem;
}

.p-price::after{
content: " Р";
line-height: 5px;
width: 0.4em;
border-bottom: 1.5px solid #ED661A;
margin-left: 3px;
display: inline-block;
}

.card-hover{
-webkit-transition: .3s;
transition: 0.3s;
}

.card-shadow{
-webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.card-hover:hover, .card-hover:active {
  -webkit-box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  background-color: rgba(0,0,0, 0.05);
}

.card-link{
    color: #ED661A;
    text-transform: uppercase;
}

// BUTTONS
.vitan-default-button {
border: none;
color: var(--light);
border-radius: 0.2rem;
padding: .6rem;
margin: 0.2rem;
background-color: rgb(237, 102, 26);
border-color: #ED661A;
text-transform:uppercase;
font-size: 1.2rem;
letter-spacing: 0.075rem;
font-weight: 500;
box-shadow: 0px 0px 5px rgba(237,102,26, 1);
.b-icon{
    color: var(--light);
    font-size: 1.3rem;
}
}

.vitan-default-button:hover{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-default-button:focus:hover{
box-shadow: 0px 0px 10px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-default-button:not(:disabled):not(.disabled):active{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-default-button:focus{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-default-button:not(:disabled):not(.disabled):active:focus{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
}

.vitan-button {
border-radius: 60px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 15px;
padding-top: 15px;
background-color: rgb(237, 102, 26);
border-color: #ED661A;
text-transform:uppercase;
font-size: 1rem;
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
white-space: nowrap;
}

.vitan-button:hover{
box-shadow: 0px 0px 40px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus:hover{
box-shadow: 0px 0px 40px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active{
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus{
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active:focus{
box-shadow: 0px 0px 60px rgba(237,102,26, 1);
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
}

.vitan-button-outline {
border-radius: 60px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 15px;
padding-top: 15px;
background-color: transparent;
border-color: #ED661A;
text-transform:uppercase;
font-size: 1rem;
box-shadow: none;
white-space: nowrap;
}

.vitan-button-outline:hover{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:focus:hover{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:not(:disabled):not(.disabled):active{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:focus{
background-color: transparent;
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:not(:disabled):not(.disabled):active:focus{
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
box-shadow: none;
}

//MODALAS
.modal-dialog{
padding: 0px;
margin: 0px;
}

.modal-body{
padding: 0px;
margin: 0px;
}

.modal-dialog{
    margin: 0px;
    max-width: 100%;
  }

  .modal-header-content{
    display: flex;
    justify-content: space-between;
  }

  .modal-content{
    height: 100vh;
    border-radius: 0;
    border: none;
    background-color: rgba($color: #000a12, $alpha: 0.8);
    backdrop-filter: blur(1.5rem);
  }

  .modal-header{
    display: flex;
    background-color: rgba(0, 0, 0, 0.0);
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

.menu-toggle-button{
    font-size: 1.5rem;
    color: #ED661A;
    align-self: center;
  }

  .menu-toggle-button-x{
    font-size: 2rem;
    color: #ED661A;
  }

// OTHER ELEMENTS
.vitan-chips-outline {
    display: flex;
    border: 1px solid #ED661A;
    color: #ED661A;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background-color: transparent;
    text-transform: uppercase;
    margin: 0.2rem;
    font-size: 1rem;
  p {
    color: #ED661A;
    margin-bottom: 0;
    align-self: center;
    font-size: 1.2rem;
    letter-spacing: 0.075rem;
  }
}

// BREAKPOINTS MEDIA
@include media-breakpoint-down(sm){
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include media-breakpoint-down(xs){
    .main-flex{
    }
     .card-container {
        grid-template-columns: repeat(1, 1fr);
        justify-content: start;
    }
    .page-header{
        font-size: 2rem;
        text-align: left;
    }

    .page-header-about{
        font-size: 0.9rem;
        text-align: left;
    }

    .vitan-button{
        padding-left: 20px;
        padding-right: 20px;
    }
    .vitan-button-outline{
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
