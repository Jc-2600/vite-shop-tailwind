import { useState, useEffect } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { Layout } from "../../Components/Layout"
import { apiUrl } from "../../api"

export function Home() {

    const [items, setItems] = useState(null)

    useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await fetch(`${apiUrl}`)
          const data = await response.json()
          setItems(data)
        } catch (error) {
          console.error(`Oh no, ocurrió un error: ${error}`);
        }
      }
      fetchData()
    },[])

    return (
       <Layout>
        <h1>Home Page</h1>
        <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            items?.map(item => (
             <Card key ={item.id} data = {item}/>
            ))
          }
        </section>
        <ProductDetail />
      </Layout>
    )
}
