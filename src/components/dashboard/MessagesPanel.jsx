import Panel from '../ui/Panel.jsx';

function MessageRow({ thumb, title, preview, time }) {
  return (
    <div className="message-row">
      <div className={`thumb ${thumb}`} />
      <div>
        <strong>{title}</strong>
        <small>{preview}</small>
      </div>
      <time>{time}</time>
    </div>
  );
}

export default function MessagesPanel({ messages }) {
  return (
    <Panel icon="▰" title="Messages &amp; Announcements" span={4} className="messages-panel">
      <div className="message-list">
        {messages.map((message) => (
          <MessageRow key={message.id} {...message} />
        ))}
      </div>
    </Panel>
  );
}
