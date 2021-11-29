import React, { useState } from 'react'

export interface MyComponentProps {
  myStuff: string
}

const MyComponent: React.FunctionComponent<MyComponentProps> = ({
  myStuff,
}) => {
    const [apiResult, setApiResult] = useState([])
        
    const apiHandler = async () => {
        const result = await fetch('/express-backend')
        const text = await result.json()
        console.log(text)
        setApiResult([...apiResult, text])
    }

  return (
    <div>
      <h1>This is a test component</h1>
      <div>{myStuff}</div>
      <button onClick={apiHandler}>Click me!</button>
    </div>
  )
}

export default MyComponent
