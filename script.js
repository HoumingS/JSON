let albumItems = document.getElementById("albums");
let jsonDatabase = [
  {
    "cover_url":"images/squareOne.jpeg",
    "album" : "Square \nOne",
    "date": "August, 2016",
    "songs": ["1. Whistle \n2. Boombayah"]
  },
  {
    "cover_url":"images/squareTwo.jpeg",
    "album" : "Square \nTwo",
    "date": "November, 2016",
    "songs": ["1. Play With Fire \n2. Stay"]
  },
  {
    "cover_url":"images/squareUp.png",
    "album" : "Square \nUp",
    "date": "June, 2018",
    "songs": ["1. Ddu-Du Ddu-Du\n2. Forever Young \n3. Really \n4.See U Later"]
  },
  {
    "cover_url":"images/killThisLove.png",
    "album" : "Kill This \nLove",
    "date": "April, 2019",
    "songs": ["1. Kill This Love \n2. Don't Know What to Do \n3. Kick It \n4. Hope Not"]
  },
  {
      "cover_url":"images/theAlbum.png",
      "album" : "The \nAlbum",
      "date": "October, 2020",
      "songs": ["1. How You Like That \n2. Ice Cream \n3. Pretty Savage \n4. Bet You Wanna \n5. Lovesick Girls \n6. Crazy Over You \n7. Love To Hate Me \n8. You Never Know"]
  },
  {
      "cover_url":"images/bornPink.jpeg",
      "album" : "BORN \nPINK",
      "date": "Spetember, 2022",
      "songs": ["1. Pink Venom \n2. Ready for Love \n3. Shut Down"]
  }
];

for (let i = 0; i < jsonDatabase.length; i++){
  createContent(jsonDatabase[i]);
}

function createContent(database){
  //create div for each item
  let newAlbum = document.createElement("DIV");
  newAlbum.classList.add("item");

  //add cover images
  let newCover = document.createElement("IMG");
  newCover.classList.add("cover");
  newCover.src = database['cover_url'];
  newAlbum.appendChild(newCover);
  //add album names
  let newAlbumTitle = document.createElement("H3");
  newAlbumTitle.classList.add("albumTitle");
  newAlbumTitle.innerText = database['album'];
  newAlbum.appendChild(newAlbumTitle);

  let newSongs = document.createElement("h5");
  newSongs.classList.add("songTitle");
  newSongs.innerText=database['songs'];
  newAlbum.appendChild(newSongs);

  //ADD date
  let newDate = document.createElement("h5");
  newDate.classList.add("albumDate");
  newDate.innerText = database["date"];
  newAlbum.appendChild(newDate);
  //add & display song titles

  //add to html page
  albumItems.appendChild(newAlbum);
}

$(".cover").click(function(){
  $(".albumTitle").show();
});

$(".albumTitle").click(function(){
  $(".songTitle").slideDown();
  $(".albumDate").slideDown();
});
