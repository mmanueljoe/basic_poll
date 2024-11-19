const options = [
    {
        id: 'option1',
        text: 'JavaScript',
        votes: 0
    },
    {
        id:'option2',
        text: "Python",
        votes: 0
    }
];


// map, filter, reduce, find
function getTotalVotes(){
    return options.reduce((total,option) => total + option.votes, 0);
}



function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = '';
    options.forEach(option => {
        const totalVotes = getTotalVotes();
        const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
        const barWidth = percentage > 0 ? `${percentage}%` : `0%`;

        const optionResult = document.createElement('div');
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class='option-text'>${option.text}</span>
            <div class='bar-container'>
                <div class='bar' style= "width: ${barWidth}"></div>
            </div>
            <span class='percentage'>${percentage}%</span>
        `;
        result.appendChild(optionResult);
    });
}


function submitVote(){
    const selectedOption = document.querySelector("input[name='poll']:checked");

    if(!selectedOption){
        alert("Please select an option!");
        return;
    } 

    const optionId = selectedOption.id;
    const selectedOptionObj = options.find((option) => option.id === optionId);

    if(selectedOptionObj){
        selectedOptionObj.votes++;
        displayResult();
    }
}

displayResult();