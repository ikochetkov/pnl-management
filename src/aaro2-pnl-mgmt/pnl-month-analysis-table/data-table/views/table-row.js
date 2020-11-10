import { getPercentage, getCurrency } from '../table-util'
const getTableData = (cell, type) => {
  const formattedData = type =='currency'?getCurrency(cell):getPercentage(cell);
  const direction = cell > 0 ? 'up':'down'
  return(<td className={`data-table__cell ${type} ${direction||''}`}>{formattedData}</td>)
}
export default (row) => {
  return (
    <tr className={`data-table__row ${row.LineType == 'T' ? 'summary' : ''}`}>
      <td className="data-table__cell description">{row.Description}</td>
      { getTableData(row.ThisMonth, 'currency') }
      { getTableData(row.PreviousMonth, 'currency') }
      { getTableData(row.PlusMinusPreviousMonth, 'currency') }
      { getTableData(row.PreviousYear, 'currency') }
      { getTableData(row.PlusMinusPreviousYear, 'currency') }
      { getTableData(row.PercentageThisMonth, 'percentage') }
      { getTableData(row.ThisYTD, 'currency') }
      { getTableData(row.PercentageThisYTD, 'percentage') }
      { getTableData(row.PlusMinusYTD, 'currency') }
      { getTableData(row.PreviousYTD, 'currency') }
      { getTableData(row.PercentagePreviousYTD, 'percentage') }
      { getTableData(row.PercentagePreviousYear, 'percentage') }
    </tr>
  )
}