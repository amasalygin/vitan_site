<template>
    <div class="main">
        <div class="wrapper">
            <div class="content-wrapper">
                <h1 class="header">
                    {{header}}
                </h1>
                <p class="text">
                    {{text}}
                </p>
            </div>
            <b-img v-if="img"
                class="image"
                :src="require('@/assets/' + img + '')"
                alt="Responsive image">
            </b-img>
        </div>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
  props: ['header', 'text', 'img'],
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.main{
    display: flex;
    flex-flow: column;
    gap: 3rem;
}

.wrapper{
    display: flex;
    flex-flow: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.content-wrapper{
    justify-content: center;
    display: flex;
    flex: 1;
    flex-flow: column;
    gap: 3rem;
}

.divider{
    width: 70%;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%,
     rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
    align-self: center;
}

.header{
   font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    color: var(--light);
    text-shadow: 0px 0px 15px rgba($color: #ffffff, $alpha: 0.8);
}

.image{
    opacity: 0.2;
    width: 200px;
    height: 200px;
}

.text{
    font-family: 'Montserrat';
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--light);
    margin-bottom: 0px;
    letter-spacing: 0;
    opacity: 0.5;
}

@include media-breakpoint-down(md){
    .content-wrapper{
        gap: 2rem;
    }

    .image{
        width: 180px;
        height: 180px;
    }

    .header{
        font-size: 2rem;
    }

    .text{
        font-size: 1rem;
    }
}

@include media-breakpoint-down(sm){
    .image{
        width: 90px;
        height: 90px;
    }

    .header{
        font-size: 1.5rem;
    }

    .text{
        font-size: 0.8rem;
    }
}

@include media-breakpoint-down(xs){
}
</style>
