<template>
    <div class="main-wrapper">
    <b-container class="h-100 mr-5">
          <b-row class="h-100 mx-5 center-content">
            <b-col>
                <b-row class="ml-0 pb-5">
                    <h1> VITAN </h1>
                </b-row>
                <b-col class="pl-0 pb-5">
                    <h2 class="pb-2">ВСЕ ВИДЫ АВТОСЛЕСАРНЫХ РАБОТ</h2>
                    <h2 class="pb-2">АВТОДИАГНОСТИКА</h2>
                    <h2 class="pb-2">АВТОЭЛЕКТРИКА</h2>
                </b-col>
                <b-row class="ml-0">
                    <b-button class="vitan-button mr-4">Записаться</b-button>
                    <b-button class="vitan-button-outline">Обратный звонок</b-button>
                </b-row>
            </b-col>
            <b-col class="h-100">One of three columns</b-col>
          </b-row>
    </b-container>
    </div>
</template>

<style scoped>
.main-wrapper {
background: #000;
height: 100vh;
overflow: auto;
}

.center-content {
padding-top: 120px;
}

h1 {
font-size: 96px;
color: #ED661A;
}

h2 {
font-size: 24px;
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
font-size: 14px;
 box-shadow: 0px 0px 60px rgba(237,102,26,0.7);
}

.vitan-button button:hover{
color : #000;
background-color: #fff;
border-color: #fff;
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
font-size: 14px;
}
</style>