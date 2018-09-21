"use strict";

{
	const BEHAVIOR_CLASS = SDK.Behaviors.Straskal_Dood;
	
	BEHAVIOR_CLASS.Type = class DoodType extends SDK.IBehaviorTypeBase
	{
		constructor(sdkPlugin, iBehaviorType)
		{
			super(sdkPlugin, iBehaviorType);
		}
	};
}