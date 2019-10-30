import React from 'react';
import store from '../app';
import { getDetailedMessage, removeMessage, showMessage } from '../actions/emailsActions';

const EmailEntry = (props) => {
    const { _id:id, subject, from:emailFrom, received } = props;
    const { address, name } = emailFrom[0];

    const dateReceived = new Date(received);
    const dateDisplayed = `${dateReceived.getDate()}/${dateReceived.getMonth() + 1}/${dateReceived.getFullYear()}`;
    const today = new Date();
    const todayString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const timeDisplayed = `${dateReceived.getHours()}:${('0'+dateReceived.getMinutes()).slice(-2)}`;

    const getContents = () => {
        if(!props.read){
            store.dispatch(getDetailedMessage(id, props.index));
            //store.dispatch(readMessage(id));
        }
        else{
            store.dispatch(showMessage(id));
        }
    };
    
    const remove = () => {
        store.dispatch(removeMessage(id));
    };

    return(
        <div key={id} className='d-flex flex-row'>
            <div className='card' style={{width:'500px'}}>
                <div
                    className={(props.read) ? ('email-item-read') : ('email-item-not-read')}
                >
                    <a 
                        onClick={getContents}
                    >
                        <div 
                            className='d-flex flex-row justify-content-between'
                        >
                            <div className='p-2'>
                                <h6 className='card-title' id='sender-name'>{name}</h6>
                                <p className='card-subtitle green-highlight'>{subject}</p>
                            </div>
                            {(todayString === dateDisplayed) ? (
                                <div className='p-2'>
                                    <p className='green-highlight received-date'>{timeDisplayed}</p>
                                </div>
                                ) : (
                                <div className='p-2'>
                                    <p className='green-highlight received-date'>{dateDisplayed}  {timeDisplayed}</p>
                                </div>
                            )
                            }
                        </div>
                    </a>
                </div>
            </div>
            <div className='align-self-center'>               
                <button className='btn btn-outline-danger btn-sm' onClick={remove}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default EmailEntry;