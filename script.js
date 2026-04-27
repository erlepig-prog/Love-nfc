// Datenbank mit "Ich liebe dich" in verschiedenen Sprachen
const loveMessages = [
    { text: "Ich liebe dich", country: "🇩🇪 Deutsch (Deutschland)" },
    { text: "I love you", country: "🇺🇸 Englisch (USA)" },
    { text: "Je t'aime", country: "🇫🇷 Französisch (Frankreich)" },
    { text: "Ti amo", country: "🇮🇹 Italienisch (Italien)" },
    { text: "Te amo", country: "🇪🇸 Spanisch (Spanien)" },
    { text: "Te amo", country: "🇲🇽 Spanisch (Mexiko)" },
    { text: "Ik hou van je", country: "🇳🇱 Niederländisch (Niederlande)" },
    { text: "Jag älskar dig", country: "🇸🇪 Schwedisch (Schweden)" },
    { text: "Jeg elsker deg", country: "🇳🇴 Norwegisch (Norwegen)" },
    { text: "Ég elska þig", country: "🇮🇸 Isländisch (Island)" },
    { text: "Kocham cię", country: "🇵🇱 Polnisch (Polen)" },
    { text: "Miluji tě", country: "🇨🇿 Tschechisch (Tschechien)" },
    { text: "Volim te", country: "🇭🇷 Kroatisch (Kroatien)" },
    { text: "Ljubim te", country: "🇷🇸 Serbisch (Serbien)" },
    { text: "Te iubesc", country: "🇷🇴 Rumänisch (Rumänien)" },
    { text: "Σ'αγαπώ", country: "🇬🇷 Griechisch (Griechenland)" },
    { text: "Я люблю тебя", country: "🇷🇺 Russisch (Russland)" },
    { text: "Люблю тебе", country: "🇺🇦 Ukrainisch (Ukraine)" },
    { text: "Люблю те", country: "🇧🇬 Bulgarisch (Bulgarien)" },
    { text: "Obicham te", country: "🇧🇬 Bulgarisch" },
    { text: "Mahal kita", country: "🇵🇭 Tagalog (Philippinen)" },
    { text: "Aishiteru", country: "🇯🇵 Japanisch (Japan)" },
    { text: "我爱你", country: "🇨🇳 Chinesisch (China)" },
    { text: "我愛你", country: "🇹🇼 Traditionelles Chinesisch (Taiwan)" },
    { text: "사랑해요", country: "🇰🇷 Koreanisch (Südkorea)" },
    { text: "รักเธอ", country: "🇹🇭 Thailändisch (Thailand)" },
    { text: "Tôi yêu em", country: "🇻🇳 Vietnamesisch (Vietnam)" },
    { text: "Aku cinta kamu", country: "🇮🇩 Indonesisch (Indonesien)" },
    { text: "Ich liebe dich", country: "🇦🇹 Österreichisch (Österreich)" },
    { text: "Ich liebe dich", country: "🇨🇭 Schweizerdeutsch (Schweiz)" },
    { text: "Eu te amo", country: "🇧🇷 Portugiesisch (Brasilien)" },
    { text: "Eu amo-te", country: "🇵🇹 Portugiesisch (Portugal)" },
    { text: "Amo te", country: "🇫🇮 Finnisch (Finnland)" },
    { text: "אני אוהב אותך", country: "🇮🇱 Hebräisch (Israel)" },
    { text: "أحبك", country: "🇸🇦 Arabisch (Saudi-Arabien)" },
    { text: "Seni seviyorum", country: "🇹🇷 Türkisch (Türkei)" },
    { text: "من دوست دارم", country: "🇮🇷 Persisch (Iran)" },
    { text: "Mein tu asa pa'i", country: "🇭🇺 Ungarisch (Ungarn)" },
    { text: "कम तुमसे प्यार करता हूँ", country: "🇮🇳 Hindi (Indien)" },
    { text: "Nang minamahal kita", country: "🇵🇭 Philippinisch" },
    { text: "Amo-te", country: "🇦🇴 Portugiesisch (Angola)" },
    { text: "Mina jua wewe", country: "🇰🇪 Suaheli (Kenia)" },
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
    
    // Text setzen mit Animation
    messageElement.style.opacity = '0';
    countryElement.style.opacity = '0';
    
    // Nach kurzer Verzögerung Text ändern und wieder anzeigen
    setTimeout(() => {
        messageElement.textContent = message.text;
        countryElement.textContent = message.country;
        
        messageElement.style.opacity = '1';
        countryElement.style.opacity = '1';
    }, 100);
}
