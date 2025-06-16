import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from "n8n-workflow";

export class RandomNode implements INodeType {
	description: INodeTypeDescription = {
		properties: [
			{
				displayName: "Min",
				name: "minNumber",
				type: "number",
				required: true,
				default: 0,
				description: "Minimum value",
			},
			{
				displayName: "Max",
				name: "maxNumber",
				type: "number",
				required: true,
				default: 99,
				description: "Maximum value.",
			},
			{
				displayName: "True Random Number Generator",
				name: "trueRandomNumberGenerator",
				type: "options",
				options: [
					{
						name: "Generate",
						value: "generate",
						description: "Genereta a number",
						action: "Genereta a number",
					},
				],
				default: "generate",
				noDataExpression: true,
			},
		],

		displayName: "Random",
		name: "random",
		icon: "file:random.svg",
		group: ["transform"],
		version: 1,
		description: "Consume Random API",
		defaults: {
			name: "Random",
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: "randomApi",
				required: true,
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const minNumber = this.getNodeParameter("minNumber", 0) as string;
		const maxNumber = this.getNodeParameter("maxNumber", 0) as string;

		const queryParams = new URLSearchParams({
			num: "1",
			min: String(minNumber),
			max: String(maxNumber),
			col: "1",
			base: "10",
			format: "plain",
			rnd: "new",
		});
		const uri = `https://www.random.org/integers/?${queryParams.toString()}`;
		const options: any = {
			headers: {
				Accept: "application/json",
			},
			method: "GET",
			uri,
			json: true,
		};
		const responseData = await this.helpers.requestWithAuthentication.call(
			this,
			"randomApi",
			options,
		);
		return [this.helpers.returnJsonArray(responseData)];
	}
}
