import React , {Component} from 'react';
import './style.css';

class EDetailEdit extends Component{

    constructor(props){
        super(props);
        console.log('checking props :',props);
        this.state={
            emp: props.emp
        };
    }

    onInputChange = (e) => {
        let temp ={ ...this.state.emp };
        temp.address[e.target.name] = e.target.value;
        this.setState({emp:temp});
    }

    onUpdateDetails = () =>{
        let {handleOnUpdateDetail} = this.props;
        handleOnUpdateDetail(this.state.emp);
    }

    render(){
        let {isEditMode} = this.props;
        let { emp } = this.state;
        return(
            <div>
                {
                    isEditMode ?
                        <table className='user-table'>
                            <tbody>
                                 <tr>
                                     <th>Name :</th>
                                     <td><input type='text' defaultValue={emp.name} readOnly /></td>
                                 </tr>

                                 <tr>
                                     <th>User Name :</th>
                                     <td><input type='text' defaultValue={emp.username} readOnly /></td>
                                 </tr>

                                 <tr>
                                     <th>Email :</th>
                                     <td><input type='text' defaultValue={emp.email} readOnly /></td>
                                 </tr>

                                 <tr>
                                     <th>Address :</th>
                                 </tr>

                                 <tr>
                                     <th>Street :</th>
                                     <td><input type='text' name='street' value={this.state.emp.address.street} onChange={this.onInputChange}/></td>
                                 </tr>

                                 <tr>
                                     <th>Suite :</th>
                                     <td><input type='text' name='suite' value={this.state.emp.address.suite} onChange={this.onInputChange}/></td>
                                 </tr>

                                 <tr>
                                     <th>City :</th>
                                     <td><input type='text' name='city' value={this.state.emp.address.city} onChange={this.onInputChange}/></td>
                                 </tr>

                                 <tr>
                                     <th>Zipcode :</th>
                                     <td><input type='text' name='zipcode' value={this.state.emp.address.zipcode} onChange={this.onInputChange}/></td>
                                 </tr>

                                 <tr>
                                     <td><button onClick={this.onUpdateDetails}>save</button></td>
                                 </tr>

                                 </tbody>
                                 </table>

                        : <div>edit false</div>
                }

            </div>
        )
    }

}

export default EDetailEdit;
