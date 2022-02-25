import { Header } from '@components/Header';
import { HeaderPost } from '@components/HeaderPost';

import styles from './HeaderSection.module.scss';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type HeaderSectionProps = {
  post?: Post;
};

export function HeaderSection({ post }: HeaderSectionProps) {
  return (
    <section className={styles.headerSection}>
      <Header />
      {post && <HeaderPost post={post} />}
    </section>
  );
}
