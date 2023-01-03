import Item from './Item';
import style from './List.module.scss';
import { iTask } from '../../types/task'


const List = (tasks : iTask[]) => {

    return(
        <aside className={style.taskList}>
            <h2 >Daily Tasks</h2>
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