const blogsInitialState = {
    fetching: false,
    fetched: false,
    emails: [],
    error: null
};

export default (state = blogsInitialState, action) => {
    switch(action.type) {
        case 'FETCH_EMAIL_LIST_PENDING':
            return {
                ...state,
                fetching: true
            };

        case 'FETCH_EMAIL_LIST_REJECTED':
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                };

        case 'FETCH_EMAIL_LIST_FULFILLED':
            let emails = [...action.payload];
            emails.reverse();

            return {
                ...state,
                fetching:false,
                emails: emails
            };

        case 'ADD_DETAILED_MESSAGE_PENDING':
            return {
                ...state,
                fetchingEntry: true
            };

        case 'ADD_DETAILED_MESSAGE_REJECTED':
                return {
                    ...state,
                    error: action.payload
                };

        case 'ADD_DETAILED_MESSAGE_FULFILLED':

            let emailsWithDetails = state.emails;
            let emailToDetail = state.emails.filter((email) => email._id === action.readEmailClicked)[0];
            emailToDetail = {...emailToDetail, body:action.payload, read:true };
            console.log(emailToDetail);
            emailsWithDetails[action.emailClickedIndex] = emailToDetail;
            console.log(emailsWithDetails);

            return {
                ...state,
                fetchingEntry:false,
                readEmailClicked: action.readEmailClicked,
                emailText: action.payload,
            };

        case 'DELETE_MESSAGE_PENDING':
            return {
                ...state,
                fetchingDelete: true
            };

        case 'DELETE_MESSAGE_REJECTED':
                return {
                    ...state,
                    fetchingDelete: false,
                    error: action.payload
                };

        case 'DELETE_MESSAGE_FULFILLED':
            const emailsWithDeletion = state.emails.filter((email) => email._id !== action.emailDeleted);

            return {
                ...state,
                emails: emailsWithDeletion,
                deletedItem: true
            };
        /*
        case 'READ_MESSAGE_PENDING':
            return {
                ...state,
                fetchingRead: true
            };
    
        case 'READ_MESSAGE_REJECTED':
            return {
                ...state,
                fetchingRead: false,
                error: action.payload
            };

        case 'READ_MESSAGE_FULFILLED':
            // const emailsWithDeletion = state.emails.filter((email) => email._id !== action.emailDeleted);
            console.log(action.payload);
            return {
                ...state
            };
        */

        case 'SHOW_MESSAGE':
            let emailBody = state.emails.filter((email) => email._id === action.emailClicked)[0].body;
            console.log(emailBody);
            return {
                ...state,
                fetchingEntry:false,
                emailClicked: action.emailClicked,
                emailText: emailBody
            };

        default:
            return state;
    }
};

