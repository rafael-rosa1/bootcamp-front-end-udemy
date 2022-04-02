const form = document.querySelector('#searchForm');
form.elements.query.focus();
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = {params: { q: searchTerm } }
  const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(response);
  makeImages(response.data);
  form.elements.query.value = '';
  form.elements.query.focus();
});

const makeImages = (shows) => {
  for(let result of shows) {
    if(result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;;
      document.body.append(img);
    }
    
  }
}