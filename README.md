# pixit-back-end

## Requisitos:

* nodejs instalado
* git configurado

* Node.js 14.17.6 ou superior
* [MySql](https://www.mysql.com/downloads/) ou utilizar o Xampp (https://www.apachefriends.org/pt_br/index.html)

## Instalação e Configuração:

A Aplicação foi construida usando [nodejs](https://nodejs.org/) e utiliza o gerenciador de pacotes do próprio node para instalar as dependências do projeto que ficam descritas em `package.json`. 

#### 1. Clonar ou baixar o projeto
```
git clone https://github.com/thadeuivson/pixit-back-end.git
```
#### 2. Instalar as dependências. 
Elas estão descritas no arquivo `package.json` e podem ser instaladas usando o comando:
```bash
npm install
```
#### 3. Instalar o MySQL
Baixe a aplicação em https://www.mysql.com/downloads e siga as instruções da [documentação oficial](https://dev.mysql.com/doc/).

#### 4. Preparar o banco de dados
Importe o arquivo db_pixit.sql disponivel nesse repositorio na pasta database

#### 5. Servir a aplicação em desenvolvimento
Basta rodar no CMD o seguinte comando.
```bash
npm start
```
A aplicação estará no endereço http://localhost:9000/

