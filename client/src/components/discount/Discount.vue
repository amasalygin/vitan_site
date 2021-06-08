<template>
    <b-container class="py-5">
    <b-col>
        <b-row>
            <h1 class="text-center">Акции</h1>
        </b-row>
        <b-card-group deck class="mt-5">
          <b-card
            v-for="(discountItem, i) in discountItems"
            :key="i"
            img-alt="Image"
            img-top
            class="vitan-card card-shadow card-hover mx-auto">
              <b-card-img :src="discountItem.img"></b-card-img>
              <b-card-title>{{discountItem.name}}</b-card-title>
              <template #footer>
                <small class="text-muted">{{discountItem.discount_value}}</small>
              </template>
           </b-card>
        </b-card-group>
    </b-col>

    </b-container>
</template>

<script>
export default {
    data() {
      return {
        discountItems: [
        {
            name: "Диагностика подвески",
            discount_value: "Бесплатно",
            img: require('@/assets/tech_obs.svg'),
        },
        {
            name: "Замена масла",
            discount_value: "Бесплатно",
            img: require('@/assets/tech_obs.svg'),
        },
        ]
      }
    }
}
</script>

<style scoped>
.card-img{
width: 70%;
margin: auto;
display: block;
padding: 20px;
}

.card-title{
font-size: 1.05rem;
}

.vitan-card {
cursor: pointer;
max-width: 12rem;
max-height: 13.2rem;
min-width: 12rem;
min-height: 13.2rem;
margin-bottom: 2rem;
}

.card-hover{
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-shadow{
-webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.card-hover::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.3) !important;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.3) !important;
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-hover:hover {
  -webkit-transform: scale(1.05, 1.05);
  transform: scale(1.05, 1.05);
}

.card-hover:hover::after {
    opacity: 1;
}

.card-footer{
background-color: transparent;
border: None;
}

.card-header{
font-weight: 600;
background-color: transparent;
border: None;
}

</style>