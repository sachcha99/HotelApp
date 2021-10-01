import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  speedmultiplier: 0.5;
`;

function AdminLoader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#009635");

  return (
    <div className="admin-loading">
      <div className="admin-loadingBody">
        <HashLoader
          className="admin-loader"
          color={color}
          loading={loading}
          css={override}
          size={50}
        />
      </div>
    </div>
  );
}

export default AdminLoader;
