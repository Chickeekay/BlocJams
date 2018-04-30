// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};
var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

     return template;
};

var setCurrentAlbum = function(album) {
    // #1
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    // #3
    albumSongList.innerHTML = '';

    // #4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

// // CP27_DOM_PlayPauseP2 - findParentByClassName attempt #1
// var findParentByClassName = function() {
//   for (var i = 0; i >= className.length; i++){
//     document.getElementsByClassName('.song-item-number');
//   }, true;
// };

// // CP27_DOM_PlayPauseP2 - getSongItem attempt #1
// var getSongItem = function (element) {
//   // I don't get the whole 'based on that element's class name(s), use a switch statement that returns the element with the .song-item-number class.' I didn't even know there's a `switch` logic.
//   return element(.song-item-number);
// };

//https://github.com/Bloc/curriculum-public/blob/master/web-development/frontend/foundation/27-dom-scripting-play-pause-part-2/find-parent-by-class-name.js
var findParentByClassName = function(element, targetClass) {
    //Check if element exists
    if (element) {
        //Define a variable named currentParent. Set equal to element.parentElement
        var currentParent = element.parentElement;
        // Check if currentParent doesn't exist
        if (!currentParent) {
           //if it doesn't exist, console.log("No parent found")
          console.log ("No parent found");
        }
        // Check if there's a currentParent element that doesn't have that certain className.
        if (currentParent !== currentParent.className) {
          //if there isn't, console.log ("No parent found with that class name")
          console.log ("No parent found with that class name");
        }
        //Also, while there is a currentParent with a certain className that doesn't have a targeClass and that same currentParent doesn't equal to null,
        while (currentParent.className !== targetClass && currentParent.className !== null) {
        // then the currentParent should be equal to currentParent with a certain parentElement
        currentParent = currentParent.parentElement;
        // if it is, then retun currentParent;
        return currentParent;
        }
    }
};

//https://github.com/Bloc/curriculum-public/blob/master/web-development/frontend/foundation/27-dom-scripting-play-pause-part-2/get-song-item.js
var getSongItem = function(element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }
};

var clickHandler = function(targetElement) {
    var songItem = getSongItem(targetElement);

    if (currentlyPlayingSong === null) {
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');

    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
    songItem.innerHTML = playButtonTemplate;
    currentlyPlayingSong = null;

    } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
    var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
    currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');
    }
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    songListContainer.addEventListener('mouseover', function(event) {
        // #1
        // console.log(event.target);
        if (event.target.parentElement.className === 'album-view-song-item') {
          // https://github.com/Bloc/curriculum-public/blob/master/web-development/frontend/foundation/27-dom-scripting-play-pause-part-2/mouseover-behavior.js#L6-L11
            var songItem = getSongItem(event.target);
            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
            songItem.innerHTML = playButtonTemplate;
            }
        }
        //Update `mouseover` code Attempt #1
        // // #1
        //
        // var songItemNumber = songItem.getAttribute('data-song-number');
        //
        // // #2
        // if (songItemNumber = currentlyPlayingSong) {
        //   songItem.innerHTML !== songItemNumber;
        // }
    });
    for (var i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function(event) {
          // #1
          var songItem = getSongItem(event.target);
          var songItemNumber = songItem.getAttribute('data-song-number');

          // #2
          if (songItemNumber !== currentlyPlayingSong) {
            songItem.innerHTML = songItemNumber;
          }
        });
        songRows[i].addEventListener('click', function(event) {
            clickHandler(event.target);
        });
    };
};
