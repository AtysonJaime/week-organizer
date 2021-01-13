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
                        <!-- <div class="md-layout-item md-size-100">
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
                        </div> -->
                        <div class="md-layout-item md-size-100">
                            <nav-tabs-card no-label>
                                <template slot="content">
                                    <md-tabs class="md-primary" md-alignment="left">
                                        <md-tab id="tab-atividades" md-label="Reuniões" md-icon="group">
                                            <div v-if="list_reuniao">
                                                <div class="content-reuniao">
                                                    <div class="card-reuniao" v-for="(reuniao, index) in reunioes" :key='index' :data-reuniao="index" @click="apagarCardReuniao(index)" title="Apagar Reunião">
                                                        <CardReuniao :assunto="reuniao.info" :data='reuniao.date' :group='reuniao.part'></CardReuniao>
                                                    </div>
                                                </div>
                                                <div class="content-button">
                                                    <md-button class="md-primary md-round button-apagar" @click="apagarListaReuniao" title="Apagar Toda Lista"><md-icon>delete_outline</md-icon>Apagar Lista</md-button>
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
import CardReuniao from "./components/CardReuniaoSection";

export default {
    components: {
        NavTabsCard,
        CardReuniao,
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
            reunioes: [
                {info:"Relatados problemas nos componente x, y e z do padrão de interfaces", date:"05/01/2021", part:"Atyson Jaime, Andressa, Igor, João Vitor"},
                {info:"Repasse de duvidas", date:"11/02/2021", part:"Atyson Jaime, Andressa"},
                {info:"Reunião Gestore Front-end", date:"05/01/2021", part:"Atyson Jaime, Igor"},
                {info:"Repasse de metas para as proximas etapas do Cosmos - Desing para o sistemas da Universidade Federal do Rio Grande do Norte", date:"25/05/2021", part:"Andressa, Igor, João Vitor"},
            ],
        }
    },
    methods: {
        apagarListaReuniao() {
            const lista = document.getElementsByClassName('content-reuniao')[0];
            if(lista.children.length > 0) {
                lista.textContent = '';
            }
            this.list_reuniao = !this.list_reuniao;
        },
        apagarCardReuniao(param) {
            const lista = Array.from(document.getElementsByClassName('card-reuniao'));
            const filho = lista.find(element => element.getAttribute('data-reuniao') == param);
            filho.remove();
        }
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

    // Scss do Botão apagar lista
    .content-button {
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

    // Scss da div para reuniões
    .content-reuniao {
        background-color: transparent;
        max-height: 320px;
        overflow-y: auto;
        padding: 15px;

        .card-reuniao {
            ~.card-reuniao {
             margin-top: 20px;
            }
        }
    }
</style>