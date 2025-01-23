import { useContext } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

export function Home() {

    
    const {items, setSearchByTitle, filteredItems, searchByTitle} = useContext(ShoppingCartContext)
    
    const renderView = () => {
      const itemsToRender = searchByTitle?.length > 0 ? filteredItems : items 
      if(itemsToRender?.length > 0) {
        return itemsToRender?.map(item => (
          <Card key ={item.id} data = {item}/>
         ))
      }else{
        return <h1 className="text-2xl font-medium">No products found</h1>
      }
    }
    

    return (
       <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-2xl">Exclusive Products </h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="rounded-lg border border-black w-96 p-4 mb-4 focus:outline-none"
          onChange={(event) => setSearchByTitle(event.target.value)}/>
        <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </section>
        <ProductDetail />
      </Layout>
    )
}
