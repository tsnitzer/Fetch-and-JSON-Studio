window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container"); //creating this accesses the "container" element of the HTML file and allows us to dynamically update the information parsed form the json data
            for (astronaut of json) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                        </div>
                        <img src = "${astronaut.picture}" class="avatar">
                </div>
              `
            }
        });
    });
});