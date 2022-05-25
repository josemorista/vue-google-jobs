export interface Job {
	"id": number;
	"title": string;
	"organization": string;
	"degree": string;
	"jobType": string;
	"locations": Array<string>;
	"minimumQualifications": Array<string>;
	"preferredQualifications": Array<string>;
	"description": Array<string>;
	"dateAdded": string;
}