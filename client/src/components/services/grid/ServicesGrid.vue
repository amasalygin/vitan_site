<template>
    <div class=main-flex>
      <div style="display: flex; flex-flow:row; justify-content:space-between">
        <h1 class="page-header">Услуги</h1>
        <div style="display: flex; flex-flow:row; align-items: center;">
          <router-link to="/services">Посмотреть все
            <b-img
            :src="require('../../../assets/right_arrow.svg')"
            width="28"
            height="28"
          >
          </b-img>
          </router-link>
        </div>
      </div>
      <div class="services-container-flex">
        <div class="card-container">
          <template v-for="(serviceItem, i) in services">
            <ServiceCard
              :key="i"
              :data="serviceItem"
              :index="i"
              :routeName="'service'"
              :routeParams="{ tag: serviceItem.tag}">
            </ServiceCard>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from '@/components/services/grid/ServiceCard.vue';

export default {
  props: ['services'],
  components: {
    ServiceCard,
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
