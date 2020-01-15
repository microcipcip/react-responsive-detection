import React, { useContext } from "react";
import { ResponsiveContext } from "./App";

export const Table = () => {
  const { isMobile, isTablet, isDesktop, orientation } = useContext(
    ResponsiveContext
  );

  const calcMediaValue = mediaValue =>
    mediaValue ? <span style={{ color: "yellow" }}>true</span> : "false";

  return (
    <table style={{ maxWidth: "300px", width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>isMobile</td>
          <td>{calcMediaValue(isMobile)}</td>
        </tr>
        <tr>
          <td>isTablet</td>
          <td>{calcMediaValue(isTablet)}</td>
        </tr>
        <tr>
          <td>isDesktop</td>
          <td>{calcMediaValue(isDesktop)}</td>
        </tr>
        <tr>
          <td>orientation</td>
          <td>{orientation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
