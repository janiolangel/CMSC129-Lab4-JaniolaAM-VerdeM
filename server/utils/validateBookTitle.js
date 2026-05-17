function validateBookTitle(title) {

    const trimmedTitle = title.trim()
    const isEmpty = trimmedTitle.length === 0
    const exceedsMaxLength = trimmedTitle.length > 500
    
    return !isEmpty && !exceedsMaxLength
}

module.exports = validateBookTitle
