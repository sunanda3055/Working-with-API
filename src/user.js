import React from 'react';
import Axios from 'axios';
import Employee from './employee'

class User extends React.Component{

    constructor(){
        super();
        this.state={
            empData: [],
            empDetail: {},
            isEditMode: false,
            isDeleteMode: false,
        };
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData =() =>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({empData: response.data}, () => {
                    console.log(" >>>> ", this.state.empData);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleNameOnClick = (id) => {

        const currentEmp = this.state.empData.filter((_data) => {
            return _data['id'] === id;
        });

        console.log('current user --------', currentEmp);

        this.setState({
            empDetail: currentEmp[0]
        })
    }

    empDetailHandlerShow=()=>{
        this.setState({isEditMode : true});
    }

    handleOnUpdateDetail = (detail) => {
        console.log('Detail--->',detail);
        //this.setState({empDetail: detail});

        const objIndex = this.state.empData.findIndex((obj => obj.id === detail.id));

        const updatedEmpData = [
            ...this.state.empData.slice(0, objIndex),
            detail,
            ...this.state.empData.slice(objIndex + 1),
        ];

        this.setState({
            empData: updatedEmpData,
            empDetail: detail,
            isEditMode: ""
        });
    }

    handleDeleteAction = (id) =>{
        const objIndex = this.state.empData.findIndex((obj => obj.id === id));

        const updatedEmpData = [
            ...this.state.empData.slice(0, objIndex),
            ...this.state.empData.slice(objIndex + 1),
        ];

        this.setState({
            isDeleteMode: "true",
            empData: updatedEmpData,
            empDetail: {}
        }, () => {
            console.log('empDetail Delete --->',this.state.empDetail);
            console.log('empData--->',this.state.empData);
        });
    }

    render() {

        return (
            <div>
                {this.state.empData.length ?
                <Employee
                    empData={this.state.empData}
                    handleNameOnClick={this.handleNameOnClick}
                    empDetail = {this.state.empDetail}
                    empDetailHandler={this.empDetailHandlerShow}
                    isEditMode = {this.state.isEditMode}
                    handleOnUpdateDetail = {this.handleOnUpdateDetail}
                    handleDeleteAction = {this.handleDeleteAction}
                />:
                    <div>LOADING....</div>
                }
            </div>

        )
    }
}
export default User;