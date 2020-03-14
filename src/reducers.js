import { combineReducers } from 'redux'


const initialState = {
    Lista: [{name: 'Augusto Henrique do Amaral', email: 'augusto.h.amaral@gmail.com', phone: '(11) 974569246'}],
    usuario: { name: '', email: '', phone: '' },
};

const ListaDeUsuarios = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                Lista: [...action.payload],
            };
        case 'SET_USER':
            return {
                ...state,
                usuario: action.payload
            }
        case 'CLEAR_USER':
            return {
                ...state,
                usuario: { name: '', email: '', phone: '' }
            }
        case 'CHANGE_USER': {
            const newUser = { ...state.usuario, [action.payload.field]: action.payload.value }
            return {
                ...state,
                usuario: newUser
            }
        }
        default:
            return state;
    }
};

const Reducers = combineReducers({
    lista: ListaDeUsuarios,

});

export default Reducers;