import '@servicenow/now-dropdown';
import '@servicenow/now-split-button';
import '@servicenow/now-button';
import { Fragment, createRef } from '@servicenow/ui-renderer-snabbdom';
import { MONTHS, getMonth, openCloseMonthPicker } from './utils';

export default (state, { updateState, updateProperties }) => {
  const { properties } = state;
  document.popupRef = createRef();

  const setSelected = (e) => {
    const prev = e.target.parentNode.querySelector('.popup-item-selected');
    if (prev) prev.classList.remove('popup-item-selected');
    e.target.classList.add('popup-item-selected');
    updateProperties({ accountingPeriod: getMonth(e.target.value) });
    openCloseMonthPicker();
  }

  return (
    <div className="filters">
      <now-split-button className="picker-margin" component-id="monthPicker" manage-opened="true" label={properties.accountingPeriod.label + ' ' + properties.fiscalYear} disabled={state.loading} variant="secondary" size="md"></now-split-button>

      <div className="popup" ref={document.popupRef}>
        <div className="year-picker-section">
          <now-button-iconic component-id="prevYear" icon="arrow-left-fill" variant="secondary" size="md" tooltipContent="Previous Year"></now-button-iconic>
          <div className="year">{properties.fiscalYear}</div>
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

      <now-dropdown className="picker-margin" component-id="accountingUnitsPicker" disabled={state.loading} items={state.accountingUnits} manageSelectedItems="true" selectedItems={[properties.selectedAccountingUnit]} icon="state.accountingUnitIcon" placeholder="Select Account Unit" tooltipContent="Select account unit" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>

      <now-dropdown className="picker-margin" component-id="subUnitSort" disabled={state.loading} items={state.subUnitSort} manageSelectedItems="true" selectedItems={[properties.selectedSubUnitSort]} icon="state.accountingUnitIcon" placeholder="Select Sub Unit Sort" tooltipContent="Select Sub Unit Sort" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>

      <now-dropdown className="picker-margin" component-id="accountingSubUnitsPicker" disabled={state.loading || !properties.selectedAccountingUnit || !state.accountingSubUnits.length || !properties.selectedSubUnitSort} items={state.accountingSubUnits} manageSelectedItems="true" selectedItems={[properties.selectedAccountingSubUnit]} icon="state.accountingUnitIcon" placeholder="Select Account Sub Unit" tooltipContent="Select account Sub Unit" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>

      <now-button className="picker-margin" component-id="run" disabled={state.loading || !properties.selectedAccountingUnit || !properties.selectedSubUnitSort || !properties.selectedAccountingSubUnit} label="Run" variant="primary" size="md" configAria={{}} tooltipContent="Fill the table!"></now-button>

    </div>
  )
}