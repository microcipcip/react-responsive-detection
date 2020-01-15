import React, { useContext } from "react";
import { ResponsiveContext } from "./App";

export const Table = () => {
  const {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
    orientation
  } = useContext(ResponsiveContext);

  const calcMediaValue = mediaValue =>
    mediaValue ? (
      <span style={{ color: "green" }}>true</span>
    ) : (
      <span style={{ color: "yellow" }}>false</span>
    );

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
        <td>-</td>
        <td></td>
      </tr>
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
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>isPortrait</td>
          <td>{calcMediaValue(isPortrait)}</td>
        </tr>
        <tr>
          <td>isLandscape</td>
          <td>{calcMediaValue(isLandscape)}</td>
        </tr>
        <tr>
          <td>orientation</td>
          <td><span style={{ color: "green" }}>{orientation}</span></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
