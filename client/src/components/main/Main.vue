<template>
    <div class="banner-wrapper">
        <div class="banner-background blur">
        </div>
        <div class="banner-content-wrapper">
            <p class="banner-header">
                Ремонт и обслуживание вашего автомобиля в Перми
            </p>
            <div class="banner-footer">
                <div class="banner-text-wrapper">
                    <p class="banner-text">
                        Все виды автослесарных работ
                    </p>
                    <p class="banner-text">
                        Автодиагностика
                    </p>
                    <p class="banner-text">
                        Автоэлектрика
                    </p>
                    <p class="banner-text">
                        Обслуживаем все марки автомобилей
                    </p>
                </div>
                <b-button
                    class="vitan-button">
                    Обратный звонок
                </b-button>
            </div>
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
    </div>
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
  data() {
    return {
      numberMaskValid: false,
      numberMask: null,
      previousInputValue: '',
      backCallNumber: '',
      buttonHovering: false,
    };
  },
  methods:
  {
    onMaskAccept() {
      this.numberMaskValid = false;
    },
    onMaskComplete() {
      this.numberMaskValid = true;
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
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.banner-wrapper{
    position: relative;
    width: 100%;
    height: 550px;
    clip: rect(0px,100%,0px,0px);
}

.banner-background{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: url("../../assets/test_main.png") no-repeat center;
    background-size: 750px;
    clip-path: inset(0 0 0 0);
}

.banner-content-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000A12, $alpha: 0.8);
    border-radius: 50px;

    display: flex;
    flex-flow: column;
    gap: 16px;

    padding: 50px;

    .banner-header{
        color: #fff;
        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 43px;
        letter-spacing: 0;
        margin-bottom: 0;
        flex-grow: 1;
    }

    .banner-footer{
        display: flex;
        flex-flow: row;
        gap: 16px;
        .banner-text-wrapper{
            flex-grow: 1;
            display: flex;
            flex-flow: column;
            gap: 8px;

            .banner-text{
                color: rgba($color: #fff, $alpha: 0.75);
                font-family: 'Montserrat';
                font-weight: 500;
                font-size: 18px;
                letter-spacing: 0;
                margin-bottom: 0;
            }
        }

        .vitan-button{
            align-self: center !important;
        }
    }
}

.banner-img{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-flow: column;
    border-radius: 3rem;
    background: url("../../assets/test_main.png") no-repeat right center;
    margin-left: -5rem;
    margin-top: -3rem;
    opacity: 0.3;
    z-index: 0;
}

@include media-breakpoint-down(md){
    .banner-wrapper{
        height: 450px;
    }

    .banner-background{
        background-size: 550px;
    }

    .banner-content-wrapper{
        border-radius: 40px;
        padding: 40px;

        .banner-header{
            font-size: 28px;
        }

        .banner-footer{
            .banner-text-wrapper{
                .banner-text{
                    font-size: 14px;
                }
            }
        }
    }
}

@include media-breakpoint-down(sm){
    .banner-wrapper{
        height: 350px;
    }

    .banner-background{
        background-size: 450px;
    }

    .banner-content-wrapper{
        border-radius: 34px;
        padding: 34px;

        .banner-header{
            font-size: 18px;
        }

        .banner-footer{
            display: flex;
            flex-flow: column;

            .banner-text-wrapper{
                .banner-text{
                    font-size: 13px;
                }
            }

            .vitan-button{
                align-self: auto !important;
            }
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
}

@media (max-height: 568px) {
}

</style>
