import {Component} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import './index.css'
class Add extends Component{
  saveForm = (event) => {
    event.preventDefault()
    alert('form')
  
  let data = {
    date : document.getElementById('date').value,
    description : document.getElementById('description').value,
    transaction_type : document.getElementById('paymentType').value,
    balance: document.getElementById('amount').value
  }
  console.log(data)
  axios.post('http://localhost:8000/add-tranaction',data).then((response) => {
    this.setState({ usersData: response.data });
  });
}
  render(){
    return (
      <div className ='form-card'>
                <div >
        <Form onSubmit={this.saveForm}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>date</Form.Label>
            <Form.Control type="date" placeholder="Enter date" id='date'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" placeholder="Enter description of payment" id='description'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Pyment type</Form.Label> <br/>
            <select id='paymentType'>
              <option>credit</option>
              <option>debit</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount" id='amount'/>
          </Form.Group>
          
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
        </div>
      </div>

      );
  }  
}

export default Add;