import React from 'react';
import { Link } from 'react-router-dom';
import "animate.css/animate.min.css";
import './styles.css';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import FadeInSection from '../../components/FadeInSection';
import Video from "./video.js";

import mainImg from '../../assets/handsChartDarker.jpg'

import manutAtivos from '../../assets/iconeManutAtivos.png'
import fiscal from '../../assets/iconeFiscal.png'
import bi from '../../assets/iconeBI.png'
import universal from '../../assets/iconeUniversal.png'
import comercial from '../../assets/iconeComercial.png'
import controleQualidade from '../../assets/iconeControleQualidade.png'
import crm from '../../assets/iconeCRM.png'
import financeiro from '../../assets/iconeFinanceiro.png'
import gestaoAmbiental from '../../assets/iconeGestaoAmb.png'
import gestaoClinica from '../../assets/iconeGestaoClinica.png'
import gestaoPessoas from '../../assets/iconeGestaoPessoas.png'
import logistica from '../../assets/iconeLogistica.png'
import medicina from '../../assets/iconeMedicina.png'
import producao from '../../assets/iconeProducao.png'
import servico from '../../assets/iconeServicos.png'

export default function Main(){

    return (
        <>
            <div className="wrapper">
                <Header/>
                <Menu/>
                <div className="first-image">
                    <img alt="Developer Software ERP Gestão Empresarial" src={mainImg} className="animate__animated animate__fadeInRight"/>
                </div>
                <div className="solutions">
                    <div className="title">
                        <FadeInSection>
                            <h2>DEVELOPER Gestão Empresarial</h2>
                        </FadeInSection>
                        <FadeInSection>
                            <p className="evolution">Uma evolução tecnológica constante...</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>Encontre a melhor solução para o seu negócio</p>
                        </FadeInSection>
                    </div>
                    <div className="icons">
                            <div className="financeiro">
                                <FadeInSection>
                                    <img alt="Financeiro" src={financeiro}/>
                                    <p>Financeiro</p>
                                </FadeInSection>
                            </div>
                        <div className="comercial">
                            <FadeInSection>
                                <img alt="Comercial" src={comercial}/>
                                <p>Comercial</p>
                            </FadeInSection>
                        </div>
                        <div className="logistica">
                            <FadeInSection>
                                <img alt="Logística" src={logistica}/>
                                <p>Logística</p>
                            </FadeInSection>
                        </div>
                        <div className="producao">
                            <FadeInSection>
                                <img alt="Produção" src={producao}/>
                                <p>Produção</p>
                            </FadeInSection>
                        </div>
                        <div className="servico">
                            <FadeInSection>
                                <img alt="Serviço" src={servico}/>
                                <p>Serviço</p>
                            </FadeInSection>
                        </div>
                        <div className="controleQualidade">
                            <FadeInSection>
                                <img alt="Controle de Qualidade" src={controleQualidade}/>
                                <p>Controle de Qualidade</p>
                            </FadeInSection>
                        </div>
                        <div className="fiscal">
                            <FadeInSection>
                                <img alt="Fiscal" src={fiscal}/>
                                <p>Fiscal</p>
                            </FadeInSection>
                        </div>
                        <div className="gestaoPessoas">
                            <FadeInSection>
                                <img alt="Gestão de Pessoas" src={gestaoPessoas}/>
                                <p>Gestão de Pessoas</p>
                            </FadeInSection>
                        </div>
                        <div className="medicina">
                            <FadeInSection>
                                <img alt="Medicina e Segurança do Trabalho" src={medicina}/>
                                <p>Medicina e Segurança do Trabalho</p>
                            </FadeInSection>
                        </div>
                        <div className="gestaoAmbiental">
                            <FadeInSection>
                                <img alt="Gestão Ambiental" src={gestaoAmbiental}/>
                                <p>Gestão Ambiental</p>
                            </FadeInSection>
                        </div>
                        <div className="gestaoClinica">
                            <FadeInSection>
                                <img alt="Gestão Clínica" src={gestaoClinica}/>
                                <p>Gestão Clínica</p>
                            </FadeInSection>
                        </div>
                        <div className="crm">
                            <FadeInSection>
                                <img alt="CRM" src={crm}/>
                                <p>CRM</p>
                            </FadeInSection>
                        </div>
                        <div className="universal">
                            <FadeInSection>
                                <img alt="Universal" src={universal}/>
                                <p>Universal</p>
                            </FadeInSection>
                        </div>
                        <div className="BI">
                            <FadeInSection>
                                <img alt="BI" src={bi}/>
                                <p>BI</p>
                            </FadeInSection>
                        </div>
                        <div className="manutAtivos">
                            <FadeInSection>
                                <img alt="Manutenção de Ativos" src={manutAtivos}/>
                                <p>Manutenção de Ativos</p>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="buttons">
                        <FadeInSection>
                            <button>
                                <Link to='/solucoes'>Conheça nossas soluções</Link>
                            </button>
                        </FadeInSection>
                    </div>
					<div className="video">
						<Video/>
					</div>
                </div>
                <div className="push"/>
            </div>
            <Footer/>
        </>
    );
}