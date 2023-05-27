import faq from "../../../Assets/faqImg.png";

const Faq = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <span className="w-1 h-5 bg-amber-400"></span>
        <p className="text-sm font-bold ml-2">F A Q</p>
      </div>
      <h2 className="text-center text-4xl font-semibold mb-14">
        Get Your <span className="text-amber-400">Queries Solved</span>
      </h2>
      <div className="lg:flex sm:flex-row w-4/5 mx-auto">
        <div className="max-w-2xl">
          <img src={faq} alt="" className="h-fit" />
        </div>
        <div className="space-y-4 lg:w-2/3 sm:w-auto my-auto">
          <details
            className="group border-s-4 border-amber-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How long does it take for my package to be delivered?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Delivery times vary depending on the destination and the service
              you choose. We offer different shipping options with estimated
              delivery times, and our team will provide you with the most
              accurate delivery estimates based on your specific requirements.
            </p>
          </details>

          <details className="group border-s-4 border-amber-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Can I request a quote for my shipping needs?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Absolutely! We offer a convenient online quote request form where
              you can provide details about your shipment, such as origin,
              destination, weight, and dimensions. Our team will review your
              request and provide you with a customized quote based on your
              specific needs.
            </p>
          </details>

          <details className="group border-s-4 border-amber-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How do you ensure the safety and security of my goods?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              We prioritize the safety and security of your goods throughout the
              entire logistics process. We have robust security measures in
              place, including surveillance systems, trained personnel, and
              secure storage facilities. Additionally, we work with trusted
              partners and carriers to ensure the safe handling and
              transportation of your shipments.
            </p>
          </details>

          <details className="group border-s-4 border-amber-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Can you accommodate special handling requirements or sensitive
                items?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Yes, we understand that certain items require special handling or
              have specific requirements. Whether you have fragile goods,
              hazardous materials, temperature-sensitive products, or oversized
              items, we have the expertise and resources to handle them
              appropriately and ensure their safe delivery.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
