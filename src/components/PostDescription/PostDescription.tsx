import styles from './PostDescription.module.scss';

type PostDescriptionProps = {
  children: string;
};

export function PostDescription({ children }: PostDescriptionProps) {
  return <p className={styles.description}>{children}</p>;
}
