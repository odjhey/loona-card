import { ServerRequest } from "./deps.ts";
import { parseParams } from "./src/utils.ts";

export default (req: ServerRequest) => {
  const params = parseParams(req);

  const loona = params.get("loona") || "loona";

  const info = {
    loona,
    name: "heejin",
    color: "pink",
    animal: "rabbit",
  };

  req.respond({
    // body: JSON.stringify(info, null, 2),
    body: new Card('heejin').render(),
    headers: new Headers({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `public, max-age=${3600}`,
    }),
  });
};


const Loona = {
  "heejin":    { color: "#EB2B89", no: "01", name: "heejin", nameKr: "" , animal:"rabbit"},
  "hyunjin":   { color: "#F4D020", no: "02", name: "hyunjin", nameKr: "" , animal:"cat"},
  "haseul":    { color: "#00A74E", no: "03", name: "haseul", nameKr: "" , animal:"phoenix"},
  "yeojin":    { color: "#FD8B49", no: "04", name: "yeojin", nameKr: "" , animal:"frog"},
  "vivi":      { color: "#FFA7B6", no: "05", name: "vivi", nameKr: "" , animal:"deer"},
  "kimlip":    { color: "#F4253C", no: "06", name: "kimlip", nameKr: "" , animal:"owl"},
  "jinsoul":   { color: "#1B23A9", no: "07", name: "jinsoul", nameKr: "" , animal:"blue betta"},
  "choerry":   { color: "#6D2BA8", no: "08", name: "choerry", nameKr: "" , animal:"fruit bat"},
  "yves":      { color: "#710D31", no: "09", name: "yves", nameKr: "" , animal:"swan"},
  "chuu":      { color: "#EF8A73", no: "10", name: "chuu", nameKr: "" , animal:"penguin"},
  "gowon":     { color: "#40CCAC", no: "11", name: "gowon", nameKr: "" , animal:"emperor butterfly"},
  "oliviahye": { color: "#000000", no: "12", name: "oliviahye", nameKr: "" , animal:"wolf"},
};

class Card {
  private width = 1000;
  private height = 1000;
  private loona = Loona.heejin
  constructor(key: string) { this.loona = Loona[key as keyof typeof Loona] }
  render(): string {
    return `
    <svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 ${this.width} ${this.height}"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
    >${new Circles( this.loona ).render()}
    </svg>`;
  }
}

class Circles {
  private loona
  constructor( loona: any ) {
    this.loona = loona
  }
  render(): string {
    const {color, animal} = this.loona
    return `<circle cx="50" cy="70" r="40" stroke="${color}" stroke-width="1" fill="${color}" />
        <text x="5" y="40" fill="black" font-style="italic">${animal}</text>
        <text x="5" y="20" fill="black" font-style="italic">Loonatheworld</text>
      `;
  }
}
