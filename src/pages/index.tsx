import type { NextPage } from 'next';

import { Header } from '@components/Header';
import { PostTitle } from '@components/PostTitle';

import styles from '@styles/Home.module.scss';
import { PostDescription } from '@components/PostDescription';
import { PostDate } from '@components/PostDate';

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

      <main className={styles.postsSection}>
        <div>
          <div className={styles.mainPost}>
            <img
              src="https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-1_d8hske.png"
              alt="Post 1"
            />

            <PostDate>Janeiro 04, 2022</PostDate>

            <PostTitle>Começando no ReactJS em 2022</PostTitle>

            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
              aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique
              nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique. Sed volutpat aenean.
            </PostDescription>
          </div>

          <div className={styles.asidePosts}>
            <PostDate>Janeiro 04, 2022</PostDate>

            <PostTitle>
              Conheça as principais técnicas para conseguir uma vaga internacional em
              programação
            </PostTitle>

            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
              aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
            </PostDescription>

            <div className={styles.divider} />

            <PostDate>Janeiro 04, 2022</PostDate>

            <PostTitle>Veja a evolução do Front-end na prática</PostTitle>

            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
              aliquet ut adipiscing neque.
            </PostDescription>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
