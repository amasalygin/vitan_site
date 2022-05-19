<template>
    <div
        v-on:click="routeToService"
        class="card-wrapper"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
        v-bind:class="{ hovering: isHovering }"
    >
        <b-img
            :src="require('@/assets/shop-icon.svg')"
            :width="24"
            :height="24"
        >
        </b-img>
        <div class="content-wrapper">
            <p class="title">
                {{name}}
            </p>
            <Price :price="'от ' + price"/>
        </div>
    </div>
</template>

<script>
import Price from '@/components/shared/Price.vue';

export default {
  props: ['name', 'price', 'index', 'routeName', 'routeParams', 'routeProps'],
  methods: {
    routeToService() {
      this.$router.push({ name: this.routeName, params: this.routeParams, props: this.routeProps });
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
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.hovering{
  box-shadow: 0px 0px 20px rgba(0, 10, 18, 0.15) !important;
}

.card-wrapper{
    display: flex;
    flex-flow: column;
    height: 100%;
    position: relative;
    box-shadow: 0px 0px 8px rgba(0, 10, 18, 0.08);
    padding: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 1.5rem;

    gap: 2rem;
    transition: all .2s ease-in-out;
}

.content-wrapper{
    display: flex;
    flex-flow: column;
    height: 100%;
    -webkit-justify-content: flex-end;
    gap: 0.5rem;
}

.title{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0;
    margin-bottom: 0;
    color: #000a12;
}

.price-div{
    align-items: center;
    gap: 0.3rem;
    background: #000a12;
}

.price{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0;
    margin-bottom: 0;
    color: var(--light);
}

@include media-breakpoint-down(md){
    .card-wrapper{
        padding-right: 1.2rem;
        padding-left: 1.2rem;
    }
    .title{
        font-size: 0.8rem;
    }

    .price{
        font-size: 1.5rem;
    }
}

</style>
