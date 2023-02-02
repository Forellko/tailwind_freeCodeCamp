import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl italic underline decoration-red-400 decoration-dotted decoration-1 underline-offset-8">
        Title 1
      </h1>
      <h2 className="text-2xl capitalize">title 2</h2>
      <h3 className="text-xl">Ttile 3</h3>
      <p className="text-base -m-[100px]">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs pt-[100px] pb-[100px] mr-[100px] ml-[100px]">
        A little note
      </p>
      <p className="truncate p-5 m-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        voluptas impedit consequuntur possimus, dolor aliquid recusandae?
        Eveniet ipsum voluptatibus deleniti ducimus, eligendi magnam nobis.
        Voluptas quisquam iste quasi voluptates amet!
      </p>
    </div>
  );
}

export default App;
