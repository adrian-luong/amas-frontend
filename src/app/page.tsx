'use client'

import { PropsWithChildren } from "react";
import { Star } from "lucide-react";

import Header from "@/components/header"
import { fetchTopTraders } from "@/api/trader.api";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import Text from "@/components/text";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      <section className="p-6">{children}</section>
    </main>
  )
}

export default function HomePage() {
  const { data: response, isLoading, isError, error } = fetchTopTraders();

  if (isLoading) return (<PageLayout><Text>Loading...</Text></PageLayout>)
  if (isError) return (<PageLayout><Text>An error occurred: {error.message}</Text></PageLayout>)
  if (response == null || response.data.length == 0) return (<PageLayout><Text>No data to display.</Text></PageLayout>)

  const renderNumber = (value: string | number | null) => {
    let textColor = '';
    const isPositive = (typeof value == "string" && value.includes("+")) || (typeof value == "number" && value > 0);
    const isNegative = (typeof value == "string" && value.includes("-")) || (typeof value == "number" && value < 0);

    if (value != null) {
      if (isPositive) textColor = "text-emerald-500";
      else if (isNegative) textColor = "text-red-500";
    }

    return <span className={textColor}>{value || '--'}</span>
  }

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-4">
        {response.data.map((trader, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{trader.name}</CardTitle>
              <CardDescription>Copied: {trader.copiers}</CardDescription>
              <CardAction className="flex">
                <Button variant="outline" size="icon" className="mr-2"><Star /></Button>
                <Button className="bg-slate-500 mx-2">Mock</Button>
                <Button className="bg-yellow-500 ml-2">Copy</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-4">
                <div className="col-span-2">
                  <Text variant="p" size="sm" className="text-muted-foreground">30 Days PNL (USD)</Text>
                  <Text variant="h3">{renderNumber(trader.pnl_30d)}</Text>
                  <Text variant="p" size="sm">
                    <span className="text-muted-foreground mr-1">30 Days ROI</span>
                    <span className="ml-1">{renderNumber(trader.roi_30d)}</span>
                  </Text>
                </div>
                <div></div>
                <div className="flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">AUM</Text>
                  <Text size="sm" className="mt-2">{trader.aum}</Text>
                </div>
                <div className="flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">MDD</Text>
                  <Text size="sm" className="mt-2">--%</Text>
                </div>
                <div className="flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">Sharpe Ratio</Text>
                  <Text size="sm" className="mt-2">--</Text>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
