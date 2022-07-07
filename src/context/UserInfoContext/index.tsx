import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface UserInfoType {
    username?: string,
    hash?: string,

    favoritos?: [{
        id: string,
        title: string,
        imgUrl: string
    }]

    setUserData: (username: string, hash: string) => void
    setFav: (favoritos) => void
}

export interface FavType{
    id: string,
    title: string,
    imgUrl: string
}

export const UserInfoContext = createContext<UserInfoType>({
    username: "",
    hash: "",

    favoritos: [{
        id: "",
        title: "",
        imgUrl: ""
    }],

    setUserData: (username: string, hash: string) => {},
    setFav: (favoritos) => {}
})

export const UserInfoProvider = ({children}) => {
    const [username, setUsername] = useState<string>("");
    const [hash, setHash] = useState<string>("");

    const [favoritos, setFavoritos] = useState<[FavType]>([{
        id: "",
        title: "",
        imgUrl: ""
    }]);


    function setUserData(username: string, hash: string) {
        setUsername(username);
        setHash(hash);
        storeData("@username", username);
        storeData("@hash", hash);
    }

    function setFav(favoritos: [FavType]) {
        setFavoritos(favoritos);
        storeDataNonStr("@favoritos", favoritos);
    }

    useEffect(() => {
        getData("@username").then((res) => {
            setUsername(res);
        });

        getData("@hash").then((res) => {
            setHash(res);
        });

        getDataNonStr("@favoritos").then((res) => {
            setFavoritos(res);
        });
    }, [])

    const storeData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.log(e);
        }
    }

    const storeDataNonStr = async (key:string, value: [FavType]) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
          // saving error
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

    const getDataNonStr = async (key: string) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
          // error reading value
        }
      }

    return (
        <UserInfoContext.Provider
            value={{
                username,
                hash,
                favoritos,
                setUserData,
                setFav
            }}
        >
            {children}
        </UserInfoContext.Provider>
    )
}