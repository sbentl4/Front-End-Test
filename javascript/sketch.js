window.onload = function()
{
  console.log("test");
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  console.log((month + 1) + '/' + day + '/' + year);
  document.getElementById('date').innerHTML = (month + 1) + '/' + day + '/' + year;
}
