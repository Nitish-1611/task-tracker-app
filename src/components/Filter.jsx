import { useContext, useEffect, useRef, useState } from "react";
import { TaskList } from "../store/task-store";

const Filter = () => {
  // map priority values
  const pValues = [
    { value: "P1", text: "P1" },
    { value: "P2", text: "P2" },
    { value: "P3", text: "P3" },
  ];

  const { filterByAssignee, filterByPriority } = useContext(TaskList);
  const filterAssignee = useRef();

  // sort by assignee name button handler
  const handleFilterAssignee = (e) => {
    const assigneeValue = filterAssignee.current.value;
    if (e.key === "Enter") {
      console.log(assigneeValue);
      filterByAssignee(assigneeValue);
    }
  };
 // sort by priority  handler
  const handleFilterPriority = (e) => {
    filterByPriority(e.target.value);
  };

  return (
    <>
      <div className="filter">
        <label> Filter By: </label>
        <input
          type="text"
          className="filter-input"
          placeholder="Assignee"
          ref={filterAssignee}
          onKeyDown={handleFilterAssignee}
        ></input>
        <label> Sort by: </label>
        <select
          name="priority"
          id="priority"
          className="filter-input"
          onChange={handleFilterPriority}
        >
          <option>Choose Priority</option>
          {pValues.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;


