// DOM Elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const userNameElement = document.getElementById('userName');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const locationElement = document.getElementById('location');
const weatherIconElement = document.getElementById('weatherIcon');
const verseTextElement = document.getElementById('verseText');
const verseTranslationElement = document.getElementById('verseTranslation');
const verseReferenceElement = document.getElementById('verseReference');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const linksContainer = document.getElementById('linksContainer');
const editLinksBtn = document.getElementById('editLinksBtn');
const editLinksForm = document.getElementById('editLinksForm');
const linksTextarea = document.getElementById('linksTextarea');
const saveLinksBtn = document.getElementById('saveLinksBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');

// New elements
const themeBtn = document.getElementById('themeBtn');
const themeOptions = document.getElementById('themeOptions');
const appsButton = document.getElementById('appsButton');
const appsGrid = document.getElementById('appsGrid');
const infoButton = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
const closeInfo = document.getElementById('closeInfo');
const linksModal = document.getElementById('linksModal');
const closeLinks = document.getElementById('closeLinks');
const linksForm = document.getElementById('linksForm');
const linkNameInput = document.getElementById('linkName');
const linkUrlInput = document.getElementById('linkUrl');
const linkIconInput = document.getElementById('linkIcon');
const linksList = document.getElementById('linksList');
const cancelLinksBtn = document.getElementById('cancelLinksBtn');
const greetingText = document.getElementById('greetingText');

// Configuration
const WEATHER_API_KEY = 'd4c62d88c0d5f9e25e1344ddd0ed9e7e';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Enhanced fallback Quranic verses with translations
const fallbackVerses = [
    {
        text: "نَصْرٌ مِّنَ اللَّهِ وَفَتْحٌ قَرِيبٌ",
        translation: "Victory from Allah and an imminent conquest.",
        reference: "Quran 61:13"
    },
    {
        text: "رَبِّ زِدْنِي عِلْمًا",
        translation: "My Lord, increase me in knowledge.",
        reference: "Quran 20:114"
    },
    {
        text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        translation: "Indeed, Allah is with those who are patient.",
        reference: "Quran 2:153"
    },
    {
        text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translation: "Verily, with hardship comes ease.",
        reference: "Quran 94:5"
    },
    {
        text: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
        translation: "And We have certainly created man in the best of stature.",
        reference: "Quran 95:4"
    },
    {
        text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        translation: "Indeed, Allah does not burden a soul beyond that it can bear.",
        reference: "Quran 2:286"
    },
    {
        text: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        translation: "And whoever puts his trust in Allah, then He will suffice him.",
        reference: "Quran 65:3"
    },
    {
        text: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
        translation: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
        reference: "Quran 13:11"
    },
    {
        text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
        translation: "And my success is not but through Allah.",
        reference: "Quran 11:88"
    },
    {
        text: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
        translation: "Indeed, Allah orders justice and good conduct.",
        reference: "Quran 16:90"
    },
    {
        text: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
        translation: "And never give up hope of Allah's mercy.",
        reference: "Quran 12:87"
    },
    {
        text: "إِنَّ اللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ",
        translation: "Indeed, Allah does not wrong [anyone] even [as much as] an atom's weight.",
        reference: "Quran 4:40"
    },
    {
        text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        translation: "And whoever fears Allah, He will make for him a way out.",
        reference: "Quran 65:2"
    },
    {
        text: "إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translation: "Indeed, Allah is over all things competent.",
        reference: "Quran 2:20"
    },
    {
        text: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
        translation: "Indeed, Allah commands you to render trusts to whom they are due.",
        reference: "Quran 4:58"
    },
    {
        text: "وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا",
        translation: "And say, 'Praise to Allah, who has not taken a son.'",
        reference: "Quran 17:111"
    },
    {
        text: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
        translation: "And remind, for indeed, the reminder benefits the believers.",
        reference: "Quran 51:55"
    },
    {
        text: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ",
        translation: "Indeed, good deeds remove evil deeds.",
        reference: "Quran 11:114"
    },
    {
        text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
        translation: "And when My servants ask you about Me, indeed I am near.",
        reference: "Quran 2:186"
    },
    {
        text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translation: "Say, 'He is Allah, [who is] One.'",
        reference: "Quran 112:1"
    },
    {
        text: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ",
        translation: "So be patient. Indeed, the promise of Allah is truth.",
        reference: "Quran 30:60"
    },
    {
        text: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ",
        translation: "And who is better in speech than one who invites to Allah.",
        reference: "Quran 41:33"
    },
    {
        text: "إِنَّ رَبِّي رَحِيمٌ وَدُودٌ",
        translation: "Indeed, my Lord is Merciful and Affectionate.",
        reference: "Quran 11:90"
    },
    {
        text: "وَاتَّقُوا اللَّهَ وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ",
        translation: "And fear Allah and know that Allah is with those who fear Him.",
        reference: "Quran 2:194"
    },
    {
        text: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ",
        translation: "Indeed, my Lord is the Hearer of supplication.",
        reference: "Quran 14:39"
    },
    {
        text: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ",
        translation: "And I did not create the jinn and mankind except to worship Me.",
        reference: "Quran 51:56"
    },
    {
        text: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
        translation: "The believers are but brothers.",
        reference: "Quran 49:10"
    },
    {
        text: "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا",
        translation: "And whoever does righteous deeds while being a believer - he will neither fear injustice nor deprivation.",
        reference: "Quran 20:112"
    },
    {
        text: "وَمَنْ أَصْدَقُ مِنَ اللَّهِ حَدِيثًا",
        translation: "And who is more truthful than Allah in statement.",
        reference: "Quran 4:87"
    },
    {
        text: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
        translation: "Indeed, it is Allah who is the [continual] Provider, the firm possessor of strength.",
        reference: "Quran 51:58"
    },
    {
        text: "وَاللَّهُ يَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ",
        translation: "And Allah knows what you conceal and what you declare.",
        reference: "Quran 16:19"
    },
    {
        text: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
        translation: "So whoever does an atom's weight of good will see it.",
        reference: "Quran 99:7"
    },
    {
        text: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        translation: "And whoever does an atom's weight of evil will see it.",
        reference: "Quran 99:8"
    },
    {
        text: "وَاللَّهُ يَقْضِي بِالْحَقِّ",
        translation: "And Allah judges with truth.",
        reference: "Quran 40:20"
    },
    {
        text: "إِنَّ رَبَّكَ لَبِالْمِرْصَادِ",
        translation: "Indeed, your Lord is in observation.",
        reference: "Quran 89:14"
    },
    {
        text: "وَمَا كَانَ رَبُّكَ نَسِيًّا",
        translation: "And your Lord is not forgetful.",
        reference: "Quran 19:64"
    },
    {
        text: "وَمَن يَعْشُ عَن ذِكْرِ الرَّحْمَٰنِ نُقَيِّضْ لَهُ شَيْطَانًا",
        translation: "And whoever is blinded from remembrance of the Most Merciful - We appoint for him a devil.",
        reference: "Quran 43:36"
    },
    {
        text: "وَمَا أَدْرَاكَ مَا الْعَقَبَةُ",
        translation: "And what can make you know what is the difficult pass?",
        reference: "Quran 90:12"
    },
    {
        text: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ",
        translation: "Indeed, Allah loves those who are constantly repentant.",
        reference: "Quran 2:222"
    },
    {
        text: "وَاللَّهُ يُحِبُّ الصَّابِرِينَ",
        translation: "And Allah loves the steadfast.",
        reference: "Quran 3:146"
    },
    {
        text: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
        translation: "Indeed, Allah loves the doers of good.",
        reference: "Quran 2:195"
    },
    {
        text: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
        translation: "Indeed, Allah forgives all sins.",
        reference: "Quran 39:53"
    },
    {
        text: "وَمَن يَغْفِرُ الذُّنُوبَ إِلَّا اللَّهُ",
        translation: "And who forgives sins except Allah?",
        reference: "Quran 3:135"
    },
    {
        text: "وَاللَّهُ غَفُورٌ رَّحِيمٌ",
        translation: "And Allah is Forgiving and Merciful.",
        reference: "Quran 2:218"
    },
    {
        text: "وَمَن يَقْنَطُ مِن رَّحْمَةِ رَبِّهِ إِلَّا الضَّالُّونَ",
        translation: "And who despairs of the mercy of his Lord except for those astray?",
        reference: "Quran 15:56"
    },
    {
        text: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
        translation: "Indeed, my Lord is near and responsive.",
        reference: "Quran 11:61"
    },
    {
        text: "وَاللَّهُ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        translation: "And Allah guides whom He wills to a straight path.",
        reference: "Quran 2:213"
    },
    {
        text: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا",
        translation: "Indeed, those who have believed and done righteous deeds - the Most Merciful will appoint for them affection.",
        reference: "Quran 19:96"
    },
    {
        text: "وَمَن يُسْلِمْ وَجْهَهُ إِلَى اللَّهِ وَهُوَ مُحْسِنٌ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ",
        translation: "And whoever submits his face to Allah while he is a doer of good - then he has grasped the most trustworthy handhold.",
        reference: "Quran 31:22"
    },
    {
        text: "وَاللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
        translation: "And Allah is Knowing of what is within the breasts.",
        reference: "Quran 3:119"
    },
    {
        text: "إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ",
        translation: "Indeed, Allah does not guide one who is a liar and [confirmed] disbeliever.",
        reference: "Quran 39:3"
    }
];
// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadUserName();
    loadLinks();
    loadTheme();
    updateTime();
    setInterval(updateTime, 1000);
    getWeatherData();
    getQuranicVerse();
    setupEventListeners();
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            getQuranicVerse();
        }
    });
}

// Time and Date Functions (unchanged)
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    timeElement.textContent = timeString;
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dateElement.textContent = dateString;
}

// User Name Functions
function loadUserName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        userNameElement.textContent = savedName;
        greetingText.textContent = `Assalamualaikum! ${savedName}`;
    } else {
        greetingText.textContent = 'Assalamualaikum!';
    }
}

function saveUserName() {
    const name = userNameElement.textContent.trim();
    if (name) {
        localStorage.setItem('userName', name);
        greetingText.textContent = `Assalamualaikum! ${name}`;
    }
}

// Theme Functions
function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'blue';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('selectedTheme', theme);
    updateInfoModalTheme(theme);
    updateLinksModalTheme(theme);
}

function updateInfoModalTheme(theme) {
    const infoContent = document.querySelector('.info-content');
    if (infoContent) {
        infoContent.classList.remove('theme-blue', 'theme-green', 'theme-orange', 'theme-purple', 'theme-red', 'theme-dark', 'theme-grey', 'theme-black', 'theme-midnight', 'theme-forest');
        infoContent.classList.add(`theme-${theme}`);
    }
}

function updateLinksModalTheme(theme) {
    const linksContent = document.querySelector('.links-content');
    if (linksContent) {
        linksContent.classList.remove('theme-blue', 'theme-green', 'theme-orange', 'theme-purple', 'theme-red', 'theme-dark', 'theme-grey', 'theme-black', 'theme-midnight', 'theme-forest');
        linksContent.classList.add(`theme-${theme}`);
    }
}

// Weather Functions (unchanged)
async function getWeatherData() {
    try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const weatherData = await fetchWeatherData(latitude, longitude);
        updateWeatherUI(weatherData);
    } catch (error) {
        console.error('Error getting weather data:', error);
        updateWeatherUI(null);
    }
}

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported'));
            return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
            enableHighAccuracy: false
        });
    });
}

async function fetchWeatherData(lat, lon) {
    const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather API request failed');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

function updateWeatherUI(weatherData) {
    if (!weatherData) {
        temperatureElement.textContent = '--°C';
        humidityElement.textContent = 'Humidity: --%';
        locationElement.textContent = 'Location unavailable';
        weatherIconElement.textContent = '🌤️';
        return;
    }
    const temp = Math.round(weatherData.main.temp);
    const humidity = weatherData.main.humidity;
    const location = weatherData.name;
    const weatherMain = weatherData.weather[0].main.toLowerCase();
    temperatureElement.textContent = `${temp}°C`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    locationElement.textContent = location;
    const weatherIcons = {
        clear: '☀️',
        clouds: '☁️',
        rain: '🌧️',
        snow: '❄️',
        thunderstorm: '⛈️',
        drizzle: '🌦️',
        mist: '🌫️',
        fog: '🌫️'
    };
    weatherIconElement.textContent = weatherIcons[weatherMain] || '🌤️';
}

// Quranic Verse Functions (unchanged)
async function getQuranicVerse() {
    try {
        const verseData = await fetchRandomQuranicVerse();
        if (verseData) {
            updateVerseUI(verseData);
        } else {
            const randomVerse = getRandomFallbackVerse();
            updateVerseUI(randomVerse);
        }
    } catch (error) {
        console.error('Error fetching Quranic verse:', error);
        const randomVerse = getRandomFallbackVerse();
        updateVerseUI(randomVerse);
    }
}

function getRandomFallbackVerse() {
    const timestamp = Date.now();
    const randomFactor = Math.random();
    const combinedSeed = timestamp * randomFactor;
    const index = Math.floor(combinedSeed % fallbackVerses.length);
    return fallbackVerses[index];
}

async function fetchRandomQuranicVerse() {
    try {
        const randomSurah = Math.floor(Math.random() * 114) + 1;
        const randomAyah = Math.floor(Math.random() * 286) + 1;
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}`);
        if (!response.ok) {
            throw new Error('Quran API request failed');
        }
        const data = await response.json();
        const verse = data.data;
        let translation = "Translation unavailable";
        try {
            const translationResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${verse.surah.number}:${verse.numberInSurah}/en.sahih`);
            if (translationResponse.ok) {
                translation = translationData.data.text;
            }
        } catch (error) {
            console.error('Error fetching translation:', error);
        }
        return {
            text: verse.text,
            translation: translation,
            reference: `Quran ${verse.surah.number}:${verse.numberInSurah}`
        };
    } catch (error) {
        console.error('Error fetching random Quranic verse:', error);
        return null;
    }
}

function updateVerseUI(verseData) {
    verseTextElement.textContent = verseData.text;
    verseTranslationElement.textContent = verseData.translation;
    verseReferenceElement.textContent = verseData.reference;
}

// Search Functions (unchanged)
function setupSearchForm() {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
            searchInput.value = '';
        }
    });
}

// Links Functions
function loadLinks() {
    const savedLinks = localStorage.getItem('customLinks');
    if (savedLinks) {
        const links = JSON.parse(savedLinks);
        displayLinks(links);
    } else {
        const defaultLinks = [
            { name: 'YT', url: 'https://www.youtube.com', icon: 'https://www.google.com/s2/favicons?domain=www.youtube.com&sz=32' },
            { name: 'G', url: 'https://www.google.com', icon: 'https://www.google.com/s2/favicons?domain=www.google.com&sz=32' },
            { name: 'SP', url: ' https://open.spotify.com', icon: 'https://www.google.com/s2/favicons?domain=open.spotify.com&sz=32' },
            { name: 'CG', url: ' https://www.chatgpt.com', icon: 'https://www.google.com/s2/favicons?domain=www.chatgpt.com&sz=32' },
            { name: 'GR', url: ' https://www.grok.com', icon: 'https://www.google.com/s2/favicons?domain=www.grok.com&sz=32' }
        ];
        displayLinks(defaultLinks);
        saveLinks(defaultLinks);
    }
}

async function displayLinks(links) {
    linksContainer.innerHTML = '';
    for (const link of links) {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.className = 'link-item';
        if (link.icon) {
            const img = document.createElement('img');
            img.src = link.icon;
            img.alt = link.name;
            img.className = 'link-icon';
            linkElement.appendChild(img);
        } else {
            linkElement.textContent = link.name;
        }
        linkElement.title = link.url;
        linksContainer.appendChild(linkElement);
    }
    updateLinksList();
}

function saveLinks(links) {
    localStorage.setItem('customLinks', JSON.stringify(links));
}

async function fetchFavicon(url) {
    try {
        const domain = new URL(url).hostname;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        return faviconUrl;
    } catch (error) {
        console.error('Error generating favicon URL:', error);
        return '';
    }
}

function updateLinksList() {
    const savedLinks = JSON.parse(localStorage.getItem('customLinks') || '[]');
    linksList.innerHTML = '';
    savedLinks.forEach((link, index) => {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-list-item';
        linkItem.innerHTML = `
            <span>${link.name} | ${link.url} | ${link.icon || 'No icon'}</span>
            <button class="delete-link-btn" data-index="${index}">Delete</button>
        `;
        linksList.appendChild(linkItem);
    });
    // Add delete button event listeners
    document.querySelectorAll('.delete-link-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const links = JSON.parse(localStorage.getItem('customLinks') || '[]');
            links.splice(index, 1);
            saveLinks(links);
            displayLinks(links);
        });
    });
}

// Links Modal Functions
function setupLinksModal() {
    editLinksBtn.addEventListener('click', function() {
        linksModal.classList.add('show');
        updateLinksList();
    });
    
    closeLinks.addEventListener('click', function() {
        linksModal.classList.remove('show');
    });
    
    cancelLinksBtn.addEventListener('click', function() {
        linksModal.classList.remove('show');
    });
    
    linksModal.addEventListener('click', function(e) {
        if (e.target === linksModal) {
            linksModal.classList.remove('show');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && linksModal.classList.contains('show')) {
            linksModal.classList.remove('show');
        }
    });
    
    linksForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = linkNameInput.value.trim();
        let url = linkUrlInput.value.trim();
        let icon = linkIconInput.value.trim();
        
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        
        if (!name || !url) return;
        
        if (!icon) {
            icon = await fetchFavicon(url);
        }
        
        const links = JSON.parse(localStorage.getItem('customLinks') || '[]');
        links.push({ name, url, icon });
        saveLinks(links);
        displayLinks(links);
        
        linkNameInput.value = '';
        linkUrlInput.value = '';
        linkIconInput.value = '';
    });
}

// Theme Functions (unchanged)
function setupThemeSelector() {
    themeBtn.addEventListener('click', function() {
        themeOptions.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        if (!themeBtn.contains(e.target) && !themeOptions.contains(e.target)) {
            themeOptions.classList.remove('show');
        }
    });
    const themeOptionsElements = document.querySelectorAll('.theme-option');
    themeOptionsElements.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            setTheme(theme);
            themeOptions.classList.remove('show');
        });
    });
}

// Google Apps Menu Functions (unchanged)
function setupGoogleAppsMenu() {
    appsButton.addEventListener('click', function() {
        appsGrid.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        if (!appsButton.contains(e.target) && !appsGrid.contains(e.target)) {
            appsGrid.classList.remove('show');
        }
    });
}

// Info Modal Functions (unchanged)
function setupInfoModal() {
    infoButton.addEventListener('click', function() {
        infoModal.classList.add('show');
    });
    closeInfo.addEventListener('click', function() {
        infoModal.classList.remove('show');
    });
    infoModal.addEventListener('click', function(e) {
        if (e.target === infoModal) {
            infoModal.classList.remove('show');
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && infoModal.classList.contains('show')) {
            infoModal.classList.remove('show');
        }
    });
}

// Event Listeners Setup
function setupEventListeners() {
    userNameElement.addEventListener('blur', saveUserName);
    userNameElement.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            userNameElement.blur();
        }
    });
    setupSearchForm();
    setupLinksModal();
    setupThemeSelector();
    setupGoogleAppsMenu();
    setupInfoModal();
}

// Utility Functions (unchanged)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling for weather API (unchanged)
if (WEATHER_API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
    console.warn('Please add your OpenWeatherMap API key to get weather data');
    updateWeatherUI(null);
}