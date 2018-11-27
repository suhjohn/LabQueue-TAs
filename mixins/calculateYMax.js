export const calculateYMax = {
  /**
   * datasets represents a chart.js format datasets.
   * Returns a value that makes the current max being its 80%.
   */
  methods: {
    calculateYMax(datasets) {
      const OFFSET = 0.25;
      let minVal = 0;
      let maxVal = 0;
      datasets.forEach(dataset => {
        maxVal = Math.max(maxVal, Math.max(...dataset.data));
        minVal = 0;
      });
      console.log((maxVal - minVal) * OFFSET + maxVal);
      return (maxVal - minVal) * OFFSET + maxVal;
    }
  }
};
