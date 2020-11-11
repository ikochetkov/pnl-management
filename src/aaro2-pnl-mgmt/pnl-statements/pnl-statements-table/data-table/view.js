import '@servicenow/now-loader'
import tableRow from './views/table-row'
import tableHeader from './views/table-header'
import failureMessage from './views/failure-message'
import loader from './views/loader'
import noDataMessage from './views/no-data-message'
export default (state) => {
  const { properties: { data, fetchState } } = state
  
  if (fetchState == 'STATEMENTS_FETCH_NOT_STATRED') return (<div>Select filters</div>)
  if (fetchState == 'STATEMENTS_FETCH_STATRED') return loader()
  if (fetchState == 'STATEMENTS_FETCH_FAILED') return failureMessage()
  if (!data.Rows) return noDataMessage()
  const { AccountingPeriod, FiscalYear } = data
  if(data.Rows)return (
    <table className="data-table">
      {tableHeader({ AccountingPeriod, FiscalYear })}
      {data.Rows.map(row => (
        tableRow(row)
      ))}
    </table>
  )
}