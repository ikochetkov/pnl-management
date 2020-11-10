export const getCurrency = (rawData) => {
    return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(rawData)
}
export const getPercentage = (rawData) => {
    return `${rawData} %`
}