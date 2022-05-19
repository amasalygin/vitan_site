<template>
    <div
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
      v-on:click="routeToService"
      class="legend-wrapper"
      v-bind:class="{ highlighted: highlighted, hovering: !highlighted && isHovering }"
      >
        <p>{{name}}</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['name', 'highlighted', 'isBackward', 'routeName', 'routeParams', 'routeProps'],
  methods: {
    routeToService() {
      if (this.isBackward) {
        this.$router.push({ name: this.routeName, params: this.routeParams, props: this.routeProps });
      }
    },
  },
  data() {
    return {
        isHovering: false,
    };
  },
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.legend-wrapper{
    padding: 4px;
    padding-left: 19px;
    padding-right: 19px;;
    transition: 0.3s;
    cursor: pointer;
    background: #fff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    border: 1.5px solid rgba($color: #000a12, $alpha: 0.75);
    border-radius: 13px;
    border: 0.5px solid rgba(0, 10, 18, 0.04);
}

.hovering{
  background-color: rgba($color: #000a12, $alpha: 0.04)
}

p{
    color: #000a12;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 10px;
    white-space: nowrap;
    letter-spacing: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    text-transform:uppercase !important;
}

@include media-breakpoint-down(md){
  img{
    width: 20px;
    height: 20px;
  }

  p{
    font-size: 9px;
  }
}
</style>