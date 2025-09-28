// src/routes/projects/Portfolio.tsx
import ProjectNav from "../../components/ProjectNav";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <ProjectNav showBack />
      <h1 className="text-6xl font-bold text-[#4a4a2a] mb-6">Portfolio</h1>
      <p className="text-2xl text-[#4a4a2a]">🚧 Coming soon 🚧</p>
    </div>
  );
}
