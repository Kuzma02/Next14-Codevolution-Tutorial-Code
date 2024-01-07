import React from 'react'
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}

// Dynamic Metadata
export const generateMetadata = ({params} : Props):Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}



export default function ProductDetails({ params }: {
    params: {productId: string}
}) {
  return (
    <div>Details about product { params.productId }</div>
  )
}
