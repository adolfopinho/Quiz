const quizData = [
  {
    question: "Ao começar o dia, como você costuma se conectar consigo?",
    answers: [
      { text: "Faço uma respiração consciente e observo meu estado interno.", score: 4 },
      { text: "Busco silêncio por alguns minutos para me centrar.", score: 3 },
      { text: "Anoto sentimentos e pensamentos em um diário.", score: 2 },
      { text: "Sigo no automático e percebo isso só mais tarde.", score: 1 },
    ],
  },
  {
    question: "Quando emoções intensas surgem, o que você faz primeiro?",
    answers: [
      { text: "Acolho a emoção sem julgamento e respiro fundo.", score: 4 },
      { text: "Procuro compreender a origem do que estou sentindo.", score: 3 },
      { text: "Converso com alguém de confiança para clarear.", score: 2 },
      { text: "Tento distrair a mente para evitar sentir.", score: 1 },
    ],
  },
  {
    question: "Qual prática mais faz sentido para sua jornada interior?",
    answers: [
      { text: "Meditação diária com foco em presença.", score: 4 },
      { text: "Rituais de gratidão e contemplação.", score: 3 },
      { text: "Leituras e reflexões sobre autoconhecimento.", score: 2 },
      { text: "Ainda estou descobrindo por onde começar.", score: 1 },
    ],
  },
  {
    question: "Como você enxerga os desafios que aparecem na sua vida?",
    answers: [
      { text: "Como oportunidades de expansão e aprendizado espiritual.", score: 4 },
      { text: "Como convites para rever padrões internos.", score: 3 },
      { text: "Como momentos difíceis, mas que trazem lições.", score: 2 },
      { text: "Como obstáculos que eu só quero superar rápido.", score: 1 },
    ],
  },
  {
    question: "No contato com outras pessoas, o que mais guia suas atitudes?",
    answers: [
      { text: "Escuta compassiva e presença genuína.", score: 4 },
      { text: "Empatia e respeito pelos diferentes caminhos.", score: 3 },
      { text: "Boa intenção, mesmo com dificuldade de manter calma.", score: 2 },
      { text: "Reatividade quando me sinto pressionado(a).", score: 1 },
    ],
  },
  {
    question: "Quando pensa no seu propósito, qual frase mais ressoa?",
    answers: [
      { text: "Quero viver com consciência e alinhamento interior.", score: 4 },
      { text: "Quero evoluir e compartilhar luz com o mundo.", score: 3 },
      { text: "Quero entender melhor quem sou e o que sinto.", score: 2 },
      { text: "Ainda me sinto desconectado(a) desse tema.", score: 1 },
    ],
  },
];

const resultRules = [
  {
    min: 21,
    profile: "Perfil A — Presença Desperta",
    description:
      "Você cultiva atenção plena, serenidade e conexão profunda com sua essência no dia a dia.",
  },
  {
    min: 16,
    profile: "Perfil B — Buscador(a) de Luz",
    description:
      "Você está em uma jornada ativa de expansão interior, integrando práticas e aprendizados com constância.",
  },
  {
    min: 11,
    profile: "Perfil C — Coração em Despertar",
    description:
      "Você já percebe os chamados internos e está desenvolvendo mais escuta, acolhimento e autoconhecimento.",
  },
  {
    min: 0,
    profile: "Perfil D — Início da Jornada",
    description:
      "Você está dando os primeiros passos para olhar para dentro. Pequenas práticas diárias podem transformar muito.",
  },
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressTextEl = document.getElementById("progress-text");
const quizScreenEl = document.getElementById("quiz-screen");
const resultScreenEl = document.getElementById("result-screen");
const resultTitleEl = document.getElementById("result-title");
const resultDescriptionEl = document.getElementById("result-description");
const scoreLineEl = document.getElementById("score-line");
const restartBtnEl = document.getElementById("restart-btn");

let currentQuestion = 0;
let totalScore = 0;

function renderQuestion() {
  const questionData = quizData[currentQuestion];

  progressTextEl.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
  questionEl.textContent = questionData.question;
  answersEl.innerHTML = "";

  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "btn btn--answer";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => handleAnswer(answer.score));
    answersEl.appendChild(button);
  });
}

function handleAnswer(score) {
  totalScore += score;
  currentQuestion += 1;

  if (currentQuestion < quizData.length) {
    renderQuestion();
    return;
  }

  showResult();
}

function getResultByScore(score) {
  return resultRules.find((rule) => score >= rule.min) || resultRules[resultRules.length - 1];
}

function showResult() {
  const result = getResultByScore(totalScore);

  quizScreenEl.classList.add("hidden");
  resultScreenEl.classList.remove("hidden");
  restartBtnEl.classList.remove("hidden");

  progressTextEl.textContent = "Resultado final";
  resultTitleEl.textContent = result.profile;
  resultDescriptionEl.textContent = result.description;
  scoreLineEl.textContent = `Sua pontuação: ${totalScore} pontos.`;
}

function restartQuiz() {
  currentQuestion = 0;
  totalScore = 0;

  resultScreenEl.classList.add("hidden");
  restartBtnEl.classList.add("hidden");
  quizScreenEl.classList.remove("hidden");

  renderQuestion();
}

restartBtnEl.addEventListener("click", restartQuiz);

renderQuestion();