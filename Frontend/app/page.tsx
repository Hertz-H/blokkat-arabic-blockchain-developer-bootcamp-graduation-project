"use client";
import { Navbar } from "@/components/navbar";
import { StoreBalance } from "@/components/store-balance";
import { useEffect } from "react";
import React, { useState } from "react";
import { BookCard } from "@/components/ui/book-card";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/constants";
import { toast } from "react-toastify";
import {
  useReadContract,
  useWriteContract,
  useAccount,
  useWatchContractEvent,
} from "wagmi";
export default function Home() {
  const { address, isConnected } = useAccount();
  const { writeContract } = useWriteContract();
  const wagmiContractConfig = {
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  };
  interface Book {
    id: bigint;
    usdPrice: bigint;
    stock: bigint;
    title: string;
    author: string;
    exists: boolean;
    imageUrl: string;
  }
  const [books, setBooks] = useState<Book[]>([]);
  const { data: booksList, isError: getAllBooksError } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getAllBooks",
  });

  const handelWithdrawFromContractBalance = async () => {
    if (!isConnected) {
      toast.warn("Please connect your wallet first!");

      return;
    }

    try {
      await writeContract({
        ...wagmiContractConfig,
        functionName: "withdraw",
      });
      handelGetContractBalance();
      console.log("withdraw successfully!");
    } catch (error) {
      console.error("withdraw failed:", error);
      toast.error("withdraw failed. Please try again.");
    }
  };
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
    } catch (getContractBalanceError) {
      console.log(`error fetching address  : ${getContractBalanceError}`);
    }
  };
  const [walletConnected, setWalletConnected] = useState(false);

  useWatchContractEvent({
    ...wagmiContractConfig,
    eventName: "BookPurchased",
    onLogs(logs: any) {
      console.log("New purchase event:", logs);
      console.log("New purchase event:", logs[0]["args"]);

      const bookId = logs[0]["args"].bookId.toString();
      const ethPaid = logs[0]["args"].ethPaid.toString();
      const usdPrice = (Number(logs[0]["args"].usdPrice) / 100).toFixed(2);
      const stock = Number(logs[0]["args"].newStock);
      const bookIdNum = Number(logs[0]["args"].bookId);
      const buyer = logs[0]["args"].buyer.toString();
      if (buyer == address) {
        console.log(`Purchase Successful!\n
          Book ID: ${bookId}\n
          Price: ${ethPaid} wei ($${usdPrice} USD)\n
          Buyer: ${logs[0]["args"].buyer}\n
          New Stock: ${logs[0]["args"].newStock}`);

        toast.success(`Purchase Successful!`);
      }
      setBooks((prevBooks: any) =>
        prevBooks.map((book: any) =>
          book.id == bookIdNum ? { ...book, stock: stock } : book
        )
      );
      console.log("in the event after purchase");
      handelGetContractBalance();
    },
  });
  useWatchContractEvent({
    ...wagmiContractConfig,
    eventName: "BalanceWithdraw",
    onLogs(logs: any) {
      console.log("New Withdraw event:", logs);
      console.log("New Withdraw event:", logs[0]["args"]);
      const ethWithdraw = logs[0]["args"].balance.toString();
      const owner = logs[0]["args"].owner.toString();
      if (owner == address) {
        console.log(`Purchase Successful!\n

          Withdraw Amount: ${ethWithdraw} wei \n
          to Address: ${owner}
          `);

        handelGetContractBalance();
        toast.success("withdrew successfully!");
      }

      handelGetContractBalance();
    },
  });
  const handelSeedBooks = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      await writeContract({
        ...wagmiContractConfig,
        functionName: "seedBooks",
      });
      console.log("Books seed  success:");
    } catch (error) {
      console.error("Books seed  failed:", error);
      alert("Books seed failed. Please try again.");
    }
  };
  const { data: ownerAddress } = useReadContract({
    ...wagmiContractConfig,
    functionName: "owner",
  });
  const isOwner = isConnected && address == ownerAddress;

  useEffect(() => {
    const fetchInitialData = async () => {
      if (isConnected) {
        if (booksList)
          try {
            console.log(booksList);
            const fetchedBooksList = booksList as Book[];

            const formattedBooks = fetchedBooksList.map((item: any) => ({
              id: BigInt(item.id),
              usdPrice: BigInt(item.usdPrice),
              stock: BigInt(item.stock),
              title: item.title,
              author: item.author,
              exists: item.exists,
              imageUrl: item.imageUrl,
            }));
            setBooks(formattedBooks);

            console.log(books);
          } catch (getAllBooksError) {
            console.log(`error fetching all books : ${getAllBooksError}`);
          }

        // await getContractBalance();
      }
    };
    fetchInitialData();
  }, [isConnected, booksList]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950">
      <Navbar />

      <div className="container mx-auto px-4 py-8 ">
        <div className="hero-container">
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Welcome to ETH BookStore
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decentralized Digital Book Store
            </p>
          </div>

          <div className="mb-12 ">
            <StoreBalance
              passedBalance={contractBalance}
              wagmiContractConfig={wagmiContractConfig}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          {isOwner && (
            <div className="flex justify-between items-center mb-8 actions-container rounded-lg border shadow-sm max-w-md mx-auto bg-slate-500/25 backdrop-blur-md border-slate-500/20  py-8 ">
              <Button
                onClick={handelSeedBooks}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 btn  rounded-md text-sm font-medium px-4 py-2"
              >
                Seed Books
              </Button>

              <Button
                onClick={handelWithdrawFromContractBalance}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 btn rounded-md text-sm font-medium px-4 py-2"
              >
                withdraw
              </Button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-4">
            {books.map((book) => (
              <BookCard
                key={book.id.toString()}
                book={book}
                contractConfig={wagmiContractConfig}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-border/10 py-6 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 ETH BookStore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
