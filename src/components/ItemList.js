import React from "react";
import "../App.css";

const ItemList = (props) => {
  return (
    <div>
      <table>
        {props.item.map((item, value) => (
          <tr>
            <td>{item.text}</td>
            <td>
              <i
                className="fa fa-close"
                onClick={() => props.handleRemove(value)}
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ItemList;
