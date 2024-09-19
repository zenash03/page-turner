function generateCollectionList() {
    let collectionList = document.getElementById('collection-list');
    collectionList.innerHTML = generateCollection();
}
generateCollectionList()