import Item from './Item';
import style from './List.module.scss';


const List = () => {
    const tasks = [{
        task : 'React',
        time: '02:00:00'
    },{
        task: 'Typescript',
        time: '01:30:00'
    },{
        task: 'Data Structure',
        time: '01:00:00'
    }]
    return(
        <aside className={style.taskList}>
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map((taskList,index)=> (
                    <Item
                       {...taskList}
                       key={index}
                    />
                ))}
            </ul>
        </aside>
    )
}


export default List;