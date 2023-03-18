import classes from './header.module.css';

const Header = ({ menuList }) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Logo
            </div>
            <nav className={classes.nav}>
                <ul>
                    {menuList.map(el => (
                        <li key={el}>
                            <a href="#">{el}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
