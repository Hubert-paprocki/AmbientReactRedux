import SoundTileList from "../../components/SoundTileList";
import styles from "./Counter.module.css";

export function Counter() {
	return (
		<div>
			<div className={styles.row}>
				<SoundTileList />
			</div>
		</div>
	);
}
