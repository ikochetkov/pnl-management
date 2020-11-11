import {createCustomElement} from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import styles from './data-table.scss'
import view from './view'
import {fetchStates} from '../constants'
import actions from './actions'
const {STATEMENTS_FETCH_NOT_STARTED, STATEMENTS_FETCH_STATRED,STATEMENTS_FETCH_FAILED,STATEMENTS_FETCH_SUCCESS } = fetchStates
    createCustomElement('data-table', {
        renderer: {type: snabbdom},
        view, 
        styles,
        ...actions,
        properties: {
            data: {
                default: {

                }
            },
            fetchState: STATEMENTS_FETCH_NOT_STARTED
        }
    })