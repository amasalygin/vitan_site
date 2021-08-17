<template>
  <b-container class="py-5">
      <b-row>
        <b-col>
          <b-row>
              <b-col>
                  <h1 class="text-center">Услуги</h1>
                  <h6 class="text-muted text-center" style="font-size: 16px">
                      Мы предоставляем широкий спектр услуг по ремонту автомобилей,
                      проведение ТО и диагностике
                      по приемлимым ценам
                  </h6>
              </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <div class="growing-search" style="margin-bottom: 1rem;">
                <div class="input">
                  <input
                    type="text"
                    name="search"
                    class="growing-search"
                    id="search_input"
                    placeholder="Поиск услуги"
                    v-model="searchText"
                    @input="updateSearchList(searchText)"
                  >
                  <button
                  class="growing-search-right-button"
                  @click="setSearchInputFocus()"
                  v-if="searchText == ''">
                    <b-icon icon="search"></b-icon>
                  </button>
                  <button
                  class="growing-search-right-button"
                  style="fontSize: 1.4rem;"
                  @click="resetSearchInput()"
                  v-if="searchText != ''">
                    <b-icon icon="x"></b-icon>
                  </button>
                </div>
              </div>
              <div v-if="listViewType == 'search' && searchListOptions.length == 0">
                <h6 class="text-muted text-center">Упс...Ничего не найдено</h6>
              </div>
              <b-row class="card-container mt-3" v-if="listViewType == 'serviceItem'">
                <div
                  v-for="(serviceItem, i) in servicesItems"
                  :key="i"
                  class="vitan-service-card card-hover card-shadow"
                  @click="selectService(i)"
                  >
                    <div class='vitan-card-content'>
                      <p style="flex-grow: 1" class="card-title">
                        {{serviceItem.name}}
                      </p>

                      <p class="card-text text-muted">
                        {{serviceItem.services.length}} видов услуг
                      </p>
                    </div>
                </div>
              </b-row>
              <b-row v-if="listViewType == 'service'">
                <b-col>
                <div style="display: flex;">
                  <button
                    class="vitan-button"
                    @click="reset()"
                    v-if="listViewType == 'service'">
                      <b-icon icon="chevron-left"></b-icon>
                      Назад
                  </button>
                  <div v-if="selectedIndex >= 0" class="selected-service">
                    <p>{{servicesItems[selectedIndex].name}}</p>
                  </div>
                </div>
                <b-row class="card-container mt-3">
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
                  </b-row>
                </b-col>
              </b-row>
              <b-row v-if="listViewType == 'search'" class="mt-3">
                <b-col>
                <b-row class="card-container mt-3">
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
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="mt-5">
              <b-col fluid class="vitan-block">
                  <b-row>
                      <b-col cols="10">
                          <h2 style="color: #fff">Почему наши услуги
                            <span class="text-highlighted">
                              выгодны
                            </span>
                            ?
                          </h2>
                      </b-col>
                  </b-row>
                  <hr/>
                  <p class="mt-5"
                  style="font-size: 1.4rem; color: #fff; line-height: 1.4;">
                    Наш автосервис выполненяет все виды слесарных работ
                    <span class="text-highlighted">
                      любой
                    </span>
                    сложности, обладая при этом рядом существенных
                    <span class="text-highlighted">
                      приемуществ
                    </span>
                  </p>
              </b-col>
              <b-col class="mt-3">
                  <b-row class="mb-3">
                      <b-img
                        class="vitan-img"
                        :src="timeImg"
                        alt="Responsive image">
                      </b-img>
                      <b-col>
                          <h4 >Время</h4>
                          <p class="text-muted">
                            Оперативная помощь в решении Ваших вопросов
                          </p>
                      </b-col>
                  </b-row>
                  <b-row class="mb-3">
                      <b-img
                        class="vitan-img"
                        :src="devImg"
                        alt="Responsive image">
                      </b-img>
                      <b-col>
                          <h4 >Оборудование</h4>
                          <p class="text-muted">
                            Профессиональное оборудования для диагностики и ремонта
                          </p>
                      </b-col>
                  </b-row>
                  <b-row class="mb-3">
                      <b-img
                      class="vitan-img"
                      :src="storeImg"
                      alt="Responsive image">
                      </b-img>
                      <b-col>
                          <h4 >Запчасти</h4>
                          <p class="text-muted">
                            Вам не нужно искать их по всему городу.
                            Мы сами подберем и привезем всё необходимое.
                          </p>
                      </b-col>
                  </b-row>
                  <b-row class="mb-3">
                      <b-img
                      class="vitan-img"
                      :src="garImg"
                      alt="Responsive image">
                      </b-img>
                      <b-col>
                          <h4 >Гарантия</h4>
                          <p class="text-muted">На все виды выполненных работ</p>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  methods:
    {
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

.growing-search {
  padding: 5px 5px 5px 7px;
  background: #fff;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.growing-search div {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
}

.growing-search .input input {
  width: 100%;
  margin-right: 0;
  border: none;
  font-size: inherit;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 35px;
  color: #ED661A;
  border-bottom: 1px solid #eee;
  -webkit-box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.15) !important;
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.15) !important;
}

.growing-search .input input::placeholder {
  color: rgba(0,0,0, 0.4);
  font-size: 1.2rem;
}

.growing-search .input input:focus{
  -webkit-box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.5) !important;
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.5) !important;
}

.growing-search .input input:hover, .growing-search button:hover {
  cursor: pointer;
}

.growing-search .input input:focus, .growing-search button:focus {
  outline: none;
}

.growing-search button:hover {
  color: #ED661A;
}

.growing-search-right-button {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  margin-left: -35px;
}

.serviceButton {
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  padding: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 2;
  gap: 2rem;
}

.card-container::after {
content: "";
flex: auto;
}

.text-highlighted{
color: #ED661A;
text-shadow: 0px 0px 10px rgb(237,102,26);
}

.vitan-card-content {
  display: flex;
  flex-flow:column
}

.vitan-service-card {
cursor: pointer;
padding: 1rem;
display: flex;
justify-content: space-between;
flex: 1 1 0;
word-break:keep-all;
word-wrap: normal;
min-height: 130px;
max-height: 130px;
}

.card-title{
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0;
}

.card-text{
  font-size: 1rem;
  margin-bottom: 0;
}

.rub {
  line-height: 9px;
  width: 0.4em;
  border-bottom: 1px solid #6c757d;
  display: inline-block;
}

.card-hover{
-webkit-transition: .3s;
transition: 0.3s;
}

.card-shadow{
-webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.card-hover:hover {
  -webkit-box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5) !important;
  background-color: rgba(0,0,0, 0.05);
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

.selected-service {
  border: 1px solid #ED661A;
  color: #ED661A;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: transparent;
  text-transform: uppercase;
  margin: 0.2rem;
  font-size: 1rem;
}

.selected-service p {
  margin-bottom: 0;
}

.vitan-button {
border: none;
color: white;
border-radius: 0.2rem;
padding: 0.5rem;
background-color: rgb(237, 102, 26);
border-color: #ED661A;
text-transform:uppercase;
margin: 0.2rem;
font-size: 1rem;
box-shadow: 0px 0px 5px rgba(237,102,26, 1);
}

.vitan-button:hover{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus:hover{
box-shadow: 0px 0px 10px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active:focus{
box-shadow: 0px 0px 15px rgba(237,102,26, 1);
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
}

@include media-breakpoint-down(xl){
  .vitan-service-card {
    max-width: 358px;
    min-width: 358px;
  }
}

@include media-breakpoint-down(lg){
  .vitan-service-card {
    max-width: 464px;
    min-width: 464px;
  }
}

@include media-breakpoint-down(md){
  .vitan-service-card {
    max-width: 344px;
    min-width: 344px;
  }
}

@include media-breakpoint-down(sm){
  .vitan-service-card {
    max-width: 540px;
    min-width: 540px;
  }
}

@include media-breakpoint-down(xs){
  .vitan-service-card {
    max-width: 340px;
    min-width: 340px;
  }
  .card-container {
    justify-content: center;
  }
  .card-container::after {
    justify-content: center;
    display: none;
  }
}
</style>
