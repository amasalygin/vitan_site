<template>
    <b-container class="py-5">
        <b-col>
            <b-row>
                <b-col>
                    <h1 class="text-center">Цены на услуги</h1>
                    <p class="text-muted text-center" style="font-size: 16px">
                            Окончательная стоимость работ зависит от сложности и состояния конструктивных деталей автомобиля
                    </p>
                </b-col>
            </b-row>
            <b-row class="serivces-block mt-5" fluid>
                <b-list-group class="servies-list desktop no-borders">
                    <b-list-group-item class="list-title disabled">Вид</b-list-group-item>
                    <b-list-group-item
                        v-for="(serviceItem, i) in servicesItems"
                        :key="i"
                        button
                        :active="serviceItem.selected"
                        @click="selectService(i)"
                        class="no-borders"
                    >
                    <div class="d-flex w-100">
                        <span class="icon icon-break"/>
                        <p style="margin:0;">{{serviceItem.name}}</p>
                    </div>
                    </b-list-group-item>
                </b-list-group>
                <b-list-group class="service-items-list desktop no-borders" fluid>
                    <b-list-group-item class="list-title disabled">
                        <div class="d-flex w-100 justify-content-between">
                            <p style="margin:0;">Услуга</p>
                            <p style="margin:0;">Стоимость</p>
                        </div>
                    </b-list-group-item>
                    <b-list-group-item
                        v-for="(service, i) in servicesItems[selectedIndex].services"
                        :key="i"
                        class="no-borders"
                        button
                    >
                         <div class="d-flex w-100 justify-content-between">
                            <p style="margin:0;">{{service.name}}</p>
                            <p style="margin:0;">{{service.price}}</p>
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </b-row>
        </b-col>    
    </b-container>
</template>      

<script>
export default {
    methods: {
        selectService(index) {
            if (index == this.selectedIndex){
                return
            }

            this.servicesItems = this.servicesItems.map((item, i) => {
            item.selected = !item.selected
            if (i !== index) {
              item.selected = false
            }
            return item
          })
          this.selectedIndex = index
       }
    },
    data() {
        return {
            selectedIndex: 0,
            servicesItems: [
            {
                name: "Техобслуживание",
                selected: true,
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


<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.serivces-block{
    -webkit-box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
  box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
    background-color: #000;
}

.no-borders{
    border:none;
    border-radius: 0;
}

.list-group{
    border: none;
    background-color: rgba(0,0,0,0);
}

.list-group-item{
    border: none;
    border-radius: 0;
    background-color: rgba(0,0,0,0);
    color: #fff;
    padding: 20px;
    
    .icon{
        fill: #fff;
    }
}

.list-group-item.disabled{
    border: none;
    border-radius: 0;
    background-color: rgba(0,0,0,0);
    color:rgba(237,102,26, 1);
    padding: 20px;
}

.list-title{
    border: none;
    border-radius: 0;
    background-color: rgba(0,0,0,0);
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
    text-shadow: 0px 0px 20px rgb(237,102,26);
}

.list-title:hover{
    border: none;
    border-radius: 0;
    background-color: rgba(0,0,0,0);
    color: #fff;
    padding: 20px;
    text-align: center;
}

.list-group-item:hover{
    background-color: rgba(237,102,26, 1);
    color: #000;
    
    .icon{
        fill: #000;
    }
}

.list-group > .active{
    background-color: #ED661A;
    color: #000;

    .icon{
        fill: #000;
    }
}

.servies-list{
    width: 30%
}
.service-items-list{
    width: 70%
}

.desktop {
  display: flex;
}

.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: cover;
}

.icon-break {
  mask: url('~@/assets/break.svg');
}

@include media-breakpoint-down(sm) {
  .desktop {
    display: none;
  }
}
</style>