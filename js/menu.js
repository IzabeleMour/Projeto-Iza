document.addEventListener('DOMContentLoaded', function() {
    var drop = document.querySelector(".drop");
    var dropdown = document.querySelector(".dropdown");
    var animationFrameId;
    var opacity = 0;
  
    var fadeInDropdown = function() {
      dropdown.style.display = "block";
  
      var fadeIn = function() {
        opacity += 0.02;
        dropdown.style.opacity = opacity;
  
        if (opacity < 1) {
          animationFrameId = requestAnimationFrame(fadeIn);
        }
      };
  
      fadeIn();
    };
  
    var fadeOutDropdown = function() {
      var fadeOut = function() {
        opacity -= 0.02;
        dropdown.style.opacity = opacity;
  
        if (opacity > 0) {
          animationFrameId = requestAnimationFrame(fadeOut);
        } else {
          dropdown.style.display = "none";
        }
      };
  
      fadeOut();
    };
  
    drop.addEventListener("mouseover", fadeInDropdown);
    drop.addEventListener("mouseleave", fadeOutDropdown);
  });