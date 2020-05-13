import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import mainImg from '../../assets/handsChart-5.jpg'

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
                    <img alt="Developer Software" className="mySlides" src={mainImg}/>
                </div>
                <div className="solutions">
                    <div className="title">
                        <h2>DEVELOPER Gestão Empresarial</h2>
                        <p>Encontre a melhor solução para o seu negócio</p>
                    </div>
                    <div className="icons">
                        <div className="financeiro">
                            <img alt="Financeiro" src={financeiro}/>
                            <p>Financeiro</p>
                        </div>
                        <div className="comercial">
                            <img alt="Comercial" src={comercial}/>
                            <p>Comercial</p>
                        </div>
                        <div className="logistica">
                            <img alt="Logística" src={logistica}/>
                            <p>Logística</p>
                        </div>
                        <div className="producao">
                            <img alt="Produção" src={producao}/>
                            <p>Produção</p>
                        </div>
                        <div className="servico">
                            <img alt="Serviço" src={servico}/>
                            <p>Serviço</p>
                        </div>
                        <div className="controleQualidade">
                            <img alt="Controle de Qualidade" src={controleQualidade}/>
                            <p>Controle de Qualidade</p>
                        </div>
                        <div className="fiscal">
                            <img alt="Fiscal" src={fiscal}/>
                            <p>Fiscal</p>
                        </div>
                        <div className="gestaoPessoas">
                            <img alt="Gestão de Pessoas" src={gestaoPessoas}/>
                            <p>Gestão de Pessoas</p>
                        </div>
                        <div className="medicina">
                            <img alt="Medicina e Segurança do Trabalho" src={medicina}/>
                            <p>Medicina e Segurança do Trabalho</p>
                        </div>
                        <div className="gestaoAmbiental">
                            <img alt="Gestão Ambiental" src={gestaoAmbiental}/>
                            <p>Gestão Ambiental</p>
                        </div>
                        <div className="gestaoClinica">
                            <img alt="Gestão Clínica" src={gestaoClinica}/>
                            <p>Gestão Clínica</p>
                        </div>
                        <div className="crm">
                            <img alt="CRM" src={crm}/>
                            <p>CRM</p>
                        </div>
                        <div className="universal">
                            <img alt="Universal" src={universal}/>
                            <p>Universal</p>
                        </div>
                        <div className="BI">
                            <img alt="BI" src={bi}/>
                            <p>BI</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button>
                            <Link to='/solucoes'>Conheça nossas soluções</Link>
                        </button>
                    </div>
                </div>
                <div class="push"/>
            </div>
            <Footer/>
        </>
    );
}