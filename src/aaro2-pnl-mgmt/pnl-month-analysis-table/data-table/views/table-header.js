export default ({AccountingPeriod, FiscalYear}) => {
  
  return (
    <tr>
      <th className="data-table__header"> Description</th>
      <th className="data-table__header"> This Month {AccountingPeriod} - {FiscalYear} </th>
      <th className="data-table__header"> Prev Month {AccountingPeriod - 1} - {FiscalYear} </th>
      <th className="data-table__header"> +/- Prev Month</th>
      <th className="data-table__header"> Prev Year {AccountingPeriod} - {FiscalYear - 1}</th>
      <th className="data-table__header"> +/- Prev Year</th>
      <th className="data-table__header"> % Month</th>
      <th className="data-table__header"> This YTD</th>
      <th className="data-table__header"> % This YTD</th>
      <th className="data-table__header"> +/- This YTD</th>
      <th className="data-table__header"> Prev YTD</th>
      <th className="data-table__header"> % Prev YTD</th>
      <th className="data-table__header"> % Prev Year</th>
    </tr>
  )
}