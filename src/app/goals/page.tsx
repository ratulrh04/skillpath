

import GoalCard from "@/components/goals/GoalCard";
import { mockGoals } from "@/data/mock-goals";

const GoalsPage = () => {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">My Goals</h1>

      <div className="flex flex-wrap gap-4">
        {mockGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;