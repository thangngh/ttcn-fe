export interface IProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	quantity: number;
	categoryid: string;
	image?: File;
	createdat?: Date;
	updatedat?: Date | null;
	deletedat?: Date | null;
}