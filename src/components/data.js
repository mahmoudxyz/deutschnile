// src/components/ResourceFinder/data.js

export const resourceData = {
    beginner: {
      vocabulary: {
        minimal: {
          visual: {
            primary: "Visual Vocabulary Basics",
            schedule: "10 minutes daily",
            difficulty: "Easy",
            resources: [
              "Duolingo German Tree (First 2 units)",
              "Memrise German 1 Course",
              "German Picture Dictionary App",
              "Basic Vocabulary Flashcards"
            ],
            tools: [
              "dict.cc for quick lookups",
              "Google Images for visual learning",
              "Quizlet flashcard sets"
            ],
            additionalResources: [
              "German Word of the Day app",
              "Basic picture vocabulary books",
              "Visual vocabulary charts"
            ]
          },
          audio: {
            primary: "Quick Audio Vocabulary",
            schedule: "10 minutes daily",
            difficulty: "Easy",
            resources: [
              "GermanPod101 Word of the Day",
              "Forvo pronunciation guide",
              "Basic German audio flashcards",
              "Simple German songs"
            ],
            tools: [
              "Forvo pronunciation app",
              "German pronunciation trainer",
              "Audio dictionary"
            ],
            additionalResources: [
              "German nursery rhymes",
              "Basic vocabulary podcasts",
              "Audio phrasebook"
            ]
          }
        },
        light: {
          visual: {
            primary: "Visual Vocabulary Foundation",
            schedule: "15-20 minutes daily",
            difficulty: "Easy",
            resources: [
              "Duolingo German Tree (First 5 units)",
              "Memrise German 1 & 2",
              "German Visual Dictionary",
              "Easy German YouTube playlist"
            ],
            tools: [
              "Anki with image decks",
              "Visual dictionary apps",
              "Picture flashcards"
            ],
            additionalResources: [
              "German children's picture books",
              "Visual vocabulary websites",
              "Illustrated grammar guides"
            ]
          }
        },
        intensive: {
          structured: {
            primary: "Intensive Vocabulary System",
            schedule: "60+ minutes daily",
            difficulty: "Moderate",
            resources: [
              "Menschen A1 Complete Course",
              "Babbel German Comprehensive",
              "1,000 Most Common Words Course",
              "Vocabulary Writing Practice"
            ],
            tools: [
              "Anki spaced repetition",
              "Vocabulary tracking spreadsheet",
              "Language learning journal"
            ],
            additionalResources: [
              "German frequency dictionary",
              "Thematic vocabulary books",
              "Writing exercises"
            ]
          }
        }
      },
      grammar: {
        light: {
          structured: {
            primary: "Basic Grammar Foundations",
            schedule: "15-20 minutes daily",
            difficulty: "Moderate",
            resources: [
              "German.net Basic Grammar",
              "Essential German Grammar",
              "Practice Makes Perfect: Basic",
              "Grammar Practice Worksheets"
            ],
            tools: [
              "German grammar checker",
              "Conjugation tables",
              "Basic sentence builder"
            ],
            additionalResources: [
              "Grammar exercise book",
              "Online grammar quizzes",
              "Basic writing prompts"
            ]
          }
        }
      }
    },
    intermediate: {
      speaking: {
        moderate: {
          interactive: {
            primary: "Interactive Speaking Practice",
            schedule: "30-45 minutes daily",
            difficulty: "Moderate",
            resources: [
              "iTalki conversation practice",
              "German speaking meetups",
              "Language exchange partners",
              "Speaking exercise recordings"
            ],
            tools: [
              "Voice recording app",
              "Pronunciation checker",
              "Conversation prompts"
            ],
            additionalResources: [
              "Conversation topics list",
              "Pronunciation guides",
              "Speaking exercise cards"
            ]
          }
        }
      },
      reading: {
        intensive: {
          multimedia: {
            primary: "Intensive Reading Program",
            schedule: "60+ minutes daily",
            difficulty: "Challenging",
            resources: [
              "Deutsche Welle articles",
              "German short stories B1-B2",
              "News websites with audio",
              "Graded readers collection"
            ],
            tools: [
              "ReadLang web reader",
              "LingQ reading tool",
              "Vocabulary tracker"
            ],
            additionalResources: [
              "German newspapers online",
              "Literature excerpts",
              "Reading comprehension exercises"
            ]
          }
        }
      }
    },
    advanced: {
      immersion: {
        dedicated: {
          practical: {
            primary: "Full German Immersion",
            schedule: "2+ hours daily",
            difficulty: "Very Challenging",
            resources: [
              "German TV series without subtitles",
              "Native podcasts and radio",
              "German literature",
              "Academic articles"
            ],
            tools: [
              "Native content platforms",
              "Advanced dictionary",
              "Writing analysis tools"
            ],
            additionalResources: [
              "German academic journals",
              "Professional publications",
              "Cultural events and meetups"
            ]
          }
        }
      },
      business: {
        intensive: {
          professional: {
            primary: "Business German Mastery",
            schedule: "60+ minutes daily",
            difficulty: "Very Challenging",
            resources: [
              "Business German course",
              "Professional communication training",
              "Industry-specific vocabulary",
              "Business case studies"
            ],
            tools: [
              "Business writing templates",
              "Professional dictionary",
              "Presentation tools"
            ],
            additionalResources: [
              "German business news",
              "Professional networking events",
              "Business German certifications"
            ]
          }
        }
      }
    }
  };
  
  export const alternativeRecommendations = {
    beginner: {
      quick: [
        "10-minute Duolingo sessions",
        "Basic vocabulary flashcards",
        "Simple German learning apps",
        "Short YouTube lessons"
      ],
      popular: [
        "Easy German YouTube channel",
        "Basic German podcasts",
        "Beginner grammar websites",
        "Language learning games"
      ]
    },
    intermediate: {
      quick: [
        "News in Slow German",
        "German music with lyrics",
        "Short story reading",
        "Grammar practice apps"
      ],
      popular: [
        "Language exchange apps",
        "German TV series with subtitles",
        "Online grammar courses",
        "Conversation practice groups"
      ]
    },
    advanced: {
      quick: [
        "German news websites",
        "Professional podcasts",
        "Academic article summaries",
        "Daily writing exercises"
      ],
      popular: [
        "German literature audiobooks",
        "Business German courses",
        "Academic writing resources",
        "Language immersion programs"
      ]
    }
  };
  
  export const categories = {
    focus: [
      { value: 'vocabulary', label: 'Vocabulary Building' },
      { value: 'grammar', label: 'Grammar & Structure' },
      { value: 'speaking', label: 'Speaking & Pronunciation' },
      { value: 'listening', label: 'Listening Comprehension' },
      { value: 'reading', label: 'Reading Skills' },
      { value: 'writing', label: 'Writing Practice' },
      { value: 'culture', label: 'Cultural Understanding' },
      { value: 'business', label: 'Business German' },
      { value: 'academic', label: 'Academic German' },
      { value: 'exam', label: 'Exam Preparation' }
    ],
    learningStyles: [
      { value: 'visual', label: 'Visual Learner', icon: 'video' },
      { value: 'audio', label: 'Audio Learner', icon: 'audio' },
      { value: 'interactive', label: 'Interactive Learning', icon: 'game' },
      { value: 'reading', label: 'Reading-Based', icon: 'book' },
      { value: 'structured', label: 'Structured Learning', icon: 'list' },
      { value: 'practical', label: 'Hands-on Practice', icon: 'pencil' },
      { value: 'multimedia', label: 'Multimedia Learning', icon: 'film' },
      { value: 'professional', label: 'Professional Focus', icon: 'briefcase' }
    ],
    timeCommitment: [
      { value: 'minimal', label: 'Minimal (5-10 min/day)', duration: 10 },
      { value: 'light', label: 'Light (15-20 min/day)', duration: 20 },
      { value: 'moderate', label: 'Moderate (30-45 min/day)', duration: 45 },
      { value: 'intensive', label: 'Intensive (1+ hour/day)', duration: 60 },
      { value: 'dedicated', label: 'Dedicated (2+ hours/day)', duration: 120 }
    ]
  };