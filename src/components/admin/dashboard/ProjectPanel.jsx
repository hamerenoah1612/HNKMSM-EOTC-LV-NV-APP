import Panel from '../ui/Panel.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';

export default function ProjectPanel({ project }) {
  return (
    <Panel title="📊 Projects &amp; Voting" className="project">
      <div className="project-main">
        <div className="project-pic">⛪</div>
        <div>
          <strong>{project.title}</strong>
          <small>{project.subtitle}</small>
          <ProgressBar value={project.progress} />
        </div>
        <b>{project.progress}%</b>
      </div>
      <div className="project-foot">
        <span>
          👥 <b>{project.votes}</b>
          <small>Total Votes</small>
        </span>
        <span>
          ◷ <b>{project.daysRemaining} days</b>
          <small>Remaining</small>
        </span>
        <button type="button">View Project →</button>
      </div>
    </Panel>
  );
}
