<template>
    <b-container>
        <div class="main-flex">
            <div>
                <h1 class="page-header">Контакты</h1>
            </div>
            <div class="сontacts-content">
                <h5>
                    г.Пермь, ул. Васильева 8А
                </h5>
                <h5>
                    +7 (342) 279-38-36
                </h5>
            </div>
            <div class="map-flex">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b2e109ee024a2ef5b8d0f26e077225c812dd5410574f60169dcbd0c76aba0be&amp;source=constructor" frameborder="0"></iframe>
            </div>
        </div>
    </b-container>
</template>
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
.сontacts-content{
    display: flex;
    flex-flow: column;
    gap: 1rem;

    h5{
        font-family: 'Montserrat';
        font-weight: 500;
    }
}
.map-flex{
    display: flex;
    justify-content: center;
}

iframe{
    width: 100%;
    height: 800px;
    padding-bottom: 4rem;
}

@include media-breakpoint-down(md){
    iframe{
        height: 400px;
    }
}

@include media-breakpoint-down(xs){
    iframe{
        height: 300px;
    }
    .сontacts-content{
        h2{
            font-size: 1.5rem;
        }
    }
}
</style>
