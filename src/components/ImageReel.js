import React from "react";
import TransitionPageIn from "../components/TransitionPageIn";
import classica_2 from "../images/classica/classica_2.webp";
import classica_3 from "../images/classica/classica_3.webp";

function imageReel() {
    var i = 0; // Start Point
    var images = []; // Images Array
    var time = 500; // Time Between Switch

    // Image List
    images[0] = "http://lorempixel.com/400/200/animals";
    images[1] = "http://lorempixel.com/400/200/sports";
    images[2] = "http://lorempixel.com/400/200/food";
    images[3] = "http://lorempixel.com/400/200/people";

    // Change Image
    function changeImg() {
        document.slide.src = images[i];

        // Check If Index Is Under Max
        if (i < images.length - 1) {
            // Add 1 to Index
            i++;
        } else {
            // Reset Back To O
            i = 0;
        }
        // Run function every x seconds
        setTimeout(changeImg(), time);
        return images;
    }

    return (
        <TransitionPageIn>
            {console.log(images[i])}
            <img src={images[i]} name="slide" width="400" height="200" />
        </TransitionPageIn>
    );
}

export default imageReel;
