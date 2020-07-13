import axios from 'axios'

const baseURL = 'http://localhost:8080/webropay-api/v1'

export const setContracts = (allContracts) => ({
    type: "SET_CONTRACTS",
    payload:{
        allContracts
    }
})

export const getContracts = () => async(dispatch) => {
    try{
        const response = await axios.get(`${baseURL}/contract/all`)
        dispatch(setContracts(response.data))
    } catch(error) {
        window.alert("erro ao exibir os contratos")
    }
}

export const createNewContract = (id,description,status) => async(dispatch) => {

    const newContract = {
        id,
        description,
        status
    }

    try{
        const response = await axios.post(`${baseURL}/contract`, newContract)
        dispatch(getContracts())
    }catch(error){
        window.alert("erro ao cadastrar um novo contrato")
    }
}

export const editStatus = (id,newStatus) => async(dispatch) => {
    const statusEdited = {
        newStatus
    }
    try{
        const response = await axios.put(`${baseURL}/contract/${id}`, statusEdited)
        dispatch(getContracts())
    }catch(error){
        window.alert("erro ao editar o status do contrato")
    }
}