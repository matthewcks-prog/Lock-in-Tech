const fs = require("fs");
const path = require("path");

const images = [
  { name: "headphones-budget.png", color: "#94a3b8", text: "Budget Buds" },
  { name: "headphones-value.png", color: "#3b82f6", text: "ANC Headphones" },
  { name: "headphones-premium.png", color: "#a855f7", text: "Studio Pro" },
  { name: "mouse-budget.png", color: "#94a3b8", text: "Basic Mouse" },
  { name: "mouse-value.png", color: "#3b82f6", text: "Ergo Mouse" },
  { name: "mouse-premium.png", color: "#a855f7", text: "Pro Mouse" },
  { name: "keyboard-budget.png", color: "#94a3b8", text: "Slim Keyb" },
  { name: "keyboard-value.png", color: "#3b82f6", text: "Mech TKL" },
  { name: "keyboard-premium.png", color: "#a855f7", text: "Custom 65%" },
  { name: "stand-budget.png", color: "#94a3b8", text: "Plastic Stand" },
  { name: "stand-value.png", color: "#3b82f6", text: "Alum Riser" },
  { name: "stand-premium.png", color: "#a855f7", text: "Arm Mount" },
  { name: "monitor-budget.png", color: "#94a3b8", text: '21" 1080p' },
  { name: "monitor-value.png", color: "#3b82f6", text: '27" 1440p' },
  { name: "monitor-premium.png", color: "#a855f7", text: '34" Ultrawide' },
];

const outDir = path.join(__dirname, "../public/images");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

images.forEach((img) => {
  const svgContent = `
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="transparent"/>
  <circle cx="150" cy="150" r="100" fill="${img.color}" fill-opacity="0.2" stroke="${img.color}" stroke-width="4"/>
  <text x="50%" y="50%" font-family="monospace" font-size="24" fill="${img.color}" text-anchor="middle" dy=".3em">${img.text}</text>
</svg>`;

  // We are saving as .png in the data file, but for placeholders SVGs are easier to generate text with.
  // However, Next.js Image component works fine if we just save the SVG content but name it .png?
  // No, that might confuse it. Let's save as .svg and I'll update the data file to point to .svg for now?
  // OR, I can just name them .svg and update the data file. That's cleaner.

  fs.writeFileSync(
    path.join(outDir, img.name.replace(".png", ".svg")),
    svgContent
  );
});

console.log("Generated placeholder SVGs in public/images");
