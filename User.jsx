import './User.css'
export default function User({
    item
}){
    return (
        <li>
              <p>{item.name}</p>
              <p>{item.department}</p>
              <p>{item.role}</p>     
        </li>
    )
}