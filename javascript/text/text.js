(function(options) {
    var domLoadInterval;
    var textElement;
    var initStates = ['interactive', 'complete'];

    var completedEvent = new Event('completed');

    // . any
    // # number
    // ! symbols

    function keyDown(e) {
        console.log('----DO------');
        console.log('random=' + Math.random());
        console.log('length=' + textElement.value.length);
        console.log('value=' + textElement.value);
        //console.log('char=' + e.char);
        console.log('key=' + e.key);
        //console.log('charCode=' + e.charCode);
        //console.log(keyCode=' + e.keyCode);
    }

    function getRegExp(pattern) {
        var regEx = null;

        switch(pattern) {
            case '#': regEx = /\d/; break;
            default: regEx = null;
        }

        return regEx;
    }

    function findNextValidChar(pattern, inputValue) {
        var re = getRegExp(pattern);
        var validChar = '';

        if (re === null) {
            return {nextChar: pattern, inputValue: inputValue};
        }

        for (var i = 0; i < inputValue.length; i ++) {
            var currentChar = inputValue.charAt(i);
            if (currentChar.match(re)) {
                validChar = currentChar;
                break; 
            }
        }

        return {nextChar: validChar, inputValue: inputValue.slice(i + 1)}
    }

    function input(e) {
        var text = e.target;
        var currentChar = '';
        var currentPatternChar = '';
        var inputValue = text.value;
        var visualValue = '';
        var completed = true;

        for (var i = 0; i < options.pattern.length; i ++) {
            currentPatternChar = options.pattern.charAt(i)
            var nextValidChar = findNextValidChar(currentPatternChar, inputValue);

            visualValue += nextValidChar.nextChar;
            inputValue = nextValidChar.inputValue;

            if (inputValue === '') {
                completed = false;
                break;
            }
        }

        if (completed) {
            text.dispatchEvent(completedEvent);
        }

        text.value = visualValue;
    }

    function init() {
        if (domLoadInterval) {
            clearInterval(domLoadInterval);
        }

        var textElements = document.getElementsByClassName(options.className);

        if (textElements && textElements.length > 0) {
            textElement = textElements[0];
            textElement.placeholder = options.pattern;
            textElement.addEventListener('input', input);
        }
    }

    domLoadInterval = setInterval(function() {
        if (initStates.includes(document.readyState)) {
            init();
        }
    }, 10);

})({
    className: 'formatted',
    pattern: '#### #### #### ####'
});
