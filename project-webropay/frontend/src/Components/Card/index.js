import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import { editStatus } from '../../Actions/contracts'


const Container = styled.div`

`

const CardContract = styled.div`
min-width:45vw;
height:auto;
display:grid;
padding:0px 10px;
grid-template-columns: 65% 1fr 1fr;
align-items:center;
height:50px;
background-color:white;
border-radius:5px;
margin:auto;
margin-top: 10px;
margin-bottom: 5px;
border:none;
color:black;
border-radius:15px;
`

const DescriptionContract = styled.p`
font-size:1em;
font-weight:bold;
`

const TextStatus = styled.span`
font-weight:bold;
color: ${props => props.color === "true" ? "#71ff54" : "#fc3232"}}
`;

const IconEdit = styled.span`
cursor:pointer;
color:blue;
margin-left:60px;
`

const InputEditStatus = styled.input`
border:none;
height: 25px;
width:90px;
font-size:15px;
font-weight:bold;
outline: none;
border-radius:5px;
`

class Card extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            editStatus: false,
            inputEditStatus:""
        }
    }



    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    statusEdit = (id, newStatus) =>{
        try{
            id = this.props.contract.id
            const newStatus = this.state.inputEditStatus
            this.props.editStatus(id,newStatus) 
            this.setState({inputEditStatus: ""})
            this.setState({editStatus: !this.state.editStatus})               
        }catch(e){
            console.log(e.message)
        }
    }

    sendPressEnter = (e) =>{
        if (e.keyCode === 13){
			this.statusEdit()		
		}
    }

    editInputShow = () =>{
        this.setState({editStatus: !this.state.editStatus})
    }

    render(){
        console.log("teste edição: ", this.state.inputEditStatus)
        return(
            <Container>
                <CardContract>
                    <DescriptionContract>{this.props.contract.description}</DescriptionContract>
                    <TextStatus color={this.props.contract.status ? 'true': 'false'}> {this.state.editStatus ?
                        <InputEditStatus type="text"
                                           onChange={this.handleChange}
                                           onKeyDown={this.sendPressEnter}
                                           value={this.state.inputEditStatus}
                                           name="inputEditStatus"
                                           placeholder="novo status"/> : this.props.contract.status ? 'true': 'false' }  
                    </TextStatus>
                    <IconEdit onClick={this.editInputShow}><EditIcon/></IconEdit>   
                </CardContract>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editStatus: (id, newStatus) => dispatch(editStatus(id, newStatus)),  
    }
}

export default connect(null, mapDispatchToProps)(Card);