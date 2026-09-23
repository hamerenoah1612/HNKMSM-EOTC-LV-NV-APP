import Panel from '../ui/Panel.jsx';

export default function BranchPerformancePanel({ branches }) {
  return (
    <Panel title="⛪ Branch Performance">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Parish / Church</th>
              <th>Members</th>
              <th>Donations</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch.id}>
                <td>{branch.rank}</td>
                <td>{branch.name}</td>
                <td>{branch.members}</td>
                <td>{branch.donations}</td>
                <td className="green">{branch.growth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
