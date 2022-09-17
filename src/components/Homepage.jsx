import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Spin />;
  const { total, totalExchanges, totalMarketCap, total24hVolume } = globalStats;
  const stats = [
    { title: "Total Cryptocurrencies", value: total, suffix: "" },
    { title: "Total Exchanges", value: totalExchanges, suffix: "" },
    { title: "Total Market Cap", value: totalMarketCap, suffix: "$" },
    { title: "Total 24h Volume", value: total24hVolume, suffix: "$" },
  ];

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {stats.map(({ title, value, suffix }) => (
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
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
