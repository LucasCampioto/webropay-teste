const initialState = {
    allContracts: []
}

const contractsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_CONTRACTS":
            const contractsList = action.payload.allContracts;
            return { ...state, allContracts: contractsList} 

        default:
            return state
    }
}

export default contractsReducer