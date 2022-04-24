import { Router } from "express";

const usuarios = [
    {
        Usuario: "aldomoreira",
        Contraseña: "123"
    },
    {
        Usuario: "IPC1B",
        Contraseña: "Prueba123"
    },
    {
        Usuario: "IPC1F",
        Contraseña: "Prueba456"
    }
]

const pockemones = [
    //tipo agua
    {
        Numero: "7",
        Nombre: "Squirtle",
        Tipo: "Agua",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        Ataque: "Rain-dish" 
    },
    {
        Numero: "8",
        Nombre: "Wartortle",
        Tipo: "Agua",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        Ataque: "Torrent" 
    },
    {
        Numero: "9",
        Nombre: "Blastoise",
        Tipo: "Agua",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        Ataque: "Rain-dish" 
    },
    {
        Numero: "54",
        Nombre: "Psyduck",
        Tipo: "Agua",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        Ataque: "Swift-swim" 
    },
    {
        Numero: "55",
        Nombre: "Golduck",
        Tipo: "Agua",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        Ataque: "Cloud-nine" 
    },
    //tipo fuego
    {
        Numero: "4",
        Nombre: "Charmander",
        Tipo: "Fuego",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        Ataque: "Blaze" 
    },
    {
        Numero: "5",
        Nombre: "Charmeleon",
        Tipo: "Fuego",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        Ataque: "Solar-power" 
    },
    {
        Numero: "6",
        Nombre: "Charizard",
        Tipo: "Fuego",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        Ataque: "Solar-power" 
    },
    {
        Numero: "37",
        Nombre: "Vulpix",
        Tipo: "Fuego",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        Ataque: "Drought" 
    },
    {
        Numero: "38",
        Nombre: "Ninetales",
        Tipo: "Fuego",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        Ataque: "Drought" 
    },
    //tipo hierba
    {
        Numero: "1",
        Nombre: "Bulbasaur",
        Tipo: "Hierba",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        Ataque: "Chlorophyll" 
    },
    {
        Numero: "2",
        Nombre: "Ivysaur",
        Tipo: "Hierba",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        Ataque: "Chlorophyll" 
    },
    {
        Numero: "3",
        Nombre: "Venusaur",
        Tipo: "Hierba",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        Ataque: "Chlorophyll" 
    },
    {
        Numero: "43",
        Nombre: "Oddish",
        Tipo: "Hierba",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        Ataque: "Run-away" 
    },
    {
        Numero: "44",
        Nombre: "Gloom",
        Tipo: "Hierba",
        Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        Ataque: "Stench" 
    }
]

class IndexRouter {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/pokemones', (req, res) => {
            const poke = this.obtenerPockemons();
            res.send(poke)
        })
        this.router.get('/pokemonNumero/:id', (req, res) => {
            const poke = this.obtenerPokemonPorNumero(req.params.id);
            res.send(poke);
        });
        this.router.get('/pokemonNombre/:nombre', (req, res) => {
            const poke = this.obtenerPokemonPorNombre(req.params.nombre);
            res.send(poke);
        });
        this.router.get('/pokemonesTipo/:tipo', (req, res) => {
            const poke = this.obtenerListaPockemonesTipo(req.params.tipo);
            res.send(poke);
        });
        this.router.get('/usuarios', (req, res) => {
            const poke = this.obtenerUsuarios();
            res.send(poke)
        });
    }

    obtenerPockemons(): any{
        return pockemones
    }

    obtenerPokemonPorNumero(numero: String):any{
        return pockemones.find(dato => dato.Numero == numero)
    }

    obtenerPokemonPorNombre(nombre: String):any{
        return pockemones.find(dato => dato.Nombre == nombre)
    }

    obtenerListaPockemonesTipo(tipo: String): any{
        let tipoBuscado = pockemones.filter(pockemon => pockemon.Tipo == tipo)
        return tipoBuscado            
    }
    obtenerUsuarios(): any{
        return usuarios
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router