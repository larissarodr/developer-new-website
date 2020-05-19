import React, { useState } from 'react';
import { FiHome, FiAtSign, FiPhone } from 'react-icons/fi'
import { renderEmail } from 'react-html-email'
import axios from 'axios';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import MyEmail from '../../Email';

export default function Profissionais(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function resetForm(){
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleSubmit(e){
    e.preventDefault();

    const messageHtml =  renderEmail(<MyEmail name={name} email={email} content={message} />);
    
    axios({
        method: "POST", 
        url:"http://www.developer.inf.br/api/sendEmail",
        /*url:"http://localhost:3333/sendEmail", */
        data: {
          messageHtml: messageHtml
        }
    }).then((response)=>{
      console.log(response);
        if (response.data.msg === 'success'){
            alert("Email enviado com sucesso.");
            resetForm()
        }else{
            alert("Erro ao enviar e-mail. Por gentileza, nos contate através do email developer@developer.inf.br.")
        }
    }).catch(function(){
      alert("Erro ao enviar e-mail. Por gentileza, nos contate através do email developer@developer.inf.br.")
    })
    
  }
  
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
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Nome:
                <input onChange={e => setName(e.target.value)}
                      value={name}
                      placeholder="Nome" 
                  />
              </label>
              <label>E-mail:
                <input onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="E-mail"             
                />
              </label>
              <label>Mensagem:
                <textarea onChange={e => setMessage(e.target.value)}
                    value={message}
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