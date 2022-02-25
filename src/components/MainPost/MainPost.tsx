import { PostDate } from '@components/PostDate';
import { PostDescription } from '@components/PostDescription';
import { PostTitle } from '@components/PostTitle';

import styles from './MainPost.module.scss';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type MainPostProps = {
  post: Post;
};

export function MainPost({ post }: MainPostProps) {
  return (
    <div className={styles.mainPost}>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <PostDate>{post.createdAt}</PostDate>
      <PostTitle url="/">{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
    </div>
  );
}
