import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import view from './view';


createCustomElement('pnl-statements-filters', {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		fiscalYear: {},
		accountingPeriod: {},
		refreshType: { default: 2 },
		selectedAccountingSubUnit: {},
		selectedAccountingUnit: {},
		selectedSubUnitSort: { default: 1 },
		tableLoading: {default: false}
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
