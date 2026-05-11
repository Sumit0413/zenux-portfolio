import React from "react";

const ITEMS = [
  { text: "Branding", icon: "★", color: "#FF6B35" },
  { text: "Web Design", icon: "✦", color: "#2EC4B6" },
  { text: "Motion", icon: "★", color: "#FF3366" },
  { text: "Strategy", icon: "✦", color: "#FF6B35" },
  { text: "Digital Art", icon: "★", color: "#2EC4B6" },
  { text: "Development", icon: "✦", color: "#FF3366" },
  { text: "UX Research", icon: "★", color: "#FF6B35" },
  { text: "Photography", icon: "✦", color: "#2EC4B6" },
];

// Double the items so the marquee loop is seamless
const DOUBLE = [...ITEMS, ...ITEMS];

export default function MarqueeBelt() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: "#0F172A",
        borderTop: "4px solid #FF6B35",
        borderBottom: "4px solid #FF6B35",
        padding: "1.25rem 0",
      }}
      aria-label="Service highlights"
    >
      <div className="marquee-track">
        {DOUBLE.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 pr-12"
            style={{
              whiteSpace: "nowrap",
              fontFamily: "Cabinet Grotesk, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            {item.text}
            <span style={{ color: item.color, fontSize: "1.25rem" }}>{item.icon}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
