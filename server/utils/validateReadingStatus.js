function validateReadingStatus(status) {
    const VALID_STATUSES = new Set([
        "To Read",
        "Currently Reading",
        "Completed",
        "Dropped"
    ])
    
    return VALID_STATUSES.has(status)
}

module.exports = validateReadingStatus