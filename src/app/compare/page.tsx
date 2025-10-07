export default function TraderComparisonPage() {
  return (
    <main>
      <h1>TRADER COMPARISON</h1>
      <table>
        <thead>
          <tr>
            <th>Mục</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Mô tả</b>
            </td>
            <td>
              Cung cấp phân tích so sánh song song (side-by-side) chi tiết giữa
              2 Master Traders theo yêu cầu của người dùng.
            </td>
          </tr>
          <tr>
            <td>
              <b>User Story</b>
            </td>
            <td>
              Là một nhà đầu tư, tôi muốn so sánh 2 traders để hiểu điểm
              mạnh/yếu của từng người, giúp tôi đưa ra quyết định đầu tư sáng
              suốt.
            </td>
          </tr>
          <tr>
            <td>
              <b>Đầu vào (Input)</b>
            </td>
            <td>
              <code>
                {"{"}"trader1": "Saeed_Amad", "trader2": "TinyRisk_BigWin"{"}"}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <b>Tiêu chí chấp nhận (AC)</b>
            </td>
            <td>
              <ul>
                <li>
                  AI phải trả về bảng so sánh với các chỉ số quan trọng (ROI,
                  MDD, Win Rate, Total Trades, Experience, Copiers)
                </li>
                <li>
                  Phân tích phải Highlight ưu điểm (🏆) và Lưu ý (⚠️) cho từng
                  trader.
                </li>
                <li>
                  AI phải cung cấp Khuyến nghị (🎯) về trader phù hợp hơn dựa
                  trên mục tiêu đầu tư chung.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <b>Dữ liệu trả về</b>
            </td>
            <td>Bảng so sánh và phân tích/khuyến nghị.</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
