import { toggleMYP } from './utils';
import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {

  [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
    const {state, dispatch} = coeffects;
    console.log('BOOTSTRAPPED COMPONENT: pnl-month-year-picker');
    dispatch('MONTH_YEAR_PICKER_VALUES_CHANGED', {
      month: state.selectedMonth.value,
      year: state.selectedYear
    });
  },

  /* OPEN - CLOSE MONTH YEAR PICKER */
  'NOW_SPLIT_BUTTON#OPENED_SET': (coeffects) => {
    const { action: { meta: { id } } } = coeffects;
    if (id == 'monthPicker') {
      toggleMYP();
    }
  },

  /* MANAGE BUTTONS CLILED - PREVIOUS OR NEXT YEAR */
  'NOW_BUTTON_ICONIC#CLICKED': (coeffects) => {
    const { state, updateState, action: { meta: { id } } } = coeffects;
    if (id == "prevYear") {
      updateState({ selectedYear: state.selectedYear - 1 });
    }
    if (id == "nextYear") {
      updateState({ selectedYear: state.selectedYear + 1 });
    }
  }

}