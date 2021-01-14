<template>
    <md-card md-with-hover>
        <md-card-content>
            <div class="md-layout">
                <div class="md-layout-item md-size-50 md-medium-size-100">
                    <h5 class="content-card__title">Projeto: </h5>
                    <p>{{projeto}}</p>
                </div>
                <div class="md-layout-item md-size-50 md-medium-size-100">
                    <h5 class="content-card__title">Data: </h5>
                    <p>{{data}}</p>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item md-size-100">
                    <h5 class="content-card__title">Atividades Realizadas:</h5>
                    <p>{{atividadesRealizadas}}</p>
                </div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
export default {
    props: {
        projeto: {
            type: String,
            require: true,
        },
        data: {
            type: String,
            require: true,
        },
        atividadesRealizadas: {
            type: String,
            require: true,
        },
    },
}
</script>

<style lang='scss' scoped>
// Scss da div para atividades
    .md-card {
        margin: 0;

        .md-card-content {
            text-align: left;
            
            .content-card {
                &__title{
                    font-weight: bold;
                    margin:0;
                }
            }
        }

        .md-button {
            border-radius: 100%;
        }
    }
    
</style>