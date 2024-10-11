"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import * as motion from "framer-motion/client";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon referrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-theme-yellow">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-theme-black/75">
          {time} | {address}
        </span>
        {work}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <h2 className="page-sub-title mt-32 w-full text-center">
        Work Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-theme-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Catalog Analyst/Web Developer"
            company="Jafrum Int."
            companyLink="//:www.jafrum.com"
            time="02/2016 - 03/2018"
            address="Alappuzha"
            work={
              <ul>
                <li>
                  Created and optimized product listings using NetSuite and
                  Magento 2.
                </li>
                <li>
                  Designed high-quality product images, logos, advertisement
                  banners, and promotional videos.
                </li>
                <li>Handled email marketing via MailChimp</li>
                <li>
                  Developed custom elements using HTML, JavaScript, and CSS.
                </li>
                <li>
                  Enhanced user experience with responsive and interactive
                  components.
                </li>
              </ul>
            }
          />
          <Details
            position="Web Designer / Developer"
            company="Commerzilla LLC"
            companyLink="https://commerzilla.com/"
            time="04/2018 - 03/2020"
            address="Alappuzha"
            work={
              <ul>
                <li>
                  Created and developed client projects on WordPress, Shopify,
                  and BigCommerce.
                </li>
                <li>
                  Designed high-quality product images, logos, advertisement
                  banners, and promotional videos.
                </li>
                <li>
                  Handled email marketing for clients using Klaviyo, MailChimp
                  and HubSpot.
                </li>
                <li>
                  Improved SEO, mobile optimization, and page speed for client
                  websites.
                </li>
              </ul>
            }
          />
          <Details
            position="Front End Web Developer"
            company="Commerzilla LLC"
            companyLink="https://commerzilla.com/"
            time="04/2020 - 08/2023"
            address="Remote (Alappuzha, India)"
            work={
              <ul>
                <li>
                  Led migration projects for Turmerry.com, including design
                  theme updates and app integrations.
                </li>
                <li>
                  Developed Shopify themes using Liquid and contributed to
                  WordPress and Shopify projects.
                </li>
                <li>
                  Handled email marketing for clients using Klaviyo and
                  MailChimp.
                </li>
                <li>
                  Managed Google Search Console, Merchant Center, Amazon Seller
                  Central for clients
                </li>
                <li>
                  Conducted code reviews and provided strategic advice to
                  enhance efficiency and customer satisfaction.
                </li>
              </ul>
            }
          />
          <Details
            position="Senior Full Stack Web Developer "
            company="Commerzilla LLC"
            companyLink="https://commerzilla.com/"
            time="09/2023 – 04/2024"
            address="Remote (Alappuzha, India)"
            work={
              <ul>
                <li>
                  Developed and updated custom Shopify themes and apps using
                  Liquid, JavaScript, React.js, and Node.js.
                </li>
                <li>
                  Supervised Shopify projects, managing clients' stores and
                  ensuring high performance and user satisfaction.
                </li>
                <li>
                  Regularly optimized SEO, mobile optimization, ensured
                  accessibility and monitored site speed, significantly
                  improving website performance and CRO for client stores via
                  A/B testing.
                </li>
                <li>
                  Administered Commerzilla WordPress site and WooCommerce store,
                  managing Google Analytics and Search Console for clients.
                </li>
                <li>
                  Led the Turmerry development team, managing daily operations,
                  customer support, and strategic enhancements.
                </li>
              </ul>
            }
          />
        </ul>
      </div>
    </>
  );
};

export default Experience;
