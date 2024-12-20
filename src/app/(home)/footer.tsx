export default function Footer({
  navigation,
}: {
  navigation: { name: string; href: string }[];
}) {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        © 2024 Spencer Sharp. All rights reserved.
                      </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
