import React from 'react';
import { FiHome, FiAtSign, FiPhone } from 'react-icons/fi'

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default function Profissionais(){

      return (
        <>
          <div className="wrapper">
            <Header/>
            <Menu/>
            <div className="contact">
              <div className="section-one">
                <div className="item">
                  <h1>Geral</h1>
                  <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                  <p><FiAtSign size={16} color="#000"/>developer@developer.inf.br</p>
                  <p><FiHome size={16} color="#000"/>Joinville, SC</p>
                </div>
                <div className="item">
                  <h1>Vendas</h1>
                  <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                  <p><FiAtSign size={16} color="#000"/>comercial@developer.inf.br</p>
                </div>
                <div className="item">
                  <h1>Suporte</h1>
                  <p><FiPhone size={16} color="#000"/> (47) 3029-2771</p>
                  <p><FiAtSign size={16} color="#000"/>suporte@developer.inf.br</p>
                </div>
                <div className="item">
                  <h1>Financeiro</h1>
                  <p><FiAtSign size={16} color="#000"/>financeiro@developer.inf.br</p>
                </div>
              </div>
              <div className="section-two">
                <h1>Entre em Contato</h1>
                <form className="contact-form">
                  <label>Nome:
                    <input 
                          placeholder="Nome" 
                      />
                  </label>
                  <label>E-mail:
                    <input 
                        placeholder="E-mail"             
                    />
                  </label>
                  <label>Mensagem:
                    <textarea 
                        placeholder="Mensagem"            
                    />
                  </label>
                  <button className="button" type="submit">Enviar mensagem</button>
                </form>
              </div>
            </div>
            <div class="push"/>
          </div>
          <Footer/>
        </>
      )
}