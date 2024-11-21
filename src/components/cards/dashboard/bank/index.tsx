import "chart.js/auto";
import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { topFiveBanks } from "../../../../dummy/top_five_banks";
Chart.register(ChartDataLabels);

function DashboardBankApprovalCard() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white p-5 space-y-5 rounded-lg shadow-md hover:-translate-y-1 transition-all">
      <h3 className="font-semibold text-xl">Top 5 Bank Approval Tertinggi</h3>
      <div className="hidden md:block md:size-[25rem]">
        <RenderDoughnut />
      </div>
      <div className="block md:hidden">
        <RenderDoughnut />
      </div>
    </div>
  );
}

function RenderDoughnut() {
  return (
    <Doughnut
      data={{
        datasets: [
          {
            label: "Percentage",
            data: topFiveBanks.map((bank) => bank.value),
            backgroundColor: [
              "rgba(74, 55, 100, 1)",
              "rgba(31, 255, 225, 1)",
              "rgba(81, 196, 233, 1)",
              "rgba(20, 108, 148, 1)",
              "rgba(97, 80, 193, 1)",
            ],
            borderColor: "white",
            borderWidth: 8,
            datalabels: {
              labels: {
                index: {
                  color: "#404040",
                  font: {
                    size: 14,
                    family: "Inter",
                    weight: 500,
                  },
                  // See https://chartjs-plugin-datalabels.netlify.app/guide/options.html#option-context
                  formatter: (val, ctx) =>
                    `${val}%\n${ctx.chart.data.labels?.[ctx.dataIndex]}`,
                  align: "end",
                  anchor: "end",
                },
              },
            },
          },
        ],
        labels: topFiveBanks.map((bank) => bank.label),
      }}
      options={{
        layout: {
          padding: {
            top: 30,
            bottom: 30,
            left: 50,
            right: 50,
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          datalabels: {
            display: true,
          },
        },
      }}
    />
  )
}

export default DashboardBankApprovalCard;
