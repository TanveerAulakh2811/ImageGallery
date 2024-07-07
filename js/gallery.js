
// Function to change the source of the full-size image
function changeimage(changesrc) {
    var image = document.getElementById("fullimage");
    image.src = changesrc;
}

// Array of gallery items, each with a thumbnail, full-size image, and caption
const galleryItems = [
    {
        thumbnail: 'images/flowers-pink-small.jpg',
        fullSize: 'images/flowers-pink-large.jpg',
        caption: 'Beautiful pink flowers in full bloom.'
    },
    {
        thumbnail: 'images/flowers-purple-small.jpg',
        fullSize: 'images/flowers-purple-large.jpg',
        caption: 'Stunning purple flowers under the sunlight.'
    },
    {
        thumbnail: 'images/flowers-red-small.jpg',
        fullSize: 'images/flowers-red-large.jpg',
        caption: 'Vibrant red flowers that catch the eye.'
    },
    {
        thumbnail: 'images/flowers-white-small.jpg',
        fullSize: 'images/flowers-white-large.jpg',
        caption: 'Elegant white flowers with a delicate touch.'
    },
    {
        thumbnail: 'images/flowers-yellow-small.jpg',
        fullSize: 'images/flowers-yellow-large.jpg',
        caption: 'Cheerful yellow flowers brightening the day.'
    },
    {
        thumbnail: 'images/flowers-roses-small.jpg',
        fullSize: 'images/flowers-roses-large.jpg',
        caption: 'Passionate hues of roses painting nature\'s canvas.'
    }
];

// Event listener that runs when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the thumbnail list, full image element, and caption element
    const thumbnailList = document.getElementById('thumbnails');
    const fullImage = document.getElementById('fullimage');
    const figCaption = document.querySelector('#fullpicture figcaption');

    // Loop through each gallery item and create thumbnail elements
    galleryItems.forEach((item, index) => {
        const listItem = document.createElement('li'); // Create a list item for the thumbnail
        const img = document.createElement('img'); // Create an image element for the thumbnail
        img.src = item.thumbnail; // Set the source of the thumbnail image
        img.alt = item.caption; // Set the alt text for accessibility
        img.width = 240; // Set the width of the thumbnail
        img.height = 160; // Set the height of the thumbnail
        // Add a click event listener to change the full-size image when the thumbnail is clicked
        img.addEventListener('click', () => changeImage(index));
        listItem.appendChild(img); // Append the thumbnail image to the list item
        thumbnailList.appendChild(listItem); // Append the list item to the thumbnail list
    });

    // Function to change the full-size image and caption based on the selected index
    function changeImage(index) {
        const item = galleryItems[index]; // Get the gallery item based on the index
        fullImage.src = item.fullSize; // Change the source of the full-size image
        figCaption.textContent = item.caption; // Update the caption text

        // Get all thumbnail images and update the active state
        const thumbnails = document.querySelectorAll('#thumbnails img');
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active'); // Add 'active' class to the selected thumbnail
            } else {
                thumb.classList.remove('active'); // Remove 'active' class from other thumbnails
            }
        });
    }

    changeImage(0); // Initialize with the first image and caption
});
