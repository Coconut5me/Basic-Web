function calculateTotal() 
    {
      qty1 = parseFloat(document.getElementById("qty1").value);
      qty2 = parseFloat(document.getElementById("qty2").value);
      qty3 = parseFloat(document.getElementById("qty3").value);

      if (isNaN(qty1) || isNaN(qty2) || isNaN(qty3)) {
        alert("Quantity must be a valid number!");
        return;
      }


      if (qty1 < 0 || qty2 < 0 || qty3 < 0) 
      {
        alert("Can't caculate!");
        return;
      }

      price1 = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
      price2 = parseFloat(document.querySelectorAll('.price')[1].textContent.replace('$', ''));
      price3 = parseFloat(document.querySelectorAll('.price')[2].textContent.replace('$', ''));

      total1 = qty1 * price1;
      total2 = qty2 * price2;
      total3 = qty3 * price3;

      document.getElementById("total1").value = total1.toFixed(2);
      document.getElementById("total2").value = total2.toFixed(2);
      document.getElementById("total3").value = total3.toFixed(2);

      total = total1 + total2 + total3;
      document.getElementById("total").value = total.toFixed(2);
    }