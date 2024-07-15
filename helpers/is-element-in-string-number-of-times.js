const isElementNotAString = (element) => typeof element !== 'string';

const isElementInStringNumberOfTimes = (elements, elementToFind, minOccurrences) => {
    if (!elements || !elementToFind || !minOccurrences || isElementNotAString(elements) || isElementNotAString(elementToFind) || isElementNotAString(minOccurrences)) {
        return false
    }
    const requiredOccurrences = Number(minOccurrences);
    if (isNaN(requiredOccurrences)) {
        return false
    }
    const arrayOfElements = elements.split(',');
    const occurrencesCount = arrayOfElements.reduce((count, currentElement) => {
        return currentElement === elementToFind ? count + 1 : count;
    }, 0);
    return requiredOccurrences <= occurrencesCount
}