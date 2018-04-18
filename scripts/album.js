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
// My Album
var album90s= {
    title: '90s Top 10 Billboard Singles',
    artist: 'Various Artists',
    label: 'EM',
    year: '1999',
    albumArtUrl: 'assets/images/album_covers/22.png',
    songs: [
        { title: 'One Sweet Day', duration: '4:42' },
        { title: 'I Will Always Love You', duration: '4:31' },
        { title: "I'll Make Love To You", duration: '4:07'},
        { title: 'Macarena', duration: '3:51' },
        { title: "Candle in the Wind '97", duration: '4:11'},
        { title: "End of Road", duration: '4:13'},
        { title: "The Boy Is Mine", duration: '4:54'},
        { title: "Smooth", duration: '4:56'},
        { title: "I Swear", duration: '3:43'},
        { title: "Un-break My Heart", duration: '4:32'}

    ]
};
var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    return template;
};

// #1
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
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

window.onload = function() {
    setCurrentAlbum(albumPicasso);

    var album = [albumPicasso, albumMarconi, album90s]
    var index = 1;
    albumImage.addEventListener('click', function(event) {
        setCurrentAlbum(album[index]);
        index++;
        if (index == album.length) {
          index = 0;
        }
    });
};

// 1ST ATTEMPT
// window.onload = function() {
//     setCurrentAlbum(albumPicasso);
//     albumImage.addEventListener('click', function(event) {
//         var i = 0
//           for (var i = 0; i < albumImage.length; i++) {
//                return setCurrentAlbum;
// };

// window.onload = function() {
//     if (window.innerHeight > 950) {
//          animatePoints(pointsArray);
//     }
//     var sellingPoints = document.getElementsByClassName('selling-points')[0];
//     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
//     window.addEventListener('scroll', function(event) {
//       console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
//       if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
//              animatePoints(pointsArray);
//       }
//     });
// }
