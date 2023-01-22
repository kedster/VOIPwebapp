

function calculate() {
  // Get form inputs
  var users = parseInt(document.getElementById("users").value);
  var minutes = parseInt(document.getElementById("minutes").value);
  var activeCalls = parseInt(document.getElementById("activeCalls").value);
  var concurrentCalls = parseInt(document.getElementById("concurrentCalls").value);
  var features = document.getElementById("features").value;

  // Validate inputs
if (!Number.isInteger(users) || users < 1) {
    alert("Please enter a valid number of users.");
    return;
  }
  if (!Number.isInteger(minutes) || minutes < 1) {
    alert("Please enter a valid number of minutes.");
    return;
  }
  if (!Number.isInteger(activeCalls) || activeCalls < 1 || activeCalls > 1000) {
    alert("Please enter a valid number of active calls between 1 and 1000.");
    return;
  }
  if (!Number.isInteger(concurrentCalls) || concurrentCalls < 1 || concurrentCalls > 100) {
    alert("Please enter a valid number of concurrent calls between 1 and 100.");
    return;
  }
  
try {
  // Base cost calculation
  var baseCost = 21.99; 
  var increment = 10;
  var additionalUsers = users - increment;
  if (additionalUsers > 0) {
      var additionalCost =  165;
      baseCost += additionalCost;
  }
var features = parseFloat(document.getElementById("features").value);
  // Perform remaining calculations
  var minutesCost = minutes * 0.0125;
  var activeCallsCost = activeCalls * 1;
  var concurrentCallsCost = concurrentCalls * 1;
  var totalCost = baseCost + minutesCost + activeCallsCost + concurrentCallsCost + features;

  // Display the result
  document.getElementById("total").value = "$" + totalCost.toFixed(2);

  } catch (error) {
      console.log("An error has occurred: " + error);
  }
}
