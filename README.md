This repo is intended to be a working example of the [sample code](https://github.com/project-serum/serum-ts/tree/master/packages/serum#usage) from the [`serum-ts` README](https://github.com/project-serum/serum-ts/blob/master/packages/serum/README.md)

However...

# This is a work-in-progress

I'm not able to run this example successfully. Please see GitHub issues.

Pull requests are welcome!

# What does it do?

- Places a buy order for 1 SOL with 1 USDT
- Cancels the buy order

# Get started

For simplicity, this example runs on Solana mainnet-beta.

1. Create a wallet at [sollet.io](https://sollet.io) if you don't have one already.
2. Fund wallet with at least 1 SOL-wrapped USDT. I used [Raydium Swap](https://raydium.io/swap/) to convert SOL to Wrapped USDT.
2. Update `.env` with values for `WALLET_PRIVATE_KEY` and `WALLET_SPL_TOKEN_ACCOUNT`
3. `npm run start`
