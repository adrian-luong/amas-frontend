export interface TraderCard extends TraderObject {
  roi_30d: string | null;
  pnl_30d: number | null;
  aum: number | null;
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

interface TraderObject {
  _id: string;
  name: string;
  days_trading: number | null;
  copiers: number | null;
}
