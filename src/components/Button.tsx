import Image from "next/image";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	variant: string;
	icon?: string;
};

export default function Button({ type, title, icon, variant }: ButtonProps) {
	return (
		<button
			type={type}
			className={`flexCenter gap-3 rounded-full border ${variant}`}
		>
			{icon && <Image src={icon} alt={title} width={25} height={25} />}
			<label className="bold whitespace-nowrap">{title}</label>
		</button>
	);
}
