import PokemonCard from "./PokemonCard"

export default function PokemonContainer(){
    
    const [pokemons, setPokemons] = useState([
        'charizard',
        'zubat',
        'evee',
        'onix'
    ])
    
    
    
    return(
        <div>
            {
            pokemons.map((pokemonCorrenteDoFor)=>{
                return(
                    <PokemonCard nome={pokemonCorrenteDoFor}/>
                )
            })
        }
        </div>
    )
}