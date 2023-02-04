const { filterInitState } = require("./filters.init-state");

export const filterReduser = (state=filterInitState, {type,payload}) => {
    switch (type) {
      case 'app/setFilter':
        return payload;
  
      default:
        return state;
    }
  };
