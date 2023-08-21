import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
      <div className="todos">
        <Header>
          <h1>todos</h1>
          <p>Items will persist in browser local storage</p>
        </Header>
        <TodosLogic />
      </div>
  );
};
export default Home;
