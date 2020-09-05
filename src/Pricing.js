import React from "react";
import price from "./price.json";
export default function Pricing() {
  console.log(price);
  return (
    <div className="pricing-table">
      <table className="nails-pricing">
        <thead>
          <tr>
            <th className="service-heading">Nails</th>
            <th>Polish</th>
            <th>Shellac</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Buff, shape and Polish</td>
            <td>$15</td>
            <td>$20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
