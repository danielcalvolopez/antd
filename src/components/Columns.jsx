import { Input } from "antd";
import {
  nameAlphabeticSort,
  emailAlphabeticSort,
  cityAlphabeticSort,
} from "../utils/sorter";
import { SearchOutlined } from "@ant-design/icons";

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
    return (
      <Input
        placeholder={`Search ${dataIndex}`}
        onPressEnter={() => {
          confirm();
        }}
        onBlur={() => {
          confirm();
        }}
        onChange={(e) => {
          setSelectedKeys(e.target.value ? [e.target.value] : []);
        }}
        value={selectedKeys[0]}
      />
    );
  },
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
});

export const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: nameAlphabeticSort,
    ...getColumnSearchProps("name"),
    filterIcon: () => {
      return <SearchOutlined />;
    },
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: emailAlphabeticSort,
    ...getColumnSearchProps("email"),
    filterIcon: () => {
      return <SearchOutlined />;
    },
  },
  {
    title: "City",
    dataIndex: ["address", "city"],
    key: "city",
    sorter: cityAlphabeticSort,
    ...getColumnSearchProps("city"),
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) =>
      record.address.city
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
  },
];
