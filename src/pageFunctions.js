let removeContent = () => {
    const contentDiv = document.getElementById('content');
    console.log('content removed.')
    contentDiv.replaceChildren();

}

export {removeContent};