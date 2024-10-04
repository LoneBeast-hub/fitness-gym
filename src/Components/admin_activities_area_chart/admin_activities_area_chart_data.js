export const areaChartData = {
    labels: [
        'Mon',
        'Tue',
        'Wed',
        'Thurs',
        'Fri',
        'Sat',
        'Sun'
    ],
    datasets: [
        {
            lineTension: 0.4,
            label: 'Activities',
            fill: {
                target: 'origin',
                above: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(-200, -50, -150, 550);
                    gradient.addColorStop(0, "rgba(255, 102, 0, 0.2)");
                    gradient.addColorStop(1, "rgba(255, 102, 0, 0)");
                    return gradient;
                }
            },
            data: [
                5, 78, 98, 79, 164, 140, 188
            ],
            borderColor: "#FF6600",
            borderWidth: 1.31
        }
    ]
}