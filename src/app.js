import React from 'react';
import Axios from 'axios';
import Person from './person';

class App extends React.Component{

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
                this.setState({userData: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    displayUser=(id)=>{
        const currentUser = this.state.userData.filter((_data) => {
            return _data['id'] === id;
        });

        this.setState({
            userDetail: currentUser[0],
        })
    }

    render(){
        return(
            <Person userData={this.state.userData} userDetail={this.state.userDetail} displayUser={this.displayUser} />
        )
    }
}

export default App;