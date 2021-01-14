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
                <div id="nav-tabs">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-50 md-medium-size-100">
                            <nav-tabs-card no-label>
                                <template slot="content">
                                    <md-tabs class="md-primary" md-alignment="left">
                                        <md-tab id="tab-atividades" md-label="Atividades Realizadas" md-icon="work">
                                            <div v-if="list_atividades">
                                                <div class="content-card">
                                                    <div class="cards" v-for="(atividade, index) in atividades" :key='index' :data-atividades="index" @click="removerCardAtividade(index)" title="Remover Atividade">
                                                        <CardAtividades :projeto ="atividade.projeto" :data="atividade.date" :atividadesRealizadas="atividade.atvRelizadas"></CardAtividades>
                                                    </div>
                                                </div>
                                                <div class="content-button">
                                                    <md-button class="md-primary button-apagar" title="Limpar Toda Lista" @click="limparListaAtividades"><md-icon>delete_outline</md-icon>Apagar Lista</md-button>
                                                </div>
                                            </div>
                                            <div class="content-warning" v-else>
                                                <div class="alert alert-warning">
                                                    <div class="container">
                                                        <div class="alert-icon">
                                                            <md-icon>warning</md-icon>
                                                        </div>
                                                        <b> Nenhuma Atividade adicionada até o momento </b>
                                                    </div>
                                                </div>
                                            </div>
                                        </md-tab>

                                        <md-tab id="tab-form-atividades" md-label="Adicionar" md-icon="edit">
                                            
                                        </md-tab>
                                    </md-tabs>
                                </template>
                            </nav-tabs-card>
                        </div>
                        <div class="md-layout-item md-size-50 md-medium-size-100">
                            <nav-tabs-card no-label>
                                <template slot="content">
                                    <md-tabs class="md-primary" md-alignment="left">
                                        <md-tab id="tab-atividades" md-label="Reuniões" md-icon="group">
                                            <div v-if="list_reuniao">
                                                <div class="content-card">
                                                    <div class="cards" v-for="(reuniao, index) in reunioes" :key='index' :data-reuniao="index" @click="removerCardReuniao(index)" title="Remover Reunião">
                                                        <CardReuniao :assunto="reuniao.info" :data='reuniao.date' :group='reuniao.part'></CardReuniao>
                                                    </div>
                                                </div>
                                                <div class="content-button">
                                                    <md-button class="md-primary button-apagar" @click="limparListaReuniao" title="Limpar Toda Lista"><md-icon>delete_outline</md-icon>Apagar Lista</md-button>
                                                </div>
                                            </div>
                                            <div class="content-warning" v-else>
                                                <div class="alert alert-warning">
                                                    <div class="container">
                                                        <div class="alert-icon">
                                                            <md-icon>warning</md-icon>
                                                        </div>
                                                        <b> Nenhuma reunião adicionada até o momento </b>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </md-tab>

                                        <md-tab id="tab-form-atividades" md-label="Adicionar" md-icon="edit">
                                            <form id="form-reuniao" class="md-layout content-form">
                                                <div class="md-layout-item md-size-100">
                                                    <md-field class="md-form-group content-form__assunto">
                                                        <md-icon>sticky_note_2</md-icon>
                                                        <label>Assunto</label>
                                                        <md-input v-model="FormReuniaoAssunto" type="text"></md-input>
                                                    </md-field>
                                                </div>
                                                <div class="md-layout-item md-size-35 md-medium-size-50 md-small-size-100">
                                                    <md-datepicker class="content-form__data" v-model="FormReuniaoData">
                                                        <md-icon class="icon-date">event</md-icon>
                                                        <label>Data</label>
                                                    </md-datepicker>
                                                </div>
                                                <div class="md-layout-item md-size-65 md-medium-size-50 md-small-size-100">
                                                    <md-field class="md-form-group content-form__participantes">
                                                        <md-icon>groups</md-icon>
                                                        <label>Participantes</label>
                                                        <md-input v-model="FormReuniaoParticipantes" type="text"></md-input>
                                                    </md-field>
                                                </div>
                                                <div class="content-button">
                                                    <md-button class="md-primary button-adicionar" @click="adicionaCardReuniao">Adicionar</md-button>
                                                </div>
                                            </form>
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
import CardAtividades from "./components/CardAtividadesSection";

export default {
    components: {
        NavTabsCard,
        CardReuniao,
        CardAtividades,
    },
    props: {
        image: {
            type: String,
            default: require("@/assets/img/vue-mk-header.jpg")
        },
    },
    data(){
        return {
            // Reuniões
            list_reuniao:false,
            reunioes: [],
            FormReuniaoAssunto: '',
            FormReuniaoData: new Date(),
            FormReuniaoParticipantes: '',

            // Atividades
            list_atividades:true,
            atividades: [
                {projeto: "Cosmos", date: "05/12/2022", atvRelizadas: "Correção de cards retangulares; Criação do conteudo principal"},
                {projeto: "Padrão Vue", date: "05/10/2021", atvRelizadas: "Correção de cards retangulares; Criação do conteudo principal"},
                {projeto: "Gestore Automatiza", date: "05/09/2012", atvRelizadas: "Correção de cards retangulares; Criação do conteudo principal"}
            ],
        }
    },
    methods: {
        // Reuniões
        limparListaReuniao() {         
            this.reunioes = [];
            this.saveReuniaoLS();
            this.list_reuniao = false;
        },
        removerCardReuniao(param) {
            this.reunioes.splice(param,1);
            this.saveReuniaoLS();
            if(this.reunioes.length === 0) {
                this.list_reuniao = false;
            }
        },
        adicionaCardReuniao() {
            const assunto = document.getElementsByClassName('content-form__assunto')[0];
            const data = document.getElementsByClassName('content-form__data')[0];
            const participantes = document.getElementsByClassName('content-form__participantes')[0];
            
            //Validações
            if(this.FormReuniaoAssunto == '') {
                assunto.classList.add('md-error');
            } else {
                assunto.classList.remove('md-error');
            }

            if(this.FormReuniaoData == '') {
                data.classList.add('md-error');
            } else {
                data.classList.remove('md-error');
            }

            if(this.FormReuniaoParticipantes == '') {
                participantes.classList.add('md-error');
            } else {
                participantes.classList.remove('md-error');
            }

            if(this.FormReuniaoAssunto != '' && this.FormReuniaoData != '' && this.FormReuniaoParticipantes != '') {
                this.reunioes.push({
                    info: this.FormReuniaoAssunto, 
                    date: this.retornaDataCorreta(this.FormReuniaoData), 
                    part: this.FormReuniaoParticipantes,
                });
                this.saveReuniaoLS();
                this.list_reuniao = true;
                this.FormReuniaoAssunto = ''; 
                this.FormReuniaoParticipantes = '';
            };
        },

        //Atividades
        limparListaAtividades(){
            this.atividades = [];
            //this.saveReuniaoLS();
            this.list_atividades = false;
        },
        removerCardAtividade(param) {
            this.atividades.splice(param,1);
            //this.saveReuniaoLS();
            if(this.atividades.length === 0) {
                this.list_atividades = false;
            }
        },
        //Funções Gerais
        retornaDataCorreta(formData) {
            let data = ``;
            if(formData.getMonth() < 10){
                if(formData.getDate() < 10) {
                    data = `0${formData.getDate()}/0${formData.getMonth()+1}/${formData.getFullYear()}`
                } else {
                    data = `${formData.getDate()}/0${formData.getMonth()+1}/${formData.getFullYear()}`
                }
            } else {
                data = `${formData.getDate()}/${formData.getMonth()+1}/${formData.getFullYear()}`
            }
            return data;
        },

        //Salva localStorege
        saveReuniaoLS() {
            const parsed = JSON.stringify(this.reunioes);
            localStorage.setItem('reunioes', parsed);
        }
    },
    computed: {
        bgImage() {
            return {
                backgroundImage: `url(${this.image})`
            };
        },
    },
    mounted() {
        // Remover o svg do datepicker
        const svgs = Array.from(document.getElementsByClassName('md-date-icon'));
        svgs.forEach(svg => svg.children[0].remove());

        //Verifica localStorege
        if (localStorage.getItem('reunioes')) {
            try {
                this.reunioes = JSON.parse(localStorage.getItem('reunioes'));
                if(this.reunioes.length > 0) {
                    this.list_reuniao = true;
                }
            } catch (error) {
                localStorage.removeItem('reunioes');
            }
        }
    },
    
}
</script>

<style lang='scss' scoped>
    .backImage {
        margin: 0;
        background-repeat: no-repeat;
        background-size: cover;
        height: 350px;
    }

    .section {
        padding: 70px;

        @media screen  and (max-width: 769px) {
            padding: 70px 20px;
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

    // Scss dos Botões Apagar Lista ou Adicionar
    .content-button {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        .button-apagar, .button-adicionar{
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

        .button-adicionar {
            margin-right: 20px;
        }
    }

    // Scss dos Warning
    .content-warning {
        width: 100%;
        padding: 0 20px;
    }

    // Scss da div para reuniões e atividades
    .content-card {
        background-color: transparent;
        max-height: 320px;
        overflow-y: auto;
        padding: 15px;

        @media screen  and (max-width: 426px) {
            padding: 4px;
        }

        .cards {
            ~.cards {
             margin-top: 20px;
            }
        }
    }
    
    // Scss da div para form
    .content-form {
        .md-datepicker {
            .icon-date {
                position: absolute;
            }
            
        }
    }
</style>