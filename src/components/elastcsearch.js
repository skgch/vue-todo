const es = require('elasticsearch')

const client = new es.Client({
  host: 'localhost:9200'
})

function search (index, type, searchText) {
  return client.search({
    index: index,
    type: type,
    body: {
      query: {
        match: {
          title: searchText
        }
      }
    }
  })
    .then(res => console.log(res.hits.hits))
    .catch(err => console.log(err.message))
}

export { search }
