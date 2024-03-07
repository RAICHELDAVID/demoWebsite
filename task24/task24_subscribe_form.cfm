<!DOCTYPE html>
<html>
<head>
    <title>Subscribe Form</title>
    <script src="script/jquery.js"></script>
    <script src="script/subscribe_form.js"></script>
</head>
<body>
    <form id="subscribeForm" method="post">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="button" id="checkEmail">Check</button><br><br>
        <span id="emailStatus"></span><br><br>
        <button type="submit" id="subscribeButton" >Subscribe</button>
    </form>
</body>
</html>

