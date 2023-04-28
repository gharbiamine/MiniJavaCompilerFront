import { useState } from "react";

const App = () => {
  const [output, setOutput] = useState<string>("Compiler output goes here");
  return (
    <>
      <div className="flex items-center justify-center my-24  text-4xl font-semibold">
        <h1> Mini java compiler</h1>
      </div>
      <div className="flex items-center justify-center w-full h-full m-6">
        <div className="flex w-full justify-between gap-12 items-stretch h-full max-w-7xl">
          <div className="w-1/2 h-auto">
            <form>
              <div className="w-full h-auto  border border-gray-200 rounded-lg bg-gray-50">
                <div className="p-4 bg-white rounded-t-lg">
                  <textarea
                    id="comment"
                    rows={24}
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0"
                    placeholder="Your java program goes here..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-end px-3 py-2 border-t ">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                  >
                    Compile
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/2 grow">
            <div className="w-full h-full  border border-gray-200 rounded-lg bg-white">
              <p className="p-4">{output}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
