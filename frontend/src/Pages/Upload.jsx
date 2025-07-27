function Upload() {
  return (
    <div className="m-auto p-4 text-white max-w-md">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <form className="bg-gray-800 p-6 rounded-lg">
        <input type="text" placeholder="Title" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <textarea placeholder="Description" className="w-full mb-4 p-2 rounded bg-gray-700"></textarea>
        <input type="file" className="mb-4" />
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Upload</button>
      </form>
    </div>
  );
}

export default Upload;