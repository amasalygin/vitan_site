<template>
    <div class="main-wrapper" v-bind:class="{'min-state': isMinState}">
      <div
      ref="searchWrapper"
      id="search-wrapper"
      class="search-wrapper"
      @click="searchFocusIn"
      v-click-outside="searchFocusOut"
      >
          <input
              type="text"
              ref="searchInput"
              class="input black"
              :placeholder="'Поиск услуги'"
              v-model="inputText"
          >
      </div>
    <div ref="dropdown" class="services-dropdown">
        <div v-if="Object.keys( filteredServices ).length != 0">
            <template v-for="(services, name) in filteredServices">
                <div class="section" :key="name">
                    <p class="section-header"> {{name}}</p>
                    <div class="section-items">
                        <template v-for="(serviceType, i) in services">
                            <div
                                :key="i"
                                v-bind:class="{ hovered: hoveredName == serviceType.name }"
                                class="section-item-container"
                                @mouseover="hoveredName = serviceType.name"
                                @mouseleave="hoveredName = ''"
                                @click="routeToService(
                                    {tag: serviceType.tag, name: serviceType.index}
                                )"
                            >
                                <p class="section-item" >{{serviceType.name}}</p>
                                <b-img
                                    class="image"
                                    :src="require('@/assets/right_arrow.png')"
                                    alt="Responsive image">
                                </b-img>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
        <div v-if="Object.keys( filteredServices ).length == 0">
            <div class="section">
                <p class="section-header">Упс...Ничего не найдено</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ServicesJson from '../../static/services.json';
export default {
  props: ['isMinState'],
  data() {
    return {
      inputText: '',
      servicesJson: ServicesJson,
      filteredServices: {},
      hoveredName: false,
      inputFocused: false,
    };
  },
  methods:
  {
    routeToService(routeParams) {
      this.$router.push({
        name: 'serviceEnroll',
        params: routeParams,
      });
    },
    searchFocusIn() {
      const search = this.$refs.searchInput;
      const searchWrapper = this.$refs.searchWrapper;
      const dropdown = this.$refs.dropdown;

      search.focus();
      this.inputFocused = true;
      if(!searchWrapper.className.includes("focusIn")) {
          searchWrapper.className += " focusIn"
      }
      dropdown.setAttribute('class', 'services-dropdown shown');
      this.$emit('focus', true);
    },
    searchFocusOut() {
      const search = this.$refs.searchInput;

      if(!this.inputFocused) {
        return;
      }

      search.blur();
      const searchWrapper = this.$refs.searchWrapper;
      const dropdown = this.$refs.dropdown;
      searchWrapper.className = searchWrapper.className.replace(" focusIn", '');
      dropdown.setAttribute('class', 'services-dropdown');
      this.$emit('focus', false);
    },
  },
  watch: {
    inputText: function(val, oldVal) {
        const searchWrapper = this.$refs.searchWrapper;
        if(val.length > 0 && !searchWrapper.className.includes("has-text")) {
          searchWrapper.className += " has-text"
        }
        else if (val.length == 0){
          searchWrapper.className = searchWrapper.className.replace(' has-text','');
        }
        this.filteredServices = {}

        for (var i in this.servicesJson) {
            var serviceItem = this.servicesJson[i];
            for (var j in serviceItem.services) {
                var serviceType = serviceItem.services[j]
                var typeNameLower = serviceType.name.toLowerCase();
                var searchLower = val.toLowerCase();
                if(typeNameLower.includes(searchLower)) {
                    if (!this.filteredServices.hasOwnProperty(serviceItem.name)) {
                        this.filteredServices[serviceItem.name] = []
                    }

                    this.filteredServices[serviceItem.name].push({
                        'name': serviceType.name,
                        'tag': serviceItem.tag,
                        'index': j,
                    })
                }
            }
        }
    },
  },
  mounted() {
      this.filteredServices = {}
      for (var i in this.servicesJson) {
          var serviceItem = this.servicesJson[i];
          this.filteredServices[serviceItem.name] = [
              {
                'name': serviceItem.services[0].name,
                'tag': serviceItem.tag,
                'index': 0
              },
              {
                'name': serviceItem.services[1].name,
                'tag': serviceItem.tag,
                'index': 1
              }
            ] 
      }
  }
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.hovered{
  box-shadow: 0px 0px 15px rgba(0, 10, 18, 0.10) !important;
}

.input {
  -webkit-transition-property: padding, background-color; 
  -webkit-transition-duration: 0.15s;
  -webkit-transition-timing-function: ease-out;

  -moz-transition-property: padding, background-color; 
  -moz-transition-duration: 0.15s;
  -moz-transition-timing-function: ease-out;

  transition-property: padding, background-color; 
  transition-duration: 0.15s;
  transition-timing-function: ease-out;
  
  border-radius: 13px !important;
  border: none !important;

  padding-top: 11px !important;
  padding-bottom: 11px !important;
  
  font-size: 16px !important;
  width: 400px;

  background-color: rgba($color: #000a12, $alpha: 0.04) !important;
}

.input::placeholder{
  font-size: 13px !important;
  opacity: 1;
  color: #000a12;
}

.input:not(:placeholder-shown){
  padding-left:1rem;
}

.search-wrapper{
  position: relative;
  width: 100%;

  -webkit-transition-property: all; 
  -webkit-transition-duration: 0.15s;
  -webkit-transition-delay: 0.3s;
  -webkit-transition-timing-function: ease-out;

  -moz-transition-property: all; 
  -moz-transition-duration: 0.15s;
  -moz-transition-delay: 0.3s;
  -moz-transition-timing-function: ease-out;

  transition-property: all; 
  transition-duration: 0.15s;
  transition-delay: 0.3s;
  transition-timing-function: ease-out;
}

.search-wrapper::after{
  content: " ";
  z-index: 2;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 50px;
  height: 100%;
  opacity: 0.5;
  background: url('~@/assets/search.png') no-repeat scroll 16px 14px;
  background-size: 1.2rem;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.search-wrapper.focusIn{
  .input{
    padding-left:1rem;
    background-color: rgba($color: #000a12, $alpha: 0.8) !important;
    color: #fff;
  }

  .input::placeholder{
    color: #fff;
    opacity: 0.5;
  }
}

.search-wrapper.focusIn::after{
  opacity: 0;
  left: -15px;
}

.min-state{
  .input{
    width: 0;
    background-color: transparent !important;
  }

  .search-wrapper{
    transition-delay: 0.0s;
    transition-duration: 0.0s;
  }

  .has-text::after{
    display: block !important;
  }
}

.has-text::after{
  display: none !important;
}

.services-dropdown{
    position: fixed;
    display: flex;
    overflow:scroll;
    overflow-x: hidden;
    flex-flow: column;
    width: 0px;
    top: -3000px;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 10, 18, 0.15);
    transition-property: width, padding;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
    transition-delay: 0.25s;
    gap: 1rem;
    padding: 0rem;

    .section{
        transition-property: opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
        transition-delay: 0s;
        opacity: 0;
    }
}

.services-dropdown.shown{
    top: 60px;
    width: 500px;
    height: 500px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    transition-delay: 0s;

    .section{
        opacity: 1;
        transition-delay: 0.25s;
    }
}

.section{
    padding-top: 1rem;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;

    .section-header {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 0.8rem;
        margin-bottom: 0;
        padding-bottom: 0;
        opacity: 0.5;
        color: #000a12;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .section-items{
        display: flex;
        flex-flow: column;

        .section-item-container{
            padding-left: 1rem;
            padding-right: 1rem;
            border-radius: 0.5rem;
            display: flex;
            flex-flow: row;
            height: 42px;
            align-items: center;
            .section-item{
                text-align: middle;
                width: 100%;
                color: #000a12;
                font-family: 'Montserrat';
                font-weight: 500;
                font-size: 0.8rem;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            .image{
                align-self: center;
                width: 12px;
                height: 12px;
                align-self: center;
                object-fit: contain;
            }
        }
    }
}


@include media-breakpoint-down(md){
  .input{
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    width: 100%;
  }

  .services-dropdown.shown{
    width: 90%;
    top: 70px;
    height: 300px;
  }

  .search-wrapper{
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 0.25s;
    transition-delay: 0.0s;
  }
  
  .search-wrapper::after{
    content: " ";
    z-index: 2;
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 50px;
    height: 100%;
    opacity: 0.5;
    background: url('~@/assets/search.png') no-repeat scroll 16px 10px;
    background-size: 1.2rem;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
}
</style>
