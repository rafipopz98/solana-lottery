import { ConnectionProvider } from "@solana/wallet-adapter-react";
import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";
import { useMemo } from "react";
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
require("@solana/wallet-adapter-react-ui/styles.css")
export default function Home() {
  const endpoint = "https://orbital-spring-sun.solana-devnet.quiknode.pro/5844d2d814beb31ff2132bc56864920050a5931c/";
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
  ], [])
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div className={style.wrapper}>
            <Header />
            <PotCard />
            <Table />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider >
  );
}
