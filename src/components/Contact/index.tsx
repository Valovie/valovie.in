import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#242222] overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs  bg-[#202020] px-8 py-11 shadow-three  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 font-tanmon text-2xl font-bold text-yellow-400 sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Backup? Call Your Game Master
              </h2>
              <p className="mb-12 font-serif text-base font-medium text-white">
                Stuck in a mission? Glitched in your test zone? Don't worry, Commander! Just raise a ticket and we'll deploy our AI Support Bot or Human Intelligence to your aid in no time.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-serif font-medium text-gray-300"
                      >
                        Codename (Your Name)
                      </label>
                      <input
  type="text"
  placeholder="Enter your name"
  className="border-stroke w-full font-serif rounded-xs border px-6 py-3 text-base text-gray-800 placeholder-yellow-500 outline-hidden focus:border-yellow-500 dark:border-transparent dark:bg-yellow-200 dark:text-gray-300 dark:placeholder-yellow-600 dark:shadow-two dark:focus:border-yellow-400 dark:focus:shadow-none"
/>

                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-serif font-medium text-gray-300"
                      >
                        Communication Channel (Your Email)
                      </label>
                      <input
  type="text"
  placeholder="Enter your name"
  className="border-stroke w-full font-serif rounded-xs border px-6 py-3 text-base text-gray-800 placeholder-yellow-500 outline-hidden focus:border-yellow-500 dark:border-transparent dark:bg-yellow-200 dark:text-gray-300 dark:placeholder-yellow-600 dark:shadow-two dark:focus:border-yellow-400 dark:focus:shadow-none"
/>

                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block font-serif text-sm font-medium text-gray-300"
                      >
                        Distress Call (Your Message)
                      </label>
                      <textarea
  name="message"
  rows={3}
  placeholder="Enter your Message"
  className="border-stroke w-full font-serif rounded-xs border px-6 py-3 text-base text-gray-800 placeholder-yellow-500 outline-hidden focus:border-yellow-500 dark:border-transparent dark:bg-yellow-200 dark:text-gray-300 dark:placeholder-yellow-600 dark:shadow-two dark:focus:border-yellow-400 dark:focus:shadow-none"
></textarea>


                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="bg-yellow-400 shadow-submit hover:bg-yellow-900 dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-base duration-300">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;