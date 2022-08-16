import styles from './Header.module.scss';
export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <nav className={styles.navMenu}>
                    <a tabindex="0" className="nav-main-one">Home</a>
                    <a tabindex="0" className="nav-main-one">Get Stared</a>
                    <a tabindex="0" className="nav-main-one">Earn</a>
                    <a tabindex="0" className="nav-main-one">Invite</a>
                    <a tabindex="0" className="nav-main-one">Forum</a>
                    <a tabindex="0" className="nav-main-one">Stake</a>
                    <a tabindex="0" className="nav-main-one">9cscan</a>
                    <a tabindex="0" className="nav-main-one haschild">More</a>
                </nav>
            </div>
        </header>
    )
}