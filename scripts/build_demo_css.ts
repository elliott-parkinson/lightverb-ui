const rootCss = await Deno.readTextFile(
  new URL("../index.scss", import.meta.url),
);
const demoCss = await Deno.readTextFile(
  new URL("../demo/src/demo.css", import.meta.url),
);

const compiled =
  `/* Auto-generated file. Source: index.scss + demo/src/demo.css */\n\n${rootCss}\n\n${demoCss}\n`;

await Deno.writeTextFile(
  new URL("../demo/public/index.css", import.meta.url),
  compiled,
);
console.log("wrote demo/public/index.css");
