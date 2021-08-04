import { TodoListItemProps } from './types/list-item';

let idMax = 1;

export const createTodoListItem = (label: string): TodoListItemProps => {
  const newItems = {
    label,
    important: false,
    done: false,
    id: (idMax += 1),
  };
  return newItems;
};

export const search = (arr: TodoListItemProps[], text: string): TodoListItemProps[] => {
  if (!text.length) {
    return arr;
  }
  return arr.filter(item => {
    return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
  });
};

export const filters = (array: TodoListItemProps[], text: string): TodoListItemProps[] => {
  switch (text) {
    case 'all':
      return array;
    case 'done':
      return array.filter(item => item.done);
    case 'active':
      return array.filter(item => !item.done);
    default:
      return array;
  }
};

export const toggleProperty = (arr: TodoListItemProps[], id: number, propName: string): TodoListItemProps[] => {
  const idx = arr.findIndex(item => item.id === id);
  const oldItem = arr[idx];
  const newItem = { ...oldItem, [propName]: !oldItem[propName as keyof typeof oldItem] };

  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
};
