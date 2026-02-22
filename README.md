# Quiz Interativo: Qual é o seu perfil de consciência interior?

Projeto em HTML, CSS e JavaScript puro com perguntas exibidas uma por vez, pontuação acumulada automaticamente e resultado personalizado por faixa de pontos.

Tema: meditação, autoconhecimento e espiritualidade interior.

## Como executar

Basta abrir o arquivo `index.html` no navegador.

## Como adicionar novas perguntas

No arquivo `script.js`, adicione um novo objeto ao array `quizData` seguindo o mesmo formato:

```js
{
  question: "Texto da pergunta",
  answers: [
    { text: "Alternativa 1", score: 4 },
    { text: "Alternativa 2", score: 3 },
    { text: "Alternativa 3", score: 2 },
    { text: "Alternativa 4", score: 1 },
  ],
}
```

## Como modificar regras de resultado

No mesmo arquivo, ajuste o array `resultRules`:

- `min`: pontuação mínima para aquele perfil
- `profile`: título do resultado
- `description`: mensagem exibida ao usuário

As regras são avaliadas de cima para baixo; mantenha da maior pontuação mínima para a menor.