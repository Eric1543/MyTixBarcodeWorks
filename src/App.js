import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem, Grid, Nav, NavItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import Home from "./containers/Home"
import CreateNewEvent from "./containers/CreateNewEvent"
import Settings from "./containers/Settings"
import { Route, Switch } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
import helper from "./utils/helpers.js"
import Event from './event'




class App extends React.Component{

	constructor(){
		super();

		this.state={
			options: [],
			events: []
		}
		this.makeNewOption = this.makeNewOption.bind(this)
		this.makeNewEvent = this.makeNewEvent.bind(this)
		this.editEvent = this.editEvent.bind(this)
		this.editOption = this.editOption.bind(this)
	}

	makeNewOption(newOptionName, newOptionPrice, newOptionQuantity,newOptionLocation, newOptionDescription){
		axios
			.post('/api/newOption', {
				optionName: newOptionName,
				optionPrice: newOptionPrice,
				optionQuantity: newOptionQuantity,
				optionLocation: newOptionLocation,
				optionDescription: newOptionDescription
			})
			.then(response => {
				console.log(response.data)
				var newOptions = this.state.options
				newOptions.push(response.data)
				this.setState({	

						options: newOptions 

		})
	})
}

	makeNewEvent(newEventName, newEventStart, newEventEnd, newEventLocation, newEventPicture, customer, options){
		axios
			.post('/api/newEvent', {
					Name: newEventName,
					StartDate: newEventStart,
					EndDate: newEventEnd,
					location: newEventLocation,
					picture: newEventPicture,
					Customer: this.state.customer,
					Option: this.state.options
					
			})
			.then(response =>{
				console.log("In makeNewEvent app.js");
				console.log(response.data);

				var newEvent = this.state.events;
				newEvent.push(response.data);
				console.log("New Event before set state");
				console.log(newEvent);

				this.setState({	

						events: newEvent
					});

				console.log("this.state.events after set state");
				console.log(this.state.events);
				console.log(response);
			})
	}

	editEvent(eventId, formEditName, formEditStartDate, formEditEndDate, formEditLocation, formEditPicture){
			var url='/api/Events/' + eventId;
			console.log('URL: ' + eventId);
		axios.post(url, {
					Name: formEditName,
					StartDate: formEditStartDate,
					EndDate: formEditEndDate,
					location: formEditLocation,
					picture: formEditPicture

				}
		).then(response =>{
				console.log(response.data)
				var newEvent = this.state.events
				newEvent.push(response.data)
				this.setState({
					events: newEvent
				})
				console.log("POSTED")
			})
		}

		editOption(optionID, formEditOptionName, formEditOptionPrice, formEditOptionQuantity, formEditOptionLocation, formEditOptionDescription){
			var url=('/api/Option/' + optionID);
			console.log(url)
			axios.post(url, {
				optionName:formEditOptionName,
				optionPrice: formEditOptionPrice,
				optionQuantity: formEditOptionQuantity,
				optionLocation: formEditOptionLocation,
				optionDescription: formEditOptionDescription
			}
			).then(response =>{
				console.log(response.data)
				var newOptions = this.state.options
				newOptions.push(response.data)
				this.setState({
					options: newOptions
				})
				console.log("option Edited")
			})
		}




	render(){
		return(
		<div>
			<Grid  fluid id="header">
				<Row bsClass="row">
					<Col bsClass="col" xs={12}>
						<h1> Welcome User</h1> 
					</Col>   
				</Row>
			</Grid>
			<Grid fluid>
				<Row bsClass="row">
					<Col bsClass="col" xs={4}>
						<Nav bsStyle="pills" stacked activeKey={1} id="nav">
							<LinkContainer exact to="/home"><NavItem  id=" navItem" eventKey={1}>Home</NavItem></LinkContainer>
							<LinkContainer exact to="/home/newevent"><NavItem  eventKey={2}>Create New Events</NavItem></LinkContainer>
							<LinkContainer exact to= "/home/editUser"><NavItem eventKey={3}>User Settings</NavItem></LinkContainer>
						</Nav>	
					</Col>	
					<Col xs={8}>
						<div className="reactComponents">
						<Switch>
							<Route exact path="/home" render={(props) =><Home  editEvent={this.editEvent} editOption={this.editOption}/>} />
							<Route exact path="/home/newevent" render={(props)=><CreateNewEvent makeNewOption={this.makeNewOption} makeNewEvent={this.makeNewEvent} options={this.state.options}/>} />
							<Route exact path="/home/editUser" component={Settings} />
						


					</Switch>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>				
		);
	}
}
// Buttons Will Have onClicks
	export default App;
