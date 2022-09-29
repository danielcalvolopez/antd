import "./App.css";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { Columns } from "./components/Columns";
import UserContext from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      <Table
        rowKey="id"
        dataSource={users}
        columns={Columns}
        footer={(record) => (
          <div className="footer">
            <p>{record[0]?.name}</p>
            <p>{record[0]?.email}</p>
            <p>{record[0]?.address.city}</p>
          </div>
        )}
      />
    </UserContext.Provider>
  );
};

export default App;
