// Function to dynamically display vote count for each party
function displayVoteCount() {
    var voteList = document.getElementById("voteList");
    voteList.innerHTML = ""; // Clear previous content
    
    // Iterate through localStorage and display vote count for each party
    for (var i = 0; i < localStorage.length; i++) {
        var partyName = localStorage.key(i);
        var partyVotes = localStorage.getItem(partyName);
        var listItem = document.createElement("li");
        listItem.textContent = partyName + " : " + partyVotes + " votes";
        voteList.appendChild(listItem); 
    }
}

// Call the function when the page loads
displayVoteCount();