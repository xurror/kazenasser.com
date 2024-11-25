import Header from "./header";
import Intro from "./intro";
import WorkExperience from "./work-experience";
import Articles from "./articles";
import Footer from "./footer";

export default function Page() {
  const navigation = [
    // { name: "Home", href: "/" },
    { name: "CV", href: "/cv" },
    { name: "Thinking out loud", href: "/thinking-out-loud" },
    { name: "Geeking out loud", href: "/geeking-out-loud" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>

      <div className="relative flex w-full flex-col">
        <Header navigation={navigation} />

        <div
          className="flex-none"
          style={{ height: "var(--content-offset)" }}
        ></div>
        <main className="flex-auto">
          <Intro />

          <div className="sm:px-8 mt-24 md:mt-28">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <Articles />

                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                      <form
                        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                        action="/thank-you"
                      >
                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none"
                          >
                            <path
                              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                              className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                            ></path>
                            <path
                              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                              className="stroke-zinc-400 dark:stroke-zinc-500"
                            ></path>
                          </svg>
                          <span className="ml-3">Stay up to date</span>
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Get notified when I publish something new, and
                          unsubscribe at any time.
                        </p>
                        <div className="mt-6 flex">
                          <input
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            required
                            disabled
                            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                          />
                          <button
                            disabled
                            className="inline-flex disabled items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                            type="submit"
                          >
                            Join
                          </button>
                        </div>
                      </form>

                      <WorkExperience />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer navigation={navigation} />
      </div>
    </div>
  );
}
