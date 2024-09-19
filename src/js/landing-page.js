let bannerNum = 0;
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');
const bannerIndicator = document.getElementById('banner-indicator');
const bannerImage = document.getElementById('banner-image');
const indicator = document.querySelectorAll('.indicator');

let banner = [
    {
        name: 'banner 01',
        img_file_name: 'banner-01.jpg',
        description: 'ini banner 1'
    },
    {
        name: 'banner 02',
        img_file_name: 'banner-02.png',
        description: 'ini banner 2'
    },
    {
        name: 'banner 03',
        img_file_name: 'banner-03.jpg',
        description: 'ini banner 1'
    },
    {
        name: 'banner 04',
        img_file_name: 'banner-04.jpg',
        description: 'ini banner 4'
    },
    {
        name: 'banner 05',
        img_file_name: 'banner-05.jpg',
        description: 'ini banner 5'
    }
]
function generateBannerIndicator() {
    let indicatorElements = '';
    banner.forEach((element, index) => {
        const special = (index == bannerNum) ? 'active' : '';
        indicatorElements +=`<span class="indicator ${special}"></span>`
    });
    bannerIndicator.innerHTML = indicatorElements;  
}
generateBannerIndicator();


function nextBanner() {
    bannerNum = (++bannerNum >= banner.length) ? 0 : bannerNum;
    let newBanner = banner[bannerNum];
    const srcFile = `../../assets/Images/${newBanner.img_file_name}`;
    bannerImage.setAttribute('src', srcFile);
    generateBannerIndicator();
}

nextButton.addEventListener('click', nextBanner);
prevButton.addEventListener('click', function() {
    bannerNum = (bannerNum <= 0) ? (banner.length - 1) : --bannerNum;
    let newBanner = banner[bannerNum];
    const srcFile = `../../assets/Images/${newBanner.img_file_name}`;
    bannerImage.setAttribute('src', srcFile);
    generateBannerIndicator();
})

function autoBanner() {
    setInterval(nextBanner, 5000);
}
autoBanner();

function generateCollectionList() {
    const collectionList = document.getElementById('collection-list');
    collectionList.innerHTML = generateCollection();
}
generateCollectionList();