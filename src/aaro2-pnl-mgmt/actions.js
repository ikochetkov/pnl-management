import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { createHttpEffect } from '@servicenow/ui-effect-http';


export default {

  [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
    console.log("COMPONENT_BOOTSTRAPPED");
    const { dispatch, properties } = coeffects;
    dispatch('FETCH_FIELDS', {
      FiscalYear: properties.fiscalYear, //"2020"
      AccountingPeriod: properties.accountingPeriod, //"5"
      RefreshType: properties.refreshType, //"2"
    });
  },

  'FETCH_FIELDS': createHttpEffect('/api/x_aaro2_pnl_mgmt/utils/GetPNLCompanies', {
    method: 'GET',
    queryParams: ['FiscalYear', 'AccountingPeriod', 'RefreshType'],
    successActionType: 'FETCH_FIELDS_SUCCESS',
    errorActionType: 'FETCH_INCIDENT_ERROR',
    startActionType: 'FETCH_FIELDS_START',
    progressActionType: 'FETCH_FIELDS_PROGRESS'
  }),

  'FETCH_FIELDS_SUCCESS': (coeffects) => {
    const { state, updateState, action: { payload: { result: { body , body: {CompanyList} } } } } = coeffects;
    const responseObj = JSON.parse(body);
    console.log('COMPANY LIST FETCHED', responseObj.CompanyList);
    const accountingUnitsData = responseObj.CompanyList.map((element)=>{
      return {
        id: element.Company,
        label: element.Company + ': ' + element.Name
      }
    })
    console.log('ACCOUNTING UNITS DATA', accountingUnitsData);
    updateState({accountingUnits: accountingUnitsData});
  },

  'FETCH_INCIDENT_ERROR': (coeffects) => {
    const { action: { payload } } = coeffects;
    console.log('ERROR : ' + JSON.stringify(payload));
  }

}