// tone: 'pending' | 'review'
export default function Tag({ tone, label }) {
  return <b className={`tag ${tone}`}>{label}</b>;
}
