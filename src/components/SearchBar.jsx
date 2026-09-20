// SearchBar - glass search input
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="glass-strong rounded-2xl p-2 flex items-center gap-2">
      <svg className="w-5 h-5 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search movies..."}
        className="flex-1 bg-transparent outline-none py-3 text-white placeholder-gray-500"
      />
    </div>
  );
}