<template>
<div>
  <b-container>
      <Main/>
      <div class="main-section-container">
        <SectionHeader
          :name="'Услуги'"
          :description="
          'Выполняем качественный ремонт автомобилей в Перми с гарантией и по справедливым ценам'
          "
          :isShowUnderLine="true"
          :routeLabel="'Посмотреть все'"
          :routeName="'services'"
          />
        <div class="services-container-flex">
          <div class="card-container">
            <template v-for="(serviceItem, i) in servicesList">
              <IconCard
                :key="i"
                :data="serviceItem"
                :index="i"
                :routeName="'category'"
                :routeParams="{ tag: serviceItem.tag}">
              </IconCard>
            </template>
          </div>
        </div>
      </div>
      <div class="main-section-container">
        <SectionHeader
          :name="'Акции'"
          :description="
          'Период и подробности проведения акций Вы можете уточнить по телефону '+
          'или написав нам в удобном для Вас мессенджере'
          "
          :isShowUnderLine="true"
          :routeLabel="'Посмотреть все'"
          :routeName="'services'"
          />
        <div class="discount-container">
          <template v-for="(discountItem, i) in discountList">
            <PromoCard
              :key="i"
              :text="discountItem.discount_value"
              :header="discountItem.name"
              :bg="discountItem.bg"
              :img="discountItem.img">
            </PromoCard>
          </template>
        </div>
      </div>
  </b-container>
  <div class="dark-bg-fluid">
    <b-container>
      <div class="main-section-container" style="gap: 4rem">
        <SectionHeader
          :name="'Наши приемущества'"
          :invert="true"
          :description="'Это ваши : '"
          />
        <div class="advantage-wrapper">
          <template v-for="(feature, i) in features">
            <AdvantageItem
              :key="i"
              :text="feature.text"
              :header="feature.name"
              :bg="feature.bg"
              :img="feature.img">
            </AdvantageItem>
          </template>
        </div>
        <BackcallCard :name="'Остались вопросы?'"/>
      </div>
    </b-container>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Main from '@/components/main/Main.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import IconCard from '@/components/shared/IconCard.vue';
import PromoCard from '@/components/shared/PromoCard.vue';
import AdvantageItem from '@/components/shared/AdvantageItem.vue';
import BackcallCard from '@/components/shared/BackcallCard.vue';
import Footer from '@/components/footer/Footer.vue';
import ServicesJson from '../../static/services.json';
import DiscountsJson from '../../static/discounts.json';

export default {
  components: {
    Main,
    IconCard,
    SectionHeader,
    PromoCard,
    AdvantageItem,
    BackcallCard,
    Footer,
  },
  data: () => {
    const data = {
      prevOffset: 0,
      servicesList: ServicesJson,
      discountList: DiscountsJson,
      features: [
        {
          name: 'Время',
          text: 'Оперативная помощь в решении ваших вопросов',
          bg: 'black',
          img: 'time.svg',
        },
        {
          name: 'Удобство',
          text: 'Вам не нужно искать их по всему городу. Мы сами подберем и привезем всё необходимое',
          bg: 'black',
          img: 'comfort.svg',
        },
        {
          name: 'Гарантия',
          text: 'На все виды выполненых работ',
          bg: 'black',
          img: 'warranty.svg',
        },
      ],
    };
    return data;
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.page-container{
  display: flex;
  flex-flow: column;
}

a{
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 500;
  color: #000a12 !important;
}

a:hover{
  color: #000a12 !important;
  text-decoration: none !important;
}

// CONTAINERS
.main-section-container {
    display: flex;
    flex-flow: column;
    gap: 24px;
}

.dark-bg-fluid{
  margin-top: 4rem;
  background: linear-gradient(90deg, #000A12 0%, rgba(0, 10, 18, 0.9) 30%,
   rgba(0, 10, 18, 0.9) 70%, #000A12 100%),
   linear-gradient(360deg, #000A12 0%, rgba(0, 10, 18, 0.6) 20%,
   rgba(0, 10, 18, 0.5) 80%, #000A12 100%);
   padding-bottom: 4rem;
}

.advantage-wrapper{
  display: flex;
  flex-flow: column;
  gap: 3rem;
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

.discount-container{
  display: flex;
  flex-flow: row;
  gap: 2rem;
  padding-bottom: 16px;
  overflow-x: auto;
  overflow-y: hidden;
}

// CARD
.card-container {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 2rem;
  justify-content: space-between;
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
min-height: 8rem;
}

div#vitan-card-bg {
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    -moz-background-origin: content-box;
    -webkit-background-origin: content-box;
    -moz-background-origin: content-box;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: right 5%;
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
  -webkit-box-shadow: 0rem 2rem 3rem -1rem rgba(#000a12, 0.3);
  box-shadow: 0rem 1rem 1.5rem -1rem rgba(#000a12, 0.3);
}

.card-hover:hover, .card-hover:active {
  -webkit-box-shadow: 0rem 2rem 3rem -1rem rgba(#000a12, 0.6);
  box-shadow: 0rem 1.2rem 1.7rem -1rem rgba(#000a12, 0.6);
}

.card-link{
    color: #ED661A;
    text-transform: uppercase;
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
@include media-breakpoint-down(md){

  .card-container {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    justify-content: space-between;
  }

  .main-section-container {
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
}

// BREAKPOINTS MEDIA
@include media-breakpoint-down(sm){
  .card-container {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    grid-row-gap: 2.5rem;
    grid-column-gap: 1rem;
  }

  .dark-bg-fluid{
    background: linear-gradient(180deg,rgba(0, 10, 18, 0.96) 0%, rgba(0, 10, 18, 0.94) 10%,
    rgba(0, 10, 18, 0.92) 50%,
    rgba(0, 10, 18, 0.94) 90%,
    rgba(0, 10, 18, 0.96) 100%);
  }

  .discount-container{
    gap: 1rem;
  }

}

@include media-breakpoint-down(xs){
     .card-container {
        grid-auto-columns: minmax(0, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: start;
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
    }
}
</style>
