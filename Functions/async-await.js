const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000)
})

const processedData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data

}

processedData().then((data) => {
    console.log('Data', data, 'is the result')
}).catch((err) => {
    console.log('Error', err)
}) 