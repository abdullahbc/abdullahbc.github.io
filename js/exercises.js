// Step 1: Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const lessonNumber = urlParams.get("lesson");
const exerciseNumber = urlParams.get("exercise");

// Step 2: Update lesson & exercise titles
document.getElementById("lesson-title").textContent = `Lesson ${lessonNumber}`;
document.getElementById("exercise-title").textContent = `Exercise ${exerciseNumber}`;

// Step 3: Define quiz questions
const quizData = {
    "1-1": [
        { 
            question: "Choose the verb: قَرُبَ يَومُ العيدِ.",
            options: ["قَرُبَ", "فَتحَ", "شَبعَ"],
            correct: 0
        },
        { 
            question: "What is the vowel of the عين الفعل in قَرُبَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: فَتَحَ حُسَينٌ بابَ البيتِ.",
            options: ["فَتَحَ", "شَبعَ", "قَربَ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in فَتَحَ?",
            options: ["الفتحة", "الضمة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: شَبِعَ محمودٌ.",
            options: ["شَبِعَ", "فَتحَ", "قَرُبَ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in شَبِعَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "Choose the verb: جَلَسَ عَامِرٌ.",
            options: ["عَامِرٌ", "جَلَسَ"],
            correct: 1
        },
        {
            question: "What is the vowel of the عين الفعل in جَلَسَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 1
        },
        {
            question: "Choose the verb: شَرِبَ خَالِدٌ دَوَاءَهُ.",
            options: ["خَالِدٌ", "دَوَاءَهُ", "شَرِبَ"],
            correct: 2
        },
        {
            question: "What is the vowel of the عين الفعل in شَرِبَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "Choose the verb: عَظُمَ ثَوَابُ الصَّلَاةِ فِي الْجَامِعَةِ.",
            options: ["عَظُمَ", "الْجَامِعَةِ", "ثَوَابُ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in عَظُمَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: حَرُمَ عَلَى الْمُسْلِمِ تَرْكُ الصَّلَاةِ.",
            options: ["حَرُمَ", "تَرْكُ", "عَلَى"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in حَرُمَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        }
    ],
    "1-2": [
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَ_____ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَـ_____ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ___ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 4
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَ ____ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ____ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 0
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ____ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 3
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> حَمَلَ خَالِدٌ حَقِيبَتَهُ ____ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 1
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> حَمَلَ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 2
        }
    ],
    /** "1-3": [
        { 
            question: "Indicate the لام الفعل of ",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in فَتَحَ?",
            options: ["الفتحة", "الضمة", "الكسرة"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in شَبِعَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "What is the vowel of the عين الفعل in جَلَسَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 1
        },
        {
            question: "What is the vowel of the عين الفعل in شَرِبَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "What is the vowel of the عين الفعل in عَظُمَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in حَرُمَ?",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        }
    ] **/
};

const selectedQuiz = quizData[`${lessonNumber}-${exerciseNumber}`];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Store user answers for review

// Step 4: Load question dynamically
function loadQuestion() {
    const questionContainer = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let question = selectedQuiz[currentQuestionIndex];

    if (!question) {
        document.querySelector(".quiz-content").innerHTML = `<h2>No questions found for this exercise.</h2>`;
        return;
    }

    // Update question text with larger font size
    questionContainer.innerHTML = `<h4>${question.question}</h4>`;
    optionsContainer.innerHTML = "";

    // Generate radio buttons for answer choices
    question.options.forEach((option, index) => {
        let div = document.createElement("div");
        div.classList.add("form-check", "mb-2");

        let input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        input.classList.add("form-check-input");
        input.id = `option${index}`;
        input.onclick = () => enableNextButton();

        let label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.classList.add("form-check-label", "fs-7"); // Increase text size
        label.textContent = option;

        div.appendChild(input);
        div.appendChild(label);
        optionsContainer.appendChild(div);
    });

    // Disable Next button until a selection is made
    nextButton.disabled = true;
    prevButton.disabled = currentQuestionIndex === 0;
}

// Enable Next button when an answer is selected
function enableNextButton() {
    document.getElementById("next-button").disabled = false;
}

// Store answer and move to the next question
function nextQuestion() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        let selectedIndex = parseInt(selectedAnswer.value);
        let question = selectedQuiz[currentQuestionIndex];

        userAnswers.push({ 
            question: question.question, 
            selectedAnswer: question.options[selectedIndex], 
            correctAnswer: question.options[question.correct] 
        });

        if (selectedIndex === question.correct) {
            score++;
        }
    }

    if (currentQuestionIndex < selectedQuiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Move to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        userAnswers.pop(); // Remove last answer when going back
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Show final results with incorrect answers
function showResults() {
    let resultsHTML = `<h2>Your Score: ${score} / ${selectedQuiz.length}</h2>`;

    let incorrectAnswers = userAnswers.filter(answer => answer.selectedAnswer !== answer.correctAnswer);

    if (incorrectAnswers.length > 0) {
        resultsHTML += "<h4>Incorrect Answers:</h4><ul class='list-group'>";
        incorrectAnswers.forEach(answer => {
            resultsHTML += `
                <li class="list-group-item">
                    <strong>Q:</strong> ${answer.question} <br>
                    <span class="text-danger"><strong>Your Answer:</strong> ${answer.selectedAnswer} (Incorrect)</span><br>
                    <span class="text-success"><strong>Correct Answer:</strong> ${answer.correctAnswer}</span>
                </li>`;
        });
        resultsHTML += "</ul>";
    } else {
        resultsHTML += `<h4 class="text-success">Excellent! You got all answers correct.</h4>`;
    }

    // Islamic message based on score
    if (score === selectedQuiz.length) {
        resultsHTML += `
            <h4 class="text-success">بارك الله فيك! مَا شَاءَ اللَّهُ، لَقَدْ أَجْتَزْتَ الامْتِحَانَ بِرَاحَةٍ. 
            <br>May Allah bless you! Masha'Allah, you have passed the exam with ease.</h4>`;
    } else if (score >= selectedQuiz.length / 2) {
        resultsHTML += `
            <h4 class="text-warning">جزاك الله خيرًا! حَاوِلْ أَنْ تَدْرُسَ أَكْثَرَ لِتَتَحَسَّنَ أَكْثَرَ. 
            <br>Jazak Allah Khair! Try to study more to improve further.</h4>`;
    } else {
        resultsHTML += `
            <h4 class="text-danger">لَا بَأْسَ، اِسْتَمِرِّ فِي الْمُرَاجَعَةِ وَسَتَتَحَسَّنُ بِإِذْنِ اللَّهِ. 
            <br>No worries, keep reviewing and you will improve, Insha'Allah.</h4>`;
    }

    // Replace restart button with a back-to-quizzes button
    resultsHTML += `<button class="btn btn-primary mt-3" onclick="location.href='sarfQuizzes.html'">Back to Quizzes</button>`;
    
    document.querySelector(".quiz-content").innerHTML = resultsHTML;
}


// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    loadQuestion();
}

// Load first question
document.addEventListener("DOMContentLoaded", loadQuestion);
