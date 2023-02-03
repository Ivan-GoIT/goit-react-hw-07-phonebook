const { filterInitState } = require("./filters.init-state");

export const filterReduser = (state=filterInitState, action) => {
    switch (action.type) {
      case 'app/setFilter':
        return action.payload;
  
      default:
        return state;
    }
  };
