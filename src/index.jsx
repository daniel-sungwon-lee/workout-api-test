import React from "react"
import ReactDOM from "react-dom"

const all = "https://wger.de/api/v2/exerciseinfo/?limit=227&language=2"
const chest = "https://wger.de/api/v2/exerciseinfo/?language=2&category=11&limit=29"
const back = "https://wger.de/api/v2/exerciseinfo/?language=2&category=12&limit=38"
const shoulders = "https://wger.de/api/v2/exerciseinfo/?language=2&category=13&limit=33"
const legs = "https://wger.de/api/v2/exerciseinfo/?language=2&category=9&limit=50"
const triceps = "https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=5&limit=21"
const biceps = "https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=1&limit=15"
const abs = "https://wger.de/api/v2/exerciseinfo/?language=2&category=10&limit=28"
//triceps missing pike pushups, biceps missing brachialis exercises (2 exercises)*, legs missing calves (not important)

class Exercises extends React.Component{
  constructor(props){
    super(props)
    this.state={exercises:[]}
  }

  componentDidMount(){
    const init = {
      "method": "get",
      "headers": {
        "Accept": "application/json",
        "Authorization": " Token 18800a66e3917105259880660857894f85fbb0f3"
      }
    }
    fetch(triceps, init)
      .then(res => res.json())
      .then(data => {
        let { results } = data
        this.setState({exercises:results})
      })
      .catch(err => console.error(err))

      //brachialis (add with biceps)
    /*setTimeout(()=>{
      fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=8&muscles=13", init)
      .then(res => res.json())
      .then(data => {
        let { results } = data

        const id = [275, 193]
        const brachialis = results.filter(exercise => {
          return id.includes(exercise.id)
        })

        this.setState({exercises:[...this.state.exercises, ...brachialis]})
      })
      .catch(err=>console.error(err))
    },2000)*/

    //calves (add with legs)
    /*setTimeout(() => {
      fetch("https://wger.de/api/v2/exerciseinfo/?language=2&category=14", init)
        .then(res => res.json())
        .then(data => {
          let { results } = data
          this.setState({exercises:[...this.state.exercises,...results]})
        })
    }, 2000)*/

    //pike pushups (add with triceps)
    setTimeout(()=>{
      fetch("https://wger.de/api/v2/exerciseinfo/361", init)
        .then(res=>res.json())
        .then(result=>{
          this.setState({exercises:[...this.state.exercises, result]})
        })
    },2000)
  }

  render(){
    return (
      <main>
        {
          this.state.exercises.map(exercise=>{
            return (
              <div className="exerciseDiv">
                <h2>{exercise.name}</h2>
                <h4>{exercise.id}</h4>
                <p>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
                <div>
                  {exercise.images!==undefined && exercise.images.length!==0
                    ? exercise.images.map(img => {
                    return (
                      <img src={img.image} width="200" alt="Exercise guide" />
                      )
                    })
                    : <i class="fas fa-images"></i>
                  }
                </div>
                <div>
                  <h3>Equipment used:</h3>
                  <div>
                    {
                      exercise.equipment.length === 0
                        ? "N/A"
                        :

                      exercise.equipment[0].name !== "none (bodyweight exercise)" && exercise.equipment.length !== 0
                        ? exercise.equipment.map(equip=>{
                        return (
                          <p>{equip.name}</p>
                        )
                      })
                        : "Your body duhh"
                    }
                  </div>
                </div>
                <div>
                  <h3>Exercise type:</h3>
                  <div>{exercise.category.name}</div>
                </div>
                <div>
                  <a href={`https://www.google.com/search?q=${exercise.name}`} target="_blank">{`Click here to search for ${exercise.name}`}</a>
                </div>
              </div>
            )
          })
        }
      </main>
    )
  }
}

ReactDOM.render(
  <Exercises />,document.querySelector("#root")
)
