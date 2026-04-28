import { useState, useEffect} from "react";

export function useGithubLanguages(username) {
    const [languages, setLanguages] = useState({});

    useEffect(() =>{
        async function fetchRepos() {
            const res = await fetch(`https://api.github.com/users/${username}/repos`
            );
            const data = await res.json();
            const langCount = {};

            data.forEach((repo) => {
                if (repo.language) {
                    langCount[repo.language] =
                    (langCount[repo.language] || 0) + 1;
                }
            });
            setLanguages(langCount)
        }
        fetchRepos();
    },[username])
    return languages;
}