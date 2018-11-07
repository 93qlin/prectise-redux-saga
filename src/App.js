import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {increment,incrementAsync} from './actions/counter'
import {get_user} from './actions/user'
class App extends Component {
    render() {
        const {isFetching,error,user} = this.props.user
        let data = error
        if(error){

        }else if(isFetching){
            data = "loading..."
        } else{
            data = user && user.data[0].name
        }
        return (
            <div className="App">
                <header className="App-header">
                    {this.props.counter}
                    <p>
                        <button onClick={this.props.increment}>+</button>
                        <br/>
                        <button onClick={this.props.incrementAsync}>async +</button>
                        <br/>
                        <button onClick={this.props.get_user}>Get uset+</button>
                    </p>
                    <h1>{data}</h1>
                </header>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}

export default connect(mapStateToProps,{increment,incrementAsync,get_user})(App);
