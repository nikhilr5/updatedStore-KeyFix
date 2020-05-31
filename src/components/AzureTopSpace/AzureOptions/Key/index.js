import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {connect} from 'react-redux';
import store from '../../../../store/';
import { flip_entered_key, azure_key } from '../../../../redux/actions'



class UserInput extends React.Component {


  constructor(props) {

    super(props);
    
    // var cat = localStorage.getItem('testerID');
    // document.getElementById('testercool').innerHTML = 'dp[e';

    if (store.azureKeyReducer == undefined) {
    this.state = {value: ''};
    } else {
      var temp = store.azureKeyReducer;
      if (temp.length > 5) {
      temp = temp.substr(temp.length - 4);
      }
      this.state = {value: "********************" + temp};
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    alert('A key was submitted: ' + this.state.value);
    store.azureKeyReducer = this.state.value;
    event.preventDefault();
    localStorage.setItem('testerID', this.state.value);

    var temp = store.azureKeyReducer;
    if (temp.length > 5) {
      temp = temp.substr(temp.length - 4);
    }
    

    document.getElementById("azure_key_value").value = "********************" + temp;
    this.state.value = "********************" + temp;
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Key: 
          <input id= "azure_key_value" type="text" placeholder= "Azure Subscription Key" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default UserInput;

