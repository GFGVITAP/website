// script.js
const technicalBtn = document.getElementById('technicalBtn');
const communityBtn = document.getElementById('communityBtn');
const eventBtn = document.getElementById('eventBtn');
const techBtn = document.getElementById('techBtn');
const contentBtn = document.getElementById('contentBtn');
const socialBtn = document.getElementById('socialBtn');
const designBtn = document.getElementById('designBtn');
const marketBtn = document.getElementById('marketBtn');


const technicalContent = document.getElementById('technicalContent');
const communityContent = document.getElementById('communityContent');
const eventContent = document.getElementById('eventContent');
const techContent = document.getElementById('techContent');
const contentContent = document.getElementById('contentContent');
const socialContent = document.getElementById('socialContent');
const designContent = document.getElementById('designContent');
const marketContent = document.getElementById('marketContent');


technicalBtn.addEventListener('click', () => {
    technicalContent.style.display = 'block';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';


});

communityBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'block';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';

});

eventBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'block';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';
});

techBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'block';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';

});

contentBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'block';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';

});

socialBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'block';
    designContent.style.display = 'none';
    marketContent.style.display = 'none';

});

designBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'block';
});

marketBtn.addEventListener('click', () => {
    technicalContent.style.display = 'none';
    communityContent.style.display = 'none';
    eventContent.style.display = 'none';
    techContent.style.display = 'none';
    contentContent.style.display = 'none';
    socialContent.style.display = 'none';
    designContent.style.display = 'none';
    marketContent.style.display = 'block';
});
