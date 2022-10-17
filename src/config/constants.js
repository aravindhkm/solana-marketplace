
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

export const devnet_rpc =  new Connection('https://solana-devnet.g.alchemy.com/v2/0RMw-JV09f1sBgoVlMLBOAX45ag_RcqN');
//export const devnet_rpc= new Connection(clusterApiUrl('devnet'),'confirmed');

export const token_program = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
