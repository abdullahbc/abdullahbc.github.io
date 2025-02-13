// Function to shuffle the array (for randomizing verb selection)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Define the verbs as objects with their conjugations  
const verbs = [
    {'root': 'يَطْبُخ',
     'conjugations': {'he': 'يَطْبُخ',
      'they_masculine_dual': 'يَطْبُخَانِ',
      'they_masculine': 'يَطْبُخُونَ',
      'she': 'تَطْبُخ',
      'they_feminine_dual': 'تَطْبُخَانِ',
      'they_feminine': 'يَطْبُخْنَ',
      'you_masculine': 'تَطْبُخ',
      'you_masculine_dual': 'تَطْبُخَانِ',
      'you_masculine_plural': 'تَطْبُخُونَ',
      'you_feminine': 'تَطْبُخِينَ',
      'you_feminine_dual': 'تَطْبُخَانِ',
      'you_feminine_plural': 'تَطْبُخْنَ',
      'I': 'أَطْبُخ',
      'we': 'نَطْبُخ'}},
   {'root': 'يَسْكُن',
     'conjugations': {'he': 'يَسْكُن',
      'they_masculine_dual': 'يَسْكُنَانِ',
      'they_masculine': 'يَسْكُنُونَ',
      'she': 'تَسْكُن',
      'they_feminine_dual': 'تَسْكُنَانِ',
      'they_feminine': 'يَسْكُنَّ',
      'you_masculine': 'تَسْكُن',
      'you_masculine_dual': 'تَسْكُنَانِ',
      'you_masculine_plural': 'تَسْكُنُونَ',
      'you_feminine': 'تَسْكُنِينَ',
      'you_feminine_dual': 'تَسْكُنَانِ',
      'you_feminine_plural': 'تَسْكُنَّ',
      'I': 'أَسْكُن',
      'we': 'نَسْكُن'}},
   {'root': 'يَخْلُق',
     'conjugations': {'he': 'يَخْلُق',
      'they_masculine_dual': 'يَخْلُقَانِ',
      'they_masculine': 'يَخْلُقُونَ',
      'she': 'تَخْلُق',
      'they_feminine_dual': 'تَخْلُقَانِ',
      'they_feminine': 'يَخْلُقْنَ',
      'you_masculine': 'تَخْلُق',
      'you_masculine_dual': 'تَخْلُقَانِ',
      'you_masculine_plural': 'تَخْلُقُونَ',
      'you_feminine': 'تَخْلُقِينَ',
      'you_feminine_dual': 'تَخْلُقَانِ',
      'you_feminine_plural': 'تَخْلُقْنَ',
      'I': 'أَخْلُق',
      'we': 'نَخْلُق'}},
   {'root': 'يَعْبُد',
     'conjugations': {'he': 'يَعْبُد',
      'they_masculine_dual': 'يَعْبُدَانِ',
      'they_masculine': 'يَعْبُدُونَ',
      'she': 'تَعْبُد',
      'they_feminine_dual': 'تَعْبُدَانِ',
      'they_feminine': 'يَعْبُدْنَ',
      'you_masculine': 'تَعْبُد',
      'you_masculine_dual': 'تَعْبُدَانِ',
      'you_masculine_plural': 'تَعْبُدُونَ',
      'you_feminine': 'تَعْبُدِينَ',
      'you_feminine_dual': 'تَعْبُدَانِ',
      'you_feminine_plural': 'تَعْبُدْنَ',
      'I': 'أَعْبُد',
      'we': 'نَعْبُد'}},
   {'root': 'يَنْظُر',
     'conjugations': {'he': 'يَنْظُر',
      'they_masculine_dual': 'يَنْظُرَانِ',
      'they_masculine': 'يَنْظُرُونَ',
      'she': 'تَنْظُر',
      'they_feminine_dual': 'تَنْظُرَانِ',
      'they_feminine': 'يَنْظُرْنَ',
      'you_masculine': 'تَنْظُر',
      'you_masculine_dual': 'تَنْظُرَانِ',
      'you_masculine_plural': 'تَنْظُرُونَ',
      'you_feminine': 'تَنْظُرِينَ',
      'you_feminine_dual': 'تَنْظُرَانِ',
      'you_feminine_plural': 'تَنْظُرْنَ',
      'I': 'أَنْظُر',
      'we': 'نَنْظُر'}},
   {'root': 'يَظْهَر',
     'conjugations': {'he': 'يَظْهَر',
      'they_masculine_dual': 'يَظْهَرَانِ',
      'they_masculine': 'يَظْهَرُونَ',
      'she': 'تَظْهَر',
      'they_feminine_dual': 'تَظْهَرَانِ',
      'they_feminine': 'يَظْهَرْنَ',
      'you_masculine': 'تَظْهَر',
      'you_masculine_dual': 'تَظْهَرَانِ',
      'you_masculine_plural': 'تَظْهَرُونَ',
      'you_feminine': 'تَظْهَرِينَ',
      'you_feminine_dual': 'تَظْهَرَانِ',
      'you_feminine_plural': 'تَظْهَرْنَ',
      'I': 'أَظْهَر',
      'we': 'نَظْهَر'}},
   {'root': 'يَجِد',
     'conjugations': {'he': 'يَجِد',
      'they_masculine_dual': 'يَجِدَانِ',
      'they_masculine': 'يَجِدُونَ',
      'she': 'تَجِد',
      'they_feminine_dual': 'تَجِدَانِ',
      'they_feminine': 'يَجِدْنَ',
      'you_masculine': 'تَجِد',
      'you_masculine_dual': 'تَجِدَانِ',
      'you_masculine_plural': 'تَجِدُونَ',
      'you_feminine': 'تَجِدِينَ',
      'you_feminine_dual': 'تَجِدَانِ',
      'you_feminine_plural': 'تَجِدْنَ',
      'I': 'أَجِد',
      'we': 'نَجِد'}},
   {'root': 'يَخْرُج',
     'conjugations': {'he': 'يَخْرُج',
      'they_masculine_dual': 'يَخْرُجَانِ',
      'they_masculine': 'يَخْرُجُونَ',
      'she': 'تَخْرُج',
      'they_feminine_dual': 'تَخْرُجَانِ',
      'they_feminine': 'يَخْرُجْنَ',
      'you_masculine': 'تَخْرُج',
      'you_masculine_dual': 'تَخْرُجَانِ',
      'you_masculine_plural': 'تَخْرُجُونَ',
      'you_feminine': 'تَخْرُجِينَ',
      'you_feminine_dual': 'تَخْرُجَانِ',
      'you_feminine_plural': 'تَخْرُجْنَ',
      'I': 'أَخْرُج',
      'we': 'نَخْرُج'}},
   {'root': 'يَدْخُل',
     'conjugations': {'he': 'يَدْخُل',
      'they_masculine_dual': 'يَدْخُلَانِ',
      'they_masculine': 'يَدْخُلُونَ',
      'she': 'تَدْخُل',
      'they_feminine_dual': 'تَدْخُلَانِ',
      'they_feminine': 'يَدْخُلْنَ',
      'you_masculine': 'تَدْخُل',
      'you_masculine_dual': 'تَدْخُلَانِ',
      'you_masculine_plural': 'تَدْخُلُونَ',
      'you_feminine': 'تَدْخُلِينَ',
      'you_feminine_dual': 'تَدْخُلَانِ',
      'you_feminine_plural': 'تَدْخُلْنَ',
      'I': 'أَدْخُل',
      'we': 'نَدْخُل'}},
   {'root': 'يَجْلِس',
     'conjugations': {'he': 'يَجْلِس',
      'they_masculine_dual': 'يَجْلِسَانِ',
      'they_masculine': 'يَجْلِسُونَ',
      'she': 'تَجْلِس',
      'they_feminine_dual': 'تَجْلِسَانِ',
      'they_feminine': 'يَجْلِسْنَ',
      'you_masculine': 'تَجْلِس',
      'you_masculine_dual': 'تَجْلِسَانِ',
      'you_masculine_plural': 'تَجْلِسُونَ',
      'you_feminine': 'تَجْلِسِينَ',
      'you_feminine_dual': 'تَجْلِسَانِ',
      'you_feminine_plural': 'تَجْلِسْنَ',
      'I': 'أَجْلِس',
      'we': 'نَجْلِس'}},
      {'root': 'فَتَحَ', 'conjugations': {
        'he': 'يَفْتَح',
        'they_masculine_dual': 'يَفْتَحَانِ',
        'they_masculine': 'يَفْتَحُونَ',
        'she': 'تَفْتَح',
        'they_feminine_dual': 'تَفْتَحَانِ',
        'they_feminine': 'يَفْتَحْنَ',
        'you_masculine': 'تَفْتَح',
        'you_masculine_dual': 'تَفْتَحَانِ',
        'you_masculine_plural': 'تَفْتَحُونَ',
        'you_feminine': 'تَفْتَحِينَ',
        'you_feminine_dual': 'تَفْتَحَانِ',
        'you_feminine_plural': 'تَفْتَحْنَ',
        'I': 'أَفْتَح',
        'we': 'نَفْتَح'
      }},
      {'root': 'حَفِظَ', 'conjugations': {
        'he': 'يَحْفَظ',
        'they_masculine_dual': 'يَحْفَظَانِ',
        'they_masculine': 'يَحْفَظُونَ',
        'she': 'تَحْفَظ',
        'they_feminine_dual': 'تَحْفَظَانِ',
        'they_feminine': 'يَحْفَظْنَ',
        'you_masculine': 'تَحْفَظ',
        'you_masculine_dual': 'تَحْفَظَانِ',
        'you_masculine_plural': 'تَحْفَظُونَ',
        'you_feminine': 'تَحْفَظِينَ',
        'you_feminine_dual': 'تَحْفَظَانِ',
        'you_feminine_plural': 'تَحْفَظْنَ',
        'I': 'أَحْفَظ',
        'we': 'نَحْفَظ'
      }},
      {'root': 'سَمِعَ', 'conjugations': {
        'he': 'يَسْمَع',
        'they_masculine_dual': 'يَسْمَعَانِ',
        'they_masculine': 'يَسْمَعُونَ',
        'she': 'تَسْمَع',
        'they_feminine_dual': 'تَسْمَعَانِ',
        'they_feminine': 'يَسْمَعْنَ',
        'you_masculine': 'تَسْمَع',
        'you_masculine_dual': 'تَسْمَعَانِ',
        'you_masculine_plural': 'تَسْمَعُونَ',
        'you_feminine': 'تَسْمَعِينَ',
        'you_feminine_dual': 'تَسْمَعَانِ',
        'you_feminine_plural': 'تَسْمَعْنَ',
        'I': 'أَسْمَع',
        'we': 'نَسْمَع'
      }},
      {'root': 'شَرِبَ', 'conjugations': {
        'he': 'يَشْرَب',
        'they_masculine_dual': 'يَشْرَبَانِ',
        'they_masculine': 'يَشْرَبُونَ',
        'she': 'تَشْرَب',
        'they_feminine_dual': 'تَشْرَبَانِ',
        'they_feminine': 'يَشْرَبْنَ',
        'you_masculine': 'تَشْرَب',
        'you_masculine_dual': 'تَشْرَبَانِ',
        'you_masculine_plural': 'تَشْرَبُونَ',
        'you_feminine': 'تَشْرَبِينَ',
        'you_feminine_dual': 'تَشْرَبَانِ',
        'you_feminine_plural': 'تَشْرَبْنَ',
        'I': 'أَشْرَب',
        'we': 'نَشْرَب'
      }},
      {'root': 'عَلِمَ', 'conjugations': {
        'he': 'يَعْلَم',
        'they_masculine_dual': 'يَعْلَمَانِ',
        'they_masculine': 'يَعْلَمُونَ',
        'she': 'تَعْلَم',
        'they_feminine_dual': 'تَعْلَمَانِ',
        'they_feminine': 'يَعْلَمْنَ',
        'you_masculine': 'تَعْلَم',
        'you_masculine_dual': 'تَعْلَمَانِ',
        'you_masculine_plural': 'تَعْلَمُونَ',
        'you_feminine': 'تَعْلَمِينَ',
        'you_feminine_dual': 'تَعْلَمَانِ',
        'you_feminine_plural': 'تَعْلَمْنَ',
        'I': 'أَعْلَم',
        'we': 'نَعْلَم'
      }},
      {'root': 'لَبِسَ', 'conjugations': {
        'he': 'يَلْبِس',
        'they_masculine_dual': 'يَلْبِسَانِ',
        'they_masculine': 'يَلْبِسُونَ',
        'she': 'تَلْبِس',
        'they_feminine_dual': 'تَلْبِسَانِ',
        'they_feminine': 'يَلْبِسْنَ',
        'you_masculine': 'تَلْبِس',
        'you_masculine_dual': 'تَلْبِسَانِ',
        'you_masculine_plural': 'تَلْبِسُونَ',
        'you_feminine': 'تَلْبِسِينَ',
        'you_feminine_dual': 'تَلْبِسَانِ',
        'you_feminine_plural': 'تَلْبِسْنَ',
        'I': 'أَلْبِس',
        'we': 'نَلْبِس'
      }},
      {'root': 'نَزَلَ', 'conjugations': {
        'he': 'يَنْزِل',
        'they_masculine_dual': 'يَنْزِلَانِ',
        'they_masculine': 'يَنْزِلُونَ',
        'she': 'تَنْزِل',
        'they_feminine_dual': 'تَنْزِلَانِ',
        'they_feminine': 'يَنْزِلْنَ',
        'you_masculine': 'تَنْزِل',
        'you_masculine_dual': 'تَنْزِلَانِ',
        'you_masculine_plural': 'تَنْزِلُونَ',
        'you_feminine': 'تَنْزِلِينَ',
        'you_feminine_dual': 'تَنْزِلَانِ',
        'you_feminine_plural': 'تَنْزِلْنَ',
        'I': 'أَنْزِل',
        'we': 'نَنْزِل'
      }},
      {'root': 'نَصَرَ', 'conjugations': {
        'he': 'يَنْصُر',
        'they_masculine_dual': 'يَنْصُرَانِ',
        'they_masculine': 'يَنْصُرُونَ',
        'she': 'تَنْصُر',
        'they_feminine_dual': 'تَنْصُرَانِ',
        'they_feminine': 'يَنْصُرْنَ',
        'you_masculine': 'تَنْصُر',
        'you_masculine_dual': 'تَنْصُرَانِ',
        'you_masculine_plural': 'تَنْصُرُونَ',
        'you_feminine': 'تَنْصُرِينَ',
        'you_feminine_dual': 'تَنْصُرَانِ',
        'you_feminine_plural': 'تَنْصُرْنَ',
        'I': 'أَنْصُر',
        'we': 'نَنْصُر'
      }}
];


// Shuffle the verbs array to randomize the verb selection
shuffleArray(verbs);

// Select the first verb after shuffle
let selectedVerb = verbs[0];

// Update the DOM to display the conjugations and the verb root
/**function loadVerb() {
    // Clear previous highlights
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("incorrect"));

    // Load verb root
    const verbRootElement = document.getElementById("verb");
    if (verbRootElement) {
        verbRootElement.textContent = `Root verb: ${selectedVerb.root}`;
    }

    // Populate conjugation inputs
    const conjugationInputs = [
        "he", "they_masculine_dual", "they_masculine", "she", 
        "they_feminine_dual", "they_feminine", "you_masculine", 
        "you_masculine_dual", "you_masculine_plural", "you_feminine", 
        "you_feminine_dual", "you_feminine_plural", "I", "we"
    ];

    conjugationInputs.forEach(id => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = "";
        }
    });
}
**/

function loadVerb() {
    // Clear previous highlights
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.classList.remove("incorrect"); // Remove incorrect class if used
        input.style.backgroundColor = ""; // Reset background color
        input.style.color = ""; // Reset text color
    });

    // Load verb root
    const verbRootElement = document.getElementById("verb");
    if (verbRootElement) {
        verbRootElement.textContent = `Root verb: ${selectedVerb.root}`;
    }

    // Populate conjugation inputs
    const conjugationInputs = [
        "he", "they_masculine_dual", "they_masculine", "she", 
        "they_feminine_dual", "they_feminine", "you_masculine", 
        "you_masculine_dual", "you_masculine_plural", "you_feminine", 
        "you_feminine_dual", "you_feminine_plural", "I", "we"
    ];

    conjugationInputs.forEach(id => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = ""; // Clear previous user input
        }
    });
}

function gradeAnswers() {
    console.log("Check Answers button clicked"); // Debugging check
    let allCorrect = true;
    const conjugations = selectedVerb.conjugations;

    Object.keys(conjugations).forEach(key => {
        const inputElement = document.getElementById(key);
        
        if (inputElement) {
            const correctAnswer = conjugations[key];
            const userAnswer = inputElement.value.trim();

            if (userAnswer === correctAnswer) {
                inputElement.style.backgroundColor = "green"; // Correct answers turn green
                inputElement.style.color = "white"; // Improve contrast
            } else {
                inputElement.style.backgroundColor = "red"; // Incorrect answers turn red
                inputElement.style.color = "white";
                allCorrect = false;
            }
        } else {
            console.warn(`Element with ID '${key}' not found`);
        }
    });

    if (allCorrect) {
        setTimeout(() => {
            shuffleArray(verbs);
            selectedVerb = verbs[0];
            loadVerb();
        }, 5000);
    }
}



// Add event listener to the submit button only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", gradeAnswers);

    // Initial verb load
    loadVerb();
});
