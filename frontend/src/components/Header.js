import React from "react";
import {
  FiSettings,
  FiAtSign,
  FiPhone,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="links">
        <a href="//www.instagram.com/erpdevelopersoftware">
          <FiInstagram size={16} color="#fff" /> Instagram
        </a>
        <a href="//www.linkedin.com/company/developer-software/">
          <FiLinkedin size={16} color="#fff" /> Linkedin
        </a>
        <p>
          <FiPhone size={16} color="#fff" /> Vendas: (47) 3028-2711
        </p>
        <p>
          <FiPhone size={16} color="#fff" /> Suporte: (47) 3029-2771
        </p>
        <a href="//www.developer.inf.br/suporte/">
          <FiSettings size={20} color="#fff" /> Suporte
        </a>
        <a href="//www.developer.inf.br/webmail/">
          <FiAtSign size={20} color="#fff" /> Webmail
        </a>
      </div>
    </header>
  );
}
