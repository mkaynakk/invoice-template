import { defineStore } from "pinia"
import state           from './invoice_state'
import getters         from './invoice_getters'
import actions         from './invoice_actions'

export const useInvoiceStore = defineStore('invoice', {
    state: () => state,
    getters,
    actions
})
