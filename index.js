import { imageService } from "./imageService";
import "./style.css";

const blooperSwiming = (function() {
  const service = imageService();
  const coralContainerHeight = 220;
  const coralWidth = 154;

  const createCoralElements = () => {
    const numberOfContainers = Math.ceil(
      window.innerHeight / coralContainerHeight
    );
    const numberOfCoralsPerContainer = Math.ceil(
      window.innerWidth / coralWidth
    );
    const coralMainContainer = document.getElementById("coralMainContainer");
    for (let i = 1; i <= numberOfContainers; i++) {
      const elem = document.createElement("div");
      elem.setAttribute("class", "coralContainer");
      coralMainContainer.appendChild(elem);
    }
    const coralContainerList = document.getElementsByClassName(
      "coralContainer"
    );
    for (var container of coralContainerList) {
      for (let i = 1; i <= numberOfCoralsPerContainer; i++) {
        const elem = document.createElement("img");
        if (i % 2 == 0) {
          elem.setAttribute("class", "coral upperCoral");
        } else {
          elem.setAttribute("class", "coral bottomCoral");
        }
        container.appendChild(elem);
      }
    }
  };

  const loadImages = () => {
    service.getSvgUrl().then(imageList => {
      document.getElementById("blooper").src = imageList["images"]["4:2"];
      const coralElements = document.getElementsByClassName("coral");
      for (var element of coralElements) {
        element.src = imageList["images"]["15:2"];
      }
    });
  };

  const init = () => {
    createCoralElements();
    loadImages();
  };

  return { init };
})();

blooperSwiming.init();
