const displayKey = document.querySelector('#insert');

// const body = document.querySelector('body');

// body.addEventListener('keydown', function (e) {
//   displayKey.innerHTML = `Keypressed by user is ${e.key}`;
//   console.log(`Keypressed by user is ${e.key}`);
// });
// | this is also right

window.addEventListener('keypress', (e) => {
  displayKey.innerHTML = `<div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`;
});
