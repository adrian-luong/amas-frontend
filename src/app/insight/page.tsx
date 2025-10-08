import Header from "@/components/header";

export default function TradingInsightsPage() {
    return (
        <main>
            <Header />
            <section className="p-6">
                <h1>TRADING INSIGHTS</h1>
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
                                AI phân tích xu hướng thị trường và dữ liệu traders 24h gần nhất
                                để đưa ra các insights, cảnh báo rủi ro, và đề xuất hành động.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>User Story</b>
                            </td>
                            <td>
                                Là một nhà đầu tư, tôi muốn biết các insights về thị trường và
                                traders để có cái nhìn tổng quan và đưa ra quyết định đầu tư thông
                                minh.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Tần suất cập nhật</b>
                            </td>
                            <td>
                                <p>Tự động, mỗi 24 giờ. </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Tiêu chí chấp nhận (AC)</b>
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Tự động phát hiện và cảnh báo các Traders đang có momentum tốt
                                        (📈).
                                    </li>
                                    <li>
                                        Tự động cảnh báo Traders có dấu hiệu rủi ro (⚠️) (Drawdown cao,
                                        hiệu suất giảm).
                                    </li>
                                    <li>
                                        Đề xuất các "Gem" mới (💎) (trader mới nổi, hiệu suất cao).
                                    </li>
                                    <li>
                                        Đưa ra Hành động cụ thể (🎯) khuyến nghị cho người dùng.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Dữ liệu trả về</b>
                            </td>
                            <td>Báo cáo tóm tắt Insights thị trường.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>

    )
}