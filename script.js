let textDisplayed = false;
let textElement = null;

// Function to toggle the visibility of specified classes
function toggleVisibility(className) {
    // Get all elements with the specified class
    const elements = document.querySelectorAll(`.${className}`);
    
    // Loop through each element and toggle the 'display' style
    elements.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';  // Show the element
        } else {
            element.style.display = 'none';   // Hide the element
        }
    });
}

// Listen for the keydown event
document.addEventListener('keydown', function(event) {
    // Check if the Right Shift key is pressed
    if (event.code === 'ShiftRight') {
        if (!textDisplayed) {
            // Create a container div for both lines
            textElement = document.createElement('div');
            textElement.style.position = 'fixed';
            textElement.style.top = '80%';
            textElement.style.left = '50%';
            textElement.style.transform = 'translate(-50%, -50%)';
            textElement.style.zIndex = 1000; // Ensure the text is on top
            textElement.style.textAlign = 'center'; // Align text to center

            // Create the first line of text
            let line1 = document.createElement('div');
            line1.textContent = 'hello this you are seeing this bc you are useing a script mde by akuma';
            line1.style.color = 'transparent';
            line1.style.background = 'linear-gradient(to bottom, red, black)';
            line1.style.backgroundClip = 'text';
            line1.style.webkitBackgroundClip = 'text';
            line1.style.fontSize = '24px';
            
            // Create the second line of text
            let line2 = document.createElement('div');
            line2.textContent = 'Commans: Ctrl L for StreamerModeScript';
            line2.style.color = 'transparent';
            line2.style.background = 'linear-gradient(to bottom, red, black)';
            line2.style.backgroundClip = 'text';
            line2.style.webkitBackgroundClip = 'text';
            line2.style.fontSize = '24px';

            // Append the lines to the container
            textElement.appendChild(line1);
            textElement.appendChild(line2);

            // Append the container to the body
            document.body.appendChild(textElement);
            textDisplayed = true;
        } else {
            // Remove the text if already displayed
            textElement.remove();
            textDisplayed = false;
        }
    }

    // Check if both Ctrl and L are pressed
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault(); // Prevent default behavior (like focusing the address bar in some browsers)
        toggleVisibility('username');    // Toggle visibility of username
        toggleVisibility('clan-tag');    // Toggle visibility of clan-tag
        toggleVisibility('logo');        // Toggle visibility of logo
        toggleVisibility('FRIENDS');     // Toggle visibility of FRIENDS
        toggleVisibility('MAP');         // Toggle visibility of MAP
    }
});
