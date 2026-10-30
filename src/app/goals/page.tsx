import { mockGoals } from "@/data/mock-goals";
import type { Goal } from "@/types/goals";

const statusStyles: Record<Goal["status"], string> = {
  active: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  paused: "bg-yellow-100 text-yellow-700",
};

const GoalsPage = () => {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">My Goals</h1>

      <div className="flex flex-wrap gap-4">
        {mockGoals.map((goal) => (
          <div
            key={goal.id}
            className="w-full
             rounded-lg border
            border-gray-200
             p-5
             shadow-sm
             transition
             hover:shadow-md
             sm:w-[calc(50%-0.5rem)]
             lg:w-[calc(33.333%-0.67rem)]"
           >
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[goal.status]}`}
            >
              {goal.status}
            </span>

            <h2 className="mt-3 text-lg font-semibold">{goal.title}</h2>

            <p className="mt-2 text-sm text-gray-600">
              {goal.dailyHours} hours/day · {goal.durationWeeks} weeks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;