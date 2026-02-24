# Quiz Interativo: Qual é o seu perfil de consciência interior?

Projeto em HTML, CSS e JavaScript puro com perguntas exibidas uma por vez e resultado final em texto personalizado por faixa de respostas.

Tema: meditação, autoconhecimento e espiritualidade interior.

## Novidades de interface

- Logo centralizado no topo sobre o fundo azul (`assets/logo-ocp.svg`).
- Botão **Voltar** com ícone para ajustar a resposta anterior.
- Ações de **compartilhamento** ao final (WhatsApp, e-mail, LinkedIn e compartilhamento nativo/cópia de link).
- Resultado final exibido apenas em texto (sem mostrar pontuação numérica).
- Fluxo sem botão de refazer quiz.

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
