<template>
    <div v-bind:class="{ 'wrapper-display-none': hideOnMobile }" class="main-container">
      <div class="wrapper">
          <h1 class="page-header">{{name}}</h1>
          <div v-if="routeName" style="display: flex; flex-flow:row; align-items: center;">
              <a
                  v-on:click="routeTo"
              >{{routeLabel}}
              </a>
              <b-img
                  :src="require('@/assets/right_arrow.png')"
              >
              </b-img>
          </div>
      </div>
      <h2>{{description}}</h2>
    </div>
</template>

<script>
export default {
  props: ['name', 'description', 'routeLabel', 'routeName', 'routeParams', 'routeProps', 'hideOnMobile',
    'isShowUnderLine'],
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

.main-container{
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.wrapper{
  display: flex;
  flex-flow:row;
  justify-content: space-between;
}

.page-header{
    color: var(--light);
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0px;
    letter-spacing: 0px;
}

h2{
  color: var(--light);
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 0.9rem;
  opacity: 0.5;
  max-width: 50%;
  margin-bottom: 0px;
}

img{
  width: 18px;
  height: 18px;
  margin-left: 0.3rem;
}

.divider{
  background: var(--light);
  width: 50%;
  height: 1px;
}

a{
  font-family: 'Montserrat';
  font-size: 1rem;
  font-weight: 500;
  color: var(--light) !important;
  cursor: pointer;
}

@include media-breakpoint-down(md){
    a{
    font-size: 0.8rem;
    }
}

@include media-breakpoint-down(sm){
    .wrapper-display-none{
      display: none;
    }

    .main-container{
      gap: 0.8rem;
    }

    h2{
      font-size: 0.7rem;
      max-width: 100%;
    }

    .divider{
      width: 100%;
    }
}
</style>
