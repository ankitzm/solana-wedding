# Solana Wedding

![image](https://user-images.githubusercontent.com/71517788/131511440-29d208e4-3f99-4dac-be54-c40898dacc83.png)

Wedding is an eternal bond which connects two souls and is a complete new adventure for both of their lives. Its the start of a new phase as a human being and helps them both grow together.

Such bond is cherished and wishes are made that it would last forever, well guess what we made a product where you can engrave your names onto the blockchain and the names will stay on the blockchain "forever".

The end product =>
[Solana Wedding](https://solanashadii.netlify.app/)

### Solana Wedding Registry

![image](https://user-images.githubusercontent.com/71517788/132047377-3b697fb7-1713-4a8d-8c07-dfe2a8f65532.png)

Our Wedding Registry allows you to engrave your names into the blockchain. The website has multiple wallet connectivity facility. Once you connect your wallet, you will need to enter your names and the wedding date. A preview of the certificate will be generated as you enter your data.
Once all the data is entered click confirm ! It will calculate the fees you need to pay and will ask for your approval. We have minimised the fees as much as we could.

Once you approve the transaction, within a few seconds the certificate gets generated. The certificate will consist a transaction id which you can use to get the certificate again in future if you require. The transaction id can be found in your wallet's transaction history as well as on the certificate.

You can use our explorer to regenerate your certificate, you just need to input the transaction id there!!
![image](https://user-images.githubusercontent.com/71517788/132125392-e6b92559-4d3b-447a-87a8-8e2a059c5a14.png)

Congrats on getting your names engraved permanently into the blockchain! We wish you a happy married lives from our side!!

### Steps to getting the code running

The smart contract lies in the <code>program-rust/src/lib.rs</code>, you can make your changes and build the program by

```
npm run build:program-rust
```

Once built, connect to any [cluster](https://docs.solana.com/cli/choose-a-cluster) and run the deploy command which you got at the end of build command.

To get the frontend running just run the below commands

```
npm install
npm run start
```

### More about Solana

![image](https://user-images.githubusercontent.com/71517788/131513884-27a90da1-01d2-4f90-84c7-15ec93eb22f2.png)

Solana provides a decentralized network which currently offers a transaction rate of 65,000 per second. Along with the high TPS, the transaction fees is also remarkably less.
