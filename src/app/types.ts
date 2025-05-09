export interface WeightData {
  date: Date;
  weight: number;
}

export interface WeightProgressChartProps {
  data: WeightData[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

export interface WeightFormData {
  date: Date;
  weight: string;
}

export interface AddFormProps {
  handleSetWeightData: (data: WeightFormData) => void;
}
