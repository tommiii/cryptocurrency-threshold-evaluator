import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR,
} from '../constants';

const defaultValues = {
  isFetching: false,
  isLoaded: false,
  error: null,
  tableData: null,
};

const cryptocurrencyThresholdEvaluators = (state = defaultValues, action) => {
  switch (action.type) {
    case DATA_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        tableData: action.tableData,
      };
    case DATA_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cryptocurrencyThresholdEvaluators;
