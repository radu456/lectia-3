# 🎭 Cine e Personajul Meu? - Aplicație Educațională PWA

O aplicație web progresivă (PWA) interactivă pentru copii de 8-9 ani, care îi ajută să învețe despre personaje din povești și să dezvolte abilități de analiză literară prin jocuri distractive.

## 📱 Caracteristici

### ✨ Funcționalități Principale
- **Poveste Interactivă**: Citirea unei povești captivante despre un personaj misterios
- **Quiz Adevărat/Fals**: Testarea înțelegerii poveștii prin întrebări interactive
- **Clasificarea Personajelor**: Joc educațional pentru clasificarea personajelor din desene animate
- **Jocul Comportamentului**: Identificarea acțiunilor care NU se potrivesc cu un personaj

### 🚀 Tehnologii PWA
- **Instalabilă**: Se poate instala pe telefon/tabletă ca o aplicație nativă
- **Offline**: Funcționează fără internet după prima încărcare
- **Responsive**: Se adaptează perfect pe toate dispozitivele
- **Fast Loading**: Încărcare rapidă prin cache-ing inteligent
- **Auto-save**: Progresul se salvează automat

## 🛠️ Tehnologii Utilizate

- **HTML5** - Structura aplicației
- **CSS3** - Stilizare modernă și responsive design
- **JavaScript ES6+** - Logica aplicației și interactivitate
- **PWA** - Service Worker și Web App Manifest
- **Local Storage** - Salvarea progresului local

## 📁 Structura Proiectului

```
pwa-personajul-meu/
├── icons/                    # Iconițe PWA (72x72 până la 512x512)
├── images/                   # Screenshot-uri pentru PWA
├── index.html               # Pagina principală
├── style.css                # Stiluri CSS
├── script.js                # Logica JavaScript
├── manifest.json            # PWA manifest
├── sw.js                    # Service Worker
├── README.md                # Documentația proiectului
├── LICENSE                  # Licența MIT
└── .gitignore               # Fișiere ignorate de Git
```

## 🚀 Instalare și Rulare

### Cerințe Preliminare
- Un server web local (poate fi simplu HTTP server)
- Browser modern cu suport PWA

### Pași de Instalare

1. **Clonează repository-ul**
```bash
git clone https://github.com/[username]/pwa-personajul-meu.git
cd pwa-personajul-meu
```

2. **Pornește un server local**

**Opțiunea 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Opțiunea 2: Node.js**
```bash
npx http-server -p 8000
```

**Opțiunea 3: PHP**
```bash
php -S localhost:8000
```

3. **Deschide aplicația**
Navighează la `http://localhost:8000` în browser

## 📚 Cum să Folosești Aplicația

### 1. Pagina Principală
- Alege una din cele trei activități disponibile
- Fiecare activitate are propriul său design colorat și atractiv

### 2. Povestea Interactivă
- Citește povestea lui Matei despre personajul misterios
- Urmărește detaliile importante pentru quiz

### 3. Quiz Adevărat/Fals
- Răspunde la 7 întrebări despre poveste
- Primești feedback imediat pentru fiecare răspuns
- Scorul se actualizează în timp real

### 4. Clasificarea Personajelor
- Clasifică 12 personaje din desene animate
- Alege între: EROU, ANTI-EROU, PERSONAJ SECUNDAR
- Completează jocul "Ce NU ar face personajul?"

## 📱 Instalare ca PWA

### Pe Android:
1. Deschide aplicația în Chrome
2. Apasă pe meniul cu trei puncte
3. Selectează "Add to Home screen"
4. Confirmă instalarea

### Pe iOS:
1. Deschide aplicația în Safari
2. Apasă pe butonul Share
3. Selectează "Add to Home Screen"
4. Confirmă instalarea

### Pe Desktop:
1. Deschide aplicația în Chrome/Edge
2. Caută iconița de instalare în bara de adrese
3. Apasă pe "Install" sau "Add to Desktop"

## 🎯 Obiective Educaționale

Aplicația este dezvoltată conform **Modulului II: Construim Personaje cu Personalitate**, Lecția 1, pentru copii de 8-9 ani și urmărește:

- **Dezvoltarea înțelegerii textului**: Prin citirea activă și răspunsul la întrebări
- **Analiza personajelor**: Clasificarea și înțelegerea tipurilor de personaje
- **Gândirea critică**: Identificarea comportamentelor caracteristice
- **Interactivitatea**: Învățarea prin joc și feedback imediat

## 🚀 Deployment

### GitHub Pages
1. Fă push la repository-ul tău GitHub
2. Activează GitHub Pages în Settings
3. Alege branch-ul `main` și folderul root `/`
4. Aplicația va fi disponibilă la `https://[username].github.io/pwa-personajul-meu`

### Netlify
1. Conectează repository-ul GitHub la Netlify
2. Nu sunt necesare comenzi de build (aplicație statică)
3. Deploy automat la fiecare commit

### Vercel
1. Importă proiectul în Vercel
2. Configurarea se face automat pentru aplicații statice
3. Deploy instant cu preview pentru fiecare PR

## 🔧 Funcționalități Avansate

### Service Worker
- Cache-ing inteligent pentru funcționare offline
- Actualizări automate în background
- Suport pentru notificări push (viitor)

### Local Storage
- Salvarea automată a progresului
- Restaurarea stării la reîncărcare
- Sincronizare între sesiuni

### Responsive Design
- Optimizat pentru toate dimensiunile de ecran
- Touch-friendly pentru dispozitive mobile
- Animații fluide și micro-interacțiuni

## 🤝 Contribuții

Contribuțiile sunt binevenite! Pentru a contribui:

1. Fork repository-ul
2. Creează o branch nouă (`git checkout -b feature/amazing-feature`)
3. Commit schimbările (`git commit -m 'Add amazing feature'`)
4. Push la branch (`git push origin feature/amazing-feature`)
5. Deschide un Pull Request

## 📄 Licență

Acest proiect este licențiat sub MIT License - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## 👨‍💻 Autor

Dezvoltat cu ❤️ pentru educația copiilor

## 🐛 Raportare Bug-uri

Dacă găsești bug-uri sau ai sugestii de îmbunătățire, te rog să deschizi un [Issue](https://github.com/[username]/pwa-personajul-meu/issues) pe GitHub.

## 📞 Contact

Pentru întrebări sau suport, poți să:
- Deschizi un Issue pe GitHub
- Trimiți un email la [email@example.com]

## 🎓 Resurse Educaționale

Aplicația se bazează pe principii pedagogice moderne:
- Învățarea prin joc
- Feedback imediat
- Progresie graduală
- Interactivitate maximă

---

**Mulțumim că folosești aplicația noastră educațională! 🎓✨**

