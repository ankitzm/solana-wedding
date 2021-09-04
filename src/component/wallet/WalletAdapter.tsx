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
// import solanaWeb3 from "@solana/web3.js/lib/index.iife.js"
import * as borsh from "borsh";
import CoreBTN from "../../core/btn/btn";
import GetSOL from "./GetSOL";

function WalletAdapter({ Data }: { Data: any }): React.ReactElement {
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
				// addLog("Disconnected from wallet")
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
	const completeData = JSON.stringify(Data);
	const transactionLength = completeData.length;
	console.log(completeData.length);

	const GreetingSchema = new Map([
		[GreetingAccount, { kind: "struct", fields: [["txt", "String"]] }],
	]);
	const sampleGreeter = new GreetingAccount();
	sampleGreeter.txt = "0".repeat(transactionLength);
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
			const husband = Data.Husband;
			const wife = Data.Wife;
			const date = Data.Date;

			const allData = {
				husband: husband,
				wife: wife,
				date: date,
			};
			let msg = JSON.stringify(allData);

			const messageAccount = new GreetingAccount();
			messageAccount.txt = msg;
			const sending_Data = new TransactionInstruction({
				keys: [
					{
						pubkey: greetedPubkey,
						isSigner: false,
						isWritable: false,
					},
				],
				programId: programID,
				data: Buffer.from(borsh.serialize(GreetingSchema, messageAccount)), // All instructions are hellos
			});
			transaction.add(sending_Data);

			transaction.recentBlockhash = (
				await connection.getRecentBlockhash()
			).blockhash;

			transaction.feePayer = pubkey;
			const signed = await selectedWallet.signTransaction(transaction);
			transaction.partialSign(newAccount);

			const signature = await connection.sendRawTransaction(signed.serialize());

			await connection.confirmTransaction(signature, "singleGossip");
			addLog("Transaction " + signature + " confirmed");

			console.log("Done!!");
			document.cookie = signature;
			// alert(document.cookie);
		} catch (e) {
			console.warn(e);
			alert(`Error: ${(e as Error).message}`);
		}
	}

	// temp wallet function
	// const url = 'https://api.devnet.solana.com'
	// var Address_new;
	// var DisplayBal;

	// function skStringToAccount(skString: any) {
	// 	return new solanaWeb3.Account(Uint8Array.from(skString.split(',')));
	// }
	// async function pageload() {
	// 	if (document.cookie === null || document.cookie === 'NONE') {
	// 		const account = new solanaWeb3.Account();
	// 		document.cookie = account.secretKey;
	// 	}
	// 	const account = skStringToAccount(document.cookie);
	// 	const address = account.publicKey.toString();
	// 	Address_new = address;
	// 	const connection = await new solanaWeb3.Connection(url, 'recent');
	// 	const balance = await connection.getBalance(account.publicKey);
	// 	const displayBal = balance +
	// 		" lamports (" +
	// 		balance / solanaWeb3.LAMPORTS_PER_SOL +
	// 		" SOL)";
	// 	DisplayBal = displayBal;

	// }

	return (
		<div className="WalletAdapter">
			<div className="Wallet">
				{/* <div>Network: {network}</div> */}
				<div>
					<select onChange={(e) => setProviderUrl(e.target.value)}>
						<option value="https://sollet.io/">Sollet</option>
						<option value="https://phantom.app/">Phantom</option>
						<option value="https://solflare.com/">Solflare</option>
					</select>
				</div>
				{selectedWallet && selectedWallet.connected ? (
					<div>
						<CoreBTN
							onClick={() => selectedWallet.disconnect()}
							text="Disconnect Wallet"
							type="light"
							id={undefined}
						/>
						<CoreBTN
							onClick={() => {
								GetSOL(selectedWallet.publicKey?.toBase58());
								console.log(selectedWallet.publicKey?.toBase58());
								
							}}
							text="Get SOL"
							type="light"
							id={undefined}
						/>
						<CoreBTN
							onClick={sendTransaction}
							text="Send Transaction"
							type="light"
							id="send-btn"
						/>
					</div>
				) : (
					<div>
						<CoreBTN
							onClick={() => setSelectedWallet(urlWallet)}
							text="Connect to Wallet"
							type="light"
							id={undefined}
						/>

						{/* <button onClick={() => setSelectedWallet(injectedWallet)}>
            Connect to Injected Wallet
		</button> */}
					</div>
				)}
			</div>

			{/* temp wallet frontend */}
			{/* 
			<div onLoad={pageload}>
				<div style={{ float: "right" }}>Address:</div> {Address_new}
				<div style={{ float: "right" }}>Balance:</div> {DisplayBal}

				<CoreBTN
					onClick={() => {
						document.cookie='NONE'
					}}
					text="Destroy" type={undefined} id={undefined} />

				<CoreBTN
					onClick={() => alert(`[ ${document.cookie} ]`)}
					text="show secret key" type={undefined} id={undefined} />
			</div> */}

			<h1>
				Register Your Marriage on <div id="main">Solana Blockchain</div>
			</h1>
			<div className="logs">
				{logs.map((log, i) => (
					<div key={i}>{log}</div>
				))}
			</div>
		</div>
	);
}

export default WalletAdapter;
