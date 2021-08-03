export interface TodoListItemProps {
  label: string;
  id: number;
}

export interface TodoListProps {
  todos: TodoListItemProps[];
}
