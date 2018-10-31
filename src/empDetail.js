import React , {Component} from 'react';
import './style.css';

class EDetail extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let {emp,empDetailHandlerEdit,handleDeleteAction} = this.props;

        return(
            <div>
                    {
                        emp && (

                            <table className='user-table'>
                                <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{ emp.name }</td>
                                </tr>

                                <tr>
                                    <th>User Name :</th>
                                    <td>{ emp.username }</td>
                                </tr>

                                <tr>
                                    <th>Email:</th>
                                    <td>{ emp.email }</td>
                                </tr>

                                <tr>
                                    <th>Address :</th>
                                </tr>

                                <tr>
                                    <th>Street:</th>
                                    <td>{ emp.address.street }</td>
                                </tr>

                                <tr>
                                    <th>Suite:</th>
                                    <td>{ emp.address.suite }</td>
                                </tr>

                                <tr>
                                    <th>City:</th>
                                    <td>{ emp.address.city }</td>
                                </tr>

                                <tr>
                                    <th>ZipCode:</th>
                                    <td>{ emp.address.zipcode }</td>
                                </tr>

                                <tr>
                                    <td><button onClick={empDetailHandlerEdit}>EDIT</button></td>
                                    <td><button onClick={() => handleDeleteAction(emp.id)}>DELETE</button></td>
                                </tr>

                                </tbody>
                            </table>
                        )
                    }

                </div>
        )
    }

}

export default EDetail;
