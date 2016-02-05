var TextMask = function TextMask() {
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

    function input(e) {
        var text = e.target;
        var currentPatternChar = '';
        var inputValue = text.value;
        var mask = text.dataset.mask;
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

    function initializeTextElement(element) {
        var selected = null;
        var texts;

        if (!element) {
            return selected;
        }

        texts = document.getElementsByClassName(element.className);
        if (texts && texts.length > 0) {
            selected = texts[0];

            // if we have a mask, we initialize, otherwise, ignore.
            if (selected.dataset.mask) {
                selected.placeholder = element.pattern;
                selected.addEventListener('input', input);
            }
        }

        return selected;
    }

    function initializeElements(elements) {
        if (!Array.isArray(elements) && typeof elements === 'object') {
            elements = [elements];
        }

        elements.forEach(function(element) {
            initializeTextElement(element);
        });
    }

    return {
        initializeElements: initializeElements
    };
};
