let currentIndex = 0;
const banner = document.getElementById('slider');
const banners = [
    {
        // image: '/W3Band/assets/img/sliders/chicago.jpg',
        img: './assets/img/sliders/chicago.jpg',

        heading: 'Chicago',
        description: "Thank you, Chicago - A night we won't forget."
    },
    {
        // image: '/W3Band/assets/img/sliders/ny.jpg',
        img: './assets/img/sliders/ny.jpg',

        heading: 'New York',
        description: "The atmosphere in New York is lorem ipsum."
    },
    {
        // image: '/W3Band/assets/img/sliders/la.jpg',
        img: './assets/img/sliders/la.jpg',

        heading: 'Los Angeles',
        description: "We had the best time playing at Venice Beach!"
    }
];
console.log("Current Image URL:", banners[currentIndex].img);


function changeBackgroundImage() {
    if (currentIndex === banners.length) {
        currentIndex = 0;
    }

    banner.style.backgroundImage = `url(${banners[currentIndex].img})`;
    banner.innerHTML = `
        <div class="text-content">
            <h2 class="text-heading">${banners[currentIndex].heading}</h2>
            <p class="text-description">${banners[currentIndex].description}</p>
        </div>
    `;
    currentIndex++;
}

// Tạo observer chỉ để theo dõi lần đầu
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        // Khi slider nằm trong viewport, bắt đầu thay đổi ảnh
        changeBackgroundImage();
        setInterval(changeBackgroundImage, 4500);
        // Dừng quan sát sau khi đã bắt đầu
        observer.unobserve(banner);
    }
}, { rootMargin: '0px', threshold: 0.2 });

// Bắt đầu quan sát
observer.observe(banner);
