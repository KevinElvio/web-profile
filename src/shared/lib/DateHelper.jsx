const formatDate = (dateStirng) => {
    if(!dateStirng){
        return "-";
    }
    const option = {year: 'numeric', month:'short', day:'numeric'}
    return new Date(dateStirng).toLocaleDateString('en-EN', option)
}

export {
    formatDate
}