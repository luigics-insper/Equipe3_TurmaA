var currentLength;
        function increaseLength(){
            currentLength = document.getElementById("progress").value;
            if (currentLength < 90) {
                currentLength += 10;
                document.getElementById("progress").value = currentLength;
            }

            else if (currentLength >= 90 && currentLength < 100) {
                currentLength = 100;
                document.getElementById("progress").value = currentLength;

            }

            else{
                alert("You reached the maximum length of the progressbar!");
            }
        }

        function decreaseLength(){
            currentLength = document.getElementById("progress").value;
            if (currentLength > 10) {
                currentLength -= 10;
                document.getElementById("progress").value = currentLength;
            }

            else if (currentLength > 0 && currentLength <= 10) {
                currentLength = 0;
                document.getElementById("progress").value = currentLength;
            }

            else{
                alert("You reached the minimum length of the progressbar!");
            }
        }

document.addEventListener('DOMContentLoaded', function() {

})