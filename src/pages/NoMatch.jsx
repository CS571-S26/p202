function NoMatch() {
	const colors = [
		"#5b77ff",
		"#397b13",
		"#ffae32",
		"#be1e2d"
	];

	return (
		<div
			style={{
				marginTop: "10vh",
				marginBottom: "25vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "#fdf3e3"
			}}
		>
			{colors.map((color, i) => (
				<p
					key={i}
					style={{
						margin: 0,
						fontSize: "90px",
						color: color,
						letterSpacing: "2px"
					}}
				>
					404
				</p>
			))}
		</div>
	);
}

export default NoMatch;