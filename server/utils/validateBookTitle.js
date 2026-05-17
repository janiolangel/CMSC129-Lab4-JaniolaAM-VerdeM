function validateBookTitle(title) {
    if (!title.trim()) {
        return false
    }
    
    if (title.length > 500) {
        return false
    }
    
    return true
}

module.exports = validateBookTitle