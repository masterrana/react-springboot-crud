import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

 class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id,
            employee:{

            }
        }
    }

    componentDidMount(){
     EmployeeService.getEmployeeById(this.state.id).then(res =>{
         this.setState({employee:res.data});
     })
    }

    render() {
        return (
            <div>
            <div className="card col-md-6 offset-md-3">
            <h3>View Employee Details</h3>
            <div className="card-body">
                <div className="row">
                    <label>Employee First Name :</label>
                    <div>{this.state.employee.firstname}</div>
                </div>
                <div className="row">
                    <label>Employee Middle Name :</label>
                    <div>{this.state.employee.secondname}</div>
                </div>
                <div className="row">
                    <label>Employee last Name :</label>
                    <div>{this.state.employee.lastname}</div>
                </div>
                <div className="row">
                    <label>Employee Email :</label>
                    <div>{this.state.employee.emailId}</div>
                </div>
            </div>
            </div>
                
            </div>
        )
    }
}
export default ViewEmployeeComponent