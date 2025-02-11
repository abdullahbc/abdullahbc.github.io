// Retrieve the flashcard set from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const set = urlParams.get("set");

// Flashcard data for different sets
const flashcardSets = {
    "lesson1": [
        { front: "ابْنٌ - أَبْنَاءُ", back: "Son - Sons" },
        { front: "قَالَ - يَقُولُ", back: "He said - He says" },
        { front: "صَلَاةٌ - صَلَوَاتُ", back: "Prayer - Prayers" },
        { front: "عَلِمَ - يَعْلَمُ", back: "He knew - He knows" },
        { front: "أَنَّ", back: "That" },
        { front: "إِذَا", back: "When" },
        { front: "حَانَ", back: "Approached" },
        { front: "وَقْتٌ", back: "Time" },
        { front: "حَرُمَ - يَحْرُمُ", back: "To be prohibited" },
        { front: "بَيْعٌ", back: "Transactions" },
        { front: "وَلِذَٰلِكَ", back: "Therefore" },
        { front: "عَظُمَ - يَعْظُمُ", back: "To increase in greatness" },
        { front: "ثَوَابٌ", back: "Reward" },
        { front: "إِلَى", back: "To, until, towards" },
        { front: "فَهِمَ - يَفْهَمُ", back: "He understood / He understands" },
        { front: "مَا", back: "What, did not" },
        { front: "أُمٌّ", back: "Mother" },
        { front: "خَرَجَ - يَخْرُجُ", back: "He went out / He goes out" },
        { front: "بُيُوت - بَيْتٌ", back: "House - Houses" },
        { front: "يَدْخُلُ - دَخَلَ ", back: "He entered - He enters" },
        { front: "يُصَلِّي - صَلَّى", back: "He prayed - He Prays" },
        { front: "تَحِيَّتُ المَسْجِدِ", back: "The Masjid Greeting" },
        { front: "قَرَأَ - يَقْرَأُ", back: "He read / He reads" },
        { front: "شَيْءٌ", back: "Thing" },
        { front: "مِنْ", back: "From" },
        { front: "حِينَمَا", back: "When, Whenever" },
        { front: "عِندَمَا", back: "Whenever" },
        { front: "قَرُبَ - يَقْرُبُ", back: "He approached / He approaches" },
        { front: "نَادَى - يُنَادِي", back: "He called / He calls" },
        { front: "المُؤَدِّنُ", back: "The Mu'adhin" },
        { front: "خَطَبَ - يَخْطُبُ", back: "He delivered a sermon / He delivers a sermon" },
        { front: "سَمِعَ - يَسْمَعُ", back: "He heard / He hears" },
        { front: "مَعَ", back: "With" },
        { front: "النَّاسُ", back: "The people" },
        { front: "ثُمَّ", back: "Then" },
        { front: "رَجَعَ - يَرْجِعُ", back: "He returned / He returns" },
        { front: "يَوْمٌ - أَيَّامٌ", back: "Day - Days" },
        { front: "يَفْتَحُ - فَتَحَ", back: "He opened - He opens" },
        { front: "أَبْوَاب - بَابٌ", back: "Door - Doors" },
        { front: "يَشْبَعُ - شَبِعَ", back: "He became full (with food)"},
        { front: "قَعَدَ - يَقْعُدُ", back: "He sat / He sits" },
        { front: "شَرِبَ - يَشْرَبُ", back: "He drank / He drinks" },
        { front: "دَوَاءٌ", back: "Medicine" },
        { front: "فِي", back: "In" },
        { front: "أَرَادَ - يُرِيدُ", back: "He wanted / He wants" },
        { front: "سَافَرَ - يُسَافِرُ", back: "He traveled / He travels" },
        { front: "رِحْلَةٌ", back: "Trip, Journey" },
        { front: "بَدَأَ - يَبْدَأُ", back: "He started / He starts" },
        { front: "بَعْدَ", back: "After" },
        { front: "سَاعَةٌ", back: "Hour" },
        { front: "وَاحِدَةٌ", back: "One (fem)" },
        { front: "رَكِبَ - يَرْكَبُ", back: "He rode / He rides" },
        { front: "لِيُحُضِرَ", back: "To get (3rd person, masc. sing." },
        { front: "مَنْزِلٌ", back: "Home" },
        { front: "قَلِيلٌ", back: "Few, short" },
        { front: "وَقْتٌ قَلِيلٌ", back: "Short time" },
        { front: "حَقِيبَةٌ - حَقَائِبُ", back: "Bag - Bags" },
        { front: "وَصَلَ - يَصِلُ", back: "He arrived / He arrives" },
        { front: "مَكَانٌ", back: "Place" },
        { front: "حَافِلَةٌ", back: "Bus" },
        { front: "حَمَلَ - يَحْمِلُ", back: "He carried / He carries" },
        { front: "شَاهَدَ - يُشَاهِدُ", back: "He watched / He watches" },
        { front: "سَارَ - يَسِيرُ", back: "He moved / He moves" },
        { front: "بِسُرْعَةٍ", back: "Quickly" },
        { front: "الْوَقْتُ الْمُنَاسِبُ", back: "The suitable time" },
        { front: "يَكْثُرُ - كَثُرَ", back: "Increased (in number)" },
        { front: "طَعَامٌ", back: "Food" },
        { front: "قَهْوَةٌ", back: "Coffee" },
        { front: "سَيَّارَةٌ", back: "Car" },
        { front: "مُسَافِرٌ", back: "Traveler" },
        { front: "مَدِينَةٌ", back: "City" },
        { front: "يَجْلِسُ - جَلَسَ", back: "He sat - He sits" }
    ],
    "lesson2": [
        { front: "أَرَادَ - يُرِيدُ", back: "He wanted / He wants" },
        { front: "أَبٌ", back: "Father" },
        { front: "أَنْ", back: "To (like wanted to" },
        { front: "أُسْرَةٌ - أُسَرٌ", back: "Family - Families" },
        { front: "سَمِعَ - يَسْمَعُ", back: "He heard / He hears" },
        { front: "خَارِجٌ", back: "Outside" },
        { front: "مَدِينَةٌ", back: "City" },
        { front: "اِسْتَعَدَّ - يَسْتَعِدُّ", back: "He prepared / He prepares" },
        { front: "الْجَمِيعُ", back: "Everyone" },
        { front: "سَفَرٌ", back: "Trip, Journey" },
        { front: "قَبْلَ", back: "Before" },
        { front: "سَيَّارَةٌ", back: "Car" },
        { front: "قَالَ - يَقُولُ", back: "He said / He says" },
        { front: "أَيْنَ", back: "Where (question)" },
        { front: "وَضَعَ - يَضَعُ", back: "He put / He puts" },
        { front: "صَابُونٌ", back: "Soap" },
        { front: "صُنْدُوقٌ - صَنَادِيقُ", back: "Box - Boxes" },
        { front: "ذَهَبَ - يَذْهَبُ", back: "He went / He goes" },
        { front: "إِلَى", back: "To, until, towards" },
        { front: "سُوقٌ", back: "Market" },
        { front: "خُبْزٌ", back: "Bread" },
        { front: "لِشِرَاءٍ", back: "To buy" },
        { front: "أَخَذَ - يَأْخُذُ", back: "He took / He takes" },
        { front: "ثِيَابٌ - ثَوْبٌ", back: "Clothing - Clothes" },
        { front: "بَنَاتُ - بِنْتٌ", back: "Girl - Girls" },
        { front: "نَعَم", back: "Yes" },
        { front: "وَلَـٰكِنْ", back: "But" },
        { front: "قَعَدَ - يَقْعُدُ", back: "He sat / He sits" },
        { front: "رَكِبَ - يَرْكَبُ", back: "He rode / He rides" },
        { front: "مَعَ", back: "With" },
        { front: "خَرَجَ - يَخْرُجُ", back: "He went out / He goes out" },
        { front: "الْآنَ", back: "Now" },
        { front: "بَوَّابَةٌ", back: "Gate" },
        { front: "نَحْوَ", back: "In the direction of</br>Heading towards" },
        { front: "أَمَامَ", back: "In front of" },
        { front: "خَلْفَ", back: "Behind" },
        { front: "الْوَقْتُ الْمُنَاسِبُ", back: "The suitable time" },
        { front: "بَعْدَ", back: "After" },
        { front: "تَرَكَ - يَتْرُكُ", back: "He left / He leaves" },
        { front: "شَيْءٌ", back: "Thing" },
        { front: "لَا", back: "No" },
        { front: "مَا", back: "What, did not" },
        { front: "وَاحِدٌ", back: "One (masc)" },
        { front: "ضَحِكَ - يَضْحَكُ", back: "He laughed" },
        { front: "فَعَلَ - يَفْعَلُ", back: "He did / He does" },
        { front: "أَوْلَادُ - وَلَدٌ", back: "Boy, child - Boys, children" },
        { front: "أَكَلَ - يَأْكُلُ", back: "He ate / He eats" },
        { front: "سَأَلَ - يَسْأَلُ", back: "He asked - He asks" },
        { front: "يَزْرَعُ - زَرَعَ", back: "He planted, he plants" },
        { front: "مَطَارٌ", back: "Airport" },
        { front: "شَرِبَ - يَشْرَبُ", back: "He drank / He drinks" },
        { front: "يَفْتَحُ - فَتَحَ", back: "He opened - He opens" },
        { front: "فَهِمَ - يَفْهَمُ", back: "He understood / He understands" },
        { front: "مَسَحَ - يَمْسَحُ", back: "He wipe - He wipes" },
        { front: "مَتَى", back: "When (question)" },
        { front: "دَخَلَ", back: "He entered" },
        { front: "غَسَلَ - يَغْسِلُ", back: "He washed - He washes" },
        { front: "شَكَرَ - يَشْكُرُ", back: "He thanked - He thanks" },
        { front: "حَلِيبٌ", back: "Milk" },
        { front: "مَاءٌ", back: "Water" },
        { front: "قَهْوَةٌ", back: "Coffee" },
        { front: "طَبَخَ - يَطْبُخُ", back: "He cooked - He cooks" },
        { front: "مِفْتَاحٌ - مَفَاتِيحُ", back: "Key - Keys" },
        { front: "حَقِيبَةٌ - حَقَائِبُ", back: "Bag - Bags" },
        { front: "لَبِسَ - يَلْبِسُ", back: "He wore - he wears" },
        { front: "مَلَابِس", back: "Clothes" },
        { front: "جَدِيدٌ - جَدِيدَةٌ", back: "New" },
        { front: "المَلَابِسُ الجَدِيدَةُ", back: "The new clothes" },
        { front: "كَثِيرٌ", back: "A lot" },
        { front: "مَدْرَسَةٌ", back: "School" },
        { front: "سُورَةٌ - سُوَرٌ", back: "Surah - Surahs" },
        { front: "شَعَرَ - يَشْعُرُ", back: "He felt / He feels" },
        { front: "سَرِيرٌ", back: "Bed" },
        { front: "حَمَلَ - يَحْمِلُ", back: "He carried / He carries" },
        { front: "كَبِيرٌ", back: "Big" },
        { front: "لَعِبَ - يَلْعَبُ", back: "He played - He plays" },
        { front: "حَدِيقَةٌ", back: "Garden" },
        { front: "سَيَّارَةُ الأُجْرَةُ", back: "Taxi" },
        { front: "طَلَبَ - يَطْلُبُ", back: "He requested - He requests" },
        { front: "جَامِعَةٌ", back: "University" },
        { front: "صُحُفٌ", back: "Newspaper" },
        { front: "اليَومَ", back: "Today" },
        { front: "بَقَالَةٌ", back: "Corner store" },
        { front: "aaf - aff", back: "" },
        { front: "aaf - aff", back: "" }
    ],
    "opposites": [
        { front: "كَبِيرٌ", back: "Big" },
        { front: "صَغِيرٌ", back: "Small" },
        { front: "دَاخِلٌ", back: "Inside" },
        { front: "خَارِجٌ", back: "Outside" },
        { front: "بَعْدَ", back: "After" },
        { front: "قَبْلَ", back: "Before" },
        { front: "قَلِيلٌ", back: "Few" },
        { front: "كَثِيرٌ", back: "Many" },
        { front: "أَمَامَ", back: "In front of" },
        { front: "خَلْفَ", back: "Behind" },
        { front: "حَارٌّ", back: "Hot" },
        { front: "بَارِدٌ", back: "Cold" },
        { front: "سَاخِنٌ", back: "Warm" },
        { front: "طَوِيلٌ", back: "Tall" },
        { front: "قَصِيرٌ", back: "Short" }
    ],
    "verbs": [
        { front: "طَبَخَ - يَطْبُخُ", back: "He cooked - He cooks" },
        { front: "خَرَجَ", back: "He exited" },
        { front: "طَلَبَ - يَطْلُبُ", back: "He requested - He requests" },
        { front: "لَعِبَ - يَلْعَبُ", back: "He played - He plays" },
        { front: "شَكَرَ - يَشْكُرُ", back: "He thanked - He thanks" },
        { front: "دَخَلَ", back: "He entered" },
        { front: "قَالَ - يَقُولُ", back: "He said / He says" },
        { front: "حَرُمَ - يَحْرُمُ", back: "It became Haram / It is Haram" },
        { front: "عَظُمَ - يَعْظُمُ", back: "It became greater / It is greater" },
        { front: "فَهِمَ - يَفْهَمُ", back: "He understood / He understands" },
        { front: "خَرَجَ - يَخْرُجُ", back: "He went out / He goes out" },
        { front: "ذَهَبَ - يَذْهَبُ", back: "He went / He goes" },
        { front: "صَلَّى - يُصَلِّي", back: "He prayed / He prays" },
        { front: "قَرَأَ - يَقْرَأُ", back: "He read / He reads" },
        { front: "قَرُبَ - يَقْرُبُ", back: "He approached / He approaches" },
        { front: "نَادَى - يُنَادِي", back: "He called / He calls" },
        { front: "سَأَلَ - يَسْأَلُ", back: "He asked - He asks" },
        { front: "خَطَبَ - يَخْطُبُ", back: "He delivered a sermon / He delivers a sermon" },
        { front: "سَمِعَ - يَسْمَعُ", back: "He heard / He hears" },
        { front: "رَجَعَ - يَرْجِعُ", back: "He returned / He returns" },
        { front: "أَرَادَ - يُرِيدُ", back: "He wanted / He wants" },
        { front: "سَافَرَ - يُسَافِرُ", back: "He traveled / He travels" },
        { front: "عَرَفَ - يَعْرِفُ", back: "He recognized / He recognizes" },
        { front: "بَدَأَ - يَبْدَأُ", back: "He started / He starts" },
        { front: "حَمَلَ - يَحْمِلُ", back: "He carried / He carries" },
        { front: "وَصَلَ - يَصِلُ", back: "He arrived / He arrives" },
        { front: "شَاهَدَ - يُشَاهِدُ", back: "He watched / He watches" },
        { front: "سَارَ - يَسِيرُ", back: "He moved / He moves" },
        { front: "يَكْثُرُ - كَثُرَ", back: "Increased (in number)" },
        { front: "رَكِبَ - يَرْكَبُ", back: "He rode / He rides" },
        { front: "أَحَبَّ - يُحِبُّ", back: "He wanted / He wants" },
        { front: "أَخَذَ - يَأْخُذُ", back: "He took / He takes" },
        { front: "اِسْتَعَدَّ - يَسْتَعِدُّ", back: "He prepared / He prepares" },
        { front: "وَضَعَ - يَضَعُ", back: "He put / He puts" },
        { front: "قَعَدَ - يَقْعُدُ", back: "He sat / He sits" },
        { front: "تَرَكَ - يَتْرُكُ", back: "He left / He leaves" },
        { front: "ضَحِكَ - يَضْحَكُ", back: "He laughed" },
        { front: "حَصَلَ - يَحْصُلُ", back: "He obtained / He obtains" },
        { front: "فَعَلَ - يَفْعَلُ", back: "He did / He does" },
        { front: "بَحَثَ - يَبْحَثُ", back: "He searched / He searches" },
        { front: "كَانَ - يَكُونُ", back: "He was / He is" },
        { front: "فَحَصَ - يَفْحَصُ", back: "He examined / He examines" },
        { front: "نَبَذَ - يَنْبِذُ", back: "He shunned / He shuns" },
        { front: "فَرِحَ - يَفْرَحُ", back: "He rejoiced / He rejoices" },
        { front: "شَعَرَ - يَشْعُرُ", back: "He felt / He feels" },
        { front: "تَقَبَّلَ - يَتَقَبَّلُ", back: "He accepted / He accepts" },
        { front: "حَزَمَ - يَحْزِمُ", back: "He tied / He ties" },
        { front: "شَرِبَ - يَشْرَبُ", back: "He drank / He drinks" },
        { front: "أَكَلَ - يَأْكُلُ", back: "He ate / He eats" },
        { front: "رَأَى - يَرَى", back: "He saw / He sees" },
        { front: "مَسَحَ - يَمْسَحُ", back: "He wipe - He wipes" },
        { front: "يَفْتَحُ - فَتَحَ", back: "He opened - He opens" },
        { front: "يَشْبَعُ - شَبِعَ", back: "He became full (with food)"},
        { front: "غَسَلَ - يَغْسِلُ", back: "He washed - He washes" },
        { front: "دَخَلَ", back: "He entered" }
    ]
};

// Use the selected flashcard set, or default to an empty array
const flashcards = flashcardSets[set] || [];

// Shuffle the flashcards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Shuffle the flashcards array
const shuffledFlashcards = shuffleArray(flashcards);

let currentIndex = 0;

// Selecting elements
const flashcard = document.getElementById("flashcard");
const flashcardInner = document.createElement("div");
flashcardInner.classList.add("flashcard-inner");

// Create front and back divs
const frontDiv = document.createElement("div");
frontDiv.classList.add("flashcard-front");
const backDiv = document.createElement("div");
backDiv.classList.add("flashcard-back");

// Append to flashcard
flashcardInner.appendChild(frontDiv);
flashcardInner.appendChild(backDiv);
flashcard.appendChild(flashcardInner);

// Function to load the current flashcard
function loadFlashcard(index) {
    frontDiv.textContent = shuffledFlashcards[index]?.front || "No cards available"; 
    backDiv.textContent = ""; // Hide translation initially
}

// Flip the flashcard when clicked
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flip");

    // Show translation only when flipped
    if (flashcard.classList.contains("flip")) {
        backDiv.textContent = shuffledFlashcards[currentIndex]?.back || ""; 
    } else {
        backDiv.textContent = ""; // Hide translation when flipping back
    }
});

// Go to previous flashcard
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadFlashcard(currentIndex);
        flashcard.classList.remove("flip"); // Reset flip state
    }
});

// Go to next flashcard
document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        loadFlashcard(currentIndex);
        flashcard.classList.remove("flip"); // Reset flip state
    }
});

// Load the first flashcard initially
loadFlashcard(currentIndex);
