import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = data?.data?.stats;
  const globalStats = [
    { title: "Total Cryptocurrencies", value: total, suffix: "" },
    { title: "Total Exchanges", value: totalExchanges, suffix: "" },
    { title: "Total Market Cap", value: totalMarketCap, suffix: "$" },
    { title: "Total 24h Volume", value: total24hVolume, suffix: "$" },
    { title: "Total Markets", value: totalMarkets, suffix: "" },
  ];

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {globalStats.map(({ title, value, suffix }) => (
          <Col span={12}>
            <Statistic title={title} value={millify(value)} suffix={suffix} />
          </Col>
        ))}
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <div className="table-container"></div>
    </>
  );
};

export default Homepage;
