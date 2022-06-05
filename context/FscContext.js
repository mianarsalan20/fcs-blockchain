import { createContext, useState, useEffect } from "react";
import Router from "next/router";
import { useMoralis, useMoralisQuery } from "react-moralis";
//import { amazonAbi, amazonCoinAddress } from "../lib/constants";
import { ethers } from "ethers";

export const FscContext = createContext();

export const FcsProvider = ({ children }) => {
  ////////////////////////////

  const [currentAccount, setCurrentAccount] = useState("");
  const [formattedAccount, setFormattedAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [amountDue, setAmountDue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [etherscanLink, setEtherscanLink] = useState("");
  const [nickname, setNickname] = useState("");
  const [assets, setAssets] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [ownedItems, setOwnedItems] = useState([]);

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
    logout,
  } = useMoralis();

  const {
    data: userData,
    error: userDataError,
    isLoading: userDataIsLoading,
  } = useMoralisQuery("_User");

  const {
    data: assetsData,
    error: assetsDataError,
    isLoading: assetsDataIsLoading,
  } = useMoralisQuery("assets");

  //////////////////////////////////////

  return (
    <FscContext.Provider
      value={{
        //Moralis
        isAuthenticated,
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
        logout,
        //
      }}
    >
      {children}
    </FscContext.Provider>
  );
};
