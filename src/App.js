// src/TokenAirdrop.js
import React, { useState, useContext } from 'react';
import Web3Context from './Web3Context';
import abi from './abi.json';




const TokenAirdrop = ({ account }) => { const {getLibrary} = useContext(Web3Context);
const [web3, setWeb3] = useState(null);
const [contract, setContract] = useState('');
const [amount, setAmount] = useState('');
const [recipients, setRecipients] = useState('.');

const connectMetamask = async () => {
  try {
    const provider = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const library = getLibrary(provider);
       setWeb3(library);
       const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
       const contractInstance = new library.eth.Contract(abi, contractAddress);
       setContract(contractInstance);

  } catch (error) {
    console.error('Error connecting to metamask:', error);

  }

};

const handleAirDrop = async () => {
  if (!web3 || !contract) {
    console.error('metamask not connected');
    return;

  }


  const recipientsArray = recipients.split('.').map(address => address.trim());
  await contract.methods.setAirdropQuantity(recipientsArray, amount).send({ from: account });





};

return (
  <div className='token-airdrop'>
    <h2>Token AirDrop</h2>
    <div className="input-group">
      <label>Recipients (seperated address):</label>
      <input type ="text" value = {recipients} onChange={(e)=> setRecipients(e.target.value)}/>
      </div>
    <div className='input-group'>
      <label>Amount:</label>
      <input type="number" value = {amount} onChange={(e) => setAmount(e.target.value)} />

    </div>

    <button onClick = {connectMetamask}>Connect Metamask</button>
    <button onClick={handleAirDrop}>AirDrop</button>
  </div>
);



};
export default TokenAirdrop;
