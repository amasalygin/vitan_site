<template>
    <div
      v-on:click="routeToService"
      class="wrapper"
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
      v-bind:class="{ hovering: isHovering }"
    >
        <div class="image-wrapper">
          <b-img
              v-if="img"
              :src="require('@/assets/' + img + '')"
              :width="48"
              :height="48"
              alt="Responsive image">
          </b-img>
        </div>
        <div class="content">
            <p class="header">
                {{name}}
            </p>
            <p class="description">
                {{description}}
            </p>
        </div>
        <b-img
            class="image"
            :src="require('@/assets/right_arrow.png')"
            alt="Responsive image">
        </b-img>
    </div>
</template>

<script>
export default {
  props: ['name', 'description', 'img', 'routeName', 'routeParams', 'routeProps'],
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
};
</script>

<style lang="scss" scoped>
.hovering{
  box-shadow: 0px 0px 20px rgba(0, 10, 18, 0.13) !important;
}

.wrapper{
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    box-shadow: 0px 0px 6px rgba(0, 10, 18, 0.05);
    padding: 11px;
    margin-bottom: 20px;
    gap: 13px;
    align-items: center;
    transition: 0.3s;
}

.content{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.image-wrapper{
  background-color: rgba($color: #000a12, $alpha: 0.04);
  padding: 12px;
  border-radius: 16px;
}

.image{
  width: 20px;
  height: 20px;
  margin-left: 1rem;
  align-self: center;
  object-fit: contain;
}

.header{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0;
    margin-bottom: 0px;
}

.description{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0;
    margin-bottom: 0px;
    color: #000a12;
    opacity: 0.5;
}
</style>
