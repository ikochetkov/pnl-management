import './pnl-unit-search-filters';
import './pnl-month-analysis-table';

export default (state, { updateState, updateProperties }) => {

  return (
    <div>
      <pnl-unit-search-filters></pnl-unit-search-filters>
      <pnl-month-analysis-table></pnl-month-analysis-table>
    </div>
  )
}