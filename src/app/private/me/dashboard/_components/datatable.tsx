export default function Datatable() {
  const data = [
    {
      order_number: 3000,
      purchase_date: "May 9, 2024",
      customer: "Leslie Alexander",
      event: "Bear Hug: Live in Concert",
      amount: "US$80.00",
    },
    {
      order_number: 3001,
      purchase_date: "May 5, 2024",
      customer: "Michael Foster",
      event: "Six Fingers — DJ Set",
      amount: "US$299.00",
    },
    {
      order_number: 3002,
      purchase_date: "Apr 28, 2024",
      customer: "Dries Vincent",
      event: "We All Look The Same",
      amount: "US$150.00",
    },
    {
      order_number: 3003,
      purchase_date: "Apr 23, 2024",
      customer: "Lindsay Walton",
      event: "Bear Hug: Live in Concert",
      amount: "US$80.00",
    },
    {
      order_number: 3004,
      purchase_date: "Apr 18, 2024",
      customer: "Courtney Henry",
      event: "Viking People",
      amount: "US$114.99",
    },
  ];
  return (
    <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
      <thead className="text-zinc-500 dark:text-zinc-400">
        <tr className="">
          {Object.keys(data[0]).map((header, i) => (
            <th
              key={i}
              className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
            >
              <span className="capitalize">{header.split("_").join(" ")}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="has-[[data-row-link][data-focus]]:outline has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
            <td className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a
                data-row-link="true"
                aria-label="Order #3000"
                className="absolute inset-0 focus:outline-none"
                href="/private/me/dashboard/orders/3000"
              ></a>
              3000
            </td>
            <td className="text-zinc-500 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a
                data-row-link="true"
                aria-label="Order #3000"
                className="absolute inset-0 focus:outline-none"
                href="/private/me/dashboard/orders/3000"
              ></a>
              May 9, 2024
            </td>
            <td className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a
                data-row-link="true"
                aria-label="Order #3000"
                className="absolute inset-0 focus:outline-none"
                href="/private/me/dashboard/orders/3000"
              ></a>
              Leslie Alexander
            </td>
            <td className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a
                data-row-link="true"
                aria-label="Order #3000"
                className="absolute inset-0 focus:outline-none"
                href="/private/me/dashboard/orders/3000"
              ></a>
              <div className="flex items-center gap-2">
                <span
                  data-slot="avatar"
                  className="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-full *:rounded-full"
                >
                  <img
                    className="size-full"
                    src="/placeholder.webp"
                    alt=""
                  />
                </span>
                <span>Bear Hug: Live in Concert</span>
              </div>
            </td>
            <td className="text-right relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a
                data-row-link="true"
                aria-label="Order #3000"
                className="absolute inset-0 focus:outline-none"
                href="/private/me/dashboard/orders/3000"
              ></a>
              US$80.00
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
