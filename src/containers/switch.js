

class Switch extends React.Component{
	constructor(){
		super()

		this.state={
			view: 0
		}
	}

	ComponentDidMount(){
		setView = number() => {
			this.setState({view: number})
		}
	}

	render(){
		const view = this.state.view

		let viewContainer  = null;

		if (view === 0){
			viewContainer = <Home 
				setView = {this.setView}
			/>

		}

		if (viewContainer === 1){
			viewContainer = <Data 
				setView ={this.setView}
			/>
		}

		return(
				<div>
					{viewContainer}
				</div>
			)
	}
}

export default Switch