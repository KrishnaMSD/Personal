"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SkillRadialChartProps {
  value: number;
  label: string;
}

export function SkillRadialChart({ value, label }: SkillRadialChartProps) {
  const chartConfig = useMemo(() => {
    const options: ApexOptions = {
      chart: {
        type: "radialBar",
        height: 160,
        sparkline: { enabled: true },
        animations: { enabled: true },
      },
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "55%",
          },
          track: {
            background: "rgba(230,233,239,0.1)",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "24px",
              fontWeight: 600,
              color: "#E6E9EF",
              formatter: (val: number) => `${Math.round(val)}`,
            },
          },
        },
      },
      colors: ["#7C3AED"],
      labels: [label],
      tooltip: {
        enabled: true,
        theme: "dark",
        y: {
          formatter: (val: number) => `${Math.round(val)}%`,
        },
      },
    };

    return {
      series: [value],
      options,
    };
  }, [label, value]);

  return (
    <div role="img" aria-label={`${label} proficiency ${value} percent`}>
      <ApexChart type="radialBar" height={160} series={chartConfig.series} options={chartConfig.options as ApexOptions} />
    </div>
  );
}
