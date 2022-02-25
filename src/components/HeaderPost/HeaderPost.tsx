import styles from './HeaderPost.module.scss';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type HeaderPostProps = {
  post: Post;
};

export function HeaderPost({ post }: HeaderPostProps) {
  return (
    <div className={styles.headerPost}>
      <div>
        <a>{post.title}</a>
        <p>{post.description}</p>
      </div>

      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
    </div>
  );
}
