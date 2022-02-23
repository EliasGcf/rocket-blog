import styles from './PostTitle.module.scss';

type PostTitleProps = {
  url: string;
  children: string;
};

export function PostTitle({ children, url }: PostTitleProps) {
  return (
    <a href={url} className={styles.postTitle}>
      {children}
    </a>
  );
}
