import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_30d_in_currency: number;
}

const CryptoDashboard = () => {
  const [data, setData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=1h,24h,7d,30d'
      );
      if (!res.ok) {
        throw new Error('Failed to fetch data (Rate limit or API error).');
      }
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 6 }).format(val);
  };

  const formatPercent = (val: number) => {
    if (val === undefined || val === null) return 'N/A';
    const isPositive = val >= 0;
    return (
      <span style={{ color: isPositive ? '#10b981' : '#ef4444', fontWeight: 600 }}>
        {isPositive ? '+' : ''}{val.toFixed(2)}%
      </span>
    );
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>
        <div style={{ marginBottom: '1rem' }}>Loading live crypto data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px' }}>
        <p>Error: {error}</p>
        <button onClick={fetchData} style={{ marginTop: '1rem', padding: '8px 16px', background: 'var(--primary)', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Retry
        </button>
      </div>
    );
  }

  // Prepare chart data based on Notebook Seaborn plot logic
  const chartData = data.map(coin => ({
    name: coin.symbol.toUpperCase(),
    '1hr': coin.price_change_percentage_1h_in_currency || 0,
    '24hr': coin.price_change_percentage_24h_in_currency || 0,
    '7d': coin.price_change_percentage_7d_in_currency || 0,
    '30d': coin.price_change_percentage_30d_in_currency || 0,
  }));

  return (
    <motion.div 
      className="crypto-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
         <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>🔴 Live Market Data</h4>
         <button onClick={fetchData} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontSize: '0.9rem' }}>
           Refresh Data
         </button>
      </div>

      <div style={{ overflowX: 'auto', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>Asset</th>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>Price</th>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>1h %</th>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>24h %</th>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>7d %</th>
              <th style={{ padding: '12px 16px', color: '#9ca3af', fontWeight: 500 }}>30d %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 'bold', color: '#fff' }}>{coin.name}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{coin.symbol.toUpperCase()}</span>
                </td>
                <td style={{ padding: '12px 16px', color: '#e5e7eb' }}>{formatCurrency(coin.current_price)}</td>
                <td style={{ padding: '12px 16px' }}>{formatPercent(coin.price_change_percentage_1h_in_currency)}</td>
                <td style={{ padding: '12px 16px' }}>{formatPercent(coin.price_change_percentage_24h_in_currency)}</td>
                <td style={{ padding: '12px 16px' }}>{formatPercent(coin.price_change_percentage_7d_in_currency)}</td>
                <td style={{ padding: '12px 16px' }}>{formatPercent(coin.price_change_percentage_30d_in_currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
        <h4 style={{ margin: '0 0 1rem 0', color: '#fff' }}>📊 Percentage Change Comparison (24hr)</h4>
        <div style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} />
              <Tooltip 
                contentStyle={{ background: '#1f2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" />
              <Bar dataKey="24hr" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry['24hr'] >= 0 ? '#10b981' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default CryptoDashboard;
