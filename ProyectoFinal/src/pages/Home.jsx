import ItemListContainer from "../components/Products/ItemListContainer";

const Home = ( {greetingMsg} ) => {

    const msg = "Bienvenid@ a Zebra Store"

    return (
        <div className="container">
            <h1>{greetingMsg}</h1>
            <ItemListContainer greetingMsg={msg} />
        </div>
    )
}

export default Home