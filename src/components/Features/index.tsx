export default function ChampionFeatures() {
  const features = [
    {
      icon: "/images/features/dashboard.png",
      title: "Personalized Dashboard",
      subtitle: "One Arena. Infinite Progress Paths",
      description:
        "Track your performance, unlock stats, switch between character-themed dashboards. Your profile. Your progress. Your vibe.",
    },
    {
      icon: "/images/features/missions.png",
      title: "Monthly Missions",
      subtitle: "The Game Never Pauses",
      description:
        "Every month, new academic quests drop. Complete tasks, beat rivals, earn XP and claim badges. It’s not just a test—it’s a saga.",
    },
    {
      icon: "/images/features/rewards.png",
      title: "Rewards",
      subtitle: "Earn Bragging Rights—and More",
      description:
        "From digital certificates to IRL merch, every win counts. Get rewarded for consistency, speed, accuracy, and your warrior spirit.",
    },
    {
      icon: "/images/features/game.png",
      title: "Gamified Test Series",
      subtitle: "Prep like a Player, Win like a Pro",
      description:
        "Step into a world where every test is a mission. Experience full-length and subject-wise tests designed like high-stakes boss battles. Progress. Level up. Repeat.",
    },
    {
      icon: "/images/features/leaderboard.png",
      title: "Vaults",
      subtitle: "Crack Open the Secrets of India’s Top Institutes",
      description:
        "Unlock premium test series and content from legendary coaching institutes.",
    },
    {
      icon: "/images/features/leaderboard.png",
      title: "Leaderboard",
      subtitle: "Be Seen. Be Ranked. Be Remembered.",
      description:
        "Compete in real-time with aspirants across the country. Rise through the ranks. Earn badges. Become a name others fear to face.",
    },
  ];

  return (
    <section className="bg-cover bg-center bg-[#242222] py-16 px-4">
      <div className="text-center text-yellow-400 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Features Forged for Champions
        </h2>
        <p className="mt-4 text-white text-lg sm:text-xl md:text-2xl">
          Explore the tools that turn preparation into a thrilling mission
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({ title, subtitle, description, icon }) => {
  return (
    <div
      className="w-full p-8 md:p-8 bg-no-repeat bg-contain bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('/images/9.png')",
        minHeight: '360px',
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <img src={icon} alt={title} className="w-20 h-20 mr-4" />
          <h3 className="text-yellow-500 text-xl md:text-2xl font-bold">
            {title}
          </h3>
        </div>

        {/* Subtitle */}
        <h4 className="text-yellow-500 font-semibold text-sm md:text-base mb-2">
          {subtitle}
        </h4>

        {/* Description */}
        <p className="text-yellow-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
