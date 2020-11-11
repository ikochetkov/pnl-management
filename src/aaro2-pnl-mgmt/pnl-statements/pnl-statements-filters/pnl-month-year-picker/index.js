import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import view from './view';
import { getYear, getMonth } from './utils';


createCustomElement('pnl-month-year-picker', {
	renderer: { type: snabbdom },
	view,
	styles,
	initialState: {
		selectedYear: getYear(),
		selectedMonth: getMonth()
	},
	actionHandlers: actions
});
