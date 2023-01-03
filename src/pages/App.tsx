import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss'


function App() {
  const [tasks,setTasks] = useState([{
    task : 'React',
    time: '02:00:00'
},{
    task: 'Typescript',
    time: '01:30:00'
},{
    task: 'Data Structure',
    time: '01:00:00'
}])
  return (
    <div className={style.AppStyle}>
        <Form/>
        <List/>
        <Timer/>
    </div>
  );
}

export default App;
