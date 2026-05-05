import RecipeContainer from '@/containers/RecipeContainer'
import React from 'react'

const page = async ({params}) => {

    const { id } = await params

  return (
    <RecipeContainer id={id} />
  )
}

export default page