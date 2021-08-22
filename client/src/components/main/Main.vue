<template>
    <b-container class="main-flex pt-0">
         <div class="header-flex">
            <h2>
                <b-icon icon="telephone"></b-icon>
                +7 (342) 279-38-36
            </h2>
            <h2>
                <b-icon icon="clock"></b-icon>
                Ежедневно 9:00-21:00
            </h2>
            <h2>
                <b-icon icon="geo-alt"></b-icon>
                ул. Васильева 8А
            </h2>
        </div>
        <div class=main-banner>
            <div class="banner-header">
                <h1>VITAN</h1>
                <h2>Ремонт и обслуживание вашего в авто в Перми</h2>
            </div>
            <div class="text-column-flex">
                <h2><b-icon icon="nut-fill"></b-icon> ВСЕ ВИДЫ АВТОСЛЕСАРНЫХ РАБОТ</h2>
                <h2><b-icon icon="nut-fill"></b-icon> АВТОДИАГНОСТИКА</h2>
                <h2><b-icon icon="nut-fill"></b-icon> АВТОЭЛЕКТРИКА</h2>
            </div>
            <div class="buttons-flex">
                <b-button
                    class="vitan-button">
                    Записаться
                </b-button>
                <b-button
                    class="vitan-button-outline"
                    v-b-modal.backCallModal>
                    Обратный звонок
                </b-button>
            </div>
            <h6 class="column-footer-text">
                Обслуживаем все марки автомобилей
            </h6>
        </div>
        <b-modal id="backCallModal" class="menu-modal" hide-footer hide-backdrop>
             <template #modal-header>
                 <div style="display: flex; width: 100%; flex-direction: row-reverse;">
                    <b-icon
                        style="align-self: end;"
                        class="menu-toggle-button-x"
                        icon="x"
                        @click="closeModal('backCallModal')"
                        >
                    </b-icon>
                 </div>
            </template>
            <div class="back-call-modal-content">
                <div class="modal-content-container">
                    <h2>Отправьте нам свой номер телефона, и мы вам
                        перезвоним сами в ближайшее время</h2>
                    <div class="back-call-modal-inputs">
                        <div style="display: flex">
                        <input
                            type="text"
                            name="search"
                            class="input transparent-input"
                            id="number-input"
                            placeholder="799999999"
                            v-model="backCallNumber"
                        >
                        <b-icon
                            style="margin-left: -35px; align-self: center;"
                            class="menu-toggle-button-x"
                            icon="exclamation"
                            v-if="numberMaskValid"
                            >
                        </b-icon>
                        </div>
                        <b-button
                            class="vitan-button"
                            @click="sendBackCallRequest(numberMask)">
                            Отправить
                        </b-button>
                    </div>
                </div>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
import IMask from 'imask';

export default {
  mounted() {
    this.$root.$on('bv::modal::shown', (bvEvent, modalId) => { // eslint-disable-line
      var element = document.getElementById('number-input'); // eslint-disable-line
      if (element == null) {
        return;
      }
      var maskOptions = { // eslint-disable-line
        mask: '+{7} 000 000 00 00' // eslint-disable-line
      }; // eslint-disable-line
      this.numberMask = IMask(element, maskOptions); // eslint-disable-line
      this.numberMask.on("accept", this.onMaskAccept); // eslint-disable-line
      this.numberMask.on("complete", this.onMaskComplete); // eslint-disable-line
    });
    this.$root.$on('bv::modal::hidden', (bvEvent, modalId) => { // eslint-disable-line
      if (this.numberMask == null) {
        return;
      }
      this.numberMask.updateValue(); // eslint-disable-line
      this.numberMaskValid = false; // eslint-disable-line
    });
  },
  methods:
  {
    onMaskAccept() {
      this.numberMaskValid = false;
      console.log(this.numberMaskValid);
    },
    onMaskComplete() {
      this.numberMaskValid = true;
      console.log(this.numberMaskValid);
    },
    closeModal(modalID) {
      this.$bvModal.hide(modalID); // eslint-disable-line
    },
    sendBackCallRequest(mask) {
      var url = "https://noisy-truth-ec30.amasalygin.workers.dev/?text=" + mask.unmaskedValue; // eslint-disable-line
      var xhr = new XMLHttpRequest(); // eslint-disable-line
      xhr.open("GET", url); // eslint-disable-line
      xhr.setRequestHeader("Accept", "application/json"); // eslint-disable-line
      xhr.setRequestHeader("Content-type", "application/json"); // eslint-disable-line
      xhr.send(); // eslint-disable-line
      this.closeModal('backCallModal');
    },
    data() {
      return {
        numberMaskValid: false,
        numberMask: null,
        previousInputValue: '',
        backCallNumber: '',
      };
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
p{
    letter-spacing: 0.075rem;
}

.main-banner{
    display: flex;
    flex-flow: column;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    gap: 3rem;
    background: url("../../assets/test_main.png") no-repeat right center/50%, #000a12;
    -webkit-box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);
    box-shadow: 0 0rem 2rem rgba(0,0,0, 0.7);

    h1 {
        font-size: 8rem;
        font-weight: 800;
        color: #ED661A;
        letter-spacing: 0.075rem;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--light);
        letter-spacing: 0.075rem;
    }

    h6{
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--light);
        letter-spacing: 0.075rem;
        text-transform:uppercase;
    }

    .text-column-flex {
        display: flex;
        flex-flow: column;
        gap: 1rem;
    }
}

.banner-header{
    display: flex;
    flex-flow: column;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--light);
        text-transform:uppercase;
        letter-spacing: 0.075rem;
        max-width: 60%;
    }
}

.buttons-flex {
    display: flex;
    flex-flow: row;
    gap: 1.5rem;
    button{
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--light);
        letter-spacing: 0.075rem;
    }
}

.center-banner{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    h2{
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2rem;
    }
}

.header-flex{
    display: flex;
    flex-flow: row;
    white-space: nowrap;
    gap: 0.5rem;
    margin-top: 3rem;
    justify-content: space-between;
    h2 {
        font-size: 0.9rem;
        font-weight: 700;
        color: #000a12;
        letter-spacing: 0.075rem;
        align-self: center;
        vertical-align: center;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
    .b-icon{
        font-size: 1rem;
        align-self: center;
    }
}

.back-call-modal-inputs{
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.input {
  margin-right: 0;
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding-top: 10px;
  padding-left: 1rem;
  padding-bottom: 10px;
  padding-right: 35px;
  color: #ED661A;
}

.transparent-input{
  background-color: transparent;
  border-bottom: 1px solid #ED661A;
  text-align: center;
}

.input:focus{
    border: none;
    outline: none;
    border-bottom: 1px solid #ED661A;
}

.input:hover{
    border: none;
    outline: none;
    border-bottom: 1px solid #ED661A;
}

.input:focus-visible {
    border: none;
  border-bottom: 1px solid #ED661A;
  outline: none;
}

.input::placeholder {
  color: rgba(0, 0, 0, 0);
}

.back-call-modal-content{
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border: none;
    border-radius: 0;
    a{
      font-size: 1.8rem;
      font-weight: 600;
      text-align: right;
      color: var(--light);
    }
    a:hover{
      text-decoration: none;
    }
}

.modal-content-container{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 2rem;
    width: 70%;
    align-self: center;
    margin-bottom: 10rem;
    h2{
        color: var(--light);
        text-align: center;
    }
}

.vitan-text-highlight{
text-shadow: 0px 0px 10px rgba(237,102,26, 1);
color: rgb(237, 102, 26);
}

.vitan-scroll-btn{
color: rgb(237, 102, 26);
text-transform:uppercase;
font-size: 1.5rem;
text-shadow: 0px 0px 10px rgba(237,102,26, 1);
-webkit-transition: text-shadow 0.25s;
-moz-transition: text-shadow 0.25s;
-o-transition: text-shadow 0.25s;
transition: text-shadow 0.25s;
}

.vitan-scroll-btn:hover{
text-decoration: none;
text-shadow: 0px 0px 25px rgba(237,102,26, 1);
}

.b-icon {
    color: #ED661A;
}

@include media-breakpoint-down(md){
    .main-banner{
        background: url("../../assets/test_main.png") no-repeat center/60%, #000a12;
         h1 {
            font-size: 5rem;
        }
        h2 {
            font-size: 1.1rem;
        }

        h6{
            font-size: 0.7rem;
        }

        .text-column-flex {
            gap: 0.7rem;
        }
    }

    .buttons-flex {
        display: flex;
        flex-flow: row;
        gap: 1.5rem;
        button{
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--light);
            letter-spacing: 0.075rem;
        }
    }

    .banner-header{
        h2{
            max-width: 100%;
        }
    }

    .header-flex{
        h2 {
            font-size: 0.9rem;
            font-weight: 700;
        }
    }
}

@include media-breakpoint-down(sm){
    .main-banner{
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        h1 {
            font-size: 3rem;
        }
        h2{
            font-size: 1rem;
        }
    }
    .buttons-flex{
        flex-flow: column;
    }
    .header-flex{
        flex-flow: column;
        margin-top: 1rem;
        h2 {
            font-size: 0.8rem;
            font-weight: 700;
        }
        .b-icon{
            font-size: 0.9rem;
            align-self: center;
        }
    }

    .modal-content-container{
        h2{
            color: var(--light);
            text-align: center;
            font-size: 1.5rem;
        }
    }
}

@include media-breakpoint-down(xs){
    .back-call-modal-inputs{
        flex-flow: column;
    }

    .input{
        width: 100%;
        font-size: 1rem;
    }

    .input::placeholder{
        font-size: 0.9rem;
    }

    .vitan-button {
        padding-bottom: 10px;
        padding-top: 10px;
        text-transform:uppercase;
        font-size: 0.9rem;
    }

    .main-banner{
        background: url("../../assets/test_main.png") no-repeat center/90%, #000a12;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        gap: 1rem;
        h1 {
            font-size: 3rem;
        }
        h2{
            font-size: 0.8rem;
        }
        .text-column-flex{
            gap: 0.3rem;
        }
    }
    .buttons-flex{
        flex-flow: column;
        gap: 1rem;
    }
    .header-flex{
        flex-flow: column;
        margin-top: 1rem;
        h2 {
            font-size: 1rem;
            font-weight: 700;
            text-align: left;
            align-self: start;
        }
        .b-icon{
            font-size: 1.1rem;
            align-self: center;
        }
    }

    .modal-content-container{
        h2{
            color: var(--light);
            text-align: center;
            font-size: 1.5rem;
        }
    }
}

@media (max-height: 568px) {
    .main-flex {
        justify-content: space-between;
        gap: 2rem;
    }

    .center-column-flex {
        gap: 2rem;
    }
}

</style>
