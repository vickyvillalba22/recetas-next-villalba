import Card from "./Card"

const CardsGrid = ({items}) => {

  return (

    <div className="grid grid-cols-5 gap-4">

        {items.map((item, index)=>(

            <Card key={index} id={item.id} name={item.name} image={item.image} cuisine={item.cuisine} tags={item.tags} />

        ))}

    </div>

  )
}

export default CardsGrid