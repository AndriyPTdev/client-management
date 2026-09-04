import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Clients Management</h1>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.userProfile}>Alex Morgan (Admin)</div>
      </div>
    </header>
  );
};
