
import { useState } from 'react'
// 本地存储 hook
const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const item = window.localStorage.getItem(key)
        const value = item === 'true' ? true : item === 'false' ? false : Number(item)
        return value ? value : initialValue
    });

    const setLocalStorageState = (newState) => {
        const newStateValue = newState
        setState(newStateValue)
        window.localStorage.setItem(key, newStateValue)
    }

    return [state, setLocalStorageState]
}

export default useLocalStorage