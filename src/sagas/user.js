import { takeEvery ,call,put} from 'redux-saga/effects'
import axios from 'axios'
function* fetchUser() {
    try{
        const user = yield call(axios.get,'http://jsonplaceholder.typicode.com/users')
        yield put({type:'FETCH_USER_SUCCEEDED',user:user})
    } catch(e){
        yield put({type: 'FETCH_USER_FAILUER',error:e.message})
        console.dir(e)
    }
    // const user = yield call(axios.get,'http://jsonplaceholder.typicode.com/users')
    // yield put({type:'FETCH_USER_SUCCEEDED',user:user})
}
function* fetchTodos() {
    const todos = yield call(axios.get,'http://jsonplaceholder.typicode.com/todos')
    console.log(todos)
}
export function* watchFetchUser(){
    yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}
export function* watchFetchTodos(){
    yield takeEvery("FETCH_TODOS_REQUEST", fetchTodos);
}
