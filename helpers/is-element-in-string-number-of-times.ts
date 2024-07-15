const isElementNotAString = (element: unknown) => typeof element !== 'string'

const isElementInStringNumberOfTimes = (elements: string, elementToFind: string, minOccurrences: string): boolean => {

    if (!elements || !elementToFind || !minOccurrences || isElementNotAString(elements) || isElementNotAString(elementToFind) || isElementNotAString(minOccurrences)) {
        return false
    }

    const requiredOccurrences = Number(minOccurrences)
    if (isNaN(requiredOccurrences)) {
        return false
    }

    const arrayOfElements = elements.split(',')
    const occurrencesCount = arrayOfElements.reduce((count: number, currentElement: string) => {
        return currentElement === elementToFind ? count + 1 : count;
    }, 0)

    return requiredOccurrences <= occurrencesCount
}