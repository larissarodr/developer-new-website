import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';


export default function Empresa(){
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Menu/>
                <div className="main-container">
                    <div className="institutional">
                        <p>A DEVELOPER possui um grande portfólio de soluções para distribuidores, atacadistas, prestadores de serviços, indústrias de manufatura não seriada, manufatura seriada, prestadores de serviços de medicina e segurança do trabalho, entre outros segmentos de negócios, fazendo definitivamente a diferença para seus clientes.</p>
                    </div>

                    <div className="below-panel">
                        <div className="missao">
                            <h2>Missão</h2>
                            <p>Prover soluções de excelência em software, agregando alto valor ao negócio do cliente.</p>
                        </div>
                        <div className="visao">
                            <h2>Visão</h2>
                            <ul>
                                <li>- Ser referência e líder no segmento de ERP.</li>
                                <li>- Ser uma empresa sem fronteiras.</li>
                            </ul>
                        </div>
                        <div className="valores">
                            <h2>Valores</h2>
                            <ul>
                                <li>- Foco no Cliente</li>
                                <li>- Integridade</li>
                                <li>- Comprometimento</li>
                                <li>- Qualidade</li>
                                <li>- Inovação</li>
                                <li>- Flexibilidade</li>
                                <li>- Responsabilidade</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="push"/>
            </div>
            
            <Footer/>
        </>
    );
}