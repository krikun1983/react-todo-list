export interface TodoListItemProps {
  label: string;
  id: number;
}

export interface TodoListItemFuncProps extends TodoListItemProps {
  onDeleted: () => void;
}

export interface TodoListProps {
  todos: TodoListItemProps[];
  onDeleted: (id: number) => void;
}
