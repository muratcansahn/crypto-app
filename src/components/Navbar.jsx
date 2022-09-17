import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  const menuItems = [
    {
      icon: <HomeOutlined />,
      text: "Home",
      path: "/",
    },
    {
      icon: <FundOutlined />,
      text: "Cryptocurrencies",
      path: "/cryptocurrencies",
    },
    {
      icon: <MoneyCollectOutlined />,
      text: "Exchanges",
      path: "/exchanges",
    },
    {
      icon: <BulbOutlined />,
      text: "News",
      path: "/news",
    },
  ];
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container">
          <MenuOutlined />
        </Button>
      </div>
      <Menu theme="dark">
        {menuItems.map((item) => (
          <Menu.Item icon={item.icon} key={item.text}>
            <Link to={item.path}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
