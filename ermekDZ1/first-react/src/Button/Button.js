import classes from './button.module.css';

const Button = () => {
    const handleButtonClick = (event) => {
        console.log(`Button ${event.target.textContent} was clicked`);
    };

    return (
        <div className={classes.buttonsContainer}>
            <button className={`${classes.button} ${classes.redBorder}`} onClick={handleButtonClick}>Выбрать</button>
            <button className={`${classes.button} ${classes.greenBorder}`} onClick={handleButtonClick}>Выбрать</button>
            <button className={`${classes.button} ${classes.blueBorder}`} onClick={handleButtonClick}>Выбрать</button>
        </div>
    )
};

export default Button;
