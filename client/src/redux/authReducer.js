
function noop(){

}
export const initialState = {
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuth: false
};



export const authReducer = (state = initialState, action) => {
    if (!action.type) {
        return {
            ...state,
            initialState
        };
    }
};



