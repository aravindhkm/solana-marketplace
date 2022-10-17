import { programs } from "@metaplex/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { PROGRAM_ID as mpl_programId } from '@metaplex-foundation/mpl-token-metadata';
import {devnet_rpc,token_program} from '../../config/constants.js';

export const getMintKeyAndMetadata = async(wallet) => {
    const userKey = new PublicKey(wallet);

    console.log("userKey",userKey);
    return userKey;
}

export const getAllNftAddress = async(connection,wallet) => {
    const { value } = await connection.getParsedTokenAccountsByOwner(new PublicKey(wallet),{programId: token_program});

    const mintKeys = value.filter((t) => {
        const amount = t.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
        const decimals = t.account?.data?.parsed?.info?.tokenAmount?.decimals;
        return decimals === 0 && amount != 0;
    })
    .map(async(t) => {
        const address = t.account?.data?.parsed?.info?.mint;
        const metadata = await getMetaDataPda(address);
        return ({
            "mintkey":address,
            "metadata":metadata
        });           
    });

    return mintKeys;
}


export const getDataFromMetdataAccount = async(connection,metadata) => {
    const tokenmeta = await programs.metadata.Metadata.load(
        connection,
        new PublicKey(metadata)
    );

    return await(await fetch(tokenmeta.data.data.uri)).json();  
};

const getMetaDataPda = async(mint) => {
    const [pda, bump] = await PublicKey.findProgramAddress(
       [  
          Buffer.from("metadata"),
          mpl_programId.toBuffer(), 
          new PublicKey(mint).toBuffer()
       ],
          mpl_programId
    );
    
    return pda.toBase58();
}
