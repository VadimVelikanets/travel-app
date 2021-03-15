export const CHANGE_LANG = 'CHANGE_LANG';

function noop(){

}
const EN = {
    LogIn: 'Log In',
    SingUp: 'Sign Up',
    LogOut: 'LogOut',
    enterCountry: 'enterCountry',
    //Main Page
    carouselTitle: 'Travel SPA',
    carouselTxt: 'Application about popular resorts',
    ourBestTour: 'Our Best Tour',

    //country page
    SightsOf: 'Sights of',
    video: 'Video',
    map: 'Map',
    WeatherIn: 'Weather In',
    ExchangeRates: 'Exchange Rates:',
    TimeIn: 'TimeIn'
}
export const initialState = {

    auth:{
        token: null,
        userId: null,
        login: noop,
        logout: noop,
        isAuth: false
    },
    lang: EN,
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