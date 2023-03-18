import classes from './propis.module.css'

const Content = ({ children }) => {
    return (
        <div className={classes.content}>
            {children}
        </div>
    )
}

export default Content
