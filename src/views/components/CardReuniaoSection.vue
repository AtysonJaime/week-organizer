<template>
    <md-card md-with-hover>
        <md-card-content>
            <h5 class="content-reuniao__title">Assunto:</h5>
            <p class="content-reuniao__info">{{assunto}}</p>
            <h5 class="content-reuniao__title">Data: </h5>
            <p class="content-reuniao__info">{{data}}</p>
            <h5 class="content-reuniao__title">Participantes: </h5>
            <p class="content-reuniao__info">{{group}}</p>
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
            
            .content-reuniao {
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