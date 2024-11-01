export const STORAGE_KEYS = {
    ACTIVE_PLAN: 'deutschnile_active_plan',
    PROGRESS: 'deutschnile_progress',
    COMPLETED_ACTIVITIES: 'deutschnile_completed',
    STUDY_STREAK: 'deutschnile_streak',
    SAVED_PLANS: 'deutschnile_saved_plans'
  };
  
  export const learningGoals = {
    beginner: [
      {
        id: 'a1-comprehensive',
        label: 'Complete A1 Level',
        timeEstimate: '3-4 months',
        intensity: 'regular',
        description: 'Master the basics of German language',
        requirements: 'No prior knowledge needed',
        certification: 'Goethe A1 Certificate preparation included'
      },
      {
        id: 'a1-conversation',
        label: 'Basic Conversation Skills',
        timeEstimate: '2-3 months',
        intensity: 'medium',
        description: 'Focus on speaking and listening',
        requirements: 'No prior knowledge needed',
        certification: null
      },
      {
        id: 'a1-grammar',
        label: 'Grammar Fundamentals',
        timeEstimate: '2-3 months',
        intensity: 'high',
        description: 'Master basic German grammar',
        requirements: 'No prior knowledge needed',
        certification: null
      }
    ],
    intermediate: [
      {
        id: 'b1-comprehensive',
        label: 'Reach B1 Level',
        timeEstimate: '6-8 months',
        intensity: 'high',
        description: 'Achieve intermediate German proficiency',
        requirements: 'A2 level completion',
        certification: 'Goethe B1 Certificate preparation included'
      },
      {
        id: 'b1-business',
        label: 'Business German',
        timeEstimate: '4-5 months',
        intensity: 'high',
        description: 'Professional German communication',
        requirements: 'A2 level completion',
        certification: 'Business German Certificate preparation'
      }
    ],
    advanced: [
      {
        id: 'c1-academic',
        label: 'Academic German',
        timeEstimate: '8-10 months',
        intensity: 'very-high',
        description: 'Prepare for university studies in German',
        requirements: 'B2 level completion',
        certification: 'TestDaF preparation included'
      }
    ]
  };
  
  export const timeAvailability = [
    {
      id: 'minimal',
      label: '15-20 minutes daily',
      hoursPerWeek: 2,
      recommended: ['a1-conversation', 'a1-grammar'],
      description: 'Perfect for busy professionals',
      warningMessage: 'Progress will be slower but steady'
    },
    {
      id: 'moderate',
      label: '30-45 minutes daily',
      hoursPerWeek: 4,
      recommended: ['a1-comprehensive', 'b1-business'],
      description: 'Balanced learning pace',
      warningMessage: null
    },
    {
      id: 'dedicated',
      label: '1 hour daily',
      hoursPerWeek: 7,
      recommended: ['b1-comprehensive', 'c1-academic'],
      description: 'Ideal for fast progress',
      warningMessage: null
    },
    {
      id: 'intensive',
      label: '2+ hours daily',
      hoursPerWeek: 14,
      recommended: ['c1-academic'],
      description: 'Maximum progress speed',
      warningMessage: 'Requires significant time commitment'
    }
  ];
  
  export const activityTypes = {
    vocabulary: {
      icon: 'book',
      color: 'bg-blue-100',
      description: 'Build your German vocabulary',
      xpPoints: 10,
      streakPoints: 5
    },
    grammar: {
      icon: 'pencil',
      color: 'bg-green-100',
      description: 'Practice German grammar',
      xpPoints: 15,
      streakPoints: 5
    },
    listening: {
      icon: 'headphones',
      color: 'bg-yellow-100',
      description: 'Improve listening skills',
      xpPoints: 10,
      streakPoints: 5
    },
    speaking: {
      icon: 'mic',
      color: 'bg-red-100',
      description: 'Practice speaking German',
      xpPoints: 20,
      streakPoints: 10
    },
    writing: {
      icon: 'edit',
      color: 'bg-purple-100',
      description: 'Develop writing skills',
      xpPoints: 15,
      streakPoints: 5
    },
    review: {
      icon: 'refresh',
      color: 'bg-gray-100',
      description: 'Review previous material',
      xpPoints: 5,
      streakPoints: 2
    },
    culture: {
      icon: 'globe',
      color: 'bg-pink-100',
      description: 'Learn about German culture',
      xpPoints: 10,
      streakPoints: 5
    },
    pronunciation: {
      icon: 'mic',
      color: 'bg-orange-100',
      description: 'Practice pronunciation',
      xpPoints: 15,
      streakPoints: 5
    },
    reading: {
      icon: 'book-open',
      color: 'bg-indigo-100',
      description: 'Improve reading comprehension',
      xpPoints: 12,
      streakPoints: 5
    },
    exercises: {
      icon: 'pen-tool',
      color: 'bg-teal-100',
      description: 'Complete practice exercises',
      xpPoints: 15,
      streakPoints: 5
    }
  };
  
  export const resourceTypes = {
    apps: [
      {
        id: 'duolingo',
        name: 'Duolingo',
        url: 'https://www.duolingo.com/course/de/en/Learn-German',
        free: true,
        description: 'Popular language learning app',
        bestFor: ['vocabulary', 'grammar']
      },
      {
        id: 'memrise',
        name: 'Memrise',
        url: 'https://www.memrise.com/courses/english/german/',
        free: true,
        description: 'Vocabulary focused learning',
        bestFor: ['vocabulary']
      }
    ],
    websites: [
      {
        id: 'dw',
        name: 'Deutsche Welle',
        url: 'https://www.dw.com/en/learn-german/s-2469',
        free: true,
        description: 'Comprehensive German courses',
        bestFor: ['listening', 'reading', 'grammar']
      }
    ],
    textbooks: [
      {
        id: 'menschen',
        name: 'Menschen',
        description: 'Popular German textbook series',
        levels: ['A1', 'A2', 'B1'],
        bestFor: ['grammar', 'vocabulary']
      }
    ]
  };
  
  export const studyPlans = {
    'a1-comprehensive': {
      minimal: {
        weeklySchedule: [
          {
            day: 'Monday',
            activities: [
              {
                id: 'mon-vocab',
                type: 'vocabulary',
                duration: 10,
                resource: 'Duolingo',
                description: 'Basic nouns and verbs',
                xpPoints: 10,
                requiredStreak: 3
              },
              {
                id: 'mon-grammar',
                type: 'grammar',
                duration: 10,
                resource: 'Deutsche Welle',
                description: 'Present tense practice',
                xpPoints: 15,
                requiredStreak: 3
              }
            ]
          },
          // Add more days...
        ],
        milestones: [
          {
            week: 4,
            goals: [
              'Complete A1.1 vocabulary list',
              'Master basic greetings',
              'Form simple present tense sentences'
            ],
            reward: {
              xp: 100,
              badge: 'A1.1 Pioneer'
            }
          }
          // Add more milestones...
        ]
      }
      // Add more time commitment levels...
    }
    // Add more study plans...
  };
  
  export const progressTracking = {
    levels: [
      { level: 1, xpRequired: 0, title: 'Beginner' },
      { level: 2, xpRequired: 100, title: 'Novice' },
      { level: 3, xpRequired: 250, title: 'Student' },
      { level: 4, xpRequired: 500, title: 'Scholar' },
      { level: 5, xpRequired: 1000, title: 'Expert' }
    ],
    badges: [
      {
        id: 'streak-7',
        title: '7 Day Streak',
        description: 'Study 7 days in a row',
        icon: 'fire'
      },
      {
        id: 'vocab-master',
        title: 'Vocabulary Master',
        description: 'Complete 100 vocabulary exercises',
        icon: 'book'
      }
      // Add more badges...
    ]
  };
  
  export const calendarIntegration = {
    reminder: {
      options: [
        { id: 'none', label: 'No reminders' },
        { id: '5min', label: '5 minutes before' },
        { id: '15min', label: '15 minutes before' },
        { id: '30min', label: '30 minutes before' },
        { id: '1hour', label: '1 hour before' }
      ],
      defaultOption: '15min'
    },
    formats: [
      { id: 'google', label: 'Google Calendar' },
      { id: 'ical', label: 'iCal Format' },
      { id: 'outlook', label: 'Outlook' }
    ]
  };
  
  // Local Storage Helper Functions
  export const storageHelpers = {
    savePlan: (plan) => {
      try {
        const savedPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_PLANS) || '[]');
        savedPlans.push({ ...plan, savedAt: new Date().toISOString() });
        localStorage.setItem(STORAGE_KEYS.SAVED_PLANS, JSON.stringify(savedPlans));
        return true;
      } catch (error) {
        console.error('Error saving plan:', error);
        return false;
      }
    },
  
    getActivePlan: () => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVE_PLAN));
      } catch (error) {
        console.error('Error getting active plan:', error);
        return null;
      }
    },
  
    updateProgress: (activityId, completed = true) => {
      try {
        const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
        progress[activityId] = {
          completed,
          completedAt: completed ? new Date().toISOString() : null
        };
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
        
        // Update streak
        const today = new Date().toISOString().split('T')[0];
        const streak = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_STREAK) || '{"days": 0, "lastStudyDay": null}');
        
        if (streak.lastStudyDay !== today) {
          streak.days += 1;
          streak.lastStudyDay = today;
          localStorage.setItem(STORAGE_KEYS.STUDY_STREAK, JSON.stringify(streak));
        }
  
        return true;
      } catch (error) {
        console.error('Error updating progress:', error);
        return false;
      }
    },
  
    getProgress: () => {
      try {
        return {
          progress: JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}'),
          streak: JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_STREAK) || '{"days": 0, "lastStudyDay": null}')
        };
      } catch (error) {
        console.error('Error getting progress:', error);
        return { progress: {}, streak: { days: 0, lastStudyDay: null } };
      }
    }
  };