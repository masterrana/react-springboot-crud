import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            employee:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res=>{
            this.setState({employee: this.state.employee.filter(emp=> emp.id !==id)})
        })
    }

    viewEmployee(id){
        this.props.history.push(`/viewEmployees/${id}`)
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({ employee : res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/addEmployees/_add')
    }

    // editEmployee(id){
    //     this.props.history.push(`/updateEmployees/${id}`)
    // }

  editEmployee(id){
        this.props.history.push(`/addEmployees/${id}`)
     }
     

    render() {
        return (
            <div>
                <h2 style={{textAlign:"center"}}> Employees List</h2>
                <div>
                <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                    <table className="table">
                    <thead className="thead-dark">
                            <tr>
                          
                                <th scope="col">Employee First Name</th>
                                <th scope="col">Employee Middle Name</th>
                                <th scope="col"> Employee Last Name</th>
                                <th scope="col">Employee Email Id</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                    <tr key ={employee.id}>
                                        <td> {employee.firstname}</td>
                                        <td> {employee.secondname}</td>
                                        <td> {employee.lastname}</td>
                                        <td> {employee.emailId}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style ={{marginLeft:"10px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style ={{marginLeft:"10px"}} onClick={() => this.viewEmployee(employee.id)} className="btn btn-danger">View</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default ListEmployeeComponent
