import styles from './PostTitle.module.scss';

type PostTitleProps = {
  children: string;
};

export function PostTitle({ children }: PostTitleProps) {
  return <h2 className={styles.postTitle}>{children}</h2>;
}
