<template>
    <div class="wrapper"
        v-bind:class="{'large': size == 'large'}"
    >
        <b-img
            :src="require('@/assets/ruble.png')"
        >
        </b-img>
        <p class="price">
            {{price}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['price', 'size'],
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.wrapper{
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding-top: 0;

    img{
        width: 18px;
        height: 18px;
    }

    .price{
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 1.3rem;
        letter-spacing: 0;
        margin-bottom: 0;
        color: #000a12;
    }
}

.wrapper.large{
    img{
        width: 18px;
        height: 18px;
    }

    .price{
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 1.3rem;
        letter-spacing: 0;
        margin-bottom: 0;
        color: #000a12;
    }
}

@include media-breakpoint-down(sm){
    .wrapper{
        .price{
            font-size: 1rem;
        }

        img{
            width: 16px;
            height: 16px;
        }
    }

    .wrapper.large{
        gap: 0.2rem;
        img{
            width: 28px;
            height: 28px;
        }

        .price{
            font-size: 2rem;
        }
    }
}
</style>
