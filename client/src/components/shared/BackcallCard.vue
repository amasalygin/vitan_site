<template>
    <div
      class="main-wrapper"
      v-bind:class="{
        'black': color==='black',
        'noBorder': noBorder == true,
      }"
    >
        <h1 class="header">{{name}}</h1>
        <div class="content-wrapper">
            <p class="text">
                {{form-text ? form-text : defaultText}}
            </p>
            <div class="flex-wrapper">
              <div id="name-wrapper" class="input-wrapper user-icon">
                <input
                    type="name"
                    class="input"
                    @blur="handleNameBlur"
                    @focus="handleNameFocus"
                    v-model="nameText"
                    v-bind:class="{
                        'black': color==='black',
                        'input-invalid': nameMaskValid == 1,
                        'input-valid': nameMaskValid == 2,
                    }"
                    :placeholder="'Имя'"
                    id="name-number-input"
                >
              </div>
              <div id="phone-wrapper" class="input-wrapper phone-icon">
                <input
                    type="tel"
                    ref="phoneNumber"
                    id="phone-number-input"
                    @blur="handlePhoneBlur"
                    @focus="handlePhoneFocus"
                    class="input"
                    :placeholder="'Телефон'"
                    v-bind:class="{
                        'black': color==='black',
                        'input-invalid': phoneMaskValid == 1,
                        'input-valid': phoneMaskValid == 2,
                    }"
                >
                </div>
                 <b-button
                    :disabled="(phoneMaskValid != 2) || (nameMaskValid != 2)"
                    class="vitan-button">
                    Отправить
                </b-button>
            </div>
        </div>
        <div class="content-wrapper">
            <p class="text">
                Или свяжитесь с нами любым удобным для Вас способом
            </p>
            <div class="flex-wrapper">
                <b-img
                    v-on:click="gotoInst"
                    class="image"
                    :src="require('@/assets/instagram.svg')"
                    alt="Responsive image">
                </b-img>
                <b-img
                    v-on:click="gotoVk"
                    class="image"
                    :src="require('@/assets/vk.svg')"
                    alt="Responsive image">
                </b-img>
            </div>
        </div>
    </div>
</template>

<script>
import IMask from 'imask';

export default {
  props: ['name', 'color', 'noBorder', 'formText'],
  methods: {
    routeToService() {
      this.$router.push({ name: this.routeName, params: this.routeParams, props: this.routeProps });
    },
    onPhoneMaskAccept() {
      this.phoneMaskValid = 1;
    },
    onPhoneMaskComplete() {
      this.phoneMaskValid = 2;
    },
    handleNameBlur() {
      if (this.nameText.length >= 3) {
        this.nameMaskValid = 2;
      } else if (this.nameText.length === 0) {
        this.nameMaskValid = 0;
      } else {
        this.nameMaskValid = 1;
      }

      const nameWrapper = document.querySelector('#name-wrapper');
      nameWrapper.setAttribute('class', 'input-wrapper user-icon');
    },
    handleNameFocus() {
      if (this.nameText.length === 0) {
        this.nameMaskValid = 0;
      } else if (this.nameText.length < 3) {
        this.nameMaskValid = 1;
      }

      const nameWrapper = document.querySelector('#name-wrapper');
      nameWrapper.setAttribute('class', 'input-wrapper user-icon focusIn');
    },
    handlePhoneBlur() {
      const phoneWrapper = document.querySelector('#phone-wrapper');
      phoneWrapper.setAttribute('class', 'input-wrapper phone-icon');
    },
    handlePhoneFocus() {
      const phoneWrapper = document.querySelector('#phone-wrapper');
      phoneWrapper.setAttribute('class', 'input-wrapper phone-icon focusIn');
    },
    gotoVk() {
      window.open('https://vk.com/vitan_servis', '_blank');
    },
    gotoInst() {
      window.open('https://instagram.com/vitan_servis_perm', '_blank');
    },
  },
  data() {
    return {
      isHovering: false,
      phoneMaskValid: 0,
      nameMaskValid: 0,
      phoneMask: null,
      nameText: '',
      defaultText: 'Заполните форму обратной связи, и мы свяжемся с Вами в ближайшее время',
    };
  },
  mounted() {
    var phoneElement = this.$refs.phoneNumber; // eslint-disable-line
    if (phoneElement == null) {
      return;
    }
    var phoneMaskOptions = { // eslint-disable-line
      mask: [
        {
          mask: '+{7} 000 000 00 00',
        },
        {
          mask: '{8} 000 000 00 00',
        },
      ],
    }; // eslint-disable-line
    this.phoneMask = IMask(phoneElement, phoneMaskOptions); // eslint-disable-line
    this.phoneMask.on("accept", this.onPhoneMaskAccept); // eslint-disable-line
    this.phoneMask.on("complete", this.onPhoneMaskComplete); // eslint-disable-line

    var nameElement = document.getElementById('name-number-input'); // eslint-disable-line
    if (nameElement == null) {
      return;
    }
    var nameMaskOptions = { // eslint-disable-line
        mask: /^[a-zA-Zа-яА-Я]+$/ui, // eslint-disable-line
    }; // eslint-disable-line
    this.nameMask = IMask(nameElement, nameMaskOptions); // eslint-disable-line
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.black{
  border: 1px solid #000A12;

  .header{
    color: #000A12;
  }

  .text{
    color: #000A12;
  }
}

.noBorder{
    border: none !important;
    padding: 0rem !important;
}

.hovering{
  box-shadow: 0px 0px 20px rgba(0, 10, 18, 0.15) !important;
}

.main-wrapper{
    display: flex;
    flex-flow: column;
    gap: 4rem;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 3rem;
    padding: 3rem;
}

.main-wrapper.black{
  border: 1.5px solid #000A12;
}

.content-wrapper{
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
}

.flex-wrapper{
    display: flex;
    gap: 1.2rem;
    flex-flow: wrap;
}

.header{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0;
    margin-bottom: 0;
    color: var(--light);
}

.text{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0;
    margin-bottom: 0;
    color: var(--light);
}

.user-icon::after{
  background-size: 1.2rem !important;
  background: url('~@/assets/user-white.png') no-repeat scroll 16px 21px;
}

.phone-icon::after{
  background-size: 1.2rem !important;
  background: url('~@/assets/phone-white.png') no-repeat scroll 16px 21px;
}

img{
    width: 80px;
    height: 80px;
}

@include media-breakpoint-down(md){
    .vitan-button{
        width: 83%;
    }
}

@include media-breakpoint-down(sm){
    .vitan-button{
        width: 90%;
    }

    .main-wrapper{
        gap: 2rem;
        padding: 2rem;
        border-radius: 2rem;
    }

    .content-wrapper{
        gap: 1rem;
    }

    .flex-wrapper{
        gap: 1rem;
    }

    .header{
        font-size: 1rem;
    }

    .text{
        font-size: 0.8rem;
    }

    .flex-wrapper{
        max-width: 100%;
    }

    img{
        width: 60px;
        height: 60px;
    }
}

@include media-breakpoint-down(xs){
    .vitan-button{
        width: 100%;
    }
}
</style>
