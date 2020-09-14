import * as Actions from './Constant';

const getItems = () => {
  return (dispatch) => {
    dispatch({type:Actions.GET_DATA});
  };
};

export{ getItems }