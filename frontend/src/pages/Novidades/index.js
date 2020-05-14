import React from 'react';
import { FiGrid, FiFileText, FiCalendar } from 'react-icons/fi'

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default function AreaCliente(){
    const systems = [{
        name: "Financeiro",
        news: [{
            name: "Relatório Fluxo de Caixa Realizado - Parâmetro Quebra Página",
            description: "Implementado parâmetro no relatório Fluxo de Caixa Realizado para permitir gerar o relatório sem quebrar de página por dia.",
            date: "11/05/2020",
            version: "149"
        }],
        modules: ["Planejamento Orçamentário","Contas a Receber","Cobrança Escritural","Contas a Pagar","Pagamento Escritural","Conciliação Bancária","Fluxo de Caixa","Análise de Resultado","Lançamento Contábil"]
    }, {
        name: "Produção",
        news: [{
            name: "Planilha x Ordem Produção - Lista Componente",
            description: "Criado um parâmetro para indicar se a empresa deve gerar na importação a lista de componentes do PA ou SA juntamente com os recursos informados na planilha.",
            date: "10/05/2020",
            version: "150"
        }, {
            name: "Planilha x Ordem - Reserva Programada Automática",
            description: "Criado um parâmetro para indicar se deve realizar a Reserva Programada para os recursos da Ordem de Produção.",
            date: "10/02/2020",
            version: "151"
        }],
        modules: ["Engenharia","Configurador Produto","Planejamento Produção","Controle Produção","Integração Projeto CAD"]
    }, {
        name: "Comercial",
        news: [{
            name: "Relatório Inatividade Compra Cliente",
            description: " Criado Flag para indicar se deve ou não listar os Clientes sem Compras ou somente os que não possuem dívida no Financeiro.",
            date: "10/04/2020",
            version: "148"
        }],
        modules: ["Orçamento","Pedido Venda","Faturamento","Comissão Venda","NF-e Produto","NFS-e Serviço","CC-e Carta Correção","MDF-e Manif. Doc. Fisc."]
    }];


    return (
        <>
            <div className="wrapper">
                <Header/>
                <Menu/>
                <div className="novidades">
                    <p>Clique no sistema desejado para ver as novidades.</p>
                    <br/>
                    <p>Se desejar a atualização do seu sistema para obter as novidades abaixo, 
                        por gentileza entre em contato com o Suporte Developer por intermédio do 
                        email suporte@developer.inf.br ou telefone (47) 3029-2771.</p>
                </div>
                <div className="wrap-collabsible">
                    <br/>

                    {systems.map((system, index) => (
                    <div className="systems" key={index}>
                        <input id={index} className="toggle" type="checkbox"/>                                                  
                        <label htmlFor={index} className="lbl-toggle">{system.name}</label>    
                        <div className="collapsible-content">                                                                      
                            <div className="content-inner">                                                                            
                                <div className="content-modules">                                                                            
                                    <h4 className="module-news"><FiGrid size={18} color="#000"/>MÓDULOS DISPONÍVEIS</h4>
                                    <nav>
                                    <ul>
                                        {system.modules.map((module, index) => (
                                            <li key={index}>{module}</li>
                                        ))}    
                                    </ul>
                                    </nav>
                                </div>                                                                            
                                <h4 className="title-news"><FiFileText size={18} color="#000"/>NOVIDADES</h4>
                                {system.news.map((item, index) => (
                                    <div key={index}>
                                        <div className="items">
                                            <p className="item-title">{item.name}</p>
                                            <p><FiCalendar size={18} color="#000"/> {item.date}</p>
                                            <p>Versão: {item.version}</p> 
                                        </div>
                                        <div className="items-description" key={index}>
                                            <p>{item.description}</p> 
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                                <br/>
                                <br/>                    
                            </div>
                        </div>
                    </div>
                    ))}   

                </div>
                <div className="push"/>
            </div>
            
            <Footer/>
        </>
    );
}