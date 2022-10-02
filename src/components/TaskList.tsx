import styles from './TaskList.module.css';
import { ClipboardText } from 'phosphor-react';
import Task from './Task';
import { ITask } from '../App';

interface TaskListProps {
    tasks: ITask[];
    onDeleteTask(taskIdToDelete: string): void;
    onFinishTask(taskIdToFinish: string): void;
}

export function TaskList({ tasks, onDeleteTask, onFinishTask }: TaskListProps) {

    function getFinishedTasks() {
        let finishedTasks = 0;
        tasks.forEach(task => {
            if (task.isFinished) {
                finishedTasks = finishedTasks + 1;
            }
        });
        return finishedTasks;//finishedTasks.length;
    }

    const totalTasks = tasks.length;
    const finishedTasks = getFinishedTasks();

    const isTaskListEmpty = tasks.length == 0;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <div className={styles.createdTasks}>
                        <label>Tarefas criadas</label>
                        <span>{totalTasks}</span>
                    </div>

                    <div className={styles.finishedTasks}>
                        <label>Concluídas</label>
                        <span>{totalTasks != 0 ? `${finishedTasks} de ${totalTasks}` : `${totalTasks}`}</span>
                    </div>
                </header>

                <main>
                    {isTaskListEmpty
                        ? <div className={styles.emptyTaskList}>
                            <ClipboardText size={56} />
                            <span>Você ainda não tem tarefas cadastradas</span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>

                        : <div className={styles.taskList}>
                            {
                                tasks.map(task => {
                                    return (
                                        <Task
                                            key={task.id}
                                            task={task}
                                            onDeleteTask={onDeleteTask}
                                            onFinishTask={onFinishTask}
                                        />
                                    );
                                })
                            }
                        </div>
                    }
                </main>
            </div>
        </div>
    );
}