import { Input } from "antd";
import {
  nameAlphabeticSort,
  emailAlphabeticSort,
  cityAlphabeticSort,
} from "../utils/sorter";
import { SearchOutlined } from "@ant-design/icons";

export const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: nameAlphabeticSort,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <Input
          placeholder="Search..."
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
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: emailAlphabeticSort,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <Input
          placeholder="Search..."
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
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) =>
      record.email.toString().toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "City",
    dataIndex: ["address", "city"],
    key: "city",
    sorter: cityAlphabeticSort,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <Input
          placeholder="Search..."
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
