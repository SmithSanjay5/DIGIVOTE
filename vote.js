document.getElementById('voteButton').addEventListener('click', function() {
    var selectedParty = document.querySelector('input[name="party"]:checked');
    if (selectedParty) {
        // Get the party name
        var partyName = selectedParty.value;
        
        // Increment the vote count for the selected party
        var partyVotes = localStorage.getItem(partyName);
        if (partyVotes) {
            partyVotes = parseInt(partyVotes) + 1;
        } else {
            partyVotes = 1;
        }
        localStorage.setItem(partyName, partyVotes);
        
        // Display a thank you message
        alert("Thank you for voting for " + partyName + "!");
        
        // Redirect to home page
        window.location.href = "index.html";
    } else {
        alert("Please select a party to vote for.");
    }
});
