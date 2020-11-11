import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view'
import actions from './actions'
createCustomElement('pnl-statements-table', {
	renderer: { type: snabbdom },
	view,
	initialState: {
        fetchState: 'STATEMENTS_FETCH_NOT_STARTED'
    	},
	styles,
	...actions,
	properties:{
        queryData: {
            default: { }
        },
        
	}
});