"use client";

import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatUnits } from "viem";

import { useReadContract } from "wagmi";
interface StoreBalanceProps {
  passedBalance: any;
  wagmiContractConfig: any;
}

export function StoreBalance({
  passedBalance,
  wagmiContractConfig,
}: StoreBalanceProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("1:14:29 PM");
  const [balance, setBalance] = useState<bigint | null>(0n);

  const [ethBalance, setEthBalance] = useState<string>("0");
  const [usdBalance, setUsdBalance] = useState<string>("0");

  const {
    data: contractBalance,
    isError: getContractBalanceError,
    refetch: getContractBalance,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getContractBalance",
  });

  const handelGetContractBalance = async () => {
    try {
      await getContractBalance();
      setBalance(contractBalance as bigint);
      setUsdBalance(
        contractBalance
          ? (Number(contractBalance as bigint) / Number(weiAmount)).toFixed(2) // round to 2 decimal places
          : "0"
      );

      setEthBalance(
        contractBalance
          ? parseFloat(formatUnits(contractBalance as bigint, 18)).toPrecision(
              6
            )
          : "0"
      );
    } catch (getContractBalanceError) {
      console.log(`error fetching address  : ${getContractBalanceError}`);
    }
  };

  const refreshBalance = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      handelGetContractBalance();
      setLastUpdated(new Date().toLocaleTimeString());
    }, 1000);
  };
  const { data: weiAmount } = useReadContract({
    ...wagmiContractConfig,
    functionName: "usdToWei",
    args: [100],
  });
  useEffect(() => {
    if (passedBalance) {
      setBalance(passedBalance as bigint);
      console.log("balance");

      console.log(contractBalance);
      setUsdBalance(
        passedBalance
          ? (Number(passedBalance as bigint) / Number(weiAmount)).toFixed(2) // round to 2 decimal places
          : "0"
      );

      setEthBalance(
        passedBalance
          ? parseFloat(formatUnits(passedBalance as bigint, 18)).toPrecision(6)
          : "0"
      );
      console.log("usd balance ");

      console.log(usdBalance);
      console.log("eth balance ");

      console.log(ethBalance);
    }
  }, [passedBalance, contractBalance]);

  return (
    <Card className=" mx-auto bg-slate-500/25 backdrop-blur-md border-slate-500/20 text-white balance-store-container">
      <CardHeader className="flex flex-row items-center justify-between pb-2 balance-header">
        <CardTitle className="text-xl font-medium">Store Balance</CardTitle>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={refreshBalance}
          className="text-white/80 hover:text-white p-1 rounded-full"
        >
          <RefreshCw
            className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
          />
        </motion.button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex flex-col ">
            <span className="text-sm text-white/70 balance-lebal">
              USD Value
            </span>
            <span className="text-2xl font-bold text-green-400">
              {usdBalance}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white/70 balance-lebal">
              ETH Amount
            </span>
            <span className="text-2xl font-bold text-blue-300">
              {ethBalance}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white/70 balance-lebal">Wei</span>
            <span
              className="text-2xl font-medium text-purple-300 truncate"
              title="472914...5808"
            >
              {balance !== undefined ? balance?.toString() : ""}
            </span>
          </div>
        </div>
        <div className="text-right text-xs text-white/50 mt-2 balance-refresh">
          Last updated: {lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
}
