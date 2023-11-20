// Function to calculate and update the total tally
function updateTotal() {
  const elements = document.querySelectorAll('.puzzle__session a');
  let sum = 0;

  elements.forEach(element => {
    const number = parseFloat(element.textContent);
    if (!isNaN(number)) {
      sum += number;
    }
  });

  // Find or create the total element
  let totalElement = document.getElementById('totalElement');
  if (!totalElement) {
    totalElement = document.createElement('a');
    totalElement.id = 'totalElement';
    //document.body.appendChild(totalElement);
    document.getElementsByClassName('puzzle__session')[0].prepend(totalElement);
  }

  // Change colour depending on the score
  if (sum >= 0)
    totalElement.className = 'result-true';
  else
    totalElement.className = 'result-false';

  // Update the total element with the new sum
  totalElement.textContent = `Total: ${sum}`;
}
  
// Initial calculation and display
updateTotal();

// Use MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(updateTotal);

// Specify the target node and the type of mutations to observe
const targetNode = document.querySelector('.puzzle__session');
const config = { childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);