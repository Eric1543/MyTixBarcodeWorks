import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'
import EditOptions from "./EditOptions"

class EditOptionsList extends React.Component{
	// constructor(){
	// 	super();

	// 	// var array= this.props.currentEvents[0]
	// 	// 	console.log(array)
		
	// 	this.state={
	// 		items: []
	// 	}
	// }


		

	render(){
		
		 


			return (
				<ListGroup>		
					
					{this.props.options.map(item =>
				
						<ListGroupItem key={item._id}>
							<EditOptions  editEvent={this.props.editEvent} name={item.optionName} id={item._id} editOption={this.props.editOption}/>
						</ListGroupItem>
			
					)}
				</ListGroup>	

				)
		}
	
	}

export default EditOptionsList;