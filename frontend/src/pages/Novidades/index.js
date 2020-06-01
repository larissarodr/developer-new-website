import React, { useState, useEffect } from 'react';
import { FiGrid, FiFileText, FiCalendar } from 'react-icons/fi'
import api from '../../services/api';
import Moment from 'react-moment';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default function AreaCliente(){

    const [systems, setSystems] = useState([]);

    useEffect(() => {
        api.get('news').then(response => {
            setSystems(response.data.systems);
        })
    }, []);

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
                                {system.news.length ? system.news.map((item, index) => (
                                    <div key={index}>
                                        <div className="items">
                                            <p className="item-title">- {item.name}</p>
                                            <p><FiCalendar size={18} color="#000"/> <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                            <p>Versão: {item.version}</p> 
                                        </div>
                                        <div className="items-description" key={index}>
                                            <p>{item.description.split('&lt;p&gt;').join('').split('&lt;/p&gt;').join('').split('&lt;br /&gt;').join('\n').split('&#226;').join('â').split('&#224;').join('à').split('&#225;').join('á').split('&#227;').join('ã').split('&#231;').join('ç').split('&#233;').join('é').split('&#234;').join('ê').split('&#237;').join('í').split('&#245;').join('õ').split('&#243;').join('ó').split('&#244;').join('ô').split('&#250;').join('ú').split('&#160;').join(' ').split('&#8220;').join('"').split('&#8221;').join('"')}</p> 
                                        </div>
                                        <hr/>
                                    </div>
                                )) : <p>Nenhuma novidade para este módulo.</p>}
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