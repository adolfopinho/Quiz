const quizData = [
  {
    question: "Quando surge um novo projeto na equipe, qual é sua primeira reação?",
    answers: [
      { text: "Organizo um plano detalhado antes de começar.", score: 4 },
      { text: "Busco ideias criativas e diferentes abordagens.", score: 3 },
      { text: "Quero conversar com todos para alinhar expectativas.", score: 2 },
      { text: "Mergulho direto para testar na prática.", score: 1 },
    ],
  },
  {
    question: "Qual atividade mais te energiza no trabalho?",
    answers: [
      { text: "Analisar dados e encontrar padrões.", score: 4 },
      { text: "Criar algo novo do zero.", score: 3 },
      { text: "Facilitar a colaboração entre pessoas.", score: 2 },
      { text: "Resolver urgências com agilidade.", score: 1 },
    ],
  },
  {
    question: "Como você lida com prazos apertados?",
    answers: [
      { text: "Priorizo tarefas com método e foco em eficiência.", score: 4 },
      { text: "Adapto o plano e encontro soluções alternativas.", score: 3 },
      { text: "Reforço a comunicação para manter todos alinhados.", score: 2 },
      { text: "Atuo rapidamente e ajusto no caminho.", score: 1 },
    ],
  },
  {
    question: "Em reuniões, qual papel você costuma assumir?",
    answers: [
      { text: "Estruturo discussões e aponto próximos passos.", score: 4 },
      { text: "Trago insights e possibilidades inovadoras.", score: 3 },
      { text: "Mediador, garantindo que todos sejam ouvidos.", score: 2 },
      { text: "Impulsiono decisões rápidas e objetivas.", score: 1 },
    ],
  },
  {
    question: "Qual dessas habilidades melhor te representa?",
    answers: [
      { text: "Planejamento e visão estratégica.", score: 4 },
      { text: "Criatividade e pensamento fora da caixa.", score: 3 },
      { text: "Empatia e relacionamento interpessoal.", score: 2 },
      { text: "Execução prática e resiliência.", score: 1 },
    ],
  },
  {
    question: "Qual ambiente de trabalho combina mais com você?",
    answers: [
      { text: "Processos claros, metas e acompanhamento constante.", score: 4 },
      { text: "Liberdade para experimentar e inovar.", score: 3 },
      { text: "Cultura colaborativa com foco em pessoas.", score: 2 },
      { text: "Dinâmico, com desafios contínuos e ação rápida.", score: 1 },
    ],
  },
];

const resultRules = [
  {
    min: 21,
    profile: "Perfil A — Estrategista",
    description:
      "Você se destaca por organização, visão de longo prazo e decisões baseadas em análise.",
  },
  {
    min: 16,
    profile: "Perfil B — Inovador(a)",
    description:
      "Seu diferencial está em criatividade, adaptabilidade e busca constante por novas ideias.",
  },
  {
    min: 11,
    profile: "Perfil C — Colaborador(a)",
    description:
      "Você brilha em comunicação, trabalho em equipe e construção de ambientes saudáveis.",
  },
  {
    min: 0,
    profile: "Perfil D — Executor(a)",
    description:
      "Você tem perfil prático, foco em ação e capacidade de entregar resultados em contextos dinâmicos.",
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