export const CHANGE_LANG = 'CHANGE_LANG';

function noop(){

}
const EN = {

}
export const initialState = {

    auth:{
        token: null,
        userId: null,
        login: noop,
        logout: noop,
        isAuth: false
    },
    lang: [],
};

export const changeLang = (lang) => ({
    type: CHANGE_LANG,
    lang,
});

export const mainReducer = (state = initialState, action) => {
    if (action.type === CHANGE_LANG) {
        return {
            ...state,
            lang: state.lang.concat(action.lang),
        };
    }
};