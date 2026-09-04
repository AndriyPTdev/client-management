import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from "./GuestLayout.module.scss"

export const GuestLayout = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['guest-layout']}>
      <header>
        <h2>{t('Guest Header (Logo + Navigation)')}</h2>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Підвал сайту */}
      <footer>
        <p>© 2026 Client Suite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GuestLayout;
