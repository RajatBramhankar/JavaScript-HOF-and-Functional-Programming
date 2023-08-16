function validateURL(input) {
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9_\-]+\.+[a-zA-Z]+$/;
    return regex.test(input);
}


const testURLs = [
    "http://www.example.com",    
    "https://api.example-site123.com",    
    "http://invalid!url.com",    
    "https://12345.com",    
    "https://www.example",    
    "ftp://www.example.com",    
];


testURLs.forEach(url => {
    if (validateURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
