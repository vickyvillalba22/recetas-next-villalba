import Card from "./Card"

const CardsGrid = ({items}) => {

  return (

    <div className="grid grid-cols-3 gap-4">

        {items.map((item, index)=>(

            <Card key={index} name={item.name} image={item.image} />

        ))}

    </div>

  )
}

export default CardsGrid