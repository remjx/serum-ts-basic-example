// Using @serum/serum and @solana/web3.js, create a limit buy order on any Serum testnet market

import dotenv from 'dotenv';
import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';

dotenv.config();
const walletPrivateKey = (process.env.WALLET_PRIVATE_KEY as string).split(',').map(value => Number(value))

async function placeAndCancelOrder() {
    const connection = new Connection(process.env.RPC_ENDPOINT as string);
    let marketAddress = new PublicKey(process.env.SERUM_DEX_SOL_USDT_PAIR_MARKET_ADDRESS as string);
    let programAddress = new PublicKey(process.env.SERUM_DEX_PROGRAM_ID as string);
    let owner = new Account(walletPrivateKey);
    let payer = new PublicKey(process.env.WALLET_SPL_TOKEN_ACCOUNT as string);
    let market = await Market.load(connection, marketAddress, {}, programAddress);
    console.log('Market loaded.')
    await market.placeOrder(connection, {
      owner,
      payer,
      side: 'buy',
      price: 1,
      size: 1,
      orderType: 'limit',
    });
    console.log('Order placed successfully.')
    
    // Retrieving open orders by owner
    let myOrders = await market.loadOrdersForOwner(connection, owner.publicKey);
    console.log('My orders:', myOrders)
    
    for (let order of myOrders) {
      await market.cancelOrder(connection, owner, order);
      console.log('Order cancelled.')
    }
    console.log('Completed.')
}

placeAndCancelOrder()
