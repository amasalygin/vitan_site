<template>
    <div class="bg-wrapper">
        <b-img v-if="img"
            class="image"
            :src="require('@/assets/' + img + '')"
            alt="Responsive image">
        </b-img>
        <div class="card-wrapper">
            <h1 class="header">
                {{header}}
            </h1>
            <p class="text">
                {{text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['header', 'text', 'bg', 'img'],
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.bg-wrapper{
    //background-color: #fff;
    width: 350px;
    height: 400px;
    position: relative;
}

.card-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: inherit;
    height: inherit;
    padding: 31px;
    z-index: 1;
}

.header{
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 700;
    color: var(--light);
}

.text{
    font-family: 'Montserrat';
    font-size: 17px;
    font-weight: 700;
    color: var(--light);
    padding-bottom: 0px;
    margin-bottom: 0px;
}

img{
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    opacity: 1;
    border-radius: 34px;
}

.card-orange{
    background: linear-gradient(89.77deg, rgba(255, 0, 0, 0.5) 15.66%,
    rgba(237, 102, 26, 0.5) 99.98%), #ED661A;
}

.card-red{
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.5) 0%,
     rgba(0, 0, 0, 0.5) 100%), #000a12;
}

.card-black{
    //background: linear-gradient(90deg, #000a12 50%, rgba(255, 255, 255, 0.2) 300%);
    background: linear-gradient(110deg, #000a12 35%, rgba(255, 255, 255, 0.6) 350%);
}

@include media-breakpoint-down(md){
    img{
        border-radius: 21px;
    }
}

@include media-breakpoint-down(sm){
    .bg-wrapper{
        width: 200px;
        height: 250px;
    }
    .card-wrapper{
        padding: 21px;
    }

    .header{
        font-size: 17px;
    }

    .text{
        font-size: 11px;
    }
}
</style>
