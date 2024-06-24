import Chip from "./components/Chip";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Chip intent="primary" label="chip" />
      <Chip intent="secondary" label="chip" />
      <Chip intent="danger" label="chip" />
      <Chip intent="warning" label="chip" />
      <Chip intent="info" label="chip" />
      <Chip intent="default" label="chip" />
    </div>
  );
}
