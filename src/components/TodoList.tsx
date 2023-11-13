import React from 'react';
import { IonList, IonItem, IonLabel, IonCheckbox, IonIcon, IonButton } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <IonList>
      {todos.map((todo) => (
        <IonItem key={todo.id}>
          <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => onToggle(todo.id)} />
          <IonLabel>{todo.text}</IonLabel>
          <IonButton fill="clear" slot="end" onClick={() => onDelete(todo.id)}>
            <IonIcon icon={trashOutline} />
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

export default TodoList;
