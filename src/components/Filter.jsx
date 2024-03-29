const Filter = () => {
  return (
    <>
      <div className="filter">
        <label> Filter By: </label>
        <input type="text" className="filter-input" placeholder="Assignee" />
        <label> Date Created </label>
        <input type="date" className="filter-input" />
        <br />
        <label> Sort by: </label>
        <select name="priority" id="priority" className="filter-input">
          <option value="DEFAULT" disabled>
            Priority
          </option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
