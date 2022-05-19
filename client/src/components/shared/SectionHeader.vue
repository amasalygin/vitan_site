<template>
    <div class="main-container">
      <div class="wrapper">
          <h1 class="page-header" v-bind:class="{ 'color-white': invert }">{{name}}</h1>
          <div v-if="routeName" style="display: flex; flex-flow:row; align-items: center;">
              <a
                  v-bind:class="{ 'color-white': invert }"
                  v-on:click="routeTo"
              >{{routeLabel}}
              </a>
              <b-img
                  :src="require('@/assets/right_arrow.png')"
              >
              </b-img>
          </div>
      </div>
      <h2
        v-bind:class="{ 'color-white': invert }"
        v-if="description">{{description}}
      </h2>
    </div>
</template>

<script>
export default {
  props: ['name', 'description', 'invert', 'routeLabel', 'routeName', 'routeParams', 'routeProps'],
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

.color-white {
  color: #fff !important;
}

.main-container{
  display: flex;
  flex-flow: column;
  gap: 13px;
}

.wrapper{
  display: flex;
  flex-flow:row;
  justify-content: space-between;
}

.page-header{
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 0px;
    letter-spacing: 0px;
}

h2{
  color: #000a12;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 13px;
  opacity: 0.5;
  width: 100%;
  margin-bottom: 0px;
}

img{
  width: 13px;
  height: 13px;
  margin-left: 2px;
}

.divider{
  background: #000a12;
  width: 50%;
  height: 1px;
}

a{
  font-family: 'Montserrat';
  font-size: 13px;
  font-weight: 600;
  color: #000a12 !important;
  cursor: pointer;
}

@include media-breakpoint-down(sm){
    .main-container{
      gap: 5px;
    }
    .wrapper-display-none{
      display: none;
    }

    .page-header{
      font-size: 21px;
    }

    a{
      font-size: 11px;
    }

    img{
      width: 11px;
      height: 11px;
    }

    h2{
      font-size: 11px;
    }

    .divider{
      width: 100%;
    }
}
</style>
