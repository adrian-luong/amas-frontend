export default function BuildPortfolioPage() {
  return (
    <main>
      <h1>AI PORTFOLIO BUILDER</h1>
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
              AI tự động đề xuất một portfolio gồm 3-5 Master Traders tối ưu,
              kèm phân bổ vốn chi tiết, dựa trên số vốn và mức độ chấp nhận rủi
              ro của người dùng.
            </td>
          </tr>
          <tr>
            <td>
              <b>User Story</b>
            </td>
            <td>
              Là một newbie trader, tôi muốn nhập số vốn và risk profile để nhận
              được portfolio traders được AI đề xuất, để tôi có thể bắt đầu copy
              trading ngay lập tức mà không cần research.
            </td>
          </tr>
          <tr>
            <td>
              <b>Đầu vào (Input)</b>
            </td>
            <td>
              <code>
                {"{"}"capital": 1000, "risk_profile": "MEDIUM", "currency":
                "USDT"{"}"}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <b>Tiêu chí chấp nhận (AC)</b>
            </td>
            <td>
              <ul>
                <li>Hệ thống phải xác thực giới hạn vốn ($100 - $10,000)</li>
                <li>
                  AI phải trả về danh mục 3-5 traders với phân bổ vốn chi tiết
                </li>
                <li>
                  Kết quả hiển thị kỳ vọng Lợi nhuận và Rủi ro (Max Drawdown)
                  của toàn bộ portfolio
                </li>
                <li>
                  Định dạng phản hồi phải là Markdown (có emoji) và dễ đọc
                </li>
                <li>Thời gian phản hồi {"<"} 10 giây.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <b>Dữ liệu trả về</b>
            </td>
            <td>
              Portfolio chi tiết (Trader, vốn phân bổ, ROI, MDD, Win Rate, tóm
              tắt chiến lược).
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
