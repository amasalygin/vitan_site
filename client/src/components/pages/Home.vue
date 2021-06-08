<template>
    <div>
    <Nav />
    <section id="main">
        <Main />
    </section>
    <section id="services">
        <Services />
    </section>
    <section id="Price">
        <Price />
    </section>
    <section id="discount">
        <Discount />
    </section>
    <section id="about">
        <About />
    </section>
    </div>
</template>

<script>
import Main from '@/components/main/Main.vue'
import Services from '@/components/services/Services.vue'
import Discount from '@/components/discount/Discount.vue'
import Nav from '@/components/nav/Nav.vue'
import About from '@/components/about/About.vue'
import Price from '@/components/price/Price.vue'

export default {
    components: {
        Main,
        Nav,
        Discount,
        Services,
        About,
        Price
    }
}
</script>