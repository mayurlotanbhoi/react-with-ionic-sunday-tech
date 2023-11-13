import React, { useState } from 'react';
import { IonInput, IonButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <IonInput
        value={text}
        placeholder="Enter a new task"
        onIonChange={(e) => setText(e.detail.value!)}
      ></IonInput>
      <IonButton expand="full" onClick={handleAdd}>
        <IonIcon icon={addOutline} slot="start" />
        Add Task
      </IonButton>
    </div>
  );
};

export default AddTodo;
