<template>
    <md-card md-with-hover>
        <md-card-content>
            <div class="md-layout">
                <div class="md-layout-item md-size-100">
                    <h5 class="content-card__title">Assunto:</h5>
                    <p>{{assunto}}</p>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item md-size-20 md-medium-size-100">
                    <h5 class="content-card__title">Data: </h5>
                    <p>{{data}}</p>
                </div>
                <div class="md-layout-item md-size-80 md-medium-size-100">
                    <h5 class="content-card__title">Participantes: </h5>
                    <p>{{group}}</p>
                </div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
export default {
    props: {
        assunto: {
            type: String,
            require: true,
        },
        data: {
            type: String,
            require: true,
        },
        group: {
            type: String,
            require: true,
        },
    },
}
</script>

<style lang='scss' scoped>
// Scss da div para reuniões
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