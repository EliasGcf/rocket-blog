import type { NextPage } from 'next';

import { HeaderSection } from '@components/HeaderSection';
import { FooterPost } from '@components/FooterPost';
import { MainPost } from '@components/MainPost';
import { AsidePost } from '@components/AsidePost/AsidePost';

import styles from '@styles/Home.module.scss';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [headerPost, mainPost, ...restPosts] = posts;

  return (
    <div className={styles.homeContainer}>
      <HeaderSection post={headerPost} />

      <main className={styles.postsSection}>
        <div>
          {mainPost && <MainPost post={mainPost} />}

          <div className={styles.asidePosts}>
            {restPosts.map((post, index) => {
              if (index > 1) return null;

              return (
                <>
                  <AsidePost post={post} />
                  {index === 0 && <div className={styles.divider} />}
                </>
              );
            })}
          </div>
        </div>

        <div className={styles.footerPosts}>
          {restPosts.map((post, index) => {
            if (index < 2 || index > 4) return null;

            return <FooterPost key={post.id} post={post} />;
          })}
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    posts: [
      {
        id: '1',
        createdAt: 'Janeiro 04, 2022',
        title: 'Veja o guia definitivo para conquistar seus objetivos como DEV em 2022',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645573091/rocket-blog/featured-image_r0j8uw.png',
      },
      {
        id: '2',
        createdAt: 'Janeiro 04, 2022',
        title: 'Começando no ReactJS em 2022',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-1_d8hske.png',
      },
      {
        id: '3',
        createdAt: 'Janeiro 04, 2022',
        title:
          'Conheça as principais técnicas para conseguir uma vaga internacional em programação',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.',
      },
      {
        id: '4',
        createdAt: 'Janeiro 04, 2022',
        title: 'Veja a evolução do Front-end na prática',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.',
      },
      {
        id: '5',
        createdAt: 'Janeiro 04, 2022',
        title: '10 dicas para conseguir a vaga desejada',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-2_hdctzw.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.',
      },
      {
        id: '6',
        createdAt: 'Janeiro 04, 2022',
        title: 'Deixe seu código mais semântico com essas dicas',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-3_estsxg.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.',
      },
      {
        id: '7',
        createdAt: 'Janeiro 04, 2022',
        title: 'Use essas dicas nas suas aplicações mobile',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-4_tlvzuv.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.',
      },
      {
        id: '8',
        createdAt: 'Janeiro 04, 2022',
        title: 'Use essas dicas nas suas aplicações mobile',
        imageUrl:
          'https://res.cloudinary.com/eliasgcf/image/upload/v1645654292/rocket-blog/post-4_tlvzuv.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.',
      },
    ],
  };
};

export default Home;
