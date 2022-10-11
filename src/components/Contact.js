import React from "react";
import { Row, Col, Card, Input, Space, Button, Tag, Divider } from "antd";
import {
  SendOutlined,
  PhoneOutlined,
  MessageOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  HomeOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div>
      <Col span={24} className="hero">
        <h1 className="title">Contact</h1>
        <h3 data-aos="fade-down" className="p-3">
          If you have any questions, please feel free to contact Us. We are
          always open to discussing new opportunities.
        </h3>
        <Divider />
      </Col>
      <Card>
        <Row gutter={[16, 16]} justify="center">
          <Col data-aos="flip-right" className="gutter-row" span={12}>
            <h1 style={{ padding: "30px 0px" }}>SEND US A MESSAGE</h1>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Space direction="vertical" size={"large"}>
                  <div>
                    <label>Your Name</label>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <label>Your Phone</label>
                    <Input placeholder="Your phone" />
                  </div>
                  <div>
                    <label>Your Email</label>
                    <Input placeholder="Your email" />
                  </div>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical" size={"large"}>
                  <div>
                    <label>Your Message</label>
                    <TextArea
                      placeholder="describe your feedback or issue here"
                      allowClear
                    />
                  </div>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<SendOutlined />}
                    // size={size}
                  />
                </Space>
              </Col>
            </Row>
          </Col>
          <Col
            data-aos="flip-left"
            className="gutter-row"
            style={{ backgroundColor: "#dedede", padding: "20px" }}
            span={12}
          >
            <h1 style={{ padding: "30px 0px" }}>CONTACT INFORMATION</h1>
            <Space direction="vertical" size={"large"}>
              <Col>
                <Space>
                  <PushpinOutlined />
                  <span>Wa, Upper West Region, Ghana</span>
                </Space>
              </Col>
              <Col>
                <Space>
                  <PhoneOutlined />
                  <span>+233 020 776 6464</span>
                </Space>
              </Col>
              <Col>
                <Space>
                  <MessageOutlined />
                  <span>info@rentmanagement.com</span>
                </Space>
              </Col>
              <Col>
                <Space>
                  <HomeOutlined />
                  <span>XW-0022-5346</span>
                </Space>
              </Col>
            </Space>
            <div style={{ marginTop: "20px", padding: "30px 0px" }}>
              <Tag icon={<TwitterOutlined />} color="#55acee">
                Twitter
              </Tag>
              <Tag icon={<YoutubeOutlined />} color="#cd201f">
                Youtube
              </Tag>
              <Tag icon={<FacebookOutlined />} color="#3b5999">
                Facebook
              </Tag>
              <Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag>
            </div>
          </Col>
        </Row>
      </Card>
      <Col span={24} className="hero">
        <p data-aos="fade-up" className="p-3">
        an app where you can get all types of your preferd houses with it location, prices and landlord contact. We know
         
        </p>
      </Col>
    </div>
  );
};

export default Contact;