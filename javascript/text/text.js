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
        var inputs = document.getElementsByTagName('input');
        var totalInputs = inputs && inputs.length ? inputs.length : 0;

        if (totalInputs === 0) {
            return;
        }

        // we look for texts that have a data-mask attribute.
        for (var i = 0; i < totalInputs; i ++) {
            var input = inputs[i];

            if (input && input.getAttribute('type') === 'text' &&
                input.dataset && input.dataset.mask) {
                input.placeholder = input.dataset.mask;
                input.addEventListener('input', inputHandler);
            }
        }
    }

    initializeTexts();
})();
