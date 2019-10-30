import React from 'react';
import { connect } from 'react-redux';
import EmailEntry from './EmailEntry';
import store from '../app';
import EmailContents from './EmailContents';

// {(!props.emails.fetching && props.emails.emails.length === 0) ? (

const EmailDashboard = (props) => {
    let { emails } = props.emails;

    return(
            <div>
                {
                    (!props.emails.fetching && props.emails.emails.length !== 0) &&
                    <div className='row'>
                        <div className='col-lg-5' style={{width:'200px'}}>
                            {(!props.emails.fetching) ? (
                                emails.map((email) => {
                                    return(
                                        <EmailEntry key={email._id} {...email} index={emails.indexOf(email)} />
                                    );
                                })
                            ) : (
                                <div>
                                    <div className="spinner-border m-5" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <EmailContents/>
                    </div>
                }
                {
                    (!props.emails.fetching && props.emails.emails.length === 0) &&
                    <div>
                        <h3>No messages available!</h3>
                    </div>
                }
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        emails: state.emails
    };
}

export default connect(mapStateToProps)(EmailDashboard);

