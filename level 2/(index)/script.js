<!DOCTYPE html>
<html>
<head>
    <title>FHSH2</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body oncontextmenu="return false;">
    <div class="header">
        <h1>FHSH2</h1>
    </div>
    <img src="img.jpg" alt="Level 2 Image">
    <div class="message-box">
        <p>你可以在這裡找到下一關的Flag，但是我們對它做過了一些處理...</p>
    </div>

    <script>
        window.onload = function() {
            var loginCookie = getCookie("login");
            if (loginCookie === "1") {
                var flagBox = document.createElement("div");
                flagBox.innerHTML = "<p>Flag: Your_Flag_Here</p>";
                document.body.appendChild(flagBox);
            }
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
    </script>
</body>
</html>
