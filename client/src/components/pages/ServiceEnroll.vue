<template>
<div>
  <b-container class="page-container" style="margin-bottom: 4rem">
    <Legend/>
    <SectionHeader
      :name="'Запись на услугу'"
      :hideOnMobile="true"
    />
    <div class="services-list-wrapper-mobile">
      <SectionHeaderMobile
        :name="'Запись на услугу'"
        style="padding-left: 1.5rem; padding-top: 1.5rem;"
      />
      <div class="service-info-wrapper">
        <p class="service-name">{{serviceItem.name}}</p>
        <p class="toggle-about-service">Подробнее</p>
        <Price :size="'large'" :price="serviceItem.price"></Price>
        <Panel
          :type="'info'"
          :text="'Стоимость услуги может быть изменена в зависимости от вашего автомобиля'"
        >
        </Panel>
      </div>
      <div class="flex-wrapper">
        <div
          class="collapse-header-wrapper"
          v-bind:class="{
            'stage-current': stage==='car-data',
            'stage-done': 'car-data' in completeStages,
            'stage-hidden': stage != 'car-data' && !'card-data' in completeStages,
          }"
        >
          <p class="collapse-header">
            Укажите данные вашего авто
          </p>
          <b-img
            :src="require('@/assets/complete.svg')"
            :width="24"
            :height="24"
          >
          </b-img>
        </div>
        <b-collapse class="collapse-wrapper" :visible="stage==='car-data'">
          <input
              type="tel"
              class="input black"
              :placeholder="'Марка'"
          >
          <input
              type="tel"
              class="input black"
              :placeholder="'Модель'"
          >
        </b-collapse>
        <div
          class="collapse-header-wrapper"
          v-bind:class="{
            'stage-current': stage==='calendar',
            'stage-done': 'calendar' in completeStages,
            'stage-hidden': (stage != 'calendar') && !('calendar' in completeStages),
          }"
        >
          <p class="collapse-header">
            Выберите удобную дату
          </p>
          <b-img
            :src="require('@/assets/complete.svg')"
            :width="24"
            :height="24"
          >
          </b-img>
        </div>
        <b-collapse class="collapse-wrapper" :visible="stage==='calendar'">
          <b-card>Car data</b-card>
        </b-collapse>
        <div
          class="collapse-header-wrapper"
          v-bind:class="{
            'stage-current': stage==='time',
            'stage-done': 'time' in completeStages,
            'stage-hidden': (stage != 'time') && !('time' in completeStages),
          }"
        >
          <p class="collapse-header">
            Выберите удобное время
          </p>
          <b-img
            :src="require('@/assets/complete.svg')"
            :width="24"
            :height="24"
          >
          </b-img>
        </div>
        <b-collapse class="collapse-wrapper" :visible="stage==='time'">
          <b-card>Car data</b-card>
        </b-collapse>
        <div
          class="collapse-header-wrapper"
          v-bind:class="{
            'stage-current': stage==='accept',
            'stage-done': 'accept' in completeStages,
            'stage-hidden': (stage != 'accept') && !('accept' in completeStages),
          }"
        >
          <p class="collapse-header">
            Подтверждение записи
          </p>
          <b-img
            :src="require('@/assets/complete.svg')"
            :width="24"
            :height="24"
          >
          </b-img>
        </div>
        <b-collapse class="collapse-wrapper" :visible="stage==='accept'">
          <b-card>Car data</b-card>
        </b-collapse>
      </div>
    </div>
    <div class="services-list-wrapper-mobile">
      <BackcallCard
        style="padding: 1.5rem !important;"
        :name="'Остались вопросы?'"
        :color="'black'"
        :noBorder="true"
      ></BackcallCard>
    </div>
  </b-container>
  <Footer></Footer>
</div>
</template>

<script>
/* eslint-disable */
import Legend from '@/components/legend/Legend.vue';
import Footer from '@/components/footer/Footer.vue';
import ShopCard from '@/components/shared/ShopCard.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import BackcallCard from '@/components/shared/BackcallCard.vue';
import Price from '@/components/shared/Price.vue';
import Panel from '@/components/shared/Panel.vue';
import DefaultItemMobile from '@/components/shared/DefaultItemMobile.vue';
import SectionHeaderMobile from '@/components/shared/SectionHeaderMobile.vue';
import ServicesJson from '../../static/services.json';

export default {
  props: ['tag', 'name'],
  components: {
    Legend,
    Footer,
    ShopCard,
    SectionHeader,
    DefaultItemMobile,
    SectionHeaderMobile,
    BackcallCard,
    Price,
    Panel,
  },
  data: () => {
    const data = {
      servicesList: ServicesJson,
      serviceIndex: 0,
      serviceItem: {},
      stage: 'car-data',
      completeStages: [],
    };
    return data;
  },
  mounted() {
    for (const [key, value] of Object.entries(this.servicesList)) {
      if (value.tag == this.tag) {
        this.serviceItem = value.services[this.name];
        break;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.services-list-wrapper-mobile{
  display: none;
}

.flex-wrapper{
  display: flex;
  flex-flow: column;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  gap: 1.5rem;
}

.collapse-wrapper{
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.list-item{
  border-bottom: 1px solid rgba($color: #000a12, $alpha: 0.06);
  -webkit-transition:.2s;
  transition:.2s;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}

.list-item:active{
  -webkit-transition:.2s;
  transition:.2s;
  background-color: rgba($color: #000a12, $alpha: 0.2);
}

.list-item:first-child {
   border-top: 1px solid rgba($color: #000a12, $alpha: 0.08);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
}

.service-info-wrapper{
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  .service-name{
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0;
    margin-bottom: 0;
  }

  .toggle-about-service{
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0;
    margin-bottom: 0;
    opacity: 0.4;
  }
}

.collapse-header-wrapper.stage-current{
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .collapse-header {
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0;
    margin-bottom: 0;
  }

  img{
    display: none;
  }
}

.collapse-header-wrapper.stage-complete{
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  opacity: 0.4;

  .collapse-header {
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0;
    margin-bottom: 0;
  }

  img{
    display: block;
  }
}

.collapse-header-wrapper.stage-hidden{
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  opacity: 0.4;

  .collapse-header {
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0;
    margin-bottom: 0;
  }

  img{
    display: none;
  }
}


@include media-breakpoint-down(md){
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  }
}

@include media-breakpoint-down(sm){
  .shop-cards-container {
    display: none;
  }

  .services-list-wrapper
  {
    display: none;
  }

  .page-container{
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .services-list-wrapper-mobile{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 10, 18, 0.10);
    border-radius: 2rem;
  }
}

@include media-breakpoint-down(xs){
  .shop-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
