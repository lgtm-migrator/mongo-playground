import React from "react";
import { Layout, Menu, Input, Tooltip, Icon } from "antd";
import "./Layout.css";
const { Header, Content } = Layout;

function MainLayout({
  children,
  mongo_uri,
  changeMongoUri,
  runCode,
  openFavoritesDrawer,
  openSnippetsDrawer,
  toggleQueryBuilderModal,
  codeBeautify,
  exportFile,
  running
}) {
  return (
    <Layout className="Layout">
      <Header
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item key="2" style={{ width: "500px" }}>
              <Input value={mongo_uri} onChange={changeMongoUri} />
            </Menu.Item>
          </Menu>
        </div>

        <div>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "75px" }}>
            <Menu.Item key="m0">
              <Tooltip title="Export">
                <Icon
                  type="save"
                  theme="filled"
                  style={{ fontSize: "25px" }}
                  onClick={exportFile}
                />
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="m1">
              <Tooltip title="Query Builder">
                <Icon
                  type="edit"
                  theme="filled"
                  style={{ fontSize: "25px" }}
                  onClick={toggleQueryBuilderModal}
                />
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="m2">
              <Tooltip title="Beautify">
                <Icon
                  type="highlight"
                  theme="filled"
                  style={{ fontSize: "25px" }}
                  onClick={codeBeautify}
                />
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="m3">
              <Tooltip title="Connections">
                <Icon
                  type="plus-circle"
                  theme="filled"
                  style={{ fontSize: "25px" }}
                  onClick={openFavoritesDrawer}
                />
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="m4">
              <Tooltip title="Snippets">
                <Icon
                  type="snippets"
                  theme="filled"
                  style={{ fontSize: "25px" }}
                  onClick={openSnippetsDrawer}
                />
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="m5">
              <Tooltip title="Run">
                <Icon
                  type={running ? "loading" : "caret-right"}
                  theme={running ? "" : "filled"}
                  style={{ fontSize: "25px" }}
                  onClick={runCode}
                />
              </Tooltip>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
}

export default MainLayout;
