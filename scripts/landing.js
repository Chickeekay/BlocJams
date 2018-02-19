var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
}

var animatePoints = function(points) {
    forEach(points, revealPoint);

    for (var i = 0; i < points.length; i++) {
    revealPoint(i);
    // CP23_DOM_Events_Attempt#1
    // function forEAch.callback();
    }
 };

window.onload = function() {
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
      console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
      if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
      }
    });
}
