<template>
    <b-container class="main-flex">
        <div class="header-flex text-light">
            <h5>
                <b-icon icon="telephone"></b-icon>
                +7 (342) 279-38-36
            </h5>
            <h5>
                <b-icon icon="clock"></b-icon>
                Ежедневно 9:00-21:00
            </h5>
            <h5>
                <b-icon icon="geo-alt"></b-icon>
                ул. Васильева 8А
            </h5>
        </div>
        <div class="center-flex">
            <div class="center-column-flex">
                <h1>VITAN</h1>
                <b-img
                    class="vitan-image-mobile"
                    :src="require('@/assets/main_logo.png')"
                    alt="Responsive image">
                </b-img>
                <div class="text-column-flex">
                    <h2><b-icon icon="nut-fill"></b-icon> ВСЕ ВИДЫ АВТОСЛЕСАРНЫХ РАБОТ</h2>
                    <h2><b-icon icon="nut-fill"></b-icon> АВТОДИАГНОСТИКА</h2>
                    <h2><b-icon icon="nut-fill"></b-icon> АВТОЭЛЕКТРИКА</h2>
                </div>
                <div class="row-flex">
                    <b-button
                        class="vitan-button">
                        Записаться
                        </b-button>
                        <b-button
                        class="vitan-button-outline"
                        @onClick="sendBackCallRequest('79519359487')">
                        Обратный звонок
                    </b-button>
                </div>
                <h6 class="column-footer-text">
                    Обслуживаем все марки автомобилей
                </h6>
            </div>
            <div class="center-column-flex img-flex">
                <b-img
                    class="vitan-image"
                    :src="require('@/assets/main_logo.png')"
                    fluid alt="Responsive image">
                </b-img>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
  methods:
    {
      sendBackCallRequest(text) {
        var url = "https://noisy-truth-ec30.amasalygin.workers.dev/?text=" + text
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
      },
    },
}
</script>

<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

h1 {
font-size: 10rem;
color: #ED661A;
}

h2 {
font-size: 1.75rem;
color: var(--light);
}

.main-flex {
    display: flex;
    flex-flow: column;
    gap: 7rem;
}

.header-flex{
    display: flex;
    flex-flow: row;
    white-space: nowrap;
    gap: 0.5rem;
    margin-top: 3rem;
    justify-content: space-evenly;
}

.center-flex {
    display: flex;
    flex-flow: row;
    gap: 2rem;
    justify-content: space-between;
}

.center-column-flex{
    display: flex;
    flex-flow: column;
    gap: 2rem;
    white-space: nowrap;
}

.row-flex {
    display: flex;
    flex-flow: row;
}

.column-footer-text {
    color: var(--light);
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

.vitan-text-highlight{
text-shadow: 0px 0px 10px rgba(237,102,26, 1);
color: rgb(237, 102, 26);
}

.vitan-scroll-btn{
color: rgb(237, 102, 26);
text-transform:uppercase;
font-size: 1.5rem;
text-shadow: 0px 0px 10px rgba(237,102,26, 1);
-webkit-transition: text-shadow 0.25s;
-moz-transition: text-shadow 0.25s;
-o-transition: text-shadow 0.25s;
transition: text-shadow 0.25s;
}

.vitan-scroll-btn:hover{
text-decoration: none;
text-shadow: 0px 0px 25px rgba(237,102,26, 1);
}

.b-icon {
    color: #ED661A;
}

.vitan-image-mobile {
    display: none;
}

@include media-breakpoint-down(xl){
  .vitan-service-card {
    max-width: 358px;
    min-width: 358px;
  }
}

@include media-breakpoint-down(lg){
  .vitan-service-card {
    max-width: 464px;
    min-width: 464px;
  }
}

@include media-breakpoint-down(md){
  .vitan-service-card {
    max-width: 344px;
    min-width: 344px;
  }
}

@include media-breakpoint-down(sm){
  .vitan-service-card {
    max-width: 540px;
    min-width: 540px;
  }
}

@include media-breakpoint-down(xs){
    .vitan-image {
        display: None;
    }

    .vitan-image-mobile {
        display: block;
        flex-grow: 0;
        align-self: center;
        width: 70%;
    }

    .main-flex {
        gap: 0rem;
        justify-content: space-between;
    }

    .header-flex{
        display: flex;
        flex-flow: column;
        white-space: nowrap;
        gap: 0rem;
        margin-top: 0rem;
        flex-grow: 2;
    }
    .center-flex {
        flex-flow: column;
        flex-grow: 3;
    }

    .center-column-flex {
        white-space: normal;
        gap: 0.5rem;
    }

    .text-column-flex {
        display: flex;
        flex-flow: column;
        gap: 0.5rem;
    }

    .column-footer-text {
        text-align: center;
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .row-flex {
        flex-flow: column;
        gap: 1rem;
    }

    .img-flex {
        display: none;
    }

    h1 {
        font-size: 5.5rem;
        text-align: center;
        display: none;
    }

    h2 {
        font-size: 1rem;
        color: var(--light);
    }

    h5 {
        text-align: center;
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .vitan-button {
        padding-bottom: 10px;
        padding-top: 10px;
        text-transform:uppercase;
        font-size: 0.9rem;
    }

    .vitan-button-outline {
        padding-bottom: 10px;
        padding-top: 10px;
        text-transform:uppercase;
        font-size: 0.9rem;
    }
}

@media (max-height: 568px) {
    .vitan-image-mobile {
        display: none;
    }

    .main-flex {
        justify-content: space-between;
        gap: 2rem;
    }

    .header-flex{
        flex-grow: 2;
    }

    .center-flex {
        flex-grow: 3;
    }

    .center-column-flex {
        gap: 2rem;
    }
}

@media (min-height: 750px) {
    .vitan-image-mobile {
        width: 90%;
    }
}

</style>
