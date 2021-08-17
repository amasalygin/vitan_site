<template>
    <b-container>
        <b-row class="text-light" style="text-align:center">
            <b-col>
                <h5>
                    <b-icon icon="telephone"></b-icon>
                    +7 (342) 279-38-36
                </h5>
            </b-col>
            <b-col>
                <h5>
                    <b-icon icon="clock"></b-icon>
                    Ежедневно 9:00-21:00
                </h5>
            </b-col>
            <b-col>
                <h5>
                    <b-icon icon="geo-alt"></b-icon>
                    ул. Васильева 8А
                </h5>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col>
                <b-row>
                <h1>VITAN</h1>
                </b-row>
                <b-row class="mt-3">
                    <b-col>
                        <h2>ВСЕ ВИДЫ АВТОСЛЕСАРНЫХ РАБОТ</h2>
                        <h2>АВТОДИАГНОСТИКА</h2>
                        <h2>АВТОЭЛЕКТРИКА</h2>
                    </b-col>
                </b-row>
                <b-row class="mt-5">
                    <b-col>
                        <b-row>
                            <b-button
                            class="vitan-button mr-4">
                            Записаться
                            </b-button>
                            <b-button
                            class="vitan-button-outline">
                            Обратный звонок
                            </b-button>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="mt-4 text-light">
                    <b-col>
                        <h6 style="color: rgba(255,255,255,0.8);">
                            * Обслуживаем все марки автомобилей
                        </h6>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-img
                :src="require('@/assets/main_logo.png')"
                fluid alt="Responsive image">
                </b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
h1 {
font-size: 10rem;
color: #ED661A;
}

h2 {
font-size: 1.75rem;
color: var(--light);
}

.vitan-button {
border-radius: 60px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 15px;
padding-top: 15px;
background-color: rgb(237, 102, 26);
border-color: #ED661A;
text-transform:uppercase;
font-size: 1rem;
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
}

.vitan-button:hover{
box-shadow: 0px 0px 40px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus:hover{
box-shadow: 0px 0px 40px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active{
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:focus{
box-shadow: 0px 0px 20px rgba(237,102,26, 1);
background-color: rgb(237, 102, 26);
border-color: #ED661A;
}

.vitan-button:not(:disabled):not(.disabled):active:focus{
box-shadow: 0px 0px 60px rgba(237,102,26, 1);
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
}

.vitan-button-outline {
border-radius: 60px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 15px;
padding-top: 15px;
background-color: transparent;
border-color: #ED661A;
text-transform:uppercase;
font-size: 1rem;
box-shadow: none;
}

.vitan-button-outline:hover{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:focus:hover{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:not(:disabled):not(.disabled):active{
background-color: rgba(237, 102, 26, 1);
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:focus{
background-color: transparent;
border-color: #ED661A;
box-shadow: none;
}

.vitan-button-outline:not(:disabled):not(.disabled):active:focus{
background-color: rgba(237, 102, 26, 0.7);
border-color: #ED661A;
box-shadow: none;
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
</style>
