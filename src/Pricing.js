import React from "react";
import "./Pricing.css";
import price from "./price.json";
import Footer from "./Footer";
import { motion } from "framer-motion";
import smallLogo from "./assets/envy-logo.jpg";

export default function Pricing() {
  const nailsPrices = price.nails;
  const eyelashPrices = price.eyelash;
  const waxingPrices = price.waxing;
  const liftingPrices = price.lifting;

  return (
    <motion.div
      className="pricing"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ damping: 10, duration: 1 }}
    >
      <h2 className="service-title">PRICING</h2>
      <table className="nails-pricing">
        <div className="embedded-logo">
          <img src={smallLogo} width={250} height={250} alt="small logo" />
        </div>
        <thead>
          <tr>
            <th>
              <div className="service-heading">NAILS</div>
            </th>
            <th className="first-sub-service-heading">Polish</th>
            <th className="second-sub-service-heading">Shellac</th>
          </tr>
        </thead>
        <tbody>
          {nailsPrices.map((nailService) => (
            <tr key={nailService.service}>
              <td>{nailService.service}</td>
              <td>${nailService.price.Polish}</td>
              <td>
                {nailService.price.Shellac
                  ? `$${nailService.price.Shellac}`
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
        <small>* Designer/ Art on Nails price may vary from $5 </small>
      </table>

      <table className="eyelash-pricing">
        <div className="embedded-logo">
          <img src={smallLogo} width={220} height={220} alt="small logo" />
        </div>
        <thead>
          <tr>
            <th>
              <div className="service-heading">EYELASH EXTENSION</div>
            </th>
            <th className="first-sub-service-heading">Full-set</th>
            <th className="second-sub-service-heading">Re-fill</th>
          </tr>
        </thead>
        <tbody>
          {eyelashPrices.map((eyelashService) => (
            <tr key={eyelashService.service}>
              <td>{eyelashService.service}</td>
              <td>${eyelashService.price.Fullset}</td>
              <td>
                {eyelashService.price.Refill
                  ? `$${eyelashService.price.Refill[0]} - $${eyelashService.price.Refill[1]}`
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="wax-pricing">
        <div className="embedded-logo">
          <img src={smallLogo} width={250} height={250} alt="small logo" />
        </div>
        <thead>
          <tr>
            <th>
              <div className="service-heading">WAXING</div>
            </th>
            <th className="first-sub-service-heading"></th>
          </tr>
        </thead>
        <tbody>
          {waxingPrices.map((wax) => (
            <tr key={wax.service}>
              <td>{wax.service}</td>
              <td>
                ${wax.price[0]} {wax.price[1] && `- $${wax.price[1]}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="lifting-pricing">
        <div className="embedded-logo">
          <img src={smallLogo} width={120} height={120} alt="small logo" />
        </div>
        <thead>
          <tr>
            <th>
              <div className="service-heading">LIFTING / TINTING</div>
            </th>
            <th className="first-sub-service-heading"></th>
          </tr>
        </thead>
        <tbody>
          {liftingPrices.map((lift) => (
            <tr key={lift.service}>
              <td>{lift.service}</td>
              <td>${lift.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </motion.div>
  );
}
