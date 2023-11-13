import React, { useState, useContext } from 'react';
import {
  IonApp,
  IonContent,
  IonPage,
} from '@ionic/react';

import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoginContext } from '../App';
import { useHistory } from 'react-router';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);


  const contextValue = useContext(LoginContext);
  const history = useHistory();

  if(!contextValue?.isUserLogin){
    history.push('/login');
  }

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <IonApp>
      <IonPage>

      <Header headingText="Todo App"/>
      <IonContent>
          <div
            style={{
              display: 'flex',
           
              flexDirection: 'column',
             alignItems: "center",
              marginTop : "4rem"
            }}
          >  <h2>TODO APP</h2>
            <div style={{maxWidth: "500px"}}>
            <AddTodo onAdd={handleAdd}  />
            <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
            </div>
          </div>
        </IonContent> 
      </IonPage>
      <Footer/>
    </IonApp>
  );
};

export default TodoApp;
