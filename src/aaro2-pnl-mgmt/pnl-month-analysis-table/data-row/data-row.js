import {createCustomElement} from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import styles from './data-row.scss'
import view from './view'

    createCustomElement('data-row', {
        renderer: {type: snabbdom},
        view, 
        styles,
        properties: {
            company: {Company: '1', Name: 'Default Company Name '}
        }
    })