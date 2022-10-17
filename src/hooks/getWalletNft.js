import React, { useState, useEffect, useReducer, Fragment } from "react";
import { programs } from "@metaplex/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { PROGRAM_ID as mpl_programId } from '@metaplex-foundation/mpl-token-metadata';
import {devnet_rpc,token_program} from '../config/constants.js';
import {walletCollectionStore,walletCollectionStates} from '../contexts/WalletNftContext.js';
import {WalletCollectionAction} from '../contexts/ActionTypes.js';
const getMintKeyAndMetadata = async(wallet) => {
    const userKey = new PublicKey(wallet);

    console.log("userKey",userKey);
    return userKey;
}

const getAllNftAddress = async(connection,wallet) => {
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

    return new Promise(resolve =>
        resolve(mintKeys));
}


const getDataFromMetdataAccount = async(connection,metadata) => {
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

const findUserMetada = (publicKey) => {
    return new Promise(resolve =>
        resolve(getAllNftAddress(devnet_rpc,publicKey)));
};

const GetWalletCollection = async(wallet) => {

    console.log("0.1");
    const [state, dispatch] = useReducer(walletCollectionStore, walletCollectionStates);

    console.log("1");
    // const userKeys = await getAllNftAddress(devnet_rpc,wallet);

    // console.log("2");
    // userKeys.then(t => {
    //     t.map(async(ele) => {
    //         console.log("ele", await(await(ele)).metadata);
    //         const metadata = await(await(ele)).metadata;
    //         const mintKey = await(await(ele)).address;
    //         try{
    //             getDataFromMetdataAccount(devnet_rpc,metadata).then(
    //                 (uri) => {
    //                     console.log("uri", uri.image);
    //                     dispatch({
    //                         type: WalletCollectionAction.ADD,
    //                         payload: {
    //                             publicKeys: mintKey,
    //                             metadataKeys: metadata,
    //                             uriStore: uri

    //                         }
    //                     });
    //                 }
    //             )
    //         }catch {}
    //     })
    // });
};


export default GetWalletCollection;