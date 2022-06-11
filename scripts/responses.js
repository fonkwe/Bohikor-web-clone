function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";

    } else if (input == "What is the Bohikor score?") {
        return "The Bohikor score is a measure of how well you manage your money. It takes into account the percentage you spend on each category of expenses, how frequently you save, how constant you are in meeting your savings goals, and what you put aside for your retirements and how well you invest your money.";

    } else if (input == "How do I change the language of the app?") {
        return "The functionality to change language is not yet available in the app but will be in subsequent updates.";

    } else if (input == "How can i improve my score?") {
        return "Plan your money before you spend it. Set your budget limits and make sure you beat them. Save at least 30% of your income monthly.Record your daily expenses regularly as you spend.";

    } else if (input == "Can I use the app offline?") {
        return "Yes you can, most of the app functionalities work perfectly offline.";

    } else if (input == "Why can I not stick to my budget?") {
        return "There are many possible reasons as to why and a wide variety of approaches to make and stick to realistic budgets. Follow the articles on our fireside blog to get more on this.";

    } else if (input == "Do I have to input every franc I spend?") {
        return "Yes you have to, it is very important to input every franc you spend so that the reports the app gives you about your financial health will be accurate and truthful.";

    }else if (input == "Can I set the budget for more than a month?") {
            return "For now you cannot set budgets for more than a month. Budgets run monthly and they expire at the end of the month.";
            
    } else {
        return "Try asking something else!";
    }
}