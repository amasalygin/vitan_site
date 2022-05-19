<template>
    <div class="wrapper"
        v-bind:class="{'info': type == 'info'}"
    >
        <b-img
            :src="require('@/assets/' + icon + '')"
        >
        </b-img>
        <p class="text">
            {{text}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['text', 'type'],
  data() {
    return {
      icon: 'info.png',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.wrapper{
    display: flex;
    flex-flow: row;
    width: 100%;
    padding: 1rem;
    gap: 1rem;

    img{
        width: 24px;
        height: 24px;
    }

    .text{
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 0.8rem;
        letter-spacing: 0;
        margin-bottom: 0;
        color: #000a12;
    }
}

@include media-breakpoint-down(sm){
    .wrapper{
        display: flex;
        flex-flow: row;
        width: 100%;
        padding: 1rem;
        gap: 1rem;
        background-color: #F4F4F4;
        border-radius: 1rem;

        img{
            width: 24px;
            height: 24px;
            opacity: 0.4;
        }

        .text{
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 0.8rem;
            letter-spacing: 0;
            margin-bottom: 0;
            color: #000a12;
            opacity: 0.4;
        }
    }
}
</style>
