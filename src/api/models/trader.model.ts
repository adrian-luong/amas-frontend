export default interface TraderModel {
  _id: string;
  name: string;
  roi_30d: string | null;
  pnl_30d: string | null;
  aum: string | null;
  days_trading: number | null;
  copiers: number | null;
  leverage: string | null;
  tags: string[];
  detail_url: string;
  updated_at: string;

  mdd?: number | null;
  sharpe_ratio?: number | null;

  risk_score?: number | null;
  consistency?: number | null;
  profit_potential?: number | null;
  monte_carlo?: Object | null;
  insight?: string | null;
}
