import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { useState } from 'react';
import { iTask } from "../../types/task";


const Form = (setTasks:React.Dispatch<React.SetStateAction<iTask[]>>) => {



        const [task,setTask] = useState("")
        const [time,SetTime] = useState("00:00")


        const saveTask = (event: React.FormEvent<HTMLFormElement>,task:string,time:string) => {
            event.preventDefault()
            setTasks(oldTasks => [...oldTasks,{task,time}])
            console.log('state', {
                'task' : task,
                'time' : time})
        }


        return(
            <form action="" className={style.newTask} onSubmit={saveTask}>
                <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input 
                type="text" 
                name="task" 
                value={task}
                onChange={event => setTask(event.target.value)}
                id="task" 
                placeholder="task name" 
                required />
                </div>

                <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input 
                type="time"
                step="1"
                value={time}
                onChange={event => SetTime(event.target.value)}
                name="time" 
                id="time"
                min="00:00:00"
                max="01:30:00"
                required />
                </div>
                <Button type="submit">
                    Add Task
                </Button>
            </form>
        )
} 


export default Form;