import classes from './propis.module.css'

const Content = (props) => {
  const { children } = props;
  
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}

export default Content;
