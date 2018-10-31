import React , {Component} from 'react';
import {Alert} from 'react-bootstrap';
import './style.css';
import EDetail from "./empDetail";
import EDetailEdit from "./empDetailEdit";

class Employee extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let {handleNameOnClick, empData,empDetail,empDetailHandler,isEditMode,handleOnUpdateDetail,handleDeleteAction} = this.props;
        let _list = empData.map((_data) => {
            return (
                <div className='api-data' key={_data.id} onClick = {()=> handleNameOnClick(_data.id) }>
                    {_data.name}
                </div>
            )
        });
        console.log('isEditMode : ', isEditMode);
        return(
            <div className='api-display'>
                <Alert>
                    <div className='left'>
                        {_list}
                    </div>
                </Alert>
                {!isEditMode && Object.keys(empDetail).length &&
                        <div className='right'>
                            <EDetail empDetailHandlerEdit={empDetailHandler} emp={empDetail} handleDeleteAction={handleDeleteAction} />
                        </div>
                }
                {isEditMode &&
                    <div>
                        <EDetailEdit isEditMode={isEditMode}  emp={empDetail} handleOnUpdateDetail={handleOnUpdateDetail} />
                    </div>
                }

            </div>

        )
    }
}

export default Employee;
