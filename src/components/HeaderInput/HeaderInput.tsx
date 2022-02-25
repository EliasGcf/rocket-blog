import styles from './HeaderInput.module.scss';

export function HeaderInput() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Buscar" />
      <button type="button">
        <img src="/svg/search.svg" alt="Buscar" />
      </button>
    </div>
  );
}
