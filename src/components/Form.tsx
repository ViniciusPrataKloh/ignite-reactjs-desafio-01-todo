import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ITask } from '../App';
import styles from './Form.module.css';
import { v4 as uuiv4 } from 'uuid';

interface FormProps {
    onCreateTask(taskToCreate: ITask): void;
}

export function Form({ onCreateTask }: FormProps) {
    const [description, setDescription] = useState<string>("");

    function handleCreateTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onCreateTask({
            id: uuiv4(),
            description: description,
            isFinished: false
        });
        setDescription('');
    }

    function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    const isDescriptionEmpty: boolean = description.length === 0;

    return (
        <form className={styles.form} onSubmit={handleCreateTask}>
            <div className={styles.formWrapper}>
                <input
                    name='inputForm'
                    type='text'
                    value={description}
                    placeholder='Adicione uma nova tarefa'
                    required
                    onChange={handleChangeDescription}
                />
                <button
                    type='submit'
                    disabled={isDescriptionEmpty}
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </div>
        </form>
    );
}