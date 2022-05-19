<template>
  <div
    v-on:click="routeToService"
    class="wrapper"
    v-bind:class="{paddings : enablePaddings}"
  >
    <div class="scale-wrapper">
      <b-img
          v-if="img"
          class="item-image"
          :src="require('@/assets/' + img + '')"
          alt="Responsive image">
      </b-img>
      <div class="content">
        <p class="header">
          {{header}}
        </p>
        <p class="description" v-if="description">
            {{description}}
        </p>
        <Price
          v-if="price"
        :price="price"
        />
      </div>
      <b-img
          class="image"
          :src="require('@/assets/right_arrow.png')"
          alt="Responsive image">
      </b-img>
    </div>
  </div>
</template>

<script>
import Price from '@/components/shared/Price.vue';

export default {
  props: ['header', 'price', 'description',
    'routeName', 'routeParams', 'routeProps',
    'enablePaddings', 'img'],
  methods: {
    routeToService() {
      this.$router.push({
        name: this.routeName,
        params: this.routeParams,
        props: this.routeProps,
      });
    },
  },
  data() {
    return {
      isHovering: false,
    };
  },
  components: {
    Price,
  },
};
</script>

<style lang="scss" scoped>

.wrapper{
}

.scale-wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  -webkit-transform: scale(1);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition:.2s;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition:.2s;
  transform-box: fill-box;
  gap: 1.2rem;
  align-items: center;
}

.scale-wrapper:active{
  -webkit-transform: scale(0.95);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition:.2s;
  transform: scale(0.95);
  transform-origin: 50% 50%;
  transition:.2s;
}

.paddings{
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.header-wrapper{
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.content{
    display: flex;
    flex: 1;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: flex-start;
}

.item-image{
  width: 32px;
  height: 32px;
}

.image{
    align-self: center;
    width: 12px;
    height: 12px;
    align-self: center;
    object-fit: contain;
    opacity: 0.4;
}

.header{
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0;
    margin-bottom: 0px;
    align-self: left;
}

.description{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 0.7rem;
    letter-spacing: 0;
    margin-bottom: 0px;
    color: #000a12;
    opacity: 0.4;
}
</style>
