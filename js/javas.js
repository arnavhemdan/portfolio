document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.box.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const title = card.querySelector('.card-title').innerText;
            const description = getProjectDescription(title);
            updateDescription(description);
        });
    });

    function getProjectDescription(title) {
        switch (title) {
            case 'BURGER SHOP MANAGEMENT SYSTEM':
                return 'Manage your burger shop effortlessly with our Java-based Burger Shop Management System. Built with Java Swing and Applet, this user-friendly software easily handles orders, inventory, and customer data using an SQL database. Streamline your operations and boost efficiency with our straightforward solution designed for the everyday needs of your burger shop.';
            case 'SIGN LANGUAGE INTERPRETER':
                return 'Elevate accessibility with our Sign Language Recognition System. Powered by RCNN technology and seamlessly integrated with HTML and Flask in the frontend, this innovative solution accurately interprets sign language gestures. Empower communication for the hearing-impaired community with our intuitive and responsive interface.';
            case 'WEATHER PREDICTION':
                return 'Predict the weather with ease using our Python-based Weather Prediction System. Developed with Flask and integrated with weather APIs, this intuitive software provides accurate forecasts tailored to your location. Stay ahead of the elements and plan your activities confidently with our user-friendly solution.';
          }
    }

    function updateDescription(description) {
        const descriptionDiv = document.getElementById('project-description');
        descriptionDiv.innerHTML = description;
    }
});
