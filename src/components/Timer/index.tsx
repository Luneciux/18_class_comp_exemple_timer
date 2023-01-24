import { useEffect, useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";

import calcTime from "../../common/utils/date";

import style from './Timer.module.scss';

interface TimerProps {
    selected: ITask | undefined,
    closeTask: () => void
}

function Timer ({selected, closeTask} : TimerProps) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){ setTime(calcTime(selected.time)); }
    }, [selected]);

    //RECURSIVA PARA FAZER UM CONTADOR COM UM TIME SPAN
    function countDown (timeSpan: number = 0) {
        setTimeout(() => {
          if(timeSpan > 0){
            setTime(timeSpan - 1);
            return countDown(timeSpan - 1);
          }
          closeTask();
        }, 1000);
      }
    
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie a contagem</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button
                onClick={() => {console.log(countDown(time))}}
            >
                Start
            </Button>
        </div>
    )
}

export default Timer;