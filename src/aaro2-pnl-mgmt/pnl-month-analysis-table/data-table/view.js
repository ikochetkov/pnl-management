import '@servicenow/now-loader'
import tableRow from './views/table-row'
import tableHeader from './views/table-header'
import failureMessage from './views/failure-message'
import loader from './views/loader'
import noDataMessage from './views/no-data-message'
export default (state) => {
  const { properties: { data, fetchState } } = state
  const { AccountingPeriod, FiscalYear } = data

  if (fetchState == 'loading') return loader()
  if (fetchState == 'failure') return failureMessage()
  if (data.Rows.length == 0) return noDataMessage()

  return (
    <table className="data-table">
      {tableHeader({ AccountingPeriod, FiscalYear })}
      {data.Rows.map(row => (
        tableRow(row)
      ))}
    </table>
  )
}