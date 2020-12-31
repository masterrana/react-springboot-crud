import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state ={

            // step: 2
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
        this.saveEmployee = this.saveEmployee.bind(this);
    }


    // step : 3
    componentDidMount(){

        // step : 4

        if(this.state.id == '_add'){  
            return 
        }else{
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
    }   



    saveEmployee=(e)=>{
        e.preventDefault();
        let employee = { firstname : this.state.firstname,secondname : this.state.secondname, lastname : this.state.lastname, emailId: this.state.emailId}
        console.log("employee = >" + JSON.stringify(employee));

        if(this.state.id == '_add'){  
        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employees')
                })
        }else{
        EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
            this.props.history.push('/employees')

        })
    }
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

    getTitle(){
        if(this.state.id=== '_add'){
        return  <h3 className="text-center"> Add Employee</h3>
        }else{
        return   <h3 className="text-center"> Update Employee</h3> 
        }
    }

    render() {
        return (
            <div>
              <div className= "container mt-3">
              <div className="row">

                  <div className ="card col-md-4 offset-md-2 offset-md-3">
                  {
                      this.getTitle()
                  }
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
                     <button  className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent;