import styles from "./NavMenu.module.scss";
export const NavMenu = () => {
  return (
    <>
      <div className={styles.NavMenuBar}>
        <div className={styles.NavMenuItem}>work with us</div>
        <div className={styles.NavMenuItem}>Hannah</div>
        <div className={styles.NavMenuItem}>Max</div>
      </div>
    </>
  );
};
