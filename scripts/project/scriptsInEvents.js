


const scriptsInEvents = {

		async MainEvent_Event20_Act1(runtime, localVars)
		{
			    const Config2 = {
			        smartContractId: "973208016204479884",
			        assetId: "11955007191311588286",
			        appName: "Wheel of Signa",
			        networkName: "Signum"
			    }
			    const Stats2 = {
			        runs: 0,
			        burnedAmount: 0,
			        lastPayouts: []
			    }
			    var burntTMGvar = 0;
			    var userTMGvar = 0;
				
			    setTimeout(requestContractData, 500)
			   
			    async function requestContractData() {
			        function decodeMemory(hexstring){
			            const retObj = {
			                longs: [],
			                strings: [],
			            }
			            for (let i=0; i< hexstring.length; i+=16) {
			                let hexlong = hexstring.slice(i,i+16);
			                let txt = "";
			                let val = 0n;
			                let mult = 1n;
			                for (let j=0; j<16; j+=2) {
			                    let byte = parseInt(hexlong.slice(j, j + 2), 16)
			                    if (byte >= 32 && byte <= 126) {
			                        txt+=String.fromCharCode(byte);
			                    }
			                    val += mult*BigInt(byte);
			                    mult *= 256n;
			                }
			                retObj.strings.push(txt);
			                retObj.longs.push(val);
			            }
			            return retObj;
			        }
			    
			        let response
			        try {
			            response = await fetch(`https://signawallet.notallmine.net/burst?requestType=getATDetails&at=${Config2.smartContractId}`)
			        } catch (error) {
			            console.log(error.message)
			            return;
			        }
			    
			        const contractInfo = await response.json();
			        if (contractInfo.machineData === undefined) {
			            return;
			        }
			    
			        const Variables = decodeMemory(contractInfo.machineData);
			        Stats2.runs = Number(Variables.longs[7])
			        Stats2.burnedAmount = Number(Variables.longs[8])
			        for (let i = 0; i < 5; i++) {
			            Stats2.lastPayouts.unshift(Number(Variables.longs[10 + ((Stats2.runs + i) % 5)]))
			        }
			        burntTMGvar = (Stats2.burnedAmount/100).toFixed(0);
					runtime.globalVars.burntTMG = burntTMGvar
			    }
			
		},

		async AtmEvent_Event3_Act3(runtime, localVars)
		{
			confirm();
		},

		async AtmEvent_Event4_Act3(runtime, localVars)
		{
			clearfields();
		},

		async AtmEvent_Event5_Act3(runtime, localVars)
		{
			withdraw(0.5);
		},

		async AtmEvent_Event6_Act3(runtime, localVars)
		{
			withdraw(1);
		},

		async AtmEvent_Event7_Act3(runtime, localVars)
		{
			withdraw(2);
		},

		async AtmEvent_Event8_Act3(runtime, localVars)
		{
			withdraw(5);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

