import '@servicenow/now-dropdown';
import {Fragment} from '@servicenow/ui-renderer-snabbdom';

export default (state, { updateState }) => {
  const { properties } = state;

  return (
    <Fragment>
      <now-dropdown component-id="accountingUnitsPicker" items={state.accountingUnits} manageSelectedItems="true" selectedItems={state.selectedUnit} icon="state.accountingUnitIcon" placeholder="Select Account Unit" tooltipContent="Select account unit" size="md" variant="secondary-selected" select="single" panelFitProps={{}} configAria={{}}></now-dropdown>
    </Fragment>
  )
}