document.addEventListener("DOMContentLoaded", () => {
     const YESTERDAY = 250; // change this to your actual yesterday total

      function calcTotal() {
        const amounts = document.querySelectorAll('.cost-input.amount');
        let total = 0;
        amounts.forEach(input => {
          total += parseFloat(input.value) || 0;
        });

        document.getElementById('total-display').textContent =
          '₱ ' + total.toFixed(2);

        const vsEl = document.getElementById('vs-display');
        if (total === 0) {
          vsEl.textContent = '—';
          vsEl.className = 'total-card-value';
          return;
        }

        const diff = total - YESTERDAY;
        if (diff > 0) {
          vsEl.textContent = '+₱' + diff.toFixed(0) + ' more';
          vsEl.className = 'total-card-value negative';
        } else if (diff < 0) {
          vsEl.textContent = '-₱' + Math.abs(diff).toFixed(0) + ' less';
          vsEl.className = 'total-card-value positive';
        } else {
          vsEl.textContent = 'same as yesterday';
          vsEl.className = 'total-card-value';
        }
      }
});