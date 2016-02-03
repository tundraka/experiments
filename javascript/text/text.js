(function(options) {
    var domLoadInterval;
    var textElements = [];
    var initStates = ['interactive', 'complete'];

    var completedEvent = new Event('completed');

    if (typeof options === 'object') {
        options = [options];
    }

    // . any
    // # number
    // ! symbols

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
                break;
            }
        }

        completed = false;
        if (completed) {
            text.dispatchEvent(completedEvent);
        }

        text.value = visualValue;
    }

    function getTextElement(element) {
        var selected = null;
        var texts, text;

        if (!element) {
            return selected;
        }

        texts = document.getElementsByClassName(options.className);
        if (texts && texts.length > 0) {
            text = texts[0];
            text.placeholder = options.pattern;
            text.addEventListener('input', input);
        }
        
    }

    function init() {
        if (domLoadInterval) {
            clearInterval(domLoadInterval);
        }

        options.forEach(function(element) {
            var text = getTextElement(element);
            if (!text) {
                continue;
            }

            textElements.push({
                element: text,
                pattern
            });
        });


    }

    domLoadInterval = setInterval(function() {
        if (initStates.includes(document.readyState)) {
            init();
        }
    }, 10);

})([
    {
        className: 'formatted',
        pattern: '(###) ###-####'
        //pattern: '#### #### #### ####'
    }
]);
