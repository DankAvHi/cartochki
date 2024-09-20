import { GameWrapper } from "@/widgets/GameWrapper";
import styles from "./App.module.css";

function App() {
    return (
        <main className={styles.App}>
            <div className={styles.container}>
                <GameWrapper />
            </div>
        </main>
    );
}

export default App;
