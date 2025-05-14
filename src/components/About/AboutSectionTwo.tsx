import Image from "next/image";

const ecosystemData = {
  heading: "GAMIFIED ECOSYSTEM OF EDUCATION",
  description:
    "Valovie obliterates the EdTech crisis of 60% unmotivated students and 80% digitally stranded institutes, igniting a gamified revolution to conquer academic quests and unleash global legends.",
  sections: [
    {
      title: "For B2B",
      points: [
        "Branded Vault Creation",
        "Gamification Infrastructure",
        "Nationwide Scalability",
        "Flexible Monetization",
        "Real-Time Analytics",
      ],
    },
    {
      title: "For B2C",
      points: [
        "One Stop Place for Exam Preparation",
        "Access to a Vault Marketplace",
        "Gamified Learning Experience",
        "Motivation and Engagement",
        "Personalized Learning",
        "Flexible Subscription Model",
      ],
    },
    {
      title: "Broader Ecosystem Solution",
      points: [
        "Bridging the Digital Divide",
        "Reducing Educational Inefficiencies",
        "India-First Approach",
        "Marketplace Ecosystem",
        "Hybrid Learning Support",
      ],
    },
  ],
};

export default function EcosystemSection() {
  return (
    <></>
    // <section
    //   className="text-white bg-cover bg-center py-16 px-4"
    //   style={{
    //     backgroundImage: `url('/images/valovie-ecosystem-bg.png')`,
    //   }}
    // >
    //   <div className="max-w-7xl mx-auto text-center">
    //     <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 font-cinzel">
    //       {ecosystemData.heading}
    //     </h2>
    //     <p className="mt-4 max-w-3xl mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed">
    //       {ecosystemData.description}
    //     </p>

    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {ecosystemData.sections.map((section, idx) => (
    //         <div
    //           key={idx}

    //           className="rounded-full p-6 text-left "
    //         >
    //           <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 text-center mb-4">
    //             {section.title}
    //           </h3>
    //           <ul className="list-decimal list-inside text-white/90 space-y-2 text-sm md:text-base font-light">
    //             {section.points.map((point, i) => (
    //               <li key={i}>{point}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
