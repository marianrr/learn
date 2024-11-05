fetch("https:/api/v1/json/3/searchteams.php?t=Arsenal")
.then(res => res.json())
.then(data => console.log(data))
