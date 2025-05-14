import Image from "next/image";

const pricingPlans = [
  {
    title: "Rookie Mode",
    price: "₹Free tier",
    features: [
      { text: "3 PYQ Access", type: "tick" },
      { text: "Personalized Dashboard", type: "tick" },
      { text: "Leaderboard", type: "tick" },
      { text: "No Monthly Missions", type: "cross" },
      { text: "No Rewards", type: "cross" },
      { text: "No Vault Access", type: "cross" },
    ],
    bgImage: "/images/rate_bg.png",
  },
  {
    title: "Pro League",
    price: "₹699/month",
    features: [
      { text: "Unlimited PYQ Access", type: "tick" },
      { text: "Personalized Dashboard", type: "tick" },
      { text: "Leaderboard", type: "tick" },
      { text: "Monthly Missions", type: "tick" },
      { text: "Rewards (XP, badges)", type: "tick" },
      { text: "Limited Vault Access (1 vault unlock/month)", type: "cross" },
    ],
    bgImage: "/images/rate_bg.png",
  },
  {
    title: "Legendary<br/>Vault Access", // With <br/>
    price: "₹999/month",
    features: [
      { text: "All Features in Pro League", type: "tick" },
      { text: "Exclusive Monthly Missions", type: "tick" },
      { text: "Unlimited Vault Unlocks", type: "tick" },
      { text: "Special Leaderboard Placement", type: "tick" },
      { text: "Priority Support & Early Access to New Features", type: "tick" },
    ],
    bgImage: "/images/rate_bg.png",
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
            className="relative bg-no-repeat bg-contain bg-center px-6 py-10 text-left min-h-[500px]"
            style={{
              backgroundImage: `url('${plan.bgImage}')`,
            }}
          >
            <h3
              className="text-3xl mt-4 ml-2 font-bold text-yellow-400 mb-2"
              dangerouslySetInnerHTML={{ __html: plan.title }}
            />
            <p className="text-3xl mt-12 ml-2 font-semibold mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 text-lg ml-2 font-serif">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image
                    src={
                      feature.type === "tick"
                        ? "/images/icons/tick.png"
                        : "/images/icons/cross.png"
                    }
                    alt={feature.type === "tick" ? "tick" : "cross"}
                    width={20}
                    height={20}
                  />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
