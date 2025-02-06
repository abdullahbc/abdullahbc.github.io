/* const questions = [
    {
        sentence: "قَرُبَ يَومُ العيدِ.",
        correctVerb: "قَرُبَ",
        correctVowel: "الضمة",
        verbChoices: ["قَربَ", "فَتحَ", "شَبعَ", "جلسَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "فَتَحَ حُسَينٌ بابَ البيتِ.",
        correctVerb: "فَتَحَ",
        correctVowel: "الفتحة",
        verbChoices: ["فَتحَ", "شَبعَ", "جلسَ", "حَرمَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "شَبِعَ محمودٌ.",
        correctVerb: "شَبِعَ",
        correctVowel: "الكسرة",
        verbChoices: ["شَبعَ", "فَتحَ", "قَربَ", "حَرمَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "جَلَسَ عامرٌ.",
        correctVerb: "جَلَسَ",
        correctVowel: "الفتحة",
        verbChoices: ["جلسَ", "شَبعَ", "حَرمَ", "قَربَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "شَرِبَ خَالِدٌ دَوَاءَهُ.",
        correctVerb: "شَرِبَ",
        correctVowel: "الكسرة",
        verbChoices: ["شَربَ", "حَرمَ", "جلسَ", "فَتحَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "عَظُمَ ثَوَابُ الصَّلَاةِ فِي الْمَسْجِدِ.",
        correctVerb: "عَظُمَ",
        correctVowel: "الضمة",
        verbChoices: ["عَظُمَ", "قَربَ", "جلسَ", "شَبعَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    },
    {
        sentence: "حَرُمَ عَلَى الْمُسْلِمِ تَرْكُ الصَّلاةِ.",
        correctVerb: "حَرُمَ",
        correctVowel: "الضمة",
        verbChoices: ["حَرمَ", "شَبعَ", "قَربَ", "جلسَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");

    questionContainer.innerHTML = `
        <h5><strong>Sentence:</strong> ${question.sentence}</h5>
        <p><strong>Choose the verb:</strong></p>
        ${generateRadioButtons("verb", question.verbChoices)}
        <p><strong>Choose the vowel on the عين الفعل:</strong></p>
        ${generateRadioButtons("vowel", question.vowelChoices)}
    `;
}

function generateRadioButtons(name, choices) {
    return choices.map(choice => {
        return `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${name}" value="${choice}">
                <label class="form-check-label">${choice}</label>
            </div>
        `;
    }).join('');
}

function nextQuestion() {
    const selectedVerb = document.querySelector('input[name="verb"]:checked');
    const selectedVowel = document.querySelector('input[name="vowel"]:checked');

    if (selectedVerb && selectedVowel) {
        if (selectedVerb.value === questions[currentQuestionIndex].correctVerb) {
            score += 1; 
        }
        if (selectedVowel.value === questions[currentQuestionIndex].correctVowel) {
            score += 1; 
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("question-container").innerHTML = `<p><strong>Your final score is ${score} / ${questions.length * 2}</strong></p>`;
            document.getElementById("next-button").disabled = true;

            // Show restart button
            document.getElementById("restart-quiz").classList.remove("d-none");
        }
    } else {
        alert("Please select both answers before proceeding.");
    }
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("next-button").disabled = false;
    document.getElementById("restart-quiz").classList.add("d-none"); // Hide restart button
    loadQuestion();
}

loadQuestion();



loadQuestion();
*/

const questions = [
    {
        sentence: "قَرُبَ يَومُ العيدِ.",
        correctVerb: "قَرُبَ",
        correctVowel: "الضمة",
        verbChoices: ["قَربَ", "فَتحَ", "شَبعَ", "جلسَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "فَتَحَ حُسَينٌ بابَ البيتِ.",
        correctVerb: "فَتَحَ",
        correctVowel: "الفتحة",
        verbChoices: ["فَتحَ", "شَبعَ", "جلسَ", "حَرمَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "شَبِعَ محمودٌ.",
        correctVerb: "شَبِعَ",
        correctVowel: "الكسرة",
        verbChoices: ["شَبعَ", "فَتحَ", "قَربَ", "حَرمَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "جَلَسَ عامرٌ.",
        correctVerb: "جَلَسَ",
        correctVowel: "الفتحة",
        verbChoices: ["جلسَ", "شَبعَ", "حَرمَ", "قَربَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "شَرِبَ خَالِدٌ دَوَاءَهُ.",
        correctVerb: "شَرِبَ",
        correctVowel: "الكسرة",
        verbChoices: ["شَربَ", "حَرمَ", "جلسَ", "فَتحَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "عَظُمَ ثَوَابُ الصَّلَاةِ فِي الْمَسْجِدِ.",
        correctVerb: "عَظُمَ",
        correctVowel: "الضمة",
        verbChoices: ["عَظُمَ", "قَربَ", "جلسَ", "شَبعَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "حَرُمَ عَلَى الْمُسْلِمِ تَرْكُ الصَّلاةِ.",
        correctVerb: "حَرُمَ",
        correctVowel: "الضمة",
        verbChoices: ["حَرمَ", "شَبعَ", "قَربَ", "جلسَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "أَرَادَ خَالِدٌ أَنْ يُسَافِرَ مِن مَكَّةَ الْمُكَرَّمَة إِلَى الْمَدِينَةِ المُنَوَّرَة وَ ___ أَنَّ الرَّحْلَةَ تَبْدَأُ بَعْدَ ساعَةٍ وَاحِدَةٍ",
        correctVerb: "عَرَفَ",
        correctVowel: "الفتحة",
        verbChoices: ["عَرفَ", "رَكِبَ", "خَرَجَ", "ذَهَبَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "إِمْلَا الْفَرَاغَاتِ الآتِيَةَ بِالأَفْعَالِ : ذَهَبَ ، خَرَجَ ، رَكِبَ ، حَمَلَ ، عرف"
    },
    {
        sentence: "فَـ ____ إلى المنزل لِيُحْضِرَ حَقِيبَتَهُ ، وَبَعْدَ وَقَتِ قليل ____ خَالِدٌ حَقِيبَتَهُ و _____ مِنَ الْمَنزِلِ",
        correctVerb: "ذَهَبَ ، حَمَلَ ، خَرَجَ",
        correctVowel: "الضمة",
        verbChoices: ["ذَهَبَ", "حَمَلَ", "خَرَجَ", "عَرفَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "فَـ ____ إِلَى الْمَنزِلِ لِيُحْضِرَ حَقِيبَتَهُ..."
    },
    {
        sentence: "وَعِنْدَمَا وَصَلَ إِلَى مَكَانِ الْحَافِلَةِ شَاهَدَهَا قَدْ بَدَأَتْ تَسِيرُ ، فَـ ____ بِسُرْعَةٍ وَقَالَ: الْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي الْوَقْتِ الْمُناسِب",
        correctVerb: "رَكِبَ",
        correctVowel: "الفتحة",
        verbChoices: ["رَكِبَ", "حَرمَ", "ذَهَبَ", "شَرِبَ"],
        vowelChoices: ["الفتحة", "الضمة", "الكسرة", "السكون"],
        instructions: "فَـ ____ بِسُرْعَةٍ وَقَالَ..."
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const instructionsContainer = document.getElementById("instructions-container");

    instructionsContainer.innerHTML = `<p><strong>Instructions:</strong> ${question.instructions}</p>`;

    questionContainer.innerHTML = `
        <p><strong>Sentence:</strong> ${question.sentence}</p>
        <p><strong>Choose the verb:</strong></p>
        ${generateRadioButtons("verb", question.verbChoices)}
        <p><strong>Choose the vowel on the عين الفعل:</strong></p>
        ${generateRadioButtons("vowel", question.vowelChoices)}
    `;
}

function generateRadioButtons(name, choices) {
    return choices.map(choice => {
        return `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${name}" value="${choice}">
                <label class="form-check-label">${choice}</label>
            </div>
        `;
    }).join('');
}

function nextQuestion() {
    const selectedVerb = document.querySelector('input[name="verb"]:checked');
    const selectedVowel = document.querySelector('input[name="vowel"]:checked');

    if (selectedVerb && selectedVowel) {
        if (selectedVerb.value === questions[currentQuestionIndex].correctVerb) {
            score += 1; 
        }
        if (selectedVowel.value === questions[currentQuestionIndex].correctVowel) {
            score += 1; 
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("question-container").innerHTML = `<p><strong>Your final score is ${score} / ${questions.length * 2}</strong></p>`;
            document.getElementById("next-button").disabled = true;

            // Show restart button
            document.getElementById("restart-quiz").classList.remove("d-none");
        }
    } else {
        alert("Please select both answers before proceeding.");
    }
}

function checkAnswer() {
    const selectedVerb = document.querySelector('input[name="verb"]:checked');
    const selectedVowel = document.querySelector('input[name="vowel"]:checked');

    if (selectedVerb && selectedVowel) {
        const correctVerb = questions[currentQuestionIndex].correctVerb;
        const correctVowel = questions[currentQuestionIndex].correctVowel;
        const verbColor = selectedVerb.value === correctVerb ? 'green' : 'red';
        const vowelColor = selectedVowel.value === correctVowel ? 'green' : 'red';

        selectedVerb.parentElement.style.backgroundColor = verbColor;
        selectedVowel.parentElement.style.backgroundColor = vowelColor;

        if (selectedVerb.value === correctVerb && selectedVowel.value === correctVowel) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("question-container").innerHTML = `<p>Your score: ${score}/${questions.length}</p>`;
        }
    }
}

window.onload = loadQuestion;
