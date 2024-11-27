import Datatable from "./_components/datatable";
import Select from "./_components/select";
import StatsBoxes from "./_components/stats-boxes";

export default function Page() {
  const selOptions = [
    { value: "1", label: "Last 7 days" },
    { value: "2", label: "Last 30 days" },
    { value: "3", label: "Last 90 days" },
    { value: "4", label: "Last 365 days" },
  ];
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Good afternoon, Erica
      </h1>
      <div className="mt-8 flex items-end justify-between">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          Overview
        </h2>
        <Select options={selOptions} />
      </div>
      <StatsBoxes />
      <h2 className="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        Recent orders
      </h2>
      <div className="flow-root">
        <div className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
          <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
}
