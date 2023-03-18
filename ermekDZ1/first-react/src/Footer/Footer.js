import classes from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerColumn}>
                <h3>О нас</h3>
                <p>Мы - компания, занимающаяся производством и продажей качественной продукции.</p>
            </div>
            <div className={classes.footerColumn}>
                <h3>Контакты</h3>
                <p>Телефон: 8 (800) 123-45-67</p>
                <p>Адрес: г. Москва, ул. Ленина, д. 10</p>
            </div>
            <div className={classes.footerColumn}>
                <h3>Социальные сети</h3>
                <ul className={classes.socialList}>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
