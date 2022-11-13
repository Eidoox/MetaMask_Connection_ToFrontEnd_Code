import './App.css';
import { ethers } from 'ethers';
function App() {
  const connectwallet = async () => {
    const targetNetworkId = '0x1';

    if (window.ethereum) {
      const accounts = await window.ethereum.request ({
          method: "eth_requestAccounts",
      }); 
      const currentchainid = await window.ethereum.request({
        method:"eth_chainId",
      }
      )

      if (currentchainid != targetNetworkId){
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: targetNetworkId }],
        });
        window.location.reload();
      }
     
      window.ethereum.on('accountsChanged', async function (accounts) {          
          await connectwallet()
        })
        console.log(accounts[0])
    }
    else{
          alert("Metamask not installed")
        }

  } 
  return (
    <div className="App">
      <button onClick={connectwallet}> Connect wallet</button>
  
    </div>
  );
}

export default App;
