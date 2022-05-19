<template>
  <div class="discount-card-container">
      <template v-for="(discountItem, i) in discountItems">
        <PromoCard
          :key="i"
          :text="discountItem.discount_value"
          :header="discountItem.name"
          :bg="discountItem.bg"
          :img="discountItem.img">
        </PromoCard>
      </template>
  </div>
</template>

<script>
import PromoCard from '@/components/shared/PromoCard.vue';

export default {
  components: {
    PromoCard,
  },
  data() {
    return {
      discountItems: [
        {
          name: 'Диагностика подвески',
          discount_value: 'БЕСПЛАТНО',
          bg: 'orange',
        },
        {
          name: 'Замена масла',
          discount_value: 'БЕСПЛАТНО',
          bg: 'red',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.discount-card-container{
  display: flex;
  flex-flow: row;
  gap: 1rem;
  overflow: scroll;
  overflow-y: hidden;
}
</style>
