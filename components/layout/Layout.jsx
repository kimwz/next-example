import styles from './Layout.module.scss'

export default function Layout({children}) {
    return (
        <div id='layout' className={styles.layout}>{children}</div>
    )
}