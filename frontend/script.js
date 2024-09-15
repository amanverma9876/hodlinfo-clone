window.onload = async () => {
  try {
    const response = await fetch('/api/tickers'); 
    const tickers = await response.json();
    
    const tableBody = document.getElementById('ticker-table-body'); 
    
    tickers.forEach((ticker, index) => {
     
      const difference = ((ticker.sell - ticker.buy) / ticker.buy) * 100;
      const savings = ticker.last - ticker.buy;

      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${ticker.name}</td>
        <td>&#8377; ${ticker.last}</td>
        <td>&#8377; ${ticker.buy} / &#8377; ${ticker.sell}</td>
        <td>${difference.toFixed(2)}%</td>
        <td>&#8377; ${savings.toFixed(2)}</td>
      `;
      tableBody.appendChild(row); 
    });
  } catch (error) {
    console.error('Error fetching tickers:', error); 
  }
};
