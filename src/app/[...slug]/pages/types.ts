import { StaticImageData } from 'next/image';

export type PageProps = {
	banner: StaticImageData;
	icon: string;
};

export type BlogHeaderProps = {
	banner?: StaticImageData;
	icon: string;
	title: string;
	detailRows: DetailRowProps[];
};

export type DetailRowProps = {
	label: string;
	value: string;
	icon: string;
};
