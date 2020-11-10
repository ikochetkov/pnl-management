import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import view from './view';
import { getCurrentYear, getMonth } from './utils';


createCustomElement('pnl-unit-search-filters', {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		fiscalYear: { default: getCurrentYear() },
		accountingPeriod: { default: getMonth() },
		refreshType: { default: 2 },
		selectedAccountingSubUnit: {},
		selectedAccountingUnit: {},
		selectedSubUnitSort: { default: 1 }
	},
	initialState: {
		loading: true,
		accountingUnits: [],
		accountingUnitIcon: 'user-group-fill', //'building-fill'
		accountingSubUnits: [],
		subUnitSort: [{ label: "Alpha Numeric", id: 1 }, { label: "Hierarchical", id: 2 }]
	},
	actionHandlers: actions
});
