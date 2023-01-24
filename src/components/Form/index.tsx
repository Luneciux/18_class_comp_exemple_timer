import React from "react";
import Button from "../Button";
import { ITask } from "../../types/ITask";
import {v4 as uuidv4} from 'uuid';

import style from './Form.module.scss';




class Form extends React.Component <{ setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>> }> {
    
    state = {
        task: "",
        time: "00:00"
    }

    addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTasks(oldTasks => 
            [
                ...oldTasks, 
                { 
                    ...this.state,
                    selected: false,
                    completed: false, 
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            task: "",
            time: "00:00"
        });
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add some task
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Some task"
                        value={this.state.task}
                        required
                        onChange={e => this.setState({...this.state, task: e.target.value})}
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.time}
                        required
                        onChange={e => this.setState({...this.state, time: e.target.value})}
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        )
    }
}

export default Form;