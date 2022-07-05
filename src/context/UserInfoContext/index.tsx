import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface UserInfoType {
    username?: string,
    hash?: string,
    setUserData: (username: string, hash: string) => void
}

export const UserInfoContext = createContext<UserInfoType>({
    username: "",
    hash: "",
    setUserData: (username: string, hash: string) => {}
})

export const UserInfoProvider = ({children}) => {
    const [username, setUsername] = useState<string>("");
    const [hash, setHash] = useState<string>("");

    function setUserData(username: string, hash: string) {
        setUsername(username);
        setHash(hash);
        storeData("@username", username);
        storeData("@hash", hash);
    }

    useEffect(() => {
        getData("@username").then((res) => {
            setUsername(res);
        });

        getData("@hash").then((res) => {
            setHash(res);
        });
    }, [])

    const storeData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.log(e);
        }
    }

    const getData = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if(value !== null) {
                return value;
            }
            return null;

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <UserInfoContext.Provider
            value={{
                username,
                hash,
                setUserData
            }}
        >
            {children}
        </UserInfoContext.Provider>
    )
}