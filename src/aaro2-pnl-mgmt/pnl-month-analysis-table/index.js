import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import { DATA } from './constants'
import view from './view'
import actions from './actions'
createCustomElement('pnl-month-analysis-table', {
	renderer: { type: snabbdom },
	view,
	initialState: {
		data: {},
		fetchState: 'loading'
	},
	styles,
	...actions,
	properties:{
		ObjectId:{
			default: 360
		},
		FiscalYear:{
			default: 2017
		},
		AccountingPeriod:{
			default: 2
		},
		RefreshType:{
			default: 2
		}
	}
});
