import React from "react";
import "./Pricing.css";
import price from "./price.json";
import { motion } from "framer-motion";
import smallLogo from "./assets/small-logo.jpg";
import useFetchDocuments from "./useFetchDocuments";
import animationVariant from "./animationVariant";
import shopSeparator from "./assets/shop-separator.jpg";

export default function Pricing() {
  const nailsPrices = price.nails;
  const eyelashPrices = price.eyelash;
  const waxingPrices = price.waxing;
  const liftingPrices = price.lifting;
  const { docs: images } = useFetchDocuments("eyelash");

  return (
    <motion.div
      className="pricing"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ damping: 10, duration: 1 }}
    >
      <motion.div
        className="separator-image"
        variants={animationVariant}
        initial="initial"
        animate="animate"
        delay={0.8}
      >
        {images && <img src={shopSeparator} height={200} alt="separator"></img>}
      </motion.div>
      <h2 className="service-title pricing-title">PRICING</h2>
      <div className="service-container">
        <div className="embedded-logo">
          <img src={smallLogo} width={250} height={250} alt="small logo" />
        </div>
        <table className="nails-pricing">
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
        </table>
        <small>* Designer/ Art on Nails price may vary from $5 </small>
      </div>

      <div className="service-container">
        <div className="embedded-logo">
          <img src={smallLogo} width={220} height={220} alt="small logo" />
        </div>
        <table className="eyelash-pricing">
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
      </div>

      <div className="service-container">
        <div className="embedded-logo">
          <img src={smallLogo} width={250} height={250} alt="small logo" />
        </div>
        <table className="wax-pricing">
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
      </div>

      <div className="service-container">
        <div className="embedded-logo">
          <img src={smallLogo} width={120} height={120} alt="small logo" />
        </div>
        <table className="lifting-pricing">
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
      </div>
    </motion.div>
  );
}
