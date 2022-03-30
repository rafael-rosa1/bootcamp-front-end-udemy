

const request = new XMLHttpRequest();

request.onload = function() {
  console.log('IT LOADED!');
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
}

request.onerror = function() {
  console.log('ERROR!!!!!');
  console.log(this);
}
request.open('GET', 'https://swapi.dev/api/people/1/')
request.send();