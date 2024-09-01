import { useState } from "react";
import "./styles/App.scss";
import "./styles/components.scss";
import "./components/Form/Form.scss";
import { Header, Loader, Todos } from "./components";
import { useGetTodos } from "./hooks/useGetTodos";

import { CreateInput } from "./components/Form/components/CreateInput/CreateInput";
import { SearchInput } from "./components/Form/components/SearchInput/SearchInput";

function App() {
	const { todos, isLoading, refreshTodos } = useGetTodos();

	const [isSorted, setIsSorted] = useState(false);

	const handleSortClick = () => setIsSorted(!isSorted);

	return (
		<section className="app padding--width flex--column">
			<Header />
			<form className="form flex--column">
				<SearchInput
					handleSortClick={handleSortClick}
					isSorted={isSorted}
					refreshTodos={refreshTodos}
				/>
				<CreateInput refreshTodos={refreshTodos} />
			</form>
			{isLoading ? <Loader /> : <Todos todos={todos} refreshTodos={refreshTodos} />}
		</section>
	);
}

export default App;
