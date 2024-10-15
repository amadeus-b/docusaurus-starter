import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Tutorial Intro',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Generate a new Docusaurus site using the classic template.
        The classic template will automatically be added to your project after you run the command:
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Massage Verzeichnis',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ihr Eintrag auf Thai-Massage.de
      </>
    ),
    link: '/docs/category/massage-verzeichnis',
  },
  {
    title: 'Gutschein Verkauf',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Entdecken Sie unsere Lösungen für mehr Online-Umsatz
      </>
    ),
    link: '/docs/category/gutschein-verkauf',
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <Link to={link} className="button button--secondary button--md">
          View Docs
        </Link>
        {/* <p>{description}</p> */}
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
