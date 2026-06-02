const STORAGE_KEY = "cora-ai-hackathon-state";
const THEME_KEY = "cora-ai-theme";
const SESSION_KEY = "cora-ai-session-email";
const AUTH_LANG_KEY = "cora-ai-auth-language";
const ALLOWED_EMAIL_DOMAINS = ["gmail.com", "gmail.com.br", "outlook.com", "outlook.com.br", "hotmail.com", "hotmail.com.br", "yahoo.com", "yahoo.com.br", "icloud.com", "live.com", "proton.me", "protonmail.com", "uol.com.br", "bol.com.br"];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const authScreen = $("#authScreen");
const appShell = $("#appShell");
const loginTab = $("#loginTab");
const signupTab = $("#signupTab");
const loginForm = $("#loginForm");
const signupForm = $("#signupForm");
const loginFeedback = $("#loginFeedback");
const signupFeedback = $("#signupFeedback");
const logoutButton = $("#logoutButton");
const userMenuTrigger = $("#userMenuTrigger");
const userDropdown = $("#userDropdown");
const menuBtn = $("#menuBtn");
const sidebar = $("#sidebar");
const overlay = $("#overlay");
const themeToggle = $("#themeToggle");
const authThemeToggle = $("#authThemeToggle");
const authLanguageSelect = $("#authLanguageSelect");
const historyButton = $("#historyButton");
const historyModal = $("#historyModal");
const historyClose = $("#historyClose");
const scoreModal = $("#scoreModal");
const scoreModalClose = $("#scoreModalClose");
const voiceButton = $("#voiceButton");
const chatForm = $("#chatForm");
const chatInput = $("#chatInput");
const chatWindow = $("#chatWindow");
const categoryList = $("#categoryList");
const addCategoryForm = $("#addCategoryForm");
const profileForm = $("#profileForm");
const incomeForm = $("#incomeForm");
const securityForm = $("#securityForm");
const languageForm = $("#languageForm");
const signupPhoto = $("#signupPhoto");
const editPhotoInput = $("#editPhotoInput");
const removePhotoButton = $("#removePhotoButton");
const addPhotoButton = $("#addPhotoButton");
const lessonDetail = $("#lessonDetail");

// Elementos usados em mais de uma rotina. Quando algum ID mudar no HTML, o ajuste fica concentrado aqui.
const fields = {
  incomeMetric: $("#incomeMetric"),
  incomeHint: $("#incomeHint"),
  availableMetric: $("#availableMetric"),
  availableHint: $("#availableHint"),
  goalMetric: $("#goalMetric"),
  goalHint: $("#goalHint"),
  profileName: $("#profileName"),
  profileBalance: $("#profileBalance"),
  profileHint: $("#profileHint"),
  heroTitle: $("#heroTitle"),
  heroCopy: $("#heroCopy"),
  barList: $("#barList"),
  insightText: $("#insightText"),
  essentialInsightTitle: $("#essentialInsightTitle"),
  essentialInsightText: $("#essentialInsightText"),
  adjustableInsightTitle: $("#adjustableInsightTitle"),
  adjustableInsightText: $("#adjustableInsightText"),
  newCategoryName: $("#newCategoryName"),
  newCategoryValue: $("#newCategoryValue"),
  newCategoryType: $("#newCategoryType"),
  editName: $("#editName"),
  editEmail: $("#editEmail"),
  editPassword: $("#editPassword"),
  editGender: $("#editGender"),
  profileFeedback: $("#profileFeedback"),
  topbarAvatar: $("#topbarAvatar"),
  sidebarAvatar: $("#sidebarAvatar"),
  profilePreview: $("#profilePreview"),
  topbarUserName: $("#topbarUserName"),
  currentIncomeValue: $("#currentIncomeValue"),
  newIncomeInput: $("#newIncomeInput"),
  incomeFeedback: $("#incomeFeedback"),
  incomeUpdateButton: $("#incomeUpdateButton"),
  menuUserName: $("#menuUserName"),
  menuUserEmail: $("#menuUserEmail"),
  sidebarBalanceAvatar: $("#sidebarBalanceAvatar"),
  securityPassword: $("#securityPassword"),
  securityPasswordConfirm: $("#securityPasswordConfirm"),
  securityFeedback: $("#securityFeedback"),
  languageSelect: $("#languageSelect"),
  languageFeedback: $("#languageFeedback"),
  menuLanguageLabel: $("#menuLanguageLabel"),
  historyList: $("#historyList"),
  historyMessages: $("#historyMessages"),
  historyTitle: $("#historyTitle"),
  coraScoreValue: $("#coraScoreValue"),
  coraScoreStatus: $("#coraScoreStatus"),
  coraScoreText: $("#coraScoreText"),
  scoreStatusPill: $("#scoreStatusPill"),
  scoreRing: $("#scoreRing"),
  commitmentPill: $("#commitmentPill"),
  thermoFill: $("#thermoFill"),
  thermoMarker: $("#thermoMarker"),
  essentialPercent: $("#essentialPercent"),
  flexiblePercent: $("#flexiblePercent"),
  optionalPercent: $("#optionalPercent"),
  essentialAmount: $("#essentialAmount"),
  flexibleAmount: $("#flexibleAmount"),
  optionalAmount: $("#optionalAmount"),
  thermoInsight: $("#thermoInsight"),
  buyItemInput: $("#buyItemInput"),
  buyPriceInput: $("#buyPriceInput"),
  buyCheckButton: $("#buyCheckButton"),
  buyDecisionPill: $("#buyDecisionPill"),
  buyResult: $("#buyResult"),
  saveSimulationButton: $("#saveSimulationButton"),
  simulationList: $("#simulationList"),
  scoreExplainButton: $("#scoreExplainButton"),
  exportSummaryButton: $("#exportSummaryButton"),
  scoreRules: $("#scoreRules"),
  goalProgressFill: $("#goalProgressFill"),
  goalProgressMeta: $("#goalProgressMeta"),
  onboardingCard: $("#onboardingCard")
};

const lessonContent = {
  reserva: { title: "Reserva de emergencia", text: "E o dinheiro que protege voce dos imprevistos. Comece pequeno: R$ 50, depois R$ 100, ate chegar em pelo menos um mes dos gastos essenciais." },
  cartao: { title: "Cartao sem susto", text: "Cartao nao e renda extra. Use como meio de pagamento e acompanhe a fatura antes de comprar, principalmente em parcelas pequenas que se acumulam." },
  metas: { title: "Metas possiveis", text: "Uma boa meta tem objeto, valor e prazo. A Cora pergunta o que falta para transformar desejo em plano calculado." }
};

const translations = {
  "pt-BR": {
    loginTitle: "Entrar na Cora", signupTitle: "Criar sua conta", email: "E-mail", password: "Senha", enter: "Entrar", createAccount: "Criar conta", fullName: "Nome completo", treatment: "Como a Cora deve se referir a voce?", grossIncome: "Renda bruta mensal", profilePhoto: "Foto de perfil (opcional)", menuAccount: "Conta", menuPrefs: "Preferencias", editProfile: "Editar perfil", security: "Senha e seguranca", updateIncome: "Atualizar renda", language: "Idioma", aboutUs: "Sobre nos", myExpenses: "Meus gastos", financialChat: "Chat financeiro", insights: "Insights sobre habitos", availableMonth: "Disponivel estimado no mes", mentor: "Mentora financeira inteligente", chatSmart: "Chat financeiro inteligente", helpToday: "Como posso te ajudar hoje?", history: "historico salvo", createGoal: "Criar meta", analyzeExpenses: "Analisar gastos", explainCard: "Explicar cartao", send: "Enviar", incomeMetric: "Renda bruta", availableMetric: "Disponivel estimado", activeGoal: "Meta ativa", noGoal: "Nenhuma", goalHint: "Conte uma meta para a Cora calcular.", perceived: "O que a Cora ja percebeu", detailsExpenses: "Ver detalhes dos gastos", biggestEssential: "Maior gasto essencial", biggestAdjustable: "Maior gasto ajustavel", expensesTitle: "Categorias e valores mensais", back: "Voltar", newCategory: "Nova categoria", monthlyValue: "Valor mensal", expenseType: "Tipo de gasto", addCategory: "Adicionar categoria", profileData: "Dados da conta", addPhoto: "Adicionar foto", removePhoto: "Remover foto", name: "Nome", newPassword: "Nova senha", saveProfile: "Salvar perfil", changePassword: "Alterar senha", confirmPassword: "Confirmar nova senha", updatePassword: "Atualizar senha", chooseLanguage: "Escolher idioma", interfaceLanguage: "Idioma da interface", saveLanguage: "Salvar idioma", currentIncome: "Renda atual", newIncome: "Nova renda", update: "Atualizar", aboutTitle: "Cora AI", historyTitle: "Conversas por data", close: "Fechar", themeLight: "Modo claro", themeDark: "Modo escuro", listenSummary: "Ouvir resumo", loggedAccount: "Conta logada", logout: "Sair", strongPasswordHint: "Use senha forte: minimo 8 caracteres, letra maiuscula, minuscula, numero e simbolo.", investmentBoundary: "Eu posso explicar conceitos como investimento, risco, liquidez, juros e metas, mas nao posso indicar onde investir, qual produto escolher ou qual banco usar. Para uma recomendacao personalizada, consulte um gerente ou especialista certificado.", authHeadline: "Financas pessoais com conversa, clareza e habito.", authDescription: "Uma mentora financeira para jovens e estudantes planejarem metas, entenderem gastos e receberem orientacao personalizada.", authAccess: "Acesso", loginEmailPlaceholder: "voce@gmail.com", loginPasswordPlaceholder: "Sua senha", signupNamePlaceholder: "Ex.: Nome completo", signupPasswordPlaceholder: "Minimo 8 caracteres, letra, numero e simbolo", signupIncomePlaceholder: "Ex.: 3000 ou 3.500,00", chooseOption: "Escolha uma opcao", feminineOption: "Ela/dela: vamos juntas", masculineOption: "Ele/dele: vamos juntos", neutralOption: "Neutro/elu: vamos juntes", requiredSignup: "Preencha nome, e-mail valido, senha, forma de tratamento e renda bruta.", allowedEmail: "Use um e-mail valido, como Gmail, Outlook, Hotmail, Yahoo, iCloud ou Proton.", accountExists: "Ja existe uma conta com esse e-mail.", accountCreated: "Conta criada. Entrando...", invalidLogin: "E-mail ou senha invalidos.", entering: "Entrando..." },
  en: {
    loginTitle: "Sign in to Cora", signupTitle: "Create your account", email: "Email", password: "Password", enter: "Sign in", createAccount: "Create account", fullName: "Full name", treatment: "How should Cora refer to you?", grossIncome: "Monthly gross income", profilePhoto: "Profile photo (optional)", menuAccount: "Account", menuPrefs: "Preferences", editProfile: "Edit profile", security: "Password and security", updateIncome: "Update income", language: "Language", aboutUs: "About us", myExpenses: "My expenses", financialChat: "Financial chat", insights: "Spending insights", availableMonth: "Estimated available this month", mentor: "Smart financial mentor", chatSmart: "Smart financial chat", helpToday: "How can I help you today?", history: "saved history", createGoal: "Create goal", analyzeExpenses: "Analyze expenses", explainCard: "Explain credit card", send: "Send", incomeMetric: "Gross income", availableMetric: "Estimated available", activeGoal: "Active goal", noGoal: "None", goalHint: "Tell Cora a goal to calculate.", perceived: "What Cora already noticed", detailsExpenses: "See expense details", biggestEssential: "Biggest essential expense", biggestAdjustable: "Biggest adjustable expense", expensesTitle: "Monthly categories and values", back: "Back", newCategory: "New category", monthlyValue: "Monthly value", expenseType: "Expense type", addCategory: "Add category", profileData: "Account details", addPhoto: "Add photo", removePhoto: "Remove photo", name: "Name", newPassword: "New password", saveProfile: "Save profile", changePassword: "Change password", confirmPassword: "Confirm new password", updatePassword: "Update password", chooseLanguage: "Choose language", interfaceLanguage: "Interface language", saveLanguage: "Save language", currentIncome: "Current income", newIncome: "New income", update: "Update", aboutTitle: "Cora AI", historyTitle: "Conversations by date", close: "Close", themeLight: "Light mode", themeDark: "Dark mode", listenSummary: "Listen summary", loggedAccount: "Logged account", logout: "Log out", strongPasswordHint: "Use a strong password: at least 8 characters, uppercase, lowercase, number and symbol.", investmentBoundary: "I can explain concepts such as investing, risk, liquidity, interest and goals, but I cannot tell you where to invest, which product to choose or which bank to use. For personalized recommendations, consult a certified financial specialist.", authHeadline: "Personal finance with conversation, clarity and habit.", authDescription: "A financial mentor for young people and students to plan goals, understand spending and receive personalized guidance.", authAccess: "Access", loginEmailPlaceholder: "you@gmail.com", loginPasswordPlaceholder: "Your password", signupNamePlaceholder: "Ex.: Full name", signupPasswordPlaceholder: "At least 8 characters, letter, number and symbol", signupIncomePlaceholder: "Ex.: 3000 or 3,500.00", chooseOption: "Choose an option", feminineOption: "She/her: let's plan together", masculineOption: "He/him: let's plan together", neutralOption: "They/them: let's plan together", requiredSignup: "Fill in name, valid email, password, pronoun preference and gross income.", allowedEmail: "Use a valid email, such as Gmail, Outlook, Hotmail, Yahoo, iCloud or Proton.", accountExists: "There is already an account with this email.", accountCreated: "Account created. Signing in...", invalidLogin: "Invalid email or password.", entering: "Signing in..." }
};
function getLang() {
  const lang = currentUser?.language || localStorage.getItem(AUTH_LANG_KEY) || "pt-BR";
  return translations[lang] ? lang : "en";
}
function t(key) {
  return translations[getLang()][key] || translations["pt-BR"][key] || key;
}
function setAppLanguage(language) {
  const nextLanguage = translations[language] ? language : "en";
  localStorage.setItem(AUTH_LANG_KEY, nextLanguage);
  if (currentUser) {
    currentUser.language = nextLanguage;
    persistCurrentUser();
    renderApp();
  } else {
    applyLanguage();
  }
}

const flowCopy = {
  "pt-BR": {
    dailyPrompt: "Qual assunto iremos abordar hoje?",
    you: "Voce",
    goalStart: "Claro. Qual meta, valor aproximado e prazo? Exemplo: notebook, R$ 3.000, 8 meses.",
    fallbackAnswer: "Boa pergunta. Me diga o objetivo, valor ou gasto que te preocupa, e eu transformo em um plano simples.",
    eduIof: "IOF e um imposto cobrado em algumas operacoes financeiras, como credito, cambio e compras internacionais. No cartao, pode aparecer em compra fora do Brasil, saque ou algumas operacoes de credito.",
    eduBillInstallment: "Parcelar a fatura evita atraso imediato, mas costuma sair caro: entram juros e sua renda futura ja comeca comprometida. Use so em emergencia, compare o custo total e pare novas compras ate quitar.",
    eduDueDate: "A melhor data de vencimento e alguns dias depois de voce receber. Assim a fatura chega quando ja tem dinheiro na conta. Evite vencimento antes do salario ou muito longe dele.",
    eduInterest: "Juros do cartao aparecem quando voce nao paga a fatura inteira. O banco financia o restante e cobra caro por isso. Regra pratica: se nao da para pagar a fatura total, pare novas compras e renegocie antes de virar bola de neve.",
    eduInstallments: "Parcele compras duraveis e planejadas, como notebook para estudo ou geladeira. Evite parcelar comida, delivery, lazer pequeno e compras do dia a dia, porque elas somem rapido e a divida fica.",
    eduCard: "Cartao de credito e um meio de pagamento com prazo: voce compra hoje e paga na fatura. Ele ajuda a organizar compras, parcelar itens maiores e concentrar pagamentos. O risco e tratar limite como renda. Pague a fatura inteira, acompanhe o vencimento e parcele so o que faz sentido.",
    aboutProblemTitle: "Problema", aboutProblemText: "Jovens e estudantes costumam lidar com dinheiro por impulso, sem linguagem simples, sem plano e sem clareza sobre o que realmente pode ser ajustado.",
    aboutSolutionTitle: "Solucao", aboutSolutionText: "A Cora transforma conversa em planejamento: entende renda, gastos, metas e cria orientacoes praticas sem economes.",
    aboutDifferenceTitle: "Diferencial", aboutDifferenceText: "Ela separa gastos essenciais de gastos ajustaveis, evita sugestoes irreais e fala com cada pessoa de forma personalizada.",
    aboutAudienceTitle: "Publico-alvo", aboutAudienceText: "Criada para jovens, estudantes, estagiarios e pessoas no inicio da vida financeira que precisam de autonomia com acolhimento.",
    aboutAccessibilityTitle: "Acessibilidade", aboutAccessibilityText: "Modo claro e escuro, contraste forte, leitura por voz, linguagem direta e fluxos simples para reduzir atrito.",
    aboutNextTitle: "Proximos passos", aboutNextText: "Conectar Open Finance, alertas inteligentes, metas compartilhadas, educacao gamificada e uma IA financeira com dados reais em tempo seguro."
  },
  en: {
    dailyPrompt: "What should we work on today?",
    you: "You",
    goalStart: "Sure. What goal, approximate value and deadline? Example: notebook, R$ 3,000, 8 months.",
    fallbackAnswer: "Good question. Tell me the goal, value or expense that worries you, and I will turn it into a simple plan.",
    eduIof: "IOF is a Brazilian tax charged on some financial operations, such as credit, currency exchange and international purchases. On a card, it can appear on purchases outside Brazil, cash withdrawals or some credit operations.",
    eduBillInstallment: "Paying your card bill in installments avoids immediate delinquency, but it is usually expensive: interest is added and future income starts already committed. Use it only in emergencies, compare the total cost and pause new purchases until it is paid off.",
    eduDueDate: "The best due date is a few days after you receive income. That way the bill arrives when there is already money in the account. Avoid due dates before payday or too far from it.",
    eduInterest: "Credit card interest appears when you do not pay the full bill. The bank finances the remaining amount and charges a high cost for it. Practical rule: if you cannot pay the full bill, stop new purchases and renegotiate before it snowballs.",
    eduInstallments: "Use installments for durable, planned purchases, such as a study notebook or an appliance. Avoid installments for food, delivery, small leisure purchases and daily expenses because they disappear fast and the debt remains.",
    eduCard: "A credit card is a payment method with a deadline: you buy today and pay on the bill. It can help organize purchases, split larger planned items and centralize payments. The risk is treating the limit as income. Pay the full bill, track the due date and use installments only when they make sense.",
    aboutProblemTitle: "Problem", aboutProblemText: "Young people and students often handle money reactively, without simple language, a clear plan or visibility into what can actually be adjusted.",
    aboutSolutionTitle: "Solution", aboutSolutionText: "Cora turns conversation into planning: it understands income, expenses and goals, then creates practical guidance without financial jargon.",
    aboutDifferenceTitle: "Differentiator", aboutDifferenceText: "It separates essential expenses from adjustable ones, avoids unrealistic advice and speaks to each person in a personalized way.",
    aboutAudienceTitle: "Target audience", aboutAudienceText: "Built for young people, students, interns and anyone starting their financial life who needs autonomy with guidance.",
    aboutAccessibilityTitle: "Accessibility", aboutAccessibilityText: "Light and dark mode, strong contrast, voice reading, direct language and simple flows to reduce friction.",
    aboutNextTitle: "Next steps", aboutNextText: "Connect Open Finance, smart alerts, shared goals, gamified education and a financial AI powered by real data in a secure environment."
  }
};
function tx(key) { return flowCopy[getLang()]?.[key] || flowCopy.en[key] || key; }
function isEnglishExperience() { return getLang() === "en"; }

// Conteudo local em formato de mapa: deixa a Cora responder de forma mais parecida com um assistente de verdade,
// sem depender de internet ou de chave de API durante a apresentacao.
const coraKnowledge = {
  "pt-BR": {
    investmentBoundary: "Eu posso explicar o que e investimento, risco, liquidez, rentabilidade e juros, mas nao posso sugerir qual investimento fazer, onde investir, qual banco escolher ou montar carteira. Para decidir produto ou estrategia, procure um assessor de investimentos, gerente bancario ou especialista certificado.",
    card: "Cartao de credito e um meio de pagamento com vencimento futuro. Ele ajuda quando voce planeja a fatura e paga o valor total. O perigo e tratar limite como dinheiro disponivel: se pagar so uma parte, entram juros altos.",
    iof: "IOF e um imposto sobre operacoes financeiras. Pode aparecer em compras internacionais, cambio, credito, saque no cartao e algumas transacoes especificas.",
    interest: "Juros sao o custo de usar dinheiro por um tempo. No cartao, eles ficam perigosos quando a fatura nao e paga integralmente, porque a divida cresce rapido.",
    invoice: "Parcelar fatura pode evitar atraso naquele mes, mas costuma sair caro. Use apenas como emergencia, veja o custo total e evite novas compras ate quitar.",
    dueDate: "Escolha vencimento alguns dias depois de receber sua renda. Assim o dinheiro chega antes da fatura e voce reduz risco de atraso.",
    installments: "Parcele compras planejadas e duraveis, como notebook para estudo. Evite parcelar comida, delivery e lazer pequeno, porque o consumo acaba e a divida continua.",
    budget: "Para organizar o mes, separe renda, gastos essenciais, gastos ajustaveis e metas. A Cora consegue ajudar melhor quando voce informa categoria, valor e se o gasto e essencial ou flexivel.",
    cdi: "CDI significa Certificado de Deposito Interbancario. Ele e uma taxa de referencia usada entre bancos e aparece como comparacao de rentabilidade em varios produtos financeiros. Quando algo rende 100% do CDI, quer dizer que acompanha essa referencia. Eu posso explicar o conceito, mas nao indicar produto ou banco.",
    cdb: "CDB significa Certificado de Deposito Bancario. Na pratica, e um titulo emitido por bancos para captar dinheiro. Pode ter regras de prazo, liquidez, rentabilidade e impostos. Para escolher um CDB especifico, fale com um assessor, gerente bancario ou especialista certificado.",
    selic: "Selic e a taxa basica de juros da economia brasileira. Ela influencia credito, financiamentos e a rentabilidade de muitos produtos de renda fixa. Quando a Selic sobe, credito tende a ficar mais caro; quando cai, o custo do dinheiro tende a aliviar.",
    scoreExplain: "Seu Cora Score considera renda, gastos totais, sobra mensal, quanto da renda esta comprometido, separacao entre essenciais/flexiveis/opcionais e se existe meta ativa. Ele e educativo, nao e score de credito.",
    goal: "Vamos transformar isso em meta. Me diga o item, valor total e prazo. Com esses tres dados eu calculo quanto guardar por mes e se cabe na sua renda atual.",
    emergency: "Reserva de emergencia e o dinheiro para imprevistos. Comece com uma meta pequena, como um mes dos gastos essenciais, antes de pensar em objetivos maiores.",
    default: "Entendi. Para eu te ajudar melhor, me diga o objetivo, o valor envolvido e o prazo. Se for uma duvida financeira, pode perguntar de forma direta que eu explico sem complicar."
  },
  en: {
    investmentBoundary: "I can explain what investing, risk, liquidity, return and interest mean, but I cannot suggest which investment to choose, where to invest, which bank to use or build a portfolio. For product or strategy decisions, talk to an investment advisor, bank manager or certified specialist.",
    card: "A credit card is a payment method with a future due date. It helps when you plan the bill and pay it in full. The risk is treating the limit as available money: if you pay only part of the bill, high interest starts.",
    iof: "IOF is a Brazilian tax on financial operations. It may appear on international purchases, currency exchange, credit, card cash withdrawals and some specific transactions.",
    interest: "Interest is the cost of using money over time. On credit cards, it becomes risky when the bill is not paid in full because debt grows quickly.",
    invoice: "Paying a card bill in installments may prevent immediate delinquency, but it is usually expensive. Use it only as an emergency, check the total cost and avoid new purchases until it is paid off.",
    dueDate: "Choose a due date a few days after your income arrives. That way money comes before the bill and you reduce late-payment risk.",
    installments: "Use installments for planned durable purchases, such as a study laptop. Avoid splitting food, delivery and small leisure expenses because the consumption ends and the debt remains.",
    budget: "To organize the month, separate income, essential expenses, adjustable expenses and goals. Cora helps better when you share category, value and whether the expense is essential or flexible.",
    cdi: "CDI is a Brazilian interbank benchmark rate. It is commonly used as a reference for returns in financial products. If something pays 100% of CDI, it follows that benchmark. I can explain the concept, but I cannot recommend a product or bank.",
    cdb: "CDB is a Brazilian bank deposit certificate. In practice, it is a security issued by banks to raise funds. It may have different terms, liquidity, return rules and taxes. To choose a specific CDB, talk to an advisor, bank manager or certified specialist.",
    selic: "Selic is Brazil's basic interest rate. It influences credit, loans and many fixed-income returns. When Selic rises, credit often gets more expensive; when it falls, the cost of money tends to ease.",
    scoreExplain: "Your Cora Score considers income, total expenses, monthly margin, income commitment, whether essentials/flexible/optional expenses are separated and whether you have an active goal. It is educational, not a credit score.",
    goal: "Let's turn that into a goal. Tell me the item, total price and deadline. With those three details I calculate how much to save per month and whether it fits your current income.",
    emergency: "An emergency fund is money for unexpected events. Start with a small goal, such as one month of essential expenses, before moving to bigger objectives.",
    default: "Got it. To help better, tell me the goal, amount and deadline. If it is a financial question, ask directly and I will explain it simply."
  }
};
function kb(key) { return coraKnowledge[getLang()]?.[key] || coraKnowledge.en[key] || key; }
function replaceVars(text, values = {}) { return Object.entries(values).reduce((out, [key, value]) => out.replaceAll(`{${key}}`, value), text); }
function setText(selector, value) {
  const element = document.querySelector(selector);
  if (!element) return;
  if (element.tagName === "LABEL" && element.querySelector("input, select, textarea")) {
    const firstText = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (firstText) firstText.textContent = `${value}\n              `;
    else element.insertBefore(document.createTextNode(`${value}\n              `), element.firstChild);
    return;
  }
  element.textContent = value;
}
function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}
function applyAuthLanguage() {
  const isEnglish = getLang() === "en";
  const copy = isEnglish
    ? {
      lang: "Language",
      headline: "Personal finance with conversation, clarity and habit.",
      description: "A financial mentor for young people and students to plan goals, understand spending and receive personalized guidance.",
      loginTab: "Sign in",
      signupTab: "Create account",
      loginTitle: "Sign in to Cora",
      signupTitle: "Create your account",
      email: "Email",
      password: "Password",
      name: "Full name",
      treatment: "How should Cora refer to you?",
      income: "Monthly gross income",
      photo: "Profile photo (optional)",
      enter: "Sign in",
      create: "Create account",
      loginEmail: "you@gmail.com",
      loginPassword: "Your password",
      signupName: "Ex.: Full name",
      signupPassword: "At least 8 characters, letter, number and symbol",
      signupIncome: "Ex.: 3000 or 3,500.00",
      options: ["Choose an option", "She/her: let's plan together", "He/him: let's plan together", "They/them: let's plan together"]
    }
    : {
      lang: "Idioma",
      headline: "Financas pessoais com conversa, clareza e habito.",
      description: "Uma mentora financeira para jovens e estudantes planejarem metas, entenderem gastos e receberem orientacao personalizada.",
      loginTab: "Entrar",
      signupTab: "Criar conta",
      loginTitle: "Entrar na Cora",
      signupTitle: "Criar sua conta",
      email: "E-mail",
      password: "Senha",
      name: "Nome completo",
      treatment: "Como a Cora deve se referir a voce?",
      income: "Renda bruta mensal",
      photo: "Foto de perfil (opcional)",
      enter: "Entrar",
      create: "Criar conta",
      loginEmail: "voce@gmail.com",
      loginPassword: "Sua senha",
      signupName: "Ex.: Nome completo",
      signupPassword: "Minimo 8 caracteres, letra, numero e simbolo",
      signupIncome: "Ex.: 3000 ou 3.500,00",
      options: ["Escolha uma opcao", "Ela/dela: vamos juntas", "Ele/dele: vamos juntos", "Neutro/elu: vamos juntes"]
    };
  const auth = authScreen;
  auth?.setAttribute("lang", isEnglish ? "en" : "pt-BR");
  auth?.setAttribute("translate", "no");
  setText("#authLanguageLabel", copy.lang);
  setText(".auth-brand h1", copy.headline);
  setText(".auth-brand p:not(.eyebrow)", copy.description);
  setText("#loginTab", copy.loginTab);
  setText("#signupTab", copy.signupTab);
  setText("#loginForm h2", copy.loginTitle);
  setText("#signupForm h2", copy.signupTitle);
  setText("#loginForm label[for='loginEmail']", copy.email);
  setText("#signupForm label[for='signupEmail']", copy.email);
  setText("#loginForm label[for='loginPassword']", copy.password);
  setText("#signupForm label[for='signupPassword']", copy.password);
  setText("#signupForm label[for='signupName']", copy.name);
  setText("#signupForm label[for='signupGender']", copy.treatment);
  setText("#signupForm label[for='signupIncome']", copy.income);
  setText("#signupForm label[for='signupPhoto']", copy.photo);
  setText("#loginForm button[type='submit']", copy.enter);
  setText("#signupForm button[type='submit']", copy.create);
  setPlaceholder("#loginEmail", copy.loginEmail);
  setPlaceholder("#signupEmail", copy.loginEmail);
  setPlaceholder("#loginPassword", copy.loginPassword);
  setPlaceholder("#signupName", copy.signupName);
  setPlaceholder("#signupPassword", copy.signupPassword);
  setPlaceholder("#signupIncome", copy.signupIncome);
  document.querySelectorAll("#signupGender option").forEach((option, index) => {
    option.textContent = copy.options[index] || option.textContent;
  });
  if (authLanguageSelect) authLanguageSelect.value = isEnglish ? "en" : "pt-BR";
}
function applyLanguage() {
  document.documentElement.lang = getLang();
  applyAuthLanguage();
  document.querySelector(".auth-tabs")?.setAttribute("aria-label", t("authAccess"));
  const menuTitles = document.querySelectorAll(".menu-section-title, .dropdown-section-title");
  if (menuTitles[0]) menuTitles[0].textContent = t("menuAccount");
  if (menuTitles[1]) menuTitles[1].textContent = t("menuPrefs");
  const menuItems = document.querySelectorAll(".menu-option-list span, .user-dropdown .dropdown-item span");
  [t("editProfile"), t("security"), t("updateIncome"), t("language"), t("aboutUs"), t("myExpenses"), t("financialChat"), t("insights"), t("logout")].forEach((value, index) => { if (menuItems[index]) menuItems[index].textContent = value; });
  setText("#profileHint", t("availableMonth"));
  setText(".home-hero .eyebrow", t("mentor"));
  setText("#chat .eyebrow", t("chatSmart"));
  setText("#chat h2", t("helpToday"));
  setText("#historyButton", t("history"));
  setText("#scoreExplainButton", isEnglishExperience() ? "How it works" : "Entenda como funciona");
  setText("#exportSummaryButton", isEnglishExperience() ? "Export summary" : "Exportar resumo");
  setText("#buyCheckButton", isEnglishExperience() ? "Analyze purchase" : "Analisar compra");
  setText("#saveSimulationButton", isEnglishExperience() ? "Save simulation" : "Salvar simulacao");
  setText("#scoreModalClose", t("close"));
  setText("#scoreModalTitle", isEnglishExperience() ? "How the score is calculated" : "Como a nota e calculada");
  setPlaceholder("#buyItemInput", isEnglishExperience() ? "Ex.: PS5, laptop, phone" : "Ex.: PS5, notebook, celular");
  setPlaceholder("#buyPriceInput", isEnglishExperience() ? "Ex.: 3500 or 3,500.00" : "Ex.: 3500 ou 3.500,00");
  const scoreEyebrows = document.querySelectorAll(".score-dashboard .eyebrow");
  [isEnglishExperience() ? "Cora Score" : "Cora Score", isEnglishExperience() ? "Financial thermometer" : "Termometro financeiro", isEnglishExperience() ? "Can I buy this?" : "Posso comprar isso?"].forEach((value, index) => { if (scoreEyebrows[index]) scoreEyebrows[index].textContent = value; });
  const thermoLabels = document.querySelectorAll(".thermo-stats span");
  [isEnglishExperience() ? "Essentials" : "Essenciais", isEnglishExperience() ? "Flexible" : "Flexiveis", isEnglishExperience() ? "Optional" : "Opcionais"].forEach((value, index) => { if (thermoLabels[index]) thermoLabels[index].textContent = value; });
  const buyLabels = document.querySelectorAll(".buy-card label");
  [isEnglishExperience() ? "Product or wish" : "Produto ou desejo", isEnglishExperience() ? "Price" : "Preco"].forEach((value, index) => { if (buyLabels[index]) buyLabels[index].childNodes[0].textContent = `${value}\n            `; });
  const valuePills = document.querySelectorAll(".value-pills span");
  [
    isEnglishExperience() ? "Cora understands your routine" : "A Cora entende sua rotina",
    isEnglishExperience() ? "Separates essentials from adjustables" : "Separa essencial do ajustavel",
    isEnglishExperience() ? "Builds realistic goals" : "Cria metas reais",
    isEnglishExperience() ? "Speaks to you personally" : "Fala com voce de forma personalizada"
  ].forEach((value, index) => { if (valuePills[index]) valuePills[index].textContent = value; });
  const onboarding = document.querySelectorAll(".onboarding-card button");
  if (document.querySelector(".onboarding-card strong")) document.querySelector(".onboarding-card strong").textContent = isEnglishExperience() ? "First steps" : "Primeiros passos";
  [isEnglishExperience() ? "1. Confirm income" : "1. Confirmar renda", isEnglishExperience() ? "2. Add expenses" : "2. Cadastrar gastos", isEnglishExperience() ? "3. Create first goal" : "3. Criar primeira meta"].forEach((value, index) => { if (onboarding[index]) onboarding[index].textContent = value; });
  const quick = document.querySelectorAll(".quick-actions button");
  [t("createGoal"), t("analyzeExpenses"), t("explainCard")].forEach((value, index) => { if (quick[index]) quick[index].textContent = value; });
  const prompts = isEnglishExperience() ? ["I want to create a financial goal", "Analyze my expenses and tell me what I can adjust", "Explain credit card interest simply"] : ["Quero criar uma meta financeira", "Analise meus gastos e me diga o que posso ajustar", "Me explique juros do cartao de forma simples"];
  prompts.forEach((prompt, index) => { if (quick[index]) quick[index].dataset.prompt = prompt; });
  setText(".chat-form button", t("send"));
  setText(".summary-rail .metric-card:nth-child(1) span", t("incomeMetric"));
  setText(".summary-rail .metric-card:nth-child(2) span", t("availableMetric"));
  setText(".summary-rail .metric-card:nth-child(3) span", t("activeGoal"));
  setText(".goal-overview span", t("activeGoal"));
  setText("#goalMetric", currentUser?.goal ? currentUser.goal.name : t("noGoal"));
  if (!currentUser?.goal) setText("#goalHint", t("goalHint"));
  setText("#insights h2", t("perceived"));
  setText("#insights .ghost-action", t("detailsExpenses"));
  setText("#essentialInsightTitle", fields.essentialInsightTitle?.textContent || "");
  setText(".insight-mini-card:nth-child(1) span", t("biggestEssential"));
  setText(".insight-mini-card:nth-child(2) span", t("biggestAdjustable"));
  setText("#gastos h2", t("expensesTitle"));
  document.querySelectorAll("[data-close-settings]").forEach((button) => button.textContent = t("back"));
  setText("#addCategoryForm label:nth-child(1)", t("newCategory"));
  setText("#addCategoryForm label:nth-child(2)", t("monthlyValue"));
  setText("#addCategoryForm label:nth-child(3)", t("expenseType"));
  setText("#addCategoryForm button", t("addCategory"));
  setText("#perfil h2", t("profileData"));
  setText("#addPhotoButton", t("addPhoto"));
  setText("#removePhotoButton", t("removePhoto"));
  setText("#profileForm label:nth-of-type(1)", t("name"));
  setText("#profileForm label:nth-of-type(2)", t("email"));
  setText("#profileForm label:nth-of-type(3)", t("treatment"));
  setText("#profileForm button[type='submit']", t("saveProfile"));
  setText("#seguranca h2", t("changePassword"));
  setText("#securityForm label:nth-child(1)", t("newPassword"));
  setText("#securityForm label:nth-child(2)", t("confirmPassword"));
  setText("#securityForm button", t("updatePassword"));
  setText("#idioma .eyebrow", t("language"));
  setText("#idioma h2", t("chooseLanguage"));
  setText("#languageForm label", t("interfaceLanguage"));
  setText("#languageForm button", t("saveLanguage"));
  setText("#renda h2", t("grossIncome"));
  setText(".current-income span", t("currentIncome"));
  setText("#incomeForm label", t("newIncome"));
  setText("#incomeForm button", t("update"));
  setText("#sobre .eyebrow", t("aboutUs"));
  setText("#sobre h2", t("aboutTitle"));
  setText("#historyClose", t("close"));
  setText("#historyModal .eyebrow", t("history"));
  setText("#historyTitle", t("historyTitle"));
  setText(".topbar-user span", t("loggedAccount"));
  setText("#logoutButton", t("logout"));
  setText("#voiceButton", t("listenSummary"));
  document.querySelectorAll("[data-about-title]").forEach((item) => { item.textContent = tx(item.dataset.aboutTitle); });
  document.querySelectorAll("[data-about-text]").forEach((item) => { item.textContent = tx(item.dataset.aboutText); });
  themeToggle.textContent = document.body.classList.contains("light-mode") ? t("themeDark") : t("themeLight");
  setPlaceholder("#chatInput", isEnglishExperience() ? "Ex.: I want to buy a phone for R$ 2,800 in 6 months" : "Ex.: quero comprar um celular de R$ 2.800 em 6 meses");

  updateMobileButtons();
}
const languageOptions = [
  ["pt-BR", "Portuguese"], ["en", "English"], ["es", "Spanish"], ["fr", "French"], ["de", "German"], ["it", "Italian"], ["zh", "Chinese"], ["ja", "Japanese"], ["ko", "Korean"], ["ar", "Arabic"], ["hi", "Hindi"], ["ru", "Russian"], ["tr", "Turkish"], ["nl", "Dutch"], ["pl", "Polish"], ["sv", "Swedish"], ["he", "Hebrew"], ["id", "Indonesian"], ["th", "Thai"], ["vi", "Vietnamese"]
];
const phoneCatalog = [
  { keywords: ["iphone 15"], name: "iPhone 15", price: 4300 },
  { keywords: ["iphone 14"], name: "iPhone 14", price: 3600 },
  { keywords: ["iphone 13"], name: "iPhone 13", price: 2800 },
  { keywords: ["samsung s24", "galaxy s24"], name: "Samsung Galaxy S24", price: 3900 },
  { keywords: ["samsung s23", "galaxy s23"], name: "Samsung Galaxy S23", price: 3000 },
  { keywords: ["a55", "galaxy a55"], name: "Samsung Galaxy A55", price: 1900 },
  { keywords: ["moto g84"], name: "Moto G84", price: 1400 },
  { keywords: ["redmi note 13"], name: "Redmi Note 13", price: 1300 }
];

let state = loadState();
let currentUser = null;


function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { users: {}, currentEmail: null }; }
  catch { return { users: {}, currentEmail: null }; }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function normalizeEmail(email) { return String(email || "").trim().toLowerCase(); }
function isAllowedEmail(email) {
  const normalized = normalizeEmail(email);
  const domain = normalized.split("@")[1];
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) && ALLOWED_EMAIL_DOMAINS.includes(domain);
}
function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(String(password || ""));
}
function parseCurrencyInput(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return 0;
  const hasThousandShortcut = /\b(k|mil)\b/.test(raw) || /\d\s*k\b/.test(raw);
  const cleaned = raw.replace(/r\$/i, "").replace(/mil/g, "").replace(/k/g, "").replace(/\s/g, "");
  const normalized = cleaned.includes(",") ? cleaned.replace(/\./g, "").replace(",", ".") : cleaned;
  const parsed = Number(normalized);
  const valueNumber = hasThousandShortcut ? parsed * 1000 : parsed;
  return Number.isFinite(valueNumber) && valueNumber >= 0 ? valueNumber : 0;
}
function money(value) { return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
function formatEditableMoney(value) { return Number(value || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function parseMoney(text) {
  const match = String(text).match(/(?:r\$\s*)?[\d.,]+\s*(?:k|mil)?/i);

  if (!match) return null;

  const value = parseCurrencyInput(match[0]);

  return value > 0 ? value : null;
}
function parseMonths(text) {
  const englishMonth = String(text).match(/(\d+)\s*(month|months)/i);
  if (englishMonth) return Number(englishMonth[1]);
  const englishYear = String(text).match(/(\d+)\s*(year|years)/i);
  if (englishYear) return Number(englishYear[1]) * 12;
  const month = String(text).match(/(\d+)\s*(mes|meses|mês)/i);
  if (month) return Number(month[1]);
  const year = String(text).match(/(\d+)\s*(ano|anos)/i);
  return year ? Number(year[1]) * 12 : null;
}
function getPronouns(user) {
  const options = { feminino: { together: "juntas", welcome: "bem-vinda" }, masculino: { together: "juntos", welcome: "bem-vindo" }, neutro: { together: "juntes", welcome: "bem-vinde" } };
  return options[user?.gender] || options.neutro;
}
function getInitials(name) {
  const parts = String(name || "Cliente").trim().split(/\s+/).filter(Boolean);
  const chosen = parts.length > 1 ? [parts[0], parts[1]] : [parts[0] || "C"];
  return chosen.map((part) => part.charAt(0).toUpperCase()).join("").slice(0, 2);
}
function renderAvatar(element, user) {
  if (!element || !user) return;
  element.innerHTML = "";
  element.classList.toggle("has-image", Boolean(user.profileImage));
  if (user.profileImage) {
    const image = document.createElement("img");
    image.src = user.profileImage;
    image.alt = isEnglishExperience() ? `Photo of ${user.name}` : `Foto de ${user.name}`;
    element.appendChild(image);
    return;
  }
  element.textContent = getInitials(user.name);
}
function readImageAsDataUrl(input) {
  const file = input?.files?.[0];
  if (!file || !file.type.startsWith("image/")) return Promise.resolve("");
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

const phraseTranslations = {
  "Qual assunto iremos abordar hoje?": "What should we work on today?",
  "Claro. Qual meta, valor aproximado e prazo? Exemplo: notebook, R$ 3.000, 8 meses.": "Sure. What goal, approximate value and deadline? Example: notebook, R$ 3,000, 8 months.",
  "Boa pergunta. Me diga o objetivo, valor ou gasto que te preocupa, e eu transformo em um plano simples.": "Good question. Tell me the goal, value or expense that worries you, and I will turn it into a simple plan.",
  "Categoria removida. Atualizei seus insights com a nova lista de gastos.": "Category removed. I updated your insights with the new expense list.",
  "Perfil atualizado com sucesso.": "Profile updated successfully.",
  "Perfil atualizado. Vou usar seus dados novos nas proximas conversas e planos.": "Profile updated. I will use your new data in the next conversations and plans.",
  "Senha atualizada com seguranca.": "Password updated securely.",
  "Senha atualizada. Sua conta continua protegida.": "Password updated. Your account remains protected.",
  "Idioma salvo. A interface foi atualizada.": "Language saved. The interface was updated.",
  "Recalculando seu planejamento...": "Recalculating your plan...",
  "Atualizando...": "Updating...",
  "Conta criada. Entrando...": "Account created. Signing in...",
  "Entrando...": "Signing in...",
  "E-mail ou senha invalidos.": "Invalid email or password.",
  "Ja existe uma conta com esse e-mail.": "There is already an account with this email.",
  "As senhas nao conferem.": "The passwords do not match."
};
function localizePhrase(message) {
  if (!isEnglishExperience()) return message;
  return phraseTranslations[message] || message;
}
function appText(pt, en) {
  return isEnglishExperience() ? en : pt;
}
function setFeedback(element, message, isError = false) {
  if (!element) return;
  element.textContent = localizePhrase(message);
  element.classList.toggle("error", isError);
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}
function formatHistoryDate(key) {
  const [year, month, day] = String(key).split("-");
  if (!year || !month || !day) return key;
  if (isEnglishExperience()) return `${month}/${day}/${year}`;
  return `${day}/${month}/${year}`;
}
function createDailyMessages() {
  return [{ sender: "Cora", type: "cora", text: tx("dailyPrompt"), createdAt: new Date().toISOString() }];
}
function ensureDailyChat(user) {
  const today = getTodayKey();
  user.chatHistory = user.chatHistory || {};

  if (Array.isArray(user.messages) && user.messages.length && !Object.keys(user.chatHistory).length) {
    user.chatHistory[user.lastChatDate || today] = user.messages;
  }

  if (!Array.isArray(user.chatHistory[today]) || user.lastChatDate !== today) {
    user.chatHistory[today] = createDailyMessages();
  }

  user.lastChatDate = today;
  user.activeChatDate = today;
  user.messages = user.chatHistory[today];
}
function saveActiveConversation() {
  if (!currentUser) return;
  const activeDate = currentUser.activeChatDate || getTodayKey();
  currentUser.chatHistory = currentUser.chatHistory || {};
  currentUser.chatHistory[activeDate] = currentUser.messages || [];
}

function inferExpenseType(name) {
  const normalized = String(name || "").toLowerCase();
  if (/aluguel|condom[ií]nio|luz|energia|[aá]gua|internet|telefone|g[aá]s|mercado|farm[aá]cia|rem[eé]dio|sa[uú]de|faculdade|escola|curso|transporte|onibus|ônibus|metr[oô]/i.test(normalized)) return "essential";
  if (/lazer|streaming|assinatura|delivery|restaurante|viagem|roupa|academia|jogo|show|bar/i.test(normalized)) return "optional";
  return "flexible";
}
function getExpenseTypeLabel(type) {
  const labels = getLang() === "en"
    ? { essential: "Essential", flexible: "Flexible", optional: "Optional" }
    : { essential: "Essencial", flexible: "Flexivel", optional: "Opcional" };
  return labels[type] || labels.flexible;
}
function createExpenseCategory(name, value = 0, type = "") { return { id: `cat-${Date.now()}-${Math.random().toString(16).slice(2)}`, name, value: parseCurrencyInput(value), type: type || inferExpenseType(name) }; }
function defaultExpenseCategories() {
  return [createExpenseCategory("Alimentacao", 0, "essential"), createExpenseCategory("Transporte", 0, "essential"), createExpenseCategory("Lazer", 0, "optional"), createExpenseCategory("Estudos", 0, "essential")];
}
function ensureExpenseCategories(user) {
  if (Array.isArray(user.expenseCategories)) return;
  const legacy = user.expenses || {};
  user.expenseCategories = [createExpenseCategory("Alimentacao", legacy.food || 0, "essential"), createExpenseCategory("Transporte", legacy.transport || 0, "essential"), createExpenseCategory("Lazer", legacy.fun || 0, "optional"), createExpenseCategory("Estudos", legacy.study || 0, "essential")];
  delete user.expenses;
}
function ensureUserCollections(user) {
  ensureExpenseCategories(user);
  if (!Array.isArray(user.simulations)) user.simulations = [];
  if (!Array.isArray(user.scoreHistory)) user.scoreHistory = [];
}
function getTotalExpenses(user) { ensureExpenseCategories(user); return user.expenseCategories.reduce((sum, category) => sum + Number(category.value || 0), 0); }
function getExpenseBreakdown(user) {
  ensureExpenseCategories(user);
  return user.expenseCategories.reduce((totals, category) => {
    const type = category.type || "flexible";
    totals[type] = (totals[type] || 0) + Number(category.value || 0);
    return totals;
  }, { essential: 0, flexible: 0, optional: 0 });
}
function calculateCoraScore(user) {
  ensureUserCollections(user);
  const income = Number(user.income || 0);
  const total = getTotalExpenses(user);
  const available = Math.max(income - total, 0);
  const committedPercent = income ? (total / income) * 100 : 0;
  const availablePercent = income ? (available / income) * 100 : 0;
  const breakdown = getExpenseBreakdown(user);
  let score = 100;

  if (income && committedPercent > 90) score -= 35;
  else if (income && committedPercent > 75) score -= 25;
  else if (income && committedPercent > 60) score -= 15;

  if (income && availablePercent < 5) score -= 25;
  else if (income && availablePercent < 15) score -= 15;
  else if (income && availablePercent < 25) score -= 5;

  if (user.goal) score += 5;
  if (breakdown.essential > 0 && (breakdown.flexible > 0 || breakdown.optional > 0)) score += 5;

  score = Math.max(0, Math.min(100, Math.round(score)));
  const status = score >= 80 ? "healthy" : score >= 50 ? "attention" : "risk";
  return { score, status, income, total, available, committedPercent, availablePercent, breakdown };
}
function getScoreStatusText(status) {
  if (isEnglishExperience()) return status === "healthy" ? "Healthy" : status === "attention" ? "Attention" : "Risk";
  return status === "healthy" ? "Saudavel" : status === "attention" ? "Atencao" : "Risco";
}
function createInitialMessages() {
  return createDailyMessages();
}
function defaultUser({ name, email, password, gender, income, profileImage = "" }) {
  return { name, email, password, gender, income: parseCurrencyInput(income), language: getLang(), profileImage, expenseCategories: defaultExpenseCategories(), goal: null, pendingGoal: null, simulations: [], scoreHistory: [], onboardingDone: false, messages: [], chatHistory: {}, lastChatDate: "", activeChatDate: "" };
}
function persistCurrentUser() { state.users[currentUser.email] = currentUser; saveState(); }
function switchAuthMode(mode) {
  const isLogin = mode === "login";
  loginTab.classList.toggle("active", isLogin);
  signupTab.classList.toggle("active", !isLogin);
  loginForm.classList.toggle("hidden", !isLogin);
  signupForm.classList.toggle("hidden", isLogin);
  setFeedback(loginFeedback, "");
  setFeedback(signupFeedback, "");
}
function signIn(email) {
  currentUser = state.users[email];
  state.currentEmail = email;
  sessionStorage.setItem(SESSION_KEY, email);
  currentUser.profileImage = currentUser.profileImage || "";
  ensureExpenseCategories(currentUser);
  ensureDailyChat(currentUser);
  saveState();
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderApp();
}
function signOut() {
  closeSettingsPage();
  state.currentEmail = null;
  currentUser = null;
  saveState();
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  closeMenu();
  switchAuthMode("login");
}
function renderMessages() {
  chatWindow.innerHTML = "";
  currentUser.messages.forEach((message) => {
    const item = document.createElement("div");
    item.className = `message ${message.type}`;
    item.innerHTML = `<span>${message.type === "user" ? tx("you") : "Cora"}</span><p>${localizePhrase(message.text)}</p>`;
    chatWindow.appendChild(item);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
// Recalcula a area de gastos: lista editavel no menu e os dois insights que aparecem na home.
function renderSpending() {
  ensureExpenseCategories(currentUser);
  const items = currentUser.expenseCategories;
  const maxValue = Math.max(...items.map((item) => Number(item.value || 0)), 1);

  // Lista completa para o usuario ajustar a propria realidade, sem ficar preso a quatro categorias fixas.
  const labels = getLang() === "en"
    ? { category: "Category", value: "Value", type: "Type", remove: "Delete", empty: "No categories yet. Add rent, groceries, gym or any expense that makes sense for you.", essential: "Essential", flexible: "Flexible", optional: "Optional" }
    : { category: "Categoria", value: "Valor", type: "Tipo", remove: "Excluir", empty: "Nenhuma categoria ainda. Adicione aluguel, mercado, academia ou qualquer gasto que faca sentido para voce.", essential: "Essencial", flexible: "Flexivel", optional: "Opcional" };
  categoryList.innerHTML = items.length ? items.map((category) => `
    <div class="category-row" data-id="${category.id}">
      <label>${labels.category}<input class="category-name" type="text" maxlength="28" value="${category.name}"></label>
      <label>${labels.value}<input class="category-value" type="text" inputmode="decimal" value="${formatEditableMoney(category.value)}"></label>
      <label>${labels.type}<select class="category-type"><option value="essential" ${category.type === "essential" ? "selected" : ""}>${labels.essential}</option><option value="flexible" ${category.type === "flexible" ? "selected" : ""}>${labels.flexible}</option><option value="optional" ${category.type === "optional" ? "selected" : ""}>${labels.optional}</option></select></label>
      <button class="category-remove" type="button">${labels.remove}</button>
    </div>`).join("") : `<p class="empty-categories">${labels.empty}</p>`;

  // Barras simples para bater o olho e entender onde o dinheiro esta indo.
  fields.barList.innerHTML = items.map((category) => {
    const width = Math.max((Number(category.value || 0) / maxValue) * 100, category.value ? 8 : 0);
    return `<div class="bar-item"><div><span>${category.name} <small class="expense-type">${getExpenseTypeLabel(category.type)}</small></span><strong>${money(category.value)}</strong></div><div class="bar"><span style="width: ${width}%"></span></div></div>`;
  }).join("");

  const total = getTotalExpenses(currentUser);
  const income = Number(currentUser.income || 0);
  const essentialItems = items.filter((item) => item.type === "essential" && Number(item.value || 0) > 0);
  const adjustableItems = items.filter((item) => item.type !== "essential" && Number(item.value || 0) > 0);
  const biggestEssential = essentialItems.reduce((winner, item) => Number(item.value || 0) > Number(winner.value || 0) ? item : winner, essentialItems[0] || null);
  const biggestAdjustable = adjustableItems.reduce((winner, item) => Number(item.value || 0) > Number(winner.value || 0) ? item : winner, adjustableItems[0] || null);
  const essentialTotal = essentialItems.reduce((sum, item) => sum + Number(item.value || 0), 0);

  // Na home a Cora so resume: o detalhe fica no menu para a tela inicial respirar.
  fields.essentialInsightTitle.textContent = biggestEssential ? `${biggestEssential.name} - ${money(biggestEssential.value)}` : (isEnglishExperience() ? "Not informed yet" : "Ainda nao informado");
  fields.essentialInsightText.textContent = biggestEssential
    ? (isEnglishExperience() ? "This expense is marked as essential. Cora does not recommend automatic cuts here; the focus is tracking due dates and renegotiating when it makes sense." : "Esse gasto esta marcado como essencial. A Cora nao recomenda corte automatico aqui; o foco e acompanhar vencimentos e renegociar quando fizer sentido.")
    : (isEnglishExperience() ? "Add rent, utilities, groceries or transportation so Cora can separate what is essential." : "Cadastre aluguel, agua, luz, mercado ou transporte para a Cora separar o que e essencial.");
  fields.adjustableInsightTitle.textContent = biggestAdjustable ? `${biggestAdjustable.name} - ${money(biggestAdjustable.value)}` : (isEnglishExperience() ? "Not informed yet" : "Ainda nao informado");
  fields.adjustableInsightText.textContent = biggestAdjustable
    ? (isEnglishExperience() ? `This is the best adjustment point. Reducing it by 10% would free ${money(Number(biggestAdjustable.value) * 0.1)} per month without touching essentials.` : `Esse e o melhor ponto para ajuste. Reduzir 10% liberaria ${money(Number(biggestAdjustable.value) * 0.1)} por mes sem mexer nos essenciais.`)
    : (isEnglishExperience() ? "Flexible and optional expenses appear here to guide choices without touching essentials." : "Gastos flexiveis e opcionais aparecem aqui para orientar escolhas sem mexer no essencial.");

  if (!total) {
    fields.insightText.textContent = isEnglishExperience() ? "Customize your categories and mark what is essential. That way Cora will not treat rent, electricity or water as easy cuts." : "Personalize suas categorias e marque o que e essencial. Assim a Cora nao trata aluguel, luz ou agua como gasto facil de cortar.";
  } else if (income && total > income) {
    fields.insightText.textContent = biggestAdjustable
      ? appText(`Seus gastos passaram da renda. Primeiro revise ${biggestAdjustable.name} (${money(biggestAdjustable.value)}) e preserve os essenciais (${money(essentialTotal)}).`, `Your expenses are above your income. First review ${biggestAdjustable.name} (${money(biggestAdjustable.value)}) and protect essentials (${money(essentialTotal)}).`)
      : appText("Seus gastos passaram da renda e quase tudo esta essencial. O caminho e renegociar contratos, revisar planos e buscar renda extra.", "Your expenses are above your income and almost everything is essential. The path is renegotiating contracts, reviewing plans and looking for extra income.");
  } else if (biggestEssential && !biggestAdjustable) {
    fields.insightText.textContent = isEnglishExperience() ? `Your biggest expense is ${biggestEssential.name} (${money(biggestEssential.value)}) and it is marked as essential. The recommendation is not to cut it, but to plan and avoid late payments.` : `Seu maior gasto e ${biggestEssential.name} (${money(biggestEssential.value)}) e esta marcado como essencial. A recomendacao nao e cortar, e sim planejar e evitar atraso.`;
  } else if (biggestAdjustable) {
    fields.insightText.textContent = isEnglishExperience() ? `Your biggest adjustable expense is ${biggestAdjustable.name}. It is the first place to look for savings without touching essentials.` : `Seu maior gasto ajustavel e ${biggestAdjustable.name}. Ele e o primeiro lugar para procurar economia sem mexer nos essenciais.`;
  } else {
    fields.insightText.textContent = isEnglishExperience() ? "Add your expenses so Cora can find realistic saving opportunities." : "Cadastre seus gastos para a Cora encontrar oportunidades reais de economia.";
  }
}
function detectPhone(text) { const normalized = String(text).toLowerCase(); return phoneCatalog.find((item) => item.keywords.some((keyword) => normalized.includes(keyword))); }
function detectGoalName(text) {
  const phone = detectPhone(text);
  if (phone) return phone.name;
  const englishPatterns = [
    /(?:i\s+want\s+to\s+)?(?:save|save money)\s+(?:to|for)\s+(?:buy\s+)?(?:a|an|the)?\s*([^,.!?]+)/i,
    /(?:i\s+want\s+to\s+)?buy\s+(?:a|an|the)?\s*([^,.!?]+)/i,
    /(?:my\s+goal\s+is)\s+(?:to\s+buy\s+)?(?:a|an|the)?\s*([^,.!?]+)/i
  ];
  const englishFound = englishPatterns.map((pattern) => String(text).match(pattern)?.[1]?.trim()).find(Boolean);
  if (englishFound) return englishFound.replace(/\s+(in|for)\s+\d+\s*(month|months|year|years).*$/i, "").trim();
  const patterns = [/(?:quero\s+)?(?:juntar|guardar|economizar)(?:\s+dinheiro)?\s+para\s+(?:comprar\s+)?(?:um|uma|o|a)?\s*([^,.!?]+)/i, /(?:quero\s+)?comprar\s+(?:um|uma|o|a)?\s*([^,.!?]+)/i, /(?:minha\s+meta\s+e|minha\s+meta\s+é)\s+(?:um|uma|o|a)?\s*([^,.!?]+)/i];
  const found = patterns.map((pattern) => String(text).match(pattern)?.[1]?.trim()).find(Boolean);
  if (found) return found;
  const cleaned = String(text)
    .replace(/r\$?\s*\d+[\d.,]*/gi, "")
    .replace(/\d+\s*(meses|mês|mes|anos|ano)/gi, "")
    .replace(/\b(quero|criar|uma|um|meta|financeira|juntar|guardar|comprar|para|de|em|ate|até)\b/gi, "")
    .replace(/[,.!?]/g, "")
    .trim();
  return cleaned.length >= 3 ? cleaned : "meta pessoal";
}
function buildGoalPlan(goal, owner = currentUser) {
  const income = Number(owner.income || 0), expenses = getTotalExpenses(owner), available = Math.max(income - expenses, 0), remaining = Math.max(goal.price - (goal.saved || 0), 0), months = Math.max(goal.months || 6, 1), monthly = remaining / months, weekly = monthly / 4.33, pressure = income ? Math.round((monthly / income) * 100) : 0, feasible = !income || monthly <= Math.max(available * 0.8, income * 0.2);
  return { remaining, monthly, weekly, pressure, feasible, available };
}
function completeGoalForUser(user, goal) {
  const plan = buildGoalPlan(goal, user);
  if (isEnglishExperience()) {
    const status = plan.feasible ? "It fits your current budget." : "It is tight for your current income.";
    return `Goal created: ${goal.name}.` +
      `\nValue: ${money(goal.price)} | Deadline: ${goal.months} months` +
      `\nSave: ${money(plan.monthly)} per month (${money(plan.weekly)} per week).` +
      `\n${status} I can adjust the deadline or suggest savings without touching essentials.`;
  }
  const status = plan.feasible ? "Cabe no seu orcamento atual." : "Ficou apertado para sua renda atual.";
  return `Meta criada: ${goal.name}.` +
    `\nValor: ${money(goal.price)} | Prazo: ${goal.months} meses` +
    `\nGuardar: ${money(plan.monthly)} por mes (${money(plan.weekly)} por semana).` +
    `\n${status} Posso ajustar prazo ou sugerir economia sem mexer nos essenciais.`;
}
// Mantem a meta ativa visivel sem obrigar o usuario a abrir outra tela.
function renderGoal() {
  const goal = currentUser.goal;
  if (!goal) {
    fields.goalMetric.textContent = appText("Nenhuma", "None");
    fields.goalHint.textContent = appText("Conte uma meta para a Cora calcular.", "Tell Cora a goal so she can calculate it.");
    if (fields.goalProgressFill) fields.goalProgressFill.style.width = "0%";
    if (fields.goalProgressMeta) fields.goalProgressMeta.textContent = isEnglishExperience() ? "No active goal yet" : "Sem meta ativa";
    return;
  }
  const plan = buildGoalPlan(goal);
  const progress = goal.price ? Math.min(100, Math.round(((goal.saved || 0) / goal.price) * 100)) : 0;
  fields.goalMetric.textContent = goal.name;
  fields.goalHint.textContent = isEnglishExperience()
    ? `${money(plan.weekly)} per week for ${goal.months} months.`
    : `${money(plan.weekly)} por semana por ${goal.months} meses.`;
  if (fields.goalProgressFill) fields.goalProgressFill.style.width = `${progress}%`;
  if (fields.goalProgressMeta) {
    fields.goalProgressMeta.textContent = isEnglishExperience()
      ? `${progress}% saved | Remaining ${money(plan.remaining)} | Monthly plan ${money(plan.monthly)}`
      : `${progress}% guardado | Falta ${money(plan.remaining)} | Plano mensal ${money(plan.monthly)}`;
  }
}
function renderLanguageOptions() {
  if (!fields.languageSelect) return;
  const currentLanguage = currentUser?.language || "pt-BR";
  fields.languageSelect.innerHTML = languageOptions.map(([code, label]) => `<option value="${code}" ${code === currentLanguage ? "selected" : ""}>${label}</option>`).join("");
  const currentLabel = languageOptions.find(([code]) => code === currentLanguage)?.[1] || "Portugues";
  if (fields.menuLanguageLabel) fields.menuLanguageLabel.textContent = currentLabel;
}
function getDisplayName(name) {
    const fullName = String(name || "Cliente");

    if (window.innerWidth <= 820) {
        return fullName.split(" ")[0].toUpperCase();
    }

    return fullName.toUpperCase();
}

function renderUserIdentity() {
    renderAvatar(fields.topbarAvatar, currentUser);
    renderAvatar(fields.sidebarAvatar, currentUser);
    renderAvatar(fields.profilePreview, currentUser);

    fields.topbarUserName.textContent =
        getDisplayName(currentUser.name);

    if (fields.menuUserName) {
        fields.menuUserName.textContent =
            currentUser.name || "Cliente";
    }

    if (fields.menuUserEmail) {
        fields.menuUserEmail.textContent =
            currentUser.email || "";
    }

    renderAvatar(fields.sidebarBalanceAvatar, currentUser);
}
function renderFinancialDashboard() {
  const result = calculateCoraScore(currentUser);
  const today = getTodayKey();
  const lastSaved = currentUser.scoreHistory?.[currentUser.scoreHistory.length - 1];
  if (!lastSaved || lastSaved.date !== today || lastSaved.score !== result.score) {
    currentUser.scoreHistory = [...(currentUser.scoreHistory || []), { date: today, score: result.score }].slice(-30);
    persistCurrentUser();
  }
  const statusText = getScoreStatusText(result.status);
  const committed = Math.min(100, Math.round(result.committedPercent || 0));
  const essentialPercent = result.income ? Math.round((result.breakdown.essential / result.income) * 100) : 0;
  const flexiblePercent = result.income ? Math.round((result.breakdown.flexible / result.income) * 100) : 0;
  const optionalPercent = result.income ? Math.round((result.breakdown.optional / result.income) * 100) : 0;

  if (fields.coraScoreValue) fields.coraScoreValue.textContent = result.score;
  if (fields.coraScoreStatus) fields.coraScoreStatus.textContent = statusText;
  if (fields.scoreStatusPill) fields.scoreStatusPill.textContent = statusText;
  if (fields.scoreRing) fields.scoreRing.style.setProperty("--score-angle", `${result.score * 3.6}deg`);
  if (fields.coraScoreText) {
    const base = isEnglishExperience()
      ? "Cora Score is an educational estimate created by Cora to help you understand your financial habits."
      : "Cora Score e uma estimativa educativa criada pela Cora para ajudar voce a entender seus habitos financeiros.";
    const detail = isEnglishExperience()
      ? ` Your expenses use ${committed}% of your reported income, and you have ${money(result.available)} estimated available.`
      : ` Seus gastos comprometem ${committed}% da renda informada, e sua sobra estimada e ${money(result.available)}.`;
    fields.coraScoreText.textContent = base + detail;
  }

  if (fields.commitmentPill) fields.commitmentPill.textContent = `${committed}%`;
  if (fields.thermoFill) fields.thermoFill.style.width = `${committed}%`;
  if (fields.thermoMarker) fields.thermoMarker.style.left = `${committed}%`;
  if (fields.essentialPercent) fields.essentialPercent.textContent = `${essentialPercent}%`;
  if (fields.flexiblePercent) fields.flexiblePercent.textContent = `${flexiblePercent}%`;
  if (fields.optionalPercent) fields.optionalPercent.textContent = `${optionalPercent}%`;
  if (fields.essentialAmount) fields.essentialAmount.textContent = money(result.breakdown.essential);
  if (fields.flexibleAmount) fields.flexibleAmount.textContent = money(result.breakdown.flexible);
  if (fields.optionalAmount) fields.optionalAmount.textContent = money(result.breakdown.optional);
  if (fields.thermoInsight) {
    fields.thermoInsight.textContent = result.status === "healthy"
      ? (isEnglishExperience() ? "Your financial balance looks healthy. Keep protecting your margin." : "Seu equilibrio financeiro esta saudavel. Continue protegendo sua margem.")
      : result.status === "attention"
        ? (isEnglishExperience() ? "Your budget needs attention. Review flexible and optional expenses first." : "Seu orcamento pede atencao. Revise primeiro gastos flexiveis e opcionais.")
        : (isEnglishExperience() ? "Your income is highly committed. Avoid new debt and renegotiate what is possible." : "Sua renda esta muito comprometida. Evite novas dividas e renegocie o que for possivel.");
  }
  if (fields.onboardingCard) {
    const hasRealExpenses = currentUser.expenseCategories.some((item) => Number(item.value || 0) > 0);
    fields.onboardingCard.classList.toggle("hidden", Boolean(currentUser.goal && hasRealExpenses && currentUser.income));
  }
}
function getLastSimulation() {
  const price = parseCurrencyInput(fields.buyPriceInput?.value);
  if (!price) return null;
  return {
    id: `sim-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    item: fields.buyItemInput?.value.trim() || (isEnglishExperience() ? "Purchase" : "Compra"),
    price,
    result: fields.buyResult?.textContent || "",
    createdAt: new Date().toISOString()
  };
}
function renderBuySimulation() {
  if (!fields.buyPriceInput || !fields.buyResult) return;
  const item = fields.buyItemInput?.value.trim() || (isEnglishExperience() ? "this purchase" : "essa compra");
  const price = parseCurrencyInput(fields.buyPriceInput.value);
  const result = calculateCoraScore(currentUser);
  if (!price) {
    fields.buyDecisionPill.textContent = isEnglishExperience() ? "Simulator" : "Simulador";
    fields.buyResult.textContent = isEnglishExperience() ? "Enter a value so Cora can compare it with your monthly margin." : "Informe um valor para a Cora comparar com sua sobra mensal.";
    return;
  }
  const monthsNeeded = result.available > 0 ? Math.ceil(price / result.available) : Infinity;
  const safeMonthly = result.income * 0.1;
  if (result.available <= 0) {
    fields.buyDecisionPill.textContent = isEnglishExperience() ? "Wait" : "Espere";
    fields.buyResult.textContent = isEnglishExperience()
      ? `I would not buy ${item} now. Your estimated margin is zero after registered expenses.`
      : `Eu nao compraria ${item} agora. Sua sobra estimada esta zerada depois dos gastos cadastrados.`;
  } else if (price <= result.available && result.status === "healthy") {
    fields.buyDecisionPill.textContent = isEnglishExperience() ? "Possible" : "Possivel";
    fields.buyResult.textContent = isEnglishExperience()
      ? `${item} fits your current monthly margin, but only buy if it does not remove your emergency cushion.`
      : `${item} cabe na sua margem mensal atual, mas compre apenas se nao tirar sua reserva de seguranca.`;
  } else {
    fields.buyDecisionPill.textContent = isEnglishExperience() ? "Plan it" : "Planeje";
    fields.buyResult.textContent = isEnglishExperience()
      ? `For ${item}, a safer plan is saving about ${money(Math.max(safeMonthly, price / Math.max(monthsNeeded, 1)))} per month. Estimated time: ${Number.isFinite(monthsNeeded) ? monthsNeeded : "-"} months.`
      : `Para ${item}, um caminho mais seguro e guardar cerca de ${money(Math.max(safeMonthly, price / Math.max(monthsNeeded, 1)))} por mes. Tempo estimado: ${Number.isFinite(monthsNeeded) ? monthsNeeded : "-"} meses.`;
  }
}
function renderScoreRules() {
  if (!fields.scoreRules) return;
  const result = calculateCoraScore(currentUser);
  const rows = isEnglishExperience()
    ? [
      ["Starting point", "100 points"],
      ["Expenses above 90% of income", "-35 points"],
      ["Expenses above 75% of income", "-25 points"],
      ["Expenses above 60% of income", "-15 points"],
      ["Monthly margin below 5%", "-25 points"],
      ["Monthly margin below 15%", "-15 points"],
      ["Monthly margin below 25%", "-5 points"],
      ["Active financial goal", "+5 points"],
      ["Essential expenses separated", "+5 points"]
    ]
    : [
      ["Ponto inicial", "100 pontos"],
      ["Gastos acima de 90% da renda", "-35 pontos"],
      ["Gastos acima de 75% da renda", "-25 pontos"],
      ["Gastos acima de 60% da renda", "-15 pontos"],
      ["Sobra mensal menor que 5%", "-25 pontos"],
      ["Sobra mensal menor que 15%", "-15 pontos"],
      ["Sobra mensal menor que 25%", "-5 pontos"],
      ["Meta financeira ativa", "+5 pontos"],
      ["Gastos essenciais bem separados", "+5 pontos"]
    ];
  fields.scoreRules.innerHTML = `
    <div class="score-rule-current">
      <strong>${result.score}/100</strong>
      <span>${getScoreStatusText(result.status)}</span>
      <p>${isEnglishExperience() ? "Educational estimate, not a credit score." : "Estimativa educativa, nao e score de credito."}</p>
    </div>
    ${rows.map(([label, value]) => `<div class="score-rule-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}
  `;
}
function openScoreModal() {
  renderScoreRules();
  scoreModal?.classList.remove("hidden");
}
function closeScoreModal() {
  scoreModal?.classList.add("hidden");
}
function buildSummaryText() {
  const result = calculateCoraScore(currentUser);
  const goalText = currentUser.goal
    ? `${currentUser.goal.name} | ${money(currentUser.goal.price)} | ${currentUser.goal.months} ${isEnglishExperience() ? "months" : "meses"}`
    : appText("Nenhuma", "None");
  if (isEnglishExperience()) {
    return [
      "Cora AI Summary",
      `Client: ${currentUser.name}`,
      `Monthly income: ${money(currentUser.income)}`,
      `Total expenses: ${money(result.total)}`,
      `Estimated available: ${money(result.available)}`,
      `Income committed: ${Math.round(result.committedPercent)}%`,
      `Cora Score: ${result.score}/100 (${getScoreStatusText(result.status)})`,
      `Essentials: ${money(result.breakdown.essential)}`,
      `Flexible: ${money(result.breakdown.flexible)}`,
      `Optional: ${money(result.breakdown.optional)}`,
      `Active goal: ${goalText}`,
      "",
      "Note: Cora Score is an educational estimate created by Cora to help you understand your financial habits."
    ].join("\n");
  }
  return [
    "Resumo da Cora AI",
    `Cliente: ${currentUser.name}`,
    `Renda mensal: ${money(currentUser.income)}`,
    `Gastos totais: ${money(result.total)}`,
    `Sobra estimada: ${money(result.available)}`,
    `Renda comprometida: ${Math.round(result.committedPercent)}%`,
    `Cora Score: ${result.score}/100 (${getScoreStatusText(result.status)})`,
    `Essenciais: ${money(result.breakdown.essential)}`,
    `Flexiveis: ${money(result.breakdown.flexible)}`,
    `Opcionais: ${money(result.breakdown.optional)}`,
    `Meta ativa: ${goalText}`,
    "",
    "Observacao: o Cora Score e uma estimativa educativa criada pela Cora para ajudar voce a entender seus habitos financeiros."
  ].join("\n");
}
function exportSummary() {
  const blob = new Blob([buildSummaryText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `resumo-cora-${getTodayKey()}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}
function renderSimulationList() {
  if (!fields.simulationList) return;
  ensureUserCollections(currentUser);
  const list = currentUser.simulations.slice(-3).reverse();
  fields.simulationList.innerHTML = list.length ? list.map((item) => `
    <article class="simulation-item">
      <div>
        <strong>${item.item}</strong>
        <span>${money(item.price)}</span>
      </div>
      <button type="button" data-simulation-goal="${item.id}">${isEnglishExperience() ? "Turn into goal" : "Virar meta"}</button>
    </article>
  `).join("") : `<p>${isEnglishExperience() ? "No saved simulations yet." : "Nenhuma simulacao salva ainda."}</p>`;
}
function saveCurrentSimulation() {
  const simulation = getLastSimulation();
  if (!simulation) {
    renderBuySimulation();
    return;
  }
  ensureUserCollections(currentUser);
  currentUser.simulations.push(simulation);
  currentUser.simulations = currentUser.simulations.slice(-8);
  persistCurrentUser();
  renderSimulationList();
  addMessage("Cora", isEnglishExperience() ? `I saved the simulation for ${simulation.item}. You can turn it into a goal whenever you want.` : `Salvei a simulacao de ${simulation.item}. Voce pode transformar isso em meta quando quiser.`, "cora");
}
function simulationToGoal(id) {
  const simulation = currentUser.simulations.find((item) => item.id === id);
  if (!simulation) return;
  currentUser.goal = { name: simulation.item, price: simulation.price, months: 6, saved: 0, createdAt: new Date().toISOString() };
  currentUser.pendingGoal = null;
  persistCurrentUser();
  renderApp();
  addMessage("Cora", completeGoalForUser(currentUser, currentUser.goal), "cora");
}
function getSmartGreeting(scoreResult) {
  const hour = new Date().getHours();
  const period = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  const firstName = currentUser.name.split(" ")[0];
  const history = currentUser.scoreHistory || [];
  const previous = history.length > 1 ? history[history.length - 2].score : null;
  if (previous !== null && previous !== scoreResult.score) {
    const diff = scoreResult.score - previous;
    return diff > 0
      ? `${period}, ${firstName}. Seu Cora Score subiu ${diff} pontos desde a ultima atualizacao.`
      : `${period}, ${firstName}. Seu Cora Score caiu ${Math.abs(diff)} pontos desde a ultima atualizacao.`;
  }
  return `${period}, ${firstName}. Seu Cora Score esta em ${scoreResult.score}/100.`;
}
// Ponto unico de atualizacao da interface depois de login, chat, renda, gastos ou perfil.
function renderApp() {
  if (!currentUser) return;
  const pronouns = getPronouns(currentUser);
  const totalExpenses = getTotalExpenses(currentUser);
  const available = Math.max(Number(currentUser.income || 0) - totalExpenses, 0);
  const isEnglish = getLang() === "en";
  const scoreResult = calculateCoraScore(currentUser);
  renderUserIdentity();
  fields.heroTitle.textContent = isEnglish ? `How can I help you today, ${currentUser.name.split(" ")[0]}?` : getSmartGreeting(scoreResult);
  fields.heroCopy.textContent = isEnglish ? "Cora understands your financial life, separates essential expenses from adjustable ones, and builds realistic goals with value and deadline." : `A Cora entende sua vida financeira, diferencia gastos essenciais dos ajustaveis e cria metas reais com valor e prazo. Vamos ${pronouns.together}.`;
  if (fields.profileName) fields.profileName.textContent = currentUser.name;
  if (fields.profileBalance) fields.profileBalance.textContent = money(available);
  if (fields.profileHint) fields.profileHint.textContent = t("availableMonth");
  if (fields.incomeMetric) fields.incomeMetric.textContent = money(currentUser.income);
  if (fields.incomeHint) fields.incomeHint.textContent = totalExpenses ? (isEnglish ? `Registered expenses: ${money(totalExpenses)}.` : `Gastos cadastrados: ${money(totalExpenses)}.`) : (isEnglish ? "Update your income from the menu." : "Atualize sua renda pelo menu.");
  if (fields.availableMetric) fields.availableMetric.textContent = money(available);
  if (fields.availableHint) fields.availableHint.textContent = totalExpenses ? (isEnglish ? "Estimate after expenses." : "Estimativa depois dos gastos.") : (isEnglish ? "Add expenses to calculate." : "Cadastre gastos para calcular.");
  fields.editName.value = currentUser.name;
  fields.editEmail.value = currentUser.email;
  if (fields.editPassword) fields.editPassword.value = "";
  if (fields.securityPassword) fields.securityPassword.value = "";
  if (fields.securityPasswordConfirm) fields.securityPasswordConfirm.value = "";
  fields.editGender.value = currentUser.gender;
  if (fields.currentIncomeValue) fields.currentIncomeValue.textContent = money(currentUser.income);
  renderLanguageOptions();
  fields.newIncomeInput.value = "";
  setFeedback(fields.profileFeedback, "");
  setFeedback(fields.incomeFeedback, "");

  renderMessages();
  renderSpending();
  renderGoal();
  renderFinancialDashboard();
  renderBuySimulation();
  renderSimulationList();
  applyLanguage();
}
function addMessage(sender, text, type) {
  ensureDailyChat(currentUser);
  currentUser.messages.push({ sender, text: type === "cora" ? localizePhrase(text) : text, type, createdAt: new Date().toISOString() });
  saveActiveConversation();
  persistCurrentUser();
  renderMessages();
}
function askForMissingGoalInfo(goal) {
  const missing = [];
  if (!goal.name || goal.name === "meta pessoal") missing.push(appText("o que voce quer conquistar", "what you want to achieve"));
  if (!goal.price) missing.push(appText("valor aproximado", "approximate value"));
  if (!goal.months) missing.push(appText("prazo em meses", "deadline in months"));
  if (!missing.length) return null;
  currentUser.pendingGoal = goal;
  persistCurrentUser();
  return appText(
    `Vamos criar essa meta. Me diga: ${missing.join(", ")}. Exemplo: "notebook, R$ 3.000, 8 meses".`,
    `Let's create this goal. Tell me: ${missing.join(", ")}. Example: "laptop, R$ 3,000, 8 months".`
  );
}
function completeGoal(goal) { currentUser.goal = goal; currentUser.pendingGoal = null; persistCurrentUser(); renderApp(); return completeGoalForUser(currentUser, goal); }
function mergePendingGoal(text) {
  const pending = currentUser.pendingGoal;
  if (!pending) return null;
  const phone = detectPhone(text);
  const merged = { ...pending, name: phone?.name || detectGoalName(text) || pending.name, price: parseMoney(text) || phone?.price || pending.price, months: parseMonths(text) || pending.months };
  return askForMissingGoalInfo(merged) || completeGoal(merged);
}
function handleGoal(text) {
  const phone = detectPhone(text);
  const goal = { name: phone?.name || detectGoalName(text), price: parseMoney(text) || phone?.price || null, months: parseMonths(text), saved: 0, createdAt: new Date().toISOString() };
  return askForMissingGoalInfo(goal) || completeGoal(goal);
}
function updateIncomeFromText(text) {
  if (!/(recebo|renda|ganho|sal[aá]rio|bolsa|mesada)/i.test(text)) return null;
  const amount = parseMoney(text);
  if (!amount) return isEnglishExperience() ? "Tell me your monthly income so I can adjust your plan. Example: I earn R$ 800 per month." : "Me diga o valor da sua renda mensal para eu ajustar seu planejamento. Exemplo: recebo R$ 800 por mes.";
  currentUser.income = amount;
  persistCurrentUser();
  renderApp();
  return isEnglishExperience() ? `I saved your monthly gross income as ${money(amount)}. Now I can calculate how much you can save without squeezing your month.` : `Anotei sua renda bruta mensal como ${money(amount)}. Agora consigo calcular quanto cabe guardar sem deixar seu mes sufocado.`;
}
function updateGoalFromText(text) {
  if (!currentUser.goal) return null;
  const months = parseMonths(text), price = parseMoney(text);
  if (/prazo|mes|mês|meses/i.test(text) && months) { currentUser.goal.months = months; persistCurrentUser(); renderApp(); return completeGoal(currentUser.goal); }
  if (/(custa|valor|preço|preco|r\$)/i.test(text) && price) { currentUser.goal.price = price; persistCurrentUser(); renderApp(); return completeGoal(currentUser.goal); }
  return null;
}
function hasEducationIntent(text) {
  return /(cart[aã]o|card|fatura|bill|cr[eé]dito|credit|juros|interest|iof|vencimento|due date|parcelamento|installment|parcelar|limite|limit|invest|investir|investimento|renda fixa|tesouro|cdb|acao|ações|stocks|crypto|cripto|banco|bank|orcamento|orçamento|budget|reserva|emergency)/i.test(text);
}
function simpleEducationAnswer(text) {
  if (/(voce pode investir|você pode investir|pode fazer investimento|pode sugerir|sugira.*invest|recomenda.*invest|onde investir|qual investimento|em que investir|melhor investimento|which investment|where should i invest|what should i invest|best investment|which bank|qual banco|cripto|crypto|acoes|ações|stocks|tesouro|cdb|carteira|portfolio)/i.test(text)) return kb("investmentBoundary");
  if (/(investimento|investir|investment|investing)/i.test(text)) return (isEnglishExperience() ? "Investing is a way to put money into an asset or product expecting future return. The key ideas are risk, liquidity, time horizon and fees. " : "Investimento e uma forma de colocar dinheiro em um ativo ou produto esperando retorno futuro. As ideias principais sao risco, liquidez, prazo e custos. ") + kb("investmentBoundary");
  if (/iof/i.test(text)) return kb("iof");
  if (/parcelamento.*fatura|parcelar.*fatura|fatura.*parcel|bill.*installment|installment.*bill/i.test(text)) return kb("invoice");
  if (/vencimento|data|due date|payday/i.test(text)) return kb("dueDate");
  if (/juros|interest/i.test(text)) return kb("interest");
  if (/parcelar|parcelado|parcelamento|installment|split/i.test(text)) return kb("installments");
  if (/cart[aã]o|card|fatura|bill|cr[eé]dito|credit/i.test(text)) return kb("card");
  if (/orcamento|orçamento|budget|gasto|expense/i.test(text)) return kb("budget");
  if (/reserva|emergency/i.test(text)) return kb("emergency");
  return null;
}
function hasEducationIntentSmart(text) {
  return hasEducationIntent(text) || /(cdi|selic|score|nota|saude financeira|saúde financeira)/i.test(text);
}
function isQuestionIntent(text) {
  return /(\?|^o que|^oque|^qual|^como|^por que|^porque|^me explica|^explique|^what|^which|^how|^why|^explain)/i.test(String(text).trim());
}
function explainUserScore() {
  const result = calculateCoraScore(currentUser);
  return isEnglishExperience()
    ? `Your Cora Score is ${result.score}/100 (${getScoreStatusText(result.status)}). Your registered expenses use ${Math.round(result.committedPercent)}% of your income and your estimated monthly margin is ${money(result.available)}. ${kb("scoreExplain")}`
    : `Seu Cora Score esta em ${result.score}/100 (${getScoreStatusText(result.status)}). Seus gastos cadastrados comprometem ${Math.round(result.committedPercent)}% da renda e sua sobra estimada e ${money(result.available)}. ${kb("scoreExplain")}`;
}
function simpleEducationAnswerSmart(text) {
  if (/score|nota|saude financeira|saúde financeira/i.test(text)) return explainUserScore();
  if (/cdi/i.test(text)) return kb("cdi");
  if (/cdb/i.test(text) && !/(qual|melhor|onde|which|best|where)/i.test(text)) return kb("cdb");
  if (/selic/i.test(text)) return kb("selic");
  return simpleEducationAnswer(text);
}
function getCoraAnswer(text) {
  if ((/^\s*(quero\s+)?criar\s+(uma\s+)?meta\s*(financeira)?\s*$/i.test(text) || /^\s*(i\s+want\s+to\s+)?create\s+(a\s+)?(financial\s+)?goal\s*$/i.test(text))) {
    currentUser.pendingGoal = { name: "meta pessoal", price: null, months: null, saved: 0, createdAt: new Date().toISOString() };
    persistCurrentUser();
    return tx("goalStart");
  }
  const education = simpleEducationAnswerSmart(text);
  if (education && hasEducationIntentSmart(text)) return education;
  if (currentUser.pendingGoal && isQuestionIntent(text)) return education || kb("default");
  return mergePendingGoal(text) || updateGoalFromText(text) || (/(comprar|buy|juntar|guardar|save|meta|goal|celular|phone|iphone|samsung|galaxy|motorola|redmi|notebook|laptop|viagem|trip|curso|course|computador|computer|moto|carro|car|intercambio|exchange)/i.test(text) ? handleGoal(text) : null) || updateIncomeFromText(text) || education || kb("default");
}
function renderHistoryModal(selectedDate = currentUser?.activeChatDate || getTodayKey()) {
  if (!currentUser || !fields.historyList || !fields.historyMessages) return;
  currentUser.chatHistory = currentUser.chatHistory || {};
  const dates = Object.keys(currentUser.chatHistory).sort().reverse();
  const countLabel = (count) => isEnglishExperience() ? `${count} messages` : `${count} mensagens`;
  fields.historyList.innerHTML = dates.map((date) => `<button type="button" class="history-date ${date === selectedDate ? "active" : ""}" data-history-date="${date}">${formatHistoryDate(date)}<span>${countLabel(currentUser.chatHistory[date].length)}</span></button>`).join("") || `<p class="empty-categories">${isEnglishExperience() ? "No saved conversations yet." : "Ainda nao ha conversas salvas."}</p>`;
  const messages = currentUser.chatHistory[selectedDate] || [];
  fields.historyTitle.textContent = isEnglishExperience() ? `Conversation from ${formatHistoryDate(selectedDate)}` : `Conversa de ${formatHistoryDate(selectedDate)}`;
  fields.historyMessages.innerHTML = messages.map((message) => `<div class="message ${message.type}"><span>${message.type === "user" ? tx("you") : "Cora"}</span><p>${localizePhrase(message.text)}</p></div>`).join("");
}
function openHistoryModal() {
  if (!currentUser) return;
  saveActiveConversation();
  persistCurrentUser();
  renderHistoryModal();
  historyModal?.classList.remove("hidden");
}
function closeHistoryModal() {
  historyModal?.classList.add("hidden");
}
function closeMenu() {
  sidebar?.classList.remove("active");
  overlay?.classList.remove("active");
  menuBtn?.classList.remove("active");
  menuBtn?.setAttribute("aria-expanded", "false");
}
function toggleMenu() {
  if (!sidebar || !menuBtn) return;
  const isOpen = !sidebar.classList.contains("active");
  sidebar.classList.toggle("active", isOpen);
  overlay?.classList.toggle("active", isOpen);
  menuBtn.classList.toggle("active", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
}
function applySavedTheme() {
  const isLight = localStorage.getItem(THEME_KEY) === "light";
  document.body.classList.toggle("light-mode", isLight);
  themeToggle.textContent = isLight ? "🌙" : "☀";
  themeToggle.title = isLight ? t("themeDark") : t("themeLight");
  themeToggle.setAttribute("aria-label", themeToggle.title);
  themeToggle.setAttribute("aria-pressed", String(isLight));
  if (authThemeToggle) {
    authThemeToggle.textContent = isLight ? "🌙" : "☀️";
    authThemeToggle.setAttribute("aria-pressed", String(isLight));
  }
}

userMenuTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = userDropdown?.classList.toggle("show");
  userMenuTrigger.setAttribute("aria-expanded", String(Boolean(isOpen)));
});
userDropdown?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target.closest("[data-menu-target], a, #logoutButton")) {
    userDropdown.classList.remove("show");
    userMenuTrigger?.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("click", () => {
  userDropdown?.classList.remove("show");
  userMenuTrigger?.setAttribute("aria-expanded", "false");
});
loginTab.addEventListener("click", () => switchAuthMode("login"));
signupTab.addEventListener("click", () => switchAuthMode("signup"));
authLanguageSelect?.addEventListener("change", () => {
  setAppLanguage(authLanguageSelect.value || "pt-BR");
});
logoutButton?.addEventListener("click", signOut);
menuBtn?.addEventListener("click", toggleMenu);
overlay?.addEventListener("click", closeMenu);
function toggleTheme() {
  localStorage.setItem(THEME_KEY, document.body.classList.contains("light-mode") ? "dark" : "light");
  applySavedTheme();
  applyLanguage();
  updateMobileButtons();
}
themeToggle.addEventListener("click", toggleTheme);
authThemeToggle?.addEventListener("click", toggleTheme);
historyButton?.addEventListener("click", openHistoryModal);
historyClose?.addEventListener("click", closeHistoryModal);
scoreModalClose?.addEventListener("click", closeScoreModal);
scoreModal?.addEventListener("click", (event) => { if (event.target === scoreModal) closeScoreModal(); });
fields.buyCheckButton?.addEventListener("click", renderBuySimulation);
fields.buyPriceInput?.addEventListener("input", renderBuySimulation);
fields.saveSimulationButton?.addEventListener("click", saveCurrentSimulation);
fields.simulationList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-simulation-goal]");
  if (button) simulationToGoal(button.dataset.simulationGoal);
});
fields.scoreExplainButton?.addEventListener("click", openScoreModal);
fields.exportSummaryButton?.addEventListener("click", exportSummary);
historyModal?.addEventListener("click", (event) => { if (event.target === historyModal) closeHistoryModal(); });
fields.historyList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history-date]");
  if (!button) return;
  renderHistoryModal(button.dataset.historyDate);
});

function openSettingsPage(id) {
  document.querySelectorAll(".settings-page").forEach((page) => {
    const isActive = page.id === id;
    page.classList.toggle("active", isActive);
    page.setAttribute("aria-hidden", String(!isActive));
  });
  document.body.classList.add("settings-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSettingsPage() {
  document.body.classList.remove("settings-open");
  document.querySelectorAll(".settings-page").forEach((page) => {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
  });
}

document.querySelectorAll("[data-menu-target]").forEach((button) => button.addEventListener("click", () => {
  closeMenu();
  openSettingsPage(button.dataset.menuTarget);
}));

document.querySelectorAll("[data-close-settings]").forEach((button) => button.addEventListener("click", closeSettingsPage));
document.querySelectorAll(".sidebar a, .user-dropdown a").forEach((link) => link.addEventListener("click", (event) => {
  const targetId = link.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;
  event.preventDefault();
  closeSettingsPage();
  closeMenu();
  const target = document.querySelector(targetId);
  if (target) window.location.hash = targetId;
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}));


signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = $("#signupName").value.trim();
  const email = normalizeEmail($("#signupEmail").value);
  const password = $("#signupPassword").value;
  const gender = $("#signupGender").value;
  const income = parseCurrencyInput($("#signupIncome").value);
  if (!name || !email || !password || !gender || !income) { setFeedback(signupFeedback, t("requiredSignup"), true); return; }
  if (!isStrongPassword(password)) { setFeedback(signupFeedback, t("strongPasswordHint"), true); return; }
  if (!isAllowedEmail(email)) { setFeedback(signupFeedback, t("allowedEmail"), true); return; }
  if (state.users[email]) { setFeedback(signupFeedback, t("accountExists"), true); return; }
  const uploadedImage = await readImageAsDataUrl(signupPhoto);
  const user = defaultUser({ name, email, password, gender, income, profileImage: uploadedImage });
  ensureDailyChat(user);
  state.users[email] = user;
  saveState();
  setFeedback(signupFeedback, t("accountCreated"));
  signIn(email);
  signupForm.reset();

});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = normalizeEmail($("#loginEmail").value);
  const password = $("#loginPassword").value;
  const user = state.users[email];
  if (!user || user.password !== password) { setFeedback(loginFeedback, t("invalidLogin"), true); return; }
  setFeedback(loginFeedback, t("entering"));
  signIn(email);
  loginForm.reset();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userText = chatInput.value.trim();
  if (!userText) return;
  addMessage("Voce", userText, "user");
  chatInput.value = "";
  window.setTimeout(() => { addMessage("Cora", getCoraAnswer(userText), "cora"); renderApp(); }, 250);
});
$$('[data-prompt]').forEach((button) => button.addEventListener("click", () => { chatInput.value = button.dataset.prompt; chatInput.focus(); }));

categoryList.addEventListener("change", (event) => {
  const row = event.target.closest(".category-row");
  if (!row) return;
  const category = currentUser.expenseCategories.find((item) => item.id === row.dataset.id);
  if (!category) return;
  if (event.target.classList.contains("category-name")) category.name = event.target.value.trim() || "Sem nome";
  if (event.target.classList.contains("category-value")) category.value = parseCurrencyInput(event.target.value);
  if (event.target.classList.contains("category-type")) category.type = event.target.value;
  persistCurrentUser();
  renderApp();
});
categoryList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("category-remove")) return;
  const row = event.target.closest(".category-row");
  currentUser.expenseCategories = currentUser.expenseCategories.filter((item) => item.id !== row.dataset.id);
  persistCurrentUser();
  renderApp();
  addMessage("Cora", appText("Categoria removida. Atualizei seus insights com a nova lista de gastos.", "Category removed. I updated your insights with the new expense list."), "cora");
});
addCategoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = fields.newCategoryName.value.trim();
  const value = parseCurrencyInput(fields.newCategoryValue.value);
  const type = fields.newCategoryType.value || inferExpenseType(name);
  if (!name) { fields.newCategoryName.focus(); return; }
  currentUser.expenseCategories.push(createExpenseCategory(name, value, type));
  fields.newCategoryName.value = "";
  fields.newCategoryValue.value = "";
  fields.newCategoryType.value = "essential";
  persistCurrentUser();
  renderApp();
  addMessage("Cora", appText(`Adicionei ${name} aos seus gastos. Agora seus insights ficam mais parecidos com sua vida real.`, `I added ${name} to your expenses. Your insights now look closer to your real life.`), "cora");
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextName = fields.editName.value.trim() || currentUser.name;
  const nextEmail = normalizeEmail(fields.editEmail.value);
  const nextPassword = fields.editPassword?.value || "";
  if (!isAllowedEmail(nextEmail)) { setFeedback(fields.profileFeedback, appText("Use um e-mail valido, como Gmail, Outlook, Hotmail, Yahoo, iCloud ou Proton.", "Use a valid email, such as Gmail, Outlook, Hotmail, Yahoo, iCloud or Proton."), true); return; }
  if (nextEmail !== currentUser.email && state.users[nextEmail]) { setFeedback(fields.profileFeedback, appText("Esse e-mail ja esta em uso por outra conta.", "This email is already used by another account."), true); return; }
  if (nextEmail !== currentUser.email) { delete state.users[currentUser.email]; currentUser.email = nextEmail; state.currentEmail = nextEmail; }
  currentUser.name = nextName;
  currentUser.gender = fields.editGender.value;
  if (nextPassword) currentUser.password = nextPassword;
  persistCurrentUser();
  renderApp();
  setFeedback(fields.profileFeedback, appText("Perfil atualizado com sucesso.", "Profile updated successfully."));
  addMessage("Cora", appText("Perfil atualizado. Vou usar seus dados novos nas proximas conversas e planos.", "Profile updated. I will use your new data in the next conversations and plans."), "cora");
});
addPhotoButton?.addEventListener("click", () => editPhotoInput?.click());
editPhotoInput.addEventListener("change", async () => {
  const image = await readImageAsDataUrl(editPhotoInput);
  if (!image) { setFeedback(fields.profileFeedback, appText("Escolha uma imagem valida.", "Choose a valid image."), true); return; }
  currentUser.profileImage = image;
  persistCurrentUser();
  renderApp();
  setFeedback(fields.profileFeedback, appText("Foto atualizada com sucesso.", "Photo updated successfully."));
});
removePhotoButton.addEventListener("click", () => {
  currentUser.profileImage = "";
  editPhotoInput.value = "";
  persistCurrentUser();
  renderApp();
  setFeedback(fields.profileFeedback, appText("Foto removida. Vou usar suas iniciais no perfil.", "Photo removed. I will use your initials in the profile."));
});
securityForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextPassword = fields.securityPassword.value;
  const confirmPassword = fields.securityPasswordConfirm.value;
  if (!isStrongPassword(nextPassword)) { setFeedback(fields.securityFeedback, t("strongPasswordHint"), true); return; }
  if (nextPassword !== confirmPassword) { setFeedback(fields.securityFeedback, appText("As senhas nao conferem.", "The passwords do not match."), true); return; }
  currentUser.password = nextPassword;
  persistCurrentUser();
  renderApp();
  setFeedback(fields.securityFeedback, appText("Senha atualizada com seguranca.", "Password updated securely."));
  addMessage("Cora", appText("Senha atualizada. Sua conta continua protegida.", "Password updated. Your account remains protected."), "cora");
});

fields.languageSelect?.addEventListener("change", () => {
  if (!currentUser) return;
  setAppLanguage(fields.languageSelect.value || "pt-BR");
  renderLanguageOptions();
});
languageForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  setAppLanguage(fields.languageSelect.value || "pt-BR");
  renderLanguageOptions();
  setFeedback(fields.languageFeedback, getLang() === "en" ? "Language saved. The Cora interface is now in English." : "Idioma salvo. A interface foi atualizada.");
});
incomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextIncome = parseCurrencyInput(fields.newIncomeInput.value);
  if (!nextIncome) { setFeedback(fields.incomeFeedback, appText("Informe uma renda valida para atualizar.", "Enter a valid income to update."), true); return; }
  fields.incomeUpdateButton.disabled = true;
  fields.incomeUpdateButton.textContent = appText("Atualizando...", "Updating...");
  setFeedback(fields.incomeFeedback, appText("Recalculando seu planejamento...", "Recalculating your plan..."));
  window.setTimeout(() => {
    currentUser.income = nextIncome;
    persistCurrentUser();
    renderApp();
    fields.incomeUpdateButton.disabled = false;
    fields.incomeUpdateButton.textContent = t("update");
    setFeedback(fields.incomeFeedback, appText(`Renda atualizada para ${money(nextIncome)}.`, `Income updated to ${money(nextIncome)}.`));
    addMessage("Cora", appText(`Renda atualizada para ${money(nextIncome)}. A partir de agora, metas e insights vao considerar esse novo valor.`, `Income updated to ${money(nextIncome)}. From now on, goals and insights will use this new value.`), "cora");
  }, 450);
});
voiceButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) { addMessage("Cora", isEnglishExperience() ? "Your browser has not enabled text-to-speech here yet." : "Seu navegador ainda nao liberou leitura em voz alta por aqui.", "cora"); return; }
  const goalText = currentUser.goal ? (isEnglishExperience() ? `Your current goal is ${currentUser.goal.name}, with a plan of ${money(buildGoalPlan(currentUser.goal).weekly)} per week.` : `Sua meta atual e ${currentUser.goal.name}, com plano de ${money(buildGoalPlan(currentUser.goal).weekly)} por semana.`) : (isEnglishExperience() ? "You do not have an active goal yet." : "Voce ainda nao tem uma meta ativa.");
  const summary = isEnglishExperience() ? `Cora summary. Your reported monthly gross income is ${money(currentUser.income)}. Your registered expenses add up to ${money(getTotalExpenses(currentUser))}. ${goalText}` : `Resumo da Cora. Sua renda bruta mensal informada e ${money(currentUser.income)}. Seus gastos informados somam ${money(getTotalExpenses(currentUser))}. ${goalText}`;
  const utterance = new SpeechSynthesisUtterance(summary);
  utterance.lang = isEnglishExperience() ? "en-US" : "pt-BR";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
});
$$('.lesson').forEach((button) => button.addEventListener("click", () => {
  $$('.lesson').forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  const content = lessonContent[button.dataset.topic];
  lessonDetail.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p>`;
}));

applySavedTheme();
applyLanguage();

const sessionEmail = sessionStorage.getItem(SESSION_KEY);
if (sessionEmail && state.users[sessionEmail]) {
    signIn(sessionEmail);
} else {
    appShell.classList.add("hidden");
    authScreen.classList.remove("hidden");
    switchAuthMode("login");
}

function updateMobileButtons() {
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "🌙" : "☀";
  themeToggle.title = isLight ? t("themeDark") : t("themeLight");
  themeToggle.setAttribute("aria-label", themeToggle.title);
  voiceButton.textContent = "🔊";
  voiceButton.title = t("listenSummary");
  voiceButton.setAttribute("aria-label", t("listenSummary"));
}

window.addEventListener("resize", updateMobileButtons);
updateMobileButtons();

