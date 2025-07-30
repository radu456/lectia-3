// Application State
const appState = {
    currentSection: 'home',
    quizAnswers: {},
    characterAnswers: {},
    behaviorAnswers: {},
    scores: {
        quiz: 0,
        characters: 0,
        behavior: 0
    }
};

// Quiz Questions Data
const quizQuestions = [
    { id: 1, question: "Personajul încape într-un borcan.", answer: true },
    { id: 2, question: "Poartă pantaloni colorați și bocanci mari.", answer: false },
    { id: 3, question: "Când e trist, dansează pe muzică rock.", answer: false },
    { id: 4, question: "Are un păianjen ca animal de companie.", answer: true },
    { id: 5, question: "Personajul a reușit să zboare până la tavan.", answer: false },
    { id: 6, question: "A căzut într-un coș cu rufe murdare.", answer: true },
    { id: 7, question: "Se consideră învins după fiecare greșeală.", answer: false }
];

// Characters Data
const characters = [
    { id: 1, name: "Spiderman", description: "Salvează oamenii, luptă cu răufăcătorii și are simțul responsabilității.", type: "EROU" },
    { id: 2, name: "Tom (din Tom & Jerry)", description: "Se supără ușor, e încăpățânat și adesea provoacă haos, dar nu e chiar un răufăcător.", type: "ANTI-EROU" },
    { id: 3, name: "Dory (din Finding Nemo)", description: "Nu e personajul principal, dar îl ajută pe Marlin și face glume amuzante.", type: "PERSONAJ SECUNDAR" },
    { id: 4, name: "Gru (din Sunt un mic ticălos)", description: "A fost răufăcător, dar devine tată grijuliu și face fapte bune în stilul lui morocănos.", type: "ANTI-EROU" },
    { id: 5, name: "Elsa (din Frozen)", description: "Puternică, are o inimă bună și luptă cu fricile pentru a-și salva familia.", type: "EROU" },
    { id: 6, name: "Pascal (din Tangled)", description: "Nu vorbește, dar o susține pe Rapunzel și oferă momente comice.", type: "PERSONAJ SECUNDAR" },
    { id: 7, name: "Shrek", description: "E morocănos, vrea să fie lăsat în pace, dar ajută și salvează lumea în felul său.", type: "ANTI-EROU" },
    { id: 8, name: "Batman", description: "Inteligent, curajos, salvează orașul Gotham și luptă împotriva răului.", type: "EROU" },
    { id: 9, name: "SpongeBob", description: "E vesel, optimist, sare mereu în ajutor și muncește cu plăcere la Krusty Krab.", type: "EROU" },
    { id: 10, name: "Garfield", description: "E leneș, sarcastic, iubește lasagna și face mai nimic… dar rămâne simpatic.", type: "ANTI-EROU" },
    { id: 11, name: "Olaf (din Frozen)", description: "Un om de zăpadă haios, mereu pozitiv, care ajută fără să fie eroul principal.", type: "PERSONAJ SECUNDAR" },
    { id: 12, name: "Scooby-Doo", description: "Fricos, dar mereu ajunge să rezolve misterele alături de prieteni.", type: "EROU" }
];

// Behavior Questions Data
const behaviorQuestions = [
    { 
        id: 1, 
        character: "Elsa (Frozen)", 
        description: "Este curajoasă, iubitoare și are grijă de sora ei.",
        question: "Ce NU ar face acest personaj?",
        options: ["Își protejează sora Anna.", "Se ascunde când îi este teamă.", "Se joacă cu focul în pădure."],
        wrong: 2
    },
    { 
        id: 2, 
        character: "Shrek", 
        description: "E morocănos, dar are o inimă bună.",
        question: "Ce NU ar face acest personaj?",
        options: ["Salvează o prințesă.", "Refuză să fie tratat ca un erou.", "Îi face complimente lui Lord Farquaad."],
        wrong: 2
    },
    { 
        id: 3, 
        character: "Garfield", 
        description: "Este leneș, sarcastic și adoră lasagna.",
        question: "Ce NU ar face acest personaj?",
        options: ["Doarme toată ziua.", "Mănâncă mult.", "Aleargă prin pădure după șoareci."],
        wrong: 2
    },
    { 
        id: 4, 
        character: "Dory (Finding Nemo)", 
        description: "E uitucă, prietenoasă și curajoasă.",
        question: "Ce NU ar face acest personaj?",
        options: ["Ajută peșteșorii să se regăsească.", "Uită tot ce i se spune.", "Conduce o navă spațială."],
        wrong: 2
    }
];

// PWA Installation
let deferredPrompt;

// DOM Elements
const loadingScreen = document.getElementById('loading');
const app = document.getElementById('app');
const installPrompt = document.getElementById('install-prompt');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            app.classList.remove('hidden');
            initializeApp();
        }, 500);
    }, 2000);
});

// Initialize Application
function initializeApp() {
    setupEventListeners();
    renderQuiz();
    renderCharacters();
    renderBehaviorQuestions();
    setupPWA();
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('[data-section]').forEach(element => {
        element.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            navigateToSection(section);
        });
    });

    document.querySelectorAll('[data-target]').forEach(element => {
        element.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            navigateToSection(target);
        });
    });

    // Card buttons
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('[data-section]');
            if (card) {
                navigateToSection(card.dataset.section);
            }
        });
    });
}

// Navigation
function navigateToSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        appState.currentSection = sectionName;
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Add entrance animation
        targetSection.style.animation = 'fadeInUp 0.5s ease';
    }
}

// Quiz Functions
function renderQuiz() {
    const container = document.getElementById('quiz-questions');
    container.innerHTML = '';

    quizQuestions.forEach(question => {
        const questionElement = createQuizQuestion(question);
        container.appendChild(questionElement);
    });
}

function createQuizQuestion(question) {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `
        <h4>${question.id}. ${question.question}</h4>
        <div class="quiz-options">
            <button class="quiz-option" data-question="${question.id}" data-answer="true">
                ✅ Adevărat
            </button>
            <button class="quiz-option" data-question="${question.id}" data-answer="false">
                ❌ Fals
            </button>
        </div>
        <div class="quiz-feedback" id="feedback-${question.id}"></div>
    `;

    // Add event listeners
    div.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', (e) => {
            handleQuizAnswer(question.id, e.target.dataset.answer === 'true', question.answer);
        });
    });

    return div;
}

function handleQuizAnswer(questionId, userAnswer, correctAnswer) {
    appState.quizAnswers[questionId] = userAnswer;
    
    // Update UI
    const questionElement = document.querySelector(`[data-question="${questionId}"]`).closest('.quiz-question');
    questionElement.classList.add('answered');
    
    // Clear previous selections
    questionElement.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark selected option
    const selectedOption = questionElement.querySelector(`[data-answer="${userAnswer}"]`);
    selectedOption.classList.add('selected');
    
    // Show feedback
    const feedback = document.getElementById(`feedback-${questionId}`);
    const isCorrect = userAnswer === correctAnswer;
    
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '✅ Corect!' : '❌ Greșit!';
    
    // Update score
    updateQuizScore();
}

function updateQuizScore() {
    let correct = 0;
    quizQuestions.forEach(q => {
        if (appState.quizAnswers[q.id] === q.answer) {
            correct++;
        }
    });
    
    appState.scores.quiz = correct;
    document.getElementById('quiz-score').textContent = correct;
}

// Characters Functions
function renderCharacters() {
    const container = document.getElementById('character-grid');
    container.innerHTML = '';

    characters.forEach(character => {
        const characterElement = createCharacterCard(character);
        container.appendChild(characterElement);
    });
}

function createCharacterCard(character) {
    const div = document.createElement('div');
    div.className = 'character-card';
    div.innerHTML = `
        <h4>${character.name}</h4>
        <p>${character.description}</p>
        <div class="character-options">
            <button class="character-option" data-character="${character.id}" data-type="EROU">EROU</button>
            <button class="character-option" data-character="${character.id}" data-type="ANTI-EROU">ANTI-EROU</button>
            <button class="character-option" data-character="${character.id}" data-type="PERSONAJ SECUNDAR">PERSONAJ SECUNDAR</button>
        </div>
        <div class="character-feedback" id="char-feedback-${character.id}"></div>
    `;

    // Add event listeners
    div.querySelectorAll('.character-option').forEach(option => {
        option.addEventListener('click', (e) => {
            handleCharacterAnswer(character.id, e.target.dataset.type, character.type);
        });
    });

    return div;
}

function handleCharacterAnswer(characterId, userAnswer, correctAnswer) {
    appState.characterAnswers[characterId] = userAnswer;
    
    // Update UI
    const characterElement = document.querySelector(`[data-character="${characterId}"]`).closest('.character-card');
    characterElement.classList.add('answered');
    
    // Clear previous selections
    characterElement.querySelectorAll('.character-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark selected option
    const selectedOption = characterElement.querySelector(`[data-type="${userAnswer}"]`);
    selectedOption.classList.add('selected');
    
    // Show feedback
    let feedback = document.getElementById(`char-feedback-${characterId}`);
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = `char-feedback-${characterId}`;
        feedback.className = 'quiz-feedback';
        characterElement.appendChild(feedback);
    }
    
    const isCorrect = userAnswer === correctAnswer;
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '✅ Corect!' : '❌ Greșit!';
    
    // Update score
    updateCharacterScore();
}

function updateCharacterScore() {
    let correct = 0;
    characters.forEach(c => {
        if (appState.characterAnswers[c.id] === c.type) {
            correct++;
        }
    });
    
    appState.scores.characters = correct;
    document.getElementById('character-score').textContent = correct;
}

// Behavior Questions Functions
function renderBehaviorQuestions() {
    const container = document.getElementById('behavior-questions');
    container.innerHTML = '';

    behaviorQuestions.forEach(question => {
        const questionElement = createBehaviorQuestion(question);
        container.appendChild(questionElement);
    });
}

function createBehaviorQuestion(question) {
    const div = document.createElement('div');
    div.className = 'behavior-question';
    div.innerHTML = `
        <h4>${question.character}</h4>
        <p class="character-desc">${question.description}</p>
        <p class="question-text">${question.question}</p>
        <div class="behavior-options">
            ${question.options.map((option, index) => `
                <button class="behavior-option" data-behavior="${question.id}" data-option="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </button>
            `).join('')}
        </div>
        <div class="behavior-feedback" id="behavior-feedback-${question.id}"></div>
    `;

    // Add event listeners
    div.querySelectorAll('.behavior-option').forEach(option => {
        option.addEventListener('click', (e) => {
            handleBehaviorAnswer(question.id, parseInt(e.target.dataset.option), question.wrong);
        });
    });

    return div;
}

function handleBehaviorAnswer(questionId, userAnswer, correctAnswer) {
    appState.behaviorAnswers[questionId] = userAnswer;
    
    // Update UI
    const questionElement = document.querySelector(`[data-behavior="${questionId}"]`).closest('.behavior-question');
    
    // Clear previous selections
    questionElement.querySelectorAll('.behavior-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark selected option
    const selectedOption = questionElement.querySelector(`[data-option="${userAnswer}"]`);
    selectedOption.classList.add('selected');
    
    // Show feedback
    let feedback = document.getElementById(`behavior-feedback-${questionId}`);
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = `behavior-feedback-${questionId}`;
        feedback.className = 'quiz-feedback';
        questionElement.appendChild(feedback);
    }
    
    const isCorrect = userAnswer === correctAnswer;
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '✅ Corect!' : '❌ Greșit!';
    
    // Update score
    updateBehaviorScore();
}

function updateBehaviorScore() {
    let correct = 0;
    behaviorQuestions.forEach(q => {
        if (appState.behaviorAnswers[q.id] === q.wrong) {
            correct++;
        }
    });
    
    appState.scores.behavior = correct;
    document.getElementById('behavior-score').textContent = correct;
}

// PWA Functions
function setupPWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    }

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });

    // Setup install prompt buttons
    document.getElementById('install-yes').addEventListener('click', installApp);
    document.getElementById('install-no').addEventListener('click', hideInstallPrompt);
}

function showInstallPrompt() {
    setTimeout(() => {
        installPrompt.classList.remove('hidden');
    }, 5000); // Show after 5 seconds
}

function hideInstallPrompt() {
    installPrompt.classList.add('hidden');
}

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
            hideInstallPrompt();
        });
    }
}

// Utility Functions
function saveProgress() {
    const progress = {
        quizAnswers: appState.quizAnswers,
        characterAnswers: appState.characterAnswers,
        behaviorAnswers: appState.behaviorAnswers,
        scores: appState.scores
    };
    localStorage.setItem('personajul-meu-progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('personajul-meu-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        appState.quizAnswers = progress.quizAnswers || {};
        appState.characterAnswers = progress.characterAnswers || {};
        appState.behaviorAnswers = progress.behaviorAnswers || {};
        appState.scores = progress.scores || { quiz: 0, characters: 0, behavior: 0 };
        
        // Update UI with saved progress
        updateQuizScore();
        updateCharacterScore();
        updateBehaviorScore();
    }
}

// Auto-save progress
setInterval(saveProgress, 10000); // Save every 10 seconds

// Load progress on start
window.addEventListener('load', loadProgress);

// Handle visibility change (when app goes to background)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveProgress();
    }
});

// Add some fun interactions
function addSparkleEffect(element) {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.top = '50%';
    sparkle.style.left = '50%';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'gold';
    sparkle.style.borderRadius = '50%';
    sparkle.style.transform = 'translate(-50%, -50%) scale(0)';
    sparkle.style.animation = 'sparkle 0.6s ease-out';
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1) rotate(180deg); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add sparkle effect to correct answers
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quiz-option') || 
        e.target.classList.contains('character-option') || 
        e.target.classList.contains('behavior-option')) {
        setTimeout(() => {
            const feedback = e.target.closest('.quiz-question, .character-card, .behavior-question')
                .querySelector('.quiz-feedback, .character-feedback, .behavior-feedback');
            if (feedback && feedback.classList.contains('correct')) {
                addSparkleEffect(e.target);
            }
        }, 100);
    }
});

console.log('🎭 Aplicația "Cine e Personajul Meu?" s-a încărcat cu succes!');

