<template>
<div>
  <b-container>
    <Legend/>
    <div class="main-section-container">
      <SectionHeader
        :name="'Категории'"
      />
      <div class="services-list-wrapper">
        <template v-for="(serviceItem, i) in servicesList">
          <DefaultItem
              :key="i"
              :name="serviceItem.name"
              :description="serviceItem.services.length + ' видов услуг'"
              :img="serviceItem.img"
              :routeName="'category'"
              :routeParams="{tag: serviceItem.tag, name: i}"
              >
          </DefaultItem>
        </template>
        <BackcallCard
          style="margin-top: 4rem;"
          :name="'Не нашли что искали?'"
          :color="'black'"
        ></BackcallCard>
      </div>
      <div class="services-list-wrapper-mobile">
        <SectionHeaderMobile
          :name="'Категории'"
          style="padding-left: 1.2rem; padding-top: 1.2rem;"
        />
        <div class="flex-wrapper">
          <template v-for="(serviceItem, i) in servicesList">
            <DefaultItemMobile
                :key="i"
                :header="serviceItem.name"
                :description="serviceItem.services.length + ' видов услуг'"
                :img="serviceItem.img"
                :routeName="'category'"
                :routeParams="{tag: serviceItem.tag, name: i}"
                :enablePaddings="true"
                class="list-item"
                >
            </DefaultItemMobile>
          </template>
        </div>
      </div>
    </div>
    <div class="main-section-container">
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
import DefaultItem from '@/components/shared/DefaultItem.vue';
import DefaultItemMobile from '@/components/shared/DefaultItemMobile.vue';
import Legend from '@/components/legend/Legend.vue';
import Footer from '@/components/footer/Footer.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import SectionHeaderMobile from '@/components/shared/SectionHeaderMobile.vue';
import BackcallCard from '@/components/shared/BackcallCard.vue';
import ServicesJson from '../../static/services.json';

export default {
  components: {
    DefaultItem,
    DefaultItemMobile,
    Legend,
    SectionHeader,
    SectionHeaderMobile,
    BackcallCard,
    Footer,
  },
  data: () => {
    const data = {
      servicesList: ServicesJson,
    };
    return data;
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.page-container{
  margin-bottom: 4rem;
}

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

@include media-breakpoint-down(sm){
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
</style>
