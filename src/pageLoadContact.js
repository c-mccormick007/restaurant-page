let populatePageContact = () => {
    const contentDiv = document.getElementById('content');
    
    const contactName = document.createElement('div');
    contactName.classList.add('contactText')
    contactName.textContent = "John P. Doe";
    contentDiv.appendChild(contactName);
    const contactNumber = document.createElement('div');
    contactNumber.classList.add('contactText')
    contactNumber.textContent = "773-555-5555";
    contentDiv.appendChild(contactNumber);
    const contactEmail = document.createElement('div');
    contactEmail.classList.add('contactText')
    contactEmail.textContent = "JDoe35@fakemail.com";
    contentDiv.appendChild(contactEmail);

}

export {populatePageContact};