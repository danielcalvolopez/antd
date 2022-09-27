import "./App.css";
import { Button, Table } from "antd";

const App = () => {
  const data = [
    { key: "1", name: "Frank", age: 24, location: "London" },
    { key: "2", name: "Mike", age: 28, location: "Amsterdam" },
    { key: "3", name: "Martha", age: 31, location: "Oslo" },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} />
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
