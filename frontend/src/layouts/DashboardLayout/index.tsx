import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets'
import { useSpotlight } from '@/shared/hooks/useSpotLight'

import styles from "./DashboardLayout.module.scss"

export const DashboardLayout = () => {

    const { handleMouseMove } = useSpotlight()

    return (
        <div className={styles.layoutContainer} onMouseMove={handleMouseMove}>
            <div className={styles.sidebarStub}>
                Sidebar Stub
            </div>

            <div className={styles.mainWrapper}>
                <div className={styles.headerStub}>
                    <Header />
                </div>
                <main className={styles.contentZone}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}