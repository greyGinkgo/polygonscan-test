fetch('https://api.polygonscan.com/api?module=stats&action=maticprice&apikey=VWC12MVFK1NPDNJKU4QEQ6QZ8DJ7H3W7PF')
  .then(res => res.json())
  .then(data => console.table(data))
