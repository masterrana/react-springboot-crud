import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id,
            firstname:'',
            secondname:'',
            lastname:'',
            emailId:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee = res.data;
            this.setState({
                firstname : employee.firstname,
                secondname:employee.secondname,
                lastname:employee.secondname,
                emailId:employee.emailId
            });

        });
    }
    
    updateEmployee=(e)=>{
        e.preventDefault();
        let employee = { firstname : this.state.firstname,secondname : this.state.secondname, lastname : this.state.lastname, emailId: this.state.emailId}
        console.log("employee = >" + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
            this.props.history.push('/employees')

        })
    }


    changeFirstNameHandler =(event)=>{
        this.setState({firstname : event.target.value});
    }
    changeMiddleNameHandler =(event)=>{
        this.setState({secondname : event.target.value});
    }
    changeLastNameHandler =(event)=>{
        this.setState({lastname : event.target.value});
    }
    changeEmailIdHandler =(event)=>{
        this.setState({emailId : event.target.value});
    }

    cancel(){
        this.props.history.push('/employees') 
    }

    render() {
        return (
            <div>
              <div className= "container mt-3">
              <div className="row">

                  <div className ="card col-md-4 offset-md-2 offset-md-3">
                  <h3 className="text-center"> Update Employee</h3>
                  <div className="card-body">
                    <form>
                    <div className="form-group">
                       <label> First Name :</label>
                       <input placeholder="First Name" name="firstname" className="form-control" 
                       value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                    </div>
                    <div className="form-group">
                       <label> Middle Name :</label>
                       <input placeholder="Middle Name" name="secondname" className="form-control" 
                       value={this.state.secondname} onChange={this.changeMiddleNameHandler}/>
                    </div>
                    <div className="form-group">
                       <label> Surname :</label>
                       <input placeholder="last Name" name="lastname" className="form-control" 
                       value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                    </div>
                    <div className="form-group">
                       <label>EmailId:</label>
                       <input placeholder="EmailId" name="emailId" className="form-control" 
                       value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                    </div>
                    <div className="container mt-3">
                     <button  className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                     <button  className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                    </div>
                    </form>

                  </div>

                  </div>
              </div>
              </div>
            </div>
        );
    }
}


export default UpdateEmployeeComponent;