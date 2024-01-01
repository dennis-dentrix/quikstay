import { useState } from "react";
import { Drawer } from "antd";
import { List } from "react-bootstrap-icons";
import Header from "./Header";

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="primary" onClick={showDrawer}>
        <List style={{ width: 25, height: 25 }} />
      </button>
      <Drawer
        title="Quikstay "
        placement="right"
        onClose={onClose}
        open={open}
        width="75%"
      >
        <Header />
      </Drawer>
    </div>
  );
};
export default TemporaryDrawer;
