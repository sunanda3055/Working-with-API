import React, {Fragment} from 'react';

class Person extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let {userData, userDetail, displayUser} = this.props;
        let _list = userData.map((_data) => {
            return (
                <div key={_data.email} style={{ border:'1px solid black', width:'50%', margin:'10px', padding:'1px'}}>
                    <span onClick={() => { displayUser(_data.id) }}>{_data.email}</span>
                </div>
            )
        });

        return(

            <div>
                <Fragment>
                    {
                        _list
                    }
                </Fragment>

                {
                    userDetail && (
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{ userDetail.name }</td>
                                </tr>

                                <tr>
                                    <th>User Name :</th>
                                    <td>{ userDetail.username }</td>
                                </tr>

                                <tr>
                                    <th>Name :</th>
                                    <td>{ userDetail.email }</td>
                                </tr>

                                <tr>
                                    <th>Street :</th>
                                    <td>{ userDetail.address.street }</td>
                                </tr>

                                <tr>
                                    <th>Suite :</th>
                                    <td>{ userDetail.address.suite }</td>
                                </tr>

                                <tr>
                                    <th>City :</th>
                                    <td>{ userDetail.address.city }</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                    )}

            </div>
        )
    }
}

export default Person;