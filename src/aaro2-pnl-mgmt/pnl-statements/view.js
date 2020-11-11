import './pnl-statements-filters';
import './pnl-statements-table';

export default (state, { updateState, updateProperties }) => {

  return (
    <div>
      <pnl-statements-filters tableLoading={state.tableLoading}></pnl-statements-filters>
      <pnl-statements-table queryData={state.queryData}></pnl-statements-table>
    </div>
  )
}