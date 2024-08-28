// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Manage UI based on user authentication state
  auth.onAuthStateChanged(user => {
      if (user) {
          // User is logged in
          document.getElementById('auth-container').style.display = 'none';
          // Show the spelling test features (e.g., display the main content)
          document.getElementById('main-content').style.display = 'block';
      } else {
          // No user is logged in
          document.getElementById('auth-container').style.display = 'block';
          // Hide the spelling test features (e.g., hide the main content)
          document.getElementById('main-content').style.display = 'none';
      }
  });
  
  // Sign Up Functionality
  document.getElementById('sign-up').addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      auth.createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
              console.log("User signed up:", userCredential.user);
          })
          .catch(error => {
              console.error("Error signing up:", error);
          });
  });
  
  // Login Functionality
  document.getElementById('login').addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      auth.signInWithEmailAndPassword(email, password)
          .then(userCredential => {
              console.log("User logged in:", userCredential.user);
          })
          .catch(error => {
              console.error("Error logging in:", error);
          });
  });  

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

// Test the word list by logging it to the console
console.log("Word List:", wordList);

// Function to pronounce a word using the Web Speech API
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}

// Function to pick a random word from the list and pronounce it
function startPractice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    
    // Display the word in the console (for testing purposes)
    console.log("Selected Word:", selectedWord);

    // Pronounce the selected word
    pronounceWord(selectedWord);

    // Optionally, display the word on the webpage (you can remove this if not needed)
    //document.getElementById('word-display').textContent = selectedWord;
}
// Event listener to trigger the practice session when the button is clicked
document.getElementById('start-practice').addEventListener('click', startPractice)

let currentWord = "";  // Variable to store the current word being tested

// Function to start the practice session
function startPractice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex];

    // Pronounce the selected word
    pronounceWord(currentWord);

    // Clear any previous input and feedback
    document.getElementById('spelling-input').value = "";
    document.getElementById('feedback').textContent = "";
}

// Function to check the user's spelling (same as before)
function checkSpelling() {
    const userSpelling = document.getElementById('spelling-input').value.trim();

    if (userSpelling.toLowerCase() === currentWord.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct spelling is "${currentWord}".`;
        document.getElementById('feedback').style.color = "red";
    }
}

// Event listener for the "Check Spelling" button
document.getElementById('check-spelling').addEventListener('click', checkSpelling);

// Event listener for the "Start Practice" button
document.getElementById('start-practice').addEventListener('click', startPractice);

// Event listener for the "Enter" key in the input field
document.getElementById('spelling-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkSpelling();
    }
});


// Event listener for the "Check Spelling" button
document.getElementById('check-spelling').addEventListener('click', checkSpelling);

// Event listener for the "Start Practice" button
document.getElementById('start-practice').addEventListener('click', startPractice);

