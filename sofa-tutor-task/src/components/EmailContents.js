import React from 'react';
import { connect } from 'react-redux';

const EmailContents = (props) => {
    console.log(props);
    console.log(props.emails);

    let senderName = '';
    let senderAddress = '';
    let text = '';
    let emailToDetail = '';
    let receivedTime = '';
    const { emails } = props.emails;
    let subject = '';
    let dateDisplayed = '';
    let timeDisplayed = '';

    if(props.emails.hasOwnProperty('readEmailClicked') || props.emails.hasOwnProperty('showClicked')){
        if(props.emails.hasOwnProperty('readEmailClicked')){
            emailToDetail = emails.filter((email) => email._id === props.emails.readEmailClicked)[0];
        }
        if(props.emails.hasOwnProperty('emailClicked')){
            emailToDetail = emails.filter((email) => email._id === props.emails.emailClicked)[0];
        }

        if(emailToDetail){
            senderName = emailToDetail.from[0].name;
            senderAddress = emailToDetail.from[0].address;

            const dateReceived = new Date(emailToDetail.received);
            dateDisplayed = `${dateReceived.getDate()}/${dateReceived.getMonth() + 1}/${dateReceived.getFullYear()}`;
            timeDisplayed = `${dateReceived.getHours()}:${('0'+dateReceived.getMinutes()).slice(-2)}`;
        
            text = props.emails.emailText;
            subject = emailToDetail.subject;
        }else{
            text='Please select an email!';
        }
    }

    return(
        (!props.emails.hasOwnProperty('readEmailClicked') || (props.deletedItem)) ? (
            <div className='col-lg-7 '>
                <div className='card h-75'>
                    <div className='card-body'>
                        <h5 className='card-title'>Click an email to load its contents!</h5>
                    </div>
                </div>
            </div>
        ) : (
            <div className='col-lg-7 col-md-7 col-sm-7'>
                <div className='card'>
                    <div className='card-body'>
                        {subject && <h4 className='card-title'>{subject}</h4>}
                        <div className='row'>
                            <div className='col-8'>
                                {subject && <p className='card-subtitle mb-2 text-muted'><strong>{senderName}</strong>   {`<${senderAddress}>`}</p>}
                            </div>
                            <div className='col-4'>
                                <p className='card-subtitle mb-2 text-muted float-right' id='date-contents'>{dateDisplayed}  {timeDisplayed}</p>
                            </div>
                        </div>
                        <p className='card-text' className='text-justify'>{text}</p>
                    </div>
                </div>
            </div>
        )

    );
};

const mapStateToProps = (state) => {
    return {
        emails: state.emails
    };
}

export default connect(mapStateToProps)(EmailContents);

