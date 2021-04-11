import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Мобайл системтэй холбогдох',
    imageUrl: 'img/home-page-mobile.svg',
    description: <>Мобайл системтэй холбогдох боломж</>
  },
  {
    title: 'Оператор системтэй холбогдох',
    imageUrl: 'img/home-page-operator.svg',
    description: <>Оператор системтэй холбогдох боломж</>
  },
  {
    title: 'Портал системтэй холбогдох',
    imageUrl: 'img/home-page-portal.svg',
    description: <>Портал системтэй холбогдох боломж</>
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={`${siteConfig.title}`} description="E-mongolia хөгжүүлэгчийн гарын авлага">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--outline button--primary button--lg', styles.getStarted)} to={useBaseUrl('docs/')}>
              Гарын авлагатай танилцах
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
