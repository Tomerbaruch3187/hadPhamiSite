const popup = document.querySelector('.popup');

        const openPopup = function () {
            popup.classList.add('open-popup');
        };

        const closePopup = function () {
            popup.classList.remove('open-popup');
            document.body.classList.remove('container-blur');
        };

        // Automatically open the popup after 1 seconds
        setTimeout(openPopup, 1000);