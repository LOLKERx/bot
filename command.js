const ethers =  require("ethers"); 
const {parseUnits, parseEther, Contract} = require("ethers"); 
const url = 'https://rpc.ankr.com/polygon_mumbai' 
const privateKey = '0xf18134b48a95da0abbf878ea14c148be863a431542c102a24972867adf59d7d6' 
const provider = new ethers.JsonRpcProvider(url) 
const wallet = new ethers.Wallet(privateKey, provider) 
const ERC20 = '0x245176e23effE4a44a1700efeb9e1F5d0bEe5069' 
const abi = [ 
    "function transfer(address to, uint amount)", "function balanceOf(address addr) view returns (uint)" 
] 
 
async function getBalance()  { 
    const balance = await provider.getBalance(wallet.address) 
    const balanceInEth = ethers.formatEther(balance) 
    console.log(balanceInEth.toString()) 
} 
 
async function sendEth()  { 
    const tx = await wallet.sendTransaction( { 
        to: '', 
        value: parseEther("0.001") 
    }); 
    console.log(tx.hash) 
    const receipt = await tx.wait(); 
    console.log(receipt) 
} 
 
 
async function balance() { 
    const contract = new Contract(ERC20, abi, wallet) 
    const balanceIn = await contract.balanceOf("") 
    const balanceInToken = ethers.formatEther(balanceIn) 
    console.log(balanceInToken.toString()) 
} 
getBalance() 
sendEth() 
balance()
