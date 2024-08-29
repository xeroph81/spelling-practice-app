// Static word list
const wordList = [
    "abbreviate", "Aberdeen", "able-bodied", "aborigine", "absenteeism", "abundant", 
    "accede", "accessibility", "accident", "accompanied", "according", "accuse", 
    "achieve", "achromatic", "acoustics", "acropolis", "actuality", "acute", 
    "adequately", "adjective", "administrator", "adolescent", "advantage", 
    "adversary", "Aegean", "aerospace", "affiliated", "Afrikaans", "aggravating", 
    "agreeable", "airborne", "Alabama", "albacore", "Aleutian Islands", "Alhambra", 
    "allemande", "allowance", "Alps", "aluminum", "amateur", "amber", 
    "American Samoa", "amnesia", "amusement park", "ancestor", "anemometer", 
    "angle", "announcement", "anonymous", "antenna", "anticipation", 
    "anti-inflammatory", "antisocial", "aphid", "apostle", "apparatus", 
    "appetite", "appointment", "approximately", "Aquarius", "arboretum", 
    "archetype", "arctic fox", "arithmetic", "artichoke", "asbestos", "asphalt", 
    "assortment", "astigmatism", "asylum", "atmospheric", "audience", "autism", 
    "author", "autonomous", "avenge", "baboon", "bacteria", "balance", "balloon", 
    "banana", "barracuda", "basically", "Bastille Day", "bauble", "bauxite", 
    "beagle", "beautifully", "beetle", "behaviorism", "believable", "beneficiary", 
    "Bering Strait", "biannual", "bicuspid", "binary", "biographer", "bivalve", 
    "blizzard", "boa constrictor", "boll weevil", "Bordeaux", "boutique", 
    "braillewriter", "bridal", "brilliant", "broccoli", "browse", "buffet", 
    "burglarize", "burros", "butterfly", "cacao", "calculator", "calisthenics", 
    "camouflage", "candelabra", "capitalism", "carbohydrate", "Caribbean Sea", 
    "carnivorous", "cartographer", "Caspian Sea", "cataloging", "cathedral", 
    "cedar", "cello", "censer", "cerebellum", "challenge", "changeable", 
    "character", "chateau", "cheddar", "Cheyenne", "Chihuahua", "chocolate", 
    "choral", "circular", "cirrus", "civilization", "classification", "cleanse", 
    "clipper", "cloverleaf", "cochlea", "coincidence", "collateral", 
    "collegiate", "colonization", "Columbus", "combative", "command", 
    "committee", "communicable", "companionship", "compelling", "completion", 
    "composition", "continental", "convenient", "convincingly", "copyright", 
    "cornea", "corrosion", "cotyledon", "council", "courteous", "crease", 
    "crescendo", "criticize", "Cro-Magnon", "cross-grained", "crouton", 
    "cumulonimbus", "currant", "cursor", "custom", "cyclone", "Czech Republic", 
    "dandelion", "dappled", "debonair", "decanter", "deceived", "decipher", 
    "defense", "dehydration", "delirious", "demarcation", "deprivation", 
    "derringer", "descend", "despair", "desert", "dessert", "develop", 
    "dilemma", "dimension", "diorama", "disappear", "disarmament", 
    "disconnected", "discovery", "disguise", "dispelled", "dissipate", 
    "diversity", "domestic", "doubt", "drawbridge", "DuBois", "dulcimer", 
    "duplication", "eavesdropper", "echolocation", "economist", "efficient", 
    "eighteen-wheeler", "elaborate", "electrocution", "elimination", "embarrass", 
    "emergency", "emphasized", "endeavor", "enigma", "ensign", "enunciate", 
    "epiglottis", "equinox", "ergonomics", "escalator", "esophagus", 
    "estimation", "everlasting", "exaggerated", "exceed", "exception", 
    "excursion", "exercise", "exhaustion", "exorbitant", "expansion", 
    "explanation", "exterior", "extraordinary", "fair-weather", "falsify", 
    "fantasia", "fastuous", "February", "fertilizer", "fictitious", "fiercest", 
    "filet mignon", "financial", "first sergeant", "flirtatious", "floriferous", 
    "fluorescent", "forecast", "forester", "formerly", "fortified", "fortunately", 
    "fossiliferous", "Fourth of July", "frankfurter", "freesia", "frittata", 
    "fumble", "furlough", "futuristic", "galloping", "gargoyle", "genesis", 
    "geologic", "geothermal", "geyser", "gimmick", "glengarry", "gloxinia", 
    "gnaw", "gracious", "grateful", "graze", "grievous", "grotesque", 
    "Guadalajara", "guidance", "hacienda", "Halloween", "handsome", "haphazard", 
    "harmonious", "Hawaii", "height", "heliport", "herbivorous", "hermit", 
    "hexagon", "highway robbery", "hippopotamus", "hoarseness", "hologram", 
    "homestead", "honeysuckle", "horsepower", "Hot Springs", "humanitarianism", 
    "humorist", "huskiness", "hydraulic", "hygienist", "hypodermic", 
    "hysterical", "illustrated", "imagination", "immediately", "immigration", 
    "impartial", "imperialism", "impossible", "inadvertent", "incidentally", 
    "inconsistent", "incubator", "indispensable", "industrious", "inferior", 
    "influenza", "injured", "inoculate", "insolvent", "instantaneously", 
    "integrity", "intention", "intercontinental", "intermittent", "interrupt", 
    "intravenous", "inviable", "iridescent", "irretrievable", "irrigation", 
    "isle", "isthmus", "Jacksonville", "jackal", "jeopardy", "jinx", "jostle", 
    "jubilee", "judicial", "justice", "kaleidoscope", "kilowatt", "kinetic", 
    "knead", "knit", "knotting", "koala", "kumquat", "Lafayette", "landscaper", 
    "laryngitis", "laudatory", "league", "legislative", "legume", "leopard", 
    "Lhasa apso", "lieutenant", "lightening", "linoleum", "literature", 
    "locomotor", "longitude", "loudspeaker", "loyalist", "luggage", "luncheon", 
    "lymph node", "macaroon", "magazine", "magnolia", "maintenance", "majority", 
    "malfunction", "Mammoth Cave", "mannequin", "marathon", "maritime", 
    "martial", "mascot", "matador", "matter-of-fact", "meanwhile", "mediator", 
    "mediocre", "melodious", "memento", "Mercator", "meringue", "mesosphere", 
    "meteoroid", "metronome", "Middle East", "mileage", "milliliter", "minimum", 
    "miraculous", "misfortune", "misunderstood", "moccasin", "molecule", 
    "monastery", "monocot", "monotonous", "monstrous", "moraine", "mortgage", 
    "mosquitoes", "municipal", "musician", "myogenic", "narcolepsy", 
    "nauseous", "nebula", "negligible", "nephew", "neutrality", "Niagara Falls", 
    "nightingale", "nineteenth", "nominee", "nonrefundable", "nominative", 
    "novelty", "nuclear", "numerical", "nutrient", "oasis", "obituary", 
    "obligation", "obnoxious", "obstacle course", "occupation", "oceanographer", 
    "old-fashioned", "opaque", "opossum", "oppression", "orbit", "ordinary", 
    "orient", "ornament", "ostrich", "oxygen", "Padre Island", "paleontologist", 
    "paltry", "pancreas", "papaya", "paralysis", "parentheses", 
    "parliamentarian", "partition", "past participle", "pastoral", "patience", 
    "patrolling", "peaceable", "peculiarity", "pedigree", "pennant", 
    "peppermint", "perennial", "perimeter", "permanent", "persistence", 
    "personality", "persuaded", "petrified", "pharaoh", "pheasant", 
    "phosphorescence", "physician", "piece", "pilot", "pioneer", "placate", 
    "plaque", "play-off", "pliable", "poignant", "policies", "polygonal", 
    "pommel horse", "porpoise", "possess", "potential", "pragmatic", 
    "precaution", "precipitation", "predicament", "predictable", "preference", 
    "prescription", "pretentious", "prima ballerina", "privilege", "procedure", 
    "proclaim", "profession", "prominent", "pronate", "propulsion", 
    "providence", "psychology", "pueblo", "punctuality", "pursue", "python", 
    "quadrennial", "qualified", "quantitative", "quarrelsome", "quasar", 
    "quesadilla", "quibbled", "quiet", "quite", "quizzes", "quotient", 
    "rabies", "radiation", "raffia", "ramshackle", "raspberry", "reality", 
    "rebellion", "receptor", "reciprocal", "recommend", "recorder", "redeem", 
    "reelect", "refinish", "refraction", "region", "rehabilitate", "reindeer", 
    "relevant", "religion", "remembrance", "removed", "repeatedly", "replied", 
    "rescind", "reservation", "residual", "resonant", "restoration", 
    "retrieval", "revolving", "riboflavin", "rigatoni", "righteous", "rival", 
    "robot", "rodeos", "ruffian", "saber-toothed", "salamander", 
    "Salt Lake City", "San Antonio", "sanitize", "sari", "sarsaparilla", 
    "sassafras", "satisfaction", "sauerkraut", "scandalous", "scarecrow", 
    "scenery", "scheme", "scholastic", "scrabble", "scribbler", "scrutinize", 
    "sculpture", "sedimentary", "seismograph", "self-reliance", "senatorial", 
    "sensitivity", "sequentially", "service", "sharecropper", "shepherd", 
    "shimmer", "shoal", "shriek", "siege", "sieve", "significance", 
    "silverware", "simultaneous", "sister-in-law", "sleigh", "smudge", 
    "society", "soldier", "solitude", "sousaphone", "spacious", "Spanish moss", 
    "specific", "spectrum", "sphere", "splashdown", "spontaneous", 
    "sprinkler", "squid", "stanza", "stationary", "statue", "stingy", 
    "straight angle", "strategy", "strength", "stretch", "struggle", 
    "stupendous", "subdivision", "subpoena", "subtraction", "succeed", 
    "sufferance", "suite", "summery", "superior", "supersede", "surpass", 
    "surveyor", "suspense", "swivel", "syllabus", "sympathy", "synonym", 
    "Taipei", "tapestry", "tariff", "tastier", "teakwood", "technique", 
    "tenacious", "tenor", "teriyaki", "terrier", "theatrical", "thermostat", 
    "thievery", "thistle", "thoroughfare", "threshold", "throttle", 
    "thunderous", "thwart", "tiger salamander", "tirade", "tobacco", 
    "tomatoes", "topiary", "tortilla", "trachea", "traipse", "transfusion", 
    "transversal", "treacherous", "trepidation", "triangulate", "triceratops", 
    "triggerfish", "Tropic of Cancer", "trough", "trustworthy", "tundra", 
    "typical", "Ukrainian", "ultrasound", "umbrella", "unanimously", 
    "uncivilized", "underrate", "unforgettable", "unimaginable", "university", 
    "unscrupulous", "upholstery", "uranium", "vacancy", "vacillate", 
    "vagabond", "valiant", "vane", "variety", "vault", "vein", "Venn diagram", 
    "Venezuela", "ventilation", "veracity", "versatility", "vestibule", 
    "vibration", "vicinity", "videoconferencing", "vigorous", "vociferously", 
    "voluntarily", "vulnerable", "wampum", "wasted", "water-repellent", 
    "wearisome", "weird", "whimsical", "whirlpool", "whitening", "wholly", 
    "wildebeest", "wolverine", "woodchuck", "World Series", "wouldn’t", 
    "wrench", "xenophile", "xylophone", "yardstick", "Yiddish", "yodel", 
    "yolk", "Zaire", "zephyr", "zircon", "zoology", "zwieback"
];

// Variables to track the current word and score
let currentWord = "";
let attempts = [];  // Array to store each attempt

// Function to pronounce a word using the Web Speech API
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}

// Function to start the practice session and prompt the first word
function startPractice() {
    attempts = []; // Reset attempts at the start of practice
    updateScoreDisplay(); // Reset score display
    promptNextWord();  // Start by prompting the first word
}

// Function to prompt the next word
function promptNextWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex];

    // Pronounce the selected word
    pronounceWord(currentWord);

    // Clear any previous input and feedback
    document.getElementById('spelling-input').value = "";
    document.getElementById('feedback').textContent = "";
}

// Function to repeat the current word
function repeatWord() {
    if (currentWord) {
        pronounceWord(currentWord);
    } else {
        document.getElementById('feedback').textContent = "No word is currently being tested.";
    }
}

// Function to check the user's spelling
function checkSpelling() {
    const userSpelling = document.getElementById('spelling-input').value.trim();
    let status = '';

    if (userSpelling.toLowerCase() === currentWord.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
        status = 'correct';
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct spelling is "${currentWord}".`;
        document.getElementById('feedback').style.color = "red";
        status = 'incorrect';
    }

    // Add the attempt to the attempts array
    attempts.push({ word: currentWord, status: status });

    // Update the score display
    updateScoreDisplay();

    // Delay before moving to the next word to allow the user to see the feedback
    setTimeout(promptNextWord, 2000); // 2000ms delay (2 seconds)
}

// Function to skip the current word
function skipWord() {
    if (currentWord) {
        // Add the attempt to the attempts array with status 'skipped'
        attempts.push({ word: currentWord, status: 'skipped' });

        // Update the score display
        updateScoreDisplay();

        // Prompt the next word immediately
        promptNextWord();
    }
}

// Function to update the score display
function updateScoreDisplay() {
    let correctCount = attempts.filter(attempt => attempt.status === 'correct').length;
    let totalCount = attempts.length;
    let skippedCount = attempts.filter(attempt => attempt.status === 'skipped').length;
    let percentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;

    // Update the display of the score
    document.getElementById('score').textContent = 
        `Correct: ${correctCount} / Total: ${totalCount} (Skipped: ${skippedCount}) - ${percentage.toFixed(2)}%`;
    
    // Update the attempts table or list
    let attemptList = document.getElementById('attempt-list');
    attemptList.innerHTML = '';
    attempts.forEach(attempt => {
        let li = document.createElement('li');
        li.textContent = `${attempt.word}: ${attempt.status}`;
        attemptList.appendChild(li);
    });
}

// Event listener for the "Start Practice" button
document.getElementById('start-practice').addEventListener('click', startPractice);

// Event listener for the "Skip Word" button
document.getElementById('skip-word').addEventListener('click', skipWord);

// Event listener for the "Repeat Word" button
document.getElementById('repeat-word').addEventListener('click', repeatWord);

// Event listener for the "Enter" key in the input field
document.getElementById('spelling-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkSpelling();  // Check spelling when Enter is pressed
    }
});