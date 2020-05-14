import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import MVV from '../../assets/teste.png';

export default function Empresa(){
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Menu/>
                <div className="top-content">
                    <p>A DEVELOPER possui um grande portfólio de soluções para distribuidores, atacadistas, prestadores de serviços, indústrias de manufatura não seriada, manufatura seriada, prestadores de serviços de medicina e segurança do trabalho, entre outros segmentos de negócios, fazendo definitivamente a diferença para seus clientes.</p>
                </div>
                <div className="main-container">
                    <div className="history-content">
                        <h1>Histórico</h1>
                        <ul>
                            <li>Com respeito, qualidade, inovação e comprometimento. Foi desta forma que a DEVELOPER SOFTWARE nasceu, atuando de forma séria, íntegra e consistente.</li>
                            <li>Fundada em 2001, a DEVELOPER SOFTWARE iniciou suas atividades atuando como fábrica de software e provedora de serviços profissionais especializados para outras empresas de software corporativo.</li>
                            <li>A partir de 2004, iniciou o desenvolvimento de sua solução corporativa denominada DEVELOPER Gestão Empresarial, realizando um grande investimento para a criação de sua solução ERP (Enterprise Resource Planning) com o objetivo de simplificar, integrar, flexibilizar, agilizar e permitir integridade dos processos e informações de gestão do negócio de seus clientes.</li>
                        </ul>
                    </div>

                    <div className="message-panel">
                        <h1>Mensagem do CEO</h1>
                        <p>Prezados Clientes e Fornecedores.</p>

                        <p>Em 2001 fundamos a DEVELOPER SOFTWARE, uma empresa consolidada no mercado de software e que atua apoiando o crescimento das organizações. Em todo este tempo de atuação passamos por muitas transformações e criamos soluções corporativas que aperfeiçoam os processos de negócios dos nossos clientes.</p>

                        <p>Somos uma empresa que trabalha com muita seriedade, responsabilidade e estamos comprometidos com o negócio de nossos clientes, uma vez que nosso produto participa da vida operacional e estratégica das organizações que o utilizam. Somos uma empresa sem fronteiras, no que concerne à tecnologia e mercado de atuação e, definitivamente buscamos fazer a diferença nos negócios de nossos clientes.</p>

                        <p>Conte sempre conosco.</p>

                        <p>Um cordial abraço.</p>

                        <p>Juliano Cesar Rodrigues</p>
                        <p>Fundador e CEO da DEVELOPER SOFTWARE</p>
                      
                    </div>

                </div>
                <div class="push"/>
            </div>
            
            <Footer/>
        </>
    );
}