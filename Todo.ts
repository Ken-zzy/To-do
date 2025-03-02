interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate?: Date;
  }
  
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    addTodo(task: string, dueDate?: Date): void {
      if (!task) {
        console.error("Task cannot be empty.");
        return;
      }
      this.todos.push({
        id: this.nextId++,
        task,
        completed: false,
        dueDate: dueDate,
      });
    }
  
    completeTodo(id: number): void {
      const todo = this.todos.find((item) => item.id === id);
      if (todo) {
        todo.completed = true;
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    removeTodo(id: number): void {
      const index = this.todos.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    filterTodosByCompleted(completed: boolean): TodoItem[] {
      return this.todos.filter((item) => item.completed === completed);
    }
  
    updateTask(id: number, newTask: string): void {
      const todo = this.todos.find((item) => item.id === id);
      if (todo) {
        if (!newTask) {
          console.error("New task cannot be empty.");
          return;
        }
        todo.task = newTask;
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    clearCompletedTodos(): void {
      this.todos = this.todos.filter((item) => !item.completed);
    }
  
    updateDueDate(id: number, newDueDate: Date): void {
      const todo = this.todos.find((item) => item.id === id);
      if(todo) {
          todo.dueDate = newDueDate;
      } else {
          console.error(`Todo with ID ${id} not found.`);
      }
    }
  }
  