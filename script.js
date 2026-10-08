// LingoNova is built with simple data, browser APIs, and localStorage.

const languageList = [
  { id: "en", name: "English", flag: "🇬🇧", native: "English", locale: "en-GB" },
  { id: "ta", name: "Tamil", flag: "🇮🇳", native: "தமிழ்", locale: "ta-IN" },
  { id: "hi", name: "Hindi", flag: "🇮🇳", native: "हिन्दी", locale: "hi-IN" },
  { id: "te", name: "Telugu", flag: "🇮🇳", native: "తెలుగు", locale: "te-IN" },
  { id: "ml", name: "Malayalam", flag: "🇮🇳", native: "മലയാളം", locale: "ml-IN" },
  { id: "kn", name: "Kannada", flag: "🇮🇳", native: "ಕನ್ನಡ", locale: "kn-IN" },
  { id: "fr", name: "French", flag: "🇫🇷", native: "Français", locale: "fr-FR" },
  { id: "de", name: "German", flag: "🇩🇪", native: "Deutsch", locale: "de-DE" },
  { id: "ja", name: "Japanese", flag: "🇯🇵", native: "日本語", locale: "ja-JP" },
  { id: "es", name: "Spanish", flag: "🇪🇸", native: "Español", locale: "es-ES" },
  { id: "it", name: "Italian", flag: "🇮🇹", native: "Italiano", locale: "it-IT" },
  { id: "ko", name: "Korean", flag: "🇰🇷", native: "한국어", locale: "ko-KR" },
  { id: "zh", name: "Chinese", flag: "🇨🇳", native: "中文", locale: "zh-CN" },
  { id: "ru", name: "Russian", flag: "🇷🇺", native: "Русский", locale: "ru-RU" },
  { id: "pt", name: "Portuguese", flag: "🇵🇹", native: "Português", locale: "pt-PT" },
  { id: "ar", name: "Arabic", flag: "🇦🇪", native: "العربية", locale: "ar-SA" }
];

// Each phrase has a translation for every language above, in its matching language code.
const phraseBook = [
  { id: "hello", title: "Say hello", topic: "Greetings", icon: "👋", level: "beginner", values: { en: "Hello!", ta: "வணக்கம்!", hi: "नमस्ते!", te: "నమస్కారం!", ml: "നമസ്കാരം!", kn: "ನಮಸ್ಕಾರ!", fr: "Bonjour !", de: "Hallo!", ja: "こんにちは！", es: "¡Hola!", it: "Ciao!", ko: "안녕하세요!", zh: "你好！", ru: "Привет!", pt: "Olá!", ar: "مرحبًا!" } },
  { id: "morning", title: "Good morning", topic: "Greetings", icon: "☀️", level: "beginner", values: { en: "Good morning!", ta: "காலை வணக்கம்!", hi: "सुप्रभात!", te: "శుభోదయం!", ml: "സുപ്രഭാതം!", kn: "ಶುಭೋದಯ!", fr: "Bonjour !", de: "Guten Morgen!", ja: "おはようございます！", es: "¡Buenos días!", it: "Buongiorno!", ko: "좋은 아침이에요!", zh: "早上好！", ru: "Доброе утро!", pt: "Bom dia!", ar: "صباح الخير!" } },
  { id: "thanks", title: "Say thank you", topic: "Polite words", icon: "💛", level: "beginner", values: { en: "Thank you!", ta: "நன்றி!", hi: "धन्यवाद!", te: "ధన్యవాదాలు!", ml: "നന്ദി!", kn: "ಧನ್ಯವಾದಗಳು!", fr: "Merci !", de: "Danke!", ja: "ありがとうございます！", es: "¡Gracias!", it: "Grazie!", ko: "감사합니다!", zh: "谢谢！", ru: "Спасибо!", pt: "Obrigado!", ar: "شكرًا!" } },
  { id: "please", title: "Ask politely", topic: "Polite words", icon: "🌼", level: "beginner", values: { en: "Please.", ta: "தயவுசெய்து.", hi: "कृपया।", te: "దయచేసి.", ml: "ദയവായി.", kn: "ದಯವಿಟ್ಟು.", fr: "S'il vous plaît.", de: "Bitte.", ja: "お願いします。", es: "Por favor.", it: "Per favore.", ko: "부탁합니다.", zh: "请。", ru: "Пожалуйста.", pt: "Por favor.", ar: "من فضلك." } },
  { id: "water", title: "Ask for water", topic: "Everyday words", icon: "💧", level: "beginner", values: { en: "Water, please.", ta: "தண்ணீர், தயவுசெய்து.", hi: "पानी, कृपया।", te: "నీళ్లు, దయచేసి.", ml: "വെള്ളം, ദയവായി.", kn: "ನೀರು, ದಯವಿಟ್ಟು.", fr: "De l'eau, s'il vous plaît.", de: "Wasser, bitte.", ja: "お水をお願いします。", es: "Agua, por favor.", it: "Acqua, per favore.", ko: "물 주세요.", zh: "请给我水。", ru: "Воды, пожалуйста.", pt: "Água, por favor.", ar: "ماء، من فضلك." } },
  { id: "friend", title: "Talk about a friend", topic: "Everyday words", icon: "🧑‍🤝‍🧑", level: "beginner", values: { en: "You are my friend.", ta: "நீ என் நண்பன்.", hi: "तुम मेरे दोस्त हो।", te: "నువ్వు నా స్నేహితుడివి.", ml: "നീ എന്റെ സുഹൃത്താണ്.", kn: "ನೀನು ನನ್ನ ಸ್ನೇಹಿತ.", fr: "Tu es mon ami.", de: "Du bist mein Freund.", ja: "あなたは私の友達です。", es: "Eres mi amigo.", it: "Sei mio amico.", ko: "너는 내 친구야.", zh: "你是我的朋友。", ru: "Ты мой друг.", pt: "Você é meu amigo.", ar: "أنت صديقي." } },
  { id: "school", title: "At school", topic: "School", icon: "🎒", level: "beginner", values: { en: "I go to school.", ta: "நான் பள்ளிக்குச் செல்கிறேன்.", hi: "मैं स्कूल जाता हूँ।", te: "నేను పాఠశాలకు వెళ్తాను.", ml: "ഞാൻ സ്കൂളിലേക്ക് പോകുന്നു.", kn: "ನಾನು ಶಾಲೆಗೆ ಹೋಗುತ್ತೇನೆ.", fr: "Je vais à l'école.", de: "Ich gehe zur Schule.", ja: "私は学校へ行きます。", es: "Voy a la escuela.", it: "Vado a scuola.", ko: "저는 학교에 가요.", zh: "我去学校。", ru: "Я иду в школу.", pt: "Eu vou à escola.", ar: "أذهب إلى المدرسة." } },
  { id: "howareyou", title: "Ask how someone is", topic: "Conversations", icon: "💬", level: "intermediate", values: { en: "How are you?", ta: "நீங்கள் எப்படி இருக்கிறீர்கள்?", hi: "आप कैसे हैं?", te: "మీరు ఎలా ఉన్నారు?", ml: "സുഖമാണോ?", kn: "ನೀವು ಹೇಗಿದ್ದೀರಿ?", fr: "Comment allez-vous ?", de: "Wie geht es dir?", ja: "お元気ですか？", es: "¿Cómo estás?", it: "Come stai?", ko: "어떻게 지내세요?", zh: "你好吗？", ru: "Как дела?", pt: "Como está?", ar: "كيف حالك؟" } },
  { id: "myname", title: "Introduce yourself", topic: "Conversations", icon: "🙋", level: "intermediate", values: { en: "My name is Anu.", ta: "என் பெயர் அனு.", hi: "मेरा नाम अनु है।", te: "నా పేరు అను.", ml: "എന്റെ പേര് അനു എന്നാണ്.", kn: "ನನ್ನ ಹೆಸರು ಅನು.", fr: "Je m'appelle Anu.", de: "Ich heiße Anu.", ja: "私の名前はアヌです。", es: "Me llamo Anu.", it: "Mi chiamo Anu.", ko: "제 이름은 아누예요.", zh: "我叫阿努。", ru: "Меня зовут Ану.", pt: "O meu nome é Anu.", ar: "اسمي أنو." } },
  { id: "fine", title: "Reply with a smile", topic: "Conversations", icon: "😊", level: "advanced", values: { en: "I am fine, thank you.", ta: "நான் நலமாக இருக்கிறேன், நன்றி.", hi: "मैं ठीक हूँ, धन्यवाद।", te: "నేను బాగున్నాను, ధన్యవాదాలు.", ml: "എനിക്ക് സുഖമാണ്, നന്ദി.", kn: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.", fr: "Je vais bien, merci.", de: "Mir geht es gut, danke.", ja: "元気です、ありがとうございます。", es: "Estoy bien, gracias.", it: "Sto bene, grazie.", ko: "잘 지내요, 감사합니다.", zh: "我很好，谢谢。", ru: "У меня всё хорошо, спасибо.", pt: "Estou bem, obrigado.", ar: "أنا بخير، شكرًا." } },
  { id: "library", title: "Ask for the library", topic: "At school", icon: "📚", level: "advanced", values: { en: "Where is the library?", ta: "நூலகம் எங்கே?", hi: "पुस्तकालय कहाँ है?", te: "గ్రంథాలయం ఎక్కడ ఉంది?", ml: "ലൈബ്രറി എവിടെയാണ്?", kn: "ಗ್ರಂಥಾಲಯ ಎಲ್ಲಿದೆ?", fr: "Où est la bibliothèque ?", de: "Wo ist die Bibliothek?", ja: "図書館はどこですか？", es: "¿Dónde está la biblioteca?", it: "Dov'è la biblioteca?", ko: "도서관은 어디예요?", zh: "图书馆在哪里？", ru: "Где библиотека?", pt: "Onde fica a biblioteca?", ar: "أين المكتبة؟" } }
];

const levels = ["beginner", "intermediate", "advanced"];
const levelLabels = { beginner: "🌱 Beginner", intermediate: "🌿 Intermediate", advanced: "🌳 Advanced" };
const storageKey = "lingoNovaStudent";
let saved = loadSavedData();
let selectedLesson = null;
let speakingIndex = 0;
let quizList = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let conversationIndex = 0;
let toastTimer;

// Each language keeps its own progress, while preferred-language choice is shared.
function freshStats() {
  return { lessons: [], learned: [], quizBest: 0, quizLast: 0, speaking: 0, points: 0, streak: 0, lastPractice: "", recent: [] };
}

function loadSavedData() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      configured: Boolean(data.configured),
      native: languageList.some(language => language.id === data.native) ? data.native : "en",
      target: languageList.some(language => language.id === data.target) ? data.target : "fr",
      level: levels.includes(data.level) ? data.level : "beginner",
      stats: data.stats && typeof data.stats === "object" ? data.stats : {}
    };
  } catch (error) {
    console.warn("Could not read saved learning progress.", error);
    return { configured: false, native: "en", target: "fr", level: "beginner", stats: {} };
  }
}

function saveData() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(saved));
  } catch (error) {
    console.warn("Could not save learning progress.", error);
    showToast("Progress could not be saved on this device.");
  }
}

function languageById(id) {
  return languageList.find(language => language.id === id) || languageList[0];
}

function currentStats() {
  const id = saved.target;
  if (!saved.stats[id] || typeof saved.stats[id] !== "object") saved.stats[id] = freshStats();
  const stats = saved.stats[id];
  for (const [key, value] of Object.entries(freshStats())) {
    if (stats[key] === undefined) stats[key] = value;
  }
  return stats;
}

function phraseFor(id) {
  return phraseBook.find(phrase => phrase.id === id) || phraseBook[0];
}

function targetText(phrase) {
  return phrase.values[saved.target] || phrase.values.en;
}

function meaningText(phrase) {
  return phrase.values[saved.native] || phrase.values.en;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderLanguageOptions() {
  const options = languageList.map(language =>
    `<option value="${language.id}">${language.flag} ${language.name} — ${language.native}</option>`
  ).join("");
  ["native-language", "settings-native"].forEach(id => { document.getElementById(id).innerHTML = options; });
  ["target-language", "settings-target"].forEach(id => { document.getElementById(id).innerHTML = options; });
  document.getElementById("native-language").value = saved.native;
  document.getElementById("target-language").value = saved.target;
  document.getElementById("settings-native").value = saved.native;
  document.getElementById("settings-target").value = saved.target;
  document.getElementById("settings-level").value = saved.level;
}

function startApp() {
  saved.native = document.getElementById("native-language").value;
  saved.target = document.getElementById("target-language").value;
  saved.configured = true;
  saveData();
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  renderApp();
}

function showView(name) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `${name}-view`));
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === name));
  if (name === "quiz") makeQuiz();
  if (name === "conversation") renderConversation();
  if (name === "settings") renderLanguageOptions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function recordActivity(points) {
  const stats = currentStats();
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  if (stats.lastPractice !== today) {
    const yesterdayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
    stats.streak = stats.lastPractice === yesterday ? stats.streak + 1 : 1;
    stats.lastPractice = today;
  }
  stats.points += points;
  saveData();
}

function renderApp() {
  const target = languageById(saved.target);
  const native = languageById(saved.native);
  const stats = currentStats();
  const shell = document.getElementById("app-shell");
  shell.dataset.theme = target.id;
  document.getElementById("header-language").textContent = `${target.flag} ${target.name}`;
  document.getElementById("header-streak").textContent = stats.streak;
  document.getElementById("sidebar-language").innerHTML =
    `<small>LEARNING LANGUAGE</small><strong>${target.flag} ${target.name}</strong><small>Explained in ${native.native}</small>`;
  document.getElementById("hello-heading").textContent = `Ready to learn ${target.name}?`;
  document.getElementById("hero-subtitle").textContent = `Learn ${target.name} with ${native.native} meanings and friendly practice.`;
  document.querySelectorAll(".language-chip").forEach(chip => {
    chip.textContent = `${target.flag} Learning ${target.name}  ·  ${native.flag} Meanings in ${native.name}`;
  });
  renderDashboard();
  renderLessons();
  renderVocabulary();
  renderSpeaking();
}

function renderDashboard() {
  const stats = currentStats();
  const visibleTopics = getTopics();
  const completedTopics = visibleTopics.filter(topic => stats.lessons.includes(topic.title)).length;
  document.getElementById("stats-grid").innerHTML = [
    ["▤", `${completedTopics}/${visibleTopics.length}`, "lessons completed", "Keep exploring your learning path"],
    ["✓", `${stats.quizBest}/5`, "best quiz score", `Latest quiz: ${stats.quizLast}/5`],
    ["🔥", `${stats.streak}`, "day streak", "A little practice makes a habit"],
    ["✦", `${stats.points}`, "points earned", "Every practice earns points"]
  ].map(item => `<article class="stat-card"><span class="stat-icon">${item[0]}</span><div><span class="stat-number">${item[1]}</span><span class="stat-label">${item[2]}</span></div><p class="stat-caption">${item[3]}</p></article>`).join("");

  const day = Math.floor(Date.now() / 86400000);
  const word = phraseBook[day % phraseBook.length];
  const sentence = phraseBook[(day + 5) % phraseBook.length];
  document.getElementById("daily-practice").innerHTML = `
    <div><p class="daily-label">Word of the day</p><strong>${escapeHtml(targetText(word))}</strong><span>${escapeHtml(meaningText(word))}</span></div>
    <div class="daily-second"><p class="daily-label">Sentence of the day</p><strong>${escapeHtml(targetText(sentence))}</strong><span>${escapeHtml(meaningText(sentence))}</span></div>`;

  document.getElementById("recent-lessons").innerHTML = stats.recent.length
    ? stats.recent.slice(0, 3).map(title => `<div class="recent-item"><span class="recent-icon">✓</span><div><strong>${escapeHtml(title)}</strong><small>Lesson completed</small></div></div>`).join("")
    : `<p class="recent-empty">Your finished lessons will show here. Start with a short greeting lesson!</p>`;
  document.getElementById("badge-points").textContent = stats.points;
  const badges = [
    ["🌱", "First steps", "Complete your first lesson", stats.lessons.length >= 1],
    ["📚", "Bookworm", "Complete 5 lessons", stats.lessons.length >= 5],
    ["⭐", "Quiz star", "Score 5 out of 5", stats.quizBest === 5],
    ["🔥", "On a roll", "Practise 3 days in a row", stats.streak >= 3],
    ["💬", "Brave speaker", "Match a sentence by speaking", stats.speaking >= 1]
  ];
  document.getElementById("badge-list").innerHTML = badges.map(badge =>
    `<div class="badge ${badge[3] ? "earned" : ""}"><span class="badge-icon">${badge[0]}</span><div><strong>${badge[1]}</strong><small>${badge[2]}</small></div></div>`
  ).join("");
}

function getTopics() {
  const levelIndex = levels.indexOf(saved.level);
  const available = phraseBook.filter(phrase => levels.indexOf(phrase.level) <= levelIndex);
  const topics = [...new Set(available.map(phrase => phrase.topic))];
  return topics.map(title => ({ title, phrases: available.filter(phrase => phrase.topic === title) }));
}

function localizedGrammarTip() {
  const tips = {
    en: "A polite word such as “please” can make a request sound kind.",
    ta: "“தயவுசெய்து” போன்ற மரியாதையான சொற்களைப் பயன்படுத்துங்கள்.",
    hi: "“कृपया” जैसे विनम्र शब्द से अनुरोध अच्छा लगता है।",
    te: "“దయచేసి” వంటి మర్యాదపూర్వక పదం అభ్యర్థనను మంచిగా చేస్తుంది.",
    ml: "“ദയവായി” പോലുള്ള വാക്കുകൾ അഭ്യർത്ഥനയെ മാന്യമായതാക്കുന്നു.",
    kn: "“ದಯವಿಟ್ಟು” ಎಂಬ ಪದವು ವಿನಂತಿಯನ್ನು ಗೌರವಯುತವಾಗಿಸುತ್ತದೆ.",
    fr: "Un mot poli comme « s'il vous plaît » rend une demande aimable.",
    de: "Ein höfliches Wort wie „bitte“ macht eine Bitte freundlich.",
    ja: "「お願いします」のような丁寧な言葉で、お願いをやさしく伝えられます。",
    es: "Una palabra amable como «por favor» hace que una petición suene cordial.",
    it: "Una parola gentile come «per favore» rende cortese una richiesta.",
    ko: "“부탁합니다”와 같은 공손한 말은 부탁을 부드럽게 만들어 줘요.",
    zh: "“请”这样的礼貌用语能让请求听起来更友好。",
    ru: "Вежливое слово «пожалуйста» помогает сделать просьбу доброй.",
    pt: "Uma palavra educada como «por favor» torna um pedido mais gentil.",
    ar: "كلمة مهذبة مثل «من فضلك» تجعل الطلب لطيفًا."
  };
  return tips[saved.native] || tips.en;
}

const grammarHints = {
  greeting: {
    en: "Use a greeting when you meet someone.", ta: "ஒருவரைச் சந்திக்கும்போது வாழ்த்துச் சொல்லைப் பயன்படுத்துங்கள்.",
    hi: "किसी से मिलते समय अभिवादन करें।", te: "ఎవరినైనా కలిసినప్పుడు పలకరింపును ఉపయోగించండి.",
    ml: "ഒരാളെ കാണുമ്പോൾ അഭിവാദ്യം ഉപയോഗിക്കുക.", kn: "ಯಾರನ್ನಾದರೂ ಭೇಟಿಯಾದಾಗ ಶುಭಾಶಯ ಬಳಸಿ.",
    fr: "Utilisez une salutation quand vous rencontrez quelqu'un.", de: "Verwende eine Begrüßung, wenn du jemanden triffst.",
    ja: "人に会ったときは、あいさつを使いましょう。", es: "Usa un saludo cuando conozcas a alguien.",
    it: "Usa un saluto quando incontri qualcuno.", ko: "사람을 만날 때 인사말을 사용해요.",
    zh: "见到别人时，可以使用问候语。", ru: "Используйте приветствие при встрече.",
    pt: "Use uma saudação quando conhecer alguém.", ar: "استخدم التحية عندما تقابل شخصًا."
  },
  introduction: {
    en: "Use this sentence to tell someone your name.", ta: "இந்த வாக்கியத்தைப் பயன்படுத்தி உங்கள் பெயரைச் சொல்லுங்கள்.",
    hi: "इस वाक्य से किसी को अपना नाम बताइए।", te: "ఈ వాక్యంతో మీ పేరును చెప్పండి.",
    ml: "ഈ വാക്യം ഉപയോഗിച്ച് നിങ്ങളുടെ പേര് പറയുക.", kn: "ಈ ವಾಕ್ಯದಿಂದ ನಿಮ್ಮ ಹೆಸರನ್ನು ತಿಳಿಸಿ.",
    fr: "Utilisez cette phrase pour dire votre nom.", de: "Mit diesem Satz sagst du jemandem deinen Namen.",
    ja: "この文を使って自分の名前を伝えましょう。", es: "Usa esta frase para decir tu nombre.",
    it: "Usa questa frase per dire il tuo nome.", ko: "이 문장으로 이름을 말해 보세요.",
    zh: "用这个句子告诉别人你的名字。", ru: "С помощью этой фразы назовите своё имя.",
    pt: "Use esta frase para dizer o seu nome.", ar: "استخدم هذه الجملة لتخبر شخصًا باسمك."
  }
};

function renderLessons() {
  document.getElementById("level-switch").innerHTML = levels.map(level =>
    `<button class="level-button ${saved.level === level ? "active" : ""}" data-level="${level}" aria-pressed="${saved.level === level}">${levelLabels[level]}</button>`
  ).join("");
  const grammarExamples = [
    { icon: "👋", title: "Greetings", phrase: phraseFor("hello"), tip: grammarHints.greeting[saved.native] },
    { icon: "🙋", title: "Introductions", phrase: phraseFor("myname"), tip: grammarHints.introduction[saved.native] },
    { icon: "🌼", title: "Polite words", phrase: phraseFor("please"), tip: localizedGrammarTip() }
  ];
  document.getElementById("grammar-strip").innerHTML = grammarExamples.map(item =>
    `<article class="grammar-tip"><div class="grammar-tip-heading"><span class="grammar-icon">${item.icon}</span><strong>${item.title}</strong></div>
      <p>${escapeHtml(item.tip)}</p><span class="grammar-example">${escapeHtml(targetText(item.phrase))}</span>
      <small>${escapeHtml(meaningText(item.phrase))}</small></article>`
  ).join("");
  const stats = currentStats();
  document.getElementById("lesson-grid").innerHTML = getTopics().map(topic => {
    const done = stats.lessons.includes(topic.title);
    return `<article class="lesson-card">
      <div class="lesson-top"><span class="lesson-icon">${topic.phrases[0].icon}</span><span class="lesson-level">${saved.level}</span></div>
      <h2>${topic.title}</h2><p>${topic.phrases.length} useful phrases with explanations in ${languageById(saved.native).native}. Includes listen-and-repeat practice.</p>
      <div class="lesson-card-footer"><small>About 3 minutes</small><button class="button ${done ? "done" : "button-primary"}" data-topic="${escapeHtml(topic.title)}">${done ? "✓ Completed" : "Open lesson →"}</button></div>
    </article>`;
  }).join("");
}

function renderVocabulary() {
  const query = (document.getElementById("vocabulary-search").value || "").trim().toLocaleLowerCase();
  const stats = currentStats();
  const results = phraseBook.filter(phrase =>
    targetText(phrase).toLocaleLowerCase().includes(query) ||
    meaningText(phrase).toLocaleLowerCase().includes(query) ||
    phrase.title.toLocaleLowerCase().includes(query)
  );
  document.getElementById("vocabulary-grid").innerHTML = results.map(phrase => {
    const learned = stats.learned.includes(phrase.id);
    return `<article class="word-card">
      <div class="word-card-top"><span class="eyebrow">${phrase.topic}</span><button class="icon-button speak-text" data-phrase="${phrase.id}" aria-label="Listen to ${escapeHtml(targetText(phrase))}">▶</button></div>
      <h2>${escapeHtml(targetText(phrase))}</h2><p class="word-meaning">${escapeHtml(meaningText(phrase))}</p>
      <p class="word-example"><strong>Practice phrase:</strong> ${escapeHtml(targetText(phrase))}<br><span>${escapeHtml(phrase.title)} · ${escapeHtml(levelLabels[phrase.level].replace(/^\S+\s/, ""))}</span></p>
      <div class="word-actions"><span class="learned-label">${learned ? "✓ In your learned words" : ""}</span><button class="button ${learned ? "button-soft" : "button-outline"}" data-learn-word="${phrase.id}" ${learned ? "disabled" : ""}>${learned ? "Learned" : "+ Learned"}</button></div>
    </article>`;
  }).join("");
  document.getElementById("vocabulary-empty").classList.toggle("hidden", results.length > 0);
}

function renderSpeaking() {
  const phrase = phraseBook[speakingIndex % phraseBook.length];
  document.getElementById("speaking-phrase").textContent = targetText(phrase);
  document.getElementById("speaking-translation").textContent = meaningText(phrase);
  document.getElementById("speech-status").textContent = "Press Listen to hear the pronunciation.";
  document.getElementById("speech-result").classList.add("hidden");
  const supportsRecognition = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  document.getElementById("browser-note").textContent = supportsRecognition
    ? "Microphone access is needed for speaking practice. Speech recognition support depends on your browser and language."
    : "This browser may not support speech recognition. You can still listen and practise saying the phrase aloud.";
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Text-to-speech is not available in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageById(saved.target).locale;
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function listenToPhrase(phraseId) {
  speakText(targetText(phraseFor(phraseId)));
}

// Ask the browser to recognise speech in the selected learning language.
function startSpeechRecognition(expectedText, callback) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const status = document.getElementById("speech-status");
  if (!Recognition) {
    status.textContent = "Speech recognition is not available in this browser.";
    return;
  }
  const recognition = new Recognition();
  recognition.lang = languageById(saved.target).locale;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  status.textContent = "Listening… say the phrase clearly.";
  recognition.onresult = event => {
    const spoken = event.results[0][0].transcript;
    const matched = normalize(spoken) === normalize(expectedText);
    status.textContent = `You said: “${spoken}”`;
    callback(matched, spoken);
  };
  recognition.onerror = event => {
    status.textContent = event.error === "not-allowed"
      ? "Microphone access was blocked. Allow it in your browser settings and try again."
      : "We could not hear that clearly. Check your microphone and try again.";
  };
  recognition.onend = () => {
    if (status.textContent.startsWith("Listening")) status.textContent = "No speech detected. Press Speak and try again.";
  };
  try {
    recognition.start();
  } catch (error) {
    console.warn("Speech recognition could not start.", error);
    status.textContent = "The microphone could not start. Please try again.";
  }
}

function normalize(text) {
  return String(text).toLocaleLowerCase().normalize("NFC").replace(/[.,!?।॥،؛:]/g, "").replace(/\s+/g, " ").trim();
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function makeQuiz() {
  quizList = shuffle(phraseBook).slice(0, 5);
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  drawQuizQuestion();
}

function drawQuizQuestion() {
  const card = document.getElementById("quiz-card");
  if (quizIndex >= quizList.length) {
    const stats = currentStats();
    stats.quizLast = quizScore;
    stats.quizBest = Math.max(stats.quizBest, quizScore);
    recordActivity(quizScore * 2);
    renderDashboard();
    const message = quizScore === 5 ? "Perfect score! You are a language star!" : quizScore >= 3 ? "Lovely work! Keep practising and you’ll learn even more." : "Good effort! Every try helps your brain grow.";
    card.innerHTML = `<div class="quiz-result"><div class="quiz-result-icon">${quizScore >= 3 ? "🎉" : "🌱"}</div><h2>Quiz complete!</h2><p>You scored <strong>${quizScore} out of 5</strong>. ${message}</p><button class="button button-primary" data-quiz-restart>Try another quiz</button></div>`;
    saveData();
    return;
  }
  quizAnswered = false;
  const question = quizList[quizIndex];
  const options = [];
  for (const option of [question, ...shuffle(phraseBook.filter(item => item.id !== question.id))]) {
    if (!options.some(existing => meaningText(existing) === meaningText(option))) options.push(option);
    if (options.length === 4) break;
  }
  const shuffledOptions = shuffle(options);
  card.innerHTML = `<div class="quiz-top"><span class="eyebrow">WORD MEANING</span><span class="quiz-count">Question ${quizIndex + 1} of 5</span></div>
    <div class="quiz-progress"><span style="width:${(quizIndex / 5) * 100}%"></span></div>
    <h2 class="quiz-question">What does <strong>${escapeHtml(targetText(question))}</strong> mean?</h2>
    <div class="quiz-answers">${shuffledOptions.map(option => `<button class="quiz-option" data-answer="${option.id}">${escapeHtml(meaningText(option))}</button>`).join("")}</div>
    <button class="button button-primary quiz-next hidden" id="quiz-next">${quizIndex === 4 ? "See my score" : "Next question"} →</button>`;
}

function renderConversation() {
  conversationIndex = 0;
  drawConversationTurn();
}

const conversationTurns = [
  { prompt: { en: "A new friend says hello. What is a friendly reply?", ta: "புதிய நண்பர் வணக்கம் சொல்கிறார். நீங்கள் என்ன பதில் சொல்வீர்கள்?", hi: "नया दोस्त नमस्ते कहता है। आप क्या जवाब देंगे?", te: "కొత్త స్నేహితుడు పలకరిస్తే, మీరు ఏమని బదులిస్తారు?", ml: "പുതിയ സുഹൃത്ത് അഭിവാദ്യം ചെയ്യുന്നു. നിങ്ങൾ എന്ത് മറുപടി പറയും?", kn: "ಹೊಸ ಸ್ನೇಹಿತ ಶುಭಾಶಯ ಹೇಳಿದರೆ, ನೀವು ಏನು ಉತ್ತರಿಸುತ್ತೀರಿ?", fr: "Un nouvel ami vous salue. Que répondez-vous ?", de: "Ein neuer Freund grüßt dich. Was antwortest du?", ja: "新しい友達があいさつしました。何と返事をしますか？", es: "Un nuevo amigo te saluda. ¿Qué respondes?", it: "Un nuovo amico ti saluta. Cosa rispondi?", ko: "새 친구가 인사해요. 어떻게 대답할까요?", zh: "一位新朋友向你问好。你会怎么回答？", ru: "Новый друг здоровается. Что вы ответите?", pt: "Um novo amigo cumprimenta você. O que responde?", ar: "يلقي صديق جديد التحية. كيف ترد؟" }, answer: "hello", options: ["hello", "thanks", "school"] },
  { prompt: { en: "Your friend asks how you are. What could you say?", ta: "நண்பர் நீங்கள் எப்படி இருக்கிறீர்கள் என்று கேட்கிறார். என்ன பதில் சொல்வீர்கள்?", hi: "दोस्त पूछता है कि आप कैसे हैं। आप क्या कहेंगे?", te: "మీ స్నేహితుడు మీరు ఎలా ఉన్నారని అడిగితే, ఏమని చెబుతారు?", ml: "സുഹൃത്ത് സുഖമാണോ എന്ന് ചോദിക്കുന്നു. നിങ്ങൾ എന്ത് പറയും?", kn: "ಸ್ನೇಹಿತರು ಹೇಗಿದ್ದೀರಿ ಎಂದು ಕೇಳಿದರೆ, ಏನು ಹೇಳುತ್ತೀರಿ?", fr: "Votre ami vous demande comment vous allez. Que dites-vous ?", de: "Dein Freund fragt, wie es dir geht. Was sagst du?", ja: "友達に元気か聞かれました。何と答えますか？", es: "Tu amigo pregunta cómo estás. ¿Qué dices?", it: "Un amico ti chiede come stai. Cosa dici?", ko: "친구가 잘 지내는지 물어요. 뭐라고 말할까요?", zh: "朋友问你过得怎么样。你会怎么说？", ru: "Друг спрашивает, как у вас дела. Что вы скажете?", pt: "Um amigo pergunta como você está. O que diz?", ar: "يسألك صديق عن حالك. ماذا تقول؟" }, answer: "fine", options: ["fine", "water", "morning"] },
  { prompt: { en: "It is your turn to introduce yourself. Choose what to say.", ta: "உங்களை அறிமுகப்படுத்த வேண்டிய நேரம். நீங்கள் என்ன சொல்வீர்கள்?", hi: "अब अपना परिचय देने की बारी है। आप क्या कहेंगे?", te: "ఇప్పుడు మిమ్మల్ని మీరు పరిచయం చేసుకోండి. ఏమని చెబుతారు?", ml: "ഇനി സ്വയം പരിചയപ്പെടുത്താം. നിങ്ങൾ എന്ത് പറയും?", kn: "ಈಗ ನಿಮ್ಮನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ. ಏನು ಹೇಳುತ್ತೀರಿ?", fr: "C'est votre tour de vous présenter. Que dites-vous ?", de: "Jetzt stellst du dich vor. Was sagst du?", ja: "自己紹介をしましょう。何と言いますか？", es: "Es tu turno de presentarte. ¿Qué dices?", it: "È il tuo turno di presentarti. Cosa dici?", ko: "이제 자기소개를 해요. 뭐라고 말할까요?", zh: "轮到你做自我介绍了。你会说什么？", ru: "Теперь представьтесь. Что вы скажете?", pt: "Agora é a sua vez de se apresentar. O que diz?", ar: "حان دورك لتعرّف بنفسك. ماذا تقول؟" }, answer: "myname", options: ["myname", "please", "library"] }
];

function drawConversationTurn() {
  const card = document.getElementById("conversation-card");
  if (conversationIndex >= conversationTurns.length) {
    card.innerHTML = `<div class="quiz-result"><div class="quiz-result-icon">💬</div><h2>Conversation complete!</h2><p>You practised three friendly replies. Nice work!</p><button class="button button-primary" data-conversation-restart>Practise again</button></div>`;
    return;
  }
  const turn = conversationTurns[conversationIndex];
  card.innerHTML = `<div class="conversation-progress"><span>FRIENDLY INTRODUCTIONS</span><span>Turn ${conversationIndex + 1} of ${conversationTurns.length}</span></div>
    <h2 class="conversation-prompt">${escapeHtml(turn.prompt[saved.native] || turn.prompt.en)}</h2><p class="conversation-translation">Choose the phrase in ${languageById(saved.target).name} that fits best.</p>
    <div class="conversation-options">${turn.options.map(id => `<button class="conversation-option" data-conversation-answer="${id}">${escapeHtml(targetText(phraseFor(id)))} <span>· ${escapeHtml(meaningText(phraseFor(id)))}</span></button>`).join("")}</div>
    <p class="conversation-feedback" id="conversation-feedback" role="status" aria-live="polite"></p>
    <button class="button button-primary conversation-next hidden" id="conversation-next">Next turn →</button>`;
}

function openLesson(topic) {
  selectedLesson = topic;
  const stats = currentStats();
  const lessons = getTopics().find(item => item.title === topic);
  if (!lessons) return;
  document.getElementById("lesson-modal-kicker").textContent = `${languageById(saved.target).flag} ${languageById(saved.target).name.toUpperCase()} · ${saved.level.toUpperCase()}`;
  document.getElementById("lesson-modal-title").textContent = topic;
  document.getElementById("lesson-modal-description").textContent = `Read the phrase, check its meaning in ${languageById(saved.native).native}, then tap the speaker to listen.`;
  document.getElementById("lesson-phrases").innerHTML = lessons.phrases.map(phrase =>
    `<div class="modal-phrase"><div><strong>${escapeHtml(targetText(phrase))}</strong><span>${escapeHtml(meaningText(phrase))}</span></div><button class="icon-button speak-text" data-phrase="${phrase.id}" aria-label="Listen to phrase">▶</button></div>`
  ).join("");
  const alreadyDone = stats.lessons.includes(topic);
  document.getElementById("complete-lesson").disabled = alreadyDone;
  document.getElementById("complete-lesson").innerHTML = alreadyDone ? "✓ Lesson completed" : "Mark lesson complete <span>✦ +10 points</span>";
  document.getElementById("complete-lesson").classList.toggle("button-soft", alreadyDone);
  document.getElementById("lesson-modal").classList.remove("hidden");
}

function closeLesson() {
  document.getElementById("lesson-modal").classList.add("hidden");
  selectedLesson = null;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

document.addEventListener("click", event => {
  const button = event.target.closest("button, a[data-view]");
  if (!button) return;
  if (button.dataset.view) {
    showView(button.dataset.view);
    return;
  }
  if (button.id === "begin-learning") {
    startApp();
    return;
  }
  if (button.id === "save-settings") {
    const previousTarget = saved.target;
    saved.native = document.getElementById("settings-native").value;
    saved.target = document.getElementById("settings-target").value;
    saved.level = document.getElementById("settings-level").value;
    saveData();
    renderApp();
    showView("dashboard");
    showToast(previousTarget !== saved.target ? `Now learning ${languageById(saved.target).name}!` : "Your settings are saved!");
    return;
  }
  if (button.dataset.level) {
    saved.level = button.dataset.level;
    saveData();
    renderLessons();
    return;
  }
  if (button.dataset.topic) {
    openLesson(button.dataset.topic);
    return;
  }
  if (button.id === "close-lesson") {
    closeLesson();
    return;
  }
  if (button.id === "complete-lesson" && selectedLesson) {
    const stats = currentStats();
    if (!stats.lessons.includes(selectedLesson)) {
      stats.lessons.push(selectedLesson);
      stats.recent = [selectedLesson, ...stats.recent.filter(item => item !== selectedLesson)].slice(0, 3);
      recordActivity(10);
    }
    closeLesson();
    renderApp();
    renderLessons();
    renderDashboard();
    showToast("Lesson complete! You earned 10 points. ✦");
    return;
  }
  if (button.dataset.phrase) {
    listenToPhrase(button.dataset.phrase);
    return;
  }
  if (button.dataset.learnWord) {
    const stats = currentStats();
    if (!stats.learned.includes(button.dataset.learnWord)) {
      stats.learned.push(button.dataset.learnWord);
      recordActivity(2);
      renderVocabulary();
      renderDashboard();
      showToast("Word saved! +2 points ✦");
    }
    return;
  }
  if (button.id === "listen-button") {
    speakText(document.getElementById("speaking-phrase").textContent);
    return;
  }
  if (button.id === "speak-button") {
    const expected = document.getElementById("speaking-phrase").textContent;
    startSpeechRecognition(expected, (matched, spoken) => {
      const result = document.getElementById("speech-result");
      const stats = currentStats();
      if (matched) {
        stats.speaking++;
        recordActivity(3);
      }
      result.classList.remove("hidden", "needs-work");
      result.classList.toggle("needs-work", !matched);
      result.textContent = matched
        ? `Excellent! You said “${spoken}” just right. +3 points!`
        : `Good try! The phrase is “${expected}”. Listen once more and try again.`;
      renderDashboard();
    });
    return;
  }
  if (button.id === "next-phrase") {
    speakingIndex = (speakingIndex + 1) % phraseBook.length;
    renderSpeaking();
    return;
  }
  if (button.dataset.answer && !quizAnswered) {
    quizAnswered = true;
    const correctId = quizList[quizIndex].id;
    if (button.dataset.answer === correctId) quizScore++;
    document.querySelectorAll(".quiz-option").forEach(option => {
      option.disabled = true;
      if (option.dataset.answer === correctId) option.classList.add("correct");
      else if (option === button) option.classList.add("incorrect");
    });
    document.getElementById("quiz-next").classList.remove("hidden");
    return;
  }
  if (button.id === "quiz-next") {
    quizIndex++;
    drawQuizQuestion();
    return;
  }
  if (button.hasAttribute("data-quiz-restart")) {
    makeQuiz();
    return;
  }
  if (button.dataset.conversationAnswer) {
    const turn = conversationTurns[conversationIndex];
    const correct = button.dataset.conversationAnswer === turn.answer;
    document.querySelectorAll(".conversation-option").forEach(option => {
      option.disabled = true;
      if (option.dataset.conversationAnswer === turn.answer) option.classList.add("correct");
      else if (option === button) option.classList.add("incorrect");
    });
    document.getElementById("conversation-feedback").textContent = correct ? "Great reply! That fits the conversation. +2 points ✦" : "Good try! Notice the highlighted phrase and try it again next time.";
    if (correct) recordActivity(2);
    document.getElementById("conversation-next").classList.remove("hidden");
    return;
  }
  if (button.id === "conversation-next") {
    conversationIndex++;
    drawConversationTurn();
    return;
  }
  if (button.hasAttribute("data-conversation-restart")) {
    renderConversation();
  }
});

document.addEventListener("input", event => {
  if (event.target.id === "vocabulary-search") renderVocabulary();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.getElementById("lesson-modal").classList.contains("hidden")) closeLesson();
});

renderLanguageOptions();
if (saved.configured) {
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  renderApp();
}
