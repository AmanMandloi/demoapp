import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData() {
  const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), );    
  yield put({ type: "GET_DATA", playload: {"data":"data"} });
}

function* actionWatcher() {
     yield takeLatest('GET_DATA', fetchNews)
 }

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
