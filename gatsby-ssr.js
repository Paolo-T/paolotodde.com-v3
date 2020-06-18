// exports.wrapRooElement = ({ element }) => {
//     return {element};
// };

const React = require("react");

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/TextPlugin.min.js"
            integrity="sha256-iB3kRFdQB/dxNucv7xSsT4IDh6BndoFfxRBtbXgO5fk="
            crossorigin="anonymous"
        ></script>,
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.min.js"
            integrity="sha256-V0EyXecXmQqSk1QW7iej2g+pzqX02oz78cnceES2ZCs="
            crossorigin="anonymous"
        ></script>,
    ]);
};
