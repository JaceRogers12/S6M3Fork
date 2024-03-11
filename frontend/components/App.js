import React, {useState, useEffect} from 'react'
import axios from "axios"

  const sampleObj = {
    title: "Orange Nebula",
    hdurl: "#",
    date: "today",
    explanation: "This is really just a sample."
  }

function App() {
  const [nasaObj, setNasaObj] = useState("")
   useEffect(() => {
     axios.get("https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
       .catch(res => console.log(res.error))
       .then(res => {
        setNasaObj(res.data)
        console.log(res.data)
      })
}, [])
  return (
    <>
      <Image title={nasaObj.title} url={nasaObj.url} date={nasaObj.date} info={nasaObj.explanation}/>
    </>
  )
}

export default App

function Image(props) {
  console.log(props)
  return (
    <>
      <div>
        <h3>Photo: {props.title}</h3>
        <img src={props.url} alt="Nasa Photo" />
        <p>Date: {props.date}</p>
        <p>Information: {props.info}</p>
      </div>
    </>
  )
}

/*
{
  "copyright": "\nPetr Horálek /\nInstitute of Physics in Opava\n",
  "date": "2024-03-11",
  "explanation": "What glows in the night? This night featured a combination of usual and unusual glows. Perhaps the most usual glow was from the Moon, a potentially familiar object. The full Moon's nearly vertical descent results from the observer being near Earth's equator. As the Moon sets, air and aerosols in Earth's atmosphere preferentially scatter out blue light, making the Sun-reflecting satellite appear reddish when near the horizon.                                                                        Perhaps the most unusual glow was from the bioluminescent plankton, likely less familiar objects. These microscopic creatures glow blue, it is thought, primarily to surprise and deter predators. In this case, the glow was caused primarily by plankton-containing waves crashing onto the beach. The image was taken on Soneva Fushi Island, Maldives just over one year ago.   Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)",
  "hdurl": "https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "A Full Plankton Moon",
  "url": "https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg"
}*/