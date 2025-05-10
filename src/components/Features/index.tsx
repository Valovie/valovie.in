

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
      title: " Gamified Test Series",
      subtitle: "Prep like a Player, Win like a Pro",
      description:
        "Step into a world where every test is a mission. Experience full-length and subject-wise tests designed like high-stakes boss battles. Progress. Level up. Repeat.",
    },
    {
      icon: "/images/features/leaderboard.png",
      title: "Vaults",
      subtitle: "Crack Open the Secrets of India’s Top Institutes",
      description:
        "Unlock premium test series and content from legendary coaching institutes. ",
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
    <section
      className="bg-cover bg-center bg-[#242222] py-20 px-4"
    >
      <div className="text-center text-yellow-400 mb-12">
        <h2 className="text-5xl font-bold ">Features Forged for Champions</h2>
        <p className={`mt-4  text-white text-2xl`}>
          Explore the tools that turn preparation into a thrilling mission
        </p>
      </div>
      <div className="max-w-7xl font-serif mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </section>
  );

}

const FeatureCard = ({
  title,
  subtitle,
  description,
  icon
}) => {
  // Custom SVG for dashboard icon
  const DashboardIcon = () => (
    <svg className="w-20 h-20 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm15-2l-4 4-2-2-1 1 3 3 5-5-1-1z" />
    </svg>
  );

  return (
    <div
      className="w-100 h-100 bg-no-repeat"
      style={{
        backgroundImage: "url('/images/9.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }}
    >
      {/* Main content container */}
      <div className="w-full h-full p-14 pt-20 flex flex-col">
        {/* Icon and title section */}
        <div className="flex items-center mb-4">
          <div className="mr-3 w-36 h-24">
            <img src={icon} alt=""  className="w-24 h-24"/>
            {/* <DashboardIcon /> */}
          </div>
          <div className="text-yellow-500 text-2xl font-bold leading-tight">
            {title}
          </div>
        </div>

        {/* Subtitle */}
        <h4 className="text-yellow-500 font-semibold text-base mb-3">{subtitle}</h4>

        {/* Description */}
        <p className="text-yellow-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


// Exam


//  function FeatureCard({
//   icon,
//   title,
//   subtitle,
//   description,
// }: {
//   icon: string;
//   title: string;
//   subtitle: string;
//   description: string;
// }) {
//   return (
//     <div
//       className="w-full max-w-sm mx-auto bg-no-repeat bg-contain bg-center px-6 py-8 text-white"
//       style={{
//         backgroundImage: "url('/images/9.png')", // use your new bg
//       }}
//     >
//       <div className="flex items-start gap-4">
//         <img src={icon} alt="icon" className="w-10 h-10 mt-1" />
//         <div>
//           <h3 className="text-yellow-400 text-xl font-bold">{title}</h3>
//           <h4 className="text-white font-semibold text-sm mt-2">{subtitle}</h4>
//           <p className="text-sm mt-2 text-white">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
