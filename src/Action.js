

export const ChangeList = (lista) => {
    return {
        type: 'CHANGE',
        payload: lista
    }
}

export const SetUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const ClearUser = () => {
    return {
        type: 'CLEAR_USER'
    }
}

export const ChangeUser = (field, value) => {
    return {
        type: 'CHANGE_USER',
        payload: {field, value}
    }
}