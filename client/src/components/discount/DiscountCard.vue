<template>
    <div class="card-wrapper"
        v-bind:class="{
            'card-orange': bg == 'orange',
            'card-red': bg == 'red' }">
        <h1 class="header">
            {{header}}
        </h1>
        <p class="text">
            {{discount}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['header', 'discount', 'bg'],
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.header{
    font-family: 'Montserrat';
    font-size: 28px;
    font-weight: 700;
    color: var(--light);
}

.text{
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 500;
    color: var(--light);
    text-transform: uppercase;
    padding-bottom: 0px;
    margin-bottom: 0px;
}

.card-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1.5rem;
    width: 600px;
    height: 250px;
    padding: 2.5rem;
}

.card-orange{
    background: linear-gradient(89.77deg, rgba(255, 0, 0, 0.5) 15.66%,
    rgba(237, 102, 26, 0.5) 99.98%), #ED661A;
}

.card-red{
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.5) 0%,
     rgba(0, 0, 0, 0.5) 100%), #000000;
}

@include media-breakpoint-down(md){
    .card-wrapper{
        width: 450px;
        height: 200px;
        padding: 2rem;
        border-radius: 1.4rem;
    }

    .header{
        font-size: 24px;
    }

    .text{
        font-size: 14px;
    }
}

@include media-breakpoint-down(sm){
    .card-wrapper{
        width: 380px;
        height: 160px;
        padding: 1.5rem;
        border-radius: 1.3rem;
    }

    .header{
        font-size: 20px;
    }

    .text{
        font-size: 12px;
    }
}

@include media-breakpoint-down(xs){
    .card-wrapper{
        width: 280px;
        height: 140px;
        padding: 1.2rem;
        border-radius: 1.2rem;
    }

    .header{
        font-size: 18px;
    }

    .text{
        font-size: 10px;
    }
}
</style>
