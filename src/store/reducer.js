//Actions
const DEPOSIT = 'DEPOSIT';
const TRANSFER = 'TRANSFER'

export const deposit = (entradas, deposit, saldo) => {
    return {
        type: DEPOSIT,
        valorInicial: 2000,
        entradas: entradas,
        deposits: deposit,
        saldoFinal: saldo
    }
}

export const transfer = (saida, conta, pendente) => {
    return {
        type: TRANSFER,
        saidas: saida,
        contas: conta,
        pendente: pendente
    }
}

//Reducers

const initialState = {
    saidas: 899,
    contas: [0],
    pendente: 3000,
    deposits: [0],
    saldoFinal: 0
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case DEPOSIT:
            if(action.deposits <= 0){
                return{
                    ...state,
                    valorInicial: action.valorInicial,
                    entradas: action.entradas,
                    saldoFinal: action.saldoFinal
                }
            }
            if(state.deposits.length >= 4){
                return {
                    ...state,
                    valorInicial: action.valorInicial,
                    entradas: action.entradas,
                    deposits: [...state.deposits.splice(1), action.deposits ],
                    saldoFinal: action.saldoFinal
                }
            }
            return {
                ...state,
                valorInicial: action.valorInicial,
                entradas: action.entradas,
                deposits: [...state.deposits, action.deposits],
                saldoFinal: action.saldoFinal
            }
        case TRANSFER:
            if(action.contas <= 0){
                return{
                    ...state,
                    saidas: action.saidas,
                    pendente: action.pendente
                }
            }
            if(state.contas.length >= 4){
                return {
                    ...state,
                    saidas: action.saidas,
                    contas: [...state.contas.splice(1), action.contas ],
                    pendente: action.pendente
                }
            }
            return {
                ...state,
                saidas: action.saidas,
                contas: [...state.contas, action.contas],
                pendente: action.pendente
            }
        default: return state
    }
}