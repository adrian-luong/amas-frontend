export default function SmartTraderSearchPage() {
  return (
    <main>
      <h1>SMART TRADER SEARCH</h1>
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
              Cho phép người dùng tìm kiếm traders bằng ngôn ngữ tự nhiên hoặc
              các tiêu chí lọc cụ thể (ví dụ: MDD thấp, ROI cao).
            </td>
          </tr>
          <tr>
            <td>
              <b>User Story</b>
            </td>
            <td>
              Là một nhà đầu tư có tiêu chí riêng, tôi muốn tìm các traders đáp
              ứng điều kiện cụ thể để phù hợp với chiến lược đầu tư của tôi.
            </td>
          </tr>
          <tr>
            <td>
              <b>Đầu vào (Input)</b>
            </td>
            <td>
              <p>
                Ngôn ngữ tự nhiên hoặc chuỗi tiêu chí lọc (VD: "Trader nào có
                MDD dưới 10%", "Trader spot trading an toàn").
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <b>Tiêu chí chấp nhận (AC)</b>
            </td>
            <td>
              <ul>
                <li>Hệ thống phải xử lý được query tự nhiên/tiêu chí lọc.</li>
                <li>AI trả về danh sách Top 10 traders phù hợp nhất.</li>
                <li>Kết quả phải được sắp xếp theo Relevance Score</li>
                <li>
                  Hiển thị tóm tắt các chỉ số chính (MDD, ROI) và Lý do phù hợp
                  (💡).
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <b>Dữ liệu trả về</b>
            </td>
            <td>
              Danh sách Top 10 traders kèm tóm tắt chỉ số và Relevance Score.
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
