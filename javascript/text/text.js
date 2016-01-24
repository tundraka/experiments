(function(options) {
    var domLoadInterval;
    var textElement;
    var position;
    var initStates = ['interactive', 'complete'];

    // . any
    // # number
    // ! symbols

    function keyDown(e) {
        console.log('length=' + textElement.value.length);
         console.log('char=' + e.char);
         console.log('key=' + e.key);
         console.log('charCode=' + e.charCode);
         console.log('keyCode=' + e.keyCode);
         console.log('------------');
    }

    function init() {
        if (domLoadInterval) {
            clearInterval(domLoadInterval);
        }

        var textElements = document.getElementsByClassName(options.className);

        if (textElements && textElements.length > 0) {
            textElement = textElements[0];
            textElement.addEventListener('keyup', keyDown);
        }
    }

    domLoadInterval = setInterval(function() {
        console.log(document.readyState);
        if (initStates.includes(document.readyState)) {
            init();
        }
    }, 10);

})({
    className: 'formatted',
    format: '####-####'
});
