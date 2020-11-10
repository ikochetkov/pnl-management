import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { createHttpEffect } from '@servicenow/ui-effect-http';
import { openCloseMonthPicker } from './utils';


export default {

  [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
    console.log("COMPONENT_BOOTSTRAPPED");
    const { dispatch } = coeffects;
    dispatch('FETCH_ACCOUNTING_UNITS', {
      sysparm_fields: "label,id",
      sysparm_table: "x_aaro2_pnl_mgmt_accounting_unit"
    });
  },

  /* FETCH ACCOUNTING UNITS */

  'FETCH_ACCOUNTING_UNITS': createHttpEffect('/api/now/table/:sysparm_table', {
    method: 'GET',
    pathParams: ['sysparm_table'],
    queryParams: ['sysparm_fields'],
    successActionType: 'FETCH_ACCOUNTING_UNITS_SUCCESS',
    errorActionType: 'FETCH_ACCOUNTING_UNITS_ERROR'
  }),

  'FETCH_ACCOUNTING_UNITS_SUCCESS': (coeffects) => {
    const { dispatch, state, updateState, action: { payload: { result: accountingUnits } } } = coeffects;
    console.log('ACCOUNTING UNITS LIST FETCHED', accountingUnits);
    updateState({ accountingUnits: accountingUnits, loading: false });
  },

  'FETCH_ACCOUNTING_UNITS_ERROR': (coeffects) => {
    const { action: { payload } } = coeffects;
    console.log('ERROR : ' + JSON.stringify(payload));
  },

  /* FETCH ACCOUNTING SUB UNITS */
  'FETCH_ACCOUNTING_SUB_UNITS_START': (coeffects) => { coeffects.updateState({ loading: true }) },
  'FETCH_ACCOUNTING_SUB_UNITS_ERROR': (coeffects) => { console.log('FETCH_ACCOUNTING_SUB_UNITS_ERROR', coeffects.action); },

  'FETCH_ACCOUNTING_SUB_UNITS': createHttpEffect('api/x_aaro2_pnl_mgmt/utils/GetPNLAccountingUnits', {
    method: 'GET',
    queryParams: ['FiscalYear', 'AccountingPeriod', 'RefreshType', 'Company', 'SortType'],
    successActionType: 'FETCH_ACCOUNTING_SUB_UNITS_SUCCESS',
    errorActionType: 'FETCH_ACCOUNTING_SUB_UNITS_ERROR',
    startActionType: 'FETCH_ACCOUNTING_SUB_UNITS_START'
  }),

  'FETCH_ACCOUNTING_SUB_UNITS_SUCCESS': (coeffects) => {
    const { updateState, properties, action: { payload: { result: { body } } } } = coeffects;
    const bodyObj = JSON.parse(body);
    console.log('FETCH_ACCOUNTING_SUB_UNITS_SUCCESS', bodyObj.AccountingUnitList);
    console.log(properties);
    const accountingSubUnitList = bodyObj.AccountingUnitList.map((element) => {
      return ({
        label: element.AccountingUnit + ': ' + element.Description,
        id: element.ObjectId
      })
    });
    updateState({ accountingSubUnits: accountingSubUnitList, loading: false });
  },






  'NOW_DROPDOWN#ITEM_CLICKED': (coeffects) => {
    const { dispatch, properties, updateProperties, action: { meta: { id }, payload: { item } } } = coeffects;
    console.log('COMPONENT PICKER CLICKED: ' + id);
    if (id == 'accountingUnitsPicker') {
      updateProperties({ selectedAccountingUnit: Number(item.id) });
      dispatch('FETCH_ACCOUNTING_SUB_UNITS', {
        FiscalYear: properties.fiscalYear,
        AccountingPeriod: properties.accountingPeriod.value,
        RefreshType: 2,
        Company: Number(item.id), //check
        SortType: properties.selectedSubUnitSort
      });
      console.log(properties.selectedAccountingUnit);
    }
    if (id == 'accountingSubUnitsPicker') {
      updateProperties({ selectedAccountingSubUnit: item.id });
    }
    if (id == 'subUnitSort') {
      updateProperties({ selectedSubUnitSort: item.id });
    }
  },

  'NOW_SPLIT_BUTTON#OPENED_SET': (coeffects) => {
    const { updateState, action: { meta: { id } } } = coeffects;
    console.log('SPLIT BUTTON CLIKED: ' + id);
    if (id == 'monthPicker') {
      openCloseMonthPicker();
    }
  },

  'NOW_BUTTON_ICONIC#CLICKED': (coeffects) => {
    const { state, properties, updateProperties, updateState, action: { meta: { id } } } = coeffects;
    if (id == "prevYear") {
      updateProperties({ fiscalYear: properties.fiscalYear - 1 });
    }
    if (id == "nextYear") {
      updateProperties({ fiscalYear: properties.fiscalYear + 1 });
    }
  },

  'NOW_BUTTON#CLICKED': (coeffects) => {
    const { state, properties, updateProperties, updateState, action: { meta: { id } } } = coeffects;
    if(id == 'run'){
      console.log(properties);
    }
  }

}