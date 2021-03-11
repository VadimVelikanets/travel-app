import {useCallback} from 'react'
//Хук на вывод сообщения
export const useMessage = () => {
    return useCallback(text => {
        if (text) {
            return  text
        }
    }, [])
}