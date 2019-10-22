import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR,
} from '../constants';

function* fetchData(action) {
  const { payload: { crypto, period } } = action;
  const NOW = new Date().getTime() / 1000;
  const YESTERDAY = NOW - 86400;
  yield delay(500);
  const url = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${crypto}&start=${YESTERDAY}&end=${NOW}&period=${period}`;
  try {
    const response = yield call(fetch, url);
    const tableData = yield call([response, response.json]);
    yield put({ type: DATA_FETCH_SUCCESS, tableData });
  } catch (error) {
    yield put({ type: DATA_FETCH_ERROR, error });
  }
}

function* mySaga() {
  yield takeLatest(DATA_FETCH_REQUEST, fetchData);
}

export default mySaga;
