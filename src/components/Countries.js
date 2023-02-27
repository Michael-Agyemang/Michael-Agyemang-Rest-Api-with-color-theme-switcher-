import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { api } from "./Api"
import Filter from "./Filter"


const Countries = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchCountries = async () => {
    const countries = await api.getCountries()
    //const countries = await response.json()
    setCountries(countries)
    setIsLoading(false)
  }


  useEffect(() => {
    
    fetchCountries()
  }, [])


  return (
    <>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="countries">
          {filtered.map((country) => {
            const { numericCode, name, flags, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="flag">
                    <img src={flags.png} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                    <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      ) : (
        <section className="countries">
          {countries.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                    {name}
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Countries
