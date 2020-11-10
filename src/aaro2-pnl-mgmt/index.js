import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import view from './view';


createCustomElement('aaro2-pnl-mgmt', {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {},
	initialState: {},
	actionHandlers: actions
});
