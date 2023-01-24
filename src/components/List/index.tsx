import { ITask } from "../../types/ITask";
import Item from "./Item";
import style from './List.module.scss';

interface ListProps {
    tasks: Array<ITask>,
    selectTask: (selectedTask: ITask) => void
}

function List ({tasks, selectTask} : ListProps) {
    return (
        <aside className={style.taskList}>
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map((item) => (
                    <Item 
                        key={item.id}
                        {...item}
                        selectTask={selectTask} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;