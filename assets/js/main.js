document.addEventListener('DOMContentLoaded', function() {
    const actionBtn = document.getElementById('actionBtn');
    const message = document.getElementById('message');

    actionBtn.addEventListener('click', function() {
        message.innerHTML = "Thank you for visiting PHconsult!";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const flyerImage = document.querySelector('img');

    flyerImage.addEventListener('mouseover', function() {
        flyerImage.style.filter = 'brightness(0.8)';
    });

    flyerImage.addEventListener('mouseout', function() {
        flyerImage.style.filter = 'brightness(1)';
    });
});
