// Function to calculate and update the total tally
function updateTotal() {
    const elements = document.querySelectorAll('.class1 a');
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
      document.body.appendChild(totalElement);
    }
  
    // Update the total element with the new sum
    totalElement.textContent = `Total: ${sum}`;
  }
  
  // Initial calculation and display
  updateTotal();
  
  // Use MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver(updateTotal);
  
  // Specify the target node and the type of mutations to observe
  const targetNode = document.querySelector('.class1');
  const config = { childList: true, subtree: true };
  
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);