import React, { useState, useEffect } from 'react';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

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

export default function Solucoes(){
    const [textSolucao, setTextSolucao] = useState();
    const textInicial = (
        <>  
            <h3>Clique nos ícones ao lado para carregar os módulos de cada sistema.</h3>
            <h2>DEVELOPER Gestão Empresarial</h2>
            <p>Solução ERP para distribuidores, atacadistas, prestadores de serviços, indústrias de manufatura não seriada, 
                manufatura seriada, prestadores de serviços de medicina e segurança do trabalho, entre outros segmentos 
                de negócios.</p>
            <br/>
            <p>Utilizar a solução DEVELOPER Gestão Empresarial significa crescer em âmbito tecnológico e de negócio, 
                pois a solução foi projetada para a empresa que quer evoluir, sendo suportado por um software de 
                gestão que acompanhe este crescimento.</p>
        </>
    );

    const textFinanceiro = (
        <>
            <h2>Financeiro</h2>
            <p>- Proporciona o gerenciamento de todas as atividades do controle financeiro da empresa, permitindo 
                uma visão completa e detalhada da situação financeira da empresa.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Planejamento Orçamentário</li>
                <li>- Contas a Receber</li>
                <li>- Cobrança Escritural</li>
                <li>- Contas a Pagar</li>
                <li>- Pagamento Escritural</li>
                <li>- Conciliação Bancária</li>
                <li>- Fluxo de Caixa</li>
                <li>- Análise de Resultado</li>
                <li>- Integração Contábil</li>
            </ul>
        </>
    );

    const textProducao = (
        <>
            <h2>Produção</h2>
            <p>- Proporciona o controle efetivo e seguro dos processos, etapas, listas de componentes e apontamentos 
                de mão-de-obra desde a engenharia do produto até o controle do chão-de-fábrica. 
            <br/>- Atende as características das manufaturas de processo e discreta, assim como das manufaturas não seriada ou por projeto.
            <br/>- Possibilita uma visão completa e detalhada da área fabril, permitindo controle e 
            acompanhamento de todas as etapas de produção.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Engenharia</li>
                <li>- Integração Projeto CAD</li>
                <li>- Configurador de Produto</li>
                <li>- Planejamento da Produção</li>
                <li>- Controle da Produção</li>
            </ul>
        </>
    );

    const textComercial  = (
        <>
            <h2>Comercial</h2>
            <p>- Proporciona o gerenciamento de orçamentos, pedidos de venda, faturamento e, 
                por conseguinte a geração de títulos no financeiro e carga de estoque no sistema Logística.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Orçamento</li>
                <li>- Pedido de Venda</li>
                <li>- Faturamento</li>
                <li>- NF-e Produto</li>
                <li>- NFS-e Serviço</li>
                <li>- CC-e Carta de Correção</li>
                <li>- MDF-e Manifesto de Documento Fiscal</li>
                <li>- Comissão de Venda</li>
                <li>- PAF ECF FREELINE</li>
            </ul>
        </>
    );

    const textLogistica  = (
        <>
            <h2>Logística</h2>
            <p>- Proporciona o gerenciamento das entradas de mercadorias, controle da movimentação 
                de estoque, inventário dos estoques e gerenciamento de pedidos de compra.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Compras</li>
                <li>- Integração XML NF-e</li>
                <li>- Recebimento</li>
                <li>- Estoque</li>
                <li>- Avaliação de Fornecedor</li>
            </ul>
        </>
    );

    const textServico  = (
        <>
            <h2>Serviço</h2>
            <p>- Proporciona o gerenciamento de orçamentos e das ordens de serviço da organização.
            <br/>- A partir dos apontamentos dos itens e da mão-de-obra utilizadas na ordem de serviço em questão, 
            é possível gerar a nota fiscal de produto (NF-e) e de serviço (NFS-e) de forma automática.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Orçamento</li>
                <li>- Ordem de Serviço</li>
            </ul>
        </>
    );

    const textControleQualidade  = (
        <>
            <h2>Controle de Qualidade</h2>
            <p>- Proporciona a rastreabilidade total dos processos de recebimento, produção e expedição.
            <br/>- Registra as informações de lotes e análises de matéria-prima, produtos semi-acabados e produtos acabados, 
            permitindo também obter as respostas dos questionamentos abaixo.
            <br/>- Tracking: os lotes de matéria-primas foram consumidas para gerar quais lotes de produtos?
            <br/>- Tracing: os lotes de produtos foram produzidos consumindo quais matéria-primas?</p>
            <h2>Módulos</h2>
            <ul>
                <li>- CQ Recebimento</li>
                <li>- CQ Produção</li>
                <li>- CQ Rastreabilidade</li>
            </ul>
        </>
    );

    const textFiscal  = (
        <>
            <h2>Fiscal</h2>
            <p>- Proporciona a geração das informações fiscais exigidas pelo Fisco pelo layout 
                do SPED (Sistema Público de Escrituração Digital).
            <br/>- Estas informações são enviadas para o sistema de Contabilidade para posterior envio ao Fisco 
            em conjunto com outras informações da própria Contabilidade.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- SPED Fiscal</li>
            </ul>
        </>
    );

    const textUniversal  = (
        <>
            <h2>Universal</h2>
            <p>- Proporciona o cadastramento de todas as tabelas que são universais, ou seja, que 
                são utilizadas por mais de um sistema (não específicas do sistema).
            <br/>- Também proporciona o gerenciamento e controle de segurança do sistema, possibilitando 
            a criação de menus com perfis adequados, além de criações de grupo de usuários e os próprios usuários.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Parâmetro Geral</li>
                <li>- Menu e Segurança</li>
            </ul>
        </>
    );

    const textBI  = (
        <>
            <h2>BI</h2>
            <p>- Proporciona ao empresário uma rápida tomada de decisão com base em informações estratégicas obtidas dos demais sistemas de gestão.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Business Monitor</li>
            </ul>
        </>
    );

    const textGestaoPessoas  = (
        <>
            <h2>Gestão de Pessoas</h2>
            <p>- Proporciona o acompanhamento e controle dos profissionais que atuam na organização.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Controle de RH</li>
            </ul>
        </>
    );

    const textMedicina  = (
        <>
            <h2>Medicina e Segurança de Trabalho</h2>
            <p>- Proporciona o gerenciamento dos processos que visam a garantia da saúde e integridade do trabalhador. 
            Atende a legislação vigente permitindo que a empresa esteja em dia com suas obrigações juntos aos trabalhadores.</p>
            <br/>- Proporciona o gerenciamento dos contratos com clientes e fornecedores para empresas prestadoras de serviço.
            <br/>- Proporciona a cobrança pelos atendimentos realizados para empresas prestadoras de serviço.
            <h2>Módulos</h2>
            <ul>
                <li>- Controle de Agenda</li>
                <li>- Controle PCMSO</li>
                <li>- ASO</li>
                <li>- Geração de Laudo</li>
                <li>- Controle de Contrato</li>
                <li>- Entrega de EPI</li>
            </ul>
        </>
    );

    const textGestaoAmbiental  = (
        <>
            <h2>Gestão Ambiental</h2>
            <p>- Proporciona o gerenciamento dos Manifestos de Transporte de Resíduos e Certificados de Destinação Final de Resíduos.</p>
            <br/>- Proporciona a cobrança pelos resíduos destinados.
            <h2>Módulos</h2>
            <ul>
                <li>- Gestão de Resíduos</li>
            </ul>
        </>
    );

    const textGestaoClinica  = (
        <>
            <h2>Gestão Clínica</h2>
            <p>- Proporciona o gerenciamento de agendas, pacientes e atendimentos realizados na clínica.</p>
            <br/>- Proporciona o gerenciamento dos contratos com clientes e fornecedores.
            <br/>- Proporciona o gerenciamento da comissão dos profissionais envolvidos nos atendimentos.
            <h2>Módulos</h2>
            <ul>
                <li>- Controle de Agenda</li>
                <li>- Controle de Contrato</li>
                <li>- Gestão de Convênio</li>
            </ul>
        </>
    );

    const textCrm  = (
        <>
            <h2>CRM</h2>
            <p>- Proporciona o gerenciamento das oportunidades de negócio, gestão dos leads e clientes com 
                programação de contatos, controle de atividades e painéis estatísticos com os resultados da 
                empresa e equipe de vendas.</p>
            <h2>Módulos</h2>
            <ul>
                <li>- Gerenciamento das Oportunidades</li>
                <li>- Gerenciamento de Leads e Contas</li>
                <li>- Controle de Atividades</li>
                <li>- Estatísticas da Empresa e Equipe de Vendas</li>

            </ul>
        </>
    );

    const textManutAtivos  = (
        <>
            <h2>Manutenção de Ativos</h2>
            <p>- Proporciona o gerenciamento das manutenções realizadas nos equipamentos da empresa.</p>
            <br/>- Proporciona ao empresário uma rápida tomada de decisão com base em indicadores de manutenção obtidos a partir das Ordens de Servico lançadas.
            <h2>Módulos</h2>
            <ul>
                <li>- Ordem de Serviço</li>
                <li>- Indicadores de Manutenção</li>
            </ul>
        </>
    );

    useEffect(() => {
        setTextSolucao(textInicial)
        window.scrollTo(0,0);
    }, []);


    async function handleUpdateText(solucao){
        switch(solucao) {
            case('financeiro'):
                setTextSolucao(textFinanceiro); 
                break;
            case('comercial'): 
                setTextSolucao(textComercial); 
                break;
            case('logistica'):
                setTextSolucao(textLogistica); 
                break;
            case('producao'): 
                setTextSolucao(textProducao); 
                break;
            case('servico'):
                setTextSolucao(textServico); 
                break;
            case('controleQualidade'): 
                setTextSolucao(textControleQualidade); 
                break;
            case('fiscal'):
                setTextSolucao(textFiscal); 
                break;
            case('gestaoPessoas'): 
                setTextSolucao(textGestaoPessoas); 
                break;
            case('medicina'):
                setTextSolucao(textMedicina); 
                break;
            case('gestaoAmbiental'): 
                setTextSolucao(textGestaoAmbiental); 
                break;
            case('gestaoClinica'):
                setTextSolucao(textGestaoClinica); 
                break;
            case('crm'): 
                setTextSolucao(textCrm); 
                break;
            case('universal'): 
                setTextSolucao(textUniversal); 
                break;
            case('bi'): 
                setTextSolucao(textBI); 
                break;
            case('manutAtivos'): 
                setTextSolucao(textManutAtivos); 
                break;
            default:
                setTextSolucao(textInicial);
       }
    }

    return (
        <>
            <Header/>
            <Menu/>
            <div className="outside-container">
                <div className="animate__animated animate__fadeIn">
                    <div className="solution-icons" >
                        <div className="sol-financeiro">
                            <img alt="Financeiro" src={financeiro} onClick={() => handleUpdateText('financeiro')}/>
                            <p>Financeiro</p>
                        </div>
                        <div className="sol-comercial">
                            <img alt="Comercial" src={comercial} onClick={() => handleUpdateText('comercial')}/>
                            <p>Comercial</p>
                        </div>
                        <div className="sol-logistica">
                            <img alt="Logística" src={logistica} onClick={() => handleUpdateText('logistica')}/>
                            <p>Logística</p>
                        </div>
                        <div className="sol-producao">
                            <img alt="Produção" src={producao} onClick={() => handleUpdateText('producao')}/>
                            <p>Produção</p>
                        </div>
                        <div className="sol-servico">
                            <img alt="Serviço" src={servico} onClick={() => handleUpdateText('servico')}/>
                            <p>Serviço</p>
                        </div>
                        <div className="sol-controleQualidade">
                            <img alt="Controle de Qualidade" src={controleQualidade} onClick={() => handleUpdateText('controleQualidade')}/>
                            <p>Controle de Qualidade</p>
                        </div>
                        <div className="sol-gestaoPessoas">
                            <img alt="Gestão de Pessoas" src={gestaoPessoas} onClick={() => handleUpdateText('gestaoPessoas')}/>
                            <p>Gestão de Pessoas</p>
                        </div>
                        <div className="sol-medicina">
                            <img alt="Medicina e Segurança do Trabalho" src={medicina} onClick={() => handleUpdateText('medicina')}/>
                            <p>Medicina e Segurança do Trabalho</p>
                        </div>
                        <div className="sol-gestaoAmbiental">
                            <img alt="Gestão Ambiental" src={gestaoAmbiental} onClick={() => handleUpdateText('gestaoAmbiental')}/>
                            <p>Gestão Ambiental</p>
                        </div>
                        <div className="sol-gestaoClinica">
                            <img alt="Gestão Clínica" src={gestaoClinica} onClick={() => handleUpdateText('gestaoClinica')}/>
                            <p>Gestão Clínica</p>
                        </div>
                        <div className="sol-fiscal">
                            <img alt="Fiscal" src={fiscal} onClick={() => handleUpdateText('fiscal')}/>
                            <p>Fiscal</p>
                        </div>
                        <div className="sol-crm">
                            <img alt="CRM" src={crm} onClick={() => handleUpdateText('crm')}/>
                            <p>CRM</p>
                        </div>
                        <div className="sol-universal">
                            <img alt="Universal" src={universal} onClick={() => handleUpdateText('universal')}/>
                            <p>Universal</p>
                        </div>
                        <div className="sol-bi">
                            <img alt="BI" src={bi} onClick={() => handleUpdateText('bi')}/>
                            <p>BI</p>
                        </div>
                        <div className="sol-manutAtivos">
                            <img alt="Manutenção de Ativos" src={manutAtivos} onClick={() => handleUpdateText('manutAtivos')}/>
                            <p>Manutenção de Ativos</p>
                        </div>
                    </div>
                </div>
                <div className="solution-text">
                    {textSolucao}
                </div>
            </div>
            
            <Footer/>
        </>
    );
}