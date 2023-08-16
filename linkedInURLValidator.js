function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return regex.test(url);
}

function checkValidity(url) {
    if (validateLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}


const testURLs = [
    "https://www.linkedin.com/in/johndoe123",    
    "https://www.linkedin.com/in/alice_smith-42",                 
    "https://www.linkedin.com/in/_invalid",    
    "https://www.linkedin.com/in/jane.doe",    
    "https://www.linkedin.com/in/verylongusernamethatisinvalid",    
    "https://www.linkedin.com/profile",    
];


testURLs.forEach(url => {
    checkValidity(url);
});
