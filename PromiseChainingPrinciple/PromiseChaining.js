function getData(url) {
    return new Promise((resolve, reject) => {
        // Imagine a simple HTTP request simulation
        setTimeout(() => {
            if (url) {
                resolve({ data: 'Data from ' + url });
            } else {
                reject(new Error('No URL provided'));
            }
        }, 1000);
    });
}

getData('https://api.example.com/data')
    .then((response) => {
        console.log('First response:', response);
        // Chain another async task:
        return getData('https://api.example.com/more-data');
    })
    .then((response) => {
        console.log('Second response:', response);
    })
    .catch((error) => {
        console.error('Error during fetching:', error);
    });