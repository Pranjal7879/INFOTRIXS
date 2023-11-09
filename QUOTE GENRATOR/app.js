function getNewQuote() {
    fetch("https://zenquotes.io/api/quotes")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            quoteText.textContent = data.content;
            quoteAuthor.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching a new quote:", error);
        });
}
