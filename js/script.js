document.addEventListener('DOMContentLoaded', function() {

    function move() {
        var elem = document.getElementById("myBar"); 
        var width = parseInt(elem.innerHTML);
        var aim = width + 10;
        var id = setInterval(frame, 10);
        
        function frame() {
            if (width >= aim) {
                clearInterval(id);
            } else if(width >= 100) {
                width=0; 
                aim = 10;
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1 + '%';
            } else {
                width++;
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
    
})