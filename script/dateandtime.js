function displayDateTime() {
    const date = new Date(); 
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true 
    };
    
    const formattedDateTime = date.toLocaleDateString('en-US', options);
    
    document.getElementById("dateTime").textContent = formattedDateTime;
}

setInterval(displayDateTime, 1000);
