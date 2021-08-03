export interface TodoListItemProps {
  label: string;
  important: boolean;
  done: boolean;
  id: number;
  propName?: string;
}

export interface TodoListItemFuncProps extends TodoListItemProps {
  onDeleted: () => void;
  onToggleDone: () => void;
  onToggleImportant: () => void;
}

export interface TodoListProps {
  todos: TodoListItemProps[];
  onDeleted: (id: number) => void;
  onToggleDone: (id: number) => void;
  onToggleImportant: (id: number) => void;
}

export interface AddTodolistItemFuncProps {
  onAddTodolistItem: (text: string) => void;
}

export type OnSearchChangeFuncProps = {
  onSearchChange: (term: string) => void;
};
