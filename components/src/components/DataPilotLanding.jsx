"use client";
import * as React from "react";
import { useState } from "react";

function DataPilotLanding() {
  const [location, setLocation] = useState({
    query: {},
    path: "",
  });

  const [deviceSize, setDeviceSize] = useState("large");

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="overflow-x-auto overflow-y-auto bg-white">
      <section className="flex relative justify-center items-center p-12 h-screen text-center text-[white]">
        <div className="mx-auto my-0 max-w-[1200px]">
          <h1 className="mb-6 text-7xl font-medium leading-none text-[white] max-md:text-6xl max-md:leading-tight max-sm:text-4xl max-sm:leading-tight">
            Unlock the Power of Your Data with DataPilot
          </h1>
          <p className="mx-auto mt-0 mb-12 text-2xl leading-normal max-w-[800px] text-white text-opacity-90 max-md:mb-9 max-md:text-xl max-md:leading-snug max-sm:mb-6 max-sm:text-base max-sm:leading-normal">
            The all-in-one analytics platform that helps you make smarter
            decisions faster. No coding required.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 text-base font-medium transition-all cursor-pointer bg-neutral-900 border-[none] duration-[0.3s] rounded-[30px] text-[white]">
              Get Started
            </button>
            <button className="px-8 py-4 text-base font-medium bg-transparent border-2 border-solid transition-all cursor-pointer border-[white] duration-[0.3s] rounded-[30px] text-[white]">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="px-12 py-20 bg-[white]">
        <h2 className="mb-12 text-5xl text-center">Key Features</h2>
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(3,1fr)] max-w-[1200px] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {[
            {
              title: "Automated Workflows",
              description: "Build and deploy data pipelines with ease",
            },
            {
              title: "Real-time Analytics",
              description: "Get instant insights from your data streams",
            },
            {
              title: "Smart Integration",
              description: "Connect with your existing tools seamlessly",
            },
          ].map((feature, index) => (
            <div
              className="overflow-hidden relative p-8 text-center rounded-lg border-2 border-transparent border-solid transition-all cursor-pointer bg-neutral-100 duration-[0.3s] ease-[ease]"
              key={index}
            >
              <h3 className="mb-4 text-2xl font-medium">{feature.title}</h3>
              <p className="text-base leading-normal text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-12 py-20 bg-neutral-100">
        <h2 className="mb-12 text-5xl text-center">What Our Customers Say</h2>
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(2,1fr)] max-w-[1200px] max-sm:grid-cols-[1fr]">
          {[
            {
              quote:
                "DataPilot has transformed how we handle our data processing. It's intuitive and powerful.",
              author: "Sarah Chen",
              role: "Data Science Lead",
            },
            {
              quote:
                "The automation capabilities have saved us countless hours. Highly recommended!",
              author: "Michael Rodriguez",
              role: "CTO",
            },
          ].map((testimonial, index) => (
            <div className="p-8 rounded-lg bg-[white]" key={index}>
              <p className="mb-6 text-lg italic leading-relaxed">
                <span>&quot;</span>
                <span>{testimonial.quote}</span>
                <span>&quot;</span>
              </p>
              <div>
                <p className="mb-1 font-medium">{testimonial.author}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-12 py-20 bg-[white]">
        <h2 className="mb-12 text-5xl text-center">Pricing Plans</h2>
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(3,1fr)] max-w-[1200px] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {[
            {
              name: "Starter",
              price: "$49",
              features: ["5 Workflows", "Basic Analytics", "Email Support"],
            },
            {
              name: "Professional",
              price: "$99",
              features: [
                "Unlimited Workflows",
                "Advanced Analytics",
                "Priority Support",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Custom Solutions",
                "Dedicated Support",
                "SLA Guarantee",
              ],
            },
          ].map((plan, index) => (
            <div
              className="overflow-hidden relative p-8 text-center rounded-3xl border-2 border-transparent border-solid transition-all cursor-pointer bg-neutral-100 duration-[0.3s] ease-[ease]"
              data-plan={plan.name}
              key={index}
            >
              <h3 className="mb-4 text-2xl font-medium">{plan.name}</h3>
              <p className="mb-6 text-4xl font-medium">
                <span>{plan.price}</span>
                {plan.price !== "Custom" ? (
                  <span className="text-base text-neutral-500">/month</span>
                ) : null}
              </p>
              <ul className="p-0 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li className="mb-3 text-neutral-500" key={featureIndex}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="relative px-6 py-3 w-full text-base font-medium text-blue-600 border-2 border-blue-600 border-solid transition-all cursor-pointer bg-[white] duration-[0.3s] ease-[ease] rounded-[30px] z-[1]"
                onClick={(event) => {
                  const plans = document.querySelectorAll("[data-plan]");
                  plans.forEach((plan) => {
                    plan.style.border = "2px solid transparent";
                    plan.style.transform = "translateY(0)";
                  });
                  const parent = event.target.closest("[data-plan]");
                  if (parent) {
                    parent.style.border = "2px solid rgb(0, 87, 255)";
                    parent.style.transform = "translateY(-8px)";
                    setSelectedPlan(parent.getAttribute("data-plan"));
                  }
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
      <footer className="p-12 bg-white border-t border-solid border-t-neutral-200">
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(4,1fr)] max-w-[1200px] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          <div>
            <h4 className="mb-4 text-sm font-medium">Product</h4>
            <ul className="p-0">
              <li className="mb-3">
                <a className="no-underline text-neutral-500" href="#">
                  Features
                </a>
              </li>
              <li className="mb-3">
                <a className="no-underline text-neutral-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Company</h4>
            <ul className="p-0">
              <li className="mb-3">
                <a className="no-underline text-neutral-500" href="#">
                  About
                </a>
              </li>
              <li className="mb-3">
                <a className="no-underline text-neutral-500" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DataPilotLanding;
