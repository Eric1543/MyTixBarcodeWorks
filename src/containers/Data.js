import React from 'react'

class Data extends React.Component{
	constructor(){
		super();

		this.state={

		}
	}


	render(){
		return(
				<Col bsClass="col" xs={3}>	
					<Button block>Ticket Sales</Button>
					<Button block>Attendance</Button>
							<ListGroup>
								<ListGroupItem>
									<Button></Button>
								</ListGroupItem>
							</ListGroup>
						</Col>
			)
	}
}

export default Data;