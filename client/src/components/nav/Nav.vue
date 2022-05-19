<template>
<div id="navbar" class="nav-container">
  <b-container class="desktop-nav">
  <div class="flex-container column" id="direction">
    <div class="item flex-grow1 flex-container row" style="height: 44px">
      <Brand style="flex-grow: 1"></Brand>
      <div id="navContacts" class="nav-contacts-container">
        <div class="nav-contacts">
          <b-img
            :width="12"
            :height="12"
            :src="require('@/assets/phone.png')"
            alt="Responsive image">
          </b-img>
          <a href="tel:+7 (342) 279 38 36">+7 (342) 279 38 36</a>
        </div>
        <div class="nav-contacts">
          <b-img
              :width="12"
              :height="12"
              :src="require('@/assets/geo.png')"
              alt="Responsive image">
          </b-img>
          <a href="https://yandex.ru/maps/org/avtoservis/72204050185/?ll=56.253990%2C57.952544&z=14"
          >г. Пермь ул. Васильева 8А</a>
        </div>
        <div class="nav-contacts">
          <b-img
              :width="30"
              :src="require('@/assets/instagram.svg')"
              alt="Responsive image">
          </b-img>
          <b-img
              :width="30"
              :src="require('@/assets/vk.svg')"
              alt="Responsive image">
          </b-img>
        </div>
      </div>
    </div>
    <div class="item" style="z-index: 100;">
      <div class="search-container">
        <ServiceSearch
          @focus="searchFocusChanged"
          :isMinState="!prevExpanded"
        >
        </ServiceSearch>
        <b-button
            class="vitan-nav-button-outline"
            @mouseover="callHovering = true"
            @mouseout="callHovering = false"
            v-bind:class="{ hovering: callHovering }"
            >
            Записаться на диагностику
        </b-button>
        <b-button
            class="vitan-nav-button-outline"
            @mouseover="pathHovering = true"
            @mouseout="pathHovering = false"
            v-bind:class="{ hovering: pathHovering }"
            >
            Построить маршрут
        </b-button>
      </div>
    </div>
    <div class="item">
      <div id="categories" class="services-categories-container">
        <template v-for="(service, i) in servicesList">
          <ChipItem
            :key="i"
            :name="service.name"
            :isBackward="true"
            :routeName="'category'"
            :routeParams="{tag: service.tag, name: i}"
          />
        </template>
      </div>
    </div>
  </div>
  </b-container>
  <b-container class="mobile-nav">
    <div class="flex-container row" style="flex-wrap: nowrap;">
      <Brand
      v-if="!searchFocused"
      ></Brand>
      <ServiceSearch
        style="flex-grow: 1"
        @focus="searchFocusChanged"
        >
      </ServiceSearch>
      <b-img
          :src="require('@/assets/settings.png')"
          :width="24"
          :height="24"
          @click="$emit('show-modal', 'mobile-menu')"
          alt="Responsive image">
      </b-img>
    </div>
  </b-container>
</div>
</template>

<script>
/* eslint-disable */
import { gsap } from 'gsap';
import Brand from '@/components/shared/Brand.vue';
import ChipItem from '@/components/shared/ChipItem.vue';
import ServicesJson from '../../static/services.json';
import ServiceSearch from '@/components/shared/ServiceSearch.vue'


export default {
  props: ['isExpanded'],
  components: {
    Brand,
    ServiceSearch,
    ChipItem
  },
  methods:
  {
    layout() {
        
      this.dirty = false;

      function ease(progress) {
        var omega  = 12;
        var zeta   = 0.9;
        var beta  = Math.sqrt(1.0 - zeta * zeta);
        progress = 1 - Math.cos(progress * Math.PI / 2);   
        progress = 1 / beta * 
            Math.exp(-zeta * omega * progress) * 
            Math.sin( beta * omega * progress + Math.atan(beta / zeta));

        return 1 - progress;
      }

      if (this.hideContactsGsap) {
        this.hideContactsGsap.kill();
      }

      const navContacts = document.querySelector("#navContacts");
      const categories = document.querySelector("#categories");

      if (this.prevExpanded){
        this.hideContactsGsap = gsap.fromTo(navContacts, {opacity: 0}, {delay: 0.3, duration: 0.25, opacity: 0.5, ease, onStart: onStartExpanding(this), onComplete: onCompleteExpanding(this)});
        gsap.fromTo(categories, {opacity: 0}, {delay: 0.3, duration: 0.25, opacity: 1, ease});
      }
      else{
        this.hideContactsGsap = gsap.fromTo(navContacts, {opacity: 0.5}, {duration: 0.25, opacity: 0, ease, onStart: onStartHide(this), onComplete: onCompleteHide(this)});
        gsap.fromTo(categories, {opacity: 1}, {duration: 0.25, opacity: 0, ease});
      }

      function onStartExpanding(cls){
        const navContacts = document.querySelector("#navContacts")
        navContacts.style.display = "flex";
        for (var i = 0; i < cls.total; i++) {
          var box = cls.boxes[i];
              
          var lastX = box.x;
          var lastY = box.y;   

          var lastW = box.width;
          var lastH = box.height;     
          
          var width  = box.width  = box.node.offsetWidth;
          var height = box.height = box.node.offsetHeight;

          box.x = box.node.offsetLeft;
          box.y = box.node.offsetTop;      
              
          if (lastX !== box.x || lastY !== box.y) {
              var transX = gsap.getProperty(box.node, "x");
              var transY = gsap.getProperty(box.node, "y");

              var x = transX + lastX - box.x;
              var y = transY + lastY - box.y;  
              cls.lastGsap = gsap.fromTo(
                box.node, 
                {x: x, y: y},
                {x: 0, y: 0, duration: 0.5, ease}
              );
          }
        }
      }

      function onCompleteExpanding(cls){
      }

      function onStartHide(cls){
      }

      function onCompleteHide(cls){
        const navContacts = document.querySelector("#navContacts")
        navContacts.style.display = "none";
        for (var i = 0; i < cls.total; i++) {
          var box = cls.boxes[i];
              
          var lastX = box.x;
          var lastY = box.y;   

          var lastW = box.width;
          var lastH = box.height;     
          
          var width  = box.width  = box.node.offsetWidth;
          var height = box.height = box.node.offsetHeight;

          box.x = box.node.offsetLeft;
          box.y = box.node.offsetTop;      
              
          if (lastX !== box.x || lastY !== box.y) {
              var transX = gsap.getProperty(box.node, "x");
              var transY = gsap.getProperty(box.node, "y");

              var x = transX + lastX - box.x;
              var y = transY + lastY - box.y;  
              
              cls.lastGsap = gsap.fromTo(
                box.node, 
                {x: x, y: y},
                {x: 0, y: 0, duration: 0.5, ease}
              );
          };
        }
      }
    },
    moveLayout() {
      for (var i = 0; i < this.total; i++) {
        var box = this.boxes[i];
            
        var lastX = box.x;
        var lastY = box.y;   

        var lastW = box.width;
        var lastH = box.height;     
        
        var width  = box.width  = box.node.offsetWidth;
        var height = box.height = box.node.offsetHeight;

        box.x = box.node.offsetLeft;
        box.y = box.node.offsetTop;      
            
        if (lastX !== box.x || lastY !== box.y) {
            var transX = gsap.getProperty(box.node, "x");
            var transY = gsap.getProperty(box.node, "y");

            var x = transX + lastX - box.x;
            var y = transY + lastY - box.y;  
            
            this.lastGsap = gsap.fromTo(box.node, {x: x, y: y}, {x: 0, y: 0, duration: 0.5, ease});
        }

        if (lastW !== box.width || lastH !== box.height) {     
          gsap.fromTo(box.node, {width: lastW, height: lastH}, {width, height, duration: 0.5, ease});    
        }
      }
    },
    closeMenu() {
      this.$bvModal.hide('menu-modal');
    },
    searchFocusChanged(isFocused) {
      this.searchFocused = isFocused;
      this.beforeChangeLayout();
    },
    beforeChangeLayout(){
      const expand = this.isExpanded || this.searchFocused;
      if (this.prevExpanded == expand) {
        return;
      }

      this.prevExpanded = expand;
      const navContainer = document.querySelector("#navbar")
      const navContacts = document.querySelector("#navContacts")
      const flexContainer = document.querySelector("#direction");
      const direction = expand ? 'column' : 'row';
      const expanded = expand ? '' : 'small';

      flexContainer.setAttribute("class", "flex-container " + direction);
      navContainer.setAttribute("class", "nav-container " + expanded)
      navContacts.setAttribute("class", "nav-contacts-container " + expanded)
      this.layout();
    }
  },
  data() {
    return {
      searchFocused: false,
      prevExpanded: true,
      servicesList: ServicesJson,
      dirty: false,
      boxes: {},
      total: 0,
      nodes: [],
      lastGsap: {},
      hideContactsGsap: null,
      callHovering: false,
      pathHovering: false,
    };
  },
  mounted() {
    this.nodes  = document.querySelectorAll(".item");
    this.total  = this.nodes.length;
    this.dirty  = true;

    for (var i = 0; i < this.total; i++) {
      var node   = this.nodes[i];  
      var width  = node.offsetWidth;
      var height = node.offsetHeight;    
      var color  = "transparent";    
        
      // Need another element to animate width & height... use clone instead of editing HTML
      var content = node.cloneNode(true);
      content.classList.add("item-content");
    
      gsap.set(node, { x: "+=0" });
      gsap.set(content, { width, height });  
      gsap.set([node, node.children], { backgroundColor: color, color });
    
      //node.appendChild(content);

      var x = node.offsetLeft;
      var y = node.offsetTop;
    
      this.boxes[i] = { content, height, node, width, x, y };
    } 

    window.addEventListener("resize", () => { this.dirty = true; });

    gsap.ticker.add(() => this.dirty && this.layout());

    this.layout();
  },
  watch: { 
    isExpanded: function(newVal, oldVal) {
      this.beforeChangeLayout();
    }
  }
};
</script>

<style scoped lang="scss">
  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

.desktop-nav{
  display: block;
}

.mobile-nav{
  display: none;
}

.nav-container{
  position: fixed;
  top: 0;
  margin-left:auto;
  margin-right: auto;
  background-color: #fff;
  height: 160px;
  z-index: 1000;
  width: 100%;
  transition: height 0.25s ease-out;
  transition-delay: 0.0s;
}

.nav-container.small{
  height:62px;
  transition-delay: 0.25s;
}

.search-container{
  display: flex;
  flex-flow: row;
  gap: 1rem;
  width: 100%;
}

.search-container.small{
  width: auto;
}

.nav-contacts-container{
  display: flex;
  flex-flow: row;
  gap: 1rem;
  align-items: center;
  opacity: 0.5;
}

.nav-contacts{
  display: flex;
  flex-flow: row;
  gap: 0.2rem;
  align-items: center;

  a{
    font-size: 0.8rem;
  }
}

.vitan-nav-button-outline {
  border-radius: 13px;
  background-color: transparent !important;
  border: 1.9px solid rgba($color: #ED661A, $alpha: 0.95) !important;
  text-transform:uppercase !important;
  font-family: 'Montserrat' !important;
  font-weight: 550 !important;
  text-align: center !important;
  color: #ED661A !important;
  box-shadow: none !important;
  white-space: nowrap !important;
  transition: all 0.15s ease-out;
  font-size: 11px !important;

  padding: 4px !important;
  padding-left: 11px !important;
  padding-right: 11px !important;
}

.vitan-nav-button-outline.hovering{
    background-color: #ED661A !important;
    border: 1.75px solid rgba($color: #ED661A, $alpha: 1) !important;
    color: var(--light) !important;
}

.vitan-nav-button-outline:active{
  opacity: 0.5;
}

.services-categories-container{
  display: flex;
  flex-flow: row;
  gap: 1rem;
  height: 36px;
}

.container-header{
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0;
  color: #000a12;
  align-self: center;
}

.row{
  padding: 0;
  margin: 0;
}

.column{
  padding: 0;
  margin: 0;
}

.expanded{
  flex-direction: column;
}

.mobile-flex-container{
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  gap: 0.5rem;
  align-items: center;
}

/*flex-direction: row | row-reverse | column | column-reverse;*/

.flex-container.row {
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;

  align-items: center;
}

.flex-container.row-reverse {
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.flex-container.column {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-container.column-reverse {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column-reverse;
}


/*flex-wrap: nowrap | wrap | wrap-reverse;*/

.flex-container.nowrap {
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.flex-container.wrap {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.flex-container.wrap-reverse {
  -webkit-flex-wrap: wrap-reverse;
  -ms-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
}


/*align-items: flex-start | flex-end | center | baseline | stretch;*/

.flex-container.align-items-start {
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.flex-container.align-items-end {
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.flex-container.align-items-center {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-container.align-items-baseline {
  webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}

.flex-container.align-items-stretch {
  webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}


/*justify-content: flex-start | flex-end | center | space-between | space-around;*/

.flex-container.justify-start {
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.flex-container.justify-end {
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.flex-container.justify-center {
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex-container.justify-space-between {
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.flex-container.justify-space-around {
  -webkit-justify-content: space-around;
  -ms-flex-pack: justify;
  justify-content: space-around;
}


/*align-content: flex-start | flex-end | center | space-between | space-around | stretch;*/

.flex-container.align-content-start {
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
}

.flex-container.align-content-end {
  -webkit-align-content: flex-end;
  -ms-flex-line-pack: end;
  align-content: flex-end;
}

.flex-container.align-content-center {
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
}

.flex-container.align-content-space-between {
  -webkit-align-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}

.flex-container.align-content-space-around {
  -webkit-align-content: space-around;
  -ms-flex-line-pack: justify;
  /*distribute;*/
  align-content: space-around;
}

.flex-container.align-content-stretch {
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
}


/*align-self: auto | flex-start | flex-end | center | baseline | stretch;*/

.item.align-self-auto {
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}

.item.align-self-start {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.item.align-self-end {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.item.align-self-center {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
}

.item.align-self-baseline {
  -webkit-align-self: baseline;
  -ms-flex-item-align: baseline;
  align-self: baseline;
}

.item.align-self-stretch {
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
}

.item.flex-grow1 {
  flex-grow: 1;
}

.item.flex-grow2 {
  flex-grow: 2;
}

.item.flex-grow3 {
  flex-grow: 3;
}

.item.flex-grow4 {
  flex-grow: 4;
}

.flex-container {
 display : -webkit-flex;
 display : -ms-flexbox;
 display : flex;
 padding: 0.5rem;
 padding-left: 0;
 padding-right: 0;
 gap: 0.5rem;
 }

.item{
	margin:0;
  padding: 0;
	-webkit-align-items: center;
	-ms-flex-align:center;
	align-items: center;
}

.item-content {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}

body {
  padding-top: 35px;
}

@include media-breakpoint-down(md){
  .nav-container{
    height: 56px !important;
  }
  .desktop-nav{
    display: none;
  }

  .mobile-nav{
    display: block;
  }

  .vitan-nav-button-outline{
    font-size: 0.6rem !important;
    width: 100%;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>
