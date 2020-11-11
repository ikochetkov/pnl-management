import './data-table'
export default (state) => {
  const { data, fetchState } = state
  return (
    <div className="container">
      <h1 className="component-header">Monthly Analysis</h1>
      <data-table data={data} fetchState={fetchState}></data-table>
    </div>
  );
};