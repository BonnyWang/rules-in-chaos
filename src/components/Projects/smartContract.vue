<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Smart Contract Vulnerabilities Detection
        </h1>
        <h2 class="projectSubTitle">
         A Program for Detecting Reentrancy and Unhandled Exceptions
        </h2>
        <p>
            Github Repo Address: <a href="https://github.com/BonnyWang/ECE455_CyberSecurity/tree/main/FinalProject">https://github.com/BonnyWang/ECE455_CyberSecurity/tree/main/FinalProject</a>
        </p>
        <h3>
            Background:
        </h3>
        <p>
            As cryptocurrencies are gaining popularity and involving more capital, the related security issues need to be examined. We are especially interested in the possible vulnerabilities of the smart contracts on Ethereum used. Since smart contracts cannot be changed after their deployment, the integrity and security of the codes deserve more attention to be checked. This project tends to study two of the nine commonly known smart contract vulnerabilities: reentrancy and unhandled exceptions. The other seven common vulnerabilities – access control, arithmetic, denial of service, bad randomness, front running, time manipulation, and short address – are not discussed in the scope of this project due to our time constraints. We developed a program to test these two vulnerabilities for smart contracts and hope to protect them from related attacks.
        </p>   
        <p>
            As hundreds of different cryptocurrencies are gaining popularity, smart contract vulnerabilities begin to become a security concern. Once the smart contract is deployed on the Ethereum network, it cannot be changed. Therefore, analyzing them before the deployment is even more important compared to traditional programs. Reentrancy attacks are one of the common threats in the Ethereum blockchain. They are also the reason behind the famous DAO attack. The reentrancy attacks occur when an adversary leverages an external call of a smart contract. Due to certain patterns in the code, they can force the contract to execute additional code and utilize a fallback function to call back to itself. This could result in draining all the assets of one address. Another vulnerability we aim to detect is unchecked exceptions. Programmers too often assume the successful execution of the low-level functions that do not automatically interrupt the program execution on failure. The unchecked low-level call return values can lead to unexpected behavior in the program and could make it vulnerable to malicious users trying to tamper with the data.
        </p>
        <h3>
            Instruction:
        </h3>     
        <p>
            <u> Use the following line to install the library:</u><br>
            $ pip install nltk<br>
            
            <u>To run the program:</u><br>
            $ python checkSmartContract.py<br>
            <u>Sample outputs of the program:</u><br>
            $ python .\checkSmartContract.py<br>
            Enter the smart contract you want to<br> check:reentrancy\0x7541b76cb60f4c60af330c208b0623b7f54bf615.sol<br>
            Have reentrancy vulnerability!<br>
            Related Lines: 29<br>
            Vulnerable Functions: Collect<br>
        </p>
        <h3>
            Dataset Used:
        </h3>
        <p>
            We are using the <a href="https://github.com/smartbugs/smartbugs/tree/master/dataset"> SB curated dataset</a> under the <a href="https://github.com/smartbugs/smartbugs">SmartBugs: A Framework to Analyze Solidity Smart Contracts</a>. It is a collection of vulnerable Solidity smart contracts organized according to the DASP taxonomy, containing 143 annotated contracts with 208 tagged vulnerabilities that can be used to evaluate the accuracy of analysis tools.
        </p>
        <h3>
            Tech Analysis:
        </h3>
        <p>
            <u>Reentrancy:</u><br>
            The reentrancy attacks are mostly related to call function. Other functions like send and transfer are considered safer since they have a gas limit. There are two types of reentrancy attacks: single-function and cross-function attacks. A single-function attack occurs when the adversary attempts to recursively call the vulnerable function. A cross-function attack occurs when the target function calls another function that the adversary desires to exploit.<br> 
            <br>
            There are several steps used to detect the reentrancy vulnerability. The first step is to detect whether the call function is presented in the smart contract. If there is no call function used, then the contract would not be vulnerable to a reentrancy attack. Other conditions need to be further checked if the call function is present and the value is not set to zero. If the balance is deducted before the call function, then the function could be considered safe and resistant to reentrancy attacks. Another prevention for the attack is using a modifier that states the function can only be called by the smart contract owner. In this case, the function will be considered to be safe even if it uses the call function improperly. If no further protection is used for the call function, then the smart contract will be determined for having the reentrancy vulnerability and the function containing the call function will be marked the vulnerable function.<br>
            <br>
            To further check the cross-function attack, the functions that call the vulnerable function will also be marked as the vulnerable function.<br>
            <br>
            <u>Unhandled Exceptions:</u><br>

            Unhandled exceptions, or in this case, we are potentially interested in unchecked return values for low-level calls – for low-level functions in Solidity like call(), callcode(), delegatecall(), and send(), as their executions fail, they will not propagate (or bubble up) and will not lead to a total reversion of the current execution – in other words, they would not throw an exception to interrupt the execution of the codes – these function would just return a false or a status code upon return. As they are simple functions, programmers usually would assume a successful execution; however, that’s not always the case – if the function fails and the return values are not checked, the failure will be ignored and the code will move on to the next step. The unhandled failure could lead to unexpected behavior of the program and make it possible for malicious attackers to potentially tamper with the data.<br>
            <br>

            In Solidity, the most common methods of handling low-level function failures – the functions (like call(), calldata(), delegatecall(), and send() ) that would not propagate or bubble up, and would not lead to a total reversion of the current execution, but just return a boolean false on failure – is by the built-in functions like require(), assert(), and revert(). Alternatively, one can also utilize the try-catch feature, or go with the classic if statement. <br>
            <br>

            To check for unhandled return values from low-level function calls, we simply filter out the lines of code that contains one of the known low-level functions, then parse through the line to check if any of the aforementioned methods are used to enforce the successful execution. Note that there is an edge case that would make this process a little bit troublesome – if the return value for a low-level call is stored in a local variable, then checked using if on the following line immediately. In this case, we would have to save the local variable name that contains the return value, and parse through the next line to see if there is an if statement – could also be a short notation – used to check the return status. We only parse the immediate next line to see if the return status is checked, because we do not want any other actions to take place in between the return of a low-level function and the checking of its return status.<br>
            <br> 


        </p>
        <h3>
            Reference:
        </h3>
        <p>
            https://github.com/enzymefinance/oyente<br>
            https://github.com/smartbugs/smartbugs<br>
            https://dasp.co/<br>
            https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21<br>
            https://www.frontiersin.org/articles/10.3389/fcomp.2021.598780/full<br>
            https://github.com/Messi-Q/Smart-Contract-Dataset<br>
            https://github.com/tagupta/Reentrancy-attack/tree/main/contracts<br>
        </p>
            
    </span>
  
</template>

<script>
export default {
    name:"smartContract"

}
</script>

<style>


</style>