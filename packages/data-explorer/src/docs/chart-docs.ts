export const chartHelpText = {
  line:
    "Line and stacked area charts for time series data where each row is a point and columns are data to be plotted.",
  bar: "Bar charts to compare individual and aggregate amounts.",
  scatter: "Scatterplot for comparing correlation between x and y values.",
  grid: "A table of data.",
  network:
    "Force-directed, adjacency matrix, arc diagram and sankey network visualization suitable for data that is an edge list where one dimension represents source and another dimension represents target.",
  summary: "Distribution plots such as boxplots and violin plots to compare.",
  hexbin:
    "Shows aggregate distribution of larger datasets across x and y metrics using hexbin, heatmap or contour plots.",
  parallel:
    "Parallel coordinates for comparing and filtering across different values in the dataset.",
  hierarchy:
    "Nest data by categorical values using treemap, dendrogram, sunburst or partition."
};

const hexScatterX = "Plot this metric along the X axis";

export type ChartOptionTypes =
  | "metric1"
  | "metric2"
  | "metric3"
  | "metric4"
  | "dim1"
  | "dim2"
  | "dim3"
  | "timeseriesSort"
  | "networkLabel";

export type ExplorationTypes =
  | ChartOptionTypes
  | "lineDimensions"
  | "lineType"
  | "areaType"
  | "networkType"
  | "summaryType"
  | "hierarchyType"
  | "nestingDimensions"
  | "barDimensions"
  | "trendLine"
  | "barGrouping"
  | "marginalGraphics";
export const controlHelpText: {
  [key in ExplorationTypes]?: { [key: string]: string } | string
} = {
  metric1: {
    default: "Plot this metric",
    scatter: hexScatterX,
    hexbin: hexScatterX
  },
  metric2: {
    default: "Plot this metric along the Y axis"
  },
  metric3: {
    default: "Size the width of bars (Marimekko style) based on this metric",
    scatter: "Size the radius of points based on this metric"
  },
  metric4: "Error bars according to this value",
  dim1: {
    default: "Color items by this dimension",
    summary: "Group items into this category",
    network: "Use this dimension to determine the source node"
  },
  dim2: {
    default: "Label prominent datapoints using this dimension",
    network: "Use this dimension to determine the target node"
  },
  dim3: {
    default: "Split contours into separate groups based on this dimension"
  },
  networkType:
    "Represent network as a force-directed network (good for social networks) or as a sankey diagram (good for flow networks)",
  hierarchyType:
    "Represent your hierarchy as a tree (good for taxonomies) or a treemap (good for volumes) or partition (also good for volume where category volume is important)",
  timeseriesSort:
    "Sort line chart time series by its array position or by a specific metric or time",
  lineType:
    "Represent your data using a line chart, stacked area chart or ranked area chart",
  areaType: "Represent as a heatmap, hexbin or contour plot",
  lineDimensions:
    "Only plot the selected dimensions (or all if none are selected)",
  trendLine: "Select the kind of trend line you want to display on the chart",
  barGrouping:
    "Choose between a clustered or a stacked bar chart when there are multiple pieces in the same category",
  marginalGraphics:
    "Choose the kind of marginal summary you want to see for summarizing density along the axes"
};
