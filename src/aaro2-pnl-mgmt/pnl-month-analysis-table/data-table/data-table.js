import {createCustomElement} from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import styles from './data-table.scss'
import view from './view'

    createCustomElement('data-table', {
        renderer: {type: snabbdom},
        view, 
        styles,
        properties: {
            data: {},
            fetchState: 'loading'
        }
    })