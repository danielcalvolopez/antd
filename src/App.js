import "./App.css";
import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import { Columns } from "./components/Columns";
import UserContext from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState(undefined);

  const rowEvents = {
    onclick: (e, row) => {
      console.log(row);
    },
  };

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
        rowEvent={rowEvents}
        onRow={(r) => ({
          onClick: () => console.log("clickee!"),
        })}
        row
      />
      <Card title="First row content"></Card>
    </UserContext.Provider>
  );
};

export default App;
