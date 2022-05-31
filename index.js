var Pencil = (function () {
    // public methods will get added to this object
    var publicAPIs = {};
    // A private method
    var drawCircle = function () {
        console.log('Drawing a circle.')
    };
    var drawLine = function () {
        console.log('Drawing a line.')
    }
    // A public methods
    publicAPIs.drawCircle = function () {
        drawCircle();
    };
    publicAPIs.drawLine = function () {
        drawLine();
    }
    // Return our public methods so that they can be accessed
    return publicAPIs;
})();

Pencil.drawCircle();
Pencil.drawLine();