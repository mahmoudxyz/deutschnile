import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Clock, ArrowRight, BookOpen, Users, Award, Globe, ChevronRight } from 'lucide-react';
import styles from './index.module.css';
import clsx from 'clsx';

function HeroWave() {
  return (
    <div className={styles.heroWave}>
      <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleMain}>DeutschNile</span>
            <span className={styles.heroTitleSub}>Navigate German from the banks of the Nile</span>
          </h1>
          <Link to="/docs/intro" className={styles.ctaButton}>
            <span>Get Started - 5min</span>
            <Clock className={styles.buttonIcon} />
          </Link>
        </div>
        <div className={styles.heroRight}>
          <Globe className={styles.heroGlobe} />
        </div>
      </div>
      <HeroWave />
    </header>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Icon size={24} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureArrow}>
        <ChevronRight size={20} />
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning Path',
      description: 'Follow our carefully designed roadmap from A1 to C2, tailored for Arabic speakers.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join a thriving community of learners, share experiences, and practice together.'
    },
    {
      icon: Award,
      title: 'CEFR Aligned',
      description: 'Learn with confidence using our curriculum aligned with international standards.'
    }
  ];

  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleHighlight}>Why Choose</span> DeutschNile?
      </h2>
      <div className={styles.featureGrid}>
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsGrid}>
        <StatCard number="1000+" label="Active Learners" />
        <StatCard number="100+" label="Learning Resources" />
        <StatCard number="1" label="CEFR Levels" />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Ready to Start Your German Journey?</h2>
        <p className={styles.ctaText}>
          Join our community of learners and master German with a curriculum designed for Arabic speakers
        </p>
        <Link to="/docs/intro" className={styles.ctaButtonLarge}>
          <span>Get Started Now</span>
          <ArrowRight className={styles.buttonIcon} />
        </Link>
      </div>
      <div className={styles.ctaWave}>
        <svg viewBox="0 0 1440 320">
          <path fill="currentColor" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn German effectively with a curriculum designed for Arabic speakers">
      <HomepageHeader />
      <main>
        <Features />
        <Stats />
        <CTASection />
      </main>
    </Layout>
  );
}