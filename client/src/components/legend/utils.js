/* eslint-disable */
export const legendData = [];

export function updateLegend(prev, next) {
    const nextIndex = legendData.indexOf(next.name);
    
    if (nextIndex !== -1)
    {
        legendData.splice(nextIndex + 1, legendData.length - nextIndex);
        return;
    }

    legendData.push(next.name);
}