import React from 'react';
import { FiHome, FiAtSign, FiPhone } from 'react-icons/fi'

import './styles.css';
import "animate.css/animate.min.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default function Contato(){
  
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Menu/>
        <div className="animate__animated animate__fadeIn">
          <div className="contact">
              <div className="left">
                <h1>Geral</h1>
                <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                <p><FiAtSign size={16} color="#000"/>developer@developer.inf.br</p>
                <p><FiHome size={16} color="#000"/>Joinville, SC</p>
                <h1>Vendas</h1>
                <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                <p><FiAtSign size={16} color="#000"/>comercial@developer.inf.br</p>
              </div>
              <div className="right">
                <h1>Suporte</h1>
                <p><FiPhone size={16} color="#000"/> (47) 3029-2771</p>
                <p><FiAtSign size={16} color="#000"/>suporte@developer.inf.br</p>
                <h1>Financeiro</h1>
                <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                <p><FiAtSign size={16} color="#000"/>financeiro@developer.inf.br</p>
                <h1>Recursos Humanos</h1>
                <p><FiPhone size={16} color="#000"/> (47) 3028-2711</p>
                <p><FiAtSign size={16} color="#000"/>rh@developer.inf.br</p>
              </div>
            </div>
          </div>
        <div className="push"/>
      </div>
      <Footer/>
    </>
  )
}