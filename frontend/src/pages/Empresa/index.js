import React from "react";

import "./styles.css";
import "animate.css/animate.min.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

export default function Empresa() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Menu />

        <div className="main-container">
          <div className="animate__animated animate__fadeIn">
            <div className="history-content">
              <h1>Sobre a DEVELOPER SOFTWARE</h1>
              <p>
                Com respeito, qualidade, inovação e comprometimento. Foi desta
                forma que a DEVELOPER SOFTWARE nasceu, atuando de forma séria,
                íntegra e consistente.
              </p>
              <br />
              <p>
                Fundada em 2001, a DEVELOPER SOFTWARE iniciou suas atividades
                atuando como fábrica de software e provedora de serviços
                profissionais especializados para outras empresas de software
                corporativo.
              </p>
              <br />
              <p>
                A partir de 2004, iniciou o desenvolvimento de sua solução
                corporativa denominada DEVELOPER Gestão Empresarial, realizando
                um grande investimento para a criação de sua solução ERP
                (Enterprise Resource Planning) com o objetivo de simplificar,
                integrar, flexibilizar, agilizar e permitir integridade dos
                processos e informações de gestão do negócio de seus clientes.
              </p>
              <br />
              <p>
                Hoje, a DEVELOPER possui um grande portfólio de soluções para
                distribuidores, atacadistas, prestadores de serviços, indústrias
                de manufatura não seriada, manufatura seriada, prestadores de
                serviços de medicina e segurança do trabalho, entre outros
                segmentos de negócios, fazendo definitivamente a diferença para
                seus clientes.
              </p>
              <br />
              <p>
                A DEVELOPER SOFTWARE conta com um time de profissionais
                especialistas em engenharia de software e com vasta experiência
                no segmento de soluções corporativas, desenvolvendo e
                implantando software de gestão aos seus clientes.
              </p>

              <h2>Missão</h2>
              <p>
                Prover soluções de excelência em software, agregando alto valor
                ao negócio do cliente
              </p>
              <h2>Visão</h2>
              <p>
                - Ser reconhecida como uma empresa que faz a diferença
                <br />- Ser uma empresa sem fronteiras
              </p>
              <h2>Valores</h2>
              <p>
                Foco no cliente, integridade, comprometimento, qualidade,
                inovação, flexibilidade e responsabilidade
              </p>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <div className="circles">
                <div className="items">
                  <p>50+ módulos desenvolvidos</p>
                </div>
                <div className="items">
                  <p>Clientes em 8 estados do Brasil</p>
                </div>
                <div className="items">
                  <p>300+ clientes atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="push" />
      </div>

      <Footer />
    </>
  );
}
