import { actionTypes } from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
      const { dispatch, properties } = coeffects;
      console.log('prp:',properties)

      dispatch('FETCH_STATEMENT_ROWS', {
        FiscalYear: properties.FiscalYear,
        AccountingPeriod: properties.AccountingPeriod,
        ObjectId: properties.ObjectId,
        RefreshType:properties.RefreshType,
      } )
    },

    'FETCH_STATEMENT_ROWS': createHttpEffect('/api/x_aaro2_pnl_mgmt/utils/GetPNLStatementRows', {
      method: 'GET',
      queryParams: ['FiscalYear', 'AccountingPeriod', 'ObjectId', 'RefreshType'],
      dataParam: 'data',
      successActionType: 'FETCH_STATEMENT_ROWS_SUCCESS',
      errorActionType: 'FETCH_STATEMENT_ROWS_FAILURE'
    }),

    'FETCH_STATEMENT_ROWS_SUCCESS': ({ action, updateState }) => {
      const data = JSON.parse(action.payload.result.body);
      console.log('data fetched:: ', data)
      updateState({ data, fetchState:'success' })
    },
    'FETCH_STATEMENT_ROWS_FAILURE': ({action, updateState})=>{
      updateState({fetchState: 'failure'})
    }
  }
}
