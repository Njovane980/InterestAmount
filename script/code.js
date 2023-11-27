function calculateInterest() {
    var amount = document.getElementById("amount").value;
    var interestRate = document.getElementById("interest").value;

    // Validate input
    if (amount <= 0 || interestRate < 0) {
        alert("Please enter valid values for amount and interest rate.");
        return;
    }

    // Calculate interest
    var interestAmount = (amount * interestRate) / 100;

    // Display the result
    document.getElementById("result").innerText = "Interest Amount: " + interestAmount.toFixed(2);
}