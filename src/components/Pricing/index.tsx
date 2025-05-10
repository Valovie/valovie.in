import Image from "next/image";

const pricingPlans = [
  {
    title: "Rookie Mode",
    price: "₹Free tier",
    features: [
      "3 PYQ Access",
      "Personalized Dashboard",
      "Leaderboard",
      "❌ No Monthly Missions",
      "❌ No Rewards",
      "❌ No Vault Access",
    ],
    bgImage: "/images/rate_bg.png", // uploaded image
  },
  {
    title: "Pro League",
    price: "₹699/month",
    features: [
      "Unlimited PYQ Access",
      "Personalized Dashboard",
      "Leaderboard",
      "Monthly Missions",
      "Rewards (XP, badges)",
      "⚠️ Limited Vault Access (1 vault unlock/month)",
    ],
    bgImage: "/images/rate_bg.png", // uploaded image
  },
  {
    title: "Legendary Vault Access",
    price: "₹999/month",
    features: [
      "All Features in Pro League",
      "Exclusive Monthly Missions",
      "Unlimited Vault Unlocks",
      "Special Leaderboard Placement",
      "Priority Support & Early Access to New Features",
    ],
    bgImage: "/images/rate_bg.png", // uploaded image
  },
];

export default function PricingSection() {
  return (
    <section className="py-12 px-4 bg-[#242222] text-white text-center">
      <h2 className="text-5xl font-semibold text-yellow-400 font-cinzel">
        Select Your Loadout
      </h2>
      <p className="mt-2 text-xl text-white/80 font-light">
        Gear up for your learning journey with the right strategy
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="relativebg-no-repeat  bg-contain bg-center px-6 py-10 text-left min-h-[500px]"
            style={{
              backgroundImage: `url('${plan.bgImage}')`,
            }}
          >
            <h3 className="text-3xl mt-4 ml-2  font-bold text-yellow-400 mb-2">
              {plan.title}
            </h3>
            <p className="text-3xl mt-12 ml-2 font-semibold mb-6 ">{plan.price}</p>
            <ul className="space-y-2 text-lg ml-2 font-serif">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
