function groceryTracker() {
 // Get values from user input
 let grocery1 = parseFloat(document.getElementById('grocery1').value);
 let grocery2 = parseFloat(document.getElementById('grocery2').value);
 let grocery3 = parseFloat(document.getElementById('grocery3').value);

 // Calculate total amount
 let totalAmount = grocery1 + grocery2 + grocery3;

 // Display result
 document.getElementById('total').innerText = `Total grocery expenditure: $${totalAmount.toFixed(2)}`;
}
