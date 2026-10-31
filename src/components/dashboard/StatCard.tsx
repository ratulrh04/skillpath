interface StatCardProps {
  label: string;
  value: number;
}

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="min-w-[140px] flex-1 rounded-lg border border-gray-200 p-5 shadow-sm">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;