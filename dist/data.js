//actually used for project; 7 categories/types of exercises
const init = {
  "method": "get",
  "headers": {
    "Accept": "application/json",
    "Authorization": " Token 18800a66e3917105259880660857894f85fbb0f3"
  }
}

function back(){
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=12&limit=38", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("back:", results)
    })
    .catch(err => console.error(err))
}

function abs() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=10&limit=28", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("abs:", results)
    })
    .catch(err => console.error(err))
}

function chest() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=11&limit=29", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("chest:", results)
    })
    .catch(err => console.error(err))
}

function shoulders() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=13&limit=33", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("shoulders:", results)
    })
    .catch(err => console.error(err))
}

function allLegs(){
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=9&limit=50", init)
    .then(res=>res.json())
    .then(data=>{
      let {results}=data
      console.log("legs:",results)
    })

  setTimeout(()=>{
    fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=14", init)
      .then(res=>res.json())
      .then(data=>{
        let {results}= data
        console.log("calves:", results)
      })
  },2000)
}

function triceps(){
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=5&limit=100" ,init)
    .then(res=>res.json())
    .then(data=>{
      let {results}=data
      console.log(results)
    })
}

function biceps() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=1&limit=100", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log(results)
    })
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=13&limit=100", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data

      const id=[275,193]
      const brachialis = results.filter(exercise=>{
        return id.includes(exercise.id)
      })

      console.log(brachialis)
    })
}



//quotes
function quote() {
  fetch("https://bodybuilding-quotes.p.rapidapi.com/random-quote", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "941ebf24d9msh84ff2078f0eff4cp16a16ejsn23ddb560a858",
      "x-rapidapi-host": "bodybuilding-quotes.p.rapidapi.com"
    }
  })
    .then(res => res.json())
    .then(result => console.log(`${result.quote} -${result.author}`))
    .catch(err => console.err(err));
}

function quoteBackup() {
  fetch("https://favqs.com/api/qotd")
    .then(res => res.json())
    .then(data => {
      let { quote } = data
      let { author, body } = quote
      console.log(`${body} -${author}`)
    })
    .catch(err => console.error(err))
}





//not used; for reference
function allExercises() {
  fetch("https://wger.de/api/v2/exercise/?limit=227&language=2", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("exercises:", results)
    })
    .catch(err => console.error(err))
}

function allExerciseInfos() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&limit=227", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("exercise infos:", results)
    })
    .catch(err => console.error(err))
}

function legs() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=9&limit=50", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("legs:", results)
    })
    .catch(err => console.error(err))
}

function arms() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&limit=43", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("arms:", results)
    })
    .catch(err => console.error(err))
}

function calves() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=14&limit=6", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data
      console.log("calves:", results)
    })
    .catch(err => console.error(err))
}


//testing purposes
function singleExercise(){
  fetch("https://wger.de/api/v2/exerciseinfo/354/?language=2&category=11&limit=222", init)
    .then(res => res.json())
    .then(data => {
      console.log("chest (exerciseinfo):", data)
    })
    .catch(err => console.error(err))

  fetch("https://wger.de/api/v2/exercise/354/?language=2&category=11&limit=222", init)
    .then(res => res.json())
    .then(data => {
      console.log("chest (exercise):", data)
    })
    .catch(err => console.error(err))
}

/*289(null),347(null),275(brachialis),317(null),291(both),256(null),
361(triceps secondary),193(brachialis),382(null)*/

const diff = [289,347,275,317,291,256,361,193,382]
function armsDiff() {
  fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&limit=43", init)
    .then(res => res.json())
    .then(data => {
      let { results } = data

      const outsiders=results.map(exercise=>{
        return diff.includes(exercise.id)
                ? exercise
                : exercise.name
      })
      console.log("outsiders:", outsiders)
    })
    .catch(err => console.error(err))
}
