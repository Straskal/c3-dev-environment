"use strict";

{
	C3.Behaviors.Straskal_Dood.Instance = class DoodInstance extends C3.SDKBehaviorInstanceBase
	{
		constructor(behInst, properties)
		{
			super(behInst);
			
			this._myProperty = 0;
			
			if (properties)
			{
				this._myProperty = properties[0];
			}
			
			// Opt-in to getting calls to Tick()
			this._StartTicking();
		}

		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to store for savegames
			};
		}

		LoadFromJson(o)
		{
			// load state for savegames
		}
		
		
		Tick()
		{
			const dt = this._runtime.GetDt(this._inst);
			const wi = this._inst.GetWorldInfo();
		}
		
	};
}