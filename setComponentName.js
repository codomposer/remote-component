const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

process.env.COMPONENT_NAME = componentName;
require("cross-env")([
  `COMPONENT_NAME=${componentName}`,
  "NODE_ENV=production",
  "webpack",
  "--mode",
  "production"
]);
