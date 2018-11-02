import { all, fork} from 'redux-saga/effects'
// import { watchIncrementAsync } from './counter'
// import { watchFetchUser,watchFetchTodos } from './user'
import * as counterSagas from './counter'
import * as userSagas from './user'

export default function* rootSaga(){
    // yield all([    //并发任务，同时执行不必等待
    //     watchIncrementAsync(),
    //     watchFetchUser(),
    //     watchFetchTodos()
    // ])
    yield all([    //并发任务，同时执行不必等待
        ...Object.values(counterSagas),
        ...Object.values(userSagas)
    ].map(fork)
)
}