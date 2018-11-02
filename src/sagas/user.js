import { takeEvery ,call} from 'redux-saga/effects'
import axios from 'axios'
function* fetchUser() {
    const user = yield call(axios.get,'http://jsonplaceholder.typicode.com/users')
    console.log(user)
}
function* fetchTodos() {
    const todos = yield call(axios.get,'http://jsonplaceholder.typicode.com/todos')
    console.log(todos)
}
export function* watchFetchUser(){
    yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}
export function* watchFetchTodos(){
    yield takeEvery("FETCH_USER_REQUEST", fetchTodos);
}
