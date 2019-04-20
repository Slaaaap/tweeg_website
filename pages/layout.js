import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';

const { Header, Sider, Content } = Layout;

class Layoutt extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            backgroundColor: '#2b2c3b',
            boxShadow: "0 24px 30px -11px rgba(0, 0, 0, 0.5);",
            height: "-webkit-fill-available"
          }}
        >
          <div style={{
            display: "flex",
            justifyContent: 'center',
            padding: "10px 0"
          }}>
            <img src="/static/test.png"
              alt="LOGO"
              style={{
                width: "50%", 
                position: "absolute"
              }} />
          </div>
          <Menu theme="dark"
            style={{
              backgroundColor: "#2b2c3b",
              marginTop: "200px",
              display: "flex",
              flexDirection: "column"
            }}
            mode="inline"
            defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home"
                style={{
                  fontSize: '24px',
                  marginTop: this.state.collapsed ? "2px" : "7px",
                  marginBottom: "20em"
                }} />
              <span>Accueil</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="shopping-cart"
                style={{
                  fontSize: '24px',
                  marginTop: this.state.collapsed ? "2px" : "7px"
                }} />
              <span>Les Offres</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="edit"
                style={{
                  fontSize: '24px',
                  marginTop: this.state.collapsed ? "2px" : "7px"
                }} />
              <span>Réalisations</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="phone"
                style={{
                  fontSize: '24px',
                  marginTop: this.state.collapsed ? "2px" : "7px"
                }} />
              <span>Contact</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: '#393A4A' }}>
          <div style={{ display: 'flex' }}>
            <Header style={{
              background: '#2b2c3b',
              width: '100%',
              padding: '0 20px'
            }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'right' : 'left'}
                onClick={this.toggle}
                style={{ color: 'white' }}
              />
            </Header>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: "wrap"
          }}>
            <div style={{
              margin: '20px auto',
              padding: 36,
              background: '#2b2c3b',
              height: 500,
              borderRadius: 7,
              color: "grey",
              minWidth: 400,
              display: 'flex',
              boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
            }}
            >
              <h2 style={{ fontSize: "26px", color: "white" }}>Card</h2>
            </div>
            <div style={{
              margin: '20px auto',
              padding: 36,
              background: '#2b2c3b',
              height: 500,
              borderRadius: 7,
              color: "grey",
              width: 400,
              display: 'flex',
              boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
            }}
            >
              <h2 style={{ fontSize: "26px", color: "white" }}>Card</h2>
            </div>
            <div style={{
              margin: '20px auto',
              padding: 36,
              background: '#2b2c3b',
              height: 500,
              borderRadius: 7,
              color: "grey",
              width: 400,
              display: 'flex',
              boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
            }}
            >
              <h2 style={{ fontSize: "26px", color: "white" }}>Card</h2>
            </div>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default Layoutt;
