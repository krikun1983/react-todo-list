export type ListItemProps = {
  label: string;
  important: boolean;
};

export type TodoListProps = {
  todos: ListItemProps[];
};
