import React from 'react';
export default function InlineLink({name, email, content}) {
  return (

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    </head>
    <body>
      <h3>Contato realizado por:</h3> {name} - {email}
      <br/>
      <h3>Mensagem:</h3> {content}
    </body>
  </html>

)};