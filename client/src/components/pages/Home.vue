<template>
    <b-container fluid style="padding-left: 0px; padding-right:0px;">
        <Nav />
        <section id="main" class="main-wrapper">
            <b-col class="mt-5">
                <Main/>
            </b-col>
        </section>
        <section id="services">
            <Services />
        </section>
        <section id="discount">
            <Discount />
        </section>
        <section id="about">
            <About />
        </section>
    </b-container>
</template>

<script>
import Main from '@/components/main/Main.vue';
import Services from '@/components/services/Services.vue';
import Discount from '@/components/discount/Discount.vue';
import Nav from '@/components/nav/Nav.vue';
import About from '@/components/about/About.vue';

export default {
  components: {
    Main,
    Nav,
    Discount,
    Services,
    About,
  },
};
</script>

<style>
.main-wrapper{
background-color: #000;
}
</style>
