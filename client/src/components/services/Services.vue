<template>
        <b-container class="py-5">
            <b-col>
                <b-row>
                    <b-col>
                        <h1 class="text-center">Услуги</h1>
                        <p class="text-muted text-center" style="font-size: 16px">
                            Мы предоставляем широкий спектр услуг по ремонту автомобилей, проведение ТО и диагностика
                            по приемлимым ценам.
                        </p>
                    </b-col>
                </b-row>
                <b-card-group deck class="mt-5 mb-5">
                  <b-card
                    no-body
                    v-for="(serviceItem, i) in servicesItems"
                    :key="i"
                    img-alt="Image"
                    :img-src="serviceItem.img"
                    img-height="92"
                    img-width="92"
                    img-top
                    class="vitan-service-card card-shadow card-hover mx-auto">
                    <b-card-body class="mt-2">
                        <b-card-text>{{serviceItem.name}}</b-card-text>
                    </b-card-body>
                    <b-card-body>
                        <b-card-sub-title><small>{{serviceItem.services.length}} видов услуг</small></b-card-sub-title>
                    </b-card-body>
                    <b-card-footer>
                        <a href="#" class="card-link">
                            <small>Узнать цены <b-icon icon="chevron-right"></b-icon></small>  
                        </a>
                    </b-card-footer>
                   </b-card>
                </b-card-group>
                <b-row class="mt-5">
                    <b-col fluid class="vitan-block">
                        <b-row>
                            <b-col cols="10">
                                <h2 style="color: #fff">Почему наши услуги <span style="color: #ED661A; text-shadow: 0px 0px 10px rgb(237,102,26);" >выгодны</span></h2>
                            </b-col>
                            <b-col cols="2">
                                <p text-align="right" class="h1" style="font-size: 4rem; color: #ED661A; text-shadow: 0px 0px 20px rgb(237,102,26);">?</p>
                            </b-col>
                        </b-row>
                        <hr/>
                        <p class="mt-5" style="font-size: 1.4rem; color: #fff; line-height: 1.4;">Наш автосервис выполненяет все виды слесарных работ <span style="color: #ED661A; text-shadow: 0px 0px 10px rgb(237,102,26);" >любой</span> сложности, обладая при этом рядом существенных <span style="color: #ED661A; text-shadow: 0px 0px 10px rgb(237,102,26);" >приемуществ</span></p>
                    </b-col>
                    <b-col class="mt-3">
                        <b-row class="mb-3">
                            <b-img class="vitan-img" :src="timeImg" alt="Responsive image"></b-img>
                            <b-col>
                                <h4 >Время</h4>
                                <p class="text-muted">Оперативная помощь в решении Ваших вопросов</p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-3">
                            <b-img class="vitan-img" :src="devImg" alt="Responsive image"></b-img>
                            <b-col>
                                <h4 >Оборудование</h4>
                                <p class="text-muted">Профессиональное оборудования для диагностики и ремонта</p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-3">
                            <b-img class="vitan-img" :src="storeImg" alt="Responsive image"></b-img>
                            <b-col>
                                <h4 >Запчасти</h4>
                                <p class="text-muted">Вам не нужно искать их по всему городу Мы сами подберем и привезем всё необходимое.</p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-3">
                            <b-img class="vitan-img" :src="garImg" alt="Responsive image"></b-img>
                            <b-col>
                                <h4 >Гарантия</h4>
                                <p class="text-muted">На все виды выполненных работ</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-container>
</template>

<script>
export default {
    methods :
    {
       selectService(index) {
            this.servicesItems = this.servicesItems.map((item, i) => {
            item.selected = !item.selected
            if (i !== index) {
              item.selected = false
            }
            return item
          })

          if (this.selectedIndex === index) {
            this.selectedIndex = -1
            if (this.isShow === true) {
                this.$root.$emit('bv::toggle::collapse', 'services-list')
                this.isShow = false
            }
          }
          else {
            this.selectedIndex = index
            if (this.isShow === false) {
                this.$root.$emit('bv::toggle::collapse', 'services-list')
                this.isShow = true
            }
          }

       }
    },
    data() {
      return {
        timeImg: require('@/assets/time.svg'),
        storeImg: require('@/assets/store.svg'),
        devImg: require('@/assets/oborud.svg'),
        garImg: require('@/assets/warranty.svg'),
        fields: [
            { key: 'name', label: 'Услуга' },
            { key: 'price', label: 'Цена' },
        ],
        isShow: false,
        selectedIndex: -1,
        servicesItems: [
        {
            name: "Техобслуживание",
            selected: false,
            img: require('@/assets/tech_obs.svg'),
            services : [
                {
                    name: "Комплексная диагностика автомобиля+замена масла двс",
                    price: "1000"
                },
                {
                    name: "Замена ремня ГРМ",
                    price: "2000"
                },
                {
                    name: "Замена приводного ремня",
                    price: "800"
                },
                {
                    name: "Замена охлаждающей жидкости",
                    price: "1000"
                },
                {
                    name: "Замена масла акпп",
                    price: "2500"
                },
                {
                    name: "Замена масла мкпп",
                    price: "500"
                },
                {
                    name: "Замена топливного фильтра погружного",
                    price: "1500"
                },
                {
                    name: "Замена топливного фильтра",
                    price: "600"
                },
                {
                    name: "Замена свечей зажигания",
                    price: "600"
                },
                {
                    name: "Замена фильтра салона",
                    price: "400"
                },
                {
                    name: "Замена воздушного фильтра",
                    price: "400"
                }
            ]
        },
        {
            name: "Подвеска",
            selected: false,
            img: require('@/assets/car_susp.svg'),
            services : [
                {
                    name: "Замена сайлентблоков",
                    price: "1000"
                },
                {
                    name: "Замена аммортизаторов",
                    price: "1000"
                },
                {
                    name: "Замена рычага подвески",
                    price: "800"
                },
                {
                    name: "Замена подшипника ступицы",
                    price: "1000"
                },
                {
                    name: "Замена шаровой опоры",
                    price: "400"
                },
                {
                    name: "Замена стоек стабилизатора",
                    price: "400"
                },
                {
                    name: "Замена рулевых наконечников",
                    price: "400"
                },
            ]
        },
        {
            name: "Тормозная система",
            selected: false,
            img: require('@/assets/car_breaks.svg'),
            services : [
                {
                    name: "Замена тормозных шлангов (шт)",
                    price: "400"
                },
                {
                    name: "Ремонт заднего суппорта тормозов",
                    price: "1000"
                },
                {
                    name: "Замена заднего суппорта тормозов",
                    price: "800"
                },
                {
                    name: "Ремонт переднего суппорта тормозов",
                    price: "600"
                },
                {
                    name: "Замена переднего суппорта тормозов",
                    price: "600"
                },
                {
                    name: "Прокачка тормозной системы",
                    price: "500"
                },
                {
                    name: "Замена тормозной жидкости",
                    price: "600"
                },
                {
                    name: "Замена задних тормозных барабанов (с колодками)",
                    price: "1000"
                },
                {
                    name: "Замена задних тормозных дисков (с колодками)",
                    price: "1800"
                },
                {
                    name: "Замена передних тормозных дисков (с колодками)",
                    price: "1500"
                },
                {
                    name: "Замена задних колодок (дискового типа)",
                    price: "600"
                },
                {
                    name: "Замена задних колодок (барабанного типа)",
                    price: "1000"
                },
            ]
        },
        {
            name: "Трансмиссия",
            selected: false,
            img: require('@/assets/car_susp.svg'),
            services : [
                {
                    name: "С/У АКПП",
                    price: "7000"
                },
                {
                    name: "С/У МКПП",
                    price: "3500"
                },
                {
                    name: "Замена сцепления",
                    price: "4000"
                },
                {
                    name: "Замена внутреннего ШРУС-а",
                    price: "1200"
                },
                {
                    name: "Замена наружного ШРУС-а",
                    price: "1000"
                },
                {
                    name: "Замена сальника приводного вала",
                    price: "1000"
                },
            ]
        },
        {
            name: "ДВС",
            selected: false,
            img: require('@/assets/car_engine.svg'),
            services : [
                {
                    name: "С/У ДВС",
                    price: "10000"
                },
                {
                    name: "Замена прокладки крышки клапанов",
                    price: "1000"
                },
                {
                    name: "С/У головки блока цилиндров",
                    price: "6000"
                },
                {
                    name: "С/У маслянного картера",
                    price: "1000"
                },
                {
                    name: "С/У впускного коллектора",
                    price: "1500"
                },
                {
                    name: "Замена генератора",
                    price: "1500"
                },
                {
                    name: "Замена стартера",
                    price: "1200"
                },
            ]
        },
        ]
      }
    }
}
</script>

<style scoped>

.card-title{
font-size: 1rem;
}

.card-img-top{
margin-top: 2rem;
}

.card-body{
padding-top: 0rem;
padding-bottom: 0rem;
}

.vitan-service-card {
cursor: pointer;
max-width: 13.5rem;
max-height: 15.2rem;
min-width: 13.5rem;
min-height: 15.2rem;
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
}

.card-header{
font-weight: 600;
background-color: transparent;
border: None;
}

.card-link{
    color: #ED661A;
    text-transform: uppercase;
}

.p-price {
font-size: 16px;
font-weight: 700;
color: #ED661A;
margin-bottom: 0px;
padding-left: 5rem;
}

.p-price::after{
content: " Р";
line-height: 5px;
width: 0.4em;
border-bottom: 1.5px solid #ED661A;
margin-left: 3px;
display: inline-block;
}

h1::first-letter {
  color: #ED661A;;
}

hr {
     box-shadow: 0px 0px 20px rgb(237,102,26);
     background-color: #ED661A;
}

.vitan-block {
    background-color: #000;
    padding:40px; 
    margin-right: 80px;
    -webkit-box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
  box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
}
</style>