
import React from "react";
import { GithubContext } from "../../context/context";
import { Pie3D, Column3D, Doughnut2D, Bar3D } from "../Charts";
import "./Repos.css";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages).sort((a,b)=>{
    return a.stars - b.stars;
  }).map((item)=>{
    return {...item, value: item.stars}
  }).slice(0,5);

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5);

  return (
    <div className="repos-section">
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular}/>
        <Bar3D data={forks}/>
    </div>
  );
};

export default Repos;

