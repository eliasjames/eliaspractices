const articles = [
  {
    "label": "latest audio",
    "date": "20200805",
    "link": "https://www.reverbnation.com/eliasjames",
    "shortName": "ReverbNation",
  },
  {
    "label": "livestreams",
    "date": "20200805",
    "link": "https://www.facebook.com/eliasjamesmusic/",
    "shortName": "Facebook",
  },
  {
    "label": "videos",
    "date": "20200805",
    "link": "https://www.youtube.com/channel/UCo90TSZZQYNIDh4vneV6-iQ?view_as=subscriber",
    "shortName": "YouTube",
  },
  {
    "label": "first solo album",
    "date": "20120101",
    "link": "https://eliasjames.bandcamp.com/",
    "shortName": "BandCamp",
  },
  {
    "label": "former member",
    "date": "20100101",
    "link": "https://myspace.com/66breakoutband",
    "shortName": "66 Breakout",
  },
  {
    "label": "former member",
    "date": "20080101",
    "link": "https://open.spotify.com/artist/1llOxvdrnDrNxDuJYOHWw4",
    "shortName": "Triple Thick",
  },
];

document.addEventListener("DOMContentLoaded", ()=>{
  const creativeList = document.querySelector("#creative-list");
  articles.forEach(e => {
    const eachLI = document.createElement("li");
    eachLI.innerHTML = `
      ${ e.label }: <a href="${ e.link }">${ e.shortName }</a>
    `;
    creativeList.appendChild(eachLI);
  });
});
