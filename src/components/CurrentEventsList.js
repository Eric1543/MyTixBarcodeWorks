import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import axios from 'axios';
import CurrentEvents from "./currentEvents"

class CurrentEventsList extends React.Component{
	constructor(){
		super();

		// var array= this.props.currentEvents[0]
		// 	console.log(array)
		
		this.state={
			items: []
		}
	}


		

	render(){
		
		 

		// console.log(item)
		// console.log(item[0])


			return (
				<ListGroup>		
					{this.props.currentEvents.map(item =>
					
						<ListGroupItem className="eventsList" key={item._id}>
						<CurrentEvents  editEvent={this.props.editEvent}  name={item.Name} options={item.Option} id={item._id} editOption={this.props.editOption} startdate={item.StartDate} endDate={item.EndDate}
							/>
							
						</ListGroupItem>
					)}
				
				</ListGroup>	

				)
		}
	
	}

export default CurrentEventsList;