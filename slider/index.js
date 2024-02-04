var imageno = 1;
        displayimagen(imageno);

        function nextimg(n) {
            displayimagen(imageno += n)
        }

        function previmg(n) {
            displayimagen(imageno -= n)
        }

        function currentSlide(n) {
            displayimagen(imageno = n)
        }

        function displayimagen(n) {
            var i;
            var image = document.getElementsByClassName("image");
            var dots = document.getElementsByClassName("dot");

            if (n < 1) {
                imageno = image.length;
            }

            if(n > image.length){
                imageno = 1;
            }

            for (i = 0; i < image.length; i++) {
                image[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            image[imageno - 1].style.display = "block";
            dots[imageno - 1].className += " active";
        }