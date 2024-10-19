import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Structured Learning Path',
    Svg: require('@site/static/img/structured_learning.svg').default,
    description: (
      <>
        Follow our carefully designed roadmap from A1 to C2, tailored for Arabic speakers learning German in an Egyptian context.
      </>
    ),
  },
  {
    title: 'Cultural Bridge',
    Svg: require('@site/static/img/cultural_bridge.svg').default,
    description: (
      <>
        Explore German language and culture while drawing parallels to Egyptian traditions. Enhance your learning through cultural connections.
      </>
    ),
  },
  {
    title: 'Interactive Resources',
    Svg: require('@site/static/img/interactive_resources.svg').default,
    description: (
      <>
        Access a wide range of interactive exercises, quizzes, and multimedia content to make your German learning journey engaging and effective.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}