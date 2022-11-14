import ToDoCard from "../Components/ToDoCard";
import { useState } from "react";
const HomePage = (props) => {
  const { toDoList, urlEndpoint, setShouldRefetch } = props;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("creationDate");
  const [order, setOrder] = useState("asc");
  return (
    <div>
      <label>Limit</label>
      <input
        type='number'
        value={limit}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      ></input>
      <label>Number</label>
      <input
        type='number'
        value={page}
        onChange={(e) => {
          setPage(e.target.value);
        }}
      ></input>
      <br />
      <label>Sort By</label>
      <select
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value={""}></option>
        <option value='id'>id</option>
        <option value='title'>title</option>
        <option value='description'>description</option>
        <option value='isComplete'>isComplete</option>
        <option value='priority'>priority</option>
        <option value='creationDate'>creationDate</option>
        <option value='lastModified'>lastModified</option>
        <option value='completedDate'>completedDate</option>
      </select>
      <label>Order</label>
      <select
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option></option>
        <option value='asc'>asc</option>
        <option value='desc'>desc</option>
      </select>
      <h1>Fullstack ToDo Application</h1>
      {toDoList.map((todo, index) => {
        return (
          <ToDoCard
            todo={todo}
            key={index}
            urlEndpoint={urlEndpoint}
            setShouldRefetch={setShouldRefetch}
          />
        );
      })}
    </div>
  );
};

export default HomePage;