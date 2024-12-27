"use client";
import { FC, useState } from "react";
import Accordion from "./accordion";
import { useWindowSize } from "@/hooks";

interface FuqProps {}

const Faq: FC<FuqProps> = ({}) => {
  const { width } = useWindowSize();
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const FAQContent = [
    {
      header: "Can you make the website responsive?",
      content: (
        <>
          Absolutely! A responsive website is crucial to ensure it works well on
          all devices, including desktops, tablets, and smartphones. I use
          modern CSS techniques like Flexbox, Grid, and media queries to ensure
          the design adapts to different screen sizes. Additionally, I test the
          website on multiple devices and browsers to ensure it looks great and
          functions well across the board.
        </>
      ),
    },
    {
      header: "How can we improve the website's load time?",
      content: (
        <>
          <p>
            *Improving load time is key to a good user experience and better
            SEO. There are several ways to optimize a website's performance:
          </p>
          <ul className='mt-4 flex flex-col gap-2 pl-4 list-disc marker:text-tt-6'>
            <li className=''>
              <strong>Optimizing images:</strong> Compressing images and using
              modern formats like WebP.
            </li>
            <li>
              <strong>Minimizing and bundling CSS and JavaScript:</strong>
              &nbsp;Reducing file sizes and the number of HTTP requests.
            </li>
            <li>
              <strong>Lazy loading:</strong> Delaying the loading of offscreen
              images until the user scrolls to them.
            </li>
            <li>
              <strong>Optimizing images:</strong> Compressing images and using
              modern formats like WebP.
            </li>
            <li>
              <strong>Using a CDN (Content Delivery Network):</strong>
              &nbsp;Distributing content from servers closer to the user.
            </li>
            <li>
              <strong>Implementing caching strategies:</strong> Storing assets
              locally in the user's browser to reduce load times on repeat
              visits. I also ensure the site follows best practices for
              performance, such as using optimized fonts and avoiding
              render-blocking resources.*
            </li>
          </ul>
        </>
      ),
    },
    {
      header: "How do I get started?",
      content: (
        <>
          Cross-browser compatibility is essential to ensure the website works
          well for all users, regardless of the browser they're using. I develop
          with standards-compliant HTML, CSS, and JavaScript, which helps ensure
          consistency across modern browsers like Chrome, Firefox, Safari, and
          Edge. I also use tools like BrowserStack to test the site on different
          browsers and devices. If needed, I can implement specific workarounds
          or polyfills for older browsers to ensure compatibility without
          compromising on modern features and performance.
        </>
      ),
    },
  ];

  return (
    <div className='block mx-auto  max-w-[1016px] w-full'>
      <h2 className='block px-5 text-tt-5 font-satoshi text-[30px] leading-[36px] font-normal md:text-left text-center'>
        Frequently asked questions
      </h2>
      <div className='mt-12 flex flex-col'>
        {FAQContent.map((item) => (
          <Accordion
            key={item.header}
            header={item.header}
            content={item.content}
            expanded={expanded}
            setExpanded={setExpanded}
            desktop={(width || 0) > 640}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
