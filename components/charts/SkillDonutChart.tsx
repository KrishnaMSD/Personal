"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SkillDonutChartProps {
  title: string;
  centerLabel: string;
  slices: { label: string; value: number }[];
}

export function SkillDonutChart({ title, centerLabel, slices }: SkillDonutChartProps) {
  const chartConfig = useMemo(() => {
    const options: ApexOptions = {
      chart: {
        type: "donut",
        animations: { enabled: true },
      },
      labels: slices.map((slice) => slice.label),
      colors: ["#7C3AED", "#22D3EE", "#38BDF8", "#6366F1", "#0EA5E9", "#8B5CF6", "#14B8A6"],
      stroke: {
        width: 1,
        colors: ["#0B0E14"],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        labels: { colors: "#E6E9EF" },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: {
                color: "#E6E9EF",
                fontSize: "12px",
                offsetY: -6,
              },
              value: {
                color: "#E6E9EF",
                fontSize: "18px",
                fontWeight: 600,
                formatter: () => centerLabel,
              },
            },
          },
          expandOnClick: true,
        },
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: (val: number) => `${val.toFixed(1)}%`,
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    return {
      series: slices.map((slice) => slice.value),
      options,
    };
  }, [centerLabel, slices]);

  return (
    <div
      className="surface-card flex flex-col gap-4 p-6"
      role="img"
      aria-label={`${title} donut chart summarizing capabilities`}
    >
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-xs uppercase tracking-[0.28em] text-subtle">{centerLabel}</p>
      </div>
      <ApexChart type="donut" height={320} series={chartConfig.series} options={chartConfig.options} />
    </div>
  );
}
