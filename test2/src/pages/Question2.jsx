import React, { useState } from "react";
import axios from "axios";

const Question2 = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = "https://api.github.com/users";

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchGitHubUser = async (e) => {
    e.preventDefault();

    const user = username.trim();
    if (!user) return;

    setLoading(true);
    setError("");
    setProfile(null);
    setRepos([]);

    try {
      const [userRes, repoRes] = await Promise.all([
        axios.get(`${API}/${user}`),
        axios.get(`${API}/${user}/repos`, {
          params: { sort: "created", per_page: 5 },
        }),
      ]);

      setProfile(userRes.data);
      setRepos(repoRes.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("Please enter a valid GitHub username.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black mb-6">GitHub Search</h1>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter username..."
          className="w-[700px] max-w-full bg-gray-900 text-white px-4 py-3 rounded-md outline-none"
        />

        <button onClick={fetchGitHubUser}
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading && <p className="text-gray-600 mb-6">Loading...</p>}
      {error && <p className="text-red-600 font-bold text-2xl mb-6">{error}</p>}

      {profile && (
        <div className="bg-gray-900 text-white rounded-xl p-8 shadow-lg flex gap-8 items-center w-[900px] max-w-full mb-10">
          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="w-28 h-28 rounded-full border-4 border-blue-600"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold">{profile.login}</h2>

            <p className="text-gray-300 mt-1">
              {profile.bio || "No bio available"}
            </p>

            <div className="flex gap-4 mt-5">
              <span className="bg-gray-800 px-4 py-2 rounded-md">
                {profile.followers} Followers
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-md">
                {profile.following} Following
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-md">
                {profile.public_repos} Repos
              </span>
            </div>
          </div>
        </div>
      )}

      {profile && (
        <div className="w-[900px] max-w-full">
          <h2 className="text-2xl font-bold text-black mb-5">
            Latest Repositories
          </h2>

          <div className="flex flex-col gap-4">
            {repos.map((repo) => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                <p className="bg-gray-900 text-white px-5 py-4 rounded-md shadow hover:bg-gray-800">
                  {repo.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question2;