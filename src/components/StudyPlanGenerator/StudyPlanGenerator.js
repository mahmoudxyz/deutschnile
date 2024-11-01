import React, { useState } from 'react';
import styles from './styles.module.css';
import { 
  Book, Clock, Loader2, Check, Calendar,
  Headphones, Mic, Edit, RefreshCw, Globe, 
  Target, BookOpen, Trophy
} from 'lucide-react';
import { 
  learningGoals, 
  timeAvailability, 
  studyPlans, 
  activityTypes 
} from './data';

const StudyPlanGenerator = () => {
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const getActivityIcon = (type) => {
    const iconProps = { size: 16, className: styles.activityIcon };
    switch (type) {
      case 'vocabulary': return <Book {...iconProps} />;
      case 'listening': return <Headphones {...iconProps} />;
      case 'speaking': return <Mic {...iconProps} />;
      case 'writing': return <Edit {...iconProps} />;
      case 'review': return <RefreshCw {...iconProps} />;
      case 'culture': return <Globe {...iconProps} />;
      case 'grammar': return <BookOpen {...iconProps} />;
      case 'pronunciation': return <Mic {...iconProps} />;
      default: return <Book {...iconProps} />;
    }
  };

  const generatePlan = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newPlan = studyPlans[goal]?.[time];
      setPlan(newPlan);
      setLoading(false);
    }, 800);
  };

  return (
    <div className={styles.planGenerator}>
      <h2 className={styles.title}>Create Your German Study Plan</h2>

      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Target size={16} className={styles.labelIcon} />
            Learning Goal
          </label>
          <select 
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className={styles.select}
          >
            <option value="">Select your goal...</option>
         
            {Object.values(learningGoals).flat().map((g) => (
                <option key={g.id} value={g.id}>
                {g.label} ({g.timeEstimate})
                </option>
            ))}

          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Clock size={16} className={styles.labelIcon} />
            Time Available
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={styles.select}
          >
            <option value="">Select time commitment...</option>
            {timeAvailability.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label} ({t.hoursPerWeek} hours/week)
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={generatePlan}
          className={styles.button}
          disabled={!goal || !time || loading}
        >
          {loading ? (
            <>
              <Loader2 size={16} className={`${styles.buttonIcon} ${styles.spinner}`} />
              Generating Plan...
            </>
          ) : (
            <>
              <Calendar size={16} className={styles.buttonIcon} />
              Generate Study Plan
            </>
          )}
        </button>
      </div>

      {plan && (
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h3 className={styles.planTitle}>Your Personalized Study Plan</h3>
            <p className={styles.planDescription}>
              Follow this weekly schedule to reach your learning goals effectively.
            </p>
          </div>

          {plan.weeklySchedule.map((day, index) => (
            <div key={index} className={styles.scheduleDay}>
              <h4 className={styles.dayTitle}>{day.day}</h4>
              {day.activities.map((activity, actIndex) => (
                <div 
                  key={actIndex} 
                  className={`${styles.activity} ${activityTypes[activity.type].color}`}
                >
                  {getActivityIcon(activity.type)}
                  <div className={styles.activityDetails}>
                    <div className={styles.activityTitle}>
                      {activity.resource}
                    </div>
                    <div className={styles.activityDescription}>
                      {activity.description}
                    </div>
                  </div>
                  <div className={styles.activityDuration}>
                    <Clock size={14} className={styles.durationIcon} />
                    {activity.duration} min
                  </div>
                </div>
              ))}
            </div>
          ))}

          {plan.milestones && (
            <div className={styles.milestone}>
              <h4 className={styles.milestoneTitle}>
                <Trophy size={18} className={styles.milestoneIcon} />
                Learning Milestones
              </h4>
              {plan.milestones.map((milestone, index) => (
                <div key={index} className={styles.milestoneGroup}>
                  <div className={styles.milestoneWeek}>Week {milestone.week}</div>
                  <ul className={styles.milestoneList}>
                    {milestone.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className={styles.milestoneItem}>
                        <Check size={14} className={styles.checkIcon} />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className={styles.planFooter}>
            <button className={styles.downloadButton}>
              <Calendar size={16} className={styles.buttonIcon} />
              Add to Calendar
            </button>
            <button className={styles.shareButton}>
              Share Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyPlanGenerator;