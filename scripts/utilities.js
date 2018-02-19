// CP23_DOM_Events_Attempt#1
// var forEach = function(){
//   for (var i = 0; i < points.length; i++) {
//     revealPoint(i);
//     callback();
//   }
// }

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
