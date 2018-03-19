class Button extends React.Component{
  handleClick =  () => {
  	this.props.onClickFunction(this.props.increamentValue);
  };
	render(){
  	return (
    //{this.state.counter}
    	<button 
      onClick= {this.handleClick}>
      +{this.props.increamentValue}
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter} </div>
  );
};

class App extends React.Component{
	state = {counter : 0};
  increamentCounter = (value) =>{
  	  	this.setState((prevStateas) =>({
      counter : prevStateas.counter +value
    }));
  };
	render(){
  	return(
    	<div>
    	  <Button increamentValue = {1} onClickFunction= {this.increamentCounter} />
        <Button increamentValue = {5} onClickFunction= {this.increamentCounter} />
        <Button increamentValue = {10} onClickFunction= {this.increamentCounter} />
        <Button increamentValue = {100} onClickFunction= {this.increamentCounter} />
        <Result counter = {this.state.counter}/>
    	</div>
    );
  }
}

ReactDOM.render(<App />, mountNode);