import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { createHttpEffect } from '@servicenow/ui-effect-http';


export default {

  [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
    console.log("BOOTSTRAPPED COMPONENT: pnl-statements");
  },
  
  'STATEMENTS_FETCH_TRIGGERED': (coeffects) => {
    const { updateState, action: { payload } } = coeffects;
    console.log('STATEMENTS_FETCH_TRIGGERED', payload);
    updateState({ queryData: payload });
  }

}