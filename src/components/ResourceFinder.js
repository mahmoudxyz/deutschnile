import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { 
  Clock, Book, AlertCircle, Loader2, BookOpen, Video, 
  Headphones, Users, Brain, Globe, Pencil, MessageSquare,
  Music, Laptop, GameController, BookMarked, Film
} from 'lucide-react';
import { resourceData, alternativeRecommendations, categories } from './data';

const ResourceFinder = () => {
  const [level, setLevel] = useState('');
  const [focus, setFocus] = useState('');
  const [timeCommitment, setTimeCommitment] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Clear error when inputs change
  useEffect(() => {
    setError(null);
    setRecommendations(null);
  }, [level, focus, timeCommitment, learningStyle]);

  const categories = {
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
      { value: 'exam', label: 'Exam Preparation' },
      { value: 'immersion', label: 'Full Immersion' },
      { value: 'conversation', label: 'Conversation Practice' }
    ],
    learningStyles: [
      { value: 'visual', label: 'Visual Learner', icon: 'video' },
      { value: 'audio', label: 'Audio Learner', icon: 'audio' },
      { value: 'interactive', label: 'Interactive Learning', icon: 'game' },
      { value: 'reading', label: 'Reading-Based', icon: 'book' },
      { value: 'social', label: 'Social Learning', icon: 'group' },
      { value: 'self-paced', label: 'Self-Paced Study', icon: 'brain' },
      { value: 'structured', label: 'Structured Learning', icon: 'list' },
      { value: 'immersive', label: 'Immersive Learning', icon: 'globe' },
      { value: 'multimedia', label: 'Multimedia Learning', icon: 'film' },
      { value: 'practical', label: 'Hands-on Practice', icon: 'pencil' }
    ],
    timeCommitment: [
      { value: 'minimal', label: 'Minimal (5-10 min/day)', duration: 10 },
      { value: 'light', label: 'Light (15-20 min/day)', duration: 20 },
      { value: 'moderate', label: 'Moderate (30-45 min/day)', duration: 45 },
      { value: 'intensive', label: 'Intensive (1+ hour/day)', duration: 60 },
      { value: 'dedicated', label: 'Dedicated (2+ hours/day)', duration: 120 }
    ]
  };

  const renderIcon = (type) => {
    const iconProps = { size: 16, className: styles.scheduleIcon };
    switch (type) {
      case 'video':
        return <Video {...iconProps} />;
      case 'audio':
        return <Headphones {...iconProps} />;
      case 'game':
        return <GameController {...iconProps} />;
      case 'book':
        return <BookOpen {...iconProps} />;
      case 'tool':
        return <Laptop {...iconProps} />;
      case 'extra':
        return <BookMarked {...iconProps} />;
      case 'group':
        return <Users {...iconProps} />;
      case 'brain':
        return <Brain {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      case 'film':
        return <Film {...iconProps} />;
      case 'pencil':
        return <Pencil {...iconProps} />;
      case 'music':
        return <Music {...iconProps} />;
      default:
        return <Book {...iconProps} />;
    }
  };

  const alternativeRecommendations = {
    beginner: {
      quick: [
        'Duolingo daily exercises',
        'Quick German vocabulary apps',
        '5-minute grammar videos'
      ],
      popular: [
        'Easy German YouTube channel',
        'German learning podcasts',
        'Basic grammar websites'
      ]
    },
    intermediate: {
      quick: [
        'News in Slow German',
        'German music with lyrics',
        'Short story reading'
      ],
      popular: [
        'Language exchange apps',
        'German TV series',
        'Online grammar courses'
      ]
    },
    advanced: {
      quick: [
        'German news websites',
        'Professional podcasts',
        'Academic articles'
      ],
      popular: [
        'German literature',
        'Business German courses',
        'Academic writing resources'
      ]
    }
  };

  const getRecommendations = () => {
    setLoading(true);
    setError(null);
  
    // Simulate loading time for better UX
    setTimeout(() => {
      try {
        const result = resourceData[level]?.[focus]?.[timeCommitment]?.[learningStyle];
        
        if (!result) {
          const alternatives = alternativeRecommendations[level]?.[
            timeCommitment === 'minimal' || timeCommitment === 'light' 
              ? 'quick' 
              : 'popular'
          ] || [];
  
          setError({
            message: "We don't have specific recommendations for this combination yet, but here are some alternatives that might help:",
            alternatives: alternatives,
            explanation: "We're continuously adding new resources for different learning styles and focuses. These alternatives match your level and time commitment.",
            type: 'suggestion'
          });
        } else {
          setRecommendations(result);
        }
      } catch (err) {
        setError({
          message: 'Unable to load recommendations. Please try different criteria.',
          type: 'error'
        });
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className={styles.resourceFinder}>
      <h3 className={styles.resultTitle}>
        Find Your Perfect Learning Resources
      </h3>

      <div className={styles.selectionContainer}>
        {/* Level Selection */}
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel}>Your Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className={styles.resourceSelect}
          >
            <option value="">Choose your level...</option>
            <option value="beginner">Beginner (A1-A2)</option>
            <option value="intermediate">Intermediate (B1-B2)</option>
            <option value="advanced">Advanced (C1-C2)</option>
          </select>
        </div>

        {/* Focus Area Selection */}
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel}>Focus Area</label>
          <select
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className={styles.resourceSelect}
          >
            <option value="">Choose your focus...</option>
            {categories.focus.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Time Commitment Selection */}
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel}>Time Commitment</label>
          <select
            value={timeCommitment}
            onChange={(e) => setTimeCommitment(e.target.value)}
            className={styles.resourceSelect}
          >
            <option value="">Choose time commitment...</option>
            {categories.timeCommitment.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Learning Style Selection */}
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel}>Learning Style</label>
          <select
            value={learningStyle}
            onChange={(e) => setLearningStyle(e.target.value)}
            className={styles.resourceSelect}
          >
            <option value="">Choose learning style...</option>
            {categories.learningStyles.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={getRecommendations}
        className={clsx(styles.button, styles.buttonPrimary)}
        disabled={!level || !focus || !timeCommitment || !learningStyle || loading}
      >
        {loading ? (
          <>
            <Loader2 className={clsx(styles.buttonIcon, styles.spinning)} size={16} />
            Finding Resources...
          </>
        ) : (
          'Get Recommendations'
        )}
      </button>

      {error && (
        <div className={clsx(styles.message, error.type === 'suggestion' ? styles.messageSuggestion : styles.messageError)}>
          <div className={styles.messageHeader}>
            <AlertCircle size={16} />
            <span>{error.message}</span>
          </div>
          
          {error.alternatives && (
            <div className={styles.alternatives}>
              <ul className={styles.alternativesList}>
                {error.alternatives.map((alt, index) => (
                  <li key={index} className={styles.alternativeItem}>
                    <Book size={14} />
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
              {error.explanation && (
                <div className={styles.explanation}>
                  <button
                    className={styles.explanationToggle}
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation ? 'Hide explanation' : 'Why am I seeing these alternatives?'}
                  </button>
                  {showExplanation && (
                    <p className={styles.explanationText}>{error.explanation}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}


{recommendations && !error && (
  <div className={styles.resultCard}>
    <h4 className={styles.resultTitle}>{recommendations.primary}</h4>
    <div className={styles.scheduleTag}>
      <Clock className={styles.scheduleIcon} size={16} />
      <span>{recommendations.schedule}</span>
    </div>
    
    <div className={styles.resourceSection}>
      <h5 className={styles.sectionTitle}>Core Resources</h5>
      <ul className={styles.resourceList}>
        {recommendations.resources.map((resource, index) => (
          <li key={index} className={styles.resourceItem}>
            {renderIcon('book')}
            <span className="margin-left--sm">{resource}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.resourceSection}>
      <h5 className={styles.sectionTitle}>Recommended Tools</h5>
      <ul className={styles.resourceList}>
        {recommendations.tools.map((tool, index) => (
          <li key={index} className={styles.resourceItem}>
            {renderIcon('tool')}
            <span className="margin-left--sm">{tool}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.resourceSection}>
      <h5 className={styles.sectionTitle}>Additional Resources</h5>
      <ul className={styles.resourceList}>
        {recommendations.additionalResources.map((resource, index) => (
          <li key={index} className={styles.resourceItem}>
            {renderIcon('extra')}
            <span className="margin-left--sm">{resource}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}
    </div>
  );
};

export default ResourceFinder;