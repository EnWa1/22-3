import classes from './component.module.css'
export const Component = ({ text, description }) => {
    // const obj1 = {
    //     name: 'Syimyk',
    //     age: 20
    // }
    // const { name } = obj1;
    console.log(text , description);
    return (
        <div className={classes.block}>
            {description}
        </div>
    );
};

export const Component2  = () => {
    return (
        <div>Component2</div>
    )
}