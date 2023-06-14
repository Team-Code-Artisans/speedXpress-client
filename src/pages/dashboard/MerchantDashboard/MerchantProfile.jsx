import profile from "../../../Assets/profile.png";
const MerchantProfile = () => {
  return (
    <div className="w-3/4 mx-auto">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 gap-6 sm:items-center">
        <div className="rounded-lg bg-white py-4 px-5 lg:py-11 lg:px-20 shadow-lg ml-3">
          <form action="" className="space-y-4">
              <div>
                <label
                  htmlFor="userName"
                  className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                >
                  <input
                    type="text"
                    id="userName"
                    placeholder="User Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Name
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Email Address
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="userName"
                  className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                >
                  <input
                    type="number"
                    id="number"
                    placeholder="number"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Phone Number
                  </span>
                </label>
              </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                >
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Password
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                >
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Confirm Password
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
               Your Address
              </label>

              <input
                className="w-full rounded-lg border border-gray-300 p-3 text-base mt-3"
                placeholder="Your Address"
                rows="8"
                id="message"
              ></input>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-orange-500 px-12 py-3 font-medium text-white sm:w-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <img
          alt="Violin"
          src={profile}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default MerchantProfile;
