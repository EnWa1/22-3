import React, { useState } from 'react'
import classes from "./list.module.css"
import Button from '../Button/Button'

function List({list, deleteFunc, searchTask}) {
    const searchedList = list.filter(item => item.task.toLowerCase().includes(searchTask))
    return (
        <div className={classes.list}>
            {searchedList.map((item, i) => 
            <div className={classes.listBlock} key={item.id}>
                <div className={classes.listInner}>
                    {item.editing && <input/>}
                    {!item.editing && <span>{item.task}</span>}
                   
                    <Button clickFunc={() => deleteFunc(item.id)}>Delete</Button>
                </div>
            </div>)}
        </div>
    )
}

export default List
