<template>
    <div class="legends-wrapper" ref="container">
        <div
          class="home-icon-wrapper"
          @mouseover="isHovering = true"
          @mouseout="isHovering = false"
          v-on:click="routeToService"
          v-bind:class="{ hovering: isHovering }"
        >
            <b-img
                :src="require('@/assets/garage.png')"
                alt="Responsive image">
            </b-img>
        </div>
          <template v-for="(legend, i) in legends">
              <LegendItem
                :key="i"
                :name="legend.name"
                :highlighted="legend.isCurrent"
                :isBackward="(i + 1) < legends.length"
                :routeName="legend.routeName"
                />
          </template>
    </div>
</template>

<script>
import LegendItem from '@/components/legend/LegendItem.vue';
import ServicesJson from '../../static/services.json';

/* eslint-disable */
export default {
  components: {
    LegendItem
  },
  methods: {
    routeToService() {
      this.$router.push({name: "home"});
    },
  },
  data() {
    return {
      legends: [],
      servicesList: ServicesJson,
      isHovering: false,
    };
  },
  updated() {
      var container = this.$refs.container;
      container.scrollLeft = container.scrollWidth;
  },
  mounted() {
    for (const [routeName, params] of Object.entries(this.$route.meta)) {
      if (routeName == "category")
      {
        let serviceItem = {}
        for (const [key, value] of Object.entries(this.servicesList)) {
          if (value.tag === this.$route.params.tag) {
            serviceItem = value;
            break;
          }
        }
        
        this.legends.push({
          name: serviceItem.name, 
          isCurrent: params.isCurrent,
          routeName: routeName,
        });
      }
      else if (routeName == "service")
      {
        let serviceItem = {};
        for (const [key, value] of Object.entries(this.servicesList)) {
          if (value.tag === this.$route.params.tag) {
            serviceItem = value;
            break;
          }
        }
        
        this.legends.push({
          name: serviceItem.services[this.$route.params.name].name, 
          isCurrent: params.isCurrent,
          routeName: routeName,
        });
      }
      else{
        this.legends.push({
          name: params.displayName, 
          isCurrent: params.isCurrent,
          routeName: routeName,
        });
      }
    }

    var container = this.$refs.container;
    container.scrollLeft = container.scrollWidth;
    console.log(container.scrollLeft);
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.legends-wrapper{
  display: flex;
  flex-flow: row;
  gap: 5px;
  overflow: auto;
  padding: 5px;
  margin: -5px;
  background-color: rgba($color: #000a12, $alpha: 0.04);
  border-radius: 11px;
}

.legends-wrapper::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

img{
  width: 24px;
  height: 24px;
}

.home-icon-wrapper{
  padding: 4px;
  padding-left: 19px;
  padding-right: 19px;;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1.5px solid rgba($color: #000a12, $alpha: 0.75);
  border-radius: 7px;
  border: 0.5px solid rgba(0, 10, 18, 0.04);
  //box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
}

.hovering{
  background-color: #fff;
}

@include media-breakpoint-down(md){
  img{
  width: 20px;
  height: 20px;
}
}
</style>
