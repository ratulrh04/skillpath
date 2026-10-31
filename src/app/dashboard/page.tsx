import StatCard from "@/components/dashboard/StatCard";
import GoalCard from "@/components/goals/GoalCard";
import { mockGoals } from "@/data/mock-goals";

const DashboardPage = () => {
  const total = mockGoals.length;
  const active = mockGoals.filter((goal) => goal.status === "active").length;
  const completed = mockGoals.filter(
    (goal) => goal.status === "completed"
  ).length;
  const paused = mockGoals.filter((goal) => goal.status === "paused").length;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="flex flex-wrap gap-4">
        <StatCard label="Total Goals" value={total} />
        <StatCard label="Active" value={active} />
        <StatCard label="Completed" value={completed} />
        <StatCard label="Paused" value={paused} />
      </div>

      <h2 className="mb-4 mt-10 text-xl font-semibold">Recent Goals</h2>

      <div className="flex flex-wrap gap-4">
        {mockGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;