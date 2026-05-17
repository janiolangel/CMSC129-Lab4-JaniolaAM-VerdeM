function validateReadingStatus(status) {
    const validStatuses = ["To Read", "Currently Reading", "Completed", "Dropped"]
    
    return validStatuses.includes(status)
}

module.exports = validateReadingStatus
