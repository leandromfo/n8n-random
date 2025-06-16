import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from "n8n-workflow";

export class Random implements ICredentialType {
	name = "randomApi";
	displayName = "Random API";
	properties: INodeProperties[] = [
		{
			displayName: "API Key",
			name: "apiKey",
			type: "string",
			default: "",
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: "generic",
		properties: {
			headers: {
				Authorization: "=Bearer {{$credentials.apiKey}}",
			},
		},
	};
}
