// Function to fetch and render HTML content into a container
function render(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error(`Error fetching component from ${componentUrl}:`, error));
}
