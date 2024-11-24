import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css'; // 引入局部样式

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* 主标题部分 */}
        <Heading as="h1" className="hero__title">
          自动化系学生科协
        </Heading>
        {/* 副标题部分 */}
        <p className={styles.neonSubtitle}>
          welcome to our website!
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="首页">
      {/* 顶部标题部分 */}
      <HomepageHeader />
      {/* 主体内容部分 */}
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
