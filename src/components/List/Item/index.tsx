import { ITask } from '../../../types/ITask';
import style from './Item.module.scss';

interface ItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void
}

function Item(
    {
        task, 
        time, 
        selected, 
        completed, 
        id, 
        selectTask
    }: ItemProps) {

    return (
        <li 
            className={`
                ${style.item} 
                ${selected ? style.selectedItem : ''} 
                ${completed ? style.completedItem: ''}
            `}

            onClick={() => !completed && selectTask(
                {
                    //ESSE CARA É O ITEM QUE TA SENDO RENDERIZADO NO MAP
                    //BASICAMENTE, CADA UM VAI TER ESSES DADOS, QUANDO ELE FOR CLICADO, A FUNÇÃO É CHAMADA, PASSANDO DE VOLTA ATÉ O APP
                    //E SETANDO ELE NO STATE QUE FOI CRIADO PRA SABER QUAL A TASK QUE FOI SELECIONADA
                    task, 
                    time, 
                    selected, 
                    completed, 
                    id, 
                }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.completed} aria-label='completedTask'></span>}    
        </li>
    )
}

export default Item;