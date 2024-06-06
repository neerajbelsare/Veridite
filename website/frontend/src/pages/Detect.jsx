import {useState} from "react";

export const Detect = () => {
    const [question, setQuestion] = useState('');

    const setQuestionContent = (e) => {
        var q = e.target.value;
        setQuestion(q)
        console.log(question)
    }

    return (
        <div className="w-full h-full text-white">
            <div className="flex m-2">
                <textarea id="message" rows="4"
                          className="block p-2.5 mr-2 w-full h-full bg-dark-200 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your content"
                          onChange={(e) => setQuestionContent(e)}>
                </textarea>
                <textarea id="message" rows="4" readOnly={true}
                          className="block p-2.5 ml-2 w-full h-full bg-dark-200 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="The verdict will appear here">
                </textarea>
            </div>
            <div className="mt-4">
                <div className="flex justify-end">
                    <button className="px-6 py-2 font-semibold bg-blue-700 text-white rounded-lg mr-2">
                        Submit
                    </button>
                    <button className="px-6 py-2 font-semibold bg-blue-700 text-white rounded-lg mr-2">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
