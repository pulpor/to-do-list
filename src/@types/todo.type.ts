export type UpdateTodoType = {
    id: number;
    title: string;
    description: string;
    status: boolean;
    date: string;
}

export type TodoType = UpdateTodoType

// Omit, iguala o anterior, porém da opção de omitir algumas keys
export type NewTodoType = Omit <UpdateTodoType, 'id'>
