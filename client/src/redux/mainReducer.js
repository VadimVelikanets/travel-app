export const CHANGE_LANG = 'CHANGE_LANG';

function noop(){

}
const EN = {
    value: 'EN',
    LogIn: 'Log In',
    SingUp: 'Sign Up',
    LogOut: 'LogOut',
    enterCountry: 'Enter Country',
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
    TimeIn: 'Time In'
}
const RU = {
    value: 'RU',
    LogIn: 'Вход',
    SingUp: 'Регистрация',
    LogOut: 'Выйти',
    enterCountry: 'Введите страну',
    //Main Page
    carouselTitle: 'Приложение о путешествиях',
    carouselTxt: 'Приложение о популярных и незабываемых курортах',
    ourBestTour: 'Наши лучшие туры',

    //country page
    SightsOf: 'Достопримечательности ',
    video: 'Видео',
    map: 'Карта',
    WeatherIn: 'Погода в',
    ExchangeRates: 'Курсы валют:',
    TimeIn: 'Время в'
}
const DE = {
    value: 'DE',
    LogIn: 'Einloggen',
    SingUp: 'Anmeldung',
    LogOut: 'Ausloggen',
    enterCountry: 'Land eingeben',
    //Main Page
    carouselTitle: 'Reise SPA',
    carouselTxt: 'Anwendung über beliebte Resorts',
    ourBestTour: 'Unsere beste Tour',

    //country page
    SightsOf: 'Sehenswürdigkeiten von',
    video: 'Video',
    map: 'Karte',
    WeatherIn: 'Wetter in',
    ExchangeRates: 'Wechselkurse:',
    TimeIn: 'Zeit in'
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
        if(action.lang === 'EN'){
            return {
                ...state,
                lang: EN,
            };
        } else if(action.lang === 'RU'){
            return {
                ...state,
                lang: RU,
            };
        }else if(action.lang === 'DE'){
            return {
                ...state,
                lang: DE,
            };
        }

    }
};