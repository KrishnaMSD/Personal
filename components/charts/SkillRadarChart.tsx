"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SkillRadarChartProps {
  title: string;
  metrics: { axis: string; score: number }[];
}

export function SkillRadarChart({ title, metrics }: SkillRadarChartProps) {
  const chartConfig = useMemo(() => {
    const palette = ["#7C3AED", "#22D3EE", "#38BDF8", "#6366F1", "#0EA5E9", "#8B5CF6", "#14B8A6"];
    const axisColorMap: Record<string, string> = {
      Programming: palette[0],
      "Artificial Intelligence": palette[3],
      Frontend: palette[1],
      Database: palette[5],
      "Data Visualization": palette[2],
      Cloud: palette[4],
      "Dev Ops": palette[6],
      Others: palette[0],
    };
    const colors = metrics.map((metric, index) => axisColorMap[metric.axis] ?? palette[index % palette.length]);

    const options: ApexOptions = {
      chart: {
        type: "polarArea",
        animations: { enabled: true },
        toolbar: { show: false },
      },
      labels: metrics.map((metric) => metric.axis),
      colors,
      stroke: {
        colors: ["#0B0E14"],
        width: 1,
      },
      fill: {
        opacity: 0.82,
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: true,
        position: "bottom",
        labels: {
          colors: "#E6E9EF",
        },
        fontSize: "12px",
        markers: {
          width: 12,
          height: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 6,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0.6,
          },
          spokes: {
            connectorColors: "rgba(230,233,239,0.18)",
          },
        },
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: (value: number) => `${Math.round(value)}%`,
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            legend: {
              fontSize: "11px",
              itemMargin: {
                horizontal: 6,
                vertical: 4,
              },
            },
          },
        },
      ],
    };

    return {
      series: metrics.map((metric) => metric.score),
      options,
    };
  }, [metrics, title]);

  return (
    <div
      className="surface-card flex flex-col gap-4 p-5"
      role="img"
      aria-label={`${title} polar chart summarizing capability coverage`}
    >
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-xs uppercase tracking-[0.28em] text-subtle">Skill coverage</p>
      </div>
      <ApexChart type="polarArea" height={320} series={chartConfig.series} options={chartConfig.options} />
    </div>
  );
}
