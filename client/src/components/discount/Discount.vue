<template>
  <b-container class="py-5">
    <b-row>
      <b-col>
        <b-row>
          <b-col>
              <h1 class="text-center">Акции</h1>
          </b-col>
        </b-row>
        <b-row class="card-container mt-3">
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
        </b-row>
      </b-col>
    </b-row>
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

<style scoped>
.card-container{
  justify-content: center;
}
.card-container::after{
  display: none;
}
</style>
