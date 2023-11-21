import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {

    const [currentAccount, setCurrentAccount] = useState('as');
    const [correctNetwork, setCorrectNetwork] = useState(true);

    const connectWallet = async () => {
        try {
          const { ethereum } = window
    
          if (!ethereum) {
              alert("please install metamask!")
            return
          }

          await ethereum.request({ method : "eth_requestAccounts"});

          let chainId = await ethereum.request({ method: 'eth_chainId'})
    
          const sepoliaChainId = '0xaa36a7';
    
          if (chainId !== sepoliaChainId) {
            alert('You are not connected to the sepolia Testnet!')
            return
          }

          
    
          const accounts = await ethereum.request({ method: 'eth_accounts' })
    
          setCurrentAccount(accounts[0])
        } catch (error) {
          console.log('Error connecting to metamask', error)
        }
      }
    
      // Checks if wallet is connected to the correct network
      const checkCorrectNetwork = async () => {
        const { ethereum } = window
        let chainId = await ethereum.request({ method: 'eth_chainId' })
    
        const sepoliaChainId = "0xaa36a7";
    
        if (chainId !== sepoliaChainId) {
          setCorrectNetwork(false)
        } else {
          setCorrectNetwork(true)
        }
      }
    
      // Similar to componentDidMount and componentDidUpdate:
      useEffect(() => {
        //connectWallet();
        checkCorrectNetwork();
      });
    
      return (
        // BEM
        <div>
        {currentAccount === '' ? (
          <button
          className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
          onClick={connectWallet}
          >
          Connect Wallet
          </button>
          ) : correctNetwork ? (
            <div className="app">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          ) : (
          <div className='error'>
          <div>----------------------------------------</div>
          <div>Please connect to the Rinkeby Testnet</div>
          <div>and reload the page</div><br />
          <div><button onClick={connectWallet}>Connect Wallet</button></div>
          <div>----------------------------------------</div>
          </div>
        )}
        </div>
    
      );
    }
    

export default App