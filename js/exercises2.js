// Step 1: Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const lessonNumber = urlParams.get("lesson");
const exerciseNumber = urlParams.get("exercise");

// Step 2: Update lesson & exercise titles
document.getElementById("lesson-title").textContent = `Lesson ${lessonNumber} Exercise ${exerciseNumber}`;

// Step 3: Define quiz questions
const quizData = {
    "1-1": [
        { 
            question: "Choose the verb: قَرُبَ يَومُ العيدِ.",
            type: "multiple-choice",
            options: ["قَرُبَ", "فَتحَ", "شَبعَ"],
            correct: 0
        },
        { 
            question: "What is the vowel of the عين الفعل in قَرُبَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: فَتَحَ حُسَينٌ بابَ البيتِ.",
            type: "multiple-choice",
            options: ["فَتَحَ", "شَبعَ", "قَربَ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in فَتَحَ?",
            type: "multiple-choice",
            options: ["الفتحة", "الضمة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: شَبِعَ محمودٌ.",
            type: "multiple-choice",
            options: ["شَبِعَ", "فَتحَ", "قَرُبَ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in شَبِعَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "Choose the verb: جَلَسَ عَامِرٌ.",
            type: "multiple-choice",
            options: ["عَامِرٌ", "جَلَسَ"],
            correct: 1
        },
        {
            question: "What is the vowel of the عين الفعل in جَلَسَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 1
        },
        {
            question: "Choose the verb: شَرِبَ خَالِدٌ دَوَاءَهُ.",
            type: "multiple-choice",
            options: ["خَالِدٌ", "دَوَاءَهُ", "شَرِبَ"],
            correct: 2
        },
        {
            question: "What is the vowel of the عين الفعل in شَرِبَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "Choose the verb: عَظُمَ ثَوَابُ الصَّلَاةِ فِي الْجَامِعَةِ.",
            type: "multiple-choice",
            options: ["عَظُمَ", "الْجَامِعَةِ", "ثَوَابُ"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in عَظُمَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "Choose the verb: حَرُمَ عَلَى الْمُسْلِمِ تَرْكُ الصَّلَاةِ.",
            type: "multiple-choice",
            options: ["حَرُمَ", "تَرْكُ", "عَلَى"],
            correct: 0
        },
        {
            question: "What is the vowel of the عين الفعل in حَرُمَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        }
    ],
    "1-2": [
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            type: "multiple-choice",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَ_____ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَـ_____ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ___ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 4
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            type: "multiple-choice",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَ ____ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ____ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 0
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            type: "multiple-choice",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> ____ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 3
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            type: "multiple-choice",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> حَمَلَ خَالِدٌ حَقِيبَتَهُ ____ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 1
        },
        { 
            question: "امْلَأْ الفَرَاغَاتِ التَّالِيَةَ بِالْأَفْعَالِ: ذَهَبَ، خَرَجَ، رَكِبَ، حَمَلَ، عَرَفَ",
            type: "multiple-choice",
            question: "Fill in the following blanks with the appropriate verbs. </br></br> أرَادَ خَالِدٌ أَنْ يُسَافِرَ مِنْ مَكَّةَ ٱلْمُكَرَّمَةِ إِلَى ٱلْمَدِينَةِ ٱلْمُنَوَّرَةِ، وَعَرَفَ أَنَّ ٱلرِّحْلَةَ </br></br> تَبْدَأُ بَعْدَ سَاعَةٍ وَاحِدَةِِ فَذَهَبَ إِلَى ٱلْمَنزِلِ لِيُحَضِّرَ حَقِيبَتَهُ، وَبَعْدَ وَقْتٍ قَلِيلٍ </br></br> حَمَلَ خَالِدٌ حَقِيبَتَهُ وَخَرَجَ مِنَ ٱلْمَنزِلِ. وَعِندَمَا وَصَلَ إِلَىٰ مَكَانِ ٱلْحَافِلَةِ شَاهَدَهَا </br></br> قَدْ بَدَأَتْ تَسِيرُ، فَـ ____ بِسُرْعَةٍ وَقَالَ: ٱلْحَمْدُ لِلَّهِ لَقَدْ وَصَلْتُ فِي ٱلْوَقْتِ ٱلْمُنَاسِبِ. </br></br> Choose the correct verb for the first blank:",
            options: ["ذَهَبَ", "خَرَجَ", "رَكِبَ", "حَمَلَ", "عَرَفَ"],
            correct: 2
        }
    ],
    "1-3": [
        { 
            question: "جَلَسَ</br>Indicate the placement of the letter ج in the word.",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            type: "multiple-choice",
            correct: 0
        },
        { 
            question: "مَرِضَ</br>Indicate the placement of the letter ر in the word.",
            type: "multiple-choice",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            correct: 1
        },
        { 
            question: "رَفَعَ</br>Indicate the placement of the letter ع in the word.",
            type: "multiple-choice",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            correct: 2
        },
        { 
            question: "قَرُبَ</br>Indicate the placement of the letter ر in the word.",
            type: "multiple-choice",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            correct: 1
        },
        { 
            question: "فَرِحَ</br>Indicate the placement of the letter ح in the word.",
            type: "multiple-choice",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            correct: 2
        },
        { 
            question: "قَرَأَ</br>Indicate the placement of the letter ق in the word.",
            type: "multiple-choice",
            options: ["فاء الفعل", "عين الفعل", "لام الفعل"],
            correct: 0
        },
    ],
    "1-4": [
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> عُثْمَانُ الْمَسْجِدَ ____",
            type: "multiple-choice",
            options: ["عَظُمَ", "رَكِبَ", "دَخَلَ", "وَصَلَ"],
            correct: 2
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> خَوْلَةُ الطَّعَامَ  ____",
            type: "multiple-choice",
            options: ["شَرِبَ", "أَكَلَتْ", "دَخَلَ", "خَرَجَ"],
            correct: 1
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> عَبْدُ الْخَالِقِ مِنَ الْمَنْزِلِ ____",
            type: "multiple-choice",
            options: ["خَرَجَ", "رَكِبَ", "أَكَلَتْ", "أَكَلَتْ"],
            correct: 0
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> مَحْمُودٌ قَهْوَةً _____",
            type: "multiple-choice",
            options: ["وَصَلَ", "أَكَلَتْ", "دَخَلَ", "شَرِبَ"],
            correct: 3
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> ثَوَابُ صَلَاةِ الْجَمَاعَةِ _____",
            type: "multiple-choice",
            options: ["شَرِبَ", "أَكَلَتْ", "عَظُمَ", "خَرَجَ"],
            correct: 2
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> ثَوَابُ صَلَاةِ الْجَمَاعَةِ _____",
            type: "multiple-choice",
            options: ["شَرِبَ", "أَكَلَتْ", "دَخَلَ", "عَظُمَ"],
            correct: 3
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> صَالِحٌ سَيَّارَةً _____",
            type: "multiple-choice",
            options: ["شَرِبَ", "رَكِبَ", "دَخَلَ", "خَرَجَ"],
            correct: 1
        },
        { 
            question: "Fill in the following blanks with the appropriate three letter past tense verbs and fully vowelize them. </br></br>اِمْلَأِ الْفَرَاغَاتِ الآتِيَةَ بِالْأَفْعَالِ الْمَاضِي الثُّلَاثِي الْمُنَاسِبِ وَاضْبِطْهُ بِالشَّكْلِ</br></br> الْمُسَافِرُ فِي الْوَقْتِ الْمُنَاسِبِ _____",
            type: "multiple-choice",
            options: ["شَرِبَ", "وَصَلَ", "دَخَلَ", "خَرَجَ"],
            correct: 1
        }
    ],
    "2-1": [
        { 
            question: "Change each of the following sentences to the second-person singular masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدًا مُذَكَّرًا</br></br> هَلْ سَأَلَ ٱلْإِمَامَ؟",
            type: "multiple-choice",
            options: ["سَأَلْتِ", "رَكِبَ", "سَأَلْتُمْ", "سَأَلْتَ"],
            correct: 3
        },
        { 
            question: "Change each of the following sentences to the second-person singular masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدًا مُذَكَّرًا</br></br> هَلْ زَرَعَ ٱلْقَمْحَ؟",
            type: "multiple-choice",
            options: ["زَرَعْتَ	", "زَرَعْتُمْ", "زَرَعْتِ", "زَرَعْتُمَا"],
            correct: 0
        },
        { 
            question: "Change each of the following sentences to the second-person singular masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدًا مُذَكَّرًا</br></br> هَلْ رَكِبَ ٱلْحَافِلَةَ؟",
            type: "multiple-choice",
            options: ["رَكِبْتُمْ", "رَكِبْتُمَا", "رَكِبْتَ", "رَكِبْتِ"],
            correct: 3
        },
        { 
            question: "Change each of the following sentences to the second-person singular masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدًا مُذَكَّرًا</br></br> هَلْ خَرَجَ مِنَ ٱلْمَنْزِلِ؟",
            type: "multiple-choice",
            options: ["خَرَجْتِ", "خَرَجْتَ", "خَرَجْتُمَا", "خَرَجْتُمْ"],
            correct: 1
        },
        { 
            question: "Change each of the following sentences to the second-person singular masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدًا مُذَكَّرًا</br></br> هَلْ رَجَعَ مِنَ ٱلْمَطَارِ؟",
            type: "multiple-choice",
            options: ["رَجَعْتُمْ", "رَجَعْتُمَا", "رَجَعْتِ", "رَجَعْتَ"],
            correct: 3
        }
    ],
    "2-2": [
        { 
            question: "Change each of the following sentences to the second-person singular feminine form.</br></br>خَاطِب بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدَةً مُؤَنَّثَةً</br></br> هَلْ دَخَلَ ٱلْمَكْتَبَةَ؟",
            type: "multiple-choice",
            options: ["دَخَلْتُنَّ", "دَخَلْتِ	", "دَخَلْتَ", "دَخَلْتُمَا"],
            correct: 1
        },
        { 
            question: "Change each of the following sentences to the second-person singular feminine form.</br></br>خَاطِب بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدَةً مُؤَنَّثَةً</br></br> هَلْ فَتَحَ ٱلْبَابَ؟",
            type: "multiple-choice",
            options: ["فَتَحْتُمَا", "فَتَحْتُنَّ", "فَتَحْتِ", "فَتَحْتَ"],
            correct: 2
        },
        { 
            question: "Change each of the following sentences to the second-person singular feminine form.</br></br>خَاطِب بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدَةً مُؤَنَّثَةً</br></br> هَلْ فَهِمَ ٱلْحَدِيثَ؟",
            type: "multiple-choice",
            options: ["فَهِمْتِ", "فَهِمْتُنَّ", "فَهِمْتَ", "فَهِمْتُمَا"],
            correct: 0
        },
        { 
            question: "Change each of the following sentences to the second-person singular feminine form.</br></br>خَاطِب بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدَةً مُؤَنَّثَةً</br></br> هَلْ خَرَجَ مِنَ ٱلْغُرْفَةِ؟",
            type: "multiple-choice",
            options: ["خَرَجْتُنَّ", "خَرَجْتَ", "خَرَجْتُمَا", "خَرَجْتِ"],
            correct: 3
        },
        { 
            question: "Change each of the following sentences to the second-person singular feminine form.</br></br>خَاطِب بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي مُفْرَدَةً مُؤَنَّثَةً</br></br> هَلْ مَسَحَ ٱلشَّعْرَ؟",
            type: "multiple-choice",
            options: ["مَسَحْتُمَا", "مَسَحْتَ", "مَسَحْتِ", "مَسَحْتُنَّ"],
            correct: 2
        }
    ],
    "2-3": [
        { 
            question: "Make each of the following sentences in the dual form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي الْمُثَنَّى</br></br>مَتَى خَرَجَ مِنَ الْبَيْتِ؟",
            type: "multiple-choice",
            options: ["خَرَجْتُمْ", "خَرَجْتُمَا", "خَرَجْتُنَّ", "خَرَجْنَا"],
            correct: 1
        },
        { 
            question: "Make each of the following sentences in the dual form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي الْمُثَنَّى</br></br>مَتَى شَرِبَ الْحَلِيبَ؟",
            type: "multiple-choice",
            options: ["شَرِبْتُنَّ", "شَرِبْنَا", "شَرِبْتُمْ", "شَرِبْتُمَا"],
            correct: 3
        },
        { 
            question: "Make each of the following sentences in the dual form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي الْمُثَنَّى</br></br>مَتَى غَسَلَ الثِّيَابَ؟",
            type: "multiple-choice",
            options: ["غَسَلْتُمَا", "غَسَلْتُمْ", "غَسَلْتُنَّ", "غَسَلْنَا"],
            correct: 0
        },
        { 
            question: "Make each of the following sentences in the dual form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي الْمُثَنَّى</br></br>مَتَى شَكَرَ أَبَاكُمَا؟",
            type: "multiple-choice",
            options: ["شَكَرْنَا", "شَكَرْتُمْ", "شَكَرْتُمَا", "شَكَرْتُنَّ"],
            correct: 2
        },
        { 
            question: "Make each of the following sentences in the dual form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي الْمُثَنَّى</br></br>مَتَى ذَهَبَ إِلَى السُّوقِ؟",
            type: "multiple-choice",
            options: ["ذَهَبْتُمَا", "ذَهَبْتُمْ", "ذَهَبْتُنَّ", "ذَهَبْنَا"],
            correct: 0
        }
    ],
    "2-4": [
        { 
            question: "Make each of the following sentences in the plural feminine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ المُؤَنَّثِ</br></br>أَيْنَ طَبَخَ الطَّعَامَ؟",
            type: "multiple-choice",
            options: ["طَبَخْنَ", "طَبَخْتُمْ", "طَبَخْتُ", "طَبَخْتُنَّ"],
            correct: 3
        },
        { 
            question: "Make each of the following sentences in the plural feminine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ المُؤَنَّثِ</br></br>أَيْنَ وَجَدَ المفاتيحَ؟",
            type: "multiple-choice",
            options: ["وَجَدْتُ", "وَجَدْتُنَّ", "وَجَدْنَ", "وَجَدْتُمْ"],
            correct: 1
        },
        { 
            question: "Make each of the following sentences in the plural feminine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ المُؤَنَّثِ</br></br>أَيْنَ حَزَمَ الحَقَائِبَ؟",
            type: "multiple-choice",
            options: ["حَزَمْتُنَّ", "حَزَمْتُ", "حَزَمْتُمْ", "حَزَمْنَ"],
            correct: 0
        },
        { 
            question: "Make each of the following sentences in the plural feminine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ المُؤَنَّثِ</br></br>أَيْنَ رَكِبَ الحَافِلَةَ؟",
            type: "multiple-choice",
            options: ["رَكِبْتُ", "رَكِبْتُمْ", "رَكِبْتُنَّ", "رَكِبْنَ"],
            correct: 2
        },
        { 
            question: "Make each of the following sentences in the plural feminine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ المُؤَنَّثِ</br></br>أَيْنَ غَسَلَ الثِّيَابَ؟",
            type: "multiple-choice",
            options: ["غَسَلْتُنَّ", "غَسَلْتُمْ", "غَسَلْنَ", "غَسَلْتُ"],
            correct: 0
        }
    ],
    "2-5": [
        { 
            question: "Make each of the following verbs in the 3rd person plural masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ الْمُذَكَّرِ</br></br>مَتَى دَخَلَ مَكَّةَ",
            type: "short-answer",
            correctAnswer: "دَخَلْتُمْ"
        },
        { 
            question: "Make each of the following verbs in the 3rd person plural masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ الْمُذَكَّرِ</br></br>مَتَى ضَحِكَ كَثِيرًا",
            type: "short-answer",
            correctAnswer: "ضَحِكْتُمْ"
        },
        { 
            question: "Make each of the following verbs in the 3rd person plural masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ الْمُذَكَّرِ</br></br>مَتَى فَتَحَ الرِّسَالَةَ",
            type: "short-answer",
            correctAnswer: "فَتَحْتُمْ"
        },
        { 
            question: "Make each of the following verbs in the 3rd person plural masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ الْمُذَكَّرِ</br></br>مَتَى قَرَأَ الْقُرْآنَ",
            type: "short-answer",
            correctAnswer: "قَرَأْتُمْ"
        },
        { 
            question: "Make each of the following verbs in the 3rd person plural masculine form.</br></br>خَاطِبْ بِكُلِّ جُمْلَةٍ مِمَّا يَأْتِي جَمْعَ الْمُذَكَّرِ</br></br>مَتَى خَرَجَ مِنَ الْمَسْجِدِ",
            type: "short-answer",
            correctAnswer: "خَرَجْتُمْ"
        }
    ],
    "2-6": [
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>سَمِعَا سُورَةَ الْبَقَرَةِ</br></br>صَالِحٌ ـــــ سُورَةَ الْبَقَرَةِ",
            type: "short-answer",
            correctAnswer: "سَمِعَ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>سَمِعَا سُورَةَ الْبَقَرَةِ</br></br>لَيْلَى ــــ سُورَةَ الْبَقَرَةِ",
            type: "short-answer",
            correctAnswer: "سَمِعَتْ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>دَخَلَا مِنَ الْبَوَّابَةِ</br></br>الْفَتَى  ــــ مِنَ الْبَوَّابَةِ",
            type: "short-answer",
            correctAnswer: "دَخَلَ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>دَخَلَا مِنَ الْبَوَّابَةِ</br></br>الْفَتَاةُ ــــ مِنَ الْبَوَّابَةِ",
            type: "short-answer",
            correctAnswer: "دَخَلَتْ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>شَعَرَا بِالسُّرُورِ</br></br>نَاصِرٌ ــــ بِالسُّرُورِ",
            type: "short-answer",
            correctAnswer: "شَعَرَ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>شَعَرَا بِالسُّرُورِ</br></br>سُعَادُ ــــ بِالسُّرُورِ",
            type: "short-answer",
            correctAnswer: "شَعَرَتْ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>قَعَدَا عَلَى السَّرِيرِ</br></br>جَابِرٌ ــــ عَلَى السَّرِيرِ",
            type: "short-answer",
            correctAnswer: "قَعَدَ"
        },
        { 
            question: "Fill in the blank with the appropriate verb along with the correct attached pronoun</br></br>اِمْلَأْ الفَرَاغَ فِيمَا يَأْتِي بِالفِعْلِ مَعَ الضَّمِيرِ المُنَاسِبِ</br></br>قَعَدَا عَلَى السَّرِيرِ</br></br>خَدِيجَةُ ـــــ عَلَى السَّرِيرِ",
            type: "short-answer",
            correctAnswer: "قَعَدَتْ"
        }
    ],
    "2-7": [
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>إبْرَاهِيمُ وَعُثْمَانُ <u>حَمَلَ</u> حَقِيبَةً كَبِيرَةً",
            type: "short-answer",
            correctAnswer: "حَمَلَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>عَليٌّ وَخَالِدٌ <u>لَعِبَ</u> فِي الْحَدِيقَةِ",
            type: "short-answer",
            correctAnswer: "لَعِبَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>مُحَمَّدٌ وَمَاجِدٌ <u>رَكِبَ</u> سَيَّارَةَ الْأُجْرَةِ",
            type: "short-answer",
            correctAnswer: "رَكِبَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>أَحْمَدُ وَسَعِيدٌ <u>لَبِسَ</u> مَلَابِسَهُمَا",
            type: "short-answer",
            correctAnswer: "لَبِسَا"
        }
    ],
    "2-8": [
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>فَاطِمَةُ وَسُعَادٌ <u>شَرِبَتْ</u> دَوَاءً وَاحِدًا",
            type: "short-answer",
            correctAnswer: "شَرِبَتَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>زَيْنَبُ وَعَائِشَةُ <u>طَلَبَتْ</u> عُلُومَ اللُّغَةِ",
            type: "short-answer",
            correctAnswer: "طَلَبَتَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>هِنْدٌ وَحَوَّاءُ <u>سَمِعَتْ</u> أَذَانَ الفَجْرِ",
            type: "short-answer",
            correctAnswer: "سَمِعَتَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>خَدِيجَةُ وَسُمَيَّةُ <u>رَكِبَتْ</u> طَائِرَةً صَغِيرَةً",
            type: "short-answer",
            correctAnswer: "رَكِبَتَا"
        }
    ],
    "2-9": [
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>جَابِرٌ وَإِبْرَاهِيمُ <u>ذَهَبَ</u> إِلَى الْجَامِعَةِ",
            type: "short-answer",
            correctAnswer: "ذَهَبَا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>نَائِلَةُ <u>قَرَأَ</u> صُحُفَ الْيَوْمِ",
            type: "short-answer",
            correctAnswer: "قَرَأَتْ"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>الْأَوْلَادُ <u>خَرَجَ</u> مِنَ الْبِقَالَةِ",
            type: "short-answer",
            correctAnswer: "خَرَجُوا"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>خَدِيجَةُ <u>سَمِعَ</u> الْقُرْآنَ الْكَرِيمَ",
            type: "short-answer",
            correctAnswer: "سَمِعَتْ"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>الْبَنَاتُ <u>فَهِمَ</u> الْحَدِيثَ الشَّرِيفَ",
            type: "short-answer",
            correctAnswer: "فَهِمْنَ"
        },
        { 
            question: "Correct the underlined verb</br></br>صَحِّحِ الفِعْلَ الَّذِي تَحْتَهُ خَطٌّ</br></br>عَبْدُ الرَّحْمَنِ <u>شَكَرَتْ</u> بِلَالًا",
            type: "short-answer",
            correctAnswer: "شَكَرَ"
        }
    ],
    "4-1": [
        { 
            question: "What is the vowel of the عين الفعل of the verb in the following sentence: يَزْرَعُ الْفَلَّاحُ الْقَمْحَ",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 1
        },
        { 
            question: "What is the vowel of the عين الفعل of the verb in the following sentence: يَشْعُرُ النَّائِمُ بِالرَّاحَةِ",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        { 
            question: "What is the vowel of the عين الفعل of the verb in the following sentence: يَظْهَرُ الْقِطَارُ مِنْ بَعِيدٍ",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 1
        },
        { 
            question: "What is the vowel of the عين الفعل of the verb in the following sentence: يَخْلُقُ اللَّهُ النَّاسَ لِيَعْبُدُوهُ",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        { 
            question: "What is the vowel of the عين الفعل of the verb in the following sentence: يَحْلِقُ مُحَمَّدٌ شَعْرَ رَأْسِهِ يَوْمَ الْجُمُعَةِ",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        }
    ],
    "4-2": [
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>ذَهَبْنَا إِلَى الْجَامِعَةِ",
            type: "short-answer",
            correctAnswer: "نَذْهَبُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>خَرَجْنَا مِنَ الْمَطْعَمِ جَمِيعًا",
            type: "short-answer",
            correctAnswer: "نَخْرُجُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>دَخَلْنَا مِنَ الْبَوَّابَةِ",
            type: "short-answer",
            correctAnswer: "نَدْخُلُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>ذَبَحْنَا الْأُضْحِيَّةَ بَعْدَ صَلَاةِ الْعِيدِ",
            type: "short-answer",
            correctAnswer: "نَذْبَحُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>نَظَرْنَا إِلَى الطَّيْرِ",
            type: "short-answer",
            correctAnswer: "نَنْظُرُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>أَكَلْنَا الدَّجَاجَ",
            type: "short-answer",
            correctAnswer: "نَأْكُلُ"
        }
    ],
    "4-3": [
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>فَتَحَ عُمَرُ الصَّحِيفَةَ",
            type: "short-answer",
            correctAnswer: "يَفْتَحُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>فَحَصَ الطَّبِيبُ الْمَرِيضَ",
            type: "short-answer",
            correctAnswer: "يَفْحَصُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>بَحَثَ الْمُهَنْدِسُ عَنِ الْخَرِيطَةِ",
            type: "short-answer",
            correctAnswer: "يَبْحَثُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>ذَهَبَ أَحْمَدُ إِلَى الْمَطَارِ",
            type: "short-answer",
            correctAnswer: "يَذْهَبُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>رَفَعَ خَالِدٌ حَقَائِبَ السَّفَرِ عَلَى السَّيَّارَةِ",
            type: "short-answer",
            correctAnswer: "يَرْفَعُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>نَصَحَ إِبْرَاهِيمُ إِخْوَتَهُ",
            type: "short-answer",
            correctAnswer: "يَنْصَحُ"
        }
    ],
    "4-4": [
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>نَصَحَتْ لَيْلَى الْمُسْلِمَاتِ",
            type: "short-answer",
            correctAnswer: "تَنْصَحُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>سَمَحَتِ الْمُمَرِّضَاتُ لِلْمَرِيضِ بِشُرْبِ الشَّايِ",
            type: "short-answer",
            correctAnswer: "تَسْمَحُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>فَعَلَتْ زَيْنَبُ خَيْرًا",
            type: "short-answer",
            correctAnswer: "تَفْعَلُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>ظَهَرَتْ سَيَّارَةٌ مِنْ بَعِيدٍ",
            type: "short-answer",
            correctAnswer: "تَظْهَرُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>فَتَحَتْ آمِنَةُ الصُّنْدُوقَ",
            type: "short-answer",
            correctAnswer: "تَفْتَحُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>مَسَحَتْ حَوَّاءُ النَّافِذَةَ",
            type: "short-answer",
            correctAnswer: "تَمْسَحُ"
        }
    ],
    "4-5": [
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>نَزَلْتُ مِنَ الْحَافِلَةِ",
            type: "short-answer",
            correctAnswer: "أَنْزِلُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>رَجَعْتُ مِنَ الْمَسْجِدِ",
            type: "short-answer",
            correctAnswer: "أَرْجِعُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>غَسَلْتُ مَلَابِسِي",
            type: "short-answer",
            correctAnswer: "أَغْسِلُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>سَبَقْتُ أَصْحَابِي",
            type: "short-answer",
            correctAnswer: "أَسْبِقُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>نَطَقْتُ بِاللُّغَةِ الْعَرَبِيَّةِ",
            type: "short-answer",
            correctAnswer: "أَنْطِقُ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>حَجَزْتُ فِطَاءَرَةَ الْمُسَافِرَةِ يَوْمَ الْجُمُعَةِ",
            type: "short-answer",
            correctAnswer: "أَحْجِزُ"
        }
    ],
    "4-6": [
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>سَعِيدٌ وَعَامِرٌ تَعِبَا كَثِيرًا",
            type: "short-answer",
            correctAnswer: "يَتْعَبَانِ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>مُحَمَّدٌ وَعَبْدُ اللَّهِ سَمِعَا أَذَانَ الْمَغْرِبِ",
            type: "short-answer",
            correctAnswer: "يَسْمَعَانِ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>حَسَّانُ وَسُلَيْمَانُ لَعِبَا بِالْكُرَةِ",
            type: "short-answer",
            correctAnswer: "يَلْعَبَانِ"
        },
        { 
            question: "مُصْطَفَى وَعَبْدُ الرَّحْمَٰنِ شَرِبَا عَصِيرَ الْفَوَاكِه",
            type: "short-answer",
            correctAnswer: "يَشْرَبَانِ"
        },
        { 
            question: "Conjugate the past tense verb into present tense with all vowels:</br>الْفَقِيرُ وَالْمِسْكِينُ فَرِحَا بِالنُّقُودِ",
            type: "short-answer",
            correctAnswer: "يَفْرَحَانِ"
        }
    ],
    "test": [
        { 
            question: "Choose the verb: قَرُبَ يَومُ العيدِ.",
            type: "multiple-choice",
            options: ["قَرُبَ", "فَتحَ", "شَبعَ"],
            correct: 0
        },
        { 
            question: "What is the vowel of the عين الفعل in قَرُبَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 0
        },
        {
            question: "Write the verb from this sentence: فَتَحَ حُسَينٌ بابَ البيتِ.",
            type: "short-answer",
            correctAnswer: "فَتَحَ"
        },
        {
            question: "What is the vowel of the عين الفعل in شَبِعَ?",
            type: "multiple-choice",
            options: ["الضمة", "الفتحة", "الكسرة"],
            correct: 2
        },
        {
            question: "What is the first letter of the verb in حَرُمَ عَلَى الْمُسْلِمِ تَرْكُ الصَّلَاةِ?",
            type: "short-answer",
            correctAnswer: "ح"
        }
    ]
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

    if (question.type === "multiple-choice") {
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
    } else if (question.type === "short-answer") {
        // Generate an input field for short-answer responses
        let input = document.createElement("input");
        input.type = "text";
        input.id = "short-answer";
        input.classList.add("form-control", "mt-2");
        input.placeholder = "Type your answer here";
        input.oninput = () => enableNextButton();

        optionsContainer.appendChild(input);
    }

    // Disable Next button until a selection or input is made
    nextButton.disabled = true;
    prevButton.disabled = currentQuestionIndex === 0;
}

// Enable Next button when an answer is selected
function enableNextButton() {
    let question = selectedQuiz[currentQuestionIndex];
    let nextButton = document.getElementById("next-button");

    if (question.type === "multiple-choice") {
        nextButton.disabled = !document.querySelector('input[name="answer"]:checked');
    } else if (question.type === "short-answer") {
        let input = document.getElementById("short-answer");
        nextButton.disabled = input.value.trim() === "";
    }
}

// Store answer and move to the next question
function nextQuestion() {
    let question = selectedQuiz[currentQuestionIndex];

    let selectedAnswer = null;
    let correctAnswer = null;
    
    if (question.type === "multiple-choice") {
        let selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            selectedAnswer = question.options[parseInt(selectedOption.value)];
            correctAnswer = question.options[question.correct];
        }
    } else if (question.type === "short-answer") {
        let input = document.getElementById("short-answer");
        selectedAnswer = input.value.trim();
        correctAnswer = question.correctAnswer;
    }

    userAnswers.push({ 
        question: question.question, 
        selectedAnswer, 
        correctAnswer 
    });

    if (selectedAnswer === correctAnswer) {
        score++;
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
        resultsHTML += `<h4 class="text-success">بارك الله فيك! مَا شَاءَ اللَّهُ، لَقَدْ أَجْتَزْتَ الامْتِحَانَ بِرَاحَةٍ. 
            <br>May Allah bless you! Masha'Allah, you have passed the exam with ease.</h4>`;
    } else if (score >= selectedQuiz.length / 2) {
        resultsHTML += `<h4 class="text-warning">جزاك الله خيرًا! حَاوِلْ أَنْ تَدْرُسَ أَكْثَرَ لِتَتَحَسَّنَ أَكْثَرَ. 
            <br>Jazak Allah Khair! Try to study more to improve further.</h4>`;
    } else {
        resultsHTML += `<h4 class="text-danger">لَا بَأْسَ، اِسْتَمِرِّ فِي الْمُرَاجَعَةِ وَسَتَتَحَسَّنُ بِإِذْنِ اللَّهِ. 
            <br>No worries, keep reviewing and you will improve, Insha'Allah.</h4>`;
    }

    resultsHTML += `<button class="btn btn-primary mt-3" onclick="location.href='sarfquizzes.html'">Back to Quizzes</button>`;
    
    document.querySelector(".quiz-content").innerHTML = resultsHTML;
}

// Load first question
document.addEventListener("DOMContentLoaded", loadQuestion);
