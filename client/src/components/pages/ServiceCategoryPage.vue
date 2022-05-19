<template>
<div>
  <b-container style="margin-bottom: 4rem">
    <Legend/>
    <div class = "main-section-container">
      <SectionHeader
          :name="'Список услуг'"
      />
      <div class="shop-cards-container">
        <div class="grid-container">
          <template v-for="(service, i) in serviceItem.services">
            <ShopCard
              :key="i"
              :name="service.name"
              :price="service.price"
              :index="i"
              :routeName="'serviceEnroll'"
              :routeParams="{ tag: serviceItem.tag, name: i}">
            </ShopCard>
          </template>
        </div>
          <BackcallCard
            style="margin-top: 4rem;"
            :name="'Не нашли что искали?'"
            :color="'black'"
        ></BackcallCard>
      </div>
      <div class="services-list-wrapper-mobile">
        <SectionHeaderMobile
          :name="'Список услуг'"
          style="padding-left: 1.5rem; padding-top: 1.2rem;"
        />
        <div class="flex-wrapper">
          <template v-for="(service, i) in serviceItem.services">
            <DefaultItemMobile
                :key="i"
                :header="service.name"
                :price="service.price"
                :img="'shop-icon.svg'"
                :index="i"
                :routeName="'serviceEnroll'"
                :routeParams="{ tag: serviceItem.tag, name: i}"
                :enablePaddings="true"
                class="list-item">
                >
            </DefaultItemMobile>
          </template>
        </div>
      </div>
      <div class="services-list-wrapper-mobile">
        <BackcallCard
          style="padding: 1.5rem !important;"
          :name="'Не нашли что искали?'"
          :color="'black'"
          :noBorder="true"
        ></BackcallCard>
      </div>
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
import BackcallCard from '@/components/shared/BackcallCard.vue';
import DefaultItemMobile from '@/components/shared/DefaultItemMobile.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import SectionHeaderMobile from '@/components/shared/SectionHeaderMobile.vue';
import ServicesJson from '../../static/services.json';

export default {
  props: ['tag'],
  components: {
    Legend,
    Footer,
    ShopCard,
    DefaultItemMobile,
    SectionHeaderMobile,
    SectionHeader,
    BackcallCard,
  },
  data: () => {
    const data = {
      servicesList: ServicesJson,
      serviceIndex: 0,
      serviceItem: {},
    };
    return data;
  },
  mounted() {
    for (const [key, value] of Object.entries(this.servicesList)) {
      if (value.tag == this.tag) {
        this.serviceItem = value;
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
  padding-bottom: 1.2rem;
}

.list-item{
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
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
    gap: 0.5rem;
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
