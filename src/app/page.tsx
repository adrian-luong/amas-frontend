"use client";

import { Star } from "lucide-react";

import { fetchTopTraders } from "@/api/trader.api";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import Text from "@/components/text";
import fetchTopTradersData from "@/api/mock/fetchTopTraders";
import CommonLayout from "@/components/common-layout";
import { Avatar, AvatarFallback } from "@/components/shadcn/avatar";

export default function HomePage() {
  // const { data: response, isLoading, isError, error } = fetchTopTraders();

  // if (isLoading)
  //   return (
  //     <CommonLayout>
  //       <Text>Loading...</Text>
  //     </CommonLayout>
  //   );
  // if (isError)
  //   return (
  //     <CommonLayout>
  //       <Text>An error occurred: {error.message}</Text>
  //     </CommonLayout>
  //   );
  // if (response == null || response.data.length == 0)
  //   return (
  //     <CommonLayout>
  //       <Text>No data to display.</Text>
  //     </CommonLayout>
  //   );

  const renderNumber = (value: string | number | null) => {
    let textColor = "";
    const isPositive =
      (typeof value == "string" && value.includes("+")) ||
      (typeof value == "number" && value > 0);
    const isNegative =
      (typeof value == "string" && value.includes("-")) ||
      (typeof value == "number" && value < 0);

    if (value != null) {
      if (isPositive) textColor = "text-emerald-500";
      else if (isNegative) textColor = "text-red-500";
    }

    return <span className={textColor}>{value || "--"}</span>;
  };

  return (
    <CommonLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {fetchTopTradersData.data.map((trader, index) => (
          <Card key={index} className="hover:border-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Avatar className="z-1">
                  <AvatarFallback>{trader.name[0]}</AvatarFallback>
                </Avatar>
                <p className="ml-2">{trader.name}</p>
              </CardTitle>
              <CardDescription>Copied: {trader.copiers}</CardDescription>
              <CardAction className="flex">
                <Button variant="outline" size="icon" className="mr-2">
                  <Star />
                </Button>
                <Button className="bg-slate-500 mx-2">Mock</Button>
                <Button className="bg-yellow-500 ml-2">Copy</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="w-full flex items-center mb-6">
                <div className="w-full">
                  <Text variant="p" size="sm" className="text-muted-foreground">
                    30 Days PNL (USD)
                  </Text>
                  <Text variant="h3">{renderNumber(trader.pnl_30d)}</Text>
                </div>
                <div className="w-full bg-accent border border-grey-500 p-2 flex flex-col items-end">
                  <Text variant="p" size="sm" className="text-muted-foreground">
                    30 Days ROI
                  </Text>
                  <Text variant="h3">{renderNumber(trader.roi_30d)}</Text>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="w-full flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">
                    AUM
                  </Text>
                  <Text size="sm" className="mt-2">
                    {trader.aum}
                  </Text>
                </div>
                <div className="w-full flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">
                    MDD
                  </Text>
                  <Text size="sm" className="mt-2">
                    --%
                  </Text>
                </div>
                <div className="w-full flex flex-col justify-center">
                  <Text variant="p" size="sm" className="text-muted-foreground">
                    Sharpe Ratio
                  </Text>
                  <Text size="sm" className="mt-2">
                    --
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CommonLayout>
  );
}
