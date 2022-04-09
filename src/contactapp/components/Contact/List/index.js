import {useState} from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
      <input placeholder="Filter contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      <ul>
          {
            contacts.map((item,index) => (
              <li key={index}>{item.fullname}</li>
            ))
          }
      </ul>
    </div>
  )
}

export default List