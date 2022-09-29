import "./App.css";
import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import { Columns } from "./components/Columns";
import UserContext from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState(undefined);
  const [row, setRow] = useState(undefined);

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
        footer={(record) => setRow(record[0])}
      />

      <Card>
        <div className="footer">
          <p>{row?.name}</p>
          <p>{row?.email}</p>
          <p>{row?.address.city}</p>
        </div>
      </Card>
    </UserContext.Provider>
  );
};

export default App;
