<template>
    <div class="gray-bg-fluid">
    <b-container>
      <Brand :disabled="true"></Brand>
      <div class="column-section-container">
        <div class="main-section-container" style="width:100%">
          <SectionHeader
          :name="'Контакты'"
          />
          <div class="contacts-item">
            <p class="header">Телефон</p>
            <div class="contacts-item-content">
                 <b-img
                    :width="18"
                    :height="18"
                    :src="require('@/assets/phone.png')"
                    alt="Responsive image">
                </b-img>
                <a href="tel:+7 (342) 279 38 36">+7 (342) 279 38 36</a>
            </div>
          </div>
          <div class="contacts-item">
            <p class="header">Адрес</p>
            <div class="contacts-item-content">
               <b-img
                    :width="18"
                    :height="18"
                    :src="require('@/assets/geo.png')"
                    alt="Responsive image">
                </b-img>
               <a href="https://yandex.ru/maps/org/avtoservis/72204050185/?ll=56.253990%2C57.952544&z=14"
                >г. Пермь ул. Васильева 8А</a>
            </div>
          </div>
          <div class="contacts-item">
            <p class="header">Социальные сети</p>
            <div class="contacts-item-content">
                <b-img
                    v-on:click="gotoInst"
                    :width="50"
                    :src="require('@/assets/instagram.svg')"
                    alt="Responsive image">
                </b-img>
                <b-img
                    v-on:click="gotoVk"
                    :width="50"
                    :src="require('@/assets/vk.svg')"
                    alt="Responsive image">
                </b-img>
            </div>
          </div>
        </div>
        <div class="main-section-container" style="width:100%">
          <SectionHeader
          :name="'Услуги'"
          />
          <template v-for="(serviceItem, i) in servicesList">
            <DefaultItemMobile
                :key="i"
                :header="serviceItem.name"
                :description="serviceItem.services.length + ' видов услуг'"
                :routeName="'category'"
                :routeParams="{tag: serviceItem.tag, name: i}"
            >
            </DefaultItemMobile>
          </template>
        </div>
        <div class="main-section-container" style="width:100%;">
          <SectionHeader
          :name="'Акции'"
          />
          <template v-for="(discountItem, i) in discountList">
            <DefaultItemMobile
                :key="i"
                :header="discountItem.name"
                :description="discountItem.discount_value"
            >
            </DefaultItemMobile>
          </template>
        </div>
      </div>
    <div class="map-flex">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b2e109ee024a2ef5b8d0f26e077225c812dd5410574f60169dcbd0c76aba0be&amp;source=constructor" frameborder="0"></iframe>
    </div>
    </b-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/shared/SectionHeader.vue';
import Brand from '@/components/shared/Brand.vue';
import DefaultItemMobile from '@/components/shared/DefaultItemMobile.vue';
import ServicesJson from '../../static/services.json';
import DiscountsJson from '../../static/discounts.json';

export default {
  components: {
    SectionHeader,
    DefaultItemMobile,
    Brand,
  },
  data: () => {
    const data = {
      servicesList: ServicesJson,
      discountList: DiscountsJson,
    };
    return data;
  },
  methods: {
    gotoVk() {
      window.open('https://vk.com/vitan_servis', '_blank');
    },
    gotoInst() {
      window.open('https://instagram.com/vitan_servis_perm', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.column-section-container {
  display: flex;
  flex-flow: row;
  gap: 3rem;
  width: 100%;
  opacity: 0.8;
}

.gray-bg-fluid{
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: #E5E5EA;
}

.contacts-item{
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  .header{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 0.8rem;
    opacity: 0.5;
    letter-spacing: 0;
    margin-bottom: 0;
  }
}

.contacts-item-content{
  display: flex;
  flex-flow: row;
  align-items:center;
  gap: 0.5rem;

  p{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0;
    margin-bottom: 0;
  }
}

iframe{
    margin-top: 4rem;
    width: 100%;
    height: 600px;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 15px rgba(0, 10, 18, 0.15) ;
}

@include media-breakpoint-down(sm){
  iframe{
    margin-top: 2rem;
    height: 400px;
  }

  .column-section-container {
    display: flex;
    flex-flow: column-reverse;
    gap: 2rem;
    width: 100%;
    padding-top: 0rem;
  }
}
</style>
