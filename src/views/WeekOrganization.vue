<template>
    <div class="wrapper">
        <div class="md-layout backImage" :style="bgImage">
            <div class="md-layout-item">
                <div class="brand">
                    <h1 class="title"> Week Organization</h1>
                    <h3 class="title">Simple way to save your tasks.</h3>
                </div>
            </div>
        </div>
        <div class="main main-raised">
            <div class="section section-tabs">
                <div id="nav-tabs" class="container">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-100">
                            <nav-tabs-card no-label>
                                <template slot="content">
                                    <md-tabs class="md-primary" md-alignment="left">
                                        <md-tab id="tab-atividades" md-label="Atividades Realizadas" md-icon="work">
                                            <p>
                                                I will be the leader of a company that ends up being worth
                                                billions of dollars, because I got the answers. I understand
                                                culture. I am the nucleus. I think that’s a responsibility
                                                that I have, to push possibilities, to show people, this is
                                                the level that things could be at. I think that’s a
                                                responsibility that I have, to push possibilities, to show
                                                people, this is the level that things could be at.
                                            </p>
                                        </md-tab>

                                        <md-tab id="tab-form-atividades" md-label="Adicionar" md-icon="edit">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that things
                                                could be at. I will be the leader of a company that ends up
                                                being worth billions of dollars, because I got the answers.
                                                I understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to show
                                                people, this is the level that things could be at.
                                            </p>
                                        </md-tab>
                                    </md-tabs>
                                </template>
                            </nav-tabs-card>
                        </div>
                        <div class="md-layout-item md-size-100">
                            <nav-tabs-card no-label>
                                <template slot="content">
                                    <md-tabs class="md-primary" md-alignment="left">
                                        <md-tab id="tab-atividades" md-label="Reuniões" md-icon="group">
                                            <div v-if="list_reuniao">
                                                <md-list class="reuniao" v-if="list_reuniao">
                                                    <md-list-item class="md-elevation-3">
                                                        <div class="reuniao-item">
                                                            <h5 class="reuniao-item-title">Assunto:</h5>
                                                            <small class="reuniao-item-info">Resolver problemas internos gerados por assuntos aleatorios ocorridos no projeto X e bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</small>
                                                            <h5 class="reuniao-item-title">Data: <small class="reuniao-item-info">05/12/2021</small></h5>
                                                            <h5 class="reuniao-item-title">Participantes: <small class="reuniao-item-info">Atyson Jaime, Aline Balthar</small></h5>
                                                        </div>
                                                        <md-button class="btn-primary">click</md-button>
                                                    </md-list-item>
                                                    <md-list-item class="md-elevation-3">
                                                        <div class="reuniao-item">
                                                            <h5 class="reuniao-item-title">Assunto: <small class="reuniao-item-info">Resolver problemas internos</small></h5>
                                                            <h5 class="reuniao-item-title">Data: <small class="reuniao-item-info">05/12/2021</small></h5>
                                                            <h5 class="reuniao-item-title">Participantes: <small class="reuniao-item-info">Atyson Jaime, Aline Balthar</small></h5>
                                                        </div>
                                                    </md-list-item>
                                                    <md-list-item class="md-elevation-3">
                                                        <div class="reuniao-item">
                                                            <h5 class="reuniao-item-title">Assunto: <small class="reuniao-item-info">Resolver problemas internos</small></h5>
                                                            <h5 class="reuniao-item-title">Data: <small class="reuniao-item-info">05/12/2021</small></h5>
                                                            <h5 class="reuniao-item-title">Participantes: <small class="reuniao-item-info">Atyson Jaime, Aline Balthar</small></h5>
                                                        </div>
                                                    </md-list-item>
                                                    <md-list-item class="md-elevation-3">
                                                        <div class="reuniao-item">
                                                            <h5 class="reuniao-item-title">Assunto: <small class="reuniao-item-info">Resolver problemas internos</small></h5>
                                                            <h5 class="reuniao-item-title">Data: <small class="reuniao-item-info">05/12/2021</small></h5>
                                                            <h5 class="reuniao-item-title">Participantes: <small class="reuniao-item-info">Atyson Jaime, Aline Balthar</small></h5>
                                                        </div>
                                                    </md-list-item>
                                                </md-list>
                                                <div class="button">
                                                    <md-button class="md-primary md-round button-apagar" @click="apagarListaReuniao()"><md-icon>delete_outline</md-icon>Apagar Lista</md-button>
                                                </div>
                                            </div>
                                            <div class="alert alert-warning" v-else>
                                                <div class="container">
                                                    <div class="alert-icon">
                                                        <md-icon>warning</md-icon>
                                                    </div>
                                                    <b> Nenhuma reunião adicionada até o momento </b>
                                                </div>
                                            </div>
                                            
                                        </md-tab>

                                        <md-tab id="tab-form-atividades" md-label="Adicionar" md-icon="edit">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that things
                                                could be at. I will be the leader of a company that ends up
                                                being worth billions of dollars, because I got the answers.
                                                I understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to show
                                                people, this is the level that things could be at.
                                            </p>
                                        </md-tab>
                                    </md-tabs>
                                </template>
                            </nav-tabs-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
    components: {
        NavTabsCard
    },
    props: {
        image: {
            type: String,
            default: require("@/assets/img/vue-mk-header.jpg")
        },
    },
    data(){
        return {
            list_reuniao:true,
        }
    },
    methods: {
        apagarListaReuniao() {
            const lista = document.getElementsByClassName('reuniao')[0];
            if(lista.children.length > 0) {
                lista.textContent = '';
            }
            this.list_reuniao = !this.list_reuniao;
        },
    },
    computed: {
        bgImage() {
            return {
                backgroundImage: `url(${this.image})`
            };
        },
    }
}
</script>

<style lang='scss' scoped>
    .backImage {
        margin: 0;
        background-repeat: no-repeat;
        background-size: cover;
        height: 350px;
    }

    .leaf {
        &4 {
            right: 385px;
            top: -97px;
            width: 22%;
        }

        &3 {
            top: 90px;
            right: 352px;
            width: 13%;
        }

        &2 {
            width: 22%;
            left: 400px;
            top: -17px;
        }

        &1 {
            
        }
    }

    .brand {
        width: 100%;
        text-align: center;
        padding: 100px 10px 0 10px;

        @media screen  and (max-width: 526px) {
            h1 {
                font-size: 40px;
            }
            h3 {
                font-size: 25px;
            }
        }

        @media screen  and (max-width: 406px) {
            padding-top: 50px;
        }

        h1,h3 {
            color: #fff !important;
            margin: 0;
        }
    }

    .main-raised, .section {
        border-radius: 10px !important;
    }

    .lista-vazia {
        font-weight: bold;
    }

    .button {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        .button-apagar{
            margin: 15px 0;
            border: 2px solid #9124a3;
            transition: background-color .5 linear;
            font-weight: bold;

            &:hover {
                background-color: #fff !important;
                border: 2px solid #9124a3;
                box-shadow: 0 5px 3px -2px rgba(0,0,0,.8) !important;
                color: #9124a3 !important;
                font-weight: bold;

                .md-icon {
                    color: #9124a3 !important;
                }
            }
        }
    }

    .reuniao {
        background-color: transparent !important;
        max-height: 320px;
        overflow-y: auto;

        li {
            border-radius: 5px;
            border: 1px solid #000;

            ~li {
                margin-top: 15px;
            }
        }

        .reuniao-item {
            width: 100%;

            &-title {
                font-weight: bold;
                margin:0;
            }
            
            &-info {
                font-size: 85%;
                color: #000;
            }
        }
    }
</style>