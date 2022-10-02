import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { ITask } from '../App';

interface TaskProps {
    task: ITask;
    onDeleteTask(taskIdToDelete: string): void;
    onFinishTask(taskIdToFinish: string): void;
}

export default function Task({ task, onDeleteTask, onFinishTask }: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleFinishTask() {
        onFinishTask(task.id);
    }

    return (
        <div className={styles.task}>
            <div className={task.isFinished ? styles.checkAndDescriptionFinished : styles.checkAndDescription}>
                {task.isFinished
                    ? <button
                        className={styles.checkCircle}
                        onClick={handleFinishTask}
                    >
                        <CheckCircle size={20} />
                    </button>
                    : <button
                        className={styles.circle}
                        onClick={handleFinishTask}
                    >
                        <Circle size={20}
                        />
                    </button>
                }
                <span>{task.description}</span>
            </div>

            <button
                className={styles.trash}
                onClick={handleDeleteTask}>
                <Trash size={18} />
            </button>
        </div>
    );
}