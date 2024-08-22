import { useState, useEffect } from "react";

export default function Home() {
  const [hobbies, setHobbies] = useState([])

  useEffect(() => {
    setHobbies(["Sepak Bola", "Sport Car", "Coding"])
  }, [])

  return (
    <>
      <h1>Home</h1>
      <p>This is home page. Below are my hobbies</p>
      <ul>
        {
          hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))
        }
      </ul>
    </>
  )
}