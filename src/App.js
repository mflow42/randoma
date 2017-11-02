import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import Game from './Game';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">


        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Game</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Login</Menu.Item>
            </Menu>
          </Header>
          <Row type="flex" align="center">
            <Col xs={24} sm={24} md={18} lg={16} xl={14}>
              <Content style={{ padding: '0 5px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item></Breadcrumb.Item>
                  <Breadcrumb.Item></Breadcrumb.Item>
                  <Breadcrumb.Item></Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}><Game /></div>
              </Content>
              <Footer style={{ textAlign: 'center' }}></Footer>
            </Col>
          </Row>

        </Layout>
      </div>
    );
  }
}

export default App;