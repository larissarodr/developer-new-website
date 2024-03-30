import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiAtSign } from "react-icons/fi";

import "./footer.css";
import logoImg from "../assets/Logo1.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="separator" />
        <div className="footerInfo">
          <div className="logo">
            <img
              src={logoImg}
              alt="Developer Software ERP Gestão Empresarial"
            />

            <p>
              {" "}
              Desde 2001, fazendo a diferença <br />
              para os negócios de seus clientes.{" "}
            </p>
          </div>
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/solucoes">Soluções</Link>
              </li>
              <li>
                <Link to="/empresa">Sobre</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <a href="//www.developer.inf.br/novidades.php/">Novidades</a>
              </li>
            </ul>
          </div>
          <div className="contact-footer">
            <h3>Contato</h3>
            <p>
              <FiPhone size={14} color="#000" /> Vendas: (47) 3028-2711
            </p>
            <p>
              <FiPhone size={14} color="#000" /> Suporte: (47) 3029-2771
            </p>
            <p>
              <FiAtSign size={14} color="#000" />  <a href="mailto:developer@developer.inf.br">developer@developer.inf.br</a>
            </p>
            <p>Joinville, SC</p>
          </div>
        </div>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} - Powered by Developer Software &copy;
          </p>
        </div>
      </footer>
    </>
  );
}
