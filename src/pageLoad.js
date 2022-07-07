let populatePageMain = () => {
    const contentDiv = document.getElementById('content');

    const pageHeader = document.createElement('h1');
    pageHeader.innerText = "SPAGHETTI RESTAURANT";
    contentDiv.appendChild(pageHeader);
    const pageImg = document.createElement('img');
    pageImg.src = ('/src/spag.jpg');
    contentDiv.appendChild(pageImg);
    const pageDesc = document.createElement('p');
    pageDesc.innerText = "What a great restaurant this is. I fricken love spaghetti.";
    contentDiv.appendChild(pageDesc);
}

export {populatePageMain};