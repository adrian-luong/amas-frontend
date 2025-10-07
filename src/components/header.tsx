import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu"
import Link from "next/link"
import ThemeToggle from "./theme/theme.toggle"

const pages = [
    {
        url: "/", title: "Trading Insights",
        desc: "AI phân tích xu hướng thị trường và dữ liệu traders 24h gần nhất để đưa ra các insights, cảnh báo rủi ro, và đề xuất hành động."
    },
    {
        url: "/search", title: "Trader Search",
        desc: "Cho phép người dùng tìm kiếm traders bằng ngôn ngữ tự nhiên hoặc các tiêu chí lọc cụ thể (ví dụ: MDD thấp, ROI cao)."
    },
    {
        url: "/compare", title: "Trader Comparison",
        desc: "Cung cấp phân tích so sánh song song (side-by-side) chi tiết giữa 2 Master Traders theo yêu cầu của người dùng."
    },
    {
        url: "/build", title: "Portfolio Build",
        desc: "AI tự động đề xuất một portfolio gồm 3-5 Master Traders tối ưu, kèm phân bổ vốn chi tiết, dựa trên số vốn và mức độ chấp nhận rủi ro của người dùng."
    }
]

export default function Header() {
    return (
        <header className="flex">
            <NavigationMenu viewport={false} className="p-2 mr-auto">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[600px] gap-2 md:w-[750px] md:grid-cols-2 lg:w-[1000px]">
                                {pages.map((page, index) => (
                                    <li key={index}>
                                        <NavigationMenuLink href={page.url}>
                                            <p className="text-sm leading-none font-medium">{page.title}</p>
                                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                {page.desc}
                                            </p>
                                        </NavigationMenuLink>
                                    </li>
                                    // <HeaderLink key={index} title={page.title} href={page.url}>{page.desc}</HeaderLink>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu viewport={false} className="p-2 ml-auto mr-2">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/login">
                            <p className="text-sm leading-none font-medium">Login</p></NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/register">
                            <p className="text-sm leading-none font-medium">Register</p>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ThemeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header >
    )
}