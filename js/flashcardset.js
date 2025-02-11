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
        { front: "النَّاسُ", back: "The people, mankind" },
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
        { front: "سَيَّارَةٌ - سَيَّارَاتُ", back: "Car - Cars" },
        { front: "مُسَافِرٌ - مُسَافِرُونَ", back: "Traveler - Travelers" },
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
        { front: "سَيَّارَةٌ - سَيَّارَاتُ", back: "Car - Cars" },
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
        { front: "شَعْرٌ", back: "Hair" },
        { front: "مَتَى", back: "When (question)" },
        { front: "يَدْخُلُ - دَخَلَ ", back: "He entered - He enters" },
        { front: "غَسَلَ - يَغْسِلُ", back: "He washed - He washes" },
        { front: "شَكَرَ - يَشْكُرُ", back: "He thanked - He thanks" },
        { front: "حَلِيبٌ", back: "Milk" },
        { front: "مَاءٌ", back: "Water" },
        { front: "قَهْوَةٌ", back: "Coffee" },
        { front: "طَبَخَ - يَطْبُخُ", back: "He cooked - He cooks" },
        { front: "مِفْتَاحٌ - مَفَاتِيحُ", back: "Key - Keys" },
        { front: "أُسْرَةٌ - أُسَرٌ", back: "Family - Families" },
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
        { front: "قَمْحٌ", back: "Wheat" },
        { front: "طَلَبَ - يَطْلُبُ", back: "He requested - He requests" },
        { front: "جَامِعَةٌ", back: "University" },
        { front: "صُحُفٌ", back: "Newspaper" },
        { front: "اليَومَ", back: "Today" },
        { front: "بَقَالَةٌ", back: "Corner store" },
        { front: "aaf - aff", back: "" },
        { front: "aaf - aff", back: "" }
    ],
    "lesson3": [
        { front: "عِنْدَ", back: "At" },
        { front: "قَاضِيٌ", back: "Judge" },
        { front: "أَيْنَ", back: "Where (question)" },
        { front: "وَضَعَ - يَضَعُ", back: "He put / He puts" },
        { front: "نُقُودٌ", back: "Money" },
        { front: "أَخَذَ - يَأْخُذُ", back: "He took / He takes" },
        { front: "سَارِقٌ", back: "Thief" },
        { front: "شَعْرٌ", back: "Hair" },
        { front: "مِنْ", back: "From" },
        { front: "رُزٌّ", back: "Rice" },
        { front: "حَصَلَ - يَحْصُلُ", back: "He got / He gets" },
        { front: "مِفْتَاحٌ - مَفَاتِيحُ", back: "Key - Keys" },
        { front: "بَيْتٌ", back: "House" },
        { front: "صُنْدُوقٌ - صَنَادِيقُ", back: "Box - Boxes" },
        { front: "عَرَفَ - يَعْرِفُ", back: "He recognized / He recognizes" },
        { front: "سَيَّارَةٌ - سَيَّارَاتُ", back: "Car - Cars" },
        { front: "أَمَامَ", back: "In front of" },
        { front: "بِجِوَارِ", back: "Next to" },
        { front: "جَيِّدٌ", back: "Good, well" },
        { front: "شَاهِدٌ - شُهُودٌ", back: "Witness - Witnesses" },
        { front: "كَانَ - يَكُونُ", back: "He was / He is" },
        { front: "أَيْضًا", back: "Too, as well, also" },
        { front: "رَأَى - يَرَى", back: "He saw / He sees" },
        { front: "بَعْدَ", back: "After" },
        { front: "خُرُجٌ", back: "Action of exiting" },
        { front: "ذَلِكَ", back: "That (distant)" },
        { front: "أَوْلَادُ - وَلَدٌ", back: "Boy, child - Boys, children" },
        { front: "فَعَلَ - يَفْعَلُ", back: "He did / He does" },
        { front: "بِجِوَارِ", back: "Next to" },
        { front: "بَحَثَ - يَبْحَثُ", back: "He searched / He searches" },
        { front: "سَأَلَ - يَسْأَلُ", back: "He asked - He asks" },
        { front: "سَمِعَ - يَسْمَعُ", back: "He heard / He hears" },
        { front: "قَمْحٌ", back: "Wheat" },
        { front: "رَجُلٌ - رِجَالٌ", back: "Man - Men" },
        { front: "صَدِيقٌ - أَصْدِقَاءُ", back: "Friend - Friends" },
        { front: "مُوَظَّفٌ", back: "Employee" },
        { front: "بَائِعٌ", back: "Seller" },
        { front: "مُسَافِرٌ - مُسَافِرُونَ", back: "Traveler - Travelers" },
        { front: "شَكَرَ - يَشْكُرُ", back: "He thanked - He thanks" },
        { front: "مُمَرِّضَةٌ - مُمَرِّضَاتُ", back: "Nurse - Nurses" },
        { front: "بَنَاتُ - بِنْتٌ", back: "Girl - Girls" },
        { front: "مُعَلِّمٌ - مُعَلِّمُونَ", back: "Teacher - Teachers" },
        { front: "يَجِدُ - وَجَدَ", back: "He found - He finds" },
        { front: "تَرَكَ - يَتْرُكُ", back: "He left / He leaves" },
        { front: "يَلْزِمُ - لَزِمَ", back: "He clung to - He clings to" },
        { front: "مَوْعِدٌ", back: "Appointment, meeting" },
        { front: "تَعَلَّمَ - يَتَعَلَّمُ", back: "He learned - He learns" },
        { front: "مَنَعَ - يَمْنَعُ", back: "He prevented - He prevents" },
        { front: "نَصَحَ - يَنْصَحُ", back: "He advised - He advises" },
        { front: "مُهَنْدِسٌ - مُهَنْدِسُونَ", back: "Engineer - Engineers" },
        { front: "خَرِيطَةٌ", back: "Map" },
        { front: "يَسْبِقُ - سَبَقَ", back: "He preceded - He precedes" },
        { front: "رَحِمَ - يَرْحَمُ", back: "He was merciful - He is merciful" },
        { front: "يَمْنَحُ - مَنَحَ", back: "He granted - He grants" },
        { front: "نَبَذَ - يَنْبِذُ", back: "He shunned, ostracized</bri>He shuns" },
        { front: "مَرِيضٌ", back: "Sick, patient" },
        { front: "نَفَعَ - يَنْفَعُ", back: "He benefited - He benefits" },
        { front: "أَخٌ - إِخْوَةٌ", back: "Brother - Brothers" },
        { front: "أُخْتٌ - أَخَوَاتُ", back: "Sister - Sisters" },
        { front: "عَالِمٌ - عُلَمَاء", back: "Scholar - Scholars" },
        { front: "طَبِيبٌ", back: "Doctor" },
        { front: "عَامٌ", back: "Year" },
        { front: "هَذَا", back: "This (close)" }
    ],
    "lesson4": [
        { front: "قَالَ - يَقُولُ", back: "He said / He says" },
        { front: "يَوْمٌ - أَيَّامٌ", back: "Day - Days" },
        { front: "سَعِيدٌ", back: "Happy" },
        { front: "فَرِحَ - يَفْرَحُ", back: "He rejoiced / He rejoices" },
        { front: "كُلٌّ", back: "Every" },
        { front: "أَخٌ - إِخْوَةٌ", back: "Brother - Brothers" },
        { front: "أُخْتٌ - أَخَوَاتُ", back: "Sister - Sisters" },
        { front: "مُبَارَكٌ", back: "Blessed" },
        { front: "تَقَبَّلَ - يَتَقَبَّلُ", back: "He accepted / He accepts" },
        { front: "صَوْمٌ - صِيَام", back: "Fast - Fasts" },
        { front: "قَبْلَ", back: "Before" },
        { front: "يُخْرِجُ - أَخْرَجَ", back: "He gave out - He gives out" },
        { front: "شَعَرَ - يَشْعُرُ", back: "He felt / He feels" },
        { front: "فَقِيرٌ - فُقَرَاءُ", back: "Poor person - Poor people" },
        { front: "مِسْكِينٌ - مَسَاكِينُ", back: "The needy - The needy people" },
        { front: "فَرَحٌ", back: "Joy" },
        { front: "سُرُورٌ", back: "Happiness" },
        { front: "زِيَارَةٌ - زِيَارَاتٌ", back: "Visit - Visits" },
        { front: "قَرِيبٌ - أَقَارِبُ", back: "Relative - Relatives" },
        { front: "صَدِيقٌ - أَصْدِقَاءُ", back: "Friend - Friends" },
        { front: "تَعَالَ", back: "Come here, come on" },
        { front: "مَعًا", back: "Together" },
        { front: "جَمِيعََا", back: "All together" },
        { front: "بَعْدَ", back: "After" },
        { front: "فَعَلَ - يَفْعَلُ", back: "He did / He does" },
        { front: "فَلَّاحٌ", back: "Farmer" },
        { front: "قَمْحٌ", back: "Wheat" },
        { front: "رُزٌّ", back: "Rice" },
        { front: "يَزْرَعُ - زَرَعَ", back: "He planted, he plants" },
        { front: "النَّائِمُ", back: "The sleeping person" },
        { front: "رَاحَة", back: "Comfortable, rested" },
        { front: "خَلَقَ - يَخْلُقُ", back: "He created - He creates" },
        { front: "النَّاسُ", back: "The people, mankind" },
        { front: "عَبَدَ - يَعْبُدُ", back: "He worshipped - He worships" },
        { front: "ظَهَرَ - يَظْهَرُ", back: "He appeared - He appears" },
        { front: "قِطَارٌ", back: "Train" },
        { front: "مِنْ بَعِيدٍ", back: "From afar" },
        { front: "حَلَقَ - يَحْلِقُ", back: "He cut - He cuts" },
        { front: "شَعْرٌ", back: "Hair" },
        { front: "ذَهَبَ - يَذْهَبُ", back: "He went / He goes" },
        { front: "جَامِعَةٌ", back: "University" },
        { front: "خَرَجَ - يَخْرُجُ", back: "He went out / He goes out" },
        { front: "مَطْعَمٌ - مَطَاعِم", back: "Restaurant - Restaurants" },
        { front: "يَدْخُلُ - دَخَلَ ", back: "He entered - He enters" },
        { front: "بَوَّابَةٌ", back: "Gate" },
        { front: "ذَبَحَ - يَذْبَحُ", back: "He slaughtered</br>He slaughters" },
        { front: "نَظَرَ - يَنْظُرُ", back: "He looked at - He looks" },
        { front: "طَيْرٌ - طُيُور", back: "Bird - Birds" },
        { front: "أَكَلَ - يَأْكُلُ", back: "He ate / He eats" },
        { front: "دَجَاجَةٌ - دَجَاج", back: "Chicken - Chicken (plural)" },
        { front: "يَفْتَحُ - فَتَحَ", back: "He opened - He opens" },
        { front: "صَحِيفَةٌ", back: "Newspaper" },
        { front: "يَفْصَحُ - فَحَصَ", back: "He examined - He examines" },
        { front: "بَحَثَ - يَبْحَثُ", back: "He searched / He searches" },
        { front: "مُهَنْدِسٌ - مُهَنْدِسُونَ", back: "Engineer - Engineers" },
        { front: "خَرِيطَةٌ", back: "Map" },
        { front: "رَفَعَ - يَرْفَعُ", back: "He lifted - He lifts" },
        { front: "حَقِيبَةٌ - حَقَائِبُ", back: "Bag - Bags" },
        { front: "نَصَحَ - يَنْصَحُ", back: "He advised - He advises" },
        { front: "سَمَحَ - يَسْمَحُ", back: "He allowed - He allows" },
        { front: "مُمَرِّضَةٌ - مُمَرِّضَاتُ", back: "Nurse - Nurses" },
        { front: "مَرِيضٌ", back: "Sick, patient" },
        { front: "شَايٌ", back: "Tea" },
        { front: "خَيْرٌ - خَيْرًا", back: "Good, well" },
        { front: "نَافِذَةٌ", back: "Window" },
        { front: "مَسَحَ - يَمْسَحُ", back: "He wipe - He wipes" },
        { front: "نَزَلَ - يَنْزِلُ", back: "He came down" },
        { front: "رَجَعَ - يَرْجِعُ", back: "He returned / He returns" },
        { front: "غَسَلَ - يَغْسِلُ", back: "He washed - He washes" },
        { front: "يَسْبِقُ - سَبَقَ", back: "He preceded - He precedes" },
        { front: "صَاحِبَةٌ - أَصْحَاب", back: "Companion - Companions" },
        { front: "يَنْطِقُ - نَطَقَ", back: "He spoke - He speaks" },
        { front: "حَجَزَ - يَحْجِزُ", back: "He reserved - He reserves" },
        { front: "طَائِرَةٌ", back: "Airplane" },
        { front: "عَصِيرٌ", back: "Juice" },
        { front: "عَصِيرُ الفَوَاكِه", back: "Fruit juice" },
        { front: "يَتْبَعُ - تَعِبَ", back: "He got tired - He gets tired" },
        { front: "لُغَةٌ - لُغَاتُ", back: "Language - Languages" },
    ],
    "opposites": [
        { front: "كَبِيرٌ", back: "Big" },
        { front: "صَغِيرٌ", back: "Small" },
        { front: "مَرِيضٌ", back: "Sick" },
        { front: "صِحِّيٌّ", back: "Heathy" },
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
        { front: "قَصِيرٌ", back: "Short" },
        { front: "بَعِيدٌ", back: "Far" },
        { front: "قَرِيبٌ", back: "Close" }
    ],
    "verbs": [
        { front: "طَبَخَ - يَطْبُخُ", back: "He cooked - He cooks" },
        { front: "خَلَقَ - يَخْلُقُ", back: "He created - He creates" },
        { front: "عَبَدَ - يَعْبُدُ", back: "He worshipped - He worships" },
        { front: "يَسْبِقُ - سَبَقَ", back: "He preceded - He precedes" },
        { front: "يَتْبَعُ - تَعِبَ", back: "He got tired - He gets tired" },
        { front: "يَنْطِقُ - نَطَقَ", back: "He spoke - He speaks" },
        { front: "حَجَزَ - يَحْجِزُ", back: "He reserved - He reserves" },
        { front: "نَفَعَ - يَنْفَعُ", back: "He benefited - He benefits" },
        { front: "رَفَعَ - يَرْفَعُ", back: "He lifted - He lifts" },
        { front: "نَزَلَ - يَنْزِلُ", back: "He came down" },
        { front: "يَمْنَحُ - مَنَحَ", back: "He granted - He grants" },
        { front: "نَصَحَ - يَنْصَحُ", back: "He advised - He advises" },
        { front: "سَمَحَ - يَسْمَحُ", back: "He allowed - He allows" },
        { front: "نَظَرَ - يَنْظُرُ", back: "He looked at - He looks" },
        { front: "تَعَلَّمَ - يَتَعَلَّمُ", back: "He learned - He learns" },
        { front: "ظَهَرَ - يَظْهَرُ", back: "He appeared - He appears" },
        { front: "يَفْصَحُ - فَحَصَ", back: "He examined - He examines" },
        { front: "يَجِدُ - وَجَدَ", back: "He found - He finds" },
        { front: "خَرَجَ", back: "He exited" },
        { front: "طَلَبَ - يَطْلُبُ", back: "He requested - He requests" },
        { front: "لَعِبَ - يَلْعَبُ", back: "He played - He plays" },
        { front: "شَكَرَ - يَشْكُرُ", back: "He thanked - He thanks" },
        { front: "يَدْخُلُ - دَخَلَ ", back: "He entered - He enters" },
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
