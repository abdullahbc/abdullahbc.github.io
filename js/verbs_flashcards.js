// Flashcard Data (Replace with actual words & translations)
const flashcards = [
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
    { front: "تَعَلَّمَ - يَتَعَلَّمُ", back: "He learned - He learns" },
    { front: "أَخَذَ - يَأْخُذُ", back: "He took / He takes" },
    { front: "اِسْتَعَدَّ - يَسْتَعِدُّ", back: "He prepared / He prepares" },
    { front: "وَضَعَ - يَضَعُ", back: "He put / He puts" },
    { front: "قَعَدَ - يَقْعُدُ", back: "He sat / He sits" },
    { front: "تَرَكَ - يَتْرُكُ", back: "He left / He leaves" },
    { front: "مَنَعَ - يَمْنَعُ", back: "He prevented - He prevents" },
    { front: "ضَحِكَ - يَضْحَكُ", back: "He laughed" },
    { front: "حَصَلَ - يَحْصُلُ", back: "He got / He gets" },
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
];

// Function to shuffle the array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Shuffle the flashcards array
const shuffledFlashcards = shuffleArray(flashcards);

// Now, you can use 'shuffledFlashcards' to display the flashcards in random order


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
    frontDiv.textContent = flashcards[index].front; // Arabic word on front
    backDiv.textContent = ""; // Hide translation initially
}

// Flip the flashcard when clicked
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flip");

    // Show translation only when flipped
    if (flashcard.classList.contains("flip")) {
        backDiv.textContent = flashcards[currentIndex].back; // Show English word
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
