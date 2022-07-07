import { useState, useEffect } from "react";

function Todolist() {
  const [work, setwork] = useState("");
  const [listWorks, setListWorks] = useState(() => {
    const storageWork = JSON.parse(localStorage.getItem("works"));
    return storageWork;
  });
  // console.log(listWorks);
  const handleAddWork = () => {
    if (!work) {
      alert("bạn chưa nhập gì !!");
      return;
    }
    setListWorks((prev) => {
      const newWorks = [...prev, work];
      // save local
      const jsonWorks = JSON.stringify(newWorks);
      localStorage.setItem("works", jsonWorks);
      return newWorks;
    });
    setwork("");
    const updateWork = JSON.stringify(listWorks);
    localStorage.setItem("works", updateWork);
  };
  /////////////////////////
  const handleDelete = (todo) => {
    let currentWork = listWorks;
    currentWork = currentWork.filter((item) => item !== todo);
    setListWorks(currentWork);

    localStorage.setItem("works", JSON.stringify(listWorks));
  };
  useEffect(() => {
    const todo = localStorage.getItem("works");
    if (todo !== null) setListWorks(JSON.parse(todo));
  }, []);
  //////////////////////////////////////////////////////////
  // useEffect(()=>{
  //   const updateWork = JSON.stringify(listWorks);
  //   localStorage.setItem('works',updateWork)
  // }, [listWorks])

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <p>To Do lisst</p>
      <input
        className="input"
        value={work}
        onChange={(event) => setwork(event.target.value)}
      />
      <button className="btn" onClick={handleAddWork}>
        ADD
      </button>

      <ul>
        {listWorks.map((item, index) => (
          <li key={index}>
            {" "}
            {index + 1} - {item}{" "}
            <button className="btn" onClick={() => handleDelete(item)}>
              DELETE
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
