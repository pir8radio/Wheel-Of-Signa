


const scriptsInEvents = {

	async MainEvent_Event58_Act3(runtime, localVars)
	{
		sendTMG();
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

