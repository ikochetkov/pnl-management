import '@servicenow/now-dropdown';
import '@servicenow/now-button';
import './pnl-month-year-picker';

export default (state, { updateState, updateProperties }) => {
  const { properties } = state;


  return (
    <div className="filters">

      <pnl-month-year-picker disabled={state.loading}></pnl-month-year-picker>

      <now-dropdown
        className="picker-margin"
        component-id="accountingUnitsPicker"
        disabled={state.loading}
        items={state.accountingUnits}
        manageSelectedItems="true"
        selectedItems={[properties.selectedAccountingUnit]}
        icon="state.accountingUnitIcon"
        placeholder="Select Account Unit"
        tooltipContent="Select account unit"
        size="md"
        variant="secondary-selected"
        select="single"
        panelFitProps={{}}
        configAria={{}}>
      </now-dropdown>

      <now-dropdown className="picker-margin" component-id="subUnitSort" disabled={state.loading} items={state.subUnitSort} manageSelectedItems="true" selectedItems={[properties.selectedSubUnitSort]} icon="state.accountingUnitIcon" placeholder="Select Sub Unit Sort" tooltipContent="Select Sub Unit Sort" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>

      <now-dropdown className="picker-margin" component-id="accountingSubUnitsPicker" disabled={state.loading || !properties.selectedAccountingUnit || !state.accountingSubUnits.length || !properties.selectedSubUnitSort} items={state.accountingSubUnits} manageSelectedItems="true" selectedItems={[properties.selectedAccountingSubUnit]} icon="state.accountingUnitIcon" placeholder="Select Account Sub Unit" tooltipContent="Select account Sub Unit" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>

      <now-button className="picker-margin" component-id="run" disabled={state.loading || !properties.selectedAccountingUnit || !properties.selectedSubUnitSort || !properties.selectedAccountingSubUnit} label="Run" variant="primary" size="md" configAria={{}} tooltipContent="Fill the table!"></now-button>

    </div>
  )
}