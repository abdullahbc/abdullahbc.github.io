// Flashcard Data (Replace with actual words & translations)
const flashcards = [
    { front: "يَوْمٌ - أَيَّامٌ", back: "Day - Days" },
    { front: "فَقِيرٌ - فُقَرَاءُ", back: "Poor person - Poor people" },
    { front: "أَخٌ - إِخْوَةٌ", back: "Brother - Brothers" },
    { front: "زِيَارَةٌ - زِيَارَاتٌ", back: "Visit - Visits" },
    { front: "قَرِيبٌ - أَقَارِبُ", back: "Relative - Relatives" },
    { front: "صَدِيقٌ - أَصْدِقَاءُ", back: "Friend - Friends" },
    { front: "سَعِيدٌ", back: "Happy" },
    { front: "كُلٌّ", back: "Every" },
    { front: "عَامٌ", back: "Year" },
    { front: "مَعًا", back: "Together" },
    { front: "قَبْلَ", back: "Before" },
    { front: "بَعْدَ", back: "After" },
    { front: "جَمِيعََا", back: "All together" },
    { front: "وَقْتٌ", back: "Time" },
    { front: "رِحْلَةٌ", back: "Trip, Journey" },
    { front: "سَاعَةٌ", back: "Hour" },
    { front: "حِينَمَا", back: "When, Whenever" },
    { front: "سَفَرٌ", back: "Trip, Journey" },
    { front: "بَيْتٌ", back: "House" },
    { front: "مَنْزِلٌ", back: "Home" },
    { front: "شَيْءٌ", back: "Thing" },
    { front: "ثَوَابٌ", back: "Reward" },
    { front: "بَيْعٌ", back: "Transactions" },
    { front: "وَلِذَٰلِكَ", back: "Therefore" },
    { front: "عِندَمَا", back: "When" },
    { front: "إِذَا", back: "If" },
    { front: "بَنِيٌّ", back: "My dear son" },
    { front: "كَبِيرٌ", back: "Big" },
    { front: "خَارِجٌ", back: "Outside" },
    { front: "دَاخِلٌ", back: "Inside" },
    { front: "وَقْتٌ قَلِيلٌ", back: "Short time" },
    { front: "مَكَانٌ", back: "Place" },
    { front: "حَافِلَةٌ", back: "Bus" },
    { front: "حَقِيبَةٌ - حَقَائِبُ", back: "Bag - Bags" },
    { front: "بِسُرْعَةٍ", back: "Quickly" },
    { front: "الْوَقْتُ الْمُنَاسِبُ", back: "The suitable time" },
    { front: "مُنَاسِبٌ", back: "Suitable" },
    { front: "الْجَمِيعُ", back: "Everyone" },
    { front: "سَيَّارَةٌ", back: "Car" },
    { front: "صَابُونٌ", back: "Soap" },
    { front: "سُوقٌ", back: "Market" },
    { front: "بَقَالَةٌ", back: "Grocery store" },
    { front: "خُبْزٌ", back: "Bread" },
    { front: "لِشِرَاءٍ", back: "For purchasing" },
    { front: "طَعَامٌ", back: "Food" },
    { front: "صَغِيرٌ", back: "Small" },
    { front: "بَوَّابَةٌ", back: "Gate" },
    { front: "الْآنَ", back: "Now" },
    { front: "قَاضِيٌ", back: "Judge" },
    { front: "سَارِقٌ", back: "Thief" },
    { front: "نُقُودٌ", back: "Money" },
    { front: "أَيْضًا", back: "Also" },
    { front: "بِجِوَارِ", back: "Next to" },
    { front: "خُرُوجٌ", back: "Exit" },
    { front: "مُبَارَكٌ", back: "Blessed" },
    { front: "مَعَ", back: "With" },
    { front: "أُسْرَةٌ - أُسَرٌ", back: "Family - Families" },
    { front: "صُنْدُوقٌ - صَنَادِيقُ", back: "Box - Boxes" },
    { front: "بَابٌ - أَبْوَابٌ", back: "Door - Doors" },
    { front: "مِفْتَاحٌ - مَفَاتِيحُ", back: "Key - Keys" },
    { front: "شَاهِدٌ - شُهُودٌ", back: "Witness - Witnesses" }
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
