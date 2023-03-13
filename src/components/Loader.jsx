import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
	const { progress } = useProgress();
	return (
		<Html>
			<div className="absolute">
				<span className="canvas-load"></span>
				<p
					style={{
						fontSize: 14,
						color: "#f1f1f1",
						fontWeight: 800,
						marginTop: 40,
					}}
				>
					{progress.toFixed(2)}%
				</p>
			</div>
		</Html>
	);
};

export default Loader;
