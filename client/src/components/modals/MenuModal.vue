<template>
    <div class="md-content container">
        <div class="md-header-wrapper">
            <Brand style="flex-grow: 1"></Brand>
            <p @click="$emit('hide-modal')">Закрыть</p>
        </div>
        <div class="rounded-button-group-column white-on-black">
            <button>
                записаться на диагностику
            </button>
            <div class="divider"></div>
            <button>
                Построить маршрут
            </button>
        </div>
        <div class="main-section-container">
            <SectionHeader
                :name="'Услуги'"
                :invert="true"
            />
            <div class="group-row white-on-black" style="border-radius: 27px;">
                <div class="icon-cards-container">
                    <template v-for="(serviceItem, i) in servicesList">
                        <IconCard
                            :key="i"
                            :data="serviceItem"
                            :index="i"
                            :size="'small'"
                            :invert="true"
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
                :invert="true"
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
        <div class="group-row white-on-black">
            <div class="group-row-item">
                <b-img
                    :width="12"
                    :height="12"
                    :src="require('@/assets/phone.png')"
                    alt="Responsive image">
                </b-img>
                <a href="tel:+7 (342) 279 38 36">+7 (342) 279 38 36</a>
            </div>
            <div class="divider"></div>
            <div class="group-row-item" style="padding-top: 16px; padding-bottom: 16px">
                <b-img
                    :width="12"
                    :height="12"
                    :src="require('@/assets/geo.png')"
                    alt="Responsive image">
                </b-img>
                <a href="https://yandex.ru/maps/org/avtoservis/72204050185/?ll=56.253990%2C57.952544&z=14"
                >г. Пермь ул. Васильева 8А</a>
            </div>
            <div class="divider"></div>
            <div class="group-row-item">
                <a>9:00-21:00 CБ-ВС</a>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Brand from '@/components/shared/Brand.vue';
import SectionHeader from '@/components/shared/SectionHeader.vue';
import IconCard from '@/components/shared/IconCard.vue';
import PromoCard from '@/components/shared/PromoCard.vue';

import ServicesJson from '../../static/services.json';
import DiscountsJson from '../../static/discounts.json';

export default {
  components: {
    Brand,
    SectionHeader,
    IconCard,
    PromoCard
  },
  data() {
      return {
          servicesList: ServicesJson,
          discountList: DiscountsJson,
      };
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.icon-cards-container{
    width: 100%;
    margin: 12px;

    display: flex;
    flex-flow: row;
    gap: 8px;
    overflow: scroll;
}
</style>
