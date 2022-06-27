import {takeEvery,put} from 'redux-saga/effects';

const getUserName=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await res.json()
    return data[0].name
}


function *fetchUser(){
    try{
        const userName=yield getUserName()

        yield put({type:"UPDATE_NAME_SUCCESS",payload:userName})
    }
    catch(e){
        console.log(e)
    }

}

function *mySaga(){
    yield takeEvery("UPDATE_NAME",fetchUser)
}

export default mySaga