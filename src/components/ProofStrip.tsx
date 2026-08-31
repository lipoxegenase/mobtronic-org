export function ProofStrip() {
  const stats = [
    { value: "$2.3M+", label: "Saved for Clients" },
    { value: "190+", label: "Infrastructure Deployments" },
    { value: "Zero", label: "Business Downtime on Migrations" },
    { value: "Fortune 100", label: "Global Med-Device & Beverage Engagements" },
    { value: "MIT CTO", label: "Professional Certificate" },
    { value: "Executive MHA", label: "Healthcare Regulatory Expertise" },
  ];

  return (
    <div className="bg-zinc-800 border-y border-zinc-700 py-5 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-blue-400 font-extrabold text-lg leading-tight">
                {stat.value}
              </span>
              <span className="text-zinc-400 text-xs leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
