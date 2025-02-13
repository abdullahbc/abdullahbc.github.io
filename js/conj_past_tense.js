// Function to shuffle the array (for randomizing verb selection)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Define the verbs as objects with their conjugations
const verbs = [
  {
    "root": "طَبَخَ",
    "conjugations": {
      "he": "طَبَخَ",
      "they_masculine_dual": "طَبَخَا",
      "they_masculine": "طَبَخُوا",
      "she": "طَبَخَتْ",
      "they_feminine_dual": "طَبَخَتَا",
      "they_feminine": "طَبَخْنَ",
      "you_masculine": "طَبَخْتَ",
      "you_masculine_dual": "طَبَخْتُمَا",
      "you_masculine_plural": "طَبَخْتُمْ",
      "you_feminine": "طَبَخْتِ",
      "you_feminine_dual": "طَبَخْتُمَا",
      "you_feminine_plural": "طَبَخْتُنَّ",
      "I": "طَبَخْتُ",
      "we": "طَبَخْنَا"
    }
  },  
  {
    "root": "سَكَنَ",
    "conjugations": {
      "he": "سَكَنَ",
      "they_masculine_dual": "سَكَنَا",
      "they_masculine": "سَكَنُوا",
      "she": "سَكَنَتْ",
      "they_feminine_dual": "سَكَنَتَا",
      "they_feminine": "سَكَنْنَ",
      "you_masculine": "سَكَنْتَ",
      "you_masculine_dual": "سَكَنْتُمَا",
      "you_masculine_plural": "سَكَنْتُمْ",
      "you_feminine": "سَكَنْتِ",
      "you_feminine_dual": "سَكَنْتُمَا",
      "you_feminine_plural": "سَكَنْتُنَّ",
      "I": "سَكَنْتُ",
      "we": "سَكَنْنَا"
    }
  },  
  {
    "root": "خَلَقَ",
    "conjugations": {
      "he": "خَلَقَ",
      "they_masculine_dual": "خَلَقَا",
      "they_masculine": "خَلَقُوا",
      "she": "خَلَقَتْ",
      "they_feminine_dual": "خَلَقَتَا",
      "they_feminine": "خَلَقْنَ",
      "you_masculine": "خَلَقْتَ",
      "you_masculine_dual": "خَلَقْتُمَا",
      "you_masculine_plural": "خَلَقْتُمْ",
      "you_feminine": "خَلَقْتِ",
      "you_feminine_dual": "خَلَقْتُمَا",
      "you_feminine_plural": "خَلَقْتُنَّ",
      "I": "خَلَقْتُ",
      "we": "خَلَقْنَا"
    }
  },
    {
      "root": "عَبَدَ",
      "conjugations": {
        "he": "عَبَدَ",
        "they_masculine_dual": "عَبَدَا",
        "they_masculine": "عَبَدُوا",
        "she": "عَبَدَتْ",
        "they_feminine_dual": "عَبَدَتَا",
        "they_feminine": "عَبَدْنَ",
        "you_masculine": "عَبَدْتَ",
        "you_masculine_dual": "عَبَدْتُمَا",
        "you_masculine_plural": "عَبَدْتُمْ",
        "you_feminine": "عَبَدْتِ",
        "you_feminine_dual": "عَبَدْتُمَا",
        "you_feminine_plural": "عَبَدْتُنَّ",
        "I": "عَبَدْتُ",
        "we": "عَبَدْنَا"
      }
    },
    {
      "root": "نَظَرَ",
      "conjugations": {
        "he": "نَظَرَ",
        "they_masculine_dual": "نَظَرَا",
        "they_masculine": "نَظَرُوا",
        "she": "نَظَرَتْ",
        "they_feminine_dual": "نَظَرَتَا",
        "they_feminine": "نَظَرْنَ",
        "you_masculine": "نَظَرْتَ",
        "you_masculine_dual": "نَظَرْتُمَا",
        "you_masculine_plural": "نَظَرْتُمْ",
        "you_feminine": "نَظَرْتِ",
        "you_feminine_dual": "نَظَرْتُمَا",
        "you_feminine_plural": "نَظَرْتُنَّ",
        "I": "نَظَرْتُ",
        "we": "نَظَرْنَا"
      }
    },  
    {
      "root": "ظَهَرَ",
      "conjugations": {
        "he": "ظَهَرَ",
        "they_masculine_dual": "ظَهَرَا",
        "they_masculine": "ظَهَرُوا",
        "she": "ظَهَرَتْ",
        "they_feminine_dual": "ظَهَرَتَا",
        "they_feminine": "ظَهَرْنَ",
        "you_masculine": "ظَهَرْتَ",
        "you_masculine_dual": "ظَهَرْتُمَا",
        "you_masculine_plural": "ظَهَرْتُمْ",
        "you_feminine": "ظَهَرْتِ",
        "you_feminine_dual": "ظَهَرْتُمَا",
        "you_feminine_plural": "ظَهَرْتُنَّ",
        "I": "ظَهَرْتُ",
        "we": "ظَهَرْنَا"
      }
    },
    {
      "root": "وَجَدَ",
      "conjugations": {
        "he": "وَجَدَ",
        "they_masculine_dual": "وَجَدَا",
        "they_masculine": "وَجَدُوا",
        "she": "وَجَدَتْ",
        "they_feminine_dual": "وَجَدَتَا",
        "they_feminine": "وَجَدْنَ",
        "you_masculine": "وَجَدْتَ",
        "you_masculine_dual": "وَجَدْتُمَا",
        "you_masculine_plural": "وَجَدْتُمْ",
        "you_feminine": "وَجَدْتِ",
        "you_feminine_dual": "وَجَدْتُمَا",
        "you_feminine_plural": "وَجَدْتُنَّ",
        "I": "وَجَدْتُ",
        "we": "وَجَدْنَا"
      }
    },
    {
      "root": "خَرَجَ",
      "conjugations": {
        "he": "خَرَجَ",
        "they_masculine_dual": "خَرَجَا",
        "they_masculine": "خَرَجُوا",
        "she": "خَرَجَتْ",
        "they_feminine_dual": "خَرَجَتَا",
        "they_feminine": "خَرَجْنَ",
        "you_masculine": "خَرَجْتَ",
        "you_masculine_dual": "خَرَجْتُمَا",
        "you_masculine_plural": "خَرَجْتُمْ",
        "you_feminine": "خَرَجْتِ",
        "you_feminine_dual": "خَرَجْتُمَا",
        "you_feminine_plural": "خَرَجْتُنَّ",
        "I": "خَرَجْتُ",
        "we": "خَرَجْنَا"
      }
    },
    {
      "root": "دَخَلَ",
      "conjugations": {
        "he": "دَخَلَ",
        "they_masculine_dual": "دَخَلَا",
        "they_masculine": "دَخَلُوا",
        "she": "دَخَلَتْ",
        "they_feminine_dual": "دَخَلَتَا",
        "they_feminine": "دَخَلْنَ",
        "you_masculine": "دَخَلْتَ",
        "you_masculine_dual": "دَخَلْتُمَا",
        "you_masculine_plural": "دَخَلْتُمْ",
        "you_feminine": "دَخَلْتِ",
        "you_feminine_dual": "دَخَلْتُمَا",
        "you_feminine_plural": "دَخَلْتُنَّ",
        "I": "دَخَلْتُ",
        "we": "دَخَلْنَا"
      }
    },
    {
      "root": "جَلَسَ",
      "conjugations": {
        "he": "جَلَسَ",
        "they_masculine_dual": "جَلَسَا",
        "they_masculine": "جَلَسُوا",
        "she": "جَلَسَتْ",
        "they_feminine_dual": "جَلَسَتَا",
        "they_feminine": "جَلَسْنَ",
        "you_masculine": "جَلَسْتَ",
        "you_masculine_dual": "جَلَسْتُمَا",
        "you_masculine_plural": "جَلَسْتُمْ",
        "you_feminine": "جَلَسْتِ",
        "you_feminine_dual": "جَلَسْتُمَا",
        "you_feminine_plural": "جَلَسْتُنَّ",
        "I": "جَلَسْتُ",
        "we": "جَلَسْنَا"
      }
    },
    {
      "root": "رَجَعَ",
      "conjugations": {
        "he": "رَجَعَ",
        "they_masculine_dual": "رَجَعَا",
        "they_masculine": "رَجَعُوا",
        "she": "رَجَعَتْ",
        "they_feminine_dual": "رَجَعَتَا",
        "they_feminine": "رَجَعْنَ",
        "you_masculine": "رَجَعْتَ",
        "you_masculine_dual": "رَجَعْتُمَا",
        "you_masculine_plural": "رَجَعْتُمْ",
        "you_feminine": "رَجَعْتِ",
        "you_feminine_dual": "رَجَعْتُمَا",
        "you_feminine_plural": "رَجَعْتُنَّ",
        "I": "رَجَعْتُ",
        "we": "رَجَعْنَا"
      }
    },
      {
        "root": "فَتَحَ",
        "conjugations": {
          "he": "فَتَحَ",
          "they_masculine_dual": "فَتَحَا",
          "they_masculine": "فَتَحُوا",
          "she": "فَتَحَتْ",
          "they_feminine_dual": "فَتَحَتَا",
          "they_feminine": "فَتَحْنَ",
          "you_masculine": "فَتَحْتَ",
          "you_masculine_dual": "فَتَحْتُمَا",
          "you_masculine_plural": "فَتَحْتُمْ",
          "you_feminine": "فَتَحْتِ",
          "you_feminine_dual": "فَتَحْتُمَا",
          "you_feminine_plural": "فَتَحْتُنَّ",
          "I": "فَتَحْتُ",
          "we": "فَتَحْنَا"
        }
      },
      {
        "root": "حَفِظَ",
        "conjugations": {
          "he": "حَفِظَ",
          "they_masculine_dual": "حَفِظَا",
          "they_masculine": "حَفِظُوا",
          "she": "حَفِظَتْ",
          "they_feminine_dual": "حَفِظَتَا",
          "they_feminine": "حَفِظْنَ",
          "you_masculine": "حَفِظْتَ",
          "you_masculine_dual": "حَفِظْتُمَا",
          "you_masculine_plural": "حَفِظْتُمْ",
          "you_feminine": "حَفِظْتِ",
          "you_feminine_dual": "حَفِظْتُمَا",
          "you_feminine_plural": "حَفِظْتُنَّ",
          "I": "حَفِظْتُ",
          "we": "حَفِظْنَا"
        }
      },
        {
          "root": "سَمِعَ",
          "conjugations": {
            "he": "سَمِعَ",
            "they_masculine_dual": "سَمِعَا",
            "they_masculine": "سَمِعُوا",
            "she": "سَمِعَتْ",
            "they_feminine_dual": "سَمِعَتَا",
            "they_feminine": "سَمِعْنَ",
            "you_masculine": "سَمِعْتَ",
            "you_masculine_dual": "سَمِعْتُمَا",
            "you_masculine_plural": "سَمِعْتُمْ",
            "you_feminine": "سَمِعْتِ",
            "you_feminine_dual": "سَمِعْتُمَا",
            "you_feminine_plural": "سَمِعْتُنَّ",
            "I": "سَمِعْتُ",
            "we": "سَمِعْنَا"
          }
        },
        {
          "root": "شَرِبَ",
          "conjugations": {
            "he": "شَرِبَ",
            "they_masculine_dual": "شَرِبَا",
            "they_masculine": "شَرِبُوا",
            "she": "شَرِبَتْ",
            "they_feminine_dual": "شَرِبَتَا",
            "they_feminine": "شَرِبْنَ",
            "you_masculine": "شَرِبْتَ",
            "you_masculine_dual": "شَرِبْتُمَا",
            "you_masculine_plural": "شَرِبْتُمْ",
            "you_feminine": "شَرِبْتِ",
            "you_feminine_dual": "شَرِبْتُمَا",
            "you_feminine_plural": "شَرِبْتُنَّ",
            "I": "شَرِبْتُ",
            "we": "شَرِبْنَا"
          }
        },
        {
          "root": "عَلِمَ",
          "conjugations": {
            "he": "عَلِمَ",
            "they_masculine_dual": "عَلِمَا",
            "they_masculine": "عَلِمُوا",
            "she": "عَلِمَتْ",
            "they_feminine_dual": "عَلِمَتَا",
            "they_feminine": "عَلِمْنَ",
            "you_masculine": "عَلِمْتَ",
            "you_masculine_dual": "عَلِمْتُمَا",
            "you_masculine_plural": "عَلِمْتُمْ",
            "you_feminine": "عَلِمْتِ",
            "you_feminine_dual": "عَلِمْتُمَا",
            "you_feminine_plural": "عَلِمْتُنَّ",
            "I": "عَلِمْتُ",
            "we": "عَلِمْنَا"
          }
        },
        {
          "root": "لَبِسَ",
          "conjugations": {
            "he": "لَبِسَ",
            "they_masculine_dual": "لَبِسَا",
            "they_masculine": "لَبِسُوا",
            "she": "لَبِسَتْ",
            "they_feminine_dual": "لَبِسَتَا",
            "they_feminine": "لَبِسْنَ",
            "you_masculine": "لَبِسْتَ",
            "you_masculine_dual": "لَبِسْتُمَا",
            "you_masculine_plural": "لَبِسْتُمْ",
            "you_feminine": "لَبِسْتِ",
            "you_feminine_dual": "لَبِسْتُمَا",
            "you_feminine_plural": "لَبِسْتُنَّ",
            "I": "لَبِسْتُ",
            "we": "لَبِسْنَا"
          }
        },
        {
          "root": "نَزَلَ",
          "conjugations": {
            "he": "نَزَلَ",
            "they_masculine_dual": "نَزَلَا",
            "they_masculine": "نَزَلُوا",
            "she": "نَزَلَتْ",
            "they_feminine_dual": "نَزَلَتَا",
            "they_feminine": "نَزَلْنَ",
            "you_masculine": "نَزَلْتَ",
            "you_masculine_dual": "نَزَلْتُمَا",
            "you_masculine_plural": "نَزَلْتُمْ",
            "you_feminine": "نَزَلْتِ",
            "you_feminine_dual": "نَزَلْتُمَا",
            "you_feminine_plural": "نَزَلْتُنَّ",
            "I": "نَزَلْتُ",
            "we": "نَزَلْنَا"
          }
        },
        {
          "root": "نَصَرَ",
          "conjugations": {
            "he": "نَصَرَ",
            "they_masculine_dual": "نَصَرَا",
            "they_masculine": "نَصَرُوا",
            "she": "نَصَرَتْ",
            "they_feminine_dual": "نَصَرَتَا",
            "they_feminine": "نَصَرْنَ",
            "you_masculine": "نَصَرْتَ",
            "you_masculine_dual": "نَصَرْتُمَا",
            "you_masculine_plural": "نَصَرْتُمْ",
            "you_feminine": "نَصَرْتِ",
            "you_feminine_dual": "نَصَرْتُمَا",
            "you_feminine_plural": "نَصَرْتُنَّ",
            "I": "نَصَرْتُ",
            "we": "نَصَرْنَا"
          }
        },
        {
          "root": "كَسَرَ",
          "conjugations": {
            "he": "كَسَرَ",
            "they_masculine_dual": "كَسَرَا",
            "they_masculine": "كَسَرُوا",
            "she": "كَسَرَتْ",
            "they_feminine_dual": "كَسَرَتَا",
            "they_feminine": "كَسَرْنَ",
            "you_masculine": "كَسَرْتَ",
            "you_masculine_dual": "كَسَرْتُمَا",
            "you_masculine_plural": "كَسَرْتُمْ",
            "you_feminine": "كَسَرْتِ",
            "you_feminine_dual": "كَسَرْتُمَا",
            "you_feminine_plural": "كَسَرْتُنَّ",
            "I": "كَسَرْتُ",
            "we": "كَسَرْنَا"
          }
        },
        {
          "root": "قَتَلَ",
          "conjugations": {
            "he": "قَتَلَ",
            "they_masculine_dual": "قَتَلَا",
            "they_masculine": "قَتَلُوا",
            "she": "قَتَلَتْ",
            "they_feminine_dual": "قَتَلَتَا",
            "they_feminine": "قَتَلْنَ",
            "you_masculine": "قَتَلْتَ",
            "you_masculine_dual": "قَتَلْتُمَا",
            "you_masculine_plural": "قَتَلْتُمْ",
            "you_feminine": "قَتَلْتِ",
            "you_feminine_dual": "قَتَلْتُمَا",
            "you_feminine_plural": "قَتَلْتُنَّ",
            "I": "قَتَلْتُ",
            "we": "قَتَلْنَا"
          }
        },
   /** {'root': 'دَرَسَ',
    'conjugations': {'he': 'دَرَس',
     'they_masculine_dual': 'دَرَسا',
     'they_masculine': 'دَرَسوا',
     'she': 'دَرَستْ',
     'they_feminine_dual': 'دَرَستَا',
     'they_feminine': 'دَرَسنَ',
     'you_masculine': 'دَرَستَ',
     'you_masculine_dual': 'دَرَستُمَا',
     'you_masculine_plural': 'دَرَستُمْ',
     'you_feminine': 'دَرَستِ',
     'you_feminine_dual': 'دَرَستُمَا',
     'you_feminine_plural': 'دَرَستُنَّ',
     'I': 'دَرَستُ',
     'we': 'دَرَسنَا'}},
   {'root': 'ضَرَبَ',
    'conjugations': {'he': 'ضَرَب',
     'they_masculine_dual': 'ضَرَبا',
     'they_masculine': 'ضَرَبوا',
     'she': 'ضَرَبتْ',
     'they_feminine_dual': 'ضَرَبتَا',
     'they_feminine': 'ضَرَبنَ',
     'you_masculine': 'ضَرَبتَ',
     'you_masculine_dual': 'ضَرَبتُمَا',
     'you_masculine_plural': 'ضَرَبتُمْ',
     'you_feminine': 'ضَرَبتِ',
     'you_feminine_dual': 'ضَرَبتُمَا',
     'you_feminine_plural': 'ضَرَبتُنَّ',
     'I': 'ضَرَبتُ',
     'we': 'ضَرَبنَا'}},
   {'root': 'قَعَدَ',
    'conjugations': {'he': 'قَعَد',
     'they_masculine_dual': 'قَعَدا',
     'they_masculine': 'قَعَدوا',
     'she': 'قَعَدتْ',
     'they_feminine_dual': 'قَعَدتَا',
     'they_feminine': 'قَعَدنَ',
     'you_masculine': 'قَعَدتَ',
     'you_masculine_dual': 'قَعَدتُمَا',
     'you_masculine_plural': 'قَعَدتُمْ',
     'you_feminine': 'قَعَدتِ',
     'you_feminine_dual': 'قَعَدتُمَا',
     'you_feminine_plural': 'قَعَدتُنَّ',
     'I': 'قَعَدتُ',
     'we': 'قَعَدنَا'}},
   {'root': 'حَكَمَ',
    'conjugations': {'he': 'حَكَم',
     'they_masculine_dual': 'حَكَما',
     'they_masculine': 'حَكَموا',
     'she': 'حَكَمتْ',
     'they_feminine_dual': 'حَكَمتَا',
     'they_feminine': 'حَكَمنَ',
     'you_masculine': 'حَكَمتَ',
     'you_masculine_dual': 'حَكَمتُمَا',
     'you_masculine_plural': 'حَكَمتُمْ',
     'you_feminine': 'حَكَمتِ',
     'you_feminine_dual': 'حَكَمتُمَا',
     'you_feminine_plural': 'حَكَمتُنَّ',
     'I': 'حَكَمتُ',
     'we': 'حَكَمنَا'}},
   {'root': 'حَمَلَ',
    'conjugations': {'he': 'حَمَل',
     'they_masculine_dual': 'حَمَلا',
     'they_masculine': 'حَمَلوا',
     'she': 'حَمَلتْ',
     'they_feminine_dual': 'حَمَلتَا',
     'they_feminine': 'حَمَلنَ',
     'you_masculine': 'حَمَلتَ',
     'you_masculine_dual': 'حَمَلتُمَا',
     'you_masculine_plural': 'حَمَلتُمْ',
     'you_feminine': 'حَمَلتِ',
     'you_feminine_dual': 'حَمَلتُمَا',
     'you_feminine_plural': 'حَمَلتُنَّ',
     'I': 'حَمَلتُ',
     'we': 'حَمَلنَا'}},
   {'root': 'رَكِبَ',
    'conjugations': {'he': 'رَكِب',
     'they_masculine_dual': 'رَكِبا',
     'they_masculine': 'رَكِبوا',
     'she': 'رَكِبتْ',
     'they_feminine_dual': 'رَكِبتَا',
     'they_feminine': 'رَكِبنَ',
     'you_masculine': 'رَكِبتَ',
     'you_masculine_dual': 'رَكِبتُمَا',
     'you_masculine_plural': 'رَكِبتُمْ',
     'you_feminine': 'رَكِبتِ',
     'you_feminine_dual': 'رَكِبتُمَا',
     'you_feminine_plural': 'رَكِبتُنَّ',
     'I': 'رَكِبتُ',
     'we': 'رَكِبنَا'}},
   {'root': 'أَكَلَ',
    'conjugations': {'he': 'أَكَل',
     'they_masculine_dual': 'أَكَلا',
     'they_masculine': 'أَكَلوا',
     'she': 'أَكَلتْ',
     'they_feminine_dual': 'أَكَلتَا',
     'they_feminine': 'أَكَلنَ',
     'you_masculine': 'أَكَلتَ',
     'you_masculine_dual': 'أَكَلتُمَا',
     'you_masculine_plural': 'أَكَلتُمْ',
     'you_feminine': 'أَكَلتِ',
     'you_feminine_dual': 'أَكَلتُمَا',
     'you_feminine_plural': 'أَكَلتُنَّ',
     'I': 'أَكَلتُ',
     'we': 'أَكَلنَا'}},
   {'root': 'أَخَذَ',
    'conjugations': {'he': 'أَخَذ',
     'they_masculine_dual': 'أَخَذا',
     'they_masculine': 'أَخَذوا',
     'she': 'أَخَذتْ',
     'they_feminine_dual': 'أَخَذتَا',
     'they_feminine': 'أَخَذنَ',
     'you_masculine': 'أَخَذتَ',
     'you_masculine_dual': 'أَخَذتُمَا',
     'you_masculine_plural': 'أَخَذتُمْ',
     'you_feminine': 'أَخَذتِ',
     'you_feminine_dual': 'أَخَذتُمَا',
     'you_feminine_plural': 'أَخَذتُنَّ',
     'I': 'أَخَذتُ',
     'we': 'أَخَذنَا'}},
   {'root': 'أَمَرَ',
    'conjugations': {'he': 'أَمَر',
     'they_masculine_dual': 'أَمَرا',
     'they_masculine': 'أَمَروا',
     'she': 'أَمَرتْ',
     'they_feminine_dual': 'أَمَرتَا',
     'they_feminine': 'أَمَرنَ',
     'you_masculine': 'أَمَرتَ',
     'you_masculine_dual': 'أَمَرتُمَا',
     'you_masculine_plural': 'أَمَرتُمْ',
     'you_feminine': 'أَمَرتِ',
     'you_feminine_dual': 'أَمَرتُمَا',
     'you_feminine_plural': 'أَمَرتُنَّ',
     'I': 'أَمَرتُ',
     'we': 'أَمَرنَا'}} **/ ] 


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
