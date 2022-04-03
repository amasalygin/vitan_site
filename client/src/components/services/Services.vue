<template>
  <b-container>
    <div class=main-flex>
      <div style="display: flex; flex-flow:row; justify-content:space-between">
        <h1 class="page-header">Услуги</h1>
        <div style="display: flex; flex-flow:row; align-items: center;">
          <a href="">Посмотреть все
          <b-img
            :src="require('../../assets/right_arrow.svg')"
            width="28"
            height="28"
          >
          </b-img>
          </a>
        </div>
      </div>
      <div class="services-container-flex">
          <!--div class="services-search-container-flex">
            <b-icon icon="search"></b-icon>
            <input
                type="search"
                name="search"
                class="services-search-input"
                id="search_input"
                placeholder="Поиск"
                v-model="searchText"
                @input="updateSearchList(searchText)"
              >
        </div-->

        <div class="card-container" v-if="listViewType == 'serviceItem'">
          <template v-for="(serviceItem, i) in servicesItems">
            <ServiceCard :key="i" :img="serviceItem.img" :name="serviceItem.name"></ServiceCard>
          </template>
        </div>
        <!--div class="card-container" v-if="listViewType == 'service'">
          <div
            v-for="(service, i) in servicesItems[selectedIndex].services"
            :key="i"
            class="vitan-service-card card-hover card-shadow"
            >
              <div class='vitan-card-content'>
                <p style="flex-grow: 1" class="card-title">
                  {{service.name}}
                </p>

                <p class="card-text text-muted">
                  от {{service.price}} <span class="rub">Р</span>
                </p>
              </div>
          </div>
        </div>
        <div class="card-container" v-if="listViewType == 'search'">
          <div
            v-for="(service, i) in searchListOptions"
            :key="i"
            class="vitan-service-card card-hover card-shadow"
            >
              <div class='vitan-card-content'>
                <p style="flex-grow: 1" class="card-title">
                  {{service.name}}
                </p>

                <p class="card-text text-muted">
                  от {{service.price}} <span class="rub">Р</span>
                </p>
              </div>
          </div>
        </div>
      </div!-->
    <!--div class="adv-flex">
      <div class=banner-container>
        <div class="adv-banner-header">
            <h2>Почему наши услуги
              <span class="text-highlighted">выгодны</span> ?
            </h2>
        </div>
        <div class="banner-content">
            <p>Наш автосервис выполненяет все виды слесарных работ
              любой сложности, обладая при этом рядом существенных
              приемуществ
            </p>
            <p>Сотни довольных клиентов, приемлимые цены и коллектив
              профессионалов
            </p>
        </div>
      </div>
      <div class="adv-column-flex">
          <div class="adv-column-content">
              <b-img
                class="vitan-img"
                :src="timeImg"
                alt="Responsive image">
              </b-img>
              <div class="column-flex">
                  <h4 >Время</h4>
                  <p class="text-muted">
                    Оперативная помощь в решении Ваших вопросов
                  </p>
              </div>
          </div>
          <div class="adv-column-content">
              <b-img
                class="vitan-img"
                :src="devImg"
                alt="Responsive image">
              </b-img>
              <div class="column-flex">
                  <h4 >Оборудование</h4>
                  <p class="text-muted">
                    Профессиональное оборудования для диагностики и ремонта
                  </p>
              </div>
          </div>
          <div class="adv-column-content">
              <b-img
                class="vitan-img"
                :src="storeImg"
                alt="Responsive image">
              </b-img>
              <div class="column-flex">
                  <h4 >Запчасти</h4>
                  <p class="text-muted">
                    Вам не нужно искать их по всему городу.
                    Мы сами подберем и привезем всё необходимое
                  </p>
              </div>
          </div>
          <div class="adv-column-content">
              <b-img
                class="vitan-img"
                :src="garImg"
                alt="Responsive image">
              </b-img>
              <div class="column-flex">
                  <h4 >Гарантия</h4>
                  <p class="text-muted">
                    На все виды выполненных работ
                  </p>
              </div>
          </div>
      </div!-->
    </div>
  </div>
  </b-container>
</template>

<script>
import ServiceCard from '@/components/services/ServiceCard.vue';

export default {
  components: {
    ServiceCard,
  },
  methods:
    {
      scrollToServicesTop() {
        this.$refs.servicesTop.scrollIntoView();
      },
      setSearchInputFocus() {
        document.getElementById('search_input').focus();
      },
      resetSearchInput() {
        this.searchText = '';
        this.updateSearchList(this.searchText);
      },
      selectService(index) {
        this.selectedIndex = index;
        this.listViewType = 'service';
      },
      reset() {
        this.selectedIndex = -1;
        this.listViewType = 'serviceItem';
      },
      updateSearchList(search) {
        var searchLower = search.toLowerCase(); // eslint-disable-line
        if (this.prevSearchText === searchLower) {
          return;
        }
        this.searchListOptions.splice(0, this.searchListOptions.length);
        if (searchLower !== '') {
          this.listViewType = 'search';
          for (var i = 0; i < this.servicesItems.length; i++) { // eslint-disable-line
            for (var j = 0; j < this.servicesItems[i].services.length; j++) { // eslint-disable-line
              var serviceName = this.servicesItems[i].services[j].name.toLowerCase(); // eslint-disable-line
              if (serviceName.includes(searchLower)) {
                this.searchListOptions.push(this.servicesItems[i].services[j]); // eslint-disable-line
              }
            }
          }
        } // eslint-disable-line
        else {
          this.listViewType = 'serviceItem';
        }
        this.prevSearchText = searchLower; // eslint-disable-line
      },
    },
  data() {
    return {
      searchText: '',
      prevSearchText: '',
      searchListOptions: [],
      timeImg: require('@/assets/time.svg'), // eslint-disable-line global-require
      storeImg: require('@/assets/store.svg'), // eslint-disable-line global-require
      devImg: require('@/assets/oborud.svg'), // eslint-disable-line global-require
      garImg: require('@/assets/warranty.svg'), // eslint-disable-line global-require
      fields: [
        { key: 'name', label: 'Услуга' },
        { key: 'price', label: 'Цена' },
      ],
      isShow: false,
      listViewType: 'serviceItem',
      selectedIndex: -1,
      servicesItems: [
        {
          name: 'Техобслуживание',
          selected: false,
          img: require('@/assets/tech_obs.svg'), // eslint-disable-line global-require
          services: [
            {
              name: 'Комплексная диагностика + замена масла двс',
              price: '1000',
            },
            {
              name: 'Замена ремня ГРМ',
              price: '2000',
            },
            {
              name: 'Замена приводного ремня',
              price: '800',
            },
            {
              name: 'Замена охлаждающей жидкости',
              price: '1000',
            },
            {
              name: 'Замена масла акпп',
              price: '2500',
            },
            {
              name: 'Замена масла мкпп',
              price: '500',
            },
            {
              name: 'Замена топливного фильтра погружного',
              price: '1500',
            },
            {
              name: 'Замена топливного фильтра',
              price: '600',
            },
            {
              name: 'Замена свечей зажигания',
              price: '600',
            },
            {
              name: 'Замена фильтра салона',
              price: '400',
            },
            {
              name: 'Замена воздушного фильтра',
              price: '400',
            },
          ],
        },
        {
          name: 'Подвеска',
          selected: false,
          img: require('@/assets/car_susp.svg'), // eslint-disable-line global-require
          services: [
            {
              name: 'Замена сайлентблоков',
              price: '1000',
            },
            {
              name: 'Замена аммортизаторов',
              price: '1000',
            },
            {
              name: 'Замена рычага подвески',
              price: '800',
            },
            {
              name: 'Замена подшипника ступицы',
              price: '1000',
            },
            {
              name: 'Замена шаровой опоры',
              price: '400',
            },
            {
              name: 'Замена стоек стабилизатора',
              price: '400',
            },
            {
              name: 'Замена рулевых наконечников',
              price: '400',
            },
          ],
        },
        {
          name: 'Тормозная система',
          selected: false,
          img: require('@/assets/car_breaks.svg'), // eslint-disable-line global-require
          services: [
            {
              name: 'Замена тормозных шлангов (шт)',
              price: '400',
            },
            {
              name: 'Ремонт заднего суппорта тормозов',
              price: '1000',
            },
            {
              name: 'Замена заднего суппорта тормозов',
              price: '800',
            },
            {
              name: 'Ремонт переднего суппорта тормозов',
              price: '600',
            },
            {
              name: 'Замена переднего суппорта тормозов',
              price: '600',
            },
            {
              name: 'Прокачка тормозной системы',
              price: '500',
            },
            {
              name: 'Замена тормозной жидкости',
              price: '600',
            },
            {
              name: 'Замена задних тормозных барабанов (с колодками)',
              price: '1000',
            },
            {
              name: 'Замена задних тормозных дисков (с колодками)',
              price: '1800',
            },
            {
              name: 'Замена передних тормозных дисков (с колодками)',
              price: '1500',
            },
            {
              name: 'Замена задних колодок (дискового типа)',
              price: '600',
            },
            {
              name: 'Замена задних колодок (барабанного типа)',
              price: '1000',
            },
          ],
        },
        {
          name: 'Трансмиссия',
          selected: false,
          img: require('@/assets/car_susp.svg'), // eslint-disable-line global-require
          services: [
            {
              name: 'С/У АКПП',
              price: '7000',
            },
            {
              name: 'С/У МКПП',
              price: '3500',
            },
            {
              name: 'Замена сцепления',
              price: '4000',
            },
            {
              name: 'Замена внутреннего ШРУС-а',
              price: '1200',
            },
            {
              name: 'Замена наружного ШРУС-а',
              price: '1000',
            },
            {
              name: 'Замена сальника приводного вала',
              price: '1000',
            },
          ],
        },
        {
          name: 'ДВС',
          selected: false,
          img: require('@/assets/car_engine.svg'), // eslint-disable-line global-require
          services: [
            {
              name: 'С/У ДВС',
              price: '10000',
            },
            {
              name: 'Замена прокладки крышки клапанов',
              price: '1000',
            },
            {
              name: 'С/У головки блока цилиндров',
              price: '6000',
            },
            {
              name: 'С/У маслянного картера',
              price: '1000',
            },
            {
              name: 'С/У впускного коллектора',
              price: '1500',
            },
            {
              name: 'Замена генератора',
              price: '1500',
            },
            {
              name: 'Замена стартера',
              price: '1200',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
a{
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 500;
  color: #000a12 !important;
}

a:hover{
  color: #000a12 !important;
  text-decoration: none !important;
}

.service-buttons-flex{
  display: block;
}
.services-row{
  margin-top: 2rem;
}

.banner-container {
  display: flex;
  flex-flow: column;
  padding: 3rem;
  gap: 5rem;
  background-color: #000a12;
  image-resolution: 0.2;
  -webkit-box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
  box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
  max-width: 60%;
}

.banner-content{
  display: flex;
  flex-flow: column;
  gap: 1rem;
  p{
    font-family: 'Montserrat';
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--light);
  }
}

.adv-banner-header{
    display: flex;
    flex-flow: column;

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--light);
        text-transform:uppercase;
    }
}

.adv-flex{
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.adv-column-flex{
  display: flex;
  flex-flow: column;
  gap: 2rem;
}

.adv-column-content{
  display: flex;
  gap: 1rem;
}

.services-container-flex{
  display: flex;
  flex-flow: column;
  gap: 2rem;
}

.services-search-container-flex{
  display: flex;
  padding: 0.5rem;
  padding-left: 1rem;
  gap: 0.5rem;
  .b-icon{
    align-self: center;
    font-size: 1.5rem;
  }
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.services-search-input{
border: none;
outline: none;
background-color: transparent;
padding: 0.5rem;
font-size: 1.5rem;
width: 100%;
color: #ED661A;
}

.services-search-flex{
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.serviceButton {
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  padding: 10px;
}

.text-highlighted{
color: #ED661A;
text-shadow: 0px 0px 10px rgb(237,102,26);
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
  padding: 1.5rem;
  margin-top: 2rem;
  transition: 0.3s;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.list-group-item:hover{
  -webkit-box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  background-color: rgba(0,0,0, 0.05);
}

.list-group-item.active{
  background-color: #000;
  color: #fff;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.7) !important;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.7) !important;
}

.list-group-item + .list-group-item.active{
  margin-top: 1rem;
}

@include media-breakpoint-down(md){
  .adv-flex{
    flex-flow: column;
    margin-top: 1rem;
  }

  .banner-container{
    max-width: 100%;
  }
}

@include media-breakpoint-down(sm){
  a{
    font-size: 14px;
  }
}

@include media-breakpoint-down(xs){
  .services-search-container-flex{
    padding: 0.3rem;
    padding-left: 0.5rem;
    .b-icon{
      font-size: 1rem;
    }
  }

  .services-search-input{
  padding: 0.3rem;
  font-size: 1.2rem;
  }

  .services-search-flex{
    gap: 0.5rem;
  }
  .services-row{
    margin-top: 0rem;
  }
  .vitan-service-card {
    max-width: 100%;
    min-width: 100%;
  }
  .adv-banner-header{
    h2{
      font-size: 1.4rem;
    }
  }
  .banner-container{
    gap: 2rem;
    padding: 2rem;
  }
  .banner-content{
    p{
      font-size: 1rem;
    }
  }
  .adv-column-content{
    .column-flex{
      h4{
        font-size: 1.2rem;
      }
      p{
        font-size: 0.9rem;
      }
    }
  }
}
</style>
