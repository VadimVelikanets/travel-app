import {useState, useCallback, useEffect} from 'react';

//Хук на авторизацию
const storageName = 'userData'

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)
    const [photo, setPhoto] = useState(null)
    const login = useCallback((jwtToken, id, userName, photo)=>{
        setToken(jwtToken)
        setUserId(id)
        setUserName(userName)
        setPhoto(photo)
        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken, userName: userName, photo: photo}))
    }, [])

    const logout = useCallback((jwtToken, id)=>{
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.userId, data.userName, data.photo)
        }
    }, [login])

    return {login, logout, token, userId, userName, photo}
}