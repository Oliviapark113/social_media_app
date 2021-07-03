import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE ={
    user: {
        _id:"60def3d13c9c5c82ff6c9fdc",
        username: "olivia",
        email:"olivia@gmail.com",
        profilePicture: "person/olivia_intro_1.png",
        coverPicture:"",
        isAdmin:false,
        followers:[],
        followings:["60d3de3e1e319a11c845e87b"],
    },
    isFetching:false,
    error: false,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user:state.user, 
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}>
         {children}
        </AuthContext.Provider>
    );
};