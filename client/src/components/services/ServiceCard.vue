<template>
    <div class="card-wrapper">
        <b-img
            class="card-image"
            :src="img"
            alt="Responsive image">
        </b-img>
        <p class="card-text">
            {{name}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['img', 'name'],
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.card-wrapper{
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    padding: 2.2rem;
    gap: 1.5rem;
    align-items: center;
}

.card-image{
    align-self: center;
    width: 70px;
    height: 70px;
}

.card-text{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0;
}

@include media-breakpoint-down(lg){
    .card-wrapper{
        padding: 1.5rem;
    }

    .card-image{
        width: 55px;
        height: 55px;
    }

    .card-text{
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 0.8rem;
        text-align: center;
    }
}

@include media-breakpoint-down(md){
    .card-wrapper{
        padding: 1.5rem;
        gap: 1rem;
    }

    .card-image{
        width: 55px;
        height: 55px;
    }

    .card-text{
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 0.8rem;
        text-align: center;
    }
}

@include media-breakpoint-down(sm){
    .card-wrapper{
        padding: 1rem;
    }

    .card-image{
        width: 42px;
        height: 42px;
    }

    .card-text{
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 0.7rem;
        text-align: center;
    }
}

@include media-breakpoint-down(xs){
    .card-wrapper{
        padding: 1rem;
    }

    .card-image{
        width: 32px;
        height: 32px;
    }

    .card-text{
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 0.6rem;
        text-align: center;
    }
}
</style>
