//enum é enumerador, tipo de dado que consiste em um conjunto de chaves e valores.

enum TodoStatus {
    PEENDING = 'Pendente',
    FINISHED = 'Finalizado',
}

enum ActionType {
    ADD_TODO = 'ADD_TODO',
}

export { TodoStatus, ActionType }

export enum ConstantsEnum {
    FAKE_TIME_REQUEST = 2000,
    KEY_LOCAL_STORAGE = 'todos'
}
