import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                    <Navbar />

                    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                        <Header />

                        <hr className="mt-4" />

                        <TodoList />

                        <hr className="mt-4" />

                        <Footer />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
