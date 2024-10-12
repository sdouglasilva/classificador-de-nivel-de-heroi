# Classificador de Nível de Herói

## Descrição do Projeto

O objetivo deste projeto é construir um algoritmo simples em JavaScript para classificar o nível de um herói com base na quantidade de experiência (XP) que ele possui. O projeto utilizará variáveis, operadores, laços de repetição e estruturas de decisão.

## Funcionalidades

1. **Armazenar informações do herói**:
   - O nome do herói será armazenado em uma variável.
   - A quantidade de experiência (XP) será armazenada em uma variável.

2. **Classificação do nível de herói**:
   - Com base na quantidade de XP, o herói será classificado em um dos seguintes níveis:
     - **Ferro**: XP < 1000
     - **Bronze**: 1001 <= XP <= 2000
     - **Prata**: 2001 <= XP <= 5000
     - **Ouro**: 5001 <= XP <= 7000
     - **Platina**: 7001 <= XP <= 8000
     - **Ascendente**: 8001 <= XP <= 9000
     - **Imortal**: 9001 <= XP <= 10000
     - **Radiante**: XP >= 10001

3. **Saída**:
   - Exibir uma mensagem final com o nome do herói e seu nível correspondente.
   - Formato da mensagem: `O Herói de nome {nome} está no nível de {nível}`.

## Requisitos Técnicos

- Linguagem de Programação: **JavaScript**
- Uso de variáveis para armazenar nome e XP.
- Estruturas de decisão (if/else ou switch) para definir o nível com base no valor de XP.
- Laço de repetição para permitir que o usuário possa classificar múltiplos heróis, caso necessário.

## Estrutura do Projeto

1. **index.html**: Página simples para exibir o resultado do classificador (opcional).
2. **app.js**: Arquivo principal com a lógica do classificador.
3. **styles.css**: Estilos opcionais para a página HTML (opcional).

## Regras de Negócio

- O valor de XP deve ser um número inteiro positivo.
- O nome do herói deve ser uma string não vazia.

## Dicas para Implementação

- Utilize operadores lógicos para verificar os intervalos de XP.
- Experimente utilizar laços para repetir a classificação para diversos heróis.
- Permita que o usuário insira o nome e a XP do herói via prompt (em ambiente de console ou navegador).

## Entrega do Projeto

1. Crie um repositório no GitHub para o projeto.
2. Organize os arquivos necessários no repositório.
3. Inclua um arquivo `README.md` explicando o funcionamento do projeto.
4. Se desejar, utilize um template no Figma para criar uma interface visual para o projeto.

## Referências

- GitHub: [Documentação oficial](https://docs.github.com/)
- JavaScript: [Documentação oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Extras

- Adicione testes automatizados para validar diferentes entradas de XP.
- Permita que o usuário edite o nome e o XP de um herói após a primeira classificação.