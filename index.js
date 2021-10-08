const articles = [
  {
    "label": "Freedom of Feeling",
    "date": "20211001",
    "link": "freedom-of-feeling",
  },
  {
    "label": "The Art of Practice",
    "date": "20211002",
    "link": "the-art-of-practice",
  },
  {
    "label": "Five Nines of Truth",
    "date": "20200805",
    "link": "five nines of truth",
  },
];

document.addEventListener("DOMContentLoaded", ()=>{
  const musicList = document.querySelector("#most-recent");
  musicList.innerHTML = "";
  articles.forEach(e => {
    const eachLI = document.createElement("li");
    eachLI.innerHTML = `
      ${ e.label }: <a href="${ e.link }">${ e.shortName }</a>
    `;
    musicList.appendChild(eachLI);
  });
});
