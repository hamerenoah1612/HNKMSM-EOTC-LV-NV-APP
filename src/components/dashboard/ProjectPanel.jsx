import Panel from '../ui/Panel.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';

export default function ProjectPanel({ project }) {
  return (
    <Panel icon="▥" title="Projects &amp; Voting" span={4} className="project-panel">
      <div className="project-main">
        <div className="project-image">⛪</div>
        <div className="project-copy">
          <strong>{project.title}</strong>
          <span>{project.subtitle}</span>
          <small>{project.description}</small>
          <ProgressBar value={project.progress} tone="project-progress" />
        </div>
        <b>{project.progress}%</b>
      </div>
      <div className="project-footer">
        <div>
          <strong>👥 {project.votes}</strong>
          <span>Total Votes</span>
        </div>
        <div>
          <strong>◷ {project.daysRemaining} days</strong>
          <span>Remaining</span>
        </div>
        <button type="button">View &amp; Vote →</button>
      </div>
    </Panel>
  );
}
