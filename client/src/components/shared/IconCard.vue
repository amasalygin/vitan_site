<template>
    <div
        v-on:click="routeToService"
        class="card-wrapper"
        v-bind:class="{
            'small': size=='small',
            'invert': invert
        }"
    >
        <div
            class="image-wrapper"
            @mouseover="isHovering = true"
            @mouseout="isHovering = false"
            v-bind:class="{ hovering: isHovering }"
        >
            <b-img
                class="image"
                :src="require('@/assets/' + data.img + '')"
                alt="Responsive image">
            </b-img>
        </div>
        <p class="title">
            {{data.name}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['data', 'index', 'routeName', 'routeParams', 'routeProps', 'size', 'invert'],
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
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.hovering{
  box-shadow: 0px 0px 20px rgba(0, 10, 18, 0.15) !important;
}

.small{
    min-width: 89px;
    gap: 5px !important;

    .image-wrapper{
        padding: 14px;
        border-radius: 17px;
        transition: 0.3s;
    }

    .image{
        align-self: center;
        width: 36px;
        height: 36px;
    }

    .title{
        font-size: 9px;
    }
}

.invert{
    .image-wrapper{
        background-color: rgba($color: #000A12, $alpha: 0.8);
    }

    .title{
        color: #fff;
    }
}

.card-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    cursor: pointer;

    flex: 1;
    flex-grow: 1;
    flex-basis: 100%;

    -webkit-transform: scale(1);
    -webkit-transform-origin: 50% 50%;
    -webkit-transition:.2s;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition:.2s;
    transform-box: fill-box;
}

.card-wrapper:active{
  -webkit-transform: scale(0.9);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition:.2s;
  transform: scale(0.9);
  transform-origin: 50% 50%;
  transition:.2s;
}

.image-wrapper{
    position: relative;
    background-color: transparent;
    border: none;
    border: 0.5px solid rgba(0, 10, 18, 0.04);
    box-shadow: 0px 0px 13px rgba(0, 10, 18, 0.05);
    padding: 34px;
    border-radius: 36px;
    transition: 0.3s;
}

.image{
    align-self: center;
    width: 60px;
    height: 60px;
}

.title{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0;
    margin-bottom: 0;
}

@include media-breakpoint-down(sm){
    .image-wrapper{
        padding: 24px;
        border-radius: 26px;
    }

    .image{
        width: 48px;
        height: 48px;
    }

    .title{
        font-size: 11px;
    }
}
</style>
