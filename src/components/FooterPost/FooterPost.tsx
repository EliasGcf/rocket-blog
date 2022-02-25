import { PostDate } from '@components/PostDate';
import { PostTitle } from '@components/PostTitle';
import { PostDescription } from '@components/PostDescription';

import styles from './FooterPost.module.scss';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type FooterPostProps = {
  post: Post;
};

export function FooterPost({ post }: FooterPostProps) {
  return (
    <div className={styles.footerPost}>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <PostDate>{post.createdAt}</PostDate>
      <PostTitle url="/">{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
    </div>
  );
}
