//import '@servicenow/now-dropdown';
import '@servicenow/now-split-button';
import '@servicenow/now-button';
import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import { MONTHS, getMonth, toggleMYP, MYP_REF, setSelected } from './utils';

export default (state, { updateState, dispatch }) => {

  const setSelected = (e) => {
    /* mark as selected month and remove mark from old one */
    const prev = e.target.parentNode.querySelector('.popup-item-selected');
    if (prev) prev.classList.remove('popup-item-selected');
    e.target.classList.add('popup-item-selected');
    const selectedMonth = getMonth(e.target.value);
    updateState({ selectedMonth: selectedMonth });
    toggleMYP(); //close picker
    dispatch('MONTH_YEAR_PICKER_VALUES_CHANGED', {
      month: selectedMonth.value,
      year: state.selectedYear
    });
  }

  return (
    <Fragment>
      <now-split-button className="picker-margin" component-id="monthPicker" manage-opened="true" label={state.selectedMonth.label + ' ' + state.selectedYear} disabled={state.loading} variant="secondary" size="md"></now-split-button>
      <div className="popup" ref={MYP_REF}>
        <div className="year-picker-section">
          <now-button-iconic component-id="prevYear" icon="arrow-left-fill" variant="secondary" size="md" tooltipContent="Previous Year"></now-button-iconic>
          <div className="year-display">{state.selectedYear}</div>
          <now-button-iconic component-id="nextYear" icon="arrow-right-fill" variant="secondary" size="md" tooltipContent="Next Year"></now-button-iconic>
        </div>
        <div className="popup-month-wrapper">
          {MONTHS.map((month) => {
            return (
              <div value={month.value} onclick={setSelected} className="popup-item-month popup-item">{month.name}</div>
            )
          })
          }
        </div>
      </div>
    </Fragment>
  )
}