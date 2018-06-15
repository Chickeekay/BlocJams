var buildCollectionItemTemplate = function() {
    var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/Onward.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> Onward </a>'
   + '      <br/>'
   + '      <a href="album.html"> Various Artists </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;

   return $(template);
};


$(window).load(function () {
    var $collectionContainer = $('.album-covers');
    $collectionContainer.empty();

    for (var i = 0; i < 12; i++) {
        var $newThumbnail = buildCollectionItemTemplate();
        $collectionContainer.append($newThumbnail);
    }
});
