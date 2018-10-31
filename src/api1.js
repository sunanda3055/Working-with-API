import React from 'react';
import Axios from 'axios';

class Api1 extends React.Component{

    constructor(){
        super();
        this.state={
            userData: [],
            userDetail: null,
        };
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData =() =>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log('respo------------', response)
                this.setState({userData: response.data});
                // this.state.userData=response.data;    wrong way of doing
                //console.log(this.state.userData)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    displayUser=(id)=>{
        const currentUser = this.state.userData.filter((_data) => {
            return _data['id'] === id;
        });
        /*const info = currentUser[0];
        const addressArr = Object.entries(info.address);*/

        console.log('current  user --------', currentUser[0])
        //console.log('current  user address --------', addressArr)

        this.setState({
            userDetail: currentUser[0],
        })
        //console.log('id---------------', id);

    }

    render(){
        let _list = this.state.userData.map((_data) => {
            return (
                <div key={_data.email} style={{ border:'1px solid black', width:'50%', margin:'10px', padding:'5px'}}>
                    <span onClick={() => { this.displayUser(_data.id) }}>{_data.email}</span>
                    {/*<DeleteUserComponent id={_data.id}/>*/}
                </div>
            )
        });
        // console.log('------------------', this.state.userDetail);
        return(
            <div>
                <div>
                    {
                        _list
                    }
                </div>

                {
                    this.state.userDetail && (
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{ this.state.userDetail.name }</td>
                                </tr>

                                <tr>
                                    <th>User Name :</th>
                                    <td>{ this.state.userDetail.username }</td>
                                </tr>

                                <tr>
                                    <th>Name :</th>
                                    <td>{ this.state.userDetail.email }</td>
                                </tr>

                                <tr>
                                    <th>Street :</th>
                                    <td>{ this.state.userDetail.address.street }</td>
                                </tr>

                                <tr>
                                    <th>Suite :</th>
                                    <td>{ this.state.userDetail.address.suite }</td>
                                </tr>

                                <tr>
                                    <th>City :</th>
                                    <td>{ this.state.userDetail.address.city }</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                    )}
            </div>
        )
    }

}

export default Api1;