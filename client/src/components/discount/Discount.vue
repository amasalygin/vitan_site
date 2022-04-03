<template>
  <b-container>
    <div class="main-flex">
      <div>
        <h1 class="page-header">Акции</h1>
      </div>
      <div class="discount-card-container">
          <template v-for="(discountItem, i) in discountItems">
            <DiscountCard
              :key="i"
              :discount="discountItem.discount_value"
              :header="discountItem.name"
              :bg="discountItem.bg">
            </DiscountCard>
          </template>
      </div>
    </div>
  </b-container>
</template>

<script>
import DiscountCard from '@/components/discount/DiscountCard.vue';

export default {
  components: {
    DiscountCard,
  },
  data() {
    return {
      discountItems: [
        {
          name: 'Диагностика подвески',
          discount_value: 'Бесплатно',
          bg: 'orange',
        },
        {
          name: 'Замена масла',
          discount_value: 'Бесплатно',
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
  flex-flow: column;
  gap: 2rem;
}
</style>
