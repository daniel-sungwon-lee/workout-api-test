import React from "react"
import ReactDOM from "react-dom"

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
    fetch("https://wger.de/api/v2/exerciseinfo/?limit=227&language=2", init)
      .then(res => res.json())
      .then(data => {
        let { results } = data
        this.setState({exercises:results})
      })
      .catch(err => console.error(err))
  }

  render(){
    return (
      <main>
        {
          this.state.exercises.map(exercise=>{
            return (
              <div className="exerciseDiv">
                <h2>{exercise.name}</h2>
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
                      exercise.equipment.length!==0 && exercise.equipment[0].name!=="none (bodyweight exercise)"
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
