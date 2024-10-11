Resolução do Desafio: Classificador de Herói
Por Douglas Silva

🌟 Transformando Ideias em Realidade! 🌟

É com grande entusiasmo que compartilho a resolução do meu projeto "Classificador de Herói", um desafio que me permitiu explorar a essência da programação utilizando apenas variáveis, laços de repetição e condicionais.

O Que é o Classificador de Herói?

O objetivo deste projeto é criar uma aplicação que classifique e categorize heróis com base em características simples, como força, agilidade e inteligência. Utilizando a lógica básica de programação, desenvolvi um sistema que avalia e classifica heróis de forma interativa e divertida.

Como Funciona?

Coleta de Dados: Os dados sobre os heróis são definidos por meio de variáveis, onde cada herói possui atributos como nome, força, agilidade e inteligência.

Estrutura de Decisão: Com o uso de condicionais, o programa avalia os atributos dos heróis. Por exemplo, se a força de um herói for maior que um certo valor, ele pode ser classificado como "Fortão".

Laços de Repetição: Para classificar múltiplos heróis, utilizei laços de repetição. O programa percorre uma lista de heróis, avaliando cada um deles e atribuindo uma classificação com base nas condições definidas.

Exemplo de Lógica Implementada:

python

herois = [
    {'nome': 'Superman', 'forca': 100, 'agilidade': 85, 'inteligencia': 90},
    {'nome': 'Flash', 'forca': 70, 'agilidade': 95, 'inteligencia': 80},
]

for heroi in herois:
    if heroi['forca'] > 80:
        classificacao = 'Fortão'
    elif heroi['agilidade'] > 80:
        classificacao = 'Ágil'
    else:
        classificacao = 'Inteligente'
    
    print(f"{heroi['nome']} é classificado como: {classificacao}")
Resultados e Aprendizados:

Este projeto me ensinou a importância de estruturas básicas de programação e como elas podem ser aplicadas para resolver problemas reais. A simplicidade das variáveis, laços e condicionais foi fundamental para criar uma solução eficiente e funcional.

Próximos Passos:

Estou animado para expandir este projeto, adicionando mais heróis, atributos e classificações. Quero também explorar a interação do usuário, permitindo que eles insiram seus próprios heróis e vejam suas classificações.

🌈 Agradecimentos:

Agradeço à GFT Start pela oportunidade e a todos que apoiaram este projeto. Vamos juntos transformar ideias em superpoderes!