export default (state) => {
  const { properties: { company } } = state
  const getCurrency = (rawData) => {
    return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(rawData)
  }
  return (
    <tr>
      <td className="data-table__cell">{company.Company} - {company.Name}</td>
      <td className="data-table__cell">{getCurrency(company.CurrentMonth)}</td>
      <td className="data-table__cell">{getCurrency(company.PrevMonth)}</td>
      <td className="data-table__cell">{getCurrency(company.PrevMonthBalance)}</td>
      <td className="data-table__cell">{getCurrency(company.PrevYear)}</td>
      <td className="data-table__cell">{getCurrency(company.PrevYearBalance)}</td>
      <td className="data-table__cell">{getCurrency(company.MonthPercentage)}</td>
    </tr>
  )
}