/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useMemo, useState } from "react";
import "./WalletAdapter.css";
import Wallet from "../../dist/cjs/index";
import {
  Connection,
  SystemProgram,
  Transaction,
  PublicKey,
  clusterApiUrl,
  Keypair,
  TransactionInstruction,
  // sendAndConfirmTransaction,
} from "@solana/web3.js";
import * as borsh from "borsh";

function toHex(buffer: Buffer) {
  return Array.prototype.map
    .call(buffer, (x: number) => ("00" + x.toString(16)).slice(-2))
    .join("");
}

function WalletAdapter( {Data} : {Data:any} ): React.ReactElement {
  console.log(Data);
  
  const [logs, setLogs] = useState<string[]>([]);
  function addLog(log: string) {
    setLogs((logs) => [...logs, log]);
  }

  const network = clusterApiUrl("devnet");
  const [providerUrl, setProviderUrl] = useState("https://www.sollet.io");
  const connection = useMemo(() => new Connection(network), [network]);
  const urlWallet = useMemo(
    () => new Wallet(providerUrl, network),
    [providerUrl, network]
  );
  // const injectedWallet = useMemo(() => {
  //   try {
  //     return new Wallet(
  //       (window as unknown as { solana: unknown }).solana,
  //       network
  //     );
  //   } catch (e) {
  //     console.log(`Could not create injected wallet`, e);
  //     return null;
  //   }
  // }, [network]);
  const [selectedWallet, setSelectedWallet] = useState<
    Wallet | undefined | null
  >(undefined);
  const [, setConnected] = useState(false);
  useEffect(() => {
    if (selectedWallet) {
      selectedWallet.on("connect", () => {
        setConnected(true);
        addLog(
          `Connected to wallet ${selectedWallet.publicKey?.toBase58() ?? "--"}`
        );
      });
      selectedWallet.on("disconnect", () => {
        setConnected(false);
        addLog("Disconnected from wallet");
      });
      void selectedWallet.connect();
      return () => {
        void selectedWallet.disconnect();
      };
    }
  }, [selectedWallet]);

  class GreetingAccount {
    txt = "";
    constructor(fields: { txt: string } | undefined = undefined) {
      if (fields) {
        this.txt = fields.txt;
      }
    }
  }
  const GreetingSchema = new Map([
    [GreetingAccount, { kind: "struct", fields: [["txt", "String"]] }],
  ]);
  const sampleGreeter = new GreetingAccount();
  sampleGreeter.txt = "0".repeat(200);
  const GREETING_SIZE = borsh.serialize(GreetingSchema, sampleGreeter).length;

  let greetedPubkey: PublicKey;

  const programID = new PublicKey(
    "81MbSQG6DaoCuvqgCCzWYXP5AWUanxyFvsTodSH8vh9A"
  );
  // const GREETING_SEED = "hello";

  async function sendTransaction() {
    try {
      const pubkey = selectedWallet?.publicKey;
      if (!pubkey || !selectedWallet) {
        throw new Error("wallet not connected");
      }
      // console.log(pubkey);
      const newAccount = new Keypair();
      greetedPubkey = newAccount.publicKey;
      console.log(greetedPubkey.toBase58());

      const lamports = await connection.getMinimumBalanceForRentExemption(
        GREETING_SIZE
      );

      const instruction = new TransactionInstruction(
        SystemProgram.createAccount({
          fromPubkey: pubkey,
          newAccountPubkey: greetedPubkey,
          lamports: lamports,
          space: GREETING_SIZE,
          programId: programID,
        })
      );

      const transaction = new Transaction().add(instruction);

      ////////////////////////////////

      /////////////////////////////////
      const husband = "Chandler";
      const wife = "Monica";
      const date = "2020-02-01";

      const allData = {
        husband: husband,
        wife: wife,
        date: date,
      };
      let msg = JSON.stringify(allData);
      if (msg.length > 200) {
        throw new Error("Message must be less than 30 characters");
      }
      if (msg.length < 200) {
        msg = msg + "*".repeat(200 - msg.length);
      }

      const messageAccount = new GreetingAccount();
      messageAccount.txt = msg;
      const sending_Data = new TransactionInstruction({
        keys: [{ pubkey: greetedPubkey, isSigner: false, isWritable: false }],
        programId: programID,
        data: Buffer.from(borsh.serialize(GreetingSchema, messageAccount)), // All instructions are hellos
      });
      transaction.add(sending_Data);

      ////////////////////////////////
      addLog("Getting recent blockhash");
      transaction.recentBlockhash = (
        await connection.getRecentBlockhash()
      ).blockhash;
      addLog("Sending signature request to wallet");
      transaction.feePayer = pubkey;
      const signed = await selectedWallet.signTransaction(transaction);
      transaction.partialSign(newAccount);
      addLog("Got signature, submitting transaction");
      const signature = await connection.sendRawTransaction(signed.serialize());
      addLog("Submitted transaction " + signature + ", awaiting confirmation");
      await connection.confirmTransaction(signature, "singleGossip");
      addLog("Transaction " + signature + " confirmed");
      const balance = await connection.getBalance(greetedPubkey);
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      addLog("Balance currently: " + balance);
      ////////////////////////////////
      // const transaction2 = new Transaction().add(sending_Data);
      // addLog('Getting recent blockhash');
      // transaction2.recentBlockhash = (
      //   await connection.getRecentBlockhash()
      // ).blockhash;
      // addLog('Sending signature request to wallet');
      // transaction2.feePayer = pubkey;
      // const signed2 = await selectedWallet.signTransaction(transaction2);
      // // transaction2.partialSign(newAccount);
      // console.log(transaction2);

      // addLog('Got signature, submitting transaction');
      // const signature2 = await connection.sendRawTransaction(
      //   signed2.serialize(),
      // );
      // addLog('Submitted transaction ' + signature + ', awaiting confirmation');
      // await connection.confirmTransaction(signature2, 'singleGossip');
      // addLog('Transaction ' + signature2 + ' confirmed');
      // const balance2 = await connection.getBalance(pubkey);
      // // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      // addLog('Balance currently: ' + balance2);

      console.log("Done!!");
    } catch (e) {
      console.warn(e);
      addLog(`Error: ${(e as Error).message}`);
    }
  }

  async function signMessage() {
    try {
      if (!selectedWallet) {
        throw new Error("wallet not connected");
      }
      const message =
        "Please sign this message for proof of address ownership.";
      addLog("Sending message signature request to wallet");
      const data = new TextEncoder().encode(message);
      const signed = await selectedWallet.sign(data, "hex");
      addLog("Got signature: " + toHex(signed.signature));
    } catch (e) {
      console.warn(e);
      addLog(`Error: ${(e as Error).message}`);
    }
  }

  return (
    <div className="WalletAdapter">
      <h1>Wallet Adapter Demo</h1>
      <div>Network: {network}</div>
      <div>
        Waller provider:{" "}
        <input
          type="text"
          value={providerUrl}
          onChange={(e) => setProviderUrl(e.target.value.trim())}
        />
      </div>
      {selectedWallet && selectedWallet.connected ? (
        <div>
          <div>Wallet address: {selectedWallet.publicKey?.toBase58()}.</div>
          <button onClick={sendTransaction}>Send Transaction</button>
          <button onClick={signMessage}>Sign Message</button>
          <button onClick={() => selectedWallet.disconnect()}>
            Disconnect
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedWallet(urlWallet)}>
            Connect to Wallet
          </button>
          {/* <button onClick={() => setSelectedWallet(injectedWallet)}>
            Connect to Injected Wallet
          </button> */}
        </div>
      )}
      <hr />
      <div className="logs">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}

export default WalletAdapter;
