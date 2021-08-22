<template>
  <b-container>
    <div class="main-flex">
      <div>
        <h1 class="page-header">Акции</h1>
        <p class="page-header-about">
            О подробностях проведения акций и их условия вы можете уточнить по телефону
        </p>
      </div>
      <div class="card-container discounts-container">
        <div
          v-for="(discountItem, i) in discountItems"
          :key="i"
          class="vitan-service-card card-hover card-shadow"
          >
            <div class="vitan-card-content">
              <p class="card-title" style="flex-grow: 1">
                {{discountItem.name}}
              </p>
              <p class="card-text text-muted">
                {{discountItem.discount_value}}
              </p>
            </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      discountItems: [
        {
          name: 'Диагностика подвески',
          discount_value: 'Бесплатно',
        },
        {
          name: 'Замена масла',
          discount_value: 'Бесплатно',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.discounts-container{
  justify-content: center;
}
</style>
