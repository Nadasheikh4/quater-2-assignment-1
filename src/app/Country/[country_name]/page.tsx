export default function CountryName({params}:  { params: { country_name: string } }  ){

    


const countries:{
    name:string,
    population:number,
    capital:string,

}[]=[{
    name :"Pakistan",
    population: 216000000,
    capital: " Islamabad"},
{
    name :"India",
    population: 1.4170000000,
    capital: " Dehli"},
    {

    name :"Palestine",
    population: 5.04400000,
    capital: " Jerusalem"},

    {name :"China",
        population: 1010101010101,
        capital: " Beijing"},
                            
{
        name :"Turkey",
    population: 1919191919,
    capital: " Ankara"},


]

function findCountry(Country_url:string){
    return countries.find(country=>country.name.toLowerCase() == Country_url.toLowerCase());

}

let result = findCountry(params.country_name);













    return (
        <div>
            {
            result ? (
                <>
             <h1>Country Name: {result.name}</h1>
             <h1>Country Capital :{result.capital}</h1>
             <h1>Country Population:{result.population }</h1>



                </>
            )
            :(
                <h1>Country Not Found</h1>
            )
            }
            




             
        
             </div>
    );
}
