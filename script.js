// Datenbank mit "Ich liebe dich" in verschiedenen Sprachen + Aussprache
const loveMessages = [
    { text: "Ich liebe dich", country: "🇩🇪 Deutsch (Deutschland)", pronunciation: "Ich LEE-be dich" },
    { text: "I love you", country: "🇺🇸 Englisch (USA)", pronunciation: "Ai lov ju" },
    { text: "Je t'aime", country: "🇫🇷 Französisch (Frankreich)", pronunciation: "Schö tem" },
    { text: "Ti amo", country: "🇮🇹 Italienisch (Italien)", pronunciation: "Ti A-mo" },
    { text: "Te amo", country: "🇪🇸 Spanisch (Spanien)", pronunciation: "Te A-mo" },
    { text: "Te amo", country: "🇲🇽 Spanisch (Mexiko)", pronunciation: "Te A-mo" },
    { text: "Ik hou van je", country: "🇳🇱 Niederländisch (Niederlande)", pronunciation: "Ik hou van je" },
    { text: "Jag älskar dig", country: "🇸🇪 Schwedisch (Schweden)", pronunciation: "Jag EL-skar dig" },
    { text: "Jeg elsker deg", country: "🇳🇴 Norwegisch (Norwegen)", pronunciation: "Jai EL-sker dai" },
    { text: "Ég elska þig", country: "🇮🇸 Isländisch (Island)", pronunciation: "Eig EL-ska thig" },
    { text: "Kocham cię", country: "🇵🇱 Polnisch (Polen)", pronunciation: "KO-cham tse" },
    { text: "Miluji tě", country: "🇨🇿 Tschechisch (Tschechien)", pronunciation: "Mi-lu-ji tje" },
    { text: "Volim te", country: "🇭🇷 Kroatisch (Kroatien)", pronunciation: "VO-lim te" },
    { text: "Ljubim te", country: "🇷🇸 Serbisch (Serbien)", pronunciation: "LJU-bim te" },
    { text: "Te iubesc", country: "🇷🇴 Rumänisch (Rumänien)", pronunciation: "Te ju-BESK" },
    { text: "Σ'αγαπώ", country: "🇬🇷 Griechisch (Griechenland)", pronunciation: "Sa ga-pa-o" },
    { text: "Я люблю тебя", country: "🇷🇺 Russisch (Russland)", pronunciation: "Ya liwblu tebja" },
    { text: "Люблю тебе", country: "🇺🇦 Ukrainisch (Ukraine)", pronunciation: "Ljublu tebe" },
    { text: "Обичам те", country: "🇧🇬 Bulgarisch (Bulgarien)", pronunciation: "O-bi-cham te" },
    { text: "Mahal kita", country: "🇵🇭 Tagalog (Philippinen)", pronunciation: "Ma-hal KI-ta" },
    { text: "愛してる", country: "🇯🇵 Japanisch (Japan)", pronunciation: "A-i shi-te ru" },
    { text: "我爱你", country: "🇨🇳 Chinesisch Mandarin (China)", pronunciation: "Wǒ ài nǐ" },
    { text: "我愛你", country: "🇹🇼 Chinesisch Kantonesisch (Taiwan)", pronunciation: "Ngo oi nei" },
    { text: "사랑해요", country: "🇰🇷 Koreanisch (Südkorea)", pronunciation: "Sa-rang-hae-yo" },
    { text: "รักเธอ", country: "🇹🇭 Thailändisch (Thailand)", pronunciation: "Rak thoe" },
    { text: "Tôi yêu em", country: "🇻🇳 Vietnamesisch (Vietnam)", pronunciation: "Toi yeu em" },
    { text: "Aku cinta kamu", country: "🇮🇩 Indonesisch (Indonesien)", pronunciation: "Aku CHIN-ta KA-mu" },
    { text: "Ich liebe dich", country: "🇦🇹 Österreichisch (Österreich)", pronunciation: "Ich LEE-be dich" },
    { text: "Ich liebe dich", country: "🇨🇭 Schweizerdeutsch (Schweiz)", pronunciation: "Ich LEE-be dich" },
    { text: "Eu te amo", country: "🇧🇷 Portugiesisch (Brasilien)", pronunciation: "Eu te A-mu" },
    { text: "Eu amo-te", country: "🇵🇹 Portugiesisch (Portugal)", pronunciation: "Eu A-mu te" },
    { text: "Minä rakastan sinua", country: "🇫🇮 Finnisch (Finnland)", pronunciation: "Mi-nä RA-kas-tan SI-nu-a" },
    { text: "אני אוהב אותך", country: "🇮🇱 Hebräisch (Israel)", pronunciation: "Ani ohev otcha" },
    { text: "أحبك", country: "🇸🇦 Arabisch (Saudi-Arabien)", pronunciation: "Ahabba" },
    { text: "Seni seviyorum", country: "🇹🇷 Türkisch (Türkei)", pronunciation: "Se-ni se-vi-yo-rum" },
    { text: "من دوست دارم", country: "🇮🇷 Persisch (Iran)", pronunciation: "Man dooset daram" },
    { text: "Szeretlek", country: "🇭🇺 Ungarisch (Ungarn)", pronunciation: "SE-re-tek" },
    { text: "मैं तुमसे प्यार करता हूँ", country: "🇮🇳 Hindi (Indien)", pronunciation: "Main tumse pyar karta hoon" },
    { text: "Nang minamahal kita", country: "🇵🇭 Ilocano (Philippinen)", pronunciation: "Nang mi-na-ma-hal KI-ta" },
    { text: "Nkosi sikhele iAfrika", country: "🇿🇦 Zulu (Südafrika)", pronunciation: "Ngi-ku-tanda" },
    { text: "Mina jua wewe", country: "🇰🇪 Suaheli (Kenia)", pronunciation: "Mi-na JU-a WE-we" },
    { text: "Aku menyintaimu", country: "🇲🇾 Malaiisch (Malaysia)", pronunciation: "A-ku men-yin-TAI-mu" },
    { text: "Mahal mo kayo", country: "🇸🇬 Singalesisch (Singapur)", pronunciation: "Ma-hal mo KA-yo" },
    { text: "Iu ❤️", country: "🇬🇧 Englisch texting (UK)", pronunciation: "I love you" },
    { text: "Μ'αγαπάς", country: "🇨🇾 Zypriotisch (Zypern)", pronunciation: "M'agapas" },
    { text: "Thee pyaar karti hoon", country: "🇵🇰 Urdu (Pakistan)", pronunciation: "Thee pyaar karti hoon" },
    { text: "Thamizhey anbu", country: "🇱🇰 Tamil (Sri Lanka)", pronunciation: "Tham-il-ey anbu" },
    { text: "Nuvvu naaku priyudu", country: "🇮🇳 Telugu (Indien)", pronunciation: "Nuv-vu naa-ku pri-yu-du" },
    { text: "Aham te priyam karomi", country: "🇮🇳 Sanskrit (Indien)", pronunciation: "A-ham te pri-yam ka-ro-mi" },
    { text: "Khob teh om", country: "🇰🇭 Khmer (Kambodscha)", pronunciation: "Khob teh om" },
    { text: "Gayu sumama taka", country: "🇵🇦 Guna (Panama)", pronunciation: "Ga-yu su-MA-ma TA-ka" },
];

/**
 * Zeigt eine zufällige "Ich liebe dich" Nachricht
 */
function displayRandomMessage() {
    // Zufälliger Index
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[randomIndex];
    
    // DOM-Elemente abrufen
    const messageElement = document.getElementById('loveMessage');
    const countryElement = document.getElementById('countryInfo');
    const pronunciationElement = document.getElementById('pronunciation');
    
    // Text setzen mit Animation
    messageElement.style.opacity = '0';
    countryElement.style.opacity = '0';
    pronunciationElement.style.opacity = '0';
    
    // Nach kurzer Verzögerung Text ändern und wieder anzeigen
    setTimeout(() => {
        messageElement.textContent = message.text;
        countryElement.textContent = message.country;
        pronunciationElement.textContent = "Aussprache: " + message.pronunciation;
        
        messageElement.style.opacity = '1';
        countryElement.style.opacity = '1';
        pronunciationElement.style.opacity = '1';
    }, 100);
}

/**
 * Erstellt die fliegenden Herzen
 */
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    if (!heartsContainer) return;
    
    for (let i = 0; i < 19; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heartsContainer.appendChild(heart);
    }
}

// Beim Laden der Seite
window.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    displayRandomMessage();
});
