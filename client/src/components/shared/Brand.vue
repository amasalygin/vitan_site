<template>
    <div
        class="wrapper"
        v-bind:class="{'disabled': disabled}"
    >
        <b-img
            v-if="!disabled"
            class="image"
            :src="require('@/assets/brand.png')"
            alt="Responsive image">
        </b-img>
        <b-img
            v-if="!disabled"
            class="image-vitan"
            :src="require('@/assets/VITAN.png')"
            alt="Responsive image">
        </b-img>
        <b-img
            v-if="disabled"
            class="image"
            :src="require('@/assets/brand-black.png')"
            alt="Responsive image">
        </b-img>
        <!--p class="brand">VITAN</p-->
    </div>
</template>

<script>
export default ({
  props: ['disabled'],
});
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.wrapper{
    display: flex;
    flex-flow: row;
    gap: 2px;
    align-items: center;
}

.image{
    width: 31px;
    height: 29px;
}

.image-vitan{
    height: 21px;
    //width: 96px;
    object-fit: fit;
}

.disabled{
    .brand{
        color: #000a12;
        opacity: 0.2;
    }

    img{
        opacity: 0.2;
    }
}

.brand{
    color: #ED661A;
    font-family: 'Montserrat';
    font-weight: 1000;
    font-size: 1.5rem;
    letter-spacing: 0;
    margin-bottom: 0;
}

@include media-breakpoint-down(md){
    .wrapper{
        display: flex;
        flex-flow: row;
        gap: 2px;
        align-items: center;
    }
    .brand{
        font-size: 1.2rem;
    }

    .image{
        width: 26px;
        height: 24px;
    }

    .image-vitan{
        height: 17px;
        width: 64px;
        object-fit: fit;
    }
}
</style>
