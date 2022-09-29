import "./App.css";
import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import { Columns } from "./components/Columns";
import UserContext from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState(undefined);
  const [row, setRow] = useState(undefined);

  console.log(row);

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
        onRow={(record) => ({
          onClick: (event) => {
            setRow(record);
          },
        })}
      />
      <Card title="First row content"></Card>
    </UserContext.Provider>
  );
};

export default App;
