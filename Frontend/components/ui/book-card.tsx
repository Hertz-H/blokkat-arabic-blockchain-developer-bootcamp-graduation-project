"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWriteContract, useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";

interface Book {
  id: bigint;
  usdPrice: bigint;
  stock: bigint;
  title: string;
  author: string;
  exists: boolean;
  imageUrl: string;
  onPurchase?: (id: bigint) => void;
}

interface BookCardProps {
  book: Book;
  contractConfig: any;
}
export function BookCard({ book, contractConfig }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { address, isConnected } = useAccount();
  const { writeContract } = useWriteContract();
  const [ethPrice, setEthPrice] = useState<string>("0");
  const [weiPrice, setWeiPrice] = useState<string>("0");

  const displayPriceUSD = `$${(Number(book.usdPrice) / 100).toFixed(2)}`;

  const inStock = Number(book.stock) > 0;

  const { data: weiAmount } = useReadContract({
    ...contractConfig,
    functionName: "usdToWei",
    args: [book.usdPrice],
  });

  useEffect(() => {
    if (weiAmount && book.usdPrice) {
      setEthPrice(
        weiAmount
          ? parseFloat(formatUnits(weiAmount as bigint, 18)).toPrecision(6)
          : "0"
      );
      setWeiPrice(weiAmount as string);
      console.log("wei amount");

      console.log(weiAmount);
    }
  }, [weiAmount, book.usdPrice]);

  const handlePurchase = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!inStock) {
      toast.error("This book is out of stock");
      return;
    }

    try {
      console.log(book.id);
      console.log(weiAmount);

      await writeContract({
        ...contractConfig,
        functionName: "purchaseBook",
        args: [book.id],
        value: weiAmount,
      });
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-t-lg image-container">
          <Image
            src={book.imageUrl}
            alt={`Cover of ${book.title}`}
            fill
            className=" h-full w-full object-contain transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <CardHeader className="pb-2 card-container  ">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-primary/60" />
            <CardDescription>{book.author}</CardDescription>
          </div>
          <CardTitle className="line-clamp-2">{book.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow card-container ">
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {book.title}
          </p>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {Number(book.stock)} {inStock ? "In Stock" : "Out of Stock"}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-2">
          <div className="grid grid-cols-3 gap-2 w-full text-center">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">USD</span>
              <span className="font-medium text-primary">
                {displayPriceUSD}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">ETH</span>
              <span className="font-medium text-primary">{ethPrice}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">WEI</span>
              <span
                className="font-medium text-primary truncate text-xs"
                title={displayPriceUSD.toString()}
              >
                {weiPrice}
              </span>
            </div>
          </div>
          <Button
            className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 purchase-button"
            onClick={handlePurchase}
          >
            <ShoppingCart size={16} />
            <span>Purchase Now</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
