import React from "react";
import Tabs from "../tabs/tabs"
import Form from "./form"

const Menu = ({ data }) => {
  const listItems = data.map((data) => (
    <div key={data.id} label={data.name}>
        <Form data={data.name}/>
    </div>
  ));
  return (
    <Tabs>
        {listItems}
    </Tabs>
  );
};

export default Menu;
