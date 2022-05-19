<template>
    <div class="wrapper" v-bind:class="{ 'wrapper-display-none': hideOnMobile }">
        <h1 class="page-header">{{name}}</h1>
        <div v-if="routeName" style="display: flex; flex-flow:row; align-items: center;">
            <a
                v-on:click="routeTo"
            >{{routeLabel}}
            </a>
            <b-img
                :src="require('@/assets/right_arrow.svg')"
                width="28"
                height="28"
            >
            </b-img>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'routeLabel', 'routeName', 'routeParams', 'routeProps', 'hideOnMobile'],
  methods: {
    routeTo() {
      this.$router.push({ name: this.routeName, params: this.routeParams, props: this.routeProps });
    },
  },
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.wrapper{
  display: flex;
  flex-flow:row;
  justify-content: space-between
}

.page-header{
    color: #000a12;
    opacity: 0.4;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1rem;
}

a{
  font-family: 'Montserrat';
  font-size: 1rem;
  font-weight: 500;
  color: #000a12 !important;
  cursor: pointer;
}

@include media-breakpoint-down(sm){
    .wrapper-display-none{
      display: none;
    }
}
</style>
