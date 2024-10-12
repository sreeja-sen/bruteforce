document.getElementById("inputText").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let text = e.target.value;
        let target = text.split("");
        let empty = Array(target.length).fill(" ");
        let i = 0;

        document.getElementById("inputText").style.display = "none";
        document.getElementById("outputText").style.display = "block";

        function bruteForce() {
            if (i < target.length) {

                if (empty[i] !== target[i]) {
                    let random = String.fromCharCode(Math.floor(Math.random() * (122 - 33) + 33));
                    empty[i] = random;
                } 
                
                else {
                    i++;
                }
                
                document.getElementById("outputText").textContent = empty.join("  ");
                setTimeout(bruteForce, 75);
            }
        }

        bruteForce();
    }
});