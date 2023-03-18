import classes from './text.module.css';

const ClassText = () => {
    return (
        <div className={classes.block}>
            <p>
                Hello, World!
            </p>
            <div className={classes.gradient}>
                <p>
                    This text has a gradient background.
                </p>
            </div>
        </div>
    )
};

export default ClassText;
