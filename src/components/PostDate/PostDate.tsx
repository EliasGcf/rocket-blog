import styles from './PostDate.module.scss';

type PostDateProps = {
  children: string;
};

export function PostDate({ children }: PostDateProps) {
  return <span className={styles.postDate}>{children}</span>;
}
