import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Card from '../../Components/Card/index.js'
import { getContracts,createNewContract } from '../../Actions/contracts'


const Container = styled.div`
width:100%;
min-height:100vh;
align-items:center;
background-color:#fa2f40;
font-family: 'Roboto', sans-serif;
padding-bottom:50px;
`

const ContainerNewContracts = styled.div`
display: flex;
align-items:center;
justify-content:center;
`

const ContainerInputsNewContracts = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:35px;
padding:15px;
width:45vw;
height:auto;
background-color:white;
border-radius:5px;
`

const TextNewContract = styled.p`
font-weight:bold;
font-size:1.5em;
`

const ContainerInputDescription = styled.div`
margin-bottom:15px;
`

const ContainerInputId = styled.div`
margin-bottom:15px;
`

const ContainerInputStatus = styled.div`
margin-bottom:25px;
`

const InputsNewContract = styled(TextField)`
width:25vw;
padding-top:15px;
`

const ButtonNewContract = styled.button`
width:15vw;
height:5vh;
margin-bottom:10px;
background-color:#fa2f40;
color:white;
border:none;
border-radius:15px;
outline: none;
cursor:pointer;
font-weight:bold;
-webkit-box-shadow: 6px 6px 10px rgba(0,0,0,0.5); 
-moz-box-shadow: 6px 6px 10px rgba(0,0,0,0.5);
box-shadow: 5px 6px 10px rgba(0,0,0,0.5);
:hover{
  background-color:rgba(250,47,64,0.8);
  -webkit-transition: 0.5s;
}
`

const TitleContracs = styled.h2`
margin-top:30px;
margin-bottom:40px;
`

const ContainerCards = styled.div`
width:100%;
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
`

class HomePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        description:"",
        id:"",
        status:""    
    }
  }

  componentDidMount(){ 
    this.props.getContracts()
}

handleChange = event =>{
  this.setState({
      [event.target.name]: event.target.value 
  })
}

createNewContracts = async(e) => {
  e.preventDefault()
  this.props.createNewContract(this.state.id, this.state.description, this.state.status)
  this.setState({
    id: "",
    description: "",
    status: ""
})
}

    render(){
    document.title = 'Webropay - Lucas Campioto'
    return (
        <Container>
            <ContainerNewContracts>
                <ContainerInputsNewContracts>
                    <TextNewContract>Novo Contrato</TextNewContract>
                    <ContainerInputDescription>
                      <InputsNewContract 
                        onChange={this.handleChange}
                        name="description"
                        value={this.state.description}
                        type="text"
                        label="Descrição"  
                      />
                    </ContainerInputDescription>
                    <ContainerInputId>
                      <InputsNewContract
                        onChange={this.handleChange}
                        name="id"
                        value={this.state.id}
                        type="text"
                        label="Id"  
                      />
                    </ContainerInputId>
                    <ContainerInputStatus>
                      <InputsNewContract
                        onChange={this.handleChange}
                        name="status"
                        value={this.state.status}
                        type="text" 
                        label="Status"  
                      />
                    </ContainerInputStatus> 
                    <ButtonNewContract onClick={this.createNewContracts}>Cadastrar</ButtonNewContract>
                </ContainerInputsNewContracts>
            </ContainerNewContracts>
            <ContainerCards>
              <TitleContracs>Contratos</TitleContracs>
              {this.props.getToContracts.map((contract) => (
                  <Card 
                    contract={contract}
                  />
              ))}
            </ContainerCards>
        </Container>  
    );
  }
}

const mapStateToProps = (state) => ({
  getToContracts: state.contractsReducer.allContracts
})

const mapDispatchToProps = (dispatch) => {
  return {
      getContracts: () => dispatch(getContracts()),
      createNewContract: (id,description,status) =>  dispatch(createNewContract(id,description,status))
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);