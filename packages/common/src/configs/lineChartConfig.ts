export const lineChartConfig = (borderColor: string, ticksColor: string) => ({
  responsive: true,
  maintainAspectRatio: false,

  layout: {
    padding: {
      top: 20,
      bottom: 49,
      left: 27,
      right: 36,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: true,
      offset: false,
      stack: 'demo',
      beginAtZero: true,

      grid: {
        color: 'transparent',
      },

      border: {
        color: borderColor,
      },

      ticks: {
        padding: 9,
        color: ticksColor,
      },
    },
    x: {
      display: true,
      offset: false,
      stack: 'demo',

      grid: {
        color: borderColor,
      },

      border: {
        color: 'transparent',
      },

      ticks: {
        color: ticksColor,
        maxRotation: 0,
        minRotation: 0,
        padding: 7,
        autoSkip: false,
      },
    },
  },
})
