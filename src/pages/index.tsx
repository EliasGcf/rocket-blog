import type { NextPage } from 'next';

import { Header } from '@components/Header';

import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.headerSection}>
        <Header />

        <div className={styles.headerBanner}>
          <div>
            <h1>
              Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
              aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique
              placerat hac.{' '}
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/eliasgcf/image/upload/v1645573091/rocket-blog/featured-image_r0j8uw.png"
            alt="Code"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
