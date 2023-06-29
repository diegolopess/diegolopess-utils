# Funções de formatação brasileira
Este é um código JavaScript que contém duas funções úteis para formatação de valores monetários e CEPs seguindo o padrão brasileiro. Essas funções permitem formatar os valores de acordo com a convenção do Brasil, tornando-os mais legíveis e adequados para exibição em interfaces de usuário ou outros fins.

- Função formatMoney():
A função formatMoney é responsável por formatar valores monetários. Ela recebe um número como parâmetro e retorna uma string formatada no formato monetário brasileiro.

- Função formatCep():
A função formatCep é responsável por formatar CEPs (Códigos de Endereçamento Postal) brasileiros. Ela recebe um valor numérico ou string como parâmetro e retorna uma string formatada no formato de CEP brasileiro.

Como usar?
```shell
npm i dl-utils
```


```js
const {formatMoney, formatCep} = require("dl-utils")
```