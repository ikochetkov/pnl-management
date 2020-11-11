import { actionTypes } from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import { fetchStates } from './constants'

const { COMPONENT_BOOTSTRAPPED, COMPONENT_PROPERTY_CHANGED } = actionTypes;
const { STATEMENTS_FETCH_STATRED, STATEMENTS_FETCH_FAILED, STATEMENTS_FETCH_SUCCESS } = fetchStates

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: (coeffects) => { console.log("BOOTSTRAPPED COMPONENT: pnl-statements-table") },

    [COMPONENT_PROPERTY_CHANGED]: ({ action, dispatch, updateState }) => {

      const { payload: { value } } = action;
      console.log('COMPONENT_PROPERTY_CHANGED in pnl-statements-table: ', action);
      dispatch(STATEMENTS_FETCH_STATRED, value)
      updateState({ fetchState: [STATEMENTS_FETCH_STATRED] })
    },

    [STATEMENTS_FETCH_STATRED]: createHttpEffect('/api/x_aaro2_pnl_mgmt/utils/GetPNLStatementRows', {
      method: 'GET',
      queryParams: ['FiscalYear', 'AccountingPeriod', 'ObjectId', 'RefreshType'],
      dataParam: 'data',
      successActionType: STATEMENTS_FETCH_SUCCESS,
      errorActionType: STATEMENTS_FETCH_FAILED
    }),

    [STATEMENTS_FETCH_SUCCESS]: ({ action, updateState }) => {
      const data = JSON.parse(action.payload.result.body);
      updateState({ data, fetchState: [STATEMENTS_FETCH_SUCCESS] })
    },
    [STATEMENTS_FETCH_FAILED]: ({ action, updateState }) => {
      updateState({ fetchState: [STATEMENTS_FETCH_FAILED] })
    }
  }
}
