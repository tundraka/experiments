(function TextMask() {
    var completedEvent = new Event('completed');

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

    function inputHandler(e) {
        var text = e.target;
        var inputValue = text.value;
        var mask = text.dataset.mask;
        var currentPatternChar = '';
        var visualValue = '';
        var completed = true;

        for (var i = 0; i < mask.length; i ++) {
            currentPatternChar = mask.charAt(i)
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

    function initializeTexts() {
        // we look for texts that have a data-mask attribute.
        var texts = document.querySelectorAll('input[type=text][data-mask]');
        var totalTexts = texts && texts.length || 0;

        if (totalTexts === 0) {
            return;
        }

        for (var i = 0; i < totalTexts; i ++) {
            var text = texts[i];

            if (text) {
                text.placeholder = text.dataset.mask;
                text.addEventListener('input', inputHandler);
            }
        }
    }

    initializeTexts();
})();
