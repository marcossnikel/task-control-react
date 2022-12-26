import React from "react";
import Button from "../Button";
import style from './Form.module.scss'

const Form = () => {
        return(
            <form action="" className={style.newTask}>
                <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input 
                type="text" 
                name="task" 
                id="task" 
                placeholder="task name" 
                required />
                </div>

                <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input 
                type="time"
                step="1"
                name="time" 
                id="time"
                min="00:00:00"
                max="01:30:00"
                required />
                </div>
                <Button>
                    Add Task
                </Button>
            </form>
        )
}


export default Form;