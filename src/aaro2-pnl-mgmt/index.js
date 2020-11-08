import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import view from './view';

createCustomElement('aaro2-pnl-mgmt', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		fiscalYear: {default: "2020"},
		accountingPeriod: {default: "5"},
		refreshType: {default: "2"}
	},
	initialState: {
		accountingUnits: [{id: 'item1', label: 'Option 1'}],
		selectedUnit: {},
		accountingUnitIcon: 'user-group-fill' //'building-fill'
	},
	actionHandlers: actions
});
