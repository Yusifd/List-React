import { useState,useEffect } from 'react'
import User from './User'
import './App.css'

function App() {
  let [usersArray, setUsersArray] = useState([])
  let [input, setInput] = useState('')
  let [select,setSelect]=useState('name')
  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((data) => {
        setUsersArray(data.filter((item) => item.name.startsWith(input)))
      })
  }, [input])

  return (
    <>
      <label> 
      <input onChange={(ev) => setInput(ev.target.value)} type="text" placeholder='SEARCH' />
      </label>
      <label>
        <select name='choose'>
          <option value='name'>Name</option>
          <option value='department'>Department</option>
        </select>
        </label> 
      <ul className='worker'>
      {usersArray.map((item) => <User key={item.id}
      item={item} />)}
      </ul>
    </>
  )
}

export default App
