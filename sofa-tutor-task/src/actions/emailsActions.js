import axios from 'axios';

// GET EMAILS:
export const getEmailList = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_EMAIL_LIST_PENDING'}); 
        axios.get(`https://mailsac.com/api/addresses/asiloniz%40mailsac.com/messages`)
        .then((response) =>{
            dispatch(
                {
                    type: 'FETCH_EMAIL_LIST_FULFILLED',
                    payload: response.data
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'FETCH_EMAIL_LIST_REJECTED',
                    payload: err
                }
            );
        });
    }
};

export const getDetailedMessage = (id, index) => {
    return (dispatch) => {
        dispatch({type: 'ADD_DETAILED_MESSAGE_PENDING'}); 
        axios.get(`https://mailsac.com/api/text/asiloniz%40mailsac.com/${id}`)
        .then((response) =>{
            dispatch(
                {
                    type: 'ADD_DETAILED_MESSAGE_FULFILLED',
                    payload: response.data,
                    readEmailClicked: id,
                    emailClickedIndex: index
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'ADD_DETAILED_MESSAGE_REJECTED',
                    payload: err
                }
            );
        });
    }
};

export const removeMessage = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_MESSAGE_PENDING'}); 
        axios.delete(`https://mailsac.com/api/addresses/asiloniz%40mailsac.com/messages/${id}`)
        .then((response) =>{
            dispatch(
                {
                    type: 'DELETE_MESSAGE_FULFILLED',
                    payload: response.data,
                    emailDeleted: id
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'DELETE_MESSAGE_REJECTED',
                    payload: err
                }
            );
        });
    }
};

// READ IMPLEMENTATION
/*
export const readMessage = (id) => {
    const apiKey = 'jLRRKLEnQsWc2cYrstnDfM0LPPdMlA';
    return (dispatch) => {
        dispatch({type: 'READ_MESSAGE_PENDING'}); 
        axios.put(
            `https://mailsac.com/api/addresses/asiloniz%40mailsac.com/messages/${id}/read/true`,
            { 
                "_mailsacKey": "jLRRKLEnQsWc2cYrstnDfM0LPPdMlA"
            }
        )
        .then((response) =>{
            dispatch(
                {
                    type: 'READ_MESSAGE_FULFILLED',
                    payload: response.data,
                    readMessage: id
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'READ_MESSAGE_REJECTED',
                    payload: err
                }
            );
        });
    }
}
*/

export const showMessage = (id) => ({
  type: 'SHOW_MESSAGE',
  emailClicked: id
});



